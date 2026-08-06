import { createFileRoute } from "@tanstack/react-router";

/**
 * Reenvia os alertas dos pedidos ainda não aceitos.
 * Chamado pelo agendador a cada 30 segundos.
 */
export const Route = createFileRoute("/api/public/hooks/reenviar-alertas")({
  server: {
    handlers: {
      POST: async () => {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { dispararAlertas } = await import("@/lib/whatsapp.server");

        const limite = new Date(Date.now() - 28_000).toISOString();
        const { data: pendentes, error } = await supabaseAdmin
          .from("pedidos")
          .select("id, resumo, ultimo_alerta_em")
          .eq("status", "aguardando")
          .gt("created_at", new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString())
          .or(`ultimo_alerta_em.is.null,ultimo_alerta_em.lt.${limite}`)
          .limit(20);

        if (error) {
          console.error("[alertas] falha ao buscar pendentes:", error);
          return Response.json({ ok: false, error: error.message }, { status: 500 });
        }

        let reenviados = 0;
        for (const pedido of pendentes ?? []) {
          try {
            await dispararAlertas(pedido.id, pedido.resumo);
            reenviados += 1;
          } catch (err) {
            console.error(`[alertas] falha no pedido ${pedido.id}:`, err);
          }
        }

        return Response.json({ ok: true, reenviados });
      },
    },
  },
});
