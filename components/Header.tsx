"use client";

import { useEffect, useState } from "react";
import { PillMark } from "./Pill";
import { Wordmark } from "./Wordmark";
import { PRIMARY_CTA } from "@/lib/links";
import { AppleMark } from "./AppleMark";

const NAV = [
  { href: "#speed", label: "Speed" },
  { href: "#features", label: "Features" },
  { href: "#languages", label: "Languages" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* The reference site anchors its page with a black announcement strip.
          A page that opens on plain white has nothing for the eye to catch,
          and that is a real problem — but the fix does not have to be black,
          and it must carry something true. This says what actually changed in
          the app and links to the measurements. */}
      <a
        href="#speed"
        className="flex items-center justify-center gap-2 px-5 py-2.5 text-center text-[13.5px] text-on-accent transition hover:brightness-105"
        style={{
          background: "linear-gradient(90deg, var(--color-accent), var(--color-wave-a))",
        }}
      >
        <span className="font-medium">New engine</span>
        <span className="text-on-accent/80">
          dictation is about three times faster
        </span>
        <span aria-hidden className="text-on-accent/70">
          →
        </span>
      </a>

      <div
        className={`transition-colors duration-300 ${
          scrolled ? "bg-ground/80 backdrop-blur-xl" : ""
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-6 px-5">
          <a href="#top" className="flex items-center gap-2.5">
            <PillMark />
            <Wordmark className="text-[21px]" />
          </a>

          {/* Links sit in their own soft panel. As bare grey text they read as
              a template; the panel is what makes a header look built. */}
          <nav className="hidden items-center gap-1 rounded-full bg-card/70 p-1.5 ring-1 ring-line md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-1.5 text-[15px] text-ink/80 transition-colors hover:bg-panel hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={PRIMARY_CTA}
            data-gumroad-overlay-checkout="true"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[15px] font-medium text-on-accent shadow-[0_8px_20px_-10px_rgba(59,143,240,0.8)] transition hover:bg-accent-deep"
          >
            <AppleMark />
            Get Dictami
          </a>
        </div>
      </div>
    </header>
  );
}
