import { useRef, useEffect } from "react";
import type { Produto } from "@/data/products";
import { ProductCard } from "./ProductCard";

const VELOCIDADE = 0.4; // px por frame

export function CategoryCarousel({ itens }: { itens: Produto[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let pausadoAte = 0;

    const pausar = () => {
      pausadoAte = Date.now() + 2000;
    };

    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (Date.now() < pausadoAte) return;
      const metade = el.scrollWidth / 2;
      if (metade <= el.clientWidth) return;
      el.scrollLeft += VELOCIDADE;
      if (el.scrollLeft >= metade) el.scrollLeft -= metade;
    };

    frame = requestAnimationFrame(tick);

    el.addEventListener("pointerdown", pausar);
    el.addEventListener("pointermove", pausar);
    el.addEventListener("wheel", pausar, { passive: true });
    el.addEventListener("touchstart", pausar, { passive: true });
    el.addEventListener("touchmove", pausar, { passive: true });
    el.addEventListener("mouseenter", pausar);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointerdown", pausar);
      el.removeEventListener("pointermove", pausar);
      el.removeEventListener("wheel", pausar);
      el.removeEventListener("touchstart", pausar);
      el.removeEventListener("touchmove", pausar);
      el.removeEventListener("mouseenter", pausar);
    };
  }, [itens]);

  return (
    <div className="relative">
      <div ref={trackRef} className="carousel-track">
        {itens.map((p) => (
          <ProductCard key={p.id} produto={p} />
        ))}
        {itens.map((p) => (
          <ProductCard key={`dup-${p.id}`} produto={p} />
        ))}
      </div>
    </div>
  );
}
