"use client";

import { Reveal } from "./Sections";
import { BUY } from "@/lib/links";

const PLANS = [
  {
    name: "Monthly",
    price: "$5",
    note: "per month",
    href: BUY.monthly,
    perks: ["Every language", "Every model", "All updates while subscribed"],
    featured: false,
  },
  {
    name: "Yearly",
    price: "$39",
    note: "per year · saves 35%",
    href: BUY.yearly,
    perks: ["Every language", "Every model", "All updates", "Priority support"],
    featured: true,
  },
  {
    name: "Lifetime",
    price: "$69",
    note: "paid once",
    href: BUY.lifetime,
    perks: ["Every language", "Every model", "All future updates", "No renewal, ever"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-line bg-panel py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-muted">
            Pricing
          </p>
          <h2 className="mx-auto mt-5 max-w-xl font-display text-[clamp(2.1rem,4.4vw,3.15rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
            Try it for a week. Then pick how you pay.
          </h2>
          <p className="mt-5 text-[15px] text-muted">
            The trial runs inside the app — no card, no account.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.07}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 ${
                  plan.featured
                    ? "border-deep bg-deep text-white"
                    : "border-line bg-card"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[15px] font-medium tracking-tight">
                    {plan.name}
                  </h3>
                  {plan.featured && (
                    <span className="rounded-full bg-white/15 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-widest">
                      Best value
                    </span>
                  )}
                </div>

                <p className="mt-6 font-display text-5xl font-normal tabular-nums tracking-tight">
                  {plan.price}
                </p>
                <p
                  className={`mt-1.5 text-[13.5px] ${
                    plan.featured ? "text-white/60" : "text-muted"
                  }`}
                >
                  {plan.note}
                </p>

                <ul className="mt-7 flex flex-col gap-2.5">
                  {plan.perks.map((perk) => (
                    <li
                      key={perk}
                      className={`flex items-start gap-2.5 text-[14px] ${
                        plan.featured ? "text-white/80" : "text-muted"
                      }`}
                    >
                      <span
                        className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${
                          plan.featured ? "bg-white/50" : "bg-accent"
                        }`}
                      />
                      {perk}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  data-gumroad-overlay-checkout="true"
                  className={`mt-8 rounded-full px-5 py-3 text-center text-[14.5px] font-medium transition ${
                    plan.featured
                      ? "bg-card text-ink hover:bg-white/90"
                      : "border border-line hover:border-ink/25"
                  }`}
                >
                  Get {plan.name.toLowerCase()}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-muted">
          Full refund within 14 days, no questions asked.
        </p>
      </div>
    </section>
  );
}
