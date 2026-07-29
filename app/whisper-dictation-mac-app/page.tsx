import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinks } from "@/components/GuideLinks";

export const metadata: Metadata = {
  title: "Whisper Dictation App for Mac | Dictami",
  description:
    "Whisper dictation for Mac that runs locally. Dictami uses faster specialist models when available and falls back to Whisper for other languages.",
  alternates: { canonical: "https://dictami.com/whisper-dictation-mac-app" },
  openGraph: {
    title: "Whisper Dictation App for Mac | Dictami",
    description:
      "Whisper dictation for Mac that runs locally. Dictami uses faster specialist models when available and falls back to Whisper for other languages.",
    url: "https://dictami.com/whisper-dictation-mac-app",
  },
};

export default function WhisperDictationMacApp() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Whisper on your Mac, without the wait.
        </h1>

        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          Dictami runs OpenAI's Whisper model locally on Apple Silicon — and, for most
          languages, something faster. Whisper is the safety net that covers everything
          else, so no language is ever left without recognition.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={PRIMARY_CTA} download={DOWNLOAD_FILENAME}
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
            <h2 className="text-[20px] font-medium tracking-tight">What Whisper is good at</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Whisper is an open speech recognition model from OpenAI, and its strength is
              breadth. It handles around a hundred languages, copes with accents and
              background noise better than most, and can be run entirely offline. That last
              part is why it became the foundation for local dictation on the Mac.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Its weakness is speed. Whisper processes a recording after you finish speaking,
              and the larger models — the ones accurate enough to be worth using — take
              noticeably longer than the sentence took to say.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Why Dictami doesn't stop at Whisper</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              For the languages most people dictate in, faster models exist and they are
              genuinely better. Dictami ships three of them: a specialist for Russian, one
              covering 25 European languages including English, and one for Japanese, Korean,
              and Chinese. Each is several times quicker than Whisper on the same audio, and
              each adds punctuation on its own.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              The app picks for you. Choose your speech language and it uses the best model
              installed for it — a specialist ahead of a general one — and tells you in
              Settings which one is recommended for your language.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Where Whisper still does the work</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Whisper covers everything the fast models don't. Pick a language outside their
              range and Dictami falls back to Whisper automatically — slower, but working,
              rather than an error message. It's the difference between a tool that supports
              28 languages well and one that supports 28 languages only.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">All of it stays local</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Whichever model runs, it runs on your Mac. No audio is uploaded, no account is
              needed, and no internet connection is required after the first download. On a
              plane, on a train, or with the Wi-Fi off, the behavior is identical.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What you need</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              macOS 13 Ventura or later on an Apple Silicon Mac — an M1 or newer. Intel Macs
              aren't supported: the runtime targets the Neural Engine, which is what makes
              local recognition fast enough to be worth using.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Models download from Settings with one click. Keep as many as you like, or
              delete the ones you don't use.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <GuideLinks current="/whisper-dictation-mac-app" />
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <p className="text-[16px] text-muted">7-day trial inside the app. No card, no account.</p>
          <a
            href={PRIMARY_CTA} download={DOWNLOAD_FILENAME}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep"
          >
            Download Dictami
          </a>
        </div>
      </div>
    </div>
  );
}
