import type { Metadata } from "next";

/**
 * The page itself is a client component and so cannot carry metadata; this
 * layout exists only to keep it out of search results.
 *
 * It is reached with an order id in the URL and shows a licence key. Nothing
 * about it makes sense to a stranger arriving from a search result, and it
 * inherited the home page's title and canonical, which told Google it was a
 * duplicate of the home page.
 */
export const metadata: Metadata = {
  title: "Your licence key — Dictami",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://dictami.com/thanks/" },
};

export default function ThanksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
