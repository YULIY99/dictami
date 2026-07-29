import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinks } from "@/components/GuideLinks";

export const metadata: Metadata = {
  title: "Dictation on Mac Without Siri | Dictami",
  description:
    "Dictate on Mac without Siri or Apple’s built-in dictation. Dictami works on-device in every app, adds punctuation automatically, and needs no account.",
  alternates: { canonical: "https://dictami.com/dictation-mac-without-siri" },
  openGraph: {
    title: "Dictation on Mac Without Siri | Dictami",
    description:
      "Dictate on Mac without Siri or Apple’s built-in dictation. Dictami works on-device in every app, adds punctuation automatically, and needs no account.",
    url: "https://dictami.com/dictation-mac-without-siri",
  },
};

export default function DictationMacWithoutSiri() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Dictation on Mac, without Siri.
        </h1>

        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          Dictami is a standalone dictation app. It doesn't use Siri, doesn't depend on
          Apple's built-in dictation, and doesn't need Siri to be enabled on your Mac.
          Hold a key, speak, and the text appears in whatever app you're already in.
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
            <h2 className="text-[20px] font-medium tracking-tight">Why people look for an alternative</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Apple's dictation is tied to the system. Turning it on means enabling a
              feature that also listens for a wake phrase, and on many setups the
              transcription still travels to Apple's servers. For anyone who keeps Siri
              switched off deliberately — for privacy, for battery, or just to stop it
              triggering by accident — the built-in dictation isn't really an option.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              There's also the practical side. Apple's dictation cuts you off after a
              pause, punctuation has to be spoken out loud, and the accuracy drops
              noticeably on longer passages.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Completely separate from Siri</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictami is its own application with its own recognition model. Siri can stay
              disabled. Apple's dictation can stay disabled. Nothing about Dictami depends
              on either of them being switched on, and it never listens for a wake word —
              the microphone only opens while you're holding the key.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">No silence timeout</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              The recording stops when you release the key, and not before. Pause to gather
              a sentence, think mid-thought, take a breath — none of it ends the recording.
              This is the difference people notice first when moving from built-in dictation.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Punctuation you never say out loud</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Don't say "comma" or "period." Dictami places commas, periods, and question
              marks from the shape of the sentence, and capitalizes the first word of each
              one. You talk the way you talk, and the text comes out ready to send.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Runs on your Mac, not on a server</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              The recognition model is downloaded once and stored on your Mac. Your audio
              is never uploaded. There's no account, no login, and no internet connection
              required — the app works exactly the same on a plane as it does at your desk.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              A typical sentence is ready in about a third of a second, in any of the 28
              supported languages.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What you need</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              macOS 13 Ventura or later on an Apple Silicon Mac — an M1 or newer. Intel
              Macs aren't supported. macOS will ask for microphone and Accessibility
              permission; Accessibility is what lets the finished text be typed into
              whichever app your cursor is in.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <GuideLinks current="/dictation-mac-without-siri" />
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
