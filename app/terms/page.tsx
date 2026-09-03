import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Dictami",
  description:
    "What you get when you buy Dictami: the licence, the number of Macs, the 14-day refund, what updates are promised, and the limits of the guarantee.",
  alternates: { canonical: "https://dictami.com/terms" },
  openGraph: {
    title: "Terms of Use — Dictami",
    description:
      "The licence, the number of Macs, the 14-day refund, and what is promised about updates.",
    url: "https://dictami.com/terms",
  },
};

/**
 * Short on purpose.
 *
 * Terms exist here to answer the four questions a buyer actually has — what
 * am I buying, on how many machines, how do I get my money back, and what
 * happens if it breaks — in language that can be read once. Boilerplate long
 * enough to be skipped protects nobody, least of all the person paying.
 */
export default function Terms() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Terms of Use
        </h1>

        <p className="mt-5 font-mono text-[13px] text-muted">Last updated: 31 July 2026</p>

        <div className="mt-14 flex flex-col gap-10">
          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What you are buying</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              A licence to use Dictami on your own Macs. You are not buying the
              software itself: it stays the property of its author, and the
              licence cannot be resold or sublicensed.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              A lifetime licence never expires. Monthly access works for 30 days
              from the day it is activated; when
              it runs out the app stops transcribing, and nothing you have
              already dictated is touched or taken away.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">How many Macs</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Up to two Macs that belong to you. Moving a licence to a
              replacement machine is fine — email support and it is released
              from the old one.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Refunds</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Within 14 days of purchase, for any reason, no explanation
              required. Email{" "}
              <a href="mailto:support@dictami.com" className="text-ink underline underline-offset-4">
                support@dictami.com
              </a>{" "}
              from the address you bought with, or with your licence key, and
              the money goes back the way it came. The key stops working once
              the refund is made.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              There is a 7-day trial inside the app, with no card and no
              account, so the software can be tested in full before any of this
              applies.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Updates</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Updates are delivered inside the app while the licence is valid.
              No specific feature, release schedule or future version is
              promised — what you paid for is the app as it is today, and
              anything after that is improvement rather than obligation.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What is not guaranteed</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Speech recognition makes mistakes. Accuracy varies with the
              microphone, the room, the accent and the language, and Dictami is
              supplied as-is, without a warranty that any particular transcript
              will be correct. Check anything that matters before you send it.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Liability is limited to what you paid for the licence. In
              particular there is no liability for lost work, lost time, or
              anything that follows from a transcript being wrong. Where local
              consumer law gives you rights that cannot be signed away, those
              rights stand regardless of this page.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Acceptable use</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Do not decompile the app, work around the licence check, or
              redistribute it. Recording other people is your responsibility:
              the laws about consent differ from country to country, and
              Dictami cannot know whose voice it is hearing.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Privacy and payment</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              What the app stores and what it never collects is set out in the{" "}
              <a href="/privacy.html" className="text-ink underline underline-offset-4">
                privacy policy
              </a>
              . Card payments are handled by Gumroad on their own site, under
              their terms; crypto payments are handled by NOWPayments. Card
              details never reach Dictami.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Contact</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Questions about any of this:{" "}
              <a href="mailto:support@dictami.com" className="text-ink underline underline-offset-4">
                support@dictami.com
              </a>
              . Who is behind Dictami is on the{" "}
              <Link href="/about" className="text-ink underline underline-offset-4">
                about page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
