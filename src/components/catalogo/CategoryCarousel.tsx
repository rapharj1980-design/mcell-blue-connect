import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Produto } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function CategoryCarousel({ itens }: { itens: Produto[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [podeVoltar, setPodeVoltar] = useState(false);
  const [podeAvancar, setPodeAvancar] = useState(true);

  const atualizar = () => {
    const el = trackRef.current;
    if (!el) return;
    setPodeVoltar(el.scrollLeft > 8);
    setPodeAvancar(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    atualizar();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);
    return () => {
      el.removeEventListener("scroll", atualizar);
      window.removeEventListener("resize", atualizar);
    };
  }, []);

  const rolar = (dir: "esq" | "dir") => {
    const el = trackRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "dir" ? delta : -delta, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div ref={trackRef} className="carousel-track">
        {itens.map((p) => (
          <ProductCard key={p.id} produto={p} />
        ))}
      </div>

      {(podeVoltar || podeAvancar) && (
        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Voltar"
            onClick={() => rolar("esq")}
            disabled={!podeVoltar}
            className="carousel-arrow"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Avançar"
            onClick={() => rolar("dir")}
            disabled={!podeAvancar}
            className="carousel-arrow"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
