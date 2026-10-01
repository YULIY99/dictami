import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinks } from "@/components/GuideLinks";

export const metadata: Metadata = {
  title: "Private Dictation for Mac, No Cloud | Dictami",
  description:
    "Private voice dictation for Mac: speech is recognized on your machine, audio is never uploaded, and no account is needed. Works with the network switched off.",
  alternates: {
    canonical: "https://dictami.com/private-dictation-mac",
    languages: {
      en: "https://dictami.com/private-dictation-mac/",
      de: "https://dictami.com/de/diktieren-mac-ohne-cloud/",
      "x-default": "https://dictami.com/private-dictation-mac/",
    },
  },
  openGraph: {
    title: "Private Dictation for Mac, No Cloud | Dictami",
    description:
      "Speech recognized on your Mac, audio never uploaded, no account. Works with the network off.",
    url: "https://dictami.com/private-dictation-mac",
  },
};

export default function PrivateDictationMac() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-24 sm:py-32">
        <Link href="/" className="inline-flex items-center gap-1.5 text-cap text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-h2 font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Private dictation means your voice stays on your Mac.
        </h1>

        <p className="mt-5 text-body leading-relaxed text-muted">
          Most dictation tools are a microphone attached to someone else's server. Dictami
          is not. Speech is turned into text on your Mac, the audio is never uploaded, and
          there is no account linking what you said to who you are.
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
            <h2 className="text-title font-medium tracking-tight">What you actually dictate</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Dictation is rarely small talk. It is the email to a client, the note after a
              medical appointment, the draft of a contract, the message you rewrote three
              times before sending. With cloud dictation, every one of those passes through
              a company's servers as audio, and what happens to it next is a matter of
              policy — a policy that can change.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">How Dictami keeps it local</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              The recognition model lives on your Mac and runs on its Apple Silicon chip.
              When you hold the key and speak, the audio goes from the microphone to that
              model and nowhere else. The text it produces is typed into the app you are
              using, the same as if you had typed it yourself.
            </p>
            <p className="mt-3 text-body leading-relaxed text-muted">
              The model is downloaded once, from Settings. After that the app does not
              need the internet to dictate at all.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">A claim you can check</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              "We respect your privacy" is a sentence anyone can write. "It works with the
              network off" is one you can test in ten seconds. Turn off Wi-Fi, unplug the
              cable, and dictate a paragraph. If the text still appears, nothing was sent
              anywhere — there was nowhere to send it.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">No account, no profile</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              There is no sign-up to try Dictami and none to buy it. No email address is
              required for the trial, and no profile is built around your usage. A license
              key arrives after purchase, you paste it in once, and it is checked once.
            </p>
            <p className="mt-3 text-body leading-relaxed text-muted">
              The{" "}
              <a href="/privacy.html" className="underline underline-offset-2 hover:text-ink">
                privacy policy
              </a>{" "}
              lists exactly what the app stores on your Mac and what it never collects.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Private does not mean slow</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Local used to mean waiting. On Apple Silicon it does not: text appears about
              half a second after you release the key, with punctuation added, in any of
              30 languages. There is no round trip to a server, so a weak connection never
              makes it slower. For more on running without a network, see{" "}
              <Link href="/offline-dictation-mac/" className="underline underline-offset-2 hover:text-ink">
                offline dictation
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">What you need</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              macOS 14 Sonoma or later on an Apple Silicon Mac — an M1 or newer. Intel Macs
              are not supported. The trial runs for seven days inside the app, with no card
              and no account.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <GuideLinks current="/private-dictation-mac" />
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
