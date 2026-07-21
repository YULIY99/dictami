/** Gumroad products, kept in one place so a price change is a one-line edit. */
export const BUY = {
  monthly: "https://highroller5.gumroad.com/l/mjwvomp?wanted=true",
  yearly: "https://highroller5.gumroad.com/l/fhrqme?wanted=true",
  lifetime: "https://highroller5.gumroad.com/l/qrqxml?wanted=true",
} as const;

/**
 * The app itself, served from this site rather than from a shop.
 *
 * The trial lives inside the app, so the first click has to be a download and
 * not a checkout. Hosting the file here is also what keeps the two payment
 * rails honest: a crypto buyer gets a key and nothing else, and would have had
 * nowhere to get the app from if the only copy sat behind a Gumroad purchase.
 * One file, updated by the release script, and Sparkle takes it from there.
 */
export const DOWNLOAD = "/Dictami.zip";

/** The button in the header and hero. */
export const PRIMARY_CTA = DOWNLOAD;

/**
 * Our own licence server. It opens the crypto invoice, because the NOWPayments
 * API key must never reach a browser — which is exactly why a static site
 * cannot take crypto on its own.
 */
export const LICENCE_API = "https://dictami-licences.highrollerboy.workers.dev";
