// Server-only: integração com a WhatsApp Cloud API (Meta).
export type Atendente = { nome: string; telefone: string };

export const ATENDENTES: Atendente[] = [
  { nome: "Thiago", telefone: "5521970074423" },
  { nome: "Dudu", telefone: "5521970764580" },
  { nome: "Raphael", telefone: "5521982764751" },
];

export function atendentePorTelefone(telefone: string): Atendente | undefined {
  const limpo = telefone.replace(/\D/g, "");
  return ATENDENTES.find((a) => limpo.endsWith(a.telefone.slice(-8)));
}

function config() {
  const token = process.env["WHATSAPP_TOKEN"];
  const phoneId = process.env["WHATSAPP_PHONE_NUMBER_ID"];
  if (!token || !phoneId) {
    throw new Error("WhatsApp não configurado: defina WHATSAPP_TOKEN e WHATSAPP_PHONE_NUMBER_ID.");
  }
  return {
    token,
    phoneId,
    template: process.env["WHATSAPP_TEMPLATE_NAME"] || "novo_pedido",
    lang: process.env["WHATSAPP_TEMPLATE_LANG"] || "pt_BR",
  };
}

/** Parâmetros de template não aceitam quebras de linha nem tabs. */
export function achatar(texto: string) {
  return texto.replace(/\s*\n\s*/g, " | ").replace(/\s{2,}/g, " ").trim().slice(0, 1000);
}

async function enviar(body: unknown) {
  const { token, phoneId } = config();
  const res = await fetch(`https://graph.facebook.com/v21.0/${phoneId}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const texto = await res.text();
  if (!res.ok) {
    console.error(`[whatsapp] envio falhou [${res.status}]: ${texto}`);
    throw new Error(`WhatsApp API [${res.status}]: ${texto}`);
  }
  return texto;
}

/** Alerta com botões Aceitar / Não aceitar via template aprovado na Meta. */
export async function enviarAlerta(atendente: Atendente, pedidoId: string, resumo: string) {
  const { template, lang } = config();
  return enviar({
    messaging_product: "whatsapp",
    to: atendente.telefone,
    type: "template",
    template: {
      name: template,
      language: { code: lang },
      components: [
        { type: "body", parameters: [{ type: "text", text: achatar(resumo) }] },
        {
          type: "button",
          sub_type: "quick_reply",
          index: "0",
          parameters: [{ type: "payload", payload: `ACEITAR:${pedidoId}` }],
        },
        {
          type: "button",
          sub_type: "quick_reply",
          index: "1",
          parameters: [{ type: "payload", payload: `RECUSAR:${pedidoId}` }],
        },
      ],
    },
  });
}

export async function enviarTexto(telefone: string, texto: string) {
  return enviar({
    messaging_product: "whatsapp",
    to: telefone,
    type: "text",
    text: { body: texto, preview_url: false },
  });
}

/** Dispara o alerta para os três números e atualiza o contador do pedido. */
export async function dispararAlertas(pedidoId: string, resumo: string) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const resultados = await Promise.allSettled(
    ATENDENTES.map((a) => enviarAlerta(a, pedidoId, resumo)),
  );
  const enviados = resultados.filter((r) => r.status === "fulfilled").length;

  const { data } = await supabaseAdmin
    .from("pedidos")
    .select("alertas_enviados")
    .eq("id", pedidoId)
    .maybeSingle();

  await supabaseAdmin
    .from("pedidos")
    .update({
      alertas_enviados: (data?.alertas_enviados ?? 0) + 1,
      ultimo_alerta_em: new Date().toISOString(),
    })
    .eq("id", pedidoId);

  resultados.forEach((r, i) => {
    if (r.status === "rejected") {
      console.error(`[whatsapp] falha ao alertar ${ATENDENTES[i]?.nome}:`, r.reason);
    }
  });

  return { enviados, total: ATENDENTES.length };
}
