"use client";

import { motion } from "motion/react";

/**
 * Measured with the shipping engine on a Mac mini M1, English, median of five
 * runs after a warm-up pass, plus the 150 ms tail the recorder waits for once
 * the key is released. That tail is part of what the user feels, so leaving it
 * out would flatter the figures.
 *
 * This chart used to list six languages at 0.22–0.32 s. Those were measured on
 * clips of different lengths, so what looked like a ranking of languages was
 * really a ranking of clip durations: decode cost scales with how long you
 * speak, and every language runs at the same rate. Re-measured on identical
 * audio, all of them land within a hundredth of a second of each other.
 */
const TIMINGS = [
  { label: "A short reply", seconds: 3, total: 0.27 },
  { label: "A few sentences", seconds: 6, total: 0.36 },
  { label: "A longer thought", seconds: 12, total: 0.58 },
  { label: "A full paragraph", seconds: 24, total: 1.03 },
];

const MAX = 1.1;

export function Speed() {
  return (
    <section id="speed" className="border-y border-line bg-panel py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-cap font-medium uppercase tracking-[0.08em] text-muted">
              Speed
            </p>
            <h2 className="mt-5 font-display text-h2 font-normal leading-[1.06] tracking-[-0.03em] text-balance">
              Nothing is waiting on a server.
            </h2>
            <p className="mt-5 max-w-md text-body leading-relaxed text-muted">
              The model sits in memory on your Mac, so there’s no upload, no
              queue, and no round trip. That’s the whole reason it feels
              instant — and the reason it works the same on a plane as it does
              at your desk.
            </p>

            <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-6">
              <div>
                <dt className="text-cap text-muted">A spoken sentence</dt>
                <dd className="mt-1 font-display text-h2 font-normal tabular-nums tracking-tight">
                  0.36<span className="text-title text-muted">s</span>
                </dd>
              </div>
              <div>
                <dt className="text-cap text-muted">Data uploaded per dictation</dt>
                <dd className="mt-1 font-display text-h2 font-normal tabular-nums tracking-tight">
                  0<span className="text-title text-muted"> bytes</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-card bg-card p-6 sm:p-8">
            <p className="text-cap font-medium">
              How long you speak → how long you wait
            </p>
            <p className="mt-1 text-cap text-muted">
              Mac mini M1, from letting go of the key to the text appearing.
            </p>

            <div className="mt-7 flex flex-col gap-4">
              {TIMINGS.map((row, i) => (
                <div key={row.label} className="flex items-center gap-4">
                  <span className="w-[132px] shrink-0 text-cap text-muted">
                    {row.label}
                    {/* A literal space, not a margin: the separator has to read
                        as part of the sentence, and `ml-1` alone rendered it
                        crowded against the label — "A short reply· 3s". */}
                    <span className="tabular-nums text-ink/45">{" · "}{row.seconds}s</span>
                  </span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-panel">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "var(--color-accent)" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(row.total / MAX) * 100}%` }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.2, delay: i * 0.03, ease: "easeOut" }}
                    />
                  </div>
                  <span className="w-12 shrink-0 text-right font-mono text-cap tabular-nums">
                    {row.total.toFixed(2)}s
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-line pt-5 text-cap leading-relaxed text-muted">
              The same in every one of the 30 languages: measured on identical
              audio they land within a hundredth of a second of each other.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
