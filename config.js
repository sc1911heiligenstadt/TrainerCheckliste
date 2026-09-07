const APP_VERSION = "1.0";

// Was die TrainerCheckliste kann -- steht im Info-Reiter als Karte "Funktionen".
// WICHTIG: Das ist NICHT der Changelog. Hier steht der ZUSTAND ("ein Abschnitt
// laesst sich einfrieren"), dort die Aenderung ("ein Abschnitt laesst sich JETZT
// einfrieren"). Wer eine Funktion umbaut oder abschaltet, zieht diesen Text mit
// -- und ebenso E:\SC1911-Tools-Anleitung.txt, wo dasselbe ausfuehrlich steht.
const APP_FUNKTIONEN = [
  {
    title: "Wofür die TrainerCheckliste da ist",
    items: [
      "Die Papier-Checkliste „Trainerzu- und -abgang“ als App: welche Schritte beim Aufnehmen und beim Verabschieden einer Trainerin oder eines Trainers erledigt sein müssen.",
      "Je Person ein Eintrag mit zwei Checklisten — eine für den Zugang, eine für den Abgang.",
      "Unterschrieben wird direkt in der App, von Trainer oder Betreuer und von der Geschäftsstelle."
    ]
  },
  {
    title: "Trainer-Einträge",
    items: [
      "Übersicht aller Einträge mit Name, Vorname und Geburtsdatum, dazu je ein Kennzeichen für Eintritt und Austritt: offen, in Arbeit oder abgeschlossen. Das zugehörige Datum steht darunter.",
      "Suche nach Namen, kombinierbar mit den Statusfiltern für Eintritt und Austritt.",
      "Sortierbar nach Name, Geburtsdatum, Eintritt und Austritt — ein Klick auf die Spalte kehrt die Richtung um.",
      "Einträge anlegen und löschen, letzteres mit Rückfrage."
    ]
  },
  {
    title: "Stammdaten",
    items: [
      "Name, Vorname, Geburtsdatum, Anschrift, Telefonnummer und E-Mail-Adresse.",
      "Dazu je ein Häkchen und ein Datum für Trainerzugang und Trainerabgang."
    ]
  },
  {
    title: "Checklisten für Zugang und Abgang",
    items: [
      "Beide Checklisten entsprechen der Papiervorlage einschließlich aller Unterpunkte — von der Schlüsselübergabe über das erweiterte Führungszeugnis bis zum Verhaltenskodex.",
      "Jeder Punkt ist einzeln abhakbar. Bei Z-Schlüssel und Schrankschlüssel erscheint zusätzlich ein Feld für die Schlüsselnummer.",
      "Bemerkungsfeld sowie die Angabe „abgeschlossen“ oder „konnte nicht abgeschlossen werden, weil …“ mit Grund.",
      "Ort und Datum der Abschluss-Unterschrift."
    ]
  },
  {
    title: "Unterschriften",
    items: [
      "Je Abschnitt eine Unterschrift von Trainer oder Betreuer und eine der Geschäftsstelle — mit Maus, Finger oder Stift.",
      "Eine Unterschrift lässt sich wieder löschen, solange der Abschnitt offen ist."
    ]
  },
  {
    title: "Einfrieren und Sperre aufheben",
    items: [
      "„Speichern & Einfrieren“ schließt einen Abschnitt ab. Danach sind alle Felder, Häkchen, Unterschriften und die Kopfzeilenfelder der Stammdaten gesperrt.",
      "Der Sperrzustand bleibt gespeichert und gilt auf jedem Gerät — ein eingefrorener Abschnitt lässt sich nicht versehentlich verändern.",
      "Eine Sperre aufheben und einen gesperrten Eintrag löschen verlangt ein Aktions-Passwort. Es wird auf dem Server geprüft und steht nicht im Quelltext der App."
    ]
  },
  {
    title: "Wer darf was",
    items: [
      "Zugang über die zentrale Anmeldung der Tools-Übersicht, in der Regel für Geschäftsstelle und Vorstand.",
      "Sehen: alle Checklisten vollständig, aber schreibgeschützt — die Felder sind ausgegraut, die Knöpfe zum Anlegen und Löschen fehlen.",
      "Bearbeiten: Einträge anlegen und löschen, Felder und Unterschriften pflegen, Abschnitte sperren und entsperren.",
      "Administrieren: der Reiter „Einstellungen“. Der Reiter „Info“ ist für alle sichtbar."
    ]
  },
  {
    title: "Daten und Speicherung",
    items: [
      "Gespeichert wird in der Vereins-Nextcloud über die zentrale Anmeldung — ein eigenes Passwort braucht es nicht, auch nicht am Handy.",
      "Weil hier Personendaten und Unterschriften stehen, gibt es bewusst keinen lokalen Datei-Modus: die Daten liegen ausschließlich in der Vereins-Cloud.",
      "Gespeichert wird bei jeder Änderung von selbst.",
      "Ändern zwei Geräte gleichzeitig denselben Stand, erkennt die App das, lädt den fremden Stand nach und sagt Bescheid.",
      "Der eigene Abschluss-Stand ist auch in den Trainerdaten und in der Personalakte zu sehen — gepflegt wird er ausschließlich hier."
    ]
  },
  {
    title: "Bedienung am Handy",
    items: [
      "Die Reiterleiste bricht am Handy um, statt seitlich aus dem Bild zu laufen; auch die Umschaltung zwischen Zugang und Abgang bricht um.",
      "Eingabefelder sind groß genug, dass der iPhone-Browser beim Antippen nicht ungefragt in die Seite hineinzoomt.",
      "Unterschreiben funktioniert mit dem Finger."
    ]
  }
];

const APP_CHANGELOG = [
  {
    version: "1.2",
    groups: [
      {
        title: "Im Info-Reiter steht jetzt, was die App kann",
        items: [
          "Die Liste der Änderungen und die Versionsnummer sind aus dem Info-Reiter verschwunden.",
          "Stattdessen steht dort die Karte „Funktionen“: was die App kann, nach Themen geordnet.",
          "Was sich geändert hat, steht weiterhin in den Neuigkeiten auf der Startseite der Tools-Übersicht."
        ]
      }
    ]
  },
  {
    version: "1.1",
    groups: [
      {
        title: "Vorleseprogramme finden das Textfeld neben einem Haken",
        items: [
          "Das Textfeld, das zu einzelnen Checklisten-Punkten gehört, hatte keinen Namen — nur einen Platzhalter, und der ist bei manchen Punkten leer.",
          "Es trägt jetzt den Platzhaltertext als Namen, und wo keiner hinterlegt ist, den Text des Punktes selbst. Am Bildschirm ändert sich nichts."
        ]
      }
    ]
  },
  {
    version: "1.0",
    groups: [
      {
        title: "Trainer-Einträge",
        items: [
          "Übersicht aller Einträge mit Name, Vorname und Geburtsdatum, dazu je ein Kennzeichen für Eintritt und Austritt: offen, in Arbeit oder abgeschlossen. Das zugehörige Datum steht direkt darunter.",
          "Suche nach Namen, kombinierbar mit den Statusfiltern für Eintritt und Austritt.",
          "Sortierbar nach Name, Geburtsdatum, Eintritt und Austritt — ein Klick auf die Spalte kehrt die Richtung um.",
          "Einträge anlegen und löschen, letzteres mit Rückfrage."
        ]
      },
      {
        title: "Stammdaten",
        items: [
          "Name, Vorname, Geburtsdatum, Anschrift, Telefonnummer und E-Mail-Adresse.",
          "Dazu je ein Häkchen und ein Datum für Trainerzugang und Trainerabgang."
        ]
      },
      {
        title: "Checklisten für Zugang und Abgang",
        items: [
          "Beide Checklisten entsprechen der Papiervorlage, einschließlich aller Unterpunkte — von der Schlüsselübergabe über das erweiterte Führungszeugnis bis zum Verhaltenskodex.",
          "Jeder Punkt ist einzeln abhakbar. Bei Z-Schlüssel und Schrankschlüssel erscheint zusätzlich ein Feld für die Schlüsselnummer.",
          "Bemerkungsfeld sowie die Angabe „abgeschlossen“ oder „konnte nicht abgeschlossen werden, weil …“ mit Grund.",
          "Ort und Datum der Abschluss-Unterschrift."
        ]
      },
      {
        title: "Unterschriften",
        items: [
          "Je Abschnitt eine Unterschrift von Trainer oder Betreuer und eine der Geschäftsstelle — mit Maus, Finger oder Stift.",
          "Eine Unterschrift lässt sich wieder löschen."
        ]
      },
      {
        title: "Einfrieren",
        items: [
          "Ein fertiger Abschnitt lässt sich mit „Speichern & Einfrieren“ sperren. Danach sind alle Felder, Häkchen, Unterschriften und die Kopfzeilenfelder der Stammdaten gesperrt.",
          "Der Sperrzustand bleibt gespeichert und gilt auf jedem Gerät.",
          "Eine Sperre aufheben und einen gesperrten Eintrag löschen verlangt ein Passwort. Es wird auf dem Server geprüft und steht nicht im Quelltext der App."
        ]
      },
      {
        title: "Wer darf was",
        items: [
          "Sehen: alle Checklisten vollständig, aber schreibgeschützt — die Felder sind ausgegraut, die Knöpfe zum Anlegen und Löschen fehlen.",
          "Bearbeiten: Einträge anlegen und löschen, Felder und Unterschriften pflegen, Abschnitte sperren und entsperren.",
          "Administrieren: der Reiter „Einstellungen“.",
          "Der Reiter „Info“ ist für alle sichtbar. Dort stehen eine Kurzbeschreibung, diese Änderungsliste und der Datenschutzhinweis des Vereins."
        ]
      },
      {
        title: "Bedienung am Handy",
        items: [
          "Die Reiterleiste bricht am Handy um, statt seitlich aus dem Bild zu laufen — auch die hinteren Reiter sind auf schmalen Bildschirmen erreichbar.",
          "Auch die Umschaltung zwischen Zugang und Abgang bricht um, statt rechts aus dem Bild zu laufen.",
          "Eingabefelder sind groß genug, dass der iPhone-Browser beim Antippen nicht ungefragt in die Seite hineinzoomt.",
          "Unterschreiben funktioniert mit dem Finger."
        ]
      },
      {
        title: "Daten & Speicherung",
        items: [
          "Gespeichert wird in der Vereins-Nextcloud über die zentrale Anmeldung der Tools-Übersicht — ein eigenes Passwort braucht es nicht, auch nicht am Handy.",
          "Weil hier Personendaten und Unterschriften stehen, gibt es bewusst keinen lokalen Datei-Modus: die Daten liegen ausschließlich in der Vereins-Cloud.",
          "Gespeichert wird bei jeder Änderung von selbst.",
          "Ändern zwei Geräte gleichzeitig denselben Stand, erkennt die App das, lädt den fremden Stand nach und sagt Bescheid."
        ]
      }
    ]
  }
];
