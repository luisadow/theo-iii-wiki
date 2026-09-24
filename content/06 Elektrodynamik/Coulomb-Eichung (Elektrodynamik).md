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

## 3. Hinweise & Checks

- $\nabla \cdot \mathbf{j}_T = 0$ muss gelten.
- In der Statik fällt der Zeitableitungsterm weg → $\nabla^2 \mathbf{A} = -\mu_0 \mathbf{j}_T$.
- Vergleich mit Lorenz-Eichung: dort wirkt vollständige $\mathbf{j}$, aber gekoppelt mit $\partial_t \phi$ (siehe [[Lorenz-Eichung (Elektrodynamik)]]).

---

## 4. Verknüpfungen

- Methoden: [[Helmholtz-Zerlegung (Vektorfelder)]], [[Stromverteilungen und Magnetisches Vektorpotential]], [[Vektoranalysis]].
- Dynamik: [[Elektrodynamik - Dynamik und Wellen]].
- Verwandte Gauges: [[Lorenz-Eichung (Elektrodynamik)]], [[Poincaré-Eichung (Elektrodynamik)]].
