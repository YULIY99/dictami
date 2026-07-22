"use client";

import { Reveal } from "./Sections";

/**
 * Long-form section, written to be read.
 *
 * Search engines do reward depth, but the way to get it is not a wall of
 * keywords hidden at the foot of the page — that is detected, devalued, and
 * makes the site look cheap to anyone who scrolls that far. These are the
 * questions people actually type before they buy a dictation app, answered
 * properly, with the product's real behaviour in the answers.
 */
const ARTICLES = [
  {
    heading: "What voice dictation is actually good for",
    paragraphs: [
      "Speaking runs at about 150 words a minute. Typing, for most people, lands somewhere between 40 and 70. That gap is the whole argument, and it shows up most in the writing nobody enjoys: replies to messages, notes after a call, the first rough version of an email you’ll clean up later. Anywhere the words are already clear in your head, saying them is simply faster than finding them on a keyboard.",
      "It is less useful when the thinking happens while you write. Poetry, contracts, code — anything where you pause to weigh a word — is still keyboard work. A good dictation app should not try to be the whole answer. It should be there for the plain prose, and stay out of the way for the rest.",
    ],
  },
  {
    heading: "How to get a clean result on the first try",
    paragraphs: [
      "Speak in ordinary sentences at your ordinary pace. The instinct to slow down and separate every word makes recognition worse, not better — these models were trained on natural speech, and exaggerated pronunciation is further from what they know, not closer to it.",
      "Don’t dictate punctuation. Saying “comma” and “period” out loud is a habit left over from older systems; Dictami places commas, periods, and question marks from the shape of the sentence, and capitalizes the first word of each sentence. If you say the words out loud, you will get the words, not the marks.",
      "Use the built-in microphone if you have a choice. Wireless earbuds switch the Mac to a compressed low-bandwidth microphone profile the moment they connect, and recognition gets worse on that audio. Your Mac's own microphone usually gives cleaner input than a wireless headset.",
      "Think out loud freely. There is no silence detection cutting you off mid-thought — the recording stops when you release the key and not before, so a pause to gather a sentence costs you nothing.",
    ],
  },
  {
    heading: "Why running on your own Mac makes it fast",
    paragraphs: [
      "A cloud dictation service has to package your audio, send it across the network, wait for a machine to become free, run the model, and send the text back. Even when every step goes well, the round trip is most of the delay you feel. On a poor connection it is all of it.",
      "Dictami keeps the recognition model loaded in memory on your Mac. When you release the key, the audio never travels anywhere — the model is already warm and the text is ready in a fraction of a second. That same design is why it works with no connection at all: on a plane, on a train, or in a building with no signal, the behavior stays the same.",
    ],
  },
  {
    heading: "Setting it up",
    paragraphs: [
      "Dictami requires macOS 13 Ventura or later on an Apple Silicon Mac — an M1 or newer. Intel Macs are not supported: the recognition engine is built for Apple Silicon, and the speed the app is built around comes from that hardware.",
      "On first launch, you pick a language and download its model with one click in Settings. On a normal connection, that takes a few minutes. After that the app never needs the internet again. macOS will ask for permission to use the microphone, and for Accessibility access, which is what lets the finished text be typed into whichever app your cursor is in rather than only into Dictami's own window.",
      "Then choose your key. Hold it down like a walkie-talkie and release when you have finished, or tap once to start and once to stop — whichever suits the way you work. The right Command key on its own is the default, and it is captured cleanly, so no other application reacts to it while you are dictating.",
    ],
  },
];

export function Guide() {
  return (
    <section id="guide" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            {/* Sticky so the section keeps its title while the reading column
                scrolls — the column is long, and a heading that scrolls away
                leaves the reader without context. */}
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-muted">
                Reading
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,4.4vw,3.15rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
                Dictation on a Mac, in plain terms.
              </h2>
              <p className="mt-5 max-w-sm text-[15.5px] leading-relaxed text-muted">
                What it’s good for, how to get clean results, and what
                makes it fast. Useful whether or not you buy anything.
              </p>
            </div>
          </Reveal>

          <div className="flex max-w-[65ch] flex-col gap-12">
            {ARTICLES.map((article, i) => (
              <Reveal key={article.heading} delay={i * 0.05}>
                <article>
                  <h3 className="font-display text-[21px] font-medium tracking-[-0.015em]">
                    {article.heading}
                  </h3>
                  <div className="mt-4 flex flex-col gap-4">
                    {article.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-[15.5px] leading-[1.72] text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
