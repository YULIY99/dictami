import type { Metadata } from "next";
import Link from "next/link";
import { withShare } from "@/lib/seo";
import { Article, Section, Steps, type Faq } from "@/components/Article";

const URL = "https://dictami.com/mac-dictation-not-working/";
const TITLE = "Mac Dictation Not Working? How to Fix It (macOS Sonoma & Sequoia)";
const DESCRIPTION =
  "Dictation not working on your Mac or MacBook? Step-by-step fixes for the shortcut, the microphone, Google Docs and Chrome, languages, and Screen Time — and what to do when it keeps stopping.";

export const metadata: Metadata = withShare({
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "article" },
});

const FAQ: Faq[] = [
  {
    q: "Why did dictation suddenly stop working on my Mac?",
    a: "The most common causes are a changed keyboard shortcut (often after a macOS update or a new keyboard), the wrong microphone selected for dictation, a language that is still downloading, or a Screen Time or company profile that turns dictation off. Turning dictation off and on again in System Settings → Keyboard fixes many one-off failures.",
  },
  {
    q: "How do I fix the dictation shortcut on a Mac?",
    a: "Open System Settings → Keyboard, find Dictation, and pick a shortcut you can press reliably, such as pressing Control twice. If you use the Globe (fn) key, check that “Press 🌐 key to” is not set to something else, and if your F-keys act as standard function keys, the microphone key may need fn held down.",
  },
  {
    q: "Why does Mac dictation not work with my external microphone?",
    a: "Dictation has its own microphone setting. In System Settings → Keyboard → Dictation, set Microphone source to your external mic instead of Automatic, and check its input level in System Settings → Sound → Input.",
  },
  {
    q: "Does Mac dictation work in Google Docs?",
    a: "System dictation types into most text fields, but Google Docs draws its own editor and dictation into it can be unreliable. Google Docs also has its own Voice typing (Tools → Voice typing), which works in Chrome and needs Chrome to have microphone access.",
  },
  {
    q: "Why does Mac dictation keep stopping?",
    a: "Apple's dictation ends a session on its own after a pause in speech, and it can stop when you switch windows or click elsewhere. A hold-to-talk dictation app records for exactly as long as you hold the key, so a pause never ends it.",
  },
];

export default function MacDictationNotWorking() {
  return (
    <Article
      path="/mac-dictation-not-working/"
      title="Mac dictation not working? Here’s how to fix it."
      faq={FAQ}
      intro={
        <>
          <p>
            Most dictation failures on a Mac come down to five things: the shortcut, the
            microphone, the language, a restriction, or the app you are typing into. Work
            through the checks below in order — each takes under a minute. The steps use
            the names in macOS Sonoma and Sequoia; older versions keep the same settings
            under System Preferences.
          </p>
        </>
      }
    >
      <Section title="1. Check that dictation is actually on">
        <Steps
          items={[
            <>Open <strong>System Settings → Keyboard</strong>.</>,
            <>Scroll to <strong>Dictation</strong> and make sure it is switched on.</>,
            <>If it was already on, switch it off, wait a few seconds, and switch it on again. This clears a stuck dictation process more often than you would expect.</>,
          ]}
        />
        <p>
          If the switch is greyed out, skip to step 6 — something is restricting it.
        </p>
      </Section>

      <Section title="2. Fix the dictation shortcut">
        <p>
          When nothing happens at all, the shortcut is the usual suspect. It often changes
          after a macOS update or when you plug in a different keyboard.
        </p>
        <Steps
          items={[
            <>In <strong>System Settings → Keyboard → Dictation</strong>, open the <strong>Shortcut</strong> menu and choose something easy to trigger, such as pressing <strong>Control</strong> twice.</>,
            <>If you use the Globe (fn) key, check <strong>Press 🌐 key to</strong> at the top of the Keyboard settings. If it is set to change the input source or show emoji, the double-press for dictation may not fire.</>,
            <>On keyboards with a microphone key (F5 on recent Mac keyboards): if <strong>Use F1, F2, etc. keys as standard function keys</strong> is on, you have to hold fn while pressing it.</>,
            <>Third-party keyboard tools (Karabiner-Elements, BetterTouchTool, gaming-keyboard software) can swallow the key. Quit them briefly to test.</>,
          ]}
        />
      </Section>

      <Section title="3. Pick the right microphone">
        <p>
          Dictation does not always use the microphone you expect. With headphones, a USB
          mic or an external display connected, it may be listening to the wrong one — the
          dictation indicator appears, but no words come out.
        </p>
        <Steps
          items={[
            <>In <strong>System Settings → Keyboard → Dictation</strong>, set <strong>Microphone source</strong> to the mic you are using instead of Automatic.</>,
            <>In <strong>System Settings → Sound → Input</strong>, select the same mic and speak: the input level meter should move. If it doesn’t, the problem is the microphone, not dictation.</>,
            <>Bluetooth headsets switch to a lower-quality mode when their mic is in use, which hurts accuracy. The Mac’s built-in mic is often better than an AirPods mic for dictation.</>,
          ]}
        />
      </Section>

      <Section title="4. Check the dictation language">
        <p>
          If dictation types the wrong words, or nothing, it may be listening in the wrong
          language — or the language may still be downloading for on-device use.
        </p>
        <Steps
          items={[
            <>In <strong>System Settings → Keyboard → Dictation</strong>, open <strong>Languages</strong> and make sure the language you speak is there.</>,
            <>With several languages added, the active one is shown next to the microphone while you dictate; click it to switch.</>,
            <>Right after adding a language, give your Mac a few minutes on Wi-Fi to download it.</>,
          ]}
        />
        <p>
          More detail in{" "}
          <Link href="/change-dictation-language-mac/" className="text-ink underline underline-offset-4">
            how to change the dictation language on a Mac
          </Link>
          .
        </p>
      </Section>

      <Section title="5. Google Docs, Chrome and other apps">
        <p>
          If dictation works in Notes but not in one particular app, the app is the problem,
          not your Mac.
        </p>
        <Steps
          items={[
            <><strong>Google Docs:</strong> Docs draws its own editor, and system dictation into it can drop words or stop. Docs has its own <strong>Tools → Voice typing</strong>, which works in Chrome.</>,
            <><strong>Chrome and other browsers:</strong> web-based voice typing needs the browser to have microphone access — check <strong>System Settings → Privacy &amp; Security → Microphone</strong> and the site’s permission in the address bar.</>,
            <><strong>Terminal, remote desktops and some games:</strong> these handle keyboard input in their own way and may not accept dictated text reliably. Dictate into a text editor and paste.</>,
          ]}
        />
      </Section>

      <Section title="6. Screen Time and work Macs">
        <p>
          A greyed-out dictation switch usually means something is blocking it.
        </p>
        <Steps
          items={[
            <>Open <strong>System Settings → Screen Time → Content &amp; Privacy</strong> and check that Siri &amp; Dictation is allowed in the app and feature restrictions.</>,
            <>On a company-managed Mac, a configuration profile can disable dictation. Check <strong>System Settings → General → Device Management</strong>; if a profile is there, ask your IT team.</>,
          ]}
        />
      </Section>

      <Section title="7. Still broken? Restart and update">
        <p>
          Restart the Mac, then install any pending update in <strong>System Settings →
          General → Software Update</strong>. Dictation bugs do get fixed in point releases,
          and a restart clears the speech services that sometimes hang after sleep.
        </p>
      </Section>

      <Section title="If dictation works but keeps stopping">
        <p>
          Sometimes nothing is broken: Apple’s dictation is designed to end a session after
          a pause, and it stops when you click into another window. If you think while you
          talk, that feels like it cutting out.
        </p>
        <p>
          That is the problem a hold-to-talk app solves. With{" "}
          <Link href="/hold-to-dictate-mac/" className="text-ink underline underline-offset-4">
            Dictami
          </Link>
          , you hold a key, speak, and release: recording lasts exactly as long as the key is
          down, punctuation is added without saying it, and the text lands in whatever app
          your cursor is in. Recognition runs on your Mac, so it also works{" "}
          <Link href="/offline-dictation-mac/" className="text-ink underline underline-offset-4">
            offline
          </Link>{" "}
          and without{" "}
          <Link href="/dictation-mac-without-siri/" className="text-ink underline underline-offset-4">
            Siri
          </Link>
          . It needs macOS 14 or later on an Apple Silicon Mac.
        </p>
      </Section>
    </Article>
  );
}
