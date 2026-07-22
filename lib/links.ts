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
export const DOWNLOAD = "/Dictami.dmg";

/** The button in the header and hero. */
export const PRIMARY_CTA = DOWNLOAD;

/**
 * Our own licence server. It opens the crypto invoice, because the NOWPayments
 * API key must never reach a browser — which is exactly why a static site
 * cannot take crypto on its own.
 */
export const LICENCE_API = "https://api.dictami.com";

/**
 * The same server under its Cloudflare-issued address.
 *
 * Not every resolver answers for `api.dictami.com`. A VPN's resolver was seen
 * returning the site's own records happily and nothing at all for the `api`
 * name, which leaves that buyer staring at "could not open the payment page"
 * with no way to pay and no way to know why. Since the two addresses are
 * different names in different zones, one usually works when the other does
 * not.
 */
const LICENCE_API_FALLBACK = "https://dictami-licences.highrollerboy.workers.dev";

/**
 * Calls the licence server, retrying on the fallback address.
 *
 * Only a failure to reach the server at all is retried — a DNS miss or a
 * dropped connection, which is what a hostile resolver produces. An answer
 * from the server, including an error it chose to return, is passed straight
 * back: retrying that would double-charge nothing but would hide real faults.
 */
export async function licenceFetch(path: string, init?: RequestInit): Promise<Response> {
  try {
    return await fetch(`${LICENCE_API}${path}`, init);
  } catch {
    return await fetch(`${LICENCE_API_FALLBACK}${path}`, init);
  }
}
