"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient background for the hero: three slow sine waves at very low opacity.
 * The reference sites put their own metaphor in the background — water for
 * Aqua — and ours is sound, so the ground breathes in the shape of a wave.
 * It has to be felt rather than looked at; anything more competes with the
 * headline.
 */
export function WaveField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const waves = [
      { amp: 26, len: 0.0042, speed: 0.0055, y: 0.52, alpha: 0.16, color: "59,123,255" },
      { amp: 34, len: 0.0031, speed: 0.0038, y: 0.58, alpha: 0.13, color: "139,92,246" },
      { amp: 18, len: 0.0057, speed: 0.0071, y: 0.47, alpha: 0.1, color: "59,123,255" },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const wave of waves) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 6) {
          const y =
            height * wave.y +
            Math.sin(x * wave.len + frame * wave.speed) * wave.amp +
            Math.sin(x * wave.len * 2.3 + frame * wave.speed * 1.6) * wave.amp * 0.28;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${wave.color},${wave.alpha})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }
      frame += 1;
      raf = requestAnimationFrame(draw);
    };
    let raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Light pooling behind the headline. On a grey ground this reads as
          depth — the page looks lit rather than filled in. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_38%,#ffffff,transparent_70%)]" />
      <div className="absolute -left-[15%] top-[10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(59,123,255,0.10),transparent_65%)] blur-2xl" />
      <div className="absolute -right-[12%] top-[28%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.09),transparent_65%)] blur-2xl" />

      <canvas ref={ref} className="relative h-full w-full" />

      {/* Fades the waves out at the edges so they never end in a hard line. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_52%_at_50%_45%,transparent,var(--color-ground)_80%)]" />
    </div>
  );
}
