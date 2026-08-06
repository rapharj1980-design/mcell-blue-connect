import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const itemSchema = z.object({
  nome: z.string().min(1).max(200),
  qtd: z.number().int().min(1).max(999),
  preco: z.number().min(0).max(1_000_000),
});

const pedidoSchema = z.object({
  itens: z.array(itemSchema).min(1).max(200),
  total: z.number().min(0).max(10_000_000),
  resumo: z.string().min(1).max(4000),
});

export const registrarPedido = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => pedidoSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { dispararAlertas } = await import("./whatsapp.server");

    const { data: pedido, error } = await supabaseAdmin
      .from("pedidos")
      .insert({
        resumo: data.resumo,
        total: data.total,
        itens: data.itens,
        status: "aguardando",
      })
      .select("id")
      .single();

    if (error || !pedido) {
      console.error("[pedidos] falha ao registrar:", error);
      return { ok: false as const, id: null, alertas: 0 };
    }

    try {
      const { enviados } = await dispararAlertas(pedido.id, data.resumo);
      return { ok: true as const, id: pedido.id, alertas: enviados };
    } catch (err) {
      console.error("[pedidos] falha ao alertar atendentes:", err);
      return { ok: true as const, id: pedido.id, alertas: 0 };
    }
  });
