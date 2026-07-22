import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA } from "@/lib/links";

export const metadata: Metadata = {
  title: "Offline Dictation for Mac | Dictami",
  description:
    "Offline voice dictation for Mac. Recognition runs on your device — no internet required, no audio sent anywhere. 28 languages, automatic punctuation, no account.",
  alternates: { canonical: "https://dictami.com/offline-dictation-mac" },
};

export default function OfflineDictationMac() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Offline dictation for Mac. Nothing leaves your computer.
        </h1>

        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          Dictami runs the recognition model directly on your Mac. Your audio is never
          uploaded, no account is required, and it works with no internet connection at all.
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
            <h2 className="text-[20px] font-medium tracking-tight">Why offline matters</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Cloud dictation services send your audio to a server and return the text. That
              means everything you say travels through someone else's infrastructure, gets
              logged, and depends on a working internet connection. On a plane, in a meeting
              room with no signal, or just on a slow day — it either fails or slows down.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Dictami downloads the model once, stores it on your Mac, and runs it there.
              Your recordings never go anywhere. The speed doesn't depend on your connection.
              The behavior on a plane is identical to the behavior at your desk.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Private by design</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              There's no server receiving your audio, no account to log in to, and no data
              that leaves the machine. Dictami keeps a local history of your dictations —
              including the recordings — so you can play them back. You can turn that off in
              Settings, which deletes it.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">Fast because it's local</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              The model stays loaded in memory. When you release the dictation key, the audio
              is processed immediately — no round trip, no queue, no waiting. A typical
              sentence is ready in about a third of a second.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">28 languages, all offline</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Every supported language runs on-device at the same speed: English, Spanish,
              French, German, Italian, Portuguese, Dutch, Polish, Russian, Japanese, Korean,
              Chinese, and more. Automatic punctuation and capitalization work in all of them.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium tracking-tight">What you need</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              macOS 13 Ventura or later on an Apple Silicon Mac — an M1 or newer.
              The model downloads once from Settings. After that, no internet connection
              is ever needed again.
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
