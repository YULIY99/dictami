import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinks } from "@/components/GuideLinks";

export const metadata: Metadata = {
  title: "Wispr Flow Alternative for Mac | Dictami",
  description:
    "Looking for a Wispr Flow alternative on Mac? Dictami runs dictation on your Mac instead of the cloud, needs no account, and costs $29.99 once instead of $15 a month.",
  alternates: {
    canonical: "https://dictami.com/wispr-flow-alternative-mac",
    languages: {
      en: "https://dictami.com/wispr-flow-alternative-mac/",
      de: "https://dictami.com/de/wispr-flow-alternative-mac/",
      "x-default": "https://dictami.com/wispr-flow-alternative-mac/",
    },
  },
  openGraph: {
    title: "Wispr Flow Alternative for Mac | Dictami",
    description:
      "Dictation that runs on your Mac instead of the cloud. No account, $29.99 once instead of $15 a month.",
    url: "https://dictami.com/wispr-flow-alternative-mac",
  },
};

export default function WisprFlowAlternativeMac() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-24 sm:py-32">
        <Link href="/" className="inline-flex items-center gap-1.5 text-cap text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-h2 font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          A Wispr Flow alternative that never leaves your Mac.
        </h1>

        <p className="mt-5 text-body leading-relaxed text-muted">
          Wispr Flow made hold-to-talk dictation popular, and it is good at it. But it
          sends your voice to a server, it needs an account, and it is sold only as a
          subscription. Dictami does the same job on your own hardware, without an
          account, for a single payment.
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
            <h2 className="text-title font-medium tracking-tight">Why people look for an alternative</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              The reasons are usually the same three. The first is the cloud: every
              sentence you dictate is recorded, uploaded and processed somewhere else.
              For drafts, client email or anything under a confidentiality agreement,
              that is a real cost, not a theoretical one.
            </p>
            <p className="mt-3 text-body leading-relaxed text-muted">
              The second is the price. There is no way to buy Wispr Flow outright; you
              rent it for as long as you use it. The third is the connection: when the
              Wi-Fi drops, on a plane or a train, cloud dictation stops working.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Side by side</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-small tabular-nums">
                <thead>
                  <tr className="border-b border-line text-muted">
                    <th className="py-2 pr-4 font-medium"></th>
                    <th className="py-2 pr-4 font-medium">Dictami</th>
                    <th className="py-2 font-medium">Wispr Flow</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-line">
                    <td className="py-2 pr-4 font-medium text-ink">Where speech is processed</td>
                    <td className="py-2 pr-4">On your Mac</td>
                    <td className="py-2">In the cloud</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="py-2 pr-4 font-medium text-ink">Works offline</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2">No</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="py-2 pr-4 font-medium text-ink">Account</td>
                    <td className="py-2 pr-4">None</td>
                    <td className="py-2">Required</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="py-2 pr-4 font-medium text-ink">One-time price</td>
                    <td className="py-2 pr-4">$29.99</td>
                    <td className="py-2">Not offered</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-ink">Subscription</td>
                    <td className="py-2 pr-4">$5.99/month (optional)</td>
                    <td className="py-2">$15/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-cap leading-relaxed text-muted">
              Prices taken from each vendor's own site on October 1, 2026.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">The same gesture, on your hardware</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              If you are used to Wispr Flow, nothing about the habit changes. Hold a key,
              speak, release. Punctuated text appears wherever your cursor is — Mail,
              Slack, Notes, a browser field, a code editor — in about half a second.
            </p>
            <p className="mt-3 text-body leading-relaxed text-muted">
              The difference is where the work happens. The recognition model runs on
              the Apple Silicon chip in your Mac. No audio is uploaded, so there is no
              recording on someone else's server to worry about, and no network delay
              between finishing a sentence and seeing it typed.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">What you give up</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Being honest about it: Dictami is a Mac app and only a Mac app. If you need
              the same dictation on Windows or a phone, a cloud service that syncs across
              devices will suit you better. Dictami also needs an Apple Silicon Mac; it
              does not run on Intel machines.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">The cost over a year</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              At $15 a month, Wispr Flow costs $180 a year, every year. Dictami's lifetime
              license is <span className="tabular-nums">$29.99</span> once, with every
              language, every model and all future updates included. For the full
              breakdown, see the{" "}
              <Link href="/voice-dictation-mac-lifetime-license/" className="underline underline-offset-2 hover:text-ink">
                lifetime license
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Try it before you switch</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              The trial runs inside the app for seven days, with no card and no account.
              Use it alongside what you have now and keep whichever one you reach for. If
              you buy and change your mind, refunds are available within 14 days. It needs
              macOS 14 Sonoma or later on an M1 or newer.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <GuideLinks current="/wispr-flow-alternative-mac" />
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
