import { ShoppingCart } from "lucide-react";
import type { Produto } from "@/data/products";
import { imagensPorProduto } from "@/data/imagens";
import { playSound } from "@/lib/ui-sound";
import { useCart } from "./CartContext";

export function ProductCard({ produto }: { produto: Produto }) {
  const { adicionar } = useCart();
  const imagem = imagensPorProduto[produto.id];

  return (
    <article className="neu-card group flex flex-col overflow-hidden">
      <div className="relative h-1.5 w-full bg-gradient-brand" />
      {imagem && (
        <div className="flex items-center justify-center bg-gradient-soft p-4">
          <img
            src={imagem}
            alt={produto.nome}
            loading="lazy"
            width={180}
            height={240}
            className="h-40 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="w-fit rounded-full bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground shadow-neu-sm">
          {produto.categoria}
        </span>

        <h3 className="text-base font-bold leading-snug text-primary">{produto.nome}</h3>
        {produto.descricao && (
          <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">
            {produto.descricao}
          </p>
        )}
        <div className="mt-auto flex items-center justify-center pt-4">
          <span className="price-pill font-display text-2xl">{produto.preco}</span>
        </div>
        <button
          type="button"
          onClick={() => {
            playSound("pop");
            adicionar(produto);
          }}
          className="btn-neu icon-pulse-parent mt-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold"
        >
          <ShoppingCart className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="leading-none">Adicionar ao pedido</span>
        </button>
      </div>
    </article>
  );
}
