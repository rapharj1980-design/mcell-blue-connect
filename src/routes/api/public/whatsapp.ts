import { createFileRoute } from "@tanstack/react-router";
import { createHmac, timingSafeEqual } from "crypto";

type Entrada = {
  entry?: Array<{
    changes?: Array<{
      value?: {
        messages?: Array<{
          from?: string;
          button?: { payload?: string; text?: string };
          interactive?: { button_reply?: { id?: string; title?: string } };
        }>;
      };
    }>;
  }>;
};

function assinaturaValida(raw: string, header: string | null) {
  const segredo = process.env["WHATSAPP_APP_SECRET"];
  if (!segredo) return true; // sem app secret configurado, não validamos
  if (!header?.startsWith("sha256=")) return false;
  const esperado = createHmac("sha256", segredo).update(raw).digest("hex");
  const a = Buffer.from(header.slice(7));
  const b = Buffer.from(esperado);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const Route = createFileRoute("/api/public/whatsapp")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const token = process.env["WHATSAPP_VERIFY_TOKEN"];
        if (
          url.searchParams.get("hub.mode") === "subscribe" &&
          token &&
          url.searchParams.get("hub.verify_token") === token
        ) {
          return new Response(url.searchParams.get("hub.challenge") ?? "", { status: 200 });
        }
        return new Response("Forbidden", { status: 403 });
      },

      POST: async ({ request }) => {
        const raw = await request.text();
        if (!assinaturaValida(raw, request.headers.get("x-hub-signature-256"))) {
          return new Response("Invalid signature", { status: 401 });
        }

        let payload: Entrada;
        try {
          payload = JSON.parse(raw) as Entrada;
        } catch {
          return new Response("Bad request", { status: 400 });
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { atendentePorTelefone, enviarTexto, ATENDENTES } = await import(
          "@/lib/whatsapp.server"
        );

        for (const entry of payload.entry ?? []) {
          for (const change of entry.changes ?? []) {
            for (const msg of change.value?.messages ?? []) {
              const bruto =
                msg.button?.payload ?? msg.interactive?.button_reply?.id ?? msg.button?.text ?? "";
              const [acao, pedidoId] = bruto.split(":");
              if (!pedidoId || (acao !== "ACEITAR" && acao !== "RECUSAR")) continue;

              const telefone = (msg.from ?? "").replace(/\D/g, "");
              const atendente = atendentePorTelefone(telefone);
              if (!atendente) continue;

              await supabaseAdmin.from("pedido_respostas").upsert(
                {
                  pedido_id: pedidoId,
                  atendente: atendente.nome,
                  telefone: atendente.telefone,
                  resposta: acao === "ACEITAR" ? "aceito" : "recusado",
                },
                { onConflict: "pedido_id,telefone" },
              );

              if (acao === "RECUSAR") {
                await enviarTexto(atendente.telefone, "Ok, alerta recusado. Seguimos avisando os outros.");
                continue;
              }

              // Só o primeiro "Aceitar" vence.
              const { data: aceito } = await supabaseAdmin
                .from("pedidos")
                .update({
                  status: "aceito",
                  aceito_por: atendente.nome,
                  aceito_em: new Date().toISOString(),
                })
                .eq("id", pedidoId)
                .eq("status", "aguardando")
                .select("id, resumo")
                .maybeSingle();

              if (aceito) {
                await enviarTexto(
                  atendente.telefone,
                  `✅ Você aceitou o pedido. Os alertas foram encerrados.\n\n${aceito.resumo}`,
                );
                await Promise.allSettled(
                  ATENDENTES.filter((a) => a.telefone !== atendente.telefone).map((a) =>
                    enviarTexto(a.telefone, `ℹ️ ${atendente.nome} aceitou o pedido. Alertas encerrados.`),
                  ),
                );
              } else {
                await enviarTexto(atendente.telefone, "Esse pedido já foi aceito por outro atendente.");
              }
            }
          }
        }

        return new Response("ok");
      },
    },
  },
});
