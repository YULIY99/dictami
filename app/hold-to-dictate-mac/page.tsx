import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinks } from "@/components/GuideLinks";

export const metadata: Metadata = {
  title: "Hold to Dictate on Mac | Dictami",
  description:
    "Hold one key, speak, and release to dictate text into any app on your Mac. Dictami turns voice into polished text in about half a second.",
  alternates: { canonical: "https://dictami.com/hold-to-dictate-mac" },
  openGraph: {
    title: "Hold to Dictate on Mac | Dictami",
    description:
      "Hold one key, speak, and release to dictate text into any app on your Mac.",
    url: "https://dictami.com/hold-to-dictate-mac",
  },
};

export default function HoldToDictateMac() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Hold a key. Speak. Release. Your text is there.
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          Dictami is a hold-to-dictate app for Mac. Keep one key pressed while you speak,
          then let go when you finish. The words appear in the app you are already using,
          with punctuation and capitalization included.
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
            <h2 className="text-[20px] font-medium tracking-tight">A simple way to dictate</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              There is no recording window to open and no text box to find. The shortcut is
              available wherever your cursor is: an email, a document, a chat, a browser form,
              or a note. Hold the key, say what you mean, and release it. Dictami inserts the
              finished text at the cursor.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Why hold-to-talk feels faster</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Push-to-talk gives the recording a clear beginning and end. You do not need to
              say a wake word, wait for a listening indicator, or edit out a command that was
              captured by mistake. Dictami processes the short recording as soon as you let go,
              so a normal sentence is ready in about half a second.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">It works in any Mac app</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictami types through the active application instead of keeping your words in a
              separate editor. Use the same shortcut in Mail, Messages, Slack, Notion, Google
              Docs, a code issue, or a search field. You can keep your hands on the keyboard and
              dictate the first draft of a message without changing context.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Local, fast, and available offline</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Recognition runs directly on an Apple Silicon Mac. Your audio does not travel to
              a transcription server, and after the model is downloaded, Dictami does not need
              an internet connection to recognize speech. It works in a plane, on a train, or
              anywhere the network is unreliable.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What you need</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictami runs on macOS 13 Ventura or later with an M1 or newer Apple Silicon Mac.
              It supports 30 languages, automatic punctuation, and capitalization. There is no
              account or subscription required to try the seven-day trial.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-line pt-10"><GuideLinks current="/hold-to-dictate-mac/" /></div>
        <div className="mt-14 border-t border-line pt-10">
          <p className="text-[16px] text-muted">7-day trial inside the app. No card, no account.</p>
          <a href={PRIMARY_CTA} download={DOWNLOAD_FILENAME} className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep">
            Download Dictami
          </a>
        </div>
      </div>
    </div>
  );
}
