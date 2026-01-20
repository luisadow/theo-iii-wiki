---
aliases:
  - E-Statik
  - Elektrostatik Hub
date: "2025-11-25"
tags:
  - theo-iii
  - elektrostatik
  - hub
---

# Elektrostatik – Navigation & Überblick

Dieser Hub fasst alle laufenden Notizen zum Modul **Theoretische Physik III: Elektrodynamik** zusammen und verlinkt die wichtigsten Detailseiten, Aufgaben und Ressourcen zur Elektrostatik. Nutze ihn als Einstiegspunkt, um gezielt in Lernseiten, Formelsammlungen oder weiterführende Literatur zu springen.

---

## 1. Schnellzugriff auf Lernseiten

| Fokus                           | Zweck                                                  | Link                                                                      |
| ------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| Grundlagen kompakt              | Frage-Antwort-Stil, Definitionen, typische Beispiele   | [[Elektrostatik - Lernseite (Grundlagen)]]                                |
| Energetische Sicht, Kapazitäten | Feldenergie, Kondensatormodelle, Beispielrechnungen    | [[Energie und Kapazität in der Elektrostatik]]                            |
| Mathematische Werkzeuge         | Operatoren, Integralsätze, Übungsplan                  | [[Vektoranalysis]] · [[90_Resources/Lernplan TheoIII 2-Wochen]]           |
| Randwertmethoden & Spezialfälle | Dirichlet-/Neumann-Probleme, Spiegelmethode, Multipole | [[Randwertprobleme (Elektrostatik)]] · [[Spiegelmethode (Elektrostatik)]] |
| Organisatorisches               | Semesterstruktur, Termine, offene Aufgaben             | [[00_Overview]] (Vault-Root)                                              |

> Tipp: Starte mit der Grundlagen-Lernseite, verknüpfe anschließend Energie/Kapazität und wiederhole dabei gezielt die Operatoren aus [[Vektoranalysis]].

---

## 2. Themenlandkarte & geplante Seiten

1. **Feldgleichungen & Potenziale**

   - [[Elektrostatik - Lernseite (Grundlagen)]]
   - [[Randwertprobleme (Elektrostatik)|Poisson-/Laplace-Lösungen in passenden Koordinaten]]
   - [[Spiegelmethode (Elektrostatik)|Spiegelmethode & Leiterrandbedingungen]]

1. **Energie, Kapazität & Kraftdichten**

   - [[Energie und Kapazität in der Elektrostatik]]
   - [[Maxwell-Spannungstensor (Elektrostatik)|Maxwell-Spannungstensor & Druckkräfte]]
   - Hinweise zu Kraft-/Energievergleichen sind dort mit Beispielen verlinkt.

1. **Randwert- & Näherungsverfahren**

   - [[Randwertprobleme (Elektrostatik)]]
   - [[Multipolentwicklung (Elektrostatik)]]
   - [[Spiegelmethode (Elektrostatik)|Spezialfälle mit Bildern]] · SoV/Green-Funktionen

1. **Dynamische Felder & Wellen (ÜB 9 ff.)**

   - [[Elektrodynamik - Dynamik und Wellen|Maxwell-Dynamik, Wellen, Strahlung]]
   - Helmholtz-Zerlegung, Coulomb-/Lorenz-/Poincaré-Eichung (siehe auch [[Stromverteilungen und Magnetisches Vektorpotential]])
   - [[Faraday-Induktion (Elektrodynamik)]], [[Impulsbilanz und Poynting-Vektor]]

1. **Materie & Dielektrika**

   - [[Dielektrika (Elektrostatik)]]
   - [[Elektrostatik in Materie]]
   - Entelektrisierung & Relaxation → siehe Dielektrika-Notiz

> Markiere neue Seiten mit dem Präfix `Theo III - ...` oder verlinke direkt hier, sobald sie angelegt sind, um die Navigation konsistent zu halten.

---

## 3. Kerndefinitionen & Prüfungsformeln (Spickzettel)

- **Coulomb-Kraft:**
  $$
  \mathbf{F}_{12} = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r^2}\,\hat{\mathbf{r}}_{12}
  $$
- **Elektrisches Feld / Potential:**  
  $\mathbf{E} = \mathbf{F}/q$, $\mathbf{E} = -\nabla \phi$,  
  $\phi(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \int \frac{\rho(\mathbf{r}')}{|\mathbf{r}-\mathbf{r}'|}\, d^3 r'$
- **Gaußsches Gesetz:**  
  Differential: $\nabla \cdot \mathbf{E} = \rho / \varepsilon_0$  
  Integral: $\oint_{\partial V} \mathbf{E} \cdot d\mathbf{A} = Q_{\text{in}} / \varepsilon_0$
- **Poisson/Laplace:**  
  $\nabla^2 \phi = -\rho/\varepsilon_0$, in Quellfreiheit $\nabla^2 \phi = 0$
- **Feldenergie & Kapazität:**  
  $W = \frac{\varepsilon_0}{2} \int |\mathbf{E}|^2 d^3 r = \frac{1}{2} \int \rho \phi\, d^3 r$,  
  $C = Q/\phi$, $W = \frac{Q^2}{2C} = \frac{1}{2} C \phi^2$

Siehe [[Elektrostatik - Lernseite (Grundlagen)]] für Herleitungen und [[Energie und Kapazität in der Elektrostatik]] für detaillierte Beispiele.

---

## 4. Lernpfad & Selbsttest

1. **Grundbegriffe sichern:** Lies die Lernseite, beantworte die eingebauten Fragen ohne Spickzettel.
2. **Operator-Refresher:** Wiederhole Divergenz, Rotation, Gradient anhand des [[90_Resources/Lernplan TheoIII 2-Wochen|Lernplan]]-Crashkurses.
3. **Energie-Perspektive:** Rechne Kugel- und Plattenkondensator erneut, dokumentiere Zwischenschritte in [[Energie und Kapazität in der Elektrostatik]].
4. **Randwertproblem üben:** Übernimm ein Beispiel aus den Tafelbildern `V6` (Spiegelmethode) oder `V7` (Multipol) und lege eine neue Seite mit Rechenschritten an.
5. **Anwendungsaufgaben:** Ergänze im Ordner `20_Exercises` eigene Lösungen oder Verweise auf Übungsblätter.

Checkliste:

- [ ] Kannst du aus Symmetrien passende Gauß-Flächen auswählen?
- [ ] Weißt du, wann Poisson vs. Laplace gilt und welchen Randtyp du brauchst?
- [ ] Beherrschst du den Energiebegriff im Feld (Dichte, Gesamtenergie, Kapazität)?

---

## 5. Ressourcen & Literatur

- **Tafelbilder (PDF):**
  - `V3` Coulomb/Feldgleichungen, `V4` Energie/Kapazität, `V5` Maxwell-Spannungstensor & Randbedingungen, `V6` Randwertprobleme.
- **Standardliteratur:**
  - David J. Griffiths – _Introduction to Electrodynamics_ (Kap. 1–3)
  - Jackson – _Classical Electrodynamics_ (Kap. 1–2) für vertiefte Randwertmethoden.
- **Online:**
  - MIT OCW 8.07 Lecture Notes (Elektrostatik-Sektionen)
  - hyperphysics.phy-astr.gsu.edu (schnelle Formelchecks)

Verknüpfe relevante Stellen direkt in Detailnotizen (z. B. `[[90_Resources/TheoIII -  Tafelbilder/V4-WS25-Elektrostatische_Energie—Kapazitäten.pdf]]`).

---

## 6. Backlinks & offene Punkte

**Backlinks:**

- [[Elektrostatik - Lernseite (Grundlagen)]] → verweist hierher als „Hub“.
- [[Energie und Kapazität in der Elektrostatik]] → bitte Abschnitt „Verweise“ ergänzen, damit der Rücklink automatisch entsteht.
- [[Randwertprobleme (Elektrostatik)]], [[Spiegelmethode (Elektrostatik)]], [[Multipolentwicklung (Elektrostatik)]] → Rückverweise im Abschnitt „Ressourcen“ aktiv halten.
- [[Dielektrika (Elektrostatik)]] / [[Elektrostatik in Materie]] → Hublink im Abschnitt „Weitere Themen“ ergänzen.
- [[90_Resources/Lernplan TheoIII 2-Wochen|Lernplan]] / [[Vektoranalysis]] → Crosslink auf „Elektrostatik Hub“ hinzufügen, sobald die Themen dort auftauchen.

**Offene To-Dos:**

- [x] Rücklinks aus [[Randwertprobleme (Elektrostatik)]], [[Spiegelmethode (Elektrostatik)]], [[Multipolentwicklung (Elektrostatik)]], [[Dielektrika (Elektrostatik)]] und [[Elektrostatik in Materie]] gepflegt (Backlink-Hinweise in den jeweiligen Notizen ergänzt).
- [x] Beispielrechnungen aus `V5`/`V6` übertragen: siehe [[Maxwell-Spannungstensor (Elektrostatik)#Beispiel Plattenkondensator]] und [[Spiegelmethode (Elektrostatik)#Beispiel Punktladung vor leitender Kugel]].
- [x] Einheitliche Tag-Struktur (`theo-iii`, Sachgebiet, Kontext) definiert und angewendet.
- [x] Verknüpfungen zu Übungsserien ergänzt: [[20_Exercises/HA1/HA1 - Loesung]], [[20_Exercises/HA8/HA8.md]], [[20_Exercises/HA9/Aufgabe27_Loesung]] (Navigation über Hub).

---

## 7. Übungsblätter ↔ Notizen

| Übungsblatt / Aufgabe            | Thema                                        | Relevante Notizen                                                                                                                       |
| -------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| HA1 (Grundlagen E-Feld, Gauß)    | Gauß-Flächen, einfache Ladungsverteilungen   | [[Elektrostatik - Lernseite (Grundlagen)]], [[Elektrostatik]], [[Randwertprobleme (Elektrostatik)]]                                     |
| HA8 (Randwerte/Materie)          | gemischte Dirichlet/Neumann, Materialeinsatz | [[Randwertprobleme (Elektrostatik)]], [[Spiegelmethode (Elektrostatik)]], [[Dielektrika (Elektrostatik)]], [[Elektrostatik in Materie]] |
| HA9 Aufgabe 27 (Helmholtz/Gauge) | Helmholtz-Projektion, Coulomb-Gauge          | [[Helmholtz-Zerlegung (Vektorfelder)]], [[Coulomb-Eichung (Elektrodynamik)]], [[Elektrodynamik - Dynamik und Wellen]]                   |
| HA9 Aufgabe 28 (Poincaré-Gauge)  | radiale Eichung, Potentiale aus Feldern      | [[Poincaré-Eichung (Elektrodynamik)]], [[Lorenz-Eichung (Elektrodynamik)]], [[Helmholtz-Zerlegung (Vektorfelder)]]                      |

> Ergänze weitere Aufgabenzeilen, sobald neue Blätter im Ordner `20_Exercises` liegen.

---

_Nutze diesen Hub als Schaltzentrale: Von hier aus solltest du jede Rechenmethode, jedes Beispiel und jede Ressource zur Elektrostatik in zwei Klicks erreichen können._
