---
description: "Helmholtz-Zerlegung: Aufteilung eines Vektorfelds in transversalen und longitudinalen Anteil mit expliziten Projektorformeln."
title: "Helmholtz-Zerlegung von Vektorfeldern"
aliases:
  - Helmholtz-Zerlegung
  - Transversal-Longitudinal-Projektion
  - Helmholtz-Projektoren
date: '2025-12-20'
tags:
  - theo-iii
  - vektoranalysis
  - elektrodynamik
  - methode
---

Jedes hinreichend schnell abfallende Feld $\mathbf{V}$ (Ausstrahlungsbedingung) lässt sich eindeutig in einen transversalen und einen longitudinalen Anteil zerlegen. Diese Seite ist Referenz für ÜB9 und alle Gauge-Diskussionen.

---

## 1. Zerlegung & Projektoren

$$
\mathbf{V} = \mathbf{V}_T + \mathbf{V}_L, \qquad \nabla \cdot \mathbf{V}_T = 0, \; \nabla \times \mathbf{V}_L = 0.
$$

Explizite Projektoren:

$$
\mathbf{V}_T(\mathbf{r}) = \nabla \times \int \frac{\nabla' \times \mathbf{V}(\mathbf{r}')}{4\pi |\mathbf{r}-\mathbf{r}'|}\, d^3 r',
\qquad
\mathbf{V}_L(\mathbf{r}) = -\nabla \int \frac{\nabla' \cdot \mathbf{V}(\mathbf{r}')}{4\pi |\mathbf{r}-\mathbf{r}'|}\, d^3 r'.
$$

Hilfsidentitäten (Indexschreibweise): $\partial_i (1/|\mathbf{r}-\mathbf{r}'|)=-(r_i-r'_i)/|\mathbf{r}-\mathbf{r}'|^3$, $\varepsilon_{ijk}\varepsilon_{klm} = \delta_{il}\delta_{jm} - \delta_{im}\delta_{jl}$.

---

## 2. Rechenhinweise (ÜB9)

- Ableitungen dürfen unter das Integral, wenn $\mathbf{V}$ schnell genug abfällt.
- Prüfe $\nabla \cdot \mathbf{V}_T = 0$ und $\nabla \times \mathbf{V}_L = 0$ explizit als Konsistenzcheck.
- Praktische Anwendung: Projektion einer Stromdichte $\mathbf{j}$ auf $\mathbf{j}_T$ (siehe [[Coulomb-Eichung (Elektrodynamik)]])

---

## 3. Verknüpfungen

- Methoden: [[Vektoranalysis]], [[Randwertprobleme (Elektrostatik)]], [[Stromverteilungen und Magnetisches Vektorpotential]].
- Gauges: [[Coulomb-Eichung (Elektrodynamik)]], [[Lorenz-Eichung (Elektrodynamik)]], [[Poincaré-Eichung (Elektrodynamik)]].
- Dynamik: [[Elektrodynamik - Dynamik und Wellen]].
