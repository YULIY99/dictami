import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinks } from "@/components/GuideLinks";

export const metadata: Metadata = {
  title: "Voice Dictation with Punctuation for Mac | Dictami",
  description:
    "Dictate on your Mac and get readable text with commas, periods, question marks, and capitalization added automatically.",
  alternates: { canonical: "https://dictami.com/voice-dictation-mac-with-punctuation" },
  openGraph: {
    title: "Voice Dictation with Punctuation for Mac | Dictami",
    description:
      "Speak naturally. Dictami adds punctuation and capitalization as it turns your voice into text in any Mac app.",
    url: "https://dictami.com/voice-dictation-mac-with-punctuation",
  },
};

export default function VoiceDictationMacWithPunctuation() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Voice dictation with punctuation on Mac
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          Dictami turns spoken words into readable text in the app where your cursor already is.
          Commas, periods, question marks, and capitalization appear automatically, so you can
          speak naturally instead of saying punctuation out loud.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href={PRIMARY_CTA} download={DOWNLOAD_FILENAME} className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep">
            Download for Mac
          </a>
          <Link href="/#pricing" className="inline-flex items-center rounded-full border border-line bg-card px-6 py-3 text-[15px] font-medium transition hover:border-ink/20">
            See pricing →
          </Link>
        </div>

        <div className="mt-16 flex flex-col gap-10">
          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Speak normally</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              You do not need to say “comma” or “period” as you dictate. Dictami uses the shape
              of the sentence to place common punctuation and starts each new sentence with a
              capital letter. Your first draft is easier to read without extra editing.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Works wherever you type</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Hold the dictation key in Mail, Messages, Slack, Notion, Google Docs, a browser
              form, or a search field. Release it when you finish, and the punctuated text is
              inserted at the active cursor.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Fast enough to keep your thought</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictami processes the recording on your Mac instead of sending it to a remote
              transcription service. A normal sentence is ready in about half a second, with no
              server round trip between your voice and the text.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Your voice stays on your Mac</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Recognition runs on Apple Silicon after the language model is downloaded. Your
              recording is not sent to a transcription server, and dictation keeps working when
              the connection is unreliable or unavailable.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">For messages, notes, and first drafts</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictation is useful when typing feels slow: a reply to a client, a note after a
              meeting, a document outline, or the first rough version of an email you will clean
              up later. Dictami gets the words down without making you change apps.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What you need</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictami requires macOS 13 Ventura or later on an Apple Silicon Mac — an M1 or
              newer. It includes a seven-day trial inside the app, with no card required.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-line pt-10"><GuideLinks current="/voice-dictation-mac-with-punctuation/" /></div>
        <div className="mt-14 border-t border-line pt-10">
          <p className="text-[16px] text-muted">Seven-day trial inside the app. No card, no account.</p>
          <a href={PRIMARY_CTA} download={DOWNLOAD_FILENAME} className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep">
            Download Dictami
          </a>
        </div>
      </div>
    </div>
  );
}
