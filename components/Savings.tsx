"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Sections";

/**
 * A calculator, not a scoreboard.
 *
 * Big animated counters are the obvious way to make a page feel alive, but the
 * usual version — "our users have dictated 4,000,000 words" — would be a
 * number we do not have and cannot verify. Doing the arithmetic for the
 * visitor instead is both honest and more persuasive: the figure is about
 * them, and they set the input themselves.
 */

/** Words a minute. Deliberately generous to typing: a fast touch typist beats
 *  40, and overstating the saving is how a calculator like this loses trust. */
const TYPING_WPM = 40;
const SPEAKING_WPM = 150;
/** Working days in a year, minus holidays. */
const WORKING_DAYS = 250;

/**
 * Named after what people actually type into, in plain nouns.
 *
 * These were "A few messages", "Email all day" and "Writing is the job". Email
 * is not where the words go any more, and "writing is the job" is an idiom that
 * a non-native reader has to stop and decode — on a page whose buyers are
 * mostly not native English speakers, that is a dead control.
 */
const PRESETS = [
  { label: "Messages", words: 200 },
  { label: "ChatGPT", words: 900 },
  { label: "Documents", words: 2000 },
];

function useCountUp(value: number, duration = 650) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    const start = performance.now();
    const origin = from.current;
    const delta = value - origin;

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // Ease-out: numbers that decelerate read as counting up, numbers that
      // move linearly read as a progress bar.
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(origin + delta * eased);
      if (t < 1) raf.current = requestAnimationFrame(step);
      else from.current = value;
    };

    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      from.current = value;
    };
  }, [value, duration]);

  return shown;
}

function formatHours(minutes: number) {
  const hours = minutes / 60;
  if (hours < 10) return hours.toFixed(1);
  return Math.round(hours).toLocaleString("en-US");
}

export function Savings() {
  const [words, setWords] = useState(800);

  const minutesTyping = words / TYPING_WPM;
  const minutesSpeaking = words / SPEAKING_WPM;
  const savedPerDay = minutesTyping - minutesSpeaking;

  const year = useCountUp(savedPerDay * WORKING_DAYS);
  const shownWords = useCountUp(words, 320);

  return (
    <section id="savings" className="border-y border-line bg-panel py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal className="text-center">
          <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-muted">
            The maths
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-[clamp(2.1rem,4.4vw,3.15rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
            Most people speak about three times faster than they type.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15.5px] leading-relaxed text-muted">
            Move the slider to however much you write in a day, and see what the
            difference adds up to.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div
            className="rounded-3xl bg-card p-8 sm:p-12"
            style={{
              boxShadow:
                "0 0 0 1px rgba(41,44,61,0.08), 0 2px 6px -2px rgba(41,44,61,0.10), 0 40px 80px -50px rgba(41,44,61,0.4)",
            }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <label htmlFor="words" className="text-[14.5px] text-muted">
                Words written per day
              </label>
              <output
                htmlFor="words"
                className="font-display text-[28px] font-medium tabular-nums tracking-tight"
              >
                {Math.round(shownWords).toLocaleString("en-US")}
              </output>
            </div>

            <input
              id="words"
              type="range"
              min={100}
              max={3000}
              step={50}
              value={words}
              onChange={(event) => setWords(Number(event.target.value))}
              className="mt-4 w-full"
              // Filled to the left of the thumb, grey to the right. A track
              // that is one gradient end to end shows no position, so the
              // control reads as decoration rather than a value.
              style={{
                background: `linear-gradient(90deg, var(--color-accent) ${
                  ((words - 100) / (3000 - 100)) * 100
                }%, rgba(41,44,61,0.13) ${((words - 100) / (3000 - 100)) * 100}%)`,
              }}
            />

            <div className="mt-4 flex flex-wrap gap-2">
              {PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setWords(preset.words)}
                  className={`rounded-full px-3.5 py-1.5 text-[13px] transition ${
                    words === preset.words
                      ? "bg-accent text-on-accent"
                      : "bg-panel text-muted hover:text-ink"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Two bars drawn to scale against each other. Three numbers in a
                row stated the result; a short bar beside a long one lets the
                reader see it before reading anything, which is the whole
                argument of the section. */}
            <div className="mt-10 space-y-5 border-t border-line pt-9">
              {[
                {
                  label: "Typing",
                  minutes: minutesTyping,
                  width: 100,
                  fill: "rgba(41,44,61,0.16)",
                  ink: "text-muted",
                },
                {
                  label: "Speaking",
                  minutes: minutesSpeaking,
                  width: (SPEAKING_WPM ? TYPING_WPM / SPEAKING_WPM : 1) * 100,
                  fill: "var(--color-accent)",
                  ink: "text-ink",
                },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex items-baseline justify-between text-[13.5px]">
                    <span className={row.ink}>{row.label}</span>
                    <span className={`tabular-nums ${row.ink}`}>
                      {Math.round(row.minutes)} min a day
                    </span>
                  </div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-panel">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: row.fill }}
                      initial={false}
                      animate={{ width: `${row.width}%` }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* One figure, not three. A year is the only horizon where the
                saving stops sounding like rounding error. */}
            <div className="mt-9 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-line pt-9">
              <span className="font-display text-[clamp(2.6rem,6vw,3.9rem)] font-normal leading-none tabular-nums tracking-[-0.03em] text-accent">
                {formatHours(year)} hours
              </span>
              <span className="text-[15.5px] text-muted">back every year</span>
            </div>

            <p className="mt-8 text-[12.5px] leading-relaxed text-muted">
              Counted at {TYPING_WPM} words a minute typed against{" "}
              {SPEAKING_WPM} spoken, over {WORKING_DAYS} working days. The
              typing figure is a generous one — most people are slower, which
              makes the real gap wider than this.
            </p>
          </div>
        </Reveal>
      </div>

      <style jsx global>{`
        /* The native track is grey and square in every browser; restyling it is
           the difference between a form control and part of the page. */
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 999px;
          outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 999px;
          background: #fff;
          cursor: grab;
          box-shadow:
            0 0 0 1px rgba(41, 44, 61, 0.12),
            0 4px 10px -2px rgba(41, 44, 61, 0.35);
        }
        input[type="range"]::-webkit-slider-thumb:active {
          cursor: grabbing;
        }
        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border: none;
          border-radius: 999px;
          background: #fff;
          cursor: grab;
          box-shadow:
            0 0 0 1px rgba(41, 44, 61, 0.12),
            0 4px 10px -2px rgba(41, 44, 61, 0.35);
        }
        input[type="range"]:focus-visible::-webkit-slider-thumb {
          outline: 2px solid var(--color-accent);
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
}
