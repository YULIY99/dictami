import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA } from "@/lib/links";

export const metadata: Metadata = {
  title: "Best Dictation App for Mac Apple Silicon | Dictami",
  description:
    "Dictami is built specifically for Apple Silicon. On-device recognition runs at full speed on M1, M2, M3, and M4 chips — no cloud, no lag, no account required.",
  alternates: { canonical: "https://dictami.com/dictation-app-mac-apple-silicon" },
};

export default function DictationAppMacAppleSilicon() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          A dictation app built for Apple Silicon.
        </h1>

        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          Dictami was designed around the Neural Engine in every Apple Silicon chip.
          Recognition runs entirely on your Mac — no server, no upload, no delay from
          a network round trip. On an M1 it's already fast. On M2, M3, or M4 it's faster still.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={PRIMARY_CTA}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep"
          >
            Download for Mac
          </a>
          <Link
            href="/#pricing"
            className="inline-flex items-center rounded-full border border-line bg-card px-6 py-3 text-[15px] font-medium transition hover:border-ink/20"
          >
            See pricing →
          </Link>
        </div>

        <div className="mt-16 flex flex-col gap-10">
          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Why Apple Silicon changes dictation</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Before Apple Silicon, running a speech recognition model locally meant waiting
              several seconds per sentence — too slow to be useful. The Neural Engine built
              into every M-series chip changed that. It can run the Whisper recognition model
              at a fraction of the time it takes on Intel, which is why local dictation now
              feels instant rather than sluggish.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictami uses a runtime compiled specifically for Apple Silicon. It doesn't fall
              back to a generic CPU path — the Neural Engine does the work, and the result is
              ready in about a third of a second for a typical sentence.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">No cloud required</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Cloud dictation services exist because running recognition locally used to be
              too slow. That's no longer true on Apple Silicon. Dictami keeps the model loaded
              in memory, so when you release the key the audio is processed immediately on the
              chip. Nothing is uploaded. It works without an internet connection.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Works in any app, with one key</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Hold the dictation key, speak, release. The text appears wherever your cursor
              was — a browser tab, an email, a notes app, a code editor. Automatic punctuation
              and capitalization mean the output is ready to send without editing.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">28 languages at full speed</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Every supported language runs on the same chip at the same speed: English,
              Spanish, French, German, Italian, Portuguese, Dutch, Polish, Russian, Japanese,
              Korean, Chinese, and 16 more. No switching models. No extra downloads per language.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">M1, M2, M3, M4 — all supported</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictami requires macOS 13 Ventura or later and any Apple Silicon Mac. Intel Macs
              aren't supported — the runtime is built specifically for the Neural Engine and
              won't run on Intel. Any M-series chip works: MacBook Air, MacBook Pro, Mac mini,
              Mac Studio, or Mac Pro.
            </p>
          </section>
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <p className="text-[16px] text-muted">7-day trial inside the app. No card, no account.</p>
          <a
            href={PRIMARY_CTA}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep"
          >
            Download Dictami
          </a>
        </div>
      </div>
    </div>
  );
}
