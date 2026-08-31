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

Ein Eintrag hält fest: **Vorname** und **Name**, **Geburtsdatum**, **Anschrift**
und **Ort**, **Telefonnummer**, **E-Mail-Adresse**, **Bemerkungen** sowie den
**Eintritt-** und **Austritt-Status**. Unterschrieben wird direkt in der App —
von **Trainer/Betreuer** und von der **Geschäftsstelle**, mit Datum.

## Zugang

Die Anmeldung läuft über die [Tools-Übersicht](https://sc1911heiligenstadt.github.io/ToolsUebersicht/) — dort einmal anmelden, danach ist dieses Werkzeug offen.

Die Rechte gelten in drei Stufen: **Sehen** (Einträge ansehen), **Bearbeiten**
(Einträge pflegen und unterschreiben lassen) und **Administrieren** (Reiter
*Einstellungen*). Wer welche Stufe hat, legt die Tools-Übersicht fest.

Die Liste enthält Personendaten und Unterschriften — die Sichtbarkeit dieses
Werkzeugs ist deshalb eng gesteckt.

## Lokal starten

Über den Eintrag `trainercheckliste` in `E:\.claude\launch.json` — der Server läuft dann auf `http://localhost:8768/`.

## Technik

Vanilla JavaScript ohne Build-Schritt — die Dateien werden so ausgeliefert, wie sie im Repo liegen. Veröffentlicht über GitHub Pages. Die Daten liegen in der Vereins-Nextcloud (WebDAV); der Zugriff läuft ausschließlich über den Login-Worker der Tools-Übersicht, nie mit Zugangsdaten im Browser.

---

Ein Werkzeug des 1. SC 1911 Heiligenstadt. Alle Werkzeuge auf einen Blick: [Tools-Übersicht](https://sc1911heiligenstadt.github.io/ToolsUebersicht/) · Erklärungen im [Toolbox Wiki](https://sc1911heiligenstadt.github.io/Vereinswiki/).
