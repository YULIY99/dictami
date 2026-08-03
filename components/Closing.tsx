"use client";

import { Pill } from "./Pill";
import { AppIcon } from "./AppIcon";
import { Wordmark } from "./Wordmark";
import { Reveal } from "./Sections";
import { GuideLinks } from "./GuideLinks";
import { PRIMARY_CTA, DOWNLOAD_FILENAME, SAASHUB_URL } from "@/lib/links";
import { AppleMark } from "./AppleMark";
import { Subscribe } from "./Subscribe";

export function Closing() {
  return (
    <>
      <section className="border-t border-line bg-deep py-24 text-white sm:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <div className="flex justify-center">
              {/* The pill closes the page the way it opened it — the same
                  object the buyer will see on their own screen. */}
              <Pill state="listening" onDark />
            </div>

            <h2 className="mt-10 font-display text-[clamp(2.1rem,4.7vw,3.4rem)] font-normal leading-[1.05] tracking-[-0.03em] text-balance">
              Stop typing what you could just say.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[16.5px] leading-relaxed text-white/60">
              A week to try it, a key to hold, and a Mac that keeps up.
            </p>

            <a
              href={PRIMARY_CTA} download={DOWNLOAD_FILENAME}
              className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-card px-8 py-3.5 text-[15px] font-medium text-ink transition hover:bg-white/90"
            >
              <AppleMark />
              Download for Mac
            </a>

            <Subscribe />
          </Reveal>
        </div>
      </section>

      <footer className="bg-deep pb-14 text-white/50">
        {/* Every long-form page, linked from the one page that has any
            authority to pass on. Without this they were reachable only
            through sitemap.xml. */}
        <div className="mx-auto max-w-6xl border-t border-white/10 px-5 pt-10">
          <GuideLinks onDark />
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-5 border-t border-white/10 px-5 pt-10 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <AppIcon className="ring-1 ring-white/15" />
            <Wordmark className="text-[17px]" tone="light" />
          </div>

          <nav className="flex items-center gap-7 text-[13.5px]">
            <a href="/about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="/privacy.html" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="transition-colors hover:text-white">
              Terms
            </a>
            <a
              href="mailto:support@dictami.com"
              className="transition-colors hover:text-white"
            >
              Support
            </a>
            {/* Referrals run on Gumroad's own affiliate system: a person
                mails us, gets added with a 50% cut, and Gumroad tracks the
                link and pays them — nothing of ours to maintain. */}
            <a
              href="mailto:support@dictami.com?subject=Dictami%20referral%20link&body=Hi!%20I%27d%20like%20a%20referral%20link%20for%20Dictami.%20My%20Gumroad%20account%20e-mail%20is%3A%20"
              className="transition-colors hover:text-white"
            >
              Refer &amp; earn 50%
            </a>
            {/* Third-party proof that the app is a real, reviewed listing and
                not a page that appeared last night. SaaSHub hosts the image;
                a plain <img> keeps it off our own optimiser and out of the
                build, so their outage cannot break ours. */}
            <a
              href={SAASHUB_URL}
              target="_blank"
              rel="noopener"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="https://cdn-b.saashub.com/img/badges/approved-color.png?v=1"
                alt="Dictami is approved on SaaSHub"
                width={150}
                height={44}
                loading="lazy"
                className="h-9 w-auto"
              />
            </a>
          </nav>

          <p className="text-[13px]">© 2026 Dictami</p>
        </div>
      </footer>
    </>
  );
}
