import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinks } from "@/components/GuideLinks";

export const metadata: Metadata = {
  title: "Dictate Email and Slack Messages on Mac | Dictami",
  description:
    "Dictate email and Slack messages on Mac with punctuation already in place. Hold a key, speak, release: text appears in Mail, Gmail, Outlook or Slack. Runs locally.",
  alternates: { canonical: "https://dictami.com/dictation-mac-email-slack" },
  openGraph: {
    title: "Dictate Email and Slack Messages on Mac | Dictami",
    description:
      "Hold a key, speak, release: punctuated text in Mail, Gmail, Outlook or Slack. Runs locally.",
    url: "https://dictami.com/dictation-mac-email-slack",
  },
};

export default function DictationMacEmailSlack() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-24 sm:py-32">
        <Link href="/" className="inline-flex items-center gap-1.5 text-cap text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-h2 font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Answer email and Slack by talking.
        </h1>

        <p className="mt-5 text-body leading-relaxed text-muted">
          Most of a working day is short messages: replies, updates, quick answers in a
          thread. Dictami turns them into something you say instead of type. Hold a key,
          speak, release, and the message is in the reply box with punctuation already in
          place.
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
            className="inline-flex items-center rounded-full border border-line bg-card px-6 py-3 text-small font-medium transition hover:border-ink/20"
          >
            See pricing →
          </Link>
        </div>

        <div className="mt-16 flex flex-col gap-10">
          <section>
            <h2 className="text-title font-medium tracking-tight">Why messages are the best place to start</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              People speak at roughly three times the speed they type, and the gap is
              widest on exactly this kind of writing: conversational, a few sentences long,
              written in the voice you would use out loud anyway. A reply that takes a
              minute to type takes fifteen seconds to say.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Works where you already write</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Dictami does not have its own editor and does not need one. It types into
              whatever has the cursor: Apple Mail, Outlook, Gmail in Safari or Chrome, the
              Slack desktop app, Teams, Messages. No plugin, no copy and paste, no switching
              windows. See{" "}
              <Link href="/speech-to-text-mac-any-app/" className="underline underline-offset-2 hover:text-ink">
                dictating into any app
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Punctuation you do not have to say</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Older dictation made you say "comma" and "full stop" out loud, which is the
              fastest way to stop sounding like yourself. Dictami adds commas, periods and
              question marks from the way you speak, so a message reads like you wrote it.
              More in{" "}
              <Link href="/voice-dictation-mac-with-punctuation/" className="underline underline-offset-2 hover:text-ink">
                dictation with punctuation
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Your inbox stays private</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Work messages are full of things that should not travel: client names,
              numbers, internal plans. Dictami recognizes speech on your Mac, so the audio
              of your replies is never uploaded anywhere. The only copy of the message is
              the one you send.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">A habit that takes a day</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Start with Slack replies, where nobody minds a slightly informal sentence.
              Once that feels natural, move to email. Glance over the text before you hit
              send, the same as you would after typing. Within a day most people stop
              reaching for the keyboard for anything longer than a word or two.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">What you need</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              macOS 14 Sonoma or later on an Apple Silicon Mac — an M1 or newer. One
              payment of <span className="tabular-nums">$29.99</span> for a lifetime
              license, or <span className="tabular-nums">$5.99</span> a month. The trial
              runs for seven days with no card and no account.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <GuideLinks current="/dictation-mac-email-slack" />
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <p className="text-body text-muted">7-day trial inside the app. No card, no account.</p>
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
