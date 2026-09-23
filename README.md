# Theo III – Elektrodynamik (Lernwiki)

Lernwiki zur **Theoretischen Physik III (Elektrodynamik)** an der TU Berlin,
entstanden aus der Vorlesung im WiSe 25/26 zur Prüfungsvorbereitung.

**Online lesen:** <https://luisadow.github.io/theo-iii-wiki/>

Die Seiten folgen der Reihenfolge der Tafelbilder (V1–V20): Vektoranalysis,
Elektrostatik, Randwertprobleme und Multipole, Felder in Materie,
Magnetostatik, Induktion und Maxwell-Gleichungen, Eichungen, spezielle
Relativität. Es sind studentische Notizen, keine offizielle Quelle. Fehler
bitte als [Issue](https://github.com/luisadow/theo-iii-wiki/issues/new) melden.

## Aufbau

- `content/` – die Notizen (Markdown mit Obsidian-Wikilinks und LaTeX),
  thematisch in Ordnern `01 Grundlagen` … `07 Relativität` plus `Navigatoren`
- `quartz.config.ts`, `quartz.layout.ts` – Seitenkonfiguration und Layout
- `quartz/` – der Static-Site-Generator [Quartz v4](https://quartz.jzhao.xyz/)
  (MIT-Lizenz, siehe `LICENSE.txt`)

## Lokal bauen

```bash
npm ci
npx quartz build --serve   # http://localhost:8080
```

Jeder Push auf `v4` baut die Seite über GitHub Actions neu und veröffentlicht
sie auf GitHub Pages (`.github/workflows/deploy.yml`).
