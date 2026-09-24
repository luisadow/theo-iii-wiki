---
description: "Coulomb-Eichung ∇·A = 0: Feldgleichungen, transversaler Strom, Vorgehen und Vergleich mit der Lorenz-Eichung."
title: "Coulomb-Eichung (Elektrodynamik)"
aliases:
  - Coulomb Gauge
  - Coulomb-Eichung
  - Transversales Vektorpotential
date: '2025-12-20'
tags:
  - theo-iii
  - elektrodynamik
  - gauge
  - vektorpotential
---

Eichbedingung: $\nabla \cdot \mathbf{A} = 0$. Skalarpotential folgt sofort aus Poisson, das Vektorpotential aus der transversalen Stromdichte.

---

## 1. Feldgleichungen in Coulomb-Eichung

$$
\nabla^2 \phi = -\rho/\varepsilon_0, \qquad
\nabla^2 \mathbf{A} - \frac{1}{c^2} \partial_t^2 \mathbf{A} = -\mu_0 \mathbf{j}_T.
$$

Transversaler Projektor (siehe [[Helmholtz-Zerlegung (Vektorfelder)]]):

$$
\mathbf{j}_T(\mathbf{r}) = \nabla \times \int \frac{\nabla' \times \mathbf{j}(\mathbf{r}')}{4\pi |\mathbf{r}-\mathbf{r}'|}\, d^3 r'.
$$

Felder:

$$
\mathbf{E} = -\nabla \phi - \partial_t \mathbf{A}, \qquad
\mathbf{B} = \nabla \times \mathbf{A}.
$$

---

## 2. Praktische Schritte

1. $\phi$: Poisson mit gegebenem $\rho$ lösen (statisch oder quasistatisch).
2. $\mathbf{j}_T$ aus $\mathbf{j}$ projizieren.
3. Wellengleichung für $\mathbf{A}$ lösen (Grenzbedingungen: $\mathbf{A}\to 0$ im Fernfeld).
4. Felder berechnen, Kontinuitätsgleichung prüfen.

---

## 3. Warum ist $\phi$ instantan – und trotzdem kausal?

In Coulomb-Eichung ist das Skalarpotential das instantane Coulomb-Potential,
$$\phi(\mathbf r,t) = \frac{1}{4\pi\varepsilon_0}\int\frac{\rho(\mathbf r',t)}{\lvert\mathbf r-\mathbf r'\rvert}\,d^3r'.$$
Ändert sich irgendwo die Ladung, reagiert $\phi$ überall sofort. Das widerspricht nicht der Relativität, denn $\phi$ ist nicht messbar – messbar sind nur die Felder $\mathbf E = -\nabla\phi - \partial_t\mathbf A$ und $\mathbf B$.

Der transversale Strom $\mathbf J_T$, der $\mathbf A$ antreibt, ist selbst nichtlokal (siehe [[Helmholtz-Zerlegung (Vektorfelder)]]) und enthält einen instantanen Anteil. Dieser hebt im elektrischen Feld den instantanen Beitrag von $-\nabla\phi$ genau auf. Übrig bleiben retardierte Felder – dieselben wie in der [[Lorenz-Eichung (Elektrodynamik)|Lorenz-Eichung]].

### Wie kommt man in die Coulomb-Eichung?

Hat man Potentiale mit $\nabla\cdot\mathbf A \neq 0$, wählt man $\chi$ als Lösung von
$$\nabla^2\chi = -\nabla\cdot\mathbf A.$$
Dann erfüllt $\mathbf A' = \mathbf A + \nabla\chi$ die Bedingung $\nabla\cdot\mathbf A' = 0$, und $\phi' = \phi - \partial_t\chi$.

## 4. Hinweise & Checks

- $\nabla \cdot \mathbf{j}_T = 0$ muss gelten.
- In der Statik fällt der Zeitableitungsterm weg → $\nabla^2 \mathbf{A} = -\mu_0 \mathbf{j}_T$.
- Vergleich mit Lorenz-Eichung: dort wirkt vollständige $\mathbf{j}$, aber gekoppelt mit $\partial_t \phi$ (siehe [[Lorenz-Eichung (Elektrodynamik)]]).

---

## 5. Verknüpfungen

- Methoden: [[Helmholtz-Zerlegung (Vektorfelder)]], [[Stromverteilungen und Magnetisches Vektorpotential]], [[Vektoranalysis]].
- Dynamik: [[Elektrodynamik - Dynamik und Wellen]].
- Verwandte Gauges: [[Lorenz-Eichung (Elektrodynamik)]], [[Poincaré-Eichung (Elektrodynamik)]].
