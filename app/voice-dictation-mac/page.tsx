import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA } from "@/lib/links";

export const metadata: Metadata = {
  title: "Voice Dictation for Mac | Dictami",
  description:
    "Fast voice dictation for Mac that runs entirely on your device. Hold a key, speak, and punctuated text appears in any app in about half a second. 28 languages, no account.",
  alternates: { canonical: "https://dictami.com/voice-dictation-mac" },
};

export default function VoiceDictationMac() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Voice dictation for Mac that keeps up with you.
        </h1>

        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          Hold a key, speak, let go. Punctuated text appears in whatever app your cursor
          is in — in about half a second, in 28 languages, without your voice leaving your Mac.
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
            <h2 className="text-[20px] font-medium tracking-tight">Why voice dictation?</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Speaking runs at about 150 words a minute. Most people type between 40 and 70.
              That gap matters most in the writing nobody enjoys — replies to messages, notes
              after a call, the first draft of an email. Anywhere the words are already clear
              in your head, saying them is simply faster than typing them.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictation is less useful when the thinking happens while you write. For that,
              the keyboard stays the right tool. Dictami is designed to be there for the
              plain prose, and stay out of the way for the rest.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">On your Mac, not in the cloud</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Most voice dictation services send your audio to a server, wait for a response,
              and hand you the text. Even when everything goes well, that round trip is most
              of the delay you feel. On a slow connection, it is all of it.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictami keeps the recognition model loaded in memory on your Mac. The moment you
              release the key, the audio never travels anywhere — the model is already warm and
              the result is ready. That's why it works the same on a plane, on a train, or in
              a building with no signal.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Works in any app</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              The text goes directly into whatever app had the cursor when you started — a
              browser tab, an email client, a code editor, a notes app, a chat window.
              There's nothing to copy and paste.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">28 languages, one model</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Install once and it handles every supported language. No picking a different
              model each time you switch. English, Spanish, French, German, Japanese, Korean,
              Chinese, and 21 more — all at the same speed, with automatic punctuation and
              capitalization.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">How to get clean results</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Speak at your normal pace. Slowing down and separating every word makes
              recognition worse, not better — the model was trained on natural speech. Don't
              say "comma" or "period" out loud; Dictami places punctuation from the shape of
              the sentence automatically.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              If you have a choice, use the built-in microphone. Wireless earbuds switch the
              Mac to a compressed audio profile that degrades transcription quality.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What you need</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictami requires macOS 13 Ventura or later on an Apple Silicon Mac — an M1 or
              newer. Intel Macs aren't supported. On first launch, pick a language and
              download its model with one click in Settings. After that, the app never needs
              an internet connection.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              No account required. Your license key is checked once when you enter it, and
              never again.
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
