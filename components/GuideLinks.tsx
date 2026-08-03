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
      {/* On a phone the wrapped rows broke at different widths and the block
          read as ragged. A two-column grid there keeps the left edges lined
          up; from the small breakpoint the free wrap is fine again. */}
      <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:flex sm:flex-wrap">
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
