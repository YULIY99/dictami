import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinks } from "@/components/GuideLinks";

/**
 * Shared shell for long-form guides: the same back link, headline, calls to
 * action, guide list and closing download as the hand-written guides, so new
 * articles look identical without repeating ~60 lines of layout each time.
 * An optional FAQ renders visibly AND as FAQPage JSON-LD from one source, so
 * the markup can never drift from what a reader sees.
 */
export type Faq = { q: string; a: string };

export function Article({
  path,
  title,
  intro,
  faq,
  children,
}: {
  path: string;
  title: string;
  intro: React.ReactNode;
  faq?: Faq[];
  children: React.ReactNode;
}) {
  const faqJsonLd = faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-ground text-ink">
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <div className="mx-auto max-w-2xl px-5 py-24 sm:py-32">
        <Link href="/" className="inline-flex items-center gap-1.5 text-cap text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-h2 font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          {title}
        </h1>

        <div className="mt-5 text-body leading-relaxed text-muted">{intro}</div>

        <div className="mt-16 flex flex-col gap-10">{children}</div>

        {faq?.length ? (
          <section className="mt-12">
            <h2 className="text-title font-medium tracking-tight">Questions</h2>
            <dl className="mt-4 flex flex-col gap-5">
              {faq.map((f) => (
                <div key={f.q}>
                  <dt className="text-body font-medium">{f.q}</dt>
                  <dd className="mt-1.5 text-body leading-relaxed text-muted">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <div className="mt-16 border-t border-line pt-10">
          <GuideLinks current={path} />
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <p className="text-body text-muted">7-day trial inside the app. No card, no account.</p>
          <a
            href={PRIMARY_CTA}
            download={DOWNLOAD_FILENAME}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep"
          >
            Download Dictami
          </a>
        </div>
      </div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-title font-medium tracking-tight">{title}</h2>
      <div className="mt-3 flex flex-col gap-3 text-body leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export function Steps({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="list-decimal pl-5 flex flex-col gap-1.5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}
