---
description: "Lorenz-Eichung: entkoppelte Wellengleichungen für φ und A, retardierte Potentiale und Vergleich mit Coulomb- und Poincaré-Eichung."
title: "Lorenz-Eichung (Elektrodynamik)"
aliases:
  - Lorenz Gauge
  - Lorenz-Eichung
date: '2025-12-20'
tags:
  - theo-iii
  - elektrodynamik
  - gauge
  - vektorpotential
---

Eichbedingung: $\nabla \cdot \mathbf{A} + \tfrac{1}{c^2}\partial_t \phi = 0$. Führt zu entkoppelten Wellengleichungen für beide Potentiale und ist manifest kovariant.

---

## 1. Wellengleichungen

$$
\Box \phi = -\rho/\varepsilon_0, \qquad \Box \mathbf{A} = -\mu_0 \mathbf{J}, \qquad \Box = \nabla^2 - c^{-2} \partial_t^2.
$$

Felder: $\mathbf{E} = -\nabla \phi - \partial_t \mathbf{A}$, $\mathbf{B} = \nabla \times \mathbf{A}$.

---

## 2. Herleitung der Wellengleichungen

Setzt man $\mathbf E = -\nabla\phi - \partial_t\mathbf A$ und $\mathbf B = \nabla\times\mathbf A$ in die inhomogenen Maxwell-Gleichungen ein, erhält man zunächst gekoppelte Gleichungen:
$$\nabla^2\phi + \partial_t(\nabla\cdot\mathbf A) = -\frac{\rho}{\varepsilon_0},$$
$$\nabla^2\mathbf A - \frac{1}{c^2}\partial_t^2\mathbf A - \nabla\!\left(\nabla\cdot\mathbf A + \frac{1}{c^2}\partial_t\phi\right) = -\mu_0\mathbf J.$$
Die Lorenz-Bedingung macht die Klammer in der zweiten Gleichung zu null, und in der ersten wird $\partial_t(\nabla\cdot\mathbf A) = -\tfrac{1}{c^2}\partial_t^2\phi$. Übrig bleiben die entkoppelten Wellengleichungen aus Abschnitt 1.

**Erreichbarkeit:** Für beliebige Potentiale löst man
$$\Box\chi = -\left(\nabla\cdot\mathbf A + \frac{1}{c^2}\partial_t\phi\right);$$
die transformierten Potentiale $\mathbf A+\nabla\chi$, $\phi-\partial_t\chi$ erfüllen dann die Lorenz-Bedingung. Es bleibt eine **Resteichfreiheit** mit $\Box\chi = 0$.

## 3. Retardierte Potentiale (Standardform)

$$
\phi(\mathbf{r}, t) = \frac{1}{4\pi\varepsilon_0} \int \frac{\rho(\mathbf{r}', t_r)}{|\mathbf{r}-\mathbf{r}'|} \, d^3 r', \qquad
\mathbf{A}(\mathbf{r}, t) = \frac{\mu_0}{4\pi} \int \frac{\mathbf{J}(\mathbf{r}', t_r)}{|\mathbf{r}-\mathbf{r}'|} \, d^3 r',
$$

mit $t_r = t - |\mathbf{r}-\mathbf{r}'|/c$.

---

## 4. Vergleich zu Coulomb- und Poincaré-Eichung

- Quellen: ganze $\mathbf{J}$ wirkt direkt (kein Projektor nötig), aber $\phi$ koppelt zeitlich via $\partial_t \phi$-Term.
- Für quasistatische Probleme ist Coulomb bequemer; für Strahlung/Relativität Lorenz meist natürlicher.
- Poincaré bietet direkte Feldintegrale, ist aber speziell.

---

## 5. Verknüpfungen

- Dynamik/Wellen: [[Elektrodynamik - Dynamik und Wellen]].
- Projektoren: [[Helmholtz-Zerlegung (Vektorfelder)]].
- Weitere Gauges: [[Coulomb-Eichung (Elektrodynamik)]], [[Poincaré-Eichung (Elektrodynamik)]].
- Anwendungen: Strahlung (Dipol, Liénard–Wiechert) → [[Elektrodynamik - Dynamik und Wellen#7. Strahlung (Kurzreferenz)]].
