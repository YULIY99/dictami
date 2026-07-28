/**
 * Gumroad checkout, kept in one place so a price change is a one-line edit.
 *
 * These point straight at the payment form rather than at the product page.
 * The product page in an overlay looked better, but it cost a step: the buyer
 * chose a plan here, then read the same plan again over there, then pressed
 * "Add to cart", and only then saw a card field. The overlay cannot be kept
 * either way — Gumroad's cart leaves this domain on that button, so the choice
 * was one hop or two, not overlay or not.
 *
 * `option` is the tier id and is not guessable; it comes from the buy button on
 * the product page (`dictami.gumroad.com/l/<id>`). If a tier is ever recreated
 * in Gumroad the id changes and these links must be copied again — a stale one
 * lands the buyer on an error page, so check all three after touching tiers.
 * Lifetime has no tiers and so needs no `option`.
 */
export const BUY = {
  monthly:
    "https://gumroad.com/checkout?product=mjwvomp&option=jehT1xwYbvQf4SG0Dj4vfg%3D%3D&recurrence=monthly&quantity=1",
  yearly:
    "https://gumroad.com/checkout?product=fhrqme&option=yy-dP_hOP0IFTGMbRA_BLg%3D%3D&recurrence=yearly&quantity=1",
  lifetime: "https://gumroad.com/checkout?product=qrqxml&quantity=1",
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
