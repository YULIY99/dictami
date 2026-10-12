import type { Metadata } from "next";
import Link from "next/link";
import { withShare } from "@/lib/seo";
import { Article, Section, Steps, type Faq } from "@/components/Article";

const URL = "https://dictami.com/change-dictation-language-mac/";
const TITLE = "How to Change the Dictation Language on Mac (and Use Several)";
const DESCRIPTION =
  "Change the dictation language on your Mac or MacBook, add a second language, and switch between them while you dictate. Step by step for macOS Sonoma and Sequoia.";

export const metadata: Metadata = withShare({
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "article" },
});

const FAQ: Faq[] = [
  {
    q: "How do I change the dictation language on a Mac?",
    a: "Open System Settings → Keyboard, find Dictation, and use Languages to add the language you want. With more than one language added, the active language is shown next to the microphone while you dictate, and you can click it to switch.",
  },
  {
    q: "Can Mac dictation use two languages at once?",
    a: "You can add several languages, but Apple's dictation listens in one of them at a time; you switch between them rather than mixing them in one sentence.",
  },
  {
    q: "Why is my dictation language missing or greyed out?",
    a: "Some languages have to be downloaded before they work, which needs an internet connection and a few minutes. Not every keyboard language is available for dictation, and availability can depend on your macOS version and region.",
  },
  {
    q: "Does the dictation language follow my keyboard layout?",
    a: "They are separate settings. Your keyboard input source controls what the keys type; the dictation languages control what speech is recognized. Set both if you write in more than one language.",
  },
];

export default function ChangeDictationLanguageMac() {
  return (
    <Article
      path="/change-dictation-language-mac/"
      title="How to change the dictation language on a Mac."
      faq={FAQ}
      intro={
        <p>
          Dictation on a Mac listens in the language you set for it, not necessarily the
          one your Mac’s menus use. Here is how to change it, add a second language, and
          switch between them — using the names in macOS Sonoma and Sequoia.
        </p>
      }
    >
      <Section title="Change the dictation language">
        <Steps
          items={[
            <>Open <strong>System Settings → Keyboard</strong>.</>,
            <>Scroll to <strong>Dictation</strong> and make sure it is on.</>,
            <>Next to <strong>Languages</strong>, click <strong>Edit…</strong>.</>,
            <>Tick the language you want. For languages with regional variants — English, Spanish, French, Portuguese, German, Chinese — pick the region that matches how you speak.</>,
            <>Untick the languages you don’t need, so you don’t land in the wrong one by accident.</>,
          ]}
        />
        <p>
          A newly added language may need to download before it works, so stay online for a
          few minutes after adding it.
        </p>
      </Section>

      <Section title="Use more than one language">
        <p>
          You can keep several languages added. While you dictate, the active language is
          shown next to the microphone indicator; click it to choose another. Apple’s
          dictation listens in one language at a time, so switch before you start speaking
          rather than mid-sentence.
        </p>
        <p>
          Remember that the keyboard layout is a separate setting under{" "}
          <strong>System Settings → Keyboard → Text Input</strong>. Dictation in German with
          an English layout works, but you will want the German layout too for typing ä, ö,
          ü and ß yourself.
        </p>
      </Section>

      <Section title="If the language is wrong or dictation types gibberish">
        <Steps
          items={[
            <>Check which language is active in the dictation indicator — the most common cause is dictating in one language while another is selected.</>,
            <>Remove and re-add the language to force a fresh download.</>,
            <>If dictation does nothing at all, the problem is usually elsewhere: see <Link href="/mac-dictation-not-working/" className="text-ink underline underline-offset-4">Mac dictation not working</Link>.</>,
          ]}
        />
      </Section>

      <Section title="Dictating in several languages every day">
        <p>
          If you switch languages often, the switching becomes the slow part. Dictami
          recognizes 28 languages at full speed on your Mac — including
          German, French, Spanish, Italian, Polish, Ukrainian, Russian, Japanese, Korean
          and Chinese — on your Mac, with punctuation and capitalization. You hold a key,
          speak and release, and the text lands in whatever app you’re in; nothing is sent
          to a server, so it also works{" "}
          <Link href="/offline-dictation-mac/" className="text-ink underline underline-offset-4">
            offline
          </Link>
          .
        </p>
        <p>
          See the full{" "}
          <Link href="/#languages" className="text-ink underline underline-offset-4">
            language list
          </Link>
          . Dictami needs macOS 14 or later on an Apple Silicon Mac.
        </p>
      </Section>
    </Article>
  );
}
