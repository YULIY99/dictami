import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA } from "@/lib/links";

export const metadata: Metadata = {
  title: "Best Dictation App for Mac in 2025 | Dictami",
  description:
    "Looking for the best dictation app for Mac in 2025? Dictami runs fully on-device, works offline, supports 28 languages, and types into any app in about half a second.",
  alternates: { canonical: "https://dictami.com/best-dictation-app-mac-2025" },
};

export default function BestDictationAppMac2025() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          What makes a dictation app actually good in 2025.
        </h1>

        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          The bar for dictation apps changed when Apple Silicon arrived. On-device
          recognition is now fast enough to be genuinely useful — which means
          the best app is no longer the one with the best server. It's the one
          that gets out of the way fastest.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={PRIMARY_CTA}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep"
          >
            Download Dictami
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
            <h2 className="text-[20px] font-medium tracking-tight">What to look for</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              The things that matter in daily use are simpler than most reviews suggest.
              Speed — not benchmark speed, but the delay you feel between releasing the key
              and seeing the text. Accuracy on your accent and vocabulary. Punctuation that
              doesn't need correcting. And the ability to work without an internet connection,
              because the best moment to dictate is often not the moment you have great Wi-Fi.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">On-device vs cloud</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Cloud dictation services — including older versions of Apple's built-in
              dictation — send audio to a server and wait for a response. The result depends
              on your connection: fast internet means acceptable speed, slow internet means
              frustrating delays, no internet means it doesn't work.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              On Apple Silicon, the Neural Engine can run the Whisper recognition model
              entirely on-device, in real time. A typical sentence is ready in about a third
              of a second. That speed doesn't change based on where you are or what your
              connection is doing.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Why the hotkey matters</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              The best dictation apps use a held key — press to start, release to finish —
              rather than a toggle or a button in a separate window. A held key feels like
              a walkie-talkie: natural, low-friction, and impossible to leave running by
              accident. It also means the app disappears from your workflow entirely when
              you're not using it.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">About Dictami</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictami is built specifically for Apple Silicon. Hold the right Command key,
              speak, release — punctuated text appears in whatever app your cursor is in,
              in about half a second. The model runs on your Mac, nothing is uploaded,
              and it works with no internet connection.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              28 languages are supported at full speed: English, Spanish, French, German,
              Italian, Portuguese, Dutch, Polish, Russian, Japanese, Korean, Chinese, and more.
              No account required. One license key, checked once, never again.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What you need</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              macOS 13 Ventura or later on an Apple Silicon Mac — any M1, M2, M3, or M4
              chip. Intel Macs aren't supported. The recognition model downloads once from
              Settings and never needs updating manually.
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
