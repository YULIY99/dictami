import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinks } from "@/components/GuideLinks";

export const metadata: Metadata = {
  title: "About Dictami | Who makes it",
  description:
    "Dictami is made by one developer, sold once rather than rented, and built to run with no server behind it. Who wrote it, why it works this way, and how to get hold of him.",
  alternates: { canonical: "https://dictami.com/about" },
  openGraph: {
    title: "About Dictami | Who makes it",
    description:
      "Made by one developer, sold once rather than rented, built to run with no server behind it.",
    url: "https://dictami.com/about",
  },
};

/**
 * The page that says a person is behind this.
 *
 * A privacy claim from an anonymous website is worth nothing: the whole
 * promise is "your voice never leaves your Mac", and the only thing backing
 * it is whoever is making it. Search engines weigh the same signal, but the
 * buyer needs it first.
 */
export default function About() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          One person makes this.
        </h1>

        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          Dictami is written, tested, supported and shipped by Yuliy Metelskiy,
          an independent macOS developer. There is no company behind it, no
          investors, and nobody else to escalate to — the person who answers
          support email is the person who wrote the line of code you are
          asking about.
        </p>

        {/* A name on a page is a claim like any other. This one can be checked
            without trusting the page: the app is signed with an Apple Developer
            ID issued to that person, and Apple verified the identity before
            issuing it. Anyone can read it back off the downloaded app in one
            command, which is worth more than a photograph or a profile
            elsewhere. */}
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          You do not have to take that on trust. Every build is signed with an
          Apple Developer ID issued to that name, and Apple checks who a person
          is before issuing one. Read it back off the app you downloaded:
        </p>
        <pre className="mt-3 overflow-x-auto rounded-xl bg-card p-4 text-[13px] leading-relaxed shadow-[0_0_0_1px_rgba(41,44,61,0.09)]">
          <code>codesign -dv --verbose=2 /Applications/Dictami.app</code>
        </pre>
        <p className="mt-3 text-[14px] leading-relaxed text-muted">
          It prints{" "}
          <span className="text-ink">
            Authority=Developer ID Application: Yuliy Metelskiy (AQVKLV5HJK)
          </span>
          .
        </p>

        <div className="mt-16 flex flex-col gap-10">
          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Why it runs on your Mac</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictation is the one thing people do with a computer where the
              raw material is their own voice: what they are drafting, who they
              are writing to, what they said out loud before they thought
              better of it. Sending that to a server means trusting somebody to
              hold it, and asking you to trust a stranger with it is worse.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              So there is no server to trust. The recognition model runs on
              your machine, the audio never leaves it, and the app keeps
              working with the network switched off entirely. That is a
              statement you can check, not a policy you have to believe.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Why you buy it instead of renting it</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Software that phones home every month can be switched off from
              the other end. Dictami has a licence that never expires for a
              single payment, because an app that keeps working offline should
              keep working when its author stops shipping updates — or stops
              altogether.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Shorter licences exist for people who want to pay less to start.
              They buy the same app; nothing is held back for the higher tier.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What it is built on</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Native macOS, written in Swift, with speech recognition based on
              Whisper compiled for Apple Silicon. It requires macOS 13 Ventura
              or later on an M1 or newer — the on-device speed the app is
              built around comes from that hardware, and pretending otherwise
              on an Intel Mac would only disappoint.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Getting in touch</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Bugs, refunds, licence trouble, or a language you wish it
              handled better:{" "}
              <a href="mailto:support@dictami.com" className="text-ink underline underline-offset-4">
                support@dictami.com
              </a>
              . Replies come from a person, usually within a day.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              The{" "}
              <a href="/privacy.html" className="text-ink underline underline-offset-4">
                privacy policy
              </a>{" "}
              spells out exactly what the app stores and what it never
              collects. The{" "}
              <Link href="/terms" className="text-ink underline underline-offset-4">
                terms
              </Link>{" "}
              cover the licence and the 14-day refund.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <GuideLinks />
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
