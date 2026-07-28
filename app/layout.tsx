import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Aqua Voice runs on PP Neue Montreal, which is licensed and cannot be used
// here. Geist is the closest free relative: the same neo-grotesque family of
// shapes — tall x-height, tight apertures, near-flat terminals — rather than
// the softer humanist curves that made the previous choice read as generic.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dictami.com"),
  // Search results are read by people looking for a tool, so the title keeps
  // the words they actually type — "offline", "dictation", "Mac". The page
  // itself sells speed instead; the two jobs are different.
  title: "Dictami — Fast Offline Voice Dictation for Mac",
  description:
    "Fast offline voice dictation for Mac. Hold a key, speak, and punctuated text appears in any app in about half a second. 28 languages, no account.",
  keywords: [
    "mac dictation app",
    "voice dictation mac",
    "speech to text mac",
    "offline dictation mac",
    "fast dictation mac",
    "voice typing mac",
  ],
  alternates: { canonical: "https://dictami.com/" },
  openGraph: {
    type: "website",
    url: "https://dictami.com/",
    siteName: "Dictami",
    locale: "en_US",
    title: "Dictami — Speak, and the text is already there",
    description:
      "Hold a key, speak, and the text lands in any Mac app in about half a second — with punctuation, in 28 languages, without sending a byte anywhere.",
    // Stating the size lets the card render immediately instead of collapsing
    // to a small thumbnail while the crawler fetches the file.
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Dictami — speak, and the text is already there" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dictami — Speak, and the text is already there",
    description:
      "Voice dictation for Mac that keeps up with you. About half a second, on-device, 28 languages.",
    images: ["/og-image.png"],
  },
  other: { "google-site-verification": "4MFm0bxZWFTg8cYRF78lWRhiiLCajG_PO1S1iB14HXc" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Dictami",
  operatingSystem: "macOS 13 or later, Apple Silicon",
  processorRequirements: "Apple Silicon (M1 or newer)",
  applicationCategory: "ProductivityApplication",
  offers: { "@type": "Offer", price: "5.00", priceCurrency: "USD" },
  description:
    "Voice dictation for Mac that runs entirely on-device. Hold a key, speak, and punctuated text appears in any app in about half a second.",
  url: "https://dictami.com",
  featureList:
    "On-device transcription, 28 fast languages, automatic punctuation, global hotkey, dictation history with playback",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <head>
        {/* The tab icon is now app/icon.png — the app's own artwork, which Next
            wires up by filename. The drawn-in-place SVG that used to sit here
            was three bars on near-black, and next to a row of real app icons it
            read as a placeholder rather than a product. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
