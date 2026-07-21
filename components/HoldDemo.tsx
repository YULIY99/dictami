"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pill, type PillState } from "./Pill";

const SENTENCE =
  "Let’s move the meeting to three, and I’ll send the deck over tonight.";

/** How long the fake transcription takes. Deliberately the real number: a
 *  sentence this length is about six seconds of speech, which the engine
 *  decodes in 0.21 s, plus the 150 ms tail the recorder waits for. */
const THINKING_MS = 360;

const WORD_COUNT = SENTENCE.split(" ").length;
/** At 40 words a minute, the same generous typing speed the calculator uses. */
const TYPING_SECONDS = Math.round((WORD_COUNT / 40) * 60);

/**
 * Press and hold, speak, let go — the product's actual gesture, made
 * clickable. Showing the interaction beats describing it, and it is the one
 * thing a dictation app can demonstrate in a still browser window.
 */
export function HoldDemo() {
  const [state, setState] = useState<PillState>("idle");
  const [typed, setTyped] = useState("");
  const [hasRun, setHasRun] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  useEffect(() => clearTimers, []);

  const start = useCallback(() => {
    if (state === "thinking") return;
    clearTimers();
    setTyped("");
    setHasRun(true);
    setState("listening");
  }, [state]);

  const stop = useCallback(() => {
    if (state !== "listening") return;
    setState("thinking");
    timers.current.push(
      setTimeout(() => {
        setState("done");
        // Words, not characters: the app inserts the finished sentence, and a
        // character-by-character typewriter would misrepresent how it feels.
        const words = SENTENCE.split(" ");
        words.forEach((_, i) => {
          timers.current.push(
            setTimeout(() => setTyped(words.slice(0, i + 1).join(" ")), i * 55)
          );
        });
        timers.current.push(
          setTimeout(() => setState("idle"), words.length * 55 + 900)
        );
      }, THINKING_MS)
    );
  }, [state]);

  return (
    <div className="mx-auto w-full max-w-lg">
      {/* Stand-in for whatever app the cursor happens to be in. */}
      <div
        className="rounded-2xl bg-card"
        style={{
          // Layered rather than one soft blur: a hairline edge, a close
          // contact shadow and a wide ambient one. A single large shadow is
          // what makes a card look like a sticker.
          boxShadow:
            "0 0 0 1px rgba(41,44,61,0.08), 0 2px 6px -2px rgba(41,44,61,0.10), 0 30px 60px -30px rgba(41,44,61,0.35)",
        }}
      >
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[11px] font-medium text-muted">Messages</span>
        </div>
        <div className="min-h-[104px] px-5 py-4 text-left text-[15px] leading-relaxed">
          {typed ? (
            <span>{typed}</span>
          ) : (
            <span className="text-muted/70">
              {hasRun ? "" : "Your cursor is here."}
            </span>
          )}
          <span
            className="ml-px inline-block h-[1.15em] w-px translate-y-[0.2em] bg-ink"
            style={{ animation: "caret 1.05s steps(1) infinite" }}
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col items-center gap-4">
        <Pill state={state} />

        <button
          type="button"
          onPointerDown={start}
          onPointerUp={stop}
          onPointerLeave={() => state === "listening" && stop()}
          onKeyDown={(e) => {
            if (e.key === " " && !e.repeat) {
              e.preventDefault();
              start();
            }
          }}
          onKeyUp={(e) => {
            if (e.key === " ") {
              e.preventDefault();
              stop();
            }
          }}
          className="select-none rounded-full bg-card px-5 py-2.5 text-[14px] font-medium text-ink transition active:scale-[0.98] hover:-translate-y-px shadow-[0_0_0_1px_rgba(41,44,61,0.09),0_0_0_4px_rgba(255,255,255,0.6),0_4px_14px_-6px_rgba(41,44,61,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {state === "listening"
            ? "Listening — let go when you’re done"
            : state === "thinking"
              ? "Transcribing…"
              : "Hold to talk"}
        </button>

        {/* The payoff of the demo: the sentence they just watched appear,
            priced in the seconds it would have cost to type. Only shown once
            there is a real sentence to measure. */}
        {typed ? (
          <p className="text-[12.5px] text-muted">
            <span className="tabular-nums text-ink">{WORD_COUNT} words</span> ·
            transcribed in{" "}
            <span className="tabular-nums text-ink">
              {(THINKING_MS / 1000).toFixed(2)}s
            </span>{" "}
            · typing that takes about{" "}
            <span className="tabular-nums text-ink">{TYPING_SECONDS}s</span>
          </p>
        ) : (
          <p className="text-[12.5px] text-muted">
            In the app this is a key you hold. Here, hold the button.
          </p>
        )}
      </div>

      <style jsx global>{`
        @keyframes caret {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
