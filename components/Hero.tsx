import { HoldDemo } from "./HoldDemo";
import { WaveField } from "./WaveField";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { AppleMark } from "./AppleMark";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* A wash of colour under the header. Opening straight onto flat light
          grey gives the eye nothing to settle on, which is what made the top
          of the page feel empty; this tints it without adding another band. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(59,143,240,0.13), rgba(139,158,255,0.05) 45%, transparent)",
        }}
      />
      <WaveField />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          {/* The privacy claim is the reason to choose this over the dictation
              already built into the Mac, and it used to sit at the tail of the
              paragraph below — the last words of a sentence most visitors never
              finish reading. As a mark at the very top it is the first thing on
              the page, and a lock is read before any wording is. */}
          <p className="inline-flex items-center gap-2 rounded-full bg-card py-1.5 pl-2.5 pr-4 shadow-[0_0_0_1px_rgba(41,44,61,0.09),0_0_0_4px_rgba(255,255,255,0.6),0_4px_14px_-8px_rgba(41,44,61,0.25)]">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full"
              style={{
                background:
                  "radial-gradient(120% 110% at 25% 10%, #7cc0ff, #3b8ff0 60%, #2f7ddd)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)",
              }}
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                <path
                  d="M7 10V7.5a5 5 0 0 1 10 0V10"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <rect x="4.6" y="10" width="14.8" height="9.6" rx="3" fill="#fff" />
              </svg>
            </span>
            {/* The tail is dropped on a phone rather than wrapped: a two-line
                capsule reads as a paragraph in a box, and the same sentence is
                spelled out under the headline anyway. */}
            <span className="text-[13px] font-medium tracking-tight">
              Private by design
              <span className="hidden sm:inline"> — your voice never leaves your Mac</span>
            </span>
          </p>

          <p className="mt-5 font-mono text-[11.5px] uppercase tracking-[0.16em] text-muted">
            For macOS · Apple Silicon
          </p>

          {/* A statement, not a description of the product category. The thing
              worth selling is the feeling of it keeping up with you. */}
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7.4vw,5rem)] font-normal leading-[1.02] tracking-[-0.035em] text-balance">
            Speak. Your text is
            <br className="hidden sm:block" /> already there.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            Hold a key, speak, let go. Punctuated text appears in whatever app your
            cursor is in — in about half a second, in 30 languages. Recognition
            runs on your own machine, with no internet needed.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={PRIMARY_CTA} download={DOWNLOAD_FILENAME}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-[15px] font-medium text-on-accent shadow-[0_12px_28px_-14px_rgba(59,143,240,0.75)] transition hover:bg-accent-deep sm:w-auto"
            >
              <AppleMark />
              Download for Mac
            </a>
            <a
              href="#demo"
              className="w-full rounded-full bg-card px-7 py-3.5 text-[15px] font-medium transition hover:-translate-y-px shadow-[0_0_0_1px_rgba(41,44,61,0.09),0_0_0_4px_rgba(255,255,255,0.6),0_4px_14px_-6px_rgba(41,44,61,0.22)] sm:w-auto"
            >
              Watch it work
            </a>
          </div>

          <p className="mt-4 text-[13px] text-muted">
            7-day trial inside the app · no account · macOS 13+
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <HoldDemo />
        </div>
      </div>
    </section>
  );
}
