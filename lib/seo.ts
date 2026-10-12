import type { Metadata } from "next";

// Next.js replaces the parent's `openGraph` and `twitter` objects wholesale
// when a page sets its own. Pages here set `openGraph` (title, description,
// url), so without this helper they lost og:image, og:type and og:site_name,
// and every page shared the home page's twitter:title. `withShare` restores
// the shared defaults and derives the Twitter card from the page's own text.
export const SHARE_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Dictami — speak, and the text is already there",
};

export function withShare(metadata: Metadata): Metadata {
  const og = metadata.openGraph ?? {};
  const title = og.title ?? metadata.title ?? undefined;
  const description = og.description ?? metadata.description ?? undefined;
  return {
    ...metadata,
    openGraph: {
      type: "website",
      siteName: "Dictami",
      locale: "en_US",
      images: [SHARE_IMAGE],
      ...og,
    },
    twitter: {
      card: "summary_large_image",
      ...(title ? { title: title as string } : {}),
      ...(description ? { description } : {}),
      images: [SHARE_IMAGE.url],
    },
  };
}
