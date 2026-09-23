---
title: "Elektrostatik – Navigation & Überblick"
aliases:
  - E-Statik
  - Elektrostatik Hub
date: "2025-11-25"
tags:
  - theo-iii
  - elektrostatik
  - hub
---

Dieser Hub fasst alle laufenden Notizen zum Modul **Theoretische Physik III: Elektrodynamik** zusammen und verlinkt die wichtigsten Detailseiten, Aufgaben und Ressourcen zur Elektrostatik. Nutze ihn als Einstiegspunkt, um gezielt in Lernseiten, Formelsammlungen oder weiterführende Literatur zu springen.

---

## 1. Schnellzugriff auf Lernseiten

| Fokus                           | Zweck                                                  | Link                                                                      |
| ------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| Grundlagen kompakt              | Frage-Antwort-Stil, Definitionen, typische Beispiele   | [[Elektrostatik - Lernseite (Grundlagen)]]                                |
| Energetische Sicht, Kapazitäten | Feldenergie, Kondensatormodelle, Beispielrechnungen    | [[Energie und Kapazität in der Elektrostatik]]                            |
| Mathematische Werkzeuge         | Operatoren, Integralsätze                              | [[Vektoranalysis]]                                                       |
| Randwertmethoden & Spezialfälle | Dirichlet-/Neumann-Probleme, Spiegelmethode, Multipole | [[Randwertprobleme (Elektrostatik)]] · [[Spiegelmethode (Elektrostatik)]] |

> Tipp: Starte mit der Grundlagen-Lernseite, verknüpfe anschließend Energie/Kapazität und wiederhole dabei gezielt die Operatoren aus [[Vektoranalysis]].

---

## 2. Themenlandkarte

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

1. **Dynamische Felder & Wellen**

   - [[Elektrodynamik - Dynamik und Wellen|Maxwell-Dynamik, Wellen, Strahlung]]
   - Helmholtz-Zerlegung, Coulomb-/Lorenz-/Poincaré-Eichung (siehe auch [[Stromverteilungen und Magnetisches Vektorpotential]])
   - [[Faraday-Induktion (Elektrodynamik)]], [[Impulsbilanz und Poynting-Vektor]]

1. **Materie & Dielektrika**

   - [[Dielektrika (Elektrostatik)]]
   - [[Elektrostatik in Materie]]
   - Entelektrisierung & Relaxation → siehe Dielektrika-Notiz

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

## 4. Ressourcen & Literatur

- **Tafelbilder (PDF):**
  - V3 Coulomb/Feldgleichungen, V4 Energie/Kapazität, V5 Maxwell-Spannungstensor & Randbedingungen, V6 Randwertprobleme, V7 Laplace & Multipole.
- **Standardliteratur:**
  - David J. Griffiths – _Introduction to Electrodynamics_ (Kap. 1–3)
  - Jackson – _Classical Electrodynamics_ (Kap. 1–2) für vertiefte Randwertmethoden.
- **Online:**
  - MIT OCW 8.07 Lecture Notes (Elektrostatik-Sektionen)
  - hyperphysics.phy-astr.gsu.edu (schnelle Formelchecks)

---

## 5. Übungsblätter ↔ Notizen (WS 25/26)

| Übungsblatt / Aufgabe            | Thema                                        | Relevante Notizen                                                                                                                       |
| -------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| HA1 (Grundlagen E-Feld, Gauß)    | Gauß-Flächen, einfache Ladungsverteilungen   | [[Elektrostatik - Lernseite (Grundlagen)]], [[Elektrostatik]], [[Randwertprobleme (Elektrostatik)]]                                     |
| HA8 (Randwerte/Materie)          | gemischte Dirichlet/Neumann, Materialeinsatz | [[Randwertprobleme (Elektrostatik)]], [[Spiegelmethode (Elektrostatik)]], [[Dielektrika (Elektrostatik)]], [[Elektrostatik in Materie]] |
| HA9 Aufgabe 27 (Helmholtz/Gauge) | Helmholtz-Projektion, Coulomb-Gauge          | [[Helmholtz-Zerlegung (Vektorfelder)]], [[Coulomb-Eichung (Elektrodynamik)]], [[Elektrodynamik - Dynamik und Wellen]]                   |
| HA9 Aufgabe 28 (Poincaré-Gauge)  | radiale Eichung, Potentiale aus Feldern      | [[Poincaré-Eichung (Elektrodynamik)]], [[Lorenz-Eichung (Elektrodynamik)]], [[Helmholtz-Zerlegung (Vektorfelder)]]                      |
