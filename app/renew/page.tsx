"use client";

import { useEffect, useState } from "react";
import { LICENCE_API } from "@/lib/links";

/**
 * Where the app's "Top up" button lands, with the licence key in the URL.
 *
 * Buying from the pricing section mints a NEW licence; this page extends the
 * one already installed. Without it a customer who tops up ends up with two
 * keys and has to work out which to paste, and the days they just bought sit on
 * the wrong one.
 */

const PLANS = [
  { id: "30d", name: "30 days", price: "$4", note: "13¢ a day" },
  { id: "90d", name: "90 days", price: "$10", note: "11¢ a day", best: true },
  { id: "365d", name: "1 year", price: "$31", note: "8¢ a day" },
];

export default function RenewPage() {
  const [key, setKey] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fromURL = new URLSearchParams(window.location.search).get("key");
    if (fromURL) setKey(fromURL.trim().toUpperCase());
  }, []);

  async function topUp(plan: string) {
    const trimmed = key.trim().toUpperCase();
    if (!trimmed) {
      setError("Enter the licence key you want to extend.");
      return;
    }
    setBusy(plan);
    setError(null);
    try {
      const response = await fetch(`${LICENCE_API}/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, key: trimmed }),
      });
      const data = await response.json();
      if (response.status === 404) {
        setError("We do not recognise that key. Check it and try again.");
        setBusy(null);
        return;
      }
      if (!response.ok || !data?.url) throw new Error();
      window.location.href = data.url;
    } catch {
      setError("Could not open the payment page. Please try again.");
      setBusy(null);
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="font-display text-[clamp(2rem,4vw,2.8rem)] font-normal leading-tight tracking-[-0.03em]">
        Add more time.
      </h1>
      <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-muted">
        The days are added to whatever is left on your licence, so paying early
        never costs you time. Same key, nothing to re-enter in the app.
      </p>

      <label htmlFor="key" className="mt-10 block text-[14px] text-muted">
        Your licence key
      </label>
      <input
        id="key"
        value={key}
        onChange={(event) => setKey(event.target.value.toUpperCase())}
        placeholder="DICT-XXXX-XXXX-XXXX"
        spellCheck={false}
        className="mt-2 w-full max-w-md rounded-xl bg-card px-4 py-3 font-mono text-[16px] tracking-wider outline-none"
        style={{ boxShadow: "0 0 0 1px rgba(41,44,61,0.12)" }}
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`flex flex-col rounded-2xl border p-6 ${
              plan.best ? "border-deep bg-deep text-white" : "border-line bg-card"
            }`}
          >
            <h2 className="font-display text-[15px] font-medium">{plan.name}</h2>
            <p className="mt-4 font-display text-4xl tabular-nums tracking-tight">
              {plan.price}
            </p>
            <p
              className={`mt-1 text-[13px] ${
                plan.best ? "text-white/60" : "text-muted"
              }`}
            >
              {plan.note}
            </p>
            <button
              type="button"
              disabled={busy !== null}
              onClick={() => topUp(plan.id)}
              className={`mt-6 rounded-full px-4 py-2.5 text-[14px] font-medium transition disabled:opacity-60 ${
                plan.best
                  ? "bg-card text-ink hover:bg-white/90"
                  : "border border-line hover:border-ink/25"
              }`}
            >
              {busy === plan.id ? "Opening…" : "Pay with crypto"}
            </button>
          </div>
        ))}
      </div>

      {error && <p className="mt-6 text-[14px] text-red-600">{error}</p>}

      <a href="/" className="mt-12 inline-block text-[14px] text-accent">
        ← Back to Dictami
      </a>
    </main>
  );
}
