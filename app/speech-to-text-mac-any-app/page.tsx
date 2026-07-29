import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinks } from "@/components/GuideLinks";

export const metadata: Metadata = {
  title: "Speech to Text in Any Mac App | Dictami",
  description:
    "Use speech to text in any Mac app, including Mail, Chrome, Slack, VS Code, Notes, and Terminal. Dictami types wherever your cursor is — no copy and paste.",
  alternates: { canonical: "https://dictami.com/speech-to-text-mac-any-app" },
  openGraph: {
    title: "Speech to Text in Any Mac App | Dictami",
    description:
      "Use speech to text in any Mac app, including Mail, Chrome, Slack, VS Code, Notes, and Terminal. Dictami types wherever your cursor is — no copy and paste.",
    url: "https://dictami.com/speech-to-text-mac-any-app",
  },
};

export default function SpeechToTextMacAnyApp() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          The text lands where your cursor already is.
        </h1>

        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          Most dictation tools transcribe into their own window and leave you to copy
          the result across. Dictami doesn't have a window to copy from — it types
          into whatever app you were already working in.
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
            <h2 className="text-[20px] font-medium tracking-tight">Why a separate window is the wrong design</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              A transcription window sounds harmless until you count the steps. Speak,
              wait, read, select, copy, switch back, find the cursor, paste, fix the
              spacing. That's eight actions around one sentence, and every one of them
              is a chance to lose your place in what you were writing.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              The whole value of dictation is that speaking is faster than typing. Spend
              that saving on window management and there's nothing left.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">How the text actually gets in</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictami inserts text through the same macOS accessibility interface that
              assistive software uses — the layer designed for exactly this. As far as
              the receiving app is concerned, the words arrived the way words normally
              arrive. Nothing has to be built for Dictami, and no app needs a plugin.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              This is why macOS asks for Accessibility permission on first launch. It's
              not analytics and not monitoring: without it, Dictami could hear you but
              would have no way to put the result anywhere except its own window.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Where it works</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Native Mac apps — Mail, Notes, Messages, Pages, Reminders. Browsers and
              anything running inside one, including Gmail, Google Docs, and web-based
              chat. Electron apps like Slack, Notion, Discord, and Obsidian. Editors and
              IDEs: VS Code, Xcode, JetBrains, Sublime. Terminal windows. Search fields,
              comment boxes, form inputs, and the address bar.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              If you can put a cursor in it and type, it works.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Where it doesn't, and why</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Secure input fields are the honest exception. When macOS is in secure input
              mode — a password box, a login prompt, the keychain — the system blocks
              every application from putting characters in, and Dictami is no exception.
              That block exists to stop keyloggers, and it's doing its job.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              A handful of games and remote desktop clients read the keyboard at a lower
              level and won't see inserted text either. Everything you'd actually write
              prose into is covered.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">One key, everywhere</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              There's nothing to configure per application. The same key works in every
              app — hold it, speak, release. The default is the right Command key, and
              it's captured cleanly so no other app reacts to it while you dictate.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What you need</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              macOS 13 Ventura or later on an Apple Silicon Mac — an M1 or newer. Intel
              Macs aren't supported. Recognition runs on your Mac in 28 languages, with
              punctuation, and needs no internet connection after the first download.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <GuideLinks current="/speech-to-text-mac-any-app" />
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
