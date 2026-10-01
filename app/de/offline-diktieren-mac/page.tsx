import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinksDe } from "@/components/GuideLinksDe";

const URL_DE = "https://dictami.com/de/offline-diktieren-mac/";
const URL_EN = "https://dictami.com/offline-dictation-mac/";

export const metadata: Metadata = {
  title: "Offline diktieren am Mac – ohne Internet | Dictami",
  description:
    "Diktieren am Mac ohne Internetverbindung: Die Spracherkennung läuft auf dem Gerät, mit Satzzeichen, in 30 Sprachen. Im Zug, im Flugzeug, überall.",
  alternates: {
    canonical: URL_DE,
    languages: { en: URL_EN, de: URL_DE, "x-default": URL_EN },
  },
  openGraph: {
    title: "Offline diktieren am Mac – ohne Internet | Dictami",
    description: "Spracherkennung auf dem Mac, ganz ohne Netz. Mit Satzzeichen, in 30 Sprachen.",
    url: URL_DE,
    locale: "de_DE",
  },
};

export default function OfflineDiktierenMac() {
  return (
    <div lang="de" className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-24 sm:py-32">
        <Link href="/" className="inline-flex items-center gap-1.5 text-cap text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-h2 font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Diktieren am Mac – auch wenn das WLAN mal wieder weg ist.
        </h1>

        <p className="mt-5 text-body leading-relaxed text-muted">
          Dictami erkennt Sprache direkt auf Ihrem Mac. Es gibt keinen Server, der
          antworten muss, und deshalb auch keine Verbindung, die abreißen kann. Taste
          halten, sprechen, loslassen – der Text steht an der Cursorposition, mit oder
          ohne Internet.
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
            <h2 className="text-title font-medium tracking-tight">Einmal laden, dann offline</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Beim ersten Start laden Sie das Erkennungsmodell einmalig in den
              Einstellungen herunter. Ab dann liegt alles, was zum Diktieren nötig ist, auf
              Ihrem Mac. Die App fragt keinen Server, schickt keine Aufnahme weg und wartet
              auf keine Antwort aus dem Netz.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Wo das den Unterschied macht</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Im ICE, wenn das WLAN zwischen zwei Tunneln aufgibt. Im Flugzeug ohne
              Bordinternet. Im Ferienhaus mit einem Balken Empfang. Im Büro, wenn das VPN
              gerade hakt. Cloud-Diktat bleibt in all diesen Momenten stumm oder wird
              quälend langsam. Lokales Diktat merkt davon nichts.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">So testen Sie es selbst</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Schalten Sie das WLAN aus, ziehen Sie das Netzwerkkabel und diktieren Sie
              einen Absatz in eine beliebige App. Erscheint der Text wie gewohnt, wissen Sie
              zweierlei: Es funktioniert offline, und es wurde nichts übertragen. Mehr zum
              Datenschutz unter{" "}
              <Link href="/de/diktieren-mac-ohne-cloud/" className="underline underline-offset-2 hover:text-ink">
                Diktieren ohne Cloud
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Offline, aber nicht abgespeckt</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Ohne Netz bekommen Sie keine Notlösung, sondern dieselbe Erkennung wie
              immer: Satzzeichen werden automatisch gesetzt, 30 Sprachen laufen schnell
              direkt auf dem Gerät, Deutsch eingeschlossen. Der Text erscheint etwa eine
              halbe Sekunde nach dem Loslassen der Taste – oft schneller als bei
              Cloud-Diensten, weil der Umweg über den Server entfällt.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">In jeder App</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Dictami schreibt dort, wo Ihr Cursor steht: Mail, Pages, Word, Notizen, Slack,
              ein Browserfeld oder ein Code-Editor. Es gibt kein eigenes Diktierfenster, aus
              dem Sie Text kopieren müssten.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Was Sie brauchen</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              macOS 14 Sonoma oder neuer auf einem Mac mit Apple Silicon (M1 oder neuer).
              Intel-Macs werden nicht unterstützt. Für den einmaligen Modell-Download ist
              eine Internetverbindung nötig, danach nicht mehr. Die Testphase läuft sieben
              Tage in der App, ohne Karte und ohne Konto.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <GuideLinksDe current="/de/offline-diktieren-mac/" />
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
