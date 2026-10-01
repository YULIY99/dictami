"use client";

import { useState } from "react";
import { Reveal } from "./Sections";
import { QUESTIONS } from "@/lib/faq";


export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <p className="text-cap font-medium uppercase tracking-[0.08em] text-muted">
            Questions
          </p>
          <h2 className="mt-5 font-display text-h2 font-normal leading-[1.06] tracking-[-0.03em] text-balance">
            The things people ask first.
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-line">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-body font-medium tracking-tight">
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 text-title leading-none text-muted transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-200 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-small leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
