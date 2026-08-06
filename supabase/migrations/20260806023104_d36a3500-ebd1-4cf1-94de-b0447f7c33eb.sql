CREATE TABLE public.pedidos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  resumo TEXT NOT NULL,
  total NUMERIC(12,2) NOT NULL DEFAULT 0,
  itens JSONB NOT NULL DEFAULT '[]'::jsonb,
  cliente TEXT,
  status TEXT NOT NULL DEFAULT 'aguardando',
  aceito_por TEXT,
  aceito_em TIMESTAMPTZ,
  alertas_enviados INT NOT NULL DEFAULT 0,
  ultimo_alerta_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX pedidos_status_idx ON public.pedidos (status, ultimo_alerta_em);

CREATE TABLE public.pedido_respostas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  pedido_id UUID NOT NULL REFERENCES public.pedidos(id) ON DELETE CASCADE,
  atendente TEXT NOT NULL,
  telefone TEXT NOT NULL,
  resposta TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (pedido_id, telefone)
);

GRANT ALL ON public.pedidos TO service_role;
GRANT ALL ON public.pedido_respostas TO service_role;

ALTER TABLE public.pedidos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pedido_respostas ENABLE ROW LEVEL SECURITY;