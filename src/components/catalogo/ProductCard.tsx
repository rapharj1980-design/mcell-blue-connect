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
        <div className="flex items-center justify-center bg-gradient-soft p-2 sm:p-4">
          <img
            src={imagem}
            alt={produto.nome}
            loading="lazy"
            width={180}
            height={240}
            className="h-24 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-40"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-3 sm:gap-3 sm:p-5">
        <span className="w-fit rounded-full bg-background px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-muted-foreground shadow-neu-sm sm:px-3 sm:py-1 sm:text-[11px]">
          {produto.categoria}
        </span>

        <h3 className="text-[13px] font-bold leading-snug text-primary sm:text-base">{produto.nome}</h3>
        {produto.descricao && (
          <p className="line-clamp-3 text-[11px] leading-relaxed text-muted-foreground sm:line-clamp-4 sm:text-sm">
            {produto.descricao}
          </p>
        )}
        <div className="mt-auto flex items-center justify-center pt-2 sm:pt-4">
          <span className="price-pill font-display text-base sm:text-2xl">{produto.preco}</span>
        </div>
        <button
          type="button"
          onClick={() => {
            playSound("pop");
            adicionar(produto);
          }}
          className="btn-neu icon-pulse-parent mt-1 inline-flex items-center justify-center gap-1.5 px-2 py-2.5 text-[11px] font-bold sm:gap-2 sm:px-4 sm:py-3.5 sm:text-sm"
        >
          <ShoppingCart className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="leading-none">
            <span className="sm:hidden">Adicionar</span>
            <span className="hidden sm:inline">Adicionar ao pedido</span>
          </span>
        </button>
      </div>

    </article>
  );
}
