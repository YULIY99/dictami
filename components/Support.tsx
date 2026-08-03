import { AppIcon } from "./AppIcon";

/**
 * Support used to be a Tawk live-chat widget. It was removed: a chat nobody is
 * sitting behind reads as "we are away", and the embed set a permanent visitor
 * id cookie on every visit, which in the EU means putting a consent banner in
 * front of the first screen. Mail costs the visitor one click, stores nothing,
 * and loads no third-party script.
 */
export function Support() {
  return (
    <a
      href="mailto:support@dictami.com"
      aria-label="Email support"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-card p-1.5 text-[13px] font-medium text-ink shadow-[0_0_0_1px_rgba(41,44,61,0.09),0_0_0_4px_rgba(255,255,255,0.6),0_10px_28px_-10px_rgba(41,44,61,0.28)] transition hover:-translate-y-px sm:bottom-6 sm:right-6 sm:gap-2.5 sm:py-2.5 sm:pl-2.5 sm:pr-4 sm:text-[14px]"
    >
      {/* On a phone the badge sat across the page like a second header. It
          shrinks to the icon alone there; the word returns from the small
          breakpoint, where there is room for it. */}
      <AppIcon className="!h-6 !w-6 !rounded-[8px] ring-1 ring-ink/5 sm:!h-7 sm:!w-7 sm:!rounded-[9px]" />
      <span className="hidden sm:inline">Email us</span>
    </a>
  );
}
