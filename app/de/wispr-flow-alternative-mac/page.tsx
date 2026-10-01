import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinksDe } from "@/components/GuideLinksDe";

const URL_DE = "https://dictami.com/de/wispr-flow-alternative-mac/";
const URL_EN = "https://dictami.com/wispr-flow-alternative-mac/";

export const metadata: Metadata = {
  title: "Wispr-Flow-Alternative für Mac | Dictami",
  description:
    "Eine Wispr-Flow-Alternative für Mac: Spracherkennung auf dem Gerät statt in der Cloud, kein Konto, 29,99 $ einmalig statt 15 $ im Monat.",
  alternates: {
    canonical: URL_DE,
    languages: { en: URL_EN, de: URL_DE, "x-default": URL_EN },
  },
  openGraph: {
    title: "Wispr-Flow-Alternative für Mac | Dictami",
    description: "Diktieren auf dem Mac statt in der Cloud. Kein Konto, 29,99 $ einmalig statt 15 $ im Monat.",
    url: URL_DE,
    locale: "de_DE",
  },
};

export default function WisprFlowAlternativeMacDe() {
  return (
    <div lang="de" className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-24 sm:py-32">
        <Link href="/" className="inline-flex items-center gap-1.5 text-cap text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-h2 font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Eine Wispr-Flow-Alternative, die Ihren Mac nie verlässt.
        </h1>

        <p className="mt-5 text-body leading-relaxed text-muted">
          Wispr Flow hat das Diktieren per gehaltener Taste populär gemacht, und es macht
          das gut. Aber es schickt Ihre Stimme an einen Server, verlangt ein Konto und
          ist nur im Abo zu haben. Dictami erledigt dieselbe Aufgabe auf Ihrer eigenen
          Hardware, ohne Konto, für eine einmalige Zahlung.
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
            <h2 className="text-title font-medium tracking-tight">Warum Nutzer nach einer Alternative suchen</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Meist sind es dieselben drei Gründe. Erstens die Cloud: Jeder diktierte Satz
              wird aufgenommen, hochgeladen und anderswo verarbeitet. Bei Entwürfen,
              Kundenkorrespondenz oder allem, was unter eine Verschwiegenheitspflicht
              fällt, ist das ein echtes Problem und kein theoretisches.
            </p>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Zweitens der Preis: Wispr Flow lässt sich nicht kaufen, nur mieten – so lange,
              wie Sie es nutzen. Drittens die Verbindung: Fällt das WLAN aus, im Zug oder im
              Flugzeug, hört Cloud-Diktat auf zu funktionieren.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Im direkten Vergleich</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-small tabular-nums">
                <thead>
                  <tr className="border-b border-line text-muted">
                    <th className="py-2 pr-4 font-medium"></th>
                    <th className="py-2 pr-4 font-medium">Dictami</th>
                    <th className="py-2 font-medium">Wispr Flow</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-line">
                    <td className="py-2 pr-4 font-medium text-ink">Spracherkennung</td>
                    <td className="py-2 pr-4">Auf Ihrem Mac</td>
                    <td className="py-2">In der Cloud</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="py-2 pr-4 font-medium text-ink">Funktioniert offline</td>
                    <td className="py-2 pr-4">Ja</td>
                    <td className="py-2">Nein</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="py-2 pr-4 font-medium text-ink">Konto</td>
                    <td className="py-2 pr-4">Keins</td>
                    <td className="py-2">Erforderlich</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="py-2 pr-4 font-medium text-ink">Einmalkauf</td>
                    <td className="py-2 pr-4">29,99 $</td>
                    <td className="py-2">Nicht angeboten</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-ink">Abo</td>
                    <td className="py-2 pr-4">5,99 $/Monat (optional)</td>
                    <td className="py-2">15 $/Monat</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-cap leading-relaxed text-muted">
              Preise laut den Websites der Anbieter, Stand 1. Oktober 2026.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Dieselbe Geste, auf Ihrer Hardware</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Wer Wispr Flow gewohnt ist, muss nichts umlernen. Taste halten, sprechen,
              loslassen. Der Text erscheint mit Satzzeichen dort, wo Ihr Cursor steht – in
              Mail, Slack, Notizen, einem Browserfeld oder einem Code-Editor – nach etwa
              einer halben Sekunde.
            </p>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Der Unterschied liegt darin, wo gerechnet wird: Das Erkennungsmodell läuft auf
              dem Apple-Silicon-Chip Ihres Macs. Es wird kein Audio hochgeladen, also liegt
              keine Aufnahme auf einem fremden Server, und zwischen Satzende und Text gibt
              es keine Netzwerkverzögerung.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Worauf Sie verzichten</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Ehrlich gesagt: Dictami ist eine Mac-App und nur eine Mac-App. Wenn Sie
              dasselbe Diktat auch unter Windows oder auf dem Smartphone brauchen, passt ein
              Cloud-Dienst mit Geräte-Sync besser. Außerdem braucht Dictami einen Mac mit
              Apple Silicon; auf Intel-Rechnern läuft es nicht.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Die Kosten über ein Jahr</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Bei <span className="tabular-nums">15 $</span> im Monat kostet Wispr Flow{" "}
              <span className="tabular-nums">180 $</span> im Jahr, Jahr für Jahr. Die
              Lebenszeitlizenz von Dictami kostet einmalig{" "}
              <span className="tabular-nums">29,99 $</span>, mit allen Sprachen, allen
              Modellen und allen künftigen Updates. Mehr dazu unter{" "}
              <Link href="/de/diktier-app-mac-ohne-abo/" className="underline underline-offset-2 hover:text-ink">
                Diktier-App ohne Abo
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Ausprobieren, bevor Sie wechseln</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Die Testphase läuft sieben Tage in der App, ohne Karte und ohne Konto. Nutzen
              Sie beides parallel und behalten Sie das, wozu Sie öfter greifen. Wenn Sie
              kaufen und es sich anders überlegen, erstatten wir innerhalb von 14 Tagen.
              Voraussetzung ist macOS 14 Sonoma oder neuer auf einem M1 oder neuer.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <GuideLinksDe current="/de/wispr-flow-alternative-mac/" />
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
