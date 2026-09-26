# Abbildungen (TikZ → SVG)

Die Abbildungen und Kapitel-Icons entstehen als TikZ und werden zu SVG gebaut.
Die SVGs liegen unter `content/assets/figures/` und werden eingebunden wie in Obsidian üblich:

```md
![[gauss-flaeche.svg|Bildunterschrift]]
```

Auf der Website setzt das Plugin `InlineFigures` sie inline ein. So erben sie die
Farbvariablen und wechseln mit dem Hell-/Dunkelmodus. In Obsidian bleiben es
normale Bilder mit eingebauten Fallback-Farben (hell/dunkel über `prefers-color-scheme`).

## Bauen

```sh
brew install tectonic poppler            # einmalig
node figures/build.mjs                   # alle
node figures/build.mjs dipol-feld        # einzelne
node figures/preview.mjs out.png dipol-feld   # PNG-Vorschau hell/dunkel
```

## Aufbau

| Pfad             | Inhalt                                                                   |
| ---------------- | ------------------------------------------------------------------------ |
| `style.tex`      | gemeinsamer Stil: Farbrollen, Linien, Pfeile, Ladungen                   |
| `icon-head.tex`  | Rahmen für Icons (gleiche Box, kräftige Linien)                          |
| `src/<name>.tex` | eine Abbildung pro Datei                                                 |
| `gen/<name>.py`  | optional: berechnet Kurven (z. B. Feldlinien) → `data/<name>*.tex`       |
| `build.mjs`      | tectonic → PDF → pdftocairo → SVG, Farben → CSS-Variablen, IDs eindeutig |

## Regeln

- Nur die Farben aus `style.tex` verwenden (`fg`, `mu`, `acc`, `blue`, `warm`, `bg`).
  Jede andere Farbe bricht den Build ab.
- Farbrollen: **E** in `fg`, **B** in `blue`, das eine Kernkonzept der Abbildung in `acc`,
  positive Ladung `warm`, negative Ladung `blue`.
- Notation wie auf der jeweiligen Seite (z. B. `d\vv A`, `Q_{\text{in}}`, `\partial V`).
- Kein `\clip`: pdftocairo verschluckt darin exakt waagerechte/senkrechte Linien.
  Berechnete Kurven schneidet `gen/*.py` selbst am Rahmen ab.
- Kein `plot[smooth]` auf sehr dichten Punktlisten (TeX-Überlauf); dichte Polygonzüge
  sehen bei 0,03 cm Abstand glatt aus.
- Dateinamen mit `icon-` werden als dekorative Icons ohne Bildunterschrift eingesetzt.
