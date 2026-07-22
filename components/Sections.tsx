"use client";

import { motion } from "motion/react";
import { BRANDS } from "@/lib/brands";

/* ------------------------------------------------------------------ */
/* Shared reveal — one gentle rise, used everywhere so the page has a   */
/* single motion vocabulary instead of a different effect per section.  */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* A chip carries two outlines: a hairline that defines the edge and a wider
   white halo that lifts it off the grey ground. One border alone looks
   stamped on; the pair is what gives the row depth. */
const CHIP =
  "flex items-center gap-2.5 whitespace-nowrap rounded-full bg-card px-4 py-2 text-[14px] font-medium";

const CHIP_SHADOW: React.CSSProperties = {
  boxShadow:
    "0 0 0 1px rgba(41,44,61,0.09), 0 0 0 4px rgba(255,255,255,0.6), 0 2px 8px -3px rgba(41,44,61,0.16)",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-muted">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Demo video                                                          */
/* ------------------------------------------------------------------ */

export function Demo() {
  return (
    <section id="demo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="text-center">
          <Eyebrow>See it</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-[clamp(2.1rem,4.4vw,3.15rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
            Easier to show than to explain.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-line bg-card shadow-[0_50px_100px_-60px_rgba(13,15,20,0.55)]">
            <video
              className="block h-auto w-full"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/mic-hero.png"
              aria-label="Dictami turning speech into text inside another app"
            >
              <source src="/dictami-demo.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* App marquee                                                         */
/* ------------------------------------------------------------------ */

export function Apps() {
  // Three copies inside one track that shifts by exactly one copy's width.
  // The previous version animated two separate tracks, which left a visible
  // hole on wide screens whenever one copy was narrower than the viewport.
  const copies = [0, 1, 2];

  return (
    <section id="apps" className="overflow-hidden border-y border-line bg-panel py-14">
      <p className="text-center text-[13px] text-muted">
        Works anywhere you can type
      </p>

      <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div
          className="flex w-max items-center"
          style={{ animation: "marquee 44s linear infinite" }}
        >
          {copies.map((copy) => (
            <div key={copy} className="flex items-center gap-3 pr-3" aria-hidden={copy > 0}>
              {BRANDS.map((brand) => (
                <span key={brand.name} className={CHIP} style={CHIP_SHADOW}>
                  {/* Each mark in its own brand colour. A row of grey glyphs
                      reads as clip-art; the real colours are what make a
                      compatibility strip look like the genuine article. The
                      markup is generated, not authored — see lib/brands.ts. */}
                  <svg
                    viewBox={brand.viewBox}
                    className="h-[17px] w-[17px] shrink-0"
                    style={brand.colour ? { color: brand.colour } : undefined}
                    aria-hidden
                    dangerouslySetInnerHTML={{ __html: brand.markup }}
                  />
                  {brand.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          to {
            /* One copy of three, so the row resets onto an identical frame. */
            transform: translateX(-33.3333%);
          }
        }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Features                                                            */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    title: "Punctuation you never dictate",
    body: "Commas, periods, and question marks appear on their own, in the right places. You talk the way you talk.",
  },
  {
    title: "It lands where you were typing",
    body: "The text goes into whatever app had the cursor — a chat box, an email, a code editor. Nothing to copy across.",
  },
  {
    title: "Your key, held or tapped",
    body: "Hold to talk like a walkie-talkie, or tap once to start and once to finish. Right ⌘ is captured cleanly, so no other app sees it.",
  },
  {
    title: "One model, 28 languages",
    body: "Install it once and it handles every supported language. No picking a model each time you change language.",
  },
  {
    title: "History you can play back",
    body: "Every dictation is kept with its recording, so you can hear what you actually said. It stays on your Mac, and you can switch it off.",
  },
  {
    title: "No account required",
    body: "No sign-up, no email. Your license key is checked once when you enter it, and never again.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <Eyebrow>What it does</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.1rem,4.4vw,3.15rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
            What you notice on day one.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            // The cell paints its own background; only the text inside fades
            // in. Animating the cell itself would leave the grid's separator
            // colour showing through as one grey slab until the reveal fires.
            <div key={feature.title} className="bg-card p-7">
              <Reveal delay={(i % 3) * 0.06}>
                <h3 className="font-display text-[17px] font-medium tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">
                  {feature.body}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Languages                                                           */
/* ------------------------------------------------------------------ */

const LANGUAGES = [
  "English", "Spanish", "French", "German", "Italian", "Portuguese",
  "Dutch", "Polish", "Russian", "Ukrainian", "Czech", "Slovak",
  "Slovenian", "Croatian", "Bulgarian", "Romanian", "Hungarian",
  "Greek", "Swedish", "Danish", "Finnish", "Estonian", "Latvian",
  "Lithuanian", "Maltese", "Japanese", "Korean", "Chinese",
];

export function Languages() {
  return (
    <section id="languages" className="border-y border-line bg-panel py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <Eyebrow>Languages</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.1rem,4.4vw,3.15rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
            28 languages at full speed.
          </h2>
          <p className="mt-5 text-[16.5px] leading-relaxed text-muted">
            Each of these runs on your Mac at the same speed, with punctuation
            and capitalization. Languages outside this list use Whisper
            instead, which is slower but covers much more of the world.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-wrap gap-x-3.5 gap-y-4">
            {LANGUAGES.map((language) => (
              <span
                key={language}
                className="rounded-full bg-card px-4 py-2 text-[14px]"
                style={CHIP_SHADOW}
              >
                {language}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* What you get                                                        */
/* ------------------------------------------------------------------ */

// Written as things the product has, not as answers to an accusation. The
// defensive version invited a comparison the reader had not made yet.
const REASONS = [
  {
    title: "Nothing to set up first",
    body: "Notarized by Apple and installed with a double-click. The model is a one-click download in Settings, and there’s nothing to configure after that.",
  },
  {
    title: "Speed is the product",
    body: "The engine was rebuilt and the runtime picked by measurement to get there. It is the part you notice every time you use it.",
  },
  {
    title: "A person answers",
    body: "Email us and you’ll get a reply from the person who built the app, not a support queue. Refunds within 14 days, no questions asked.",
  },
];

export function WhyPay() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          {/* Never name the free alternatives. Raising the comparison here
              hands the objection to every reader who did not already have it. */}
          <Eyebrow>What you get</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.1rem,4.4vw,3.15rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
            Ready the moment you open it.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.08}>
              <div className="border-t border-ink pt-5">
                <h3 className="font-display text-[17px] font-medium tracking-tight">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
