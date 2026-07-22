"use client";

import { useEffect, useState } from "react";
import { PillMark } from "./Pill";

declare global {
  interface Window {
    Tawk_API?: {
      hideWidget?: () => void;
      showWidget?: () => void;
      maximize?: () => void;
      onBeforeLoad?: () => void;
      onLoad?: () => void;
      onChatMinimized?: () => void;
      onChatMaximized?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

const TAWK_SRC = "https://embed.tawk.to/6a5e0725940f101d5323b913/1jtvknr7q";

/**
 * Tawk's own launcher is a green bubble that belongs to a different website.
 * The widget itself is worth keeping — a real person answers it — so the
 * launcher is hidden and replaced with a control in the page's own language.
 * The panel only appears once someone asks for it.
 */
export function Support() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // The configuration has to exist before the embed script runs, otherwise
    // the default bubble paints for a moment before we can hide it.
    const api = (window.Tawk_API = window.Tawk_API || {});
    window.Tawk_LoadStart = new Date();

    // onLoad fires only after Tawk has already painted its own green launcher,
    // which flashed in the corner for about a second before it was hidden
    // again. onBeforeLoad runs first, so the launcher never reaches the screen.
    // Hiding it by CSS is not an option: Tawk gives its iframes randomly
    // generated ids with no stable class to select.
    api.onBeforeLoad = () => api.hideWidget?.();

    api.onLoad = () => {
      api.hideWidget?.();
      setReady(true);
    };
    // Closing the panel puts the bubble back unless it is hidden again.
    api.onChatMinimized = () => api.hideWidget?.();

    if (!document.querySelector(`script[src="${TAWK_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = TAWK_SRC;
      script.async = true;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.body.appendChild(script);
    }
  }, []);

  const open = () => {
    window.Tawk_API?.showWidget?.();
    window.Tawk_API?.maximize?.();
  };

  // A black slab in the corner of a light page is a foreign object. The same
  // white-chip treatment as the rest of the page, with the mark carrying the
  // only colour, lets it belong here.
  return (
    <button
      type="button"
      onClick={open}
      disabled={!ready}
      aria-label="Open support chat"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-card py-2.5 pl-2.5 pr-4 text-[14px] font-medium text-ink shadow-[0_0_0_1px_rgba(41,44,61,0.09),0_0_0_4px_rgba(255,255,255,0.6),0_10px_28px_-10px_rgba(41,44,61,0.28)] transition hover:-translate-y-px disabled:pointer-events-none disabled:opacity-0"
    >
      <PillMark className="!h-7 !w-7 !rounded-[9px]" />
      Talk to us
    </button>
  );
}
