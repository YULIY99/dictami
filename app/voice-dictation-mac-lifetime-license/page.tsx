import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME, BUY } from "@/lib/links";
import { GuideLinks } from "@/components/GuideLinks";

export const metadata: Metadata = {
  title: "Lifetime License for Voice Dictation on Mac | Dictami",
  description:
    "Dictami offers a $29.99 lifetime license for voice dictation on Mac. Pay once, get every language, every model, and all future updates. No subscription, no account.",
  alternates: { canonical: "https://dictami.com/voice-dictation-mac-lifetime-license" },
  openGraph: {
    title: "Lifetime License for Voice Dictation on Mac | Dictami",
    description:
      "Dictami offers a $29.99 lifetime license for voice dictation on Mac. Pay once, get every language, every model, and all future updates. No subscription, no account.",
    url: "https://dictami.com/voice-dictation-mac-lifetime-license",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is Dictami's lifetime license?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "$29.99, paid once. It includes every language, every recognition model, and all future updates, with no renewal ever.",
      },
    },
    {
      "@type": "Question",
      name: "Does the lifetime license really never expire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. There is no renewal date and nothing to cancel. The license key is checked once when you enter it; the app never phones home afterward.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the lifetime license and the monthly plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The monthly plan costs $5.99, renews automatically, and can be cancelled anytime. The lifetime license costs $29.99 once and pays for itself in five months compared to monthly billing.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try Dictami before buying the lifetime license?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The app includes a 7-day trial with no card and no account required. Buy only if it earns its place.",
      },
    },
    {
      "@type": "Question",
      name: "What if I buy and change my mind?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full refunds are available within 14 days, no questions asked. Email support and it is taken care of.",
      },
    },
    {
      "@type": "Question",
      name: "Does the lifetime license include future updates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All future updates of the app are included in the one-time price.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an account to buy or use Dictami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. There is no sign-up and no login. A license key arrives after purchase, you paste it once, and that is the last time the app asks you for anything.",
      },
    },
    {
      "@type": "Question",
      name: "How does Dictami's lifetime price compare to Superwhisper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Superwhisper's lifetime license costs $249.99, more than eight times Dictami's $29.99, because one license covers Mac, Windows, and phones. If you only need dictation on a Mac, Dictami's license costs far less.",
      },
    },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Dictami Lifetime License",
  "image": "https://dictami.com/og-image.png",
  description:
    "One-time purchase of Dictami voice dictation for Mac: every language, every model, all future updates.",
  brand: { "@type": "Brand", name: "Dictami" },
  offers: {
    "@type": "Offer",
    price: "29.99",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://dictami.com/voice-dictation-mac-lifetime-license",
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: { "@type": "MonetaryAmount", value: 0, currency: "USD" },
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      returnPolicyCategory:
        "https://schema.org/MerchantReturnFiniteWindow",
      merchantReturnDays: 14,
      returnFees: "https://schema.org/FreeReturn",
    },
  },
};

export default function VoiceDictationMacLifetimeLicense() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="min-h-screen bg-ground text-ink">
        <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
            ← Dictami
          </Link>

          <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
            A lifetime license for voice dictation on Mac. Pay once, own it.
          </h1>

          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Dictami sells voice dictation for Mac the old way: one payment of $29.99,
            and the app is yours. Every language, every model, and all future updates.
            No renewal date, no account, and nothing that stops working if a card expires.
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
              className="inline-flex items-center rounded-full border border-line bg-card px-6 py-3 text-[15px] font-medium transition hover:border-ink/20"
            >
              Buy lifetime - $29.99
            </a>
          </div>

          <div className="mt-16 flex flex-col gap-10">
            <section>
              <h2 className="text-[20px] font-medium tracking-tight">The math</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                $29.99 once against $5.99 a month. The lifetime license pays for itself in
                five months. After that, every dictation is free. The monthly plan{" "}
                <Link href="/renew/" className="underline underline-offset-2 hover:text-ink">
                  renews automatically
                </Link>{" "}
                and you can cancel it whenever you like, but the price never stops.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-tight">What the lifetime license includes</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                Every language Dictami supports, every recognition model, and all future
                updates of the app. One payment, no renewal date, nothing to cancel. The
                license key is checked once when you enter it and never again - the app does
                not phone home to confirm you are still allowed to use it.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-tight">How it compares</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                Shopping for a one-time price is harder than it should be: most dictation
                apps only sell subscriptions. Here is the whole market on one table.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-[15px]">
                  <thead>
                    <tr className="border-b border-line text-muted">
                      <th className="py-2 pr-4 font-medium">App</th>
                      <th className="py-2 pr-4 font-medium">One-time price</th>
                      <th className="py-2 font-medium">Subscription</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Dictami</td>
                      <td className="py-2 pr-4">$29.99</td>
                      <td className="py-2">$5.99/month (optional)</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Superwhisper</td>
                      <td className="py-2 pr-4">$249.99</td>
                      <td className="py-2">$8.49/month</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">Wispr Flow</td>
                      <td className="py-2 pr-4">not offered</td>
                      <td className="py-2">$15/month</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4 font-medium text-ink">VoiceInk</td>
                      <td className="py-2 pr-4">$25</td>
                      <td className="py-2">not offered</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-ink">Voibe</td>
                      <td className="py-2 pr-4">$198 (limited-time)</td>
                      <td className="py-2">$9.90/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                Prices taken from each vendor's own site in September 2026.
              </p>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                Superwhisper's lifetime costs more than eight times Dictami's because one
                license covers Mac, Windows, and phones, not just a Mac. If your job is
                dictation on a Mac, you are paying for platforms you do not use. Wispr Flow
                has no lifetime option at all: the subscription is the only way in.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-tight">Why a one-time price is possible</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                Cloud dictation costs money every time you use it: servers, bandwidth,
                per-minute billing. Dictami runs the recognition model on your Mac, on your
                hardware. There is no per-use cost to recover, so there is nothing a
                subscription needs to pay for.
              </p>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                For the full reasoning behind the model, see{" "}
                <Link href="/voice-dictation-mac-no-subscription/" className="underline underline-offset-2 hover:text-ink">
                  why Dictami needs no subscription
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-tight">Try it before you pay</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                The trial runs inside the app for seven days - no card, no account, no
                countdown emails. Dictate for a week, and buy the lifetime license only if it
                earns its place. If you buy and change your mind, refunds are available within
                14 days, no questions asked.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-tight">What you need</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                macOS 13 Ventura or later on an Apple Silicon Mac - an M1 or newer. Intel Macs
                aren't supported. The recognition model downloads once from Settings; after
                that the app never needs the internet again.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-tight">Frequently asked questions</h2>

              <h3 className="mt-6 text-[17px] font-medium tracking-tight">How much is Dictami's lifetime license?</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-muted">
                $29.99, paid once. It includes every language, every recognition model, and
                all future updates, with no renewal ever.
              </p>

              <h3 className="mt-6 text-[17px] font-medium tracking-tight">Does the lifetime license really never expire?</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-muted">
                Yes. There is no renewal date and nothing to cancel. The license key is
                checked once when you enter it; the app never phones home afterward.
              </p>

              <h3 className="mt-6 text-[17px] font-medium tracking-tight">What is the difference between the lifetime license and the monthly plan?</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-muted">
                The monthly plan costs $5.99, renews automatically, and can be cancelled
                anytime. The lifetime license costs $29.99 once and pays for itself in five
                months compared to monthly billing.
              </p>

              <h3 className="mt-6 text-[17px] font-medium tracking-tight">Can I try Dictami before buying the lifetime license?</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-muted">
                Yes. The app includes a 7-day trial with no card and no account required.
                Buy only if it earns its place.
              </p>

              <h3 className="mt-6 text-[17px] font-medium tracking-tight">What if I buy and change my mind?</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-muted">
                Full refunds are available within 14 days, no questions asked. Email support
                and it is taken care of.
              </p>

              <h3 className="mt-6 text-[17px] font-medium tracking-tight">Does the lifetime license include future updates?</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-muted">
                Yes. All future updates of the app are included in the one-time price.
              </p>

              <h3 className="mt-6 text-[17px] font-medium tracking-tight">Do I need an account to buy or use Dictami?</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-muted">
                No. There is no sign-up and no login. A license key arrives after purchase,
                you paste it once, and that is the last time the app asks you for anything.
              </p>

              <h3 className="mt-6 text-[17px] font-medium tracking-tight">How does Dictami's lifetime price compare to Superwhisper?</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-muted">
                Superwhisper's lifetime license costs $249.99, more than eight times Dictami's
                $29.99, because one license covers Mac, Windows, and phones. If you only
                need dictation on a Mac, Dictami's license costs far less.
              </p>
            </section>
          </div>

          <div className="mt-16 border-t border-line pt-10">
            <GuideLinks current="/voice-dictation-mac-lifetime-license" />
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
    </>
  );
}
