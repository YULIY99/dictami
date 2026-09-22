import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinks } from "@/components/GuideLinks";

export const metadata: Metadata = {
  title: "Fast Offline Voice Typing for Mac M2 & M3 | Dictami",
  description:
    "Fast offline voice typing for Mac M2 and M3, designed around Apple Silicon and the Neural Engine. Automatic punctuation, any Mac app, no cloud or account.",
  keywords:
    "mac dictation app,voice dictation mac,speech to text mac,offline dictation mac,fast dictation mac,voice typing mac",
  verification: {
    google: "4MFm0bxZWFTg8cYRF78lWRhiiLCajG_PO1S1iB14HXc",
  },
  alternates: {
    canonical: "https://dictami.com/fast-voice-typing-mac-m2-m3",
  },
  openGraph: {
    title: "Fast Offline Voice Typing for Mac M2 & M3 | Dictami",
    description:
      "Fast offline voice typing for Mac M2 and M3, designed around Apple Silicon and the Neural Engine. Automatic punctuation, any Mac app, no cloud or account.",
    url: "https://dictami.com/fast-voice-typing-mac-m2-m3",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dictami — Speak, and the text is already there",
    description:
      "Voice dictation for Mac that keeps up with you. About half a second, on-device, 30 languages.",
    images: ["https://dictami.com/og-image.png"],
  },
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Dictami",
  operatingSystem: "macOS 13 or later, Apple Silicon",
  processorRequirements: "Apple Silicon (M1 or newer)",
  applicationCategory: "ProductivityApplication",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "5.99",
    highPrice: "29.99",
    priceCurrency: "USD",
    offerCount: "2",
  },
  description:
    "Voice dictation for Mac that runs entirely on-device. Hold a key, speak, and punctuated text appears in any app in about half a second.",
  url: "https://dictami.com",
  featureList:
    "On-device transcription, 30 fast languages, automatic punctuation, global hotkey, dictation history with playback",
};

const aggregateOfferJsonLd = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  lowPrice: "5.99",
  highPrice: "29.99",
  priceCurrency: "USD",
  offerCount: "2",
};

export default function FastVoiceTypingMacM2M3() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateOfferJsonLd),
        }}
      />

      <div className="min-h-screen bg-ground text-ink">
        <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink"
          >
            ← Dictami
          </Link>

          <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
            Fast offline voice typing for Mac M2 &amp; M3.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Dictami turns your voice into clean, punctuated text without sending the recording to a cloud service. On an Apple Silicon Mac, hold a key, speak naturally, release, and the words appear wherever your cursor already is.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={PRIMARY_CTA}
              download={DOWNLOAD_FILENAME}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep"
            >
              Download Dictami
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
              <h2 className="text-[20px] font-medium tracking-tight">
                Fast because the text stays local
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                Cloud dictation adds a round trip between your microphone and a remote server. You speak, the audio travels away, a model processes it, and the result comes back. Dictami keeps recognition on your Mac instead. That removes the network wait and makes the response consistent when Wi-Fi is slow, crowded, or unavailable.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-tight">
                Why M2 and M3 Macs work well
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                Dictami was designed around the Neural Engine in Apple Silicon. An M2 or M3 Mac can keep the recognition model ready while you work, so voice typing feels like part of the keyboard rather than a separate transcription step. The app also runs on M1 and M4 Macs with the same local workflow.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-tight">
                Hold, speak, release
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                The default interaction is deliberately simple. Hold the right Command key while you speak, then release it when the sentence is finished. Dictami adds punctuation and capitalization automatically, so you can dictate a message, an email, or a rough first draft without saying "comma" and "period" out loud.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-tight">
                Text in the app you are already using
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                Dictami inserts the result at the active cursor. Use it in Mail, Notes, Messages, Slack, Notion, Google Docs, a browser form, a search field, a terminal, or a code editor. There is no separate transcription window to open and no copy-and-paste loop around every sentence. If a normal text field accepts keyboard input, Dictami can usually put the result there.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-tight">
                Offline voice typing for private work
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                After the recognition model is downloaded, Dictami does not need an internet connection to turn speech into text. Your audio is not uploaded to a transcription service, there is no account to create, and there is no cloud dashboard storing your words. It is a practical fit for travel, private notes, and work on unreliable networks.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-tight">
                What you need
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                Dictami requires macOS 13 Ventura or later on an Apple Silicon Mac. M1, M2, M3, and M4 machines are supported, with 30 languages available in the current app. The seven-day trial runs inside the app with no card and no account required.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-tight">
                Frequently asked questions
              </h2>
              <div className="mt-5 flex flex-col gap-6">
                <div>
                  <h3 className="text-[17px] font-medium tracking-tight">
                    Does Dictami work on M2 and M3 Macs?
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted">
                    Yes. Dictami supports Apple Silicon Macs with M1, M2, M3, and M4 chips, running macOS 13 Ventura or later.
                  </p>
                </div>
                <div>
                  <h3 className="text-[17px] font-medium tracking-tight">
                    Does voice typing work offline?
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted">
                    Yes. After the recognition model is downloaded, Dictami processes speech on your Mac and does not need an internet connection for dictation.
                  </p>
                </div>
                <div>
                  <h3 className="text-[17px] font-medium tracking-tight">
                    How is Dictami different from macOS Dictation?
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted">
                    Dictami uses a hold-to-dictate workflow: hold the shortcut, speak, release, and punctuated text is inserted directly at the active cursor in the app you are using.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-16 border-t border-line pt-10">
            <GuideLinks current="/fast-voice-typing-mac-m2-m3" />
          </div>

          <div className="mt-14 border-t border-line pt-10">
            <p className="text-[16px] text-muted">
              Seven-day trial inside the app. No card, no account.
            </p>
            <a
              href={PRIMARY_CTA}
              download={DOWNLOAD_FILENAME}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep"
            >
              Download Dictami
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
