import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinks } from "@/components/GuideLinks";

export const metadata: Metadata = {
  title: "Voice Typing for Developers on Mac | Dictami",
  description:
    "Voice typing for developers on Mac: dictate prompts, commit messages, PR descriptions and docs into any editor or terminal. Runs locally, so code context never leaves your machine.",
  alternates: { canonical: "https://dictami.com/voice-typing-mac-for-developers" },
  openGraph: {
    title: "Voice Typing for Developers on Mac | Dictami",
    description:
      "Dictate prompts, commit messages, PR descriptions and docs into any editor. Runs locally.",
    url: "https://dictami.com/voice-typing-mac-for-developers",
  },
};

export default function VoiceTypingMacForDevelopers() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-24 sm:py-32">
        <Link href="/" className="inline-flex items-center gap-1.5 text-cap text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-h2 font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Voice typing for developers: talk the prose, type the code.
        </h1>

        <p className="mt-5 text-body leading-relaxed text-muted">
          Developers write far more English than code. Prompts for an AI assistant,
          commit messages, pull request descriptions, review comments, tickets, docs.
          Dictami lets you say all of that instead of typing it, into any editor or
          terminal, without sending a word of it off your Mac.
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
            <h2 className="text-title font-medium tracking-tight">Where it earns its place</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              The biggest win is prompting. A good prompt to a coding assistant is a
              paragraph of context: what the code should do, what already failed, which
              files matter. Speaking that takes a fraction of the time it takes to type,
              and you tend to include more of the detail that makes the answer better.
            </p>
            <p className="mt-3 text-body leading-relaxed text-muted">
              The same goes for the writing around code. A pull request description that
              explains the why, a review comment that is kind and specific, a README
              section you have been putting off — all of it is easier to say than to type.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Where it does not</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Dictami is built for natural language. It turns speech into punctuated
              sentences; it does not understand brackets, indentation or variable naming
              conventions. Dictating code syntax symbol by symbol is slower than typing it.
              The workflow that works is simple: talk the prose, type the code.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Works in any app, including the terminal</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              There is no plugin to install and no editor integration to configure. Put
              the cursor where the text should go — VS Code, Xcode, a JetBrains IDE, a
              terminal running a CLI assistant, a GitHub comment box in the browser —
              hold the key, speak, release. The text is typed in about half a second.
              More on that in{" "}
              <Link href="/speech-to-text-mac-any-app/" className="underline underline-offset-2 hover:text-ink">
                dictating into any app
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Your code context stays local</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              When you describe a bug out loud, you describe your codebase: internal
              service names, customer names, the shape of a security issue. Cloud
              dictation uploads that audio to a third party before your assistant ever
              sees it. Dictami recognizes speech on your Mac, so the only place your words
              go is the field you are typing into.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Hold to talk, release to stop</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              There is no listening mode to forget about and no wake word. The microphone
              is open only while you hold the key, which matters in an open office or on a
              call. See{" "}
              <Link href="/hold-to-dictate-mac/" className="underline underline-offset-2 hover:text-ink">
                hold to dictate
              </Link>{" "}
              for how it works.
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
          <GuideLinks current="/voice-typing-mac-for-developers" />
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
