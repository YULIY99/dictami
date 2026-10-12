import type { Metadata } from "next";
import Link from "next/link";
import { withShare } from "@/lib/seo";
import { Article, Section, Steps, type Faq } from "@/components/Article";

const URL_DE = "https://dictami.com/de/diktieren-mac-funktioniert-nicht/";
const URL_EN = "https://dictami.com/mac-dictation-not-working/";
const TITLE = "Diktieren am Mac funktioniert nicht? So beheben Sie es | Dictami";
const DESCRIPTION =
  "Diktieren funktioniert am Mac oder MacBook nicht? Schritt für Schritt: Tastenkombination, Mikrofon, Sprache, Google Docs und Chrome, Bildschirmzeit – und was hilft, wenn das Diktat ständig abbricht.";

export const metadata: Metadata = withShare({
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL_DE,
    languages: { en: URL_EN, de: URL_DE, "x-default": URL_EN },
  },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL_DE, locale: "de_DE", type: "article" },
});

const FAQ: Faq[] = [
  {
    q: "Warum funktioniert das Diktieren am Mac plötzlich nicht mehr?",
    a: "Meist steckt eine geänderte Tastenkombination dahinter (oft nach einem macOS-Update oder mit einer neuen Tastatur), das falsche Mikrofon, eine Sprache, die noch geladen wird, oder eine Einschränkung durch Bildschirmzeit oder ein Firmenprofil. Diktat in Systemeinstellungen → Tastatur aus- und wieder einschalten behebt viele einmalige Aussetzer.",
  },
  {
    q: "Wie ändere ich die Tastenkombination fürs Diktieren am Mac?",
    a: "Öffnen Sie Systemeinstellungen → Tastatur, gehen Sie zu Diktat und wählen Sie unter Kurzbefehl eine Taste, die Sie zuverlässig drücken, etwa zweimal Control. Wenn Sie die Globus-Taste (fn) nutzen, prüfen Sie, wofür sie oben in den Tastatureinstellungen belegt ist.",
  },
  {
    q: "Warum funktioniert das Diktat nicht mit meinem externen Mikrofon?",
    a: "Das Diktat hat eine eigene Mikrofoneinstellung. Wählen Sie in Systemeinstellungen → Tastatur → Diktat unter Mikrofonquelle Ihr externes Mikrofon statt Automatisch und prüfen Sie den Pegel unter Systemeinstellungen → Ton → Eingang.",
  },
  {
    q: "Funktioniert das Mac-Diktat in Google Docs?",
    a: "Das Systemdiktat schreibt in die meisten Textfelder, aber Google Docs nutzt einen eigenen Editor, in dem das Diktat unzuverlässig sein kann. Google Docs hat außerdem eine eigene Spracheingabe (Tools → Spracheingabe), die in Chrome funktioniert und Mikrofonzugriff für Chrome braucht.",
  },
  {
    q: "Warum bricht das Diktieren am Mac immer wieder ab?",
    a: "Apples Diktat beendet die Aufnahme nach einer Sprechpause von selbst und stoppt auch, wenn Sie in ein anderes Fenster klicken. Eine App mit Halten-zum-Sprechen nimmt genau so lange auf, wie Sie die Taste halten – eine Pause beendet nichts.",
  },
];

export default function DiktierenMacFunktioniertNicht() {
  return (
    <Article
      locale="de"
      path="/de/diktieren-mac-funktioniert-nicht/"
      title="Diktieren am Mac funktioniert nicht? So beheben Sie es."
      faq={FAQ}
      intro={
        <p>
          Fast alle Diktat-Probleme am Mac haben eine von fünf Ursachen: die
          Tastenkombination, das Mikrofon, die Sprache, eine Einschränkung oder die App,
          in die Sie schreiben. Gehen Sie die Punkte der Reihe nach durch – jeder dauert
          keine Minute. Die Bezeichnungen entsprechen macOS Sonoma und Sequoia; ältere
          Versionen haben dieselben Optionen an ähnlicher Stelle.
        </p>
      }
    >
      <Section title="1. Prüfen, ob das Diktat eingeschaltet ist">
        <Steps
          items={[
            <>Öffnen Sie <strong>Systemeinstellungen → Tastatur</strong>.</>,
            <>Scrollen Sie zu <strong>Diktat</strong> und schalten Sie es ein.</>,
            <>War es schon an: einmal aus- und nach ein paar Sekunden wieder einschalten. Das löst einen hängenden Diktat-Prozess öfter, als man denkt.</>,
          ]}
        />
        <p>Ist der Schalter ausgegraut, springen Sie zu Schritt 6 – dann blockiert etwas das Diktat.</p>
      </Section>

      <Section title="2. Die Tastenkombination reparieren">
        <p>
          Passiert gar nichts, ist meist der Kurzbefehl schuld. Er ändert sich gern nach
          einem macOS-Update oder mit einer anderen Tastatur.
        </p>
        <Steps
          items={[
            <>Wählen Sie unter <strong>Systemeinstellungen → Tastatur → Diktat</strong> bei <strong>Kurzbefehl</strong> etwas, das Sie sicher treffen, etwa zweimal <strong>Control</strong>.</>,
            <>Nutzen Sie die Globus-Taste (fn), prüfen Sie oben in den Tastatureinstellungen, wofür sie belegt ist. Wechselt sie die Eingabequelle oder öffnet Emojis, startet das doppelte Drücken unter Umständen kein Diktat.</>,
            <>Tastaturen mit Mikrofontaste (F5 bei aktuellen Mac-Tastaturen): Ist <strong>Die Tasten F1, F2 usw. als Standard-Funktionstasten verwenden</strong> aktiv, müssen Sie fn gedrückt halten.</>,
            <>Tools wie Karabiner-Elements, BetterTouchTool oder Software für Gaming-Tastaturen können die Taste abfangen. Beenden Sie sie testweise.</>,
          ]}
        />
      </Section>

      <Section title="3. Das richtige Mikrofon wählen">
        <p>
          Das Diktat nutzt nicht immer das Mikrofon, das Sie erwarten. Mit Kopfhörern,
          USB-Mikrofon oder externem Monitor hört es womöglich auf das falsche – das
          Diktat-Symbol erscheint, aber es kommt kein Text.
        </p>
        <Steps
          items={[
            <>Stellen Sie unter <strong>Systemeinstellungen → Tastatur → Diktat</strong> die <strong>Mikrofonquelle</strong> auf Ihr Mikrofon statt auf Automatisch.</>,
            <>Wählen Sie unter <strong>Systemeinstellungen → Ton → Eingang</strong> dasselbe Mikrofon und sprechen Sie: Der Pegel muss sich bewegen. Tut er das nicht, liegt es am Mikrofon, nicht am Diktat.</>,
            <>Bluetooth-Headsets schalten bei aktivem Mikrofon in einen Modus mit schlechterer Qualität. Das eingebaute Mikrofon des Mac ist fürs Diktieren oft besser als das der AirPods.</>,
          ]}
        />
      </Section>

      <Section title="4. Die Diktiersprache prüfen">
        <p>
          Schreibt das Diktat falsche Wörter oder gar nichts, hört es vielleicht in der
          falschen Sprache zu – oder die Sprache wird noch für die Nutzung auf dem Gerät
          geladen.
        </p>
        <Steps
          items={[
            <>Prüfen Sie unter <strong>Systemeinstellungen → Tastatur → Diktat</strong> bei <strong>Sprachen</strong>, ob Deutsch hinzugefügt ist – und die richtige Region (Deutschland, Österreich, Schweiz).</>,
            <>Sind mehrere Sprachen hinzugefügt, steht die aktive beim Diktieren neben dem Mikrofon-Symbol; ein Klick darauf wechselt sie.</>,
            <>Nach dem Hinzufügen einer Sprache lassen Sie den Mac ein paar Minuten im WLAN, damit sie geladen wird.</>,
          ]}
        />
      </Section>

      <Section title="5. Google Docs, Chrome und andere Apps">
        <p>Klappt das Diktat in Notizen, aber nicht in einer bestimmten App, liegt es an der App.</p>
        <Steps
          items={[
            <><strong>Google Docs:</strong> Docs nutzt einen eigenen Editor, in dem das Systemdiktat Wörter verlieren oder abbrechen kann. Docs hat eine eigene Spracheingabe unter <strong>Tools → Spracheingabe</strong>, die in Chrome funktioniert.</>,
            <><strong>Chrome und andere Browser:</strong> Spracheingabe auf Websites braucht Mikrofonzugriff für den Browser – prüfen Sie <strong>Systemeinstellungen → Datenschutz &amp; Sicherheit → Mikrofon</strong> und die Berechtigung der Website in der Adressleiste.</>,
            <><strong>Terminal, Remote-Desktop und manche Spiele</strong> verarbeiten Tastatureingaben auf eigene Art und nehmen diktierten Text nicht immer zuverlässig an. Diktieren Sie in einen Texteditor und fügen Sie den Text ein.</>,
          ]}
        />
      </Section>

      <Section title="6. Bildschirmzeit und Firmen-Macs">
        <p>Ein ausgegrauter Diktat-Schalter bedeutet meist, dass etwas ihn sperrt.</p>
        <Steps
          items={[
            <>Öffnen Sie <strong>Systemeinstellungen → Bildschirmzeit → Inhalt &amp; Datenschutz</strong> und prüfen Sie, ob Siri &amp; Diktat in den Einschränkungen erlaubt ist.</>,
            <>Auf einem vom Unternehmen verwalteten Mac kann ein Konfigurationsprofil das Diktat abschalten. Sehen Sie unter <strong>Systemeinstellungen → Allgemein → Geräteverwaltung</strong> nach; ist dort ein Profil, fragen Sie Ihre IT.</>,
          ]}
        />
      </Section>

      <Section title="7. Immer noch nicht? Neustart und Update">
        <p>
          Starten Sie den Mac neu und installieren Sie ausstehende Updates unter{" "}
          <strong>Systemeinstellungen → Allgemein → Softwareupdate</strong>. Diktat-Fehler
          werden in Zwischenversionen behoben, und ein Neustart löst Sprachdienste, die
          nach dem Ruhezustand manchmal hängen.
        </p>
      </Section>

      <Section title="Wenn das Diktat funktioniert, aber ständig abbricht">
        <p>
          Manchmal ist gar nichts kaputt: Apples Diktat beendet die Aufnahme nach einer
          Pause von selbst und stoppt, wenn Sie in ein anderes Fenster klicken. Wer beim
          Sprechen nachdenkt, erlebt das als Abbrechen.
        </p>
        <p>
          Genau dafür gibt es Halten-zum-Sprechen. Mit Dictami halten Sie eine Taste,
          sprechen und lassen los: Die Aufnahme läuft genau so lange, wie die Taste
          gedrückt ist, Satzzeichen kommen automatisch, und der Text erscheint in der App,
          in der Ihr Cursor steht. Die Erkennung läuft auf Ihrem Mac – also auch{" "}
          <Link href="/de/offline-diktieren-mac/" className="text-ink underline underline-offset-4">
            offline
          </Link>{" "}
          und{" "}
          <Link href="/de/diktieren-mac-ohne-cloud/" className="text-ink underline underline-offset-4">
            ohne Cloud
          </Link>
          . Dictami braucht macOS 14 oder neuer auf einem Mac mit Apple Silicon.
        </p>
      </Section>
    </Article>
  );
}
