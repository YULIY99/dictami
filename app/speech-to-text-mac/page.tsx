import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speech to Text for Mac | Dictami",
  description: "Turn speech into text on Mac in any app. Dictami offers fast on-device transcription, punctuation, a global hotkey, and 28 languages.",
  alternates: { canonical: "https://dictami.com/speech-to-text-mac" },
};

export default function SpeechToTextMac() {
  return <main style={{maxWidth: 760, margin: "0 auto", padding: "96px 24px", fontFamily: "Arial, sans-serif"}}>
    <Link href="/">← Dictami</Link>
    <h1>Speech to text on Mac, in any app</h1>
    <p>Dictami turns spoken words into text where you already work: your browser, editor, email client, notes app, or chat. Hold the hotkey, talk, and release.</p>
    <h2>Made for real writing</h2>
    <p>Automatic punctuation, fast local recognition, and support for 28 languages make Dictami useful for quick ideas as well as long-form writing. There is no account required to start the in-app trial.</p>
    <p><Link href="/#pricing">Get Dictami for Mac →</Link></p>
  </main>;
}
