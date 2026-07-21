/** Gumroad products, kept in one place so a price change is a one-line edit. */
export const BUY = {
  monthly: "https://highroller5.gumroad.com/l/mjwvomp?wanted=true",
  yearly: "https://highroller5.gumroad.com/l/fhrqme?wanted=true",
  lifetime: "https://highroller5.gumroad.com/l/qrqxml?wanted=true",
} as const;

/** The button in the header and hero: the trial lives inside the app, so the
 *  first click is a download rather than a purchase. */
export const PRIMARY_CTA = BUY.monthly;

/**
 * Our own licence server. It opens the crypto invoice, because the NOWPayments
 * API key must never reach a browser — which is exactly why a static site
 * cannot take crypto on its own.
 */
export const LICENCE_API = "https://dictami-licences.highrollerboy.workers.dev";
