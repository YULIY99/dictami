import Link from "next/link";

/**
 * German counterpart of GuideLinks. Kept separate on purpose: the German
 * pilot has only a handful of pages, and mixing them into the English list
 * would put German labels in the English footer.
 *
 * Adding a German page means adding a line here AND a <url> block with its
 * hreflang pair to public/sitemap.xml.
 */
export const GUIDES_DE = [
  { href: "/de/diktieren-mac-ohne-cloud/", label: "Diktieren ohne Cloud" },
  { href: "/de/offline-diktieren-mac/", label: "Offline diktieren" },
  { href: "/de/diktier-app-mac-ohne-abo/", label: "Ohne Abo" },
  { href: "/de/wispr-flow-alternative-mac/", label: "Wispr-Flow-Alternative" },
];

export function GuideLinksDe({ current }: { current?: string }) {
  const items = GUIDES_DE.filter((guide) => guide.href !== current);

  return (
    <nav aria-label="Ratgeber">
      <p className="text-cap font-medium uppercase tracking-[0.08em] text-muted">Ratgeber</p>
      <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:flex sm:flex-wrap">
        {items.map((guide) => (
          <li key={guide.href}>
            <Link href={guide.href} className="text-cap text-muted transition-colors hover:text-ink">
              {guide.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/" hrefLang="en" className="text-cap text-muted transition-colors hover:text-ink">
            English site
          </Link>
        </li>
      </ul>
    </nav>
  );
}
