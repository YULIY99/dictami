import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA, DOWNLOAD_FILENAME } from "@/lib/links";
import { GuideLinksDe } from "@/components/GuideLinksDe";

const URL_DE = "https://dictami.com/de/diktieren-mac-ohne-cloud/";
const URL_EN = "https://dictami.com/private-dictation-mac/";

export const metadata: Metadata = {
  title: "Diktieren am Mac ohne Cloud | Dictami",
  description:
    "Spracherkennung direkt auf dem Mac: Ihre Stimme verlässt nie das Gerät, kein Konto, funktioniert auch ohne Internet. Diktieren in jeder App.",
  alternates: {
    canonical: URL_DE,
    languages: { en: URL_EN, de: URL_DE, "x-default": URL_EN },
  },
  openGraph: {
    title: "Diktieren am Mac ohne Cloud | Dictami",
    description: "Spracherkennung auf dem Mac, kein Upload, kein Konto. Funktioniert auch offline.",
    url: URL_DE,
    locale: "de_DE",
  },
};

export default function DiktierenMacOhneCloud() {
  return (
    <div lang="de" className="min-h-screen bg-ground text-ink">
      <div className="mx-auto max-w-2xl px-5 py-24 sm:py-32">
        <Link href="/" className="inline-flex items-center gap-1.5 text-cap text-muted transition hover:text-ink">
          ← Dictami
        </Link>

        <h1 className="mt-8 font-display text-h2 font-normal leading-[1.06] tracking-[-0.03em] text-balance">
          Diktieren am Mac, ohne dass Ihre Stimme den Rechner verlässt.
        </h1>

        <p className="mt-5 text-body leading-relaxed text-muted">
          Viele Diktier-Apps sind im Grunde ein Mikrofon, das an einen fremden Server
          angeschlossen ist. Dictami funktioniert anders: Die Spracherkennung läuft auf
          Ihrem Mac, die Aufnahme wird nirgendwohin hochgeladen, und es gibt kein Konto,
          das Ihre Worte mit Ihrer Person verknüpft.
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
            <h2 className="text-title font-medium tracking-tight">Was man tatsächlich diktiert</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Diktiert wird selten Belangloses. Es ist die E-Mail an einen Mandanten, die
              Notiz nach einem Arzttermin, der Entwurf eines Vertrags, die Nachricht, die Sie
              dreimal umformuliert haben. Bei Cloud-Diktat läuft all das als Audio über die
              Server eines Unternehmens – und was danach damit passiert, regelt eine
              Datenschutzerklärung, die sich jederzeit ändern kann.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">So bleibt alles lokal</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Das Erkennungsmodell liegt auf Ihrem Mac und rechnet auf dessen
              Apple-Silicon-Chip. Wenn Sie die Taste halten und sprechen, geht das Audio vom
              Mikrofon direkt zu diesem Modell und sonst nirgendwohin. Der erkannte Text wird
              in die App geschrieben, in der Sie gerade arbeiten – so, als hätten Sie ihn
              selbst getippt.
            </p>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Das Modell wird einmalig in den Einstellungen heruntergeladen. Danach braucht
              die App zum Diktieren überhaupt kein Internet mehr.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Ein Versprechen, das Sie prüfen können</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              „Wir respektieren Ihre Privatsphäre“ kann jeder schreiben. „Es funktioniert
              ohne Netz“ lässt sich in zehn Sekunden testen: WLAN ausschalten, Kabel ziehen,
              einen Absatz diktieren. Erscheint der Text trotzdem, wurde nichts übertragen –
              es gab schlicht keinen Weg dafür.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Und die DSGVO?</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Für die Spracherkennung werden keine Audiodaten an Dritte übertragen. Es gibt
              also keinen externen Dienst, der Ihre Aufnahmen verarbeitet, und damit auch
              keinen, den Sie in Ihrem Verarbeitungsverzeichnis aufführen müssten. Ob das für
              Ihren konkreten Fall genügt, klärt im Zweifel Ihr Datenschutzbeauftragter –
              diese Seite ist keine Rechtsberatung.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Kein Konto, kein Profil</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Weder zum Testen noch zum Kaufen ist eine Registrierung nötig. Für die
              Testphase braucht es keine E-Mail-Adresse, und über Ihre Nutzung wird kein
              Profil angelegt. Nach dem Kauf erhalten Sie einen Lizenzschlüssel, fügen ihn
              einmal ein, und er wird einmal geprüft.
            </p>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Die{" "}
              <a href="/privacy.html" hrefLang="en" className="underline underline-offset-2 hover:text-ink">
                Datenschutzerklärung
              </a>{" "}
              (auf Englisch) listet genau auf, was die App auf Ihrem Mac speichert und was
              sie nie erfasst.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Lokal heißt nicht langsam</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              Früher bedeutete lokale Spracherkennung Warten. Auf Apple Silicon nicht mehr:
              Der Text erscheint etwa eine halbe Sekunde nach dem Loslassen der Taste, mit
              Satzzeichen, in jeder von 30 Sprachen – Deutsch eingeschlossen. Da kein Server
              im Spiel ist, bremst auch eine schwache Verbindung nichts aus. Mehr dazu unter{" "}
              <Link href="/de/offline-diktieren-mac/" className="underline underline-offset-2 hover:text-ink">
                Offline diktieren
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium tracking-tight">Was Sie brauchen</h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              macOS 14 Sonoma oder neuer auf einem Mac mit Apple Silicon, also M1 oder neuer.
              Intel-Macs werden nicht unterstützt. Die Testphase läuft sieben Tage in der App,
              ohne Karte und ohne Konto.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <GuideLinksDe current="/de/diktieren-mac-ohne-cloud/" />
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
