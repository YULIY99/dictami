import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voice Dictation for Mac | Dictami",
  description: "Dictami is a fast voice dictation app for Mac. Speak naturally and get clean, punctuated text in any app with on-device recognition.",
  alternates: { canonical: "https://dictami.com/voice-dictation-mac" },
};

export default function VoiceDictationMac() {
  return <main style={{maxWidth: 760, margin: "0 auto", padding: "96px 24px", fontFamily: "Arial, sans-serif"}}>
    <Link href="/">← Dictami</Link>
    <h1>Voice dictation for Mac that keeps up with you</h1>
    <p>Dictami lets you hold a key, speak naturally, and place polished text into almost any Mac app. It is designed for writing emails, notes, documents, messages, and code without breaking your flow.</p>
    <h2>Fast, private dictation</h2>
    <p>Recognition runs on your Mac, so your voice does not need to travel to a remote server. Dictami adds punctuation and supports 28 languages, making it useful for everyday writing and multilingual work.</p>
    <h2>How it works</h2>
    <ol><li>Hold the Dictami hotkey.</li><li>Speak normally.</li><li>Release the key and continue working.</li></ol>
    <p><Link href="/#pricing">Try Dictami for a week →</Link></p>
  </main>;
}
