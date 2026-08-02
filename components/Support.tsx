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
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-card py-2.5 pl-2.5 pr-4 text-[14px] font-medium text-ink shadow-[0_0_0_1px_rgba(41,44,61,0.09),0_0_0_4px_rgba(255,255,255,0.6),0_10px_28px_-10px_rgba(41,44,61,0.28)] transition hover:-translate-y-px"
    >
      <AppIcon className="!h-7 !w-7 !rounded-[9px] ring-1 ring-ink/5" />
      Email us
    </a>
  );
}
