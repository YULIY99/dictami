import { HoldDemo } from "./HoldDemo";
import { WaveField } from "./WaveField";
import { PRIMARY_CTA } from "@/lib/links";
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
          <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-muted">
            For macOS · Apple Silicon
          </p>

          {/* A statement, not a description of the product category. The thing
              worth selling is the feeling of it keeping up with you. */}
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7.4vw,5rem)] font-normal leading-[1.02] tracking-[-0.035em] text-balance">
            Speak. Your text is
            <br className="hidden sm:block" /> already there.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            Hold a key, talk, let go. Punctuated text lands in whatever app your
            cursor is in — in about half a second, in 28 languages, without your
            voice leaving your Mac.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={PRIMARY_CTA}
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
