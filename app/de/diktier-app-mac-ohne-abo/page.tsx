import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinksDe } from "@/components/GuideLinksDe";

const URL_DE = "https://dictami.com/de/diktier-app-mac-ohne-abo/";
const URL_EN = "https://dictami.com/voice-dictation-mac-no-subscription/";

export const metadata: Metadata = {
  title: "Diktier-App für Mac ohne Abo | Dictami",
  description:
    "Diktier-App für Mac ohne Abo: 29,99 $ einmalig, alle Sprachen und künftigen Updates inklusive. Kein Konto, 7 Tage kostenlos testen, 14 Tage Erstattung.",
  alternates: {
    canonical: URL_DE,
    languages: { en: URL_EN, de: URL_DE, "x-default": URL_EN },
  },
  openGraph: {
    title: "Diktier-App für Mac ohne Abo | Dictami",
    description: "Einmal 29,99 $ statt Monat für Monat. Alle Sprachen und Updates inklusive.",
    url: URL_DE,
    locale: "de_DE",
  },
};

export default function DiktierAppMacOhneAbo() {
  return (
    <div lang="de" className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-24 sm:py-32">
        <Link href="/" className="inline-flex items-center gap-1.5 text-cap text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-h2 font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Eine Diktier-App, die Sie kaufen statt mieten.
        </h1>

        <p className="mt-5 text-body leading-relaxed text-muted">
          Die meisten Diktier-Apps für den Mac gibt es nur im Abo: Sie zahlen jeden
          Monat, solange Sie sie nutzen. Dictami können Sie einmal kaufen und behalten –
          für <span className="tabular-nums">29,99 $</span>, mit allen Sprachen und
          allen künftigen Updates.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={PRIMARY_CTA} download={DOWNLOAD_FILENAME}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep"
          >
            Für Mac laden
          </a>
          <Link
            href="/#pricing"
            className="inline-flex items-center rounded-full border border-line bg-card px-6 py-3 text-small font-medium transition hover:border-ink/20"
          >
            Preise ansehen →
          </Link>
        </div>

        <div className="mt-16 flex flex-col gap-10">
          <section>
            <h2 className="text-title font-medium tracking-tight">Zwei Wege zu bezahlen</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Die Lebenszeitlizenz kostet einmalig{" "}
              <span className="tabular-nums">29,99 $</span>. Wer lieber erst einmal
              monatlich zahlt, kann das für <span className="tabular-nums">5,99 $</span> im
              Monat tun und jederzeit aufhören. Bezahlt wird per Karte oder, falls Ihnen
              das lieber ist, mit Krypto als einmalige Zahlung.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Was ein Abo über die Jahre kostet</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Ein Diktierdienst für <span className="tabular-nums">15 $</span> im Monat –
              so viel kostet etwa Wispr Flow – summiert sich auf{" "}
              <span className="tabular-nums">180 $</span> pro Jahr und{" "}
              <span className="tabular-nums">540 $</span> in drei Jahren. Die
              Dictami-Lizenz kostet in drei Jahren dasselbe wie am ersten Tag:{" "}
              <span className="tabular-nums">29,99 $</span>.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Was inbegriffen ist</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Alles. Es gibt keine Pro-Stufe und keine Sprachpakete gegen Aufpreis: alle
              30 schnellen Sprachen, alle Modelle und alle künftigen Updates gehören zur
              Lizenz. Die Spracherkennung läuft auf Ihrem Mac, deshalb entstehen pro Diktat
              keine Serverkosten, die irgendwann über ein Abo hereingeholt werden müssten.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Kein Konto</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Sie legen kein Konto an, weder zum Testen noch zum Kaufen. Nach dem Kauf
              erhalten Sie einen Lizenzschlüssel, fügen ihn einmal in der App ein, fertig.
              Wie Ihre Daten dabei auf dem Mac bleiben, steht unter{" "}
              <Link href="/de/diktieren-mac-ohne-cloud/" className="underline underline-offset-2 hover:text-ink">
                Diktieren ohne Cloud
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Erst testen, dann entscheiden</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Die Testphase läuft sieben Tage direkt in der App, ohne Karte und ohne
              Konto. Wenn Sie kaufen und es sich anders überlegen, erstatten wir den Betrag
              innerhalb von 14 Tagen. Voraussetzung ist macOS 14 Sonoma oder neuer auf
              einem Mac mit M1 oder neuer.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <GuideLinksDe current="/de/diktier-app-mac-ohne-abo/" />
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <p className="text-body text-muted">7 Tage kostenlos testen in der App. Keine Karte, kein Konto.</p>
          <a
            href={PRIMARY_CTA} download={DOWNLOAD_FILENAME}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-on-accent transition hover:bg-accent-deep"
          >
            Dictami laden
          </a>
        </div>
      </div>
    </div>
  );
}
