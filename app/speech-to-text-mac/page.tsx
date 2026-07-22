import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA } from "@/lib/links";

export const metadata: Metadata = {
  title: "Speech to Text for Mac | Dictami",
  description:
    "Turn speech into text on Mac in any app. On-device recognition, automatic punctuation, 28 languages, global hotkey. No account required.",
  alternates: { canonical: "https://dictami.com/speech-to-text-mac" },
};

export default function SpeechToTextMac() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Speech to text on Mac, in any app.
        </h1>

        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          Hold a key, speak, release. Dictami turns what you say into clean, punctuated
          text and places it directly into whatever app your cursor is in.
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
            <h2 className="text-[20px] font-medium tracking-tight">How it works</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Press and hold your dictation key. Speak at your normal pace. Release the key
              and the text appears — already punctuated, capitalized, and placed exactly where
              your cursor was. There's nothing to copy, paste, or confirm.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              The recognition model runs on your Mac, not on a server. There's no upload,
              no waiting for a network response, and no internet connection required.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Works in every app</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictami types into the active app using the same mechanism the keyboard uses,
              so it works wherever a cursor can be placed: email clients, browser tabs,
              note-taking apps, chat windows, code editors, terminal windows, document editors.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Automatic punctuation</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Don't say "comma" or "period." Dictami reads the shape of the sentence and
              places commas, periods, and question marks where they belong. Speak naturally
              and the output reads naturally.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">28 languages</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              English, Spanish, French, German, Italian, Portuguese, Dutch, Polish, Russian,
              Japanese, Korean, Chinese, and 16 more European languages — all handled on-device
              at the same speed. Switch languages in Settings; no different model to download.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">One key, your choice</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              The default is the right Command key, held like a walkie-talkie. You can change
              it in Settings, or switch to tap-to-start / tap-to-stop mode if that fits your
              workflow better. The chosen key is captured cleanly — no other app reacts to it
              while you're dictating.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What you need</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              macOS 13 Ventura or later on an Apple Silicon Mac — an M1 or newer. Intel Macs
              aren't supported. No account, no subscription required to try it.
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
