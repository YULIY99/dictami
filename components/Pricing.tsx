"use client";

import { useState } from "react";
import { Reveal } from "./Sections";
import { BUY, licenceFetch } from "@/lib/links";

/**
 * Two payment rails, two different products — deliberately.
 *
 * Cards can charge again next month, so cards sell a subscription. Crypto
 * cannot: there is nothing to charge, and a "monthly plan" paid in USDT is one
 * payment that quietly dies. So crypto sells TIME, the way Mullvad does — buy
 * days, top up whenever, days add to what is left. Pretending both rails can
 * do the same thing is what leaves crypto buyers switched off a month later
 * with no warning.
 *
 * Crypto is cheaper per day because it costs us less: no card processing, no
 * chargebacks.
 */

type Rail = "card" | "crypto";

const CARD_PLANS = [
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

/** A fifth off every card price. Crypto costs us no processing fee and cannot
 *  be charged back, so the saving is real rather than a promotion. */
const CRYPTO_DISCOUNT = "20%";
const CRYPTO_PLANS = [
  {
    id: "30d",
    name: "30 days",
    price: "$4",
    was: "$5",
    note: "13¢ a day",
    perks: ["Every language", "Every model", "Top up any time"],
    featured: false,
  },
  {
    id: "90d",
    name: "90 days",
    price: "$10",
    was: "$13",
    note: "11¢ a day",
    perks: ["Every language", "Every model", "Top up any time", "Priority support"],
    featured: true,
  },
  {
    id: "365d",
    name: "1 year",
    price: "$31",
    was: "$39",
    note: "8¢ a day · cheapest way to run it",
    perks: ["Every language", "Every model", "Top up any time", "Priority support"],
    featured: false,
  },
];

function Card({
  featured,
  children,
}: {
  featured: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-7 ${
        featured ? "border-deep bg-deep text-white" : "border-line bg-card"
      }`}
    >
      {children}
    </div>
  );
}

function Perks({ perks, featured }: { perks: string[]; featured: boolean }) {
  return (
    <ul className="mt-7 flex flex-col gap-2.5">
      {perks.map((perk) => (
        <li
          key={perk}
          className={`flex items-start gap-2.5 text-[14px] ${
            featured ? "text-white/80" : "text-muted"
          }`}
        >
          <span
            className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${
              featured ? "bg-white/50" : "bg-accent"
            }`}
          />
          {perk}
        </li>
      ))}
    </ul>
  );
}

export function Pricing() {
  const [rail, setRail] = useState<Rail>("card");
  const [busy, setBusy] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  /** The API key lives on the server, so the invoice is opened there. */
  async function payWithCrypto(plan: string) {
    setBusy(plan);
    setFailed(false);
    try {
      const response = await licenceFetch("/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await response.json();
      if (!response.ok || !data?.url) throw new Error(data?.error || "no url");
      window.location.href = data.url;
    } catch {
      setFailed(true);
      setBusy(null);
    }
  }

  const plans = rail === "card" ? CARD_PLANS : CRYPTO_PLANS;

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
            The trial starts in the app — no card, no account.
          </p>

          {/* One switch rather than six buttons: the two rails sell different
              things, and showing both at once invites the reader to compare a
              subscription against a bundle of days. */}
          <div
            className="mx-auto mt-9 inline-flex rounded-full bg-card p-1"
            style={{ boxShadow: "0 0 0 1px rgba(41,44,61,0.09)" }}
            role="tablist"
            aria-label="Payment method"
          >
            {(
              [
                ["card", "Card"],
                ["crypto", "Crypto"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={rail === value}
                onClick={() => setRail(value)}
                className={`flex items-center gap-2 rounded-full px-6 py-2 text-[14px] font-medium transition ${
                  rail === value
                    ? "bg-accent text-on-accent"
                    : "text-muted hover:text-ink"
                }`}
              >
                {label}
                {/* The saving has to be visible before the tab is opened —
                    nobody switches payment method out of curiosity. */}
                {value === "crypto" && (
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[10.5px] tracking-wide ${
                      rail === "crypto"
                        ? "bg-white/20 text-on-accent"
                        : "bg-accent/12 text-accent"
                    }`}
                  >
                    −{CRYPTO_DISCOUNT}
                  </span>
                )}
              </button>
            ))}
          </div>

          <p className="mt-4 text-[13px] text-muted">
            {rail === "card"
              ? "Renews automatically. Cancel whenever you like."
              : `${CRYPTO_DISCOUNT} off every price — card fees are ours, not yours. You buy days, and topping up adds to what is left.`}
          </p>
          {rail === "crypto" && (
            <p className="mt-2 text-[12.5px] text-muted">
              Pay with USDT, USDC, ETH, SOL, TON, DOGE, and many more via NOWPayments.
            </p>
          )}
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={`${rail}-${plan.name}`} delay={i * 0.07}>
              <Card featured={plan.featured}>
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

                <p className="mt-6 flex items-baseline gap-3 font-display text-5xl font-normal tabular-nums tracking-tight">
                  {plan.price}
                  {/* The card price struck through, so the discount is a
                      comparison the reader can see rather than a claim. */}
                  {"was" in plan && (
                    <span
                      className={`text-[22px] line-through ${
                        plan.featured ? "text-white/40" : "text-muted/60"
                      }`}
                    >
                      {plan.was}
                    </span>
                  )}
                </p>
                <p
                  className={`mt-1.5 text-[13.5px] ${
                    plan.featured ? "text-white/60" : "text-muted"
                  }`}
                >
                  {plan.note}
                </p>

                <Perks perks={plan.perks} featured={plan.featured} />

                {"href" in plan ? (
                  <a
                    href={plan.href}
                    data-gumroad-overlay-checkout="true"
                    className={`mt-8 rounded-full px-5 py-3 text-center text-[14.5px] font-medium transition ${
                      plan.featured
                        ? "bg-card text-ink hover:bg-white/90"
                        : "border border-line hover:border-ink/25"
                    }`}
                  >
                    Pay by card
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled={busy !== null}
                    onClick={() => payWithCrypto(plan.id)}
                    className={`mt-8 rounded-full px-5 py-3 text-center text-[14.5px] font-medium transition disabled:opacity-60 ${
                      plan.featured
                        ? "bg-card text-ink hover:bg-white/90"
                        : "border border-line hover:border-ink/25"
                    }`}
                  >
                    {busy === plan.id ? "Opening…" : "Pay with crypto"}
                  </button>
                )}
              </Card>
            </Reveal>
          ))}
        </div>

        {failed && (
          <p className="mt-6 text-center text-[13.5px] text-red-600">
            Could not open the payment page. Please try again, or write to us
            and we will send an invoice.
          </p>
        )}

        <p className="mt-8 text-center text-[13px] text-muted">
          {rail === "card"
            ? "Full refund within 14 days, no questions asked."
            : "Crypto payments are final — there is no way to reverse them, so the 7-day trial is there to decide before you pay."}
        </p>
      </div>
    </section>
  );
}
