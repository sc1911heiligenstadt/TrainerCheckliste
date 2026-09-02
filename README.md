# ✅ TrainerCheckliste

Der Weg eines Trainers in den Verein hinein und wieder hinaus — als Checkliste,
die nichts vergisst. Beim **Eintritt** und beim **Austritt** hängen jeweils
mehrere Schritte dran, die früher auf Zuruf liefen: Unterlagen, Schlüssel,
Zugänge, Unterschriften.

**➡️ [TrainerCheckliste öffnen](https://sc1911heiligenstadt.github.io/TrainerCheckliste/)**

## Was drin ist

| Reiter | Wofür |
|---|---|
| **Trainer-Einträge** | Ein Eintrag je Person, mit Eintritt- und Austritt-Status und dem, was noch offen ist |
| **Einstellungen** | Der Speicherort, in den die App schreibt |
| **Info** | Kurzbeschreibung, Änderungsliste und Datenschutzhinweis |

Die Liste lässt sich nach **Namen durchsuchen**, nach **Eintritt-** und
**Austritt-Status** filtern und nach Name, Geburtsdatum, Eintritt oder Austritt
**sortieren**.

Ein Eintrag hält fest: **Vorname** und **Name**, **Geburtsdatum**, **Anschrift**,
**Telefonnummer** und **E-Mail-Adresse**, dazu Häkchen und Datum für
**Trainerzugang** und **Trainerabgang**.

Darunter hängen die beiden **Checklisten** — Zugang und Abgang, jeweils nach der
Papiervorlage samt Unterpunkten: Schlüsselübergabe (mit Feld für die
Schlüsselnummer), Vertrag, Mitgliedsantrag, erweitertes Führungszeugnis,
Verhaltenskodex und die weiteren Punkte. Je Checkliste gibt es
**Bemerkungen**, die Angabe „abgeschlossen“ oder „konnte nicht abgeschlossen
werden, weil …“ mit Grund sowie **Ort und Datum**. Unterschrieben wird direkt in
der App — von **Trainer/Betreuer** und von der **Geschäftsstelle**.

Ist eine Checkliste fertig, lässt sie sich mit **„Speichern & Einfrieren“**
sperren: alle Felder, Häkchen und Unterschriften sind dann geschützt. Die Sperre
wieder aufheben — und einen gesperrten Eintrag löschen — verlangt ein Passwort,
das auf dem Server geprüft wird und nicht im Quelltext der App steht.

## Zugang

Die Anmeldung läuft über die [Tools-Übersicht](https://sc1911heiligenstadt.github.io/ToolsUebersicht/) — dort einmal anmelden, danach ist dieses Werkzeug offen.

Die Rechte gelten in drei Stufen: **Sehen** (Einträge ansehen, alle Felder
schreibgeschützt), **Bearbeiten** (Einträge anlegen, löschen, pflegen,
unterschreiben lassen, sperren und entsperren) und **Administrieren** (Reiter
*Einstellungen*). Wer welche Stufe hat, legt die Tools-Übersicht fest. Der Reiter
*Info* ist für alle sichtbar.

Die Liste enthält Personendaten und Unterschriften — die Sichtbarkeit dieses
Werkzeugs ist deshalb eng gesteckt.

## Lokal starten

Über den Eintrag `trainercheckliste` in `E:\.claude\launch.json` — der Server läuft dann auf `http://localhost:8768/`.

## Technik

Vanilla JavaScript ohne Build-Schritt — die Dateien werden so ausgeliefert, wie sie im Repo liegen; ausgeliefert wird die einzelne Seite `index.html`. Veröffentlicht über GitHub Pages. Die Daten liegen in der Vereins-Nextcloud (WebDAV); der Zugriff läuft ausschließlich über den Login-Worker der Tools-Übersicht, nie mit Zugangsdaten im Browser. Einen lokalen Datei-Modus gibt es bewusst nicht. Gespeichert wird bei jeder Änderung von selbst; ändern zwei Geräte gleichzeitig denselben Stand, lädt die App den fremden Stand nach und sagt Bescheid.

---

Ein Werkzeug des 1. SC 1911 Heiligenstadt. Alle Werkzeuge auf einen Blick: [Tools-Übersicht](https://sc1911heiligenstadt.github.io/ToolsUebersicht/) · Erklärungen im [Toolbox Wiki](https://sc1911heiligenstadt.github.io/Vereinswiki/).
