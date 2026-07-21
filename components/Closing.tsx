"use client";

import { Pill, PillMark } from "./Pill";
import { Wordmark } from "./Wordmark";
import { Reveal } from "./Sections";
import { PRIMARY_CTA } from "@/lib/links";
import { AppleMark } from "./AppleMark";

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
              href={PRIMARY_CTA}
              className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-card px-8 py-3.5 text-[15px] font-medium text-ink transition hover:bg-white/90"
            >
              <AppleMark />
              Download for Mac
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="bg-deep pb-14 text-white/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 border-t border-white/10 px-5 pt-10 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <PillMark className="ring-1 ring-white/15" />
            <Wordmark className="text-[17px]" tone="light" />
          </div>

          <nav className="flex items-center gap-7 text-[13.5px]">
            <a href="/privacy.html" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a
              href="mailto:support@dictami.com"
              className="transition-colors hover:text-white"
            >
              Support
            </a>
          </nav>

          <p className="text-[13px]">© 2026 Dictami</p>
        </div>
      </footer>
    </>
  );
}
