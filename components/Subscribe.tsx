"use client";

import { useState } from "react";
import { licenceFetch } from "@/lib/links";

/**
 * The optional email field beside the download button.
 *
 * It sits *after* the download link and never in front of it. The page has
 * promised "no account" since the hero, and a form that has to be filled in
 * before the app arrives would make that a lie — so this asks for nothing and
 * costs nothing to walk past.
 *
 * The news box is separate and starts empty on purpose. Wanting the link in
 * your inbox is not the same as wanting to be advertised to, and the two are
 * only ever the same tick box on sites that would rather not know the
 * difference. Ticking it does not subscribe anyone either — the server sends a
 * confirmation the reader has to click, and says so here so the extra email is
 * expected rather than mistaken for the news itself.
 */

type State = "idle" | "sending" | "done" | "pending" | "invalid" | "failed";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [marketing, setMarketing] = useState(false);
  const [trap, setTrap] = useState("");
  const [state, setState] = useState<State>("idle");

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (state === "sending") return;
    setState("sending");

    try {
      const response = await licenceFetch("/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), marketing, website: trap }),
      });
      if (response.ok) {
        const body = await response.json().catch(() => null);
        setState(body?.status === "pending" ? "pending" : "done");
      } else if (response.status === 400) setState("invalid");
      else setState("failed");
    } catch {
      setState("failed");
    }
  }

  if (state === "done" || state === "pending") {
    return (
      <p className="mx-auto mt-10 max-w-sm text-[14px] leading-relaxed text-white/55">
        {state === "pending"
          ? "Sent. The email has your download link, and a button to confirm the news — nothing is sent until you press it."
          : "Sent. Check your inbox for the link."}
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="mx-auto mt-10 max-w-sm text-left">
      <label htmlFor="subscribe-email" className="sr-only">
        Email address
      </label>

      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="subscribe-email"
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (state !== "idle") setState("idle");
          }}
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-full bg-white/[0.07] px-5 py-3 text-[15px] text-white placeholder:text-white/35 outline-none ring-1 ring-white/15 transition focus:ring-white/35"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded-full bg-card px-6 py-3 text-[15px] font-medium text-ink transition hover:bg-white/90 disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Email me the link"}
        </button>
      </div>

      {/* Hidden from people and from screen readers; a bot filling in every
          field it can find is the one thing that reaches it. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        value={trap}
        onChange={(event) => setTrap(event.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-[13.5px] leading-relaxed text-white/50">
        <input
          type="checkbox"
          checked={marketing}
          onChange={(event) => setMarketing(event.target.checked)}
          className="mt-[3px] h-3.5 w-3.5 shrink-0 accent-accent"
        />
        Also send me occasional Dictami news. We will email you to confirm, and
        you can unsubscribe any time.
      </label>

      <p className="mt-3 text-[12.5px] text-white/35">
        {state === "invalid"
          ? "That address does not look right."
          : state === "failed"
            ? "Could not send it. The download button above works regardless."
            : "Optional — the download above needs no email."}
      </p>
    </form>
  );
}
