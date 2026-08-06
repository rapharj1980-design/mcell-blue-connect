import { useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Produto } from "@/data/products";
import { ProductCard } from "./ProductCard";

const VELOCIDADE = 0.4; // px por frame

export function CategoryCarousel({ itens }: { itens: Produto[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausadoAteRef = useRef(0);

  const pausar = useCallback((ms = 2000) => {
    pausadoAteRef.current = Date.now() + ms;
  }, []);

  const rolar = useCallback(
    (dir: -1 | 1) => {
      const el = trackRef.current;
      if (!el) return;
      pausar(3000);
      el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.8, 240), behavior: "smooth" });
    },
    [pausar],
  );

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (Date.now() < pausadoAteRef.current) return;
      const metade = el.scrollWidth / 2;
      if (metade <= el.clientWidth) return;
      el.scrollLeft += VELOCIDADE;
      if (el.scrollLeft >= metade) el.scrollLeft -= metade;
    };

    if (!reduzido) frame = requestAnimationFrame(tick);

    const onPause = () => pausar();

    // Roda do mouse: converte scroll vertical em horizontal
    const onWheel = (e: WheelEvent) => {
      const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
      const dx = e.deltaX * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
      pausar();
      if (Math.abs(dx) > Math.abs(dy)) return;
      if (dy === 0) return;
      e.preventDefault();
      el.scrollLeft += dy;
    };

    // Arrastar com o mouse
    let arrastando = false;
    let inicioX = 0;
    let inicioScroll = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      arrastando = true;
      inicioX = e.clientX;
      inicioScroll = el.scrollLeft;
      pausar(4000);
    };

    const onPointerMove = (e: PointerEvent) => {
      pausar();
      if (!arrastando) return;
      const delta = e.clientX - inicioX;
      if (Math.abs(delta) > 4) {
        el.setPointerCapture?.(e.pointerId);
        el.classList.add("is-dragging");
      }
      el.scrollLeft = inicioScroll - delta;
    };

    const encerrarArrasto = (e?: PointerEvent) => {
      if (!arrastando) return;
      arrastando = false;
      el.classList.remove("is-dragging");
      if (e) el.releasePointerCapture?.(e.pointerId);
    };

    const onClickCapture = (e: MouseEvent) => {
      if (el.classList.contains("is-dragging")) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", encerrarArrasto);
    el.addEventListener("pointercancel", encerrarArrasto);
    el.addEventListener("pointerleave", encerrarArrasto);
    el.addEventListener("click", onClickCapture, true);
    el.addEventListener("touchstart", onPause, { passive: true });
    el.addEventListener("touchmove", onPause, { passive: true });
    el.addEventListener("mouseenter", onPause);
    el.addEventListener("scroll", onPause, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", encerrarArrasto);
      el.removeEventListener("pointercancel", encerrarArrasto);
      el.removeEventListener("pointerleave", encerrarArrasto);
      el.removeEventListener("click", onClickCapture, true);
      el.removeEventListener("touchstart", onPause);
      el.removeEventListener("touchmove", onPause);
      el.removeEventListener("mouseenter", onPause);
      el.removeEventListener("scroll", onPause);
    };
  }, [itens, pausar]);

  return (
    <div className="group/carousel relative">
      <button
        type="button"
        aria-label="Rolar para a esquerda"
        onClick={() => rolar(-1)}
        className="carousel-arrow carousel-arrow-left"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>

      <div ref={trackRef} className="carousel-track">
        {itens.map((p) => (
          <ProductCard key={p.id} produto={p} />
        ))}
        {itens.map((p) => (
          <ProductCard key={`dup-${p.id}`} produto={p} />
        ))}
      </div>

      <button
        type="button"
        aria-label="Rolar para a direita"
        onClick={() => rolar(1)}
        className="carousel-arrow carousel-arrow-right"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
