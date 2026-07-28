import type { Metadata } from "next";

/**
 * Same reason as `thanks`: a client component cannot export metadata, and this
 * page is reached from inside the app with a licence key in the URL. It is a
 * tool for people who already paid, not a page to be found in a search.
 */
export const metadata: Metadata = {
  title: "Top up your licence — Dictami",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://dictami.com/renew/" },
};

export default function RenewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
