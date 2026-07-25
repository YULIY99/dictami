import Link from "next/link";
import { GUIDES } from "@/lib/guides";

/**
 * The internal-link block. Rendered in the site footer and at the foot of
 * every guide, so each of these pages is reachable from every other one
 * rather than from the sitemap alone.
 *
 * `current` drops the page's own link — a page linking to itself tells a
 * reader nothing and dilutes the block.
 */
export function GuideLinks({
  current,
  onDark = false,
}: {
  current?: string;
  onDark?: boolean;
}) {
  const items = GUIDES.filter((guide) => guide.href !== current);

  return (
    <nav aria-label="Guides">
      <p
        className={`font-mono text-[11px] uppercase tracking-[0.16em] ${
          onDark ? "text-white/40" : "text-muted"
        }`}
      >
        Guides
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
        {items.map((guide) => (
          <li key={guide.href}>
            <Link
              href={guide.href}
              className={`text-[13.5px] transition-colors ${
                onDark ? "hover:text-white" : "text-muted hover:text-ink"
              }`}
            >
              {guide.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
