"use client";

import { useEffect, useState } from "react";
import { licenceFetch } from "@/lib/links";

/**
 * Where NOWPayments sends the buyer after paying.
 *
 * This page is how the licence key is delivered. It could have been an email,
 * but an email needs a provider, a domain reputation and a spam folder to get
 * lost in — and a buyer who has just parted with crypto should not be waiting
 * on any of that. The order id is a random UUID, which is what keeps the key
 * from being fetched by anyone else.
 *
 * The wait is real: a chain confirmation takes seconds to minutes, so the page
 * polls rather than pretending the key is ready.
 */

type State =
  | { phase: "loading" }
  | { phase: "waiting"; status: string }
  | { phase: "done"; key: string; expiresAt: number | null }
  | { phase: "unknown" };

function daysLeft(expiresAt: number | null) {
  if (!expiresAt) return null;
  return Math.max(0, Math.round((expiresAt - Date.now() / 1000) / 86400));
}

export default function ThanksPage() {
  const [state, setState] = useState<State>({ phase: "loading" });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const order = new URLSearchParams(window.location.search).get("order");
    if (!order) {
      setState({ phase: "unknown" });
      return;
    }

    let stop = false;

    async function poll() {
      try {
        const response = await licenceFetch(
          `/order?order=${encodeURIComponent(order!)}`,
        );
        if (response.status === 404) {
          if (!stop) setState({ phase: "unknown" });
          return;
        }
        const data = await response.json();
        if (stop) return;

        if (data.status === "finished" && data.key) {
          setState({ phase: "done", key: data.key, expiresAt: data.expiresAt });
          return;
        }
        setState({ phase: "waiting", status: data.status || "waiting" });
      } catch {
        if (!stop) setState({ phase: "waiting", status: "waiting" });
      }
      // Slow enough not to hammer the worker while a chain confirms, quick
      // enough that the key appears while the buyer is still looking.
      if (!stop) setTimeout(poll, 4000);
    }

    poll();
    return () => {
      stop = true;
    };
  }, []);

  const days = state.phase === "done" ? daysLeft(state.expiresAt) : null;

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center px-5 py-24">
      {state.phase === "loading" && <p className="text-muted">Checking your payment…</p>}

      {state.phase === "waiting" && (
        <>
          <h1 className="font-display text-[clamp(2rem,4vw,2.8rem)] font-normal leading-tight tracking-[-0.03em]">
            Waiting for the network to confirm.
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-muted">
            This usually takes under a minute. Leave this page open — your
            licence key appears here as soon as the payment lands.
          </p>
          <p className="mt-6 font-mono text-[12.5px] uppercase tracking-widest text-muted">
            Status: {state.status}
          </p>
        </>
      )}

      {state.phase === "done" && (
        <>
          <h1 className="font-display text-[clamp(2rem,4vw,2.8rem)] font-normal leading-tight tracking-[-0.03em]">
            Paid. Here is your licence key.
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-muted">
            Open Dictami, go to <strong className="text-ink">About → Activate key</strong>,
            and paste it in.
            {days !== null && ` It is good for ${days} days from now.`}
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl bg-card p-6"
            style={{ boxShadow: "0 0 0 1px rgba(41,44,61,0.09)" }}
          >
            <code className="font-mono text-[clamp(1.1rem,3vw,1.5rem)] tracking-wider">
              {state.key}
            </code>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(state.key);
                setCopied(true);
                setTimeout(() => setCopied(false), 1800);
              }}
              className="rounded-full bg-accent px-5 py-2 text-[14px] font-medium text-on-accent"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          {/* Losing the key means losing the purchase, and a crypto payment
              cannot be looked up by card number later. Say so while they are
              still on the page. */}
          <p className="mt-6 text-[14px] leading-relaxed text-muted">
            Save this key somewhere safe. When the days run low, buy more with
            the same key and the time is added to what is left.
          </p>
        </>
      )}

      {state.phase === "unknown" && (
        <>
          <h1 className="font-display text-[clamp(2rem,4vw,2.8rem)] font-normal leading-tight tracking-[-0.03em]">
            We could not find that order.
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-muted">
            If you have paid and see this, write to us with the payment id from
            your wallet and we will sort it out straight away.
          </p>
        </>
      )}

      <a href="/" className="mt-10 text-[14px] text-accent">
        ← Back to Dictami
      </a>
    </main>
  );
}
