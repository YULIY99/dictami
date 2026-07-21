"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Sections";

/**
 * A calculator, not a scoreboard.
 *
 * The obvious way to make a page feel alive is a big counter — "our users have
 * dictated 4,000,000 words" — but that is a number we do not have and cannot
 * verify. Doing the arithmetic for the visitor is both honest and more
 * persuasive: the figure is about them, and they set the input themselves.
 *
 * The hard part is the input. An earlier version asked for "words written per
 * day" and stopped there, which nobody can answer — people do not count their
 * words. Every number on screen now says what it means in something familiar:
 * words carry their page count, minutes are written the way people say them.
 */

/** Words a minute. Deliberately generous to typing: the widely reported adult
 *  average is 40 WPM, and overstating the saving is how a calculator like this
 *  loses trust. */
const TYPING_WPM = 40;
/** The conversational rate published by the National Center for Voice and
 *  Speech, and the figure most sources converge on. */
const SPEAKING_WPM = 150;
/** Working days in a year, minus weekends and holidays. */
const WORKING_DAYS = 250;
/** Standard manuscript page — the unit a reader can actually picture. */
const WORDS_PER_PAGE = 250;

const MIN_WORDS = 200;
/** Someone dictating all day genuinely reaches five figures, and a slider that
 *  stopped at 3,000 told those people the product was not meant for them. */
const MAX_WORDS = 10000;

/**
 * Named after what people type into, in plain nouns.
 *
 * These were "A few messages", "Email all day" and "Writing is the job". Email
 * is not where the words go any more, and "writing is the job" is an idiom a
 * non-native reader has to stop and decode — on a page whose buyers are mostly
 * not native English speakers, that is a dead control.
 */
const PRESETS = [
  { label: "Messages and chat", words: 500 },
  { label: "Prompts and email", words: 2000 },
  { label: "Writing all day", words: 6000 },
];

function useCountUp(value: number, duration = 650) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    // A hidden tab gets no animation frames, so an in-flight count would freeze
    // at whatever number it had reached and never correct itself — the value
    // does not change again, so nothing restarts the animation. Switch tabs
    // mid-drag and you come back to a figure that is simply wrong.
    if (typeof document !== "undefined" && document.hidden) {
      from.current = value;
      setShown(value);
      return;
    }

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

/** Minutes written the way people say them: "45 min", "2 h 10 m". */
function clock(minutes: number) {
  const total = Math.round(minutes);
  if (total < 60) return `${total} min`;
  const hours = Math.floor(total / 60);
  const rest = total % 60;
  return rest === 0 ? `${hours} h` : `${hours} h ${rest} m`;
}

function wholeHours(minutes: number) {
  return Math.round(minutes / 60).toLocaleString("en-US");
}

export function Savings() {
  const [words, setWords] = useState(2000);

  const minutesTyping = words / TYPING_WPM;
  const minutesSpeaking = words / SPEAKING_WPM;
  const savedPerDay = minutesTyping - minutesSpeaking;

  const shownWords = useCountUp(words, 320);
  const typed = useCountUp(minutesTyping, 420);
  const spoken = useCountUp(minutesSpeaking, 420);
  const year = useCountUp(savedPerDay * WORKING_DAYS);

  const pages = words / WORDS_PER_PAGE;
  const fill = ((words - MIN_WORDS) / (MAX_WORDS - MIN_WORDS)) * 100;

  return (
    <section id="savings" className="border-y border-line bg-panel py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal className="text-center">
          <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-muted">
            The maths
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-[clamp(2.1rem,4.4vw,3.15rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
            You speak about three times faster than you type.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15.5px] leading-relaxed text-muted">
            Set the slider to roughly what you write on a normal working day.
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
            <div className="flex flex-wrap items-end justify-between gap-3">
              <label htmlFor="words" className="text-[14.5px] text-muted">
                What you write in a day
              </label>
              <div className="text-right">
                <output
                  htmlFor="words"
                  className="block font-display text-[30px] font-medium leading-none tabular-nums tracking-tight"
                >
                  {Math.round(shownWords).toLocaleString("en-US")} words
                </output>
                {/* A word count means nothing on its own — nobody counts their
                    words. Pages move with the slider and make the top number
                    answerable at all. */}
                <span className="mt-2 block text-[13px] text-muted">
                  about {pages < 2 ? pages.toFixed(1) : Math.round(pages)}{" "}
                  {Math.round(pages) === 1 && pages < 2 ? "page" : "pages"} of text
                </span>
              </div>
            </div>

            <input
              id="words"
              type="range"
              min={MIN_WORDS}
              max={MAX_WORDS}
              step={100}
              value={words}
              onChange={(event) => setWords(Number(event.target.value))}
              className="mt-5 w-full"
              // Filled to the left of the thumb, grey to the right. A track
              // that is one gradient end to end shows no position at all.
              style={{
                background: `linear-gradient(90deg, var(--color-accent) ${fill}%, rgba(41,44,61,0.13) ${fill}%)`,
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

            {/* Two bars drawn to scale against each other. Numbers alone made
                the reader do the comparison; a short bar beside a long one is
                the comparison. */}
            <div className="mt-11 space-y-6 border-t border-line pt-10">
              {[
                {
                  label: "Typing it",
                  time: clock(typed),
                  width: 100,
                  fill: "rgba(41,44,61,0.18)",
                  strong: false,
                },
                {
                  label: "Saying it",
                  time: clock(spoken),
                  width: (TYPING_WPM / SPEAKING_WPM) * 100,
                  fill: "var(--color-accent)",
                  strong: true,
                },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex items-baseline justify-between">
                    <span
                      className={`text-[14.5px] ${
                        row.strong ? "font-medium text-ink" : "text-muted"
                      }`}
                    >
                      {row.label}
                    </span>
                    <span
                      className={`font-display text-[19px] tabular-nums tracking-tight ${
                        row.strong ? "text-accent" : "text-muted"
                      }`}
                    >
                      {row.time}
                    </span>
                  </div>
                  <div className="mt-2.5 h-3 overflow-hidden rounded-full bg-panel">
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

            {/* One figure, not three. A day's saving sounds like rounding
                error; a year is where it becomes a reason to buy. */}
            <div className="mt-10 border-t border-line pt-10">
              <p className="text-[14.5px] text-muted">
                {clock(savedPerDay)} back every working day — that is
              </p>
              <p className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-display text-[clamp(2.8rem,6.5vw,4.2rem)] font-normal leading-none tabular-nums tracking-[-0.035em] text-accent">
                  {wholeHours(year)} hours
                </span>
                <span className="text-[16px] text-muted">a year</span>
              </p>
            </div>

            <p className="mt-9 text-[12.5px] leading-relaxed text-muted">
              Counted at {TYPING_WPM} words a minute typed against{" "}
              {SPEAKING_WPM} spoken, over {WORKING_DAYS} working days, at{" "}
              {WORDS_PER_PAGE} words to a page. {TYPING_WPM} WPM is the reported
              adult average — if you type slower than that, the gap is wider
              than this shows.
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
          width: 26px;
          height: 26px;
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
          width: 26px;
          height: 26px;
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
