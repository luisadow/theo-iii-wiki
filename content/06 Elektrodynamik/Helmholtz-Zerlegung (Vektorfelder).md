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

Jedes hinreichend schnell abfallende Feld $\mathbf{V}$ (Ausstrahlungsbedingung) lässt sich eindeutig in einen transversalen und einen longitudinalen Anteil zerlegen. Grundlage für die Diskussion der Eichungen.

---

## 1. Zerlegung & Projektoren

$$
\mathbf{V} = \mathbf{V}_T + \mathbf{V}_L, \qquad \nabla \cdot \mathbf{V}_T = 0, \; \nabla \times \mathbf{V}_L = 0.
$$

![[helmholtz-zerlegung.svg|Ein Wirbel mit Quelle zerfällt in einen wirbelfreien Anteil V_L (radial, Gradientenfeld) und einen quellenfreien Anteil V_T (Zirkulation). Beide sind hier exakt berechnet.]]

Explizite Projektoren:

$$
\mathbf{V}_T(\mathbf{r}) = \nabla \times \int \frac{\nabla' \times \mathbf{V}(\mathbf{r}')}{4\pi |\mathbf{r}-\mathbf{r}'|}\, d^3 r',
\qquad
\mathbf{V}_L(\mathbf{r}) = -\nabla \int \frac{\nabla' \cdot \mathbf{V}(\mathbf{r}')}{4\pi |\mathbf{r}-\mathbf{r}'|}\, d^3 r'.
$$

Hilfsidentitäten (Indexschreibweise): $\partial_i (1/|\mathbf{r}-\mathbf{r}'|)=-(r_i-r'_i)/|\mathbf{r}-\mathbf{r}'|^3$, $\varepsilon_{ijk}\varepsilon_{klm} = \delta_{il}\delta_{jm} - \delta_{im}\delta_{jl}$.

---

## 2. Rechenhinweise

- Ableitungen dürfen unter das Integral, wenn $\mathbf{V}$ schnell genug abfällt.
- Prüfe $\nabla \cdot \mathbf{V}_T = 0$ und $\nabla \times \mathbf{V}_L = 0$ explizit als Konsistenzcheck.
- Praktische Anwendung: Projektion einer Stromdichte $\mathbf{j}$ auf $\mathbf{j}_T$ (siehe [[Coulomb-Eichung (Elektrodynamik)]])

---

## 3. Warum eindeutig – und wozu?

**Eindeutigkeit.** Angenommen, es gäbe zwei Zerlegungen $\mathbf V = \mathbf V_T + \mathbf V_L = \mathbf V_T' + \mathbf V_L'$. Die Differenz $\mathbf W = \mathbf V_L - \mathbf V_L' = \mathbf V_T' - \mathbf V_T$ ist dann gleichzeitig wirbelfrei und quellenfrei, also $\mathbf W = \nabla\psi$ mit $\nabla^2\psi = 0$. Fällt $\mathbf W$ im Unendlichen ab, muss $\psi$ konstant sein – also $\mathbf W = 0$.

**Im Fourierraum** werden die Projektoren algebraisch: mit $\hat{\mathbf k} = \mathbf k/k$
$$\tilde{\mathbf V}_L = \hat{\mathbf k}\,(\hat{\mathbf k}\cdot\tilde{\mathbf V}),\qquad \tilde{\mathbf V}_T = \tilde{\mathbf V} - \hat{\mathbf k}\,(\hat{\mathbf k}\cdot\tilde{\mathbf V}).$$
Longitudinal heißt „parallel zu $\mathbf k$“, transversal „senkrecht zu $\mathbf k$“.

**Anwendung: Kontinuitätsgleichung.** Weil $\nabla\cdot\mathbf J_T = 0$, gilt $\nabla\cdot\mathbf J = \nabla\cdot\mathbf J_L$ und damit
$$\partial_t\rho + \nabla\cdot\mathbf J_L = 0.$$
Der longitudinale Strom ist also vollständig durch die Änderung der Ladungsdichte festgelegt. Nur der transversale Anteil $\mathbf J_T$ ist „frei“ – er treibt in der [[Coulomb-Eichung (Elektrodynamik)|Coulomb-Eichung]] das Vektorpotential und damit die Abstrahlung.

## 4. Verknüpfungen

- Methoden: [[Vektoranalysis]], [[Randwertprobleme (Elektrostatik)]], [[Stromverteilungen und Magnetisches Vektorpotential]].
- Gauges: [[Coulomb-Eichung (Elektrodynamik)]], [[Lorenz-Eichung (Elektrodynamik)]], [[Poincaré-Eichung (Elektrodynamik)]].
- Dynamik: [[Elektrodynamik - Dynamik und Wellen]].
