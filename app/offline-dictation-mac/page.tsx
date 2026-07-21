import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Offline Dictation on Mac | Dictami",
  description: "Use private offline speech-to-text on your Mac with Dictami. No account required and your dictation stays on your device.",
  alternates: { canonical: "https://dictami.com/offline-dictation-mac" },
};

export default function OfflineDictationMac() {
  return <main style={{maxWidth: 760, margin: "0 auto", padding: "96px 24px", fontFamily: "Arial, sans-serif"}}>
    <Link href="/">← Dictami</Link>
    <h1>Private offline dictation for Mac</h1>
    <p>Dictami is built for people who want voice typing without sending recordings to a cloud service. Speech recognition runs locally on your Mac and text appears directly in the app you are using.</p>
    <h2>Why use offline speech-to-text?</h2>
    <ul><li>Keep sensitive notes and drafts on your own computer.</li><li>Dictate without depending on a web connection.</li><li>Use one hotkey across your writing workflow.</li></ul>
    <p>Dictami supports 28 languages, automatic punctuation, and dictation history with playback. <Link href="/#pricing">See plans and start a trial →</Link></p>
  </main>;
}
