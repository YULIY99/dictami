import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA } from "@/lib/links";

export const metadata: Metadata = {
  title: "Voice Typing on Mac Without Internet | Dictami",
  description:
    "Voice type on your Mac with no internet connection. Dictami runs fully offline — recognition happens on your device, works on planes, in hotels, anywhere.",
  alternates: { canonical: "https://dictami.com/voice-typing-mac-without-internet" },
};

export default function VoiceTypingMacWithoutInternet() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Voice typing on Mac that works without internet.
        </h1>

        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          Dictami runs the recognition model directly on your Mac. No audio is sent
          anywhere. No connection is needed — not when you set it up, and not when
          you use it. It works on a plane the same way it works at your desk.
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
            <h2 className="text-[20px] font-medium tracking-tight">Why most dictation apps need the internet</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Cloud-based dictation apps — including Apple's own built-in dictation in older
              macOS versions — send your audio to a remote server to be transcribed. That
              means they fail silently on a slow connection, produce delays on a fast one,
              and stop working entirely with no signal at all.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              The reason they do this is that running a good speech recognition model used
              to require more computing power than a laptop had. Apple Silicon changed that.
              The Neural Engine in every M-series Mac can run the Whisper model in real time,
              locally, with no server involved.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">How Dictami works offline</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              When you download a language model in Settings, it's stored on your Mac.
              After that, the internet is never involved again — not for recognition, not for
              license checks, not for anything. The model loads into memory when the app
              starts, stays there, and processes your audio the instant you release the key.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Where it's useful</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              On a plane. In a train. In a hotel with unreliable Wi-Fi. In a building with
              poor signal. At a coffee shop where you don't trust the network. Anywhere you
              have your Mac and want to dictate — it works the same way.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              It's also useful for sensitive content. If you're dictating notes that you
              don't want to pass through someone else's servers, running entirely offline
              means they never do.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Same speed, no connection</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Because there's no network in the loop, speed doesn't vary with your connection.
              A typical sentence is ready in about a third of a second whether you're on
              gigabit fiber or on airplane mode.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">28 languages, all offline</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Every supported language runs on-device: English, Spanish, French, German,
              Italian, Portuguese, Dutch, Polish, Russian, Japanese, Korean, Chinese, and more.
              Automatic punctuation and capitalization work in all of them, offline.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What you need</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              macOS 13 Ventura or later on an Apple Silicon Mac — an M1 or newer. The model
              downloads once from Settings (a few minutes on a normal connection). After that,
              no internet is ever needed. No account, no sign-up, no subscription required to try it.
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
