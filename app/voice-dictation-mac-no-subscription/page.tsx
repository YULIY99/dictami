import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA } from "@/lib/links";

export const metadata: Metadata = {
  title: "Voice Dictation for Mac Without a Subscription | Dictami",
  description:
    "Buy a dictation app for Mac once and keep it. Dictami offers a lifetime license alongside monthly and yearly plans — no account, no forced subscription, no cloud.",
  alternates: { canonical: "https://dictami.com/voice-dictation-mac-no-subscription" },
};

export default function VoiceDictationMacNoSubscription() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          A dictation app you can buy once and keep.
        </h1>

        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          Dictami has a lifetime license. Pay once, and the app is yours — no renewal,
          no account, and nothing that stops working if you forget to pay next month.
          Monthly and yearly plans exist too, but they're a choice, not the only door.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={PRIMARY_CTA}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep"
          >
            Download for Mac
          </a>
          <Link
            href="/#pricing"
            className="inline-flex items-center rounded-full border border-line bg-card px-6 py-3 text-[15px] font-medium transition hover:border-ink/20"
          >
            See pricing →
          </Link>
        </div>

        <div className="mt-16 flex flex-col gap-10">
          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Why most dictation apps are subscriptions</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Cloud dictation costs money every time you use it. Someone has to pay for the
              servers running the recognition, and that cost repeats for as long as you keep
              dictating — so the pricing repeats too. A subscription isn't greed there; it's
              arithmetic.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictami has no servers in the loop. The model runs on your Mac, using your
              hardware, and there's no per-use cost to recover. That's what makes a
              one-time price possible at all.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What the lifetime license includes</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Every language, every model, and all future updates. One payment, no renewal
              date, nothing to cancel. The key is checked once when you enter it and never
              again — the app doesn't phone home to confirm you're still allowed to use it.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">No account, ever</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              There's no sign-up and no login. You don't hand over an email address to try
              it, and you don't create a profile to buy it. A license key arrives, you paste
              it in, and that's the last time the app asks you for anything.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Try it before you decide</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              The trial runs inside the app for seven days — no card, no account, no
              countdown emails. If you buy and change your mind, refunds are available
              within 14 days, no questions asked.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What you get either way</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Hold a key, speak, release. Punctuated text appears in whatever app your
              cursor is in, in about half a second, in any of 28 languages. Everything runs
              on your Mac — no upload, no internet connection required, and no audio leaving
              the machine.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What you need</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              macOS 13 Ventura or later on an Apple Silicon Mac — an M1 or newer. Intel Macs
              aren't supported. The recognition model downloads once from Settings; after
              that the app never needs the internet again.
            </p>
          </section>
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <p className="text-[16px] text-muted">7-day trial inside the app. No card, no account.</p>
          <a
            href={PRIMARY_CTA}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep"
          >
            Download Dictami
          </a>
        </div>
      </div>
    </div>
  );
}
