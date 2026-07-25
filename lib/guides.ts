/**
 * The long-form pages written for search, in one place.
 *
 * They existed for two days reachable only from `sitemap.xml`. A crawler will
 * follow a sitemap, but a page nothing links to is an orphan: it gets fetched,
 * ranked as an afterthought, and receives none of the authority the home page
 * has. Listing them here and rendering that list in the footer — and at the
 * foot of each guide — is what turns eight loose pages into a site.
 *
 * Adding a page means adding a line here AND a `<url>` block to
 * `public/sitemap.xml`; the sitemap is a static file and is not generated
 * from this list.
 */
export type Guide = { href: string; label: string };

export const GUIDES: Guide[] = [
  { href: "/voice-dictation-mac", label: "Voice dictation for Mac" },
  { href: "/speech-to-text-mac", label: "Speech to text on Mac" },
  { href: "/offline-dictation-mac", label: "Offline dictation" },
  { href: "/voice-typing-mac-without-internet", label: "Voice typing without internet" },
  { href: "/dictation-app-mac-apple-silicon", label: "Dictation on Apple Silicon" },
  { href: "/dictation-mac-without-siri", label: "Dictation without Siri" },
  { href: "/voice-dictation-mac-no-subscription", label: "Without a subscription" },
  { href: "/whisper-dictation-mac-app", label: "Whisper on a Mac" },
  { href: "/best-dictation-app-mac-2025", label: "Choosing a dictation app" },
];
