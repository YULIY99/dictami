"use client";

/**
 * The pill is the product's signature: it is the one piece of Dictami a user
 * actually looks at while dictating. Reusing the same object on the site means
 * the thing they saw before buying is the thing that appears on their screen
 * afterwards, so it doubles as the brand mark.
 */

export type PillState = "idle" | "listening" | "thinking" | "done";

const BAR_COUNT = 13;

/** Fixed per-bar heights and speeds — a real voice is uneven, and a symmetric
 *  or randomised-every-render waveform both read as fake. */
const BARS = [
  { rest: 0.22, peak: 0.5, speed: 0.62 },
  { rest: 0.3, peak: 0.78, speed: 0.48 },
  { rest: 0.26, peak: 0.62, speed: 0.71 },
  { rest: 0.42, peak: 1.0, speed: 0.42 },
  { rest: 0.34, peak: 0.7, speed: 0.55 },
  { rest: 0.5, peak: 0.94, speed: 0.38 },
  { rest: 0.28, peak: 0.58, speed: 0.66 },
  { rest: 0.46, peak: 0.88, speed: 0.44 },
  { rest: 0.32, peak: 0.74, speed: 0.52 },
  { rest: 0.24, peak: 0.54, speed: 0.68 },
  { rest: 0.38, peak: 0.82, speed: 0.46 },
  { rest: 0.28, peak: 0.6, speed: 0.6 },
  { rest: 0.2, peak: 0.44, speed: 0.74 },
];

export function Pill({
  state = "idle",
  onDark = false,
  className = "",
}: {
  state?: PillState;
  /** Lightens the capsule so it still separates when it sits on a dark section. */
  onDark?: boolean;
  className?: string;
}) {
  const active = state === "listening";

  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full px-5 py-3 ${className}`}
      style={{
        // Deep indigo with a lit top edge and a coloured pool of light beneath,
        // rather than a flat black capsule. The inset highlight is what makes
        // it look like an object with a surface instead of a cut-out shape.
        background: onDark
          ? "linear-gradient(165deg, #3a4478, #2a3260)"
          : "linear-gradient(165deg, var(--color-deep-2), var(--color-deep))",
        boxShadow: onDark
          ? "inset 0 1px 0 rgba(255,255,255,0.2), 0 0 0 1px rgba(255,255,255,0.12), 0 20px 44px -18px rgba(106,168,255,0.5)"
          : "inset 0 1px 0 rgba(255,255,255,0.14), 0 0 0 1px rgba(27,33,67,0.9), 0 18px 40px -18px rgba(59,143,240,0.55), 0 8px 20px -10px rgba(27,33,67,0.5)",
      }}
      aria-live="polite"
      aria-label={
        active ? "Dictami is listening" : state === "thinking" ? "Transcribing" : "Dictami"
      }
    >
      <div className="flex h-6 items-center gap-[3px]" aria-hidden>
        {BARS.slice(0, BAR_COUNT).map((bar, i) => (
          <span
            key={i}
            className="w-[3px] rounded-full"
            style={{
              height: `${(active ? bar.peak : bar.rest) * 100}%`,
              background: `linear-gradient(180deg, var(--color-wave-a), var(--color-wave-b))`,
              opacity: state === "thinking" ? 0.35 : 1,
              transition: "height 140ms ease, opacity 200ms ease",
              animation: active
                ? `pill-bar ${bar.speed}s ease-in-out ${i * 0.045}s infinite alternate`
                : undefined,
            }}
          />
        ))}
      </div>

      {state === "thinking" && (
        <span className="font-mono text-[11px] tracking-wide text-white/55">0.4s</span>
      )}
      {state === "done" && (
        <span className="text-[13px] font-medium text-white/80">Inserted</span>
      )}

      <style jsx>{`
        @keyframes pill-bar {
          from {
            transform: scaleY(0.35);
          }
          to {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
}

/**
 * Small static version for the header, footer and support button.
 *
 * Drawn as an SVG on a sky-blue tile rather than three dark bars on black:
 * at 28px the old version was a black smudge, and stacked div bars could not
 * hold even stroke ends. Four strokes centred on one axis, rounded caps,
 * heights rising and falling — a waveform reads as a waveform even this small,
 * three equal sticks do not.
 */
export function PillMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-[10px] ${className}`}
      style={{
        // Sky blue, matching the buttons. What separates a real app icon from
        // a coloured square is the lighting: a brighter top-left, a lit rim
        // along the top edge, and a shadow that carries the tile's own colour
        // rather than grey.
        background:
          "radial-gradient(120% 110% at 22% 8%, #7cc0ff, #3b8ff0 58%, #2f7ddd)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -1px 2px rgba(23,60,120,0.4), 0 1px 2px rgba(23,60,120,0.25), 0 6px 14px -6px rgba(59,143,240,0.9)",
      }}
      aria-hidden
    >
      {/* Gloss across the upper half, the way macOS icons catch light. */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.3), transparent)",
        }}
      />
      {/* Sized as a fraction of the tile, not in fixed pixels, so the same
          component works at 28px in the header and large on a preview. */}
      <svg viewBox="0 0 24 24" className="relative h-1/2 w-1/2" fill="none">
        <g
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 1px 1px rgba(23,60,120,0.45))" }}
        >
          <line x1="4" y1="9.5" x2="4" y2="14.5" opacity="0.8" />
          <line x1="9.3" y1="5.5" x2="9.3" y2="18.5" />
          <line x1="14.7" y1="8" x2="14.7" y2="16" />
          <line x1="20" y1="10.5" x2="20" y2="13.5" opacity="0.8" />
        </g>
      </svg>
    </span>
  );
}
