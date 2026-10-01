import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME, BUY } from "@/lib/links";
import { GuideLinks } from "@/components/GuideLinks";

export const metadata: Metadata = {
  title: "Superwhisper Alternative for Mac: Dictami vs Superwhisper (2026)",
  description:
    "Looking for a cheaper Superwhisper alternative for Mac? Compare Dictami vs Superwhisper on price, offline dictation, and features. Dictami lifetime is $29.99 vs Superwhisper's $249.99.",
  alternates: { canonical: "https://dictami.com/superwhisper-alternative-mac" },
  openGraph: {
    title: "Superwhisper Alternative for Mac: Dictami vs Superwhisper (2026)",
    description:
      "Dictami vs Superwhisper compared: price, offline dictation, and features. Dictami lifetime $29.99 vs Superwhisper $249.99.",
    url: "https://dictami.com/superwhisper-alternative-mac",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a cheaper alternative to Superwhisper for Mac?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dictami offers offline Mac dictation at $5.99 a month or $29.99 lifetime, versus Superwhisper Pro at $8.49 a month or $249.99 lifetime.",
      },
    },
    {
      "@type": "Question",
      name: "Does Dictami work offline like Superwhisper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dictami runs offline on Apple Silicon Macs, so your voice never has to leave your machine for basic dictation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try Dictami before paying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. There is a 7-day free trial and it does not ask for a card or an account.",
      },
    },
    {
      "@type": "Question",
      name: "Which should I choose, Dictami or Superwhisper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose Superwhisper if you need custom AI modes, cloud models, meeting transcription, or Windows and iOS support. Choose Dictami if you want affordable offline dictation on Mac with a cheap lifetime license.",
      },
    },
    {
      "@type": "Question",
      name: "Does Dictami require a subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. There is a $5.99 monthly plan, but the $29.99 lifetime license has no recurring payments.",
      },
    },
  ],
};

export default function SuperwhisperAlternativeMac() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-ground text-ink">
        <div className="mx-auto max-w-2xl px-5 py-24 sm:py-32">
          <Link href="/" className="inline-flex items-center gap-1.5 text-cap text-muted transition hover:text-ink">
            ← Dictami
          </Link>

          <h1 className="mt-8 font-display text-h2 font-normal leading-[1.06] tracking-[-0.03em] text-balance">
            A cheaper Superwhisper alternative for Mac. Compared honestly.
          </h1>

          <p className="mt-5 text-body leading-relaxed text-muted">
            Superwhisper is the best-known dictation app for Mac power users. It is
            also expensive: $8.49 a month, $84.99 a year, or $249.99 for a lifetime
            license. If you want fast voice typing on your Mac without paying that
            much, Dictami is a simpler alternative at $5.99 a month or $29.99 once.
            This page compares the two honestly, including where Superwhisper wins.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={PRIMARY_CTA} download={DOWNLOAD_FILENAME}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep"
            >
              Download for Mac
            </a>
            <a
              href={BUY.lifetime}
              className="inline-flex items-center rounded-full border border-line bg-card px-6 py-3 text-small font-medium tabular-nums transition hover:border-ink/20"
            >
              Buy lifetime - $29.99
            </a>
          </div>

          <div className="mt-16 flex flex-col gap-10">
            <section>
              <h2 className="text-title font-medium tracking-tight">The short version</h2>
              <p className="mt-3 text-body leading-relaxed text-muted">
                <strong className="text-ink">Pick Superwhisper</strong> if you want the
                deepest toolbox: dozens of local and cloud models, custom prompt modes
                per app, meeting transcription, and one license across Mac, Windows,
                and iOS.
              </p>
              <p className="mt-3 text-body leading-relaxed text-muted">
                <strong className="text-ink">Pick Dictami</strong> if you want simple
                offline dictation on your Mac at a fraction of the price, with a
                lifetime license that costs less than four months of Superwhisper Pro.
              </p>
            </section>

            <section>
              <h2 className="text-title font-medium tracking-tight">Price comparison</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-small tabular-nums">
                  <thead>
                    <tr className="border-b border-line text-muted">
                      <th className="py-2 pr-4 font-medium"></th>
                      <th className="py-2 pr-4 font-medium">Dictami</th>
                      <th className="py-2 font-medium">Superwhisper</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Monthly</td>
                      <td className="py-2 pr-4">$5.99</td>
                      <td className="py-2">$8.49</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Yearly</td>
                      <td className="py-2 pr-4">$71.88 <span className="text-cap">(monthly x 12)</span></td>
                      <td className="py-2">$84.99</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Lifetime (one-time)</td>
                      <td className="py-2 pr-4 font-medium text-ink">$29.99</td>
                      <td className="py-2">$249.99</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Free trial</td>
                      <td className="py-2 pr-4">7 days, no card, no account</td>
                      <td className="py-2">Free tier + limited Pro trial</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-ink">Refund window</td>
                      <td className="py-2 pr-4">14 days</td>
                      <td className="py-2">30 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-body leading-relaxed text-muted">
                The math: Superwhisper's lifetime license pays for itself after about
                29 months versus its own monthly plan. Dictami's lifetime license pays
                for itself after 5 months versus its own monthly plan. Dictami lifetime
                costs roughly one eighth of Superwhisper lifetime.
              </p>
            </section>

            <section>
              <h2 className="text-title font-medium tracking-tight">Feature comparison</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-small">
                  <thead>
                    <tr className="border-b border-line text-muted">
                      <th className="py-2 pr-4 font-medium"></th>
                      <th className="py-2 pr-4 font-medium">Dictami</th>
                      <th className="py-2 font-medium">Superwhisper</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Offline dictation on Mac</td>
                      <td className="py-2 pr-4">Yes</td>
                      <td className="py-2">Yes (local models)</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Works in any Mac app</td>
                      <td className="py-2 pr-4">Yes</td>
                      <td className="py-2">Yes</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Apple Silicon (M1/M2/M3)</td>
                      <td className="py-2 pr-4">Yes</td>
                      <td className="py-2">Yes</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Hold-to-dictate hotkey</td>
                      <td className="py-2 pr-4">Yes</td>
                      <td className="py-2">Yes</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Automatic punctuation</td>
                      <td className="py-2 pr-4">Yes</td>
                      <td className="py-2">Yes (modes)</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Custom prompt modes</td>
                      <td className="py-2 pr-4">No</td>
                      <td className="py-2">Yes (Pro)</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Cloud models via own API key</td>
                      <td className="py-2 pr-4">No</td>
                      <td className="py-2">Yes (Pro)</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Meeting transcription</td>
                      <td className="py-2 pr-4">No</td>
                      <td className="py-2">Yes (Pro)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-ink">Windows / iOS apps</td>
                      <td className="py-2 pr-4">No (Mac only)</td>
                      <td className="py-2">Yes, one license covers all</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-cap text-muted">
                Superwhisper pricing per superwhisper.com (Pro $8.49/mo, $84.99/yr,
                $249.99 lifetime), confirmed October 1, 2026. Dictami pricing per
                dictami.com.
              </p>
            </section>

            <section>
              <h2 className="text-title font-medium tracking-tight">Where Superwhisper is better</h2>
              <p className="mt-3 text-body leading-relaxed text-muted">
                Credit where it is due. Superwhisper's model catalog is the largest in
                the category: Whisper Tiny through Large-v3 Turbo plus Parakeet models
                locally, and Deepgram, ElevenLabs, or OpenAI in the cloud on Pro. Its
                custom modes let you set per-app prompts, so dictation into Slack reads
                differently from dictation into your code editor. If you dictate on
                Windows or iPhone too, one Superwhisper license covers everything. For
                that kind of power user, $249.99 lifetime is defensible.
              </p>
            </section>

            <section>
              <h2 className="text-title font-medium tracking-tight">Where Dictami wins</h2>
              <p className="mt-3 text-body leading-relaxed text-muted">
                Price and simplicity. Most people do not need thirty models and per-app
                prompts. They need to hold a key, speak, and get clean punctuated text
                in whatever app is open, without internet. Dictami does that on Apple
                Silicon Macs, offline, with no account and no card required to try it
                for 7 days. And the lifetime license is $29.99, less than four months
                of Superwhisper Pro monthly.
              </p>
            </section>

            <section>
              <h2 className="text-title font-medium tracking-tight">Frequently asked questions</h2>

              <h3 className="mt-6 text-body font-medium tracking-tight">Is there a cheaper alternative to Superwhisper for Mac?</h3>
              <p className="mt-2 text-body leading-relaxed text-muted">
                Yes. Dictami offers offline Mac dictation at $5.99 a month or $29.99
                lifetime, versus Superwhisper Pro at $8.49 a month or $249.99 lifetime.
              </p>

              <h3 className="mt-6 text-body font-medium tracking-tight">Does Dictami work offline like Superwhisper?</h3>
              <p className="mt-2 text-body leading-relaxed text-muted">
                Yes. Dictami runs offline on Apple Silicon Macs, so your voice never
                has to leave your machine for basic dictation.
              </p>

              <h3 className="mt-6 text-body font-medium tracking-tight">Can I try Dictami before paying?</h3>
              <p className="mt-2 text-body leading-relaxed text-muted">
                Yes. There is a 7-day free trial and it does not ask for a card or an
                account.
              </p>

              <h3 className="mt-6 text-body font-medium tracking-tight">Which should I choose, Dictami or Superwhisper?</h3>
              <p className="mt-2 text-body leading-relaxed text-muted">
                Choose Superwhisper if you need custom AI modes, cloud models, meeting
                transcription, or Windows and iOS support. Choose Dictami if you want
                affordable offline dictation on Mac with a cheap lifetime license.
              </p>

              <h3 className="mt-6 text-body font-medium tracking-tight">Does Dictami require a subscription?</h3>
              <p className="mt-2 text-body leading-relaxed text-muted">
                No. There is a $5.99 monthly plan, but the $29.99 lifetime license has
                no recurring payments.
              </p>
            </section>
          </div>

          <div className="mt-16 border-t border-line pt-10">
            <GuideLinks current="/superwhisper-alternative-mac" />
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
    </>
  );
}
