import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { playSound } from "@/lib/ui-sound";

export function CategoryNav({
  categorias,
  slug,
}: {
  categorias: readonly string[];
  slug: (s: string) => string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const rolar = useCallback((dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.7, 200), behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
      const dx = e.deltaX * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
      if (Math.abs(dx) > Math.abs(dy) || dy === 0) return;
      e.preventDefault();
      el.scrollLeft += dy;
    };

    let arrastando = false;
    let inicioX = 0;
    let inicioScroll = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      arrastando = true;
      inicioX = e.clientX;
      inicioScroll = el.scrollLeft;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!arrastando) return;
      const delta = e.clientX - inicioX;
      if (Math.abs(delta) > 4) {
        el.setPointerCapture?.(e.pointerId);
        el.classList.add("is-dragging");
      }
      el.scrollLeft = inicioScroll - delta;
    };

    const encerrar = (e?: PointerEvent) => {
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
    el.addEventListener("pointerup", encerrar);
    el.addEventListener("pointercancel", encerrar);
    el.addEventListener("pointerleave", encerrar);
    el.addEventListener("click", onClickCapture, true);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", encerrar);
      el.removeEventListener("pointercancel", encerrar);
      el.removeEventListener("pointerleave", encerrar);
      el.removeEventListener("click", onClickCapture, true);
    };
  }, [categorias]);

  return (
    <div className="group/nav relative order-3 w-full md:order-2 md:w-auto md:flex-1">
      <button
        type="button"
        aria-label="Rolar categorias para a esquerda"
        onClick={() => rolar(-1)}
        className="carousel-arrow carousel-arrow-left nav-arrow"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      </button>

      <div ref={trackRef} className="nav-track">
        {categorias.map((c) => (
          <a
            key={c}
            href={`#${slug(c)}`}
            onClick={() => playSound("tap")}
            className="whitespace-nowrap rounded-xl border border-border bg-gradient-soft px-3 py-1.5 text-sm font-semibold text-foreground shadow-card transition-all hover:-translate-y-0.5 hover:bg-gradient-brand hover:text-primary-foreground hover:shadow-glow"
          >
            {c}
          </a>
        ))}
      </div>

      <button
        type="button"
        aria-label="Rolar categorias para a direita"
        onClick={() => rolar(1)}
        className="carousel-arrow carousel-arrow-right nav-arrow"
      >
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
