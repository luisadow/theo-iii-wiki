---
description: "Poynting-Vektor und Impulsbilanz des elektromagnetischen Feldes: Energie- und Impulsdichte, Maxwell-Spannungstensor, Kraft auf Ladungsverteilungen."
title: "Impulsbilanz und Poynting-Vektor"
aliases:
  - Poynting-Vektor
  - Impulsbilanz EM-Feld
  - Dynamischer Maxwell-Spannungstensor
date: "2025-12-20"
tags:
  - theo-iii
  - elektrodynamik
  - energie
  - impuls
---

Kerne aus V18: Energie- und Impulsströme des EM-Feldes, dynamische Stress-Tensor-Form, Verbindung zur speziellen Relativität.

---

## 1. Energiefluss (Recall)

Poynting-Vektor:

$$
\mathbf{S} = \frac{1}{\mu_0} \mathbf{E} \times \mathbf{B}, \qquad
u = \tfrac{1}{2}(\varepsilon_0 |\mathbf{E}|^2 + |\mathbf{B}|^2/\mu_0).
$$

Poynting-Theorem: $\partial_t u + \nabla \cdot \mathbf{S} = -\mathbf{J}\cdot\mathbf{E}$.

---

## 2. Impulsdichte und Kraftdichte

Impulsdichte (Feld):

$$
\mathbf{g} = \varepsilon_0 \mathbf{E} \times \mathbf{B} = \mathbf{S}/c^2.
$$

Kraftdichte: $\mathbf{f} = \rho \mathbf{E} + \mathbf{J} \times \mathbf{B}$.

---

## 3. Dynamischer Maxwell-Spannungstensor

$$
T_{ij} = \varepsilon_0\left(E_i E_j - \tfrac{1}{2}\delta_{ij}|\mathbf{E}|^2\right) + \frac{1}{\mu_0}\left(B_i B_j - \tfrac{1}{2}\delta_{ij}|\mathbf{B}|^2\right).
$$

Impulsbilanz (mit diesem Vorzeichen von $T_{ij}$): $\partial_t g_i - \partial_j T_{ij} = -f_i$, d. h. $\mathbf f + \partial_t\mathbf g = \nabla\cdot\mathbf T$.
Gesamtkraft auf Volumen $V$: $\mathbf{F} = \oint_{\partial V} \mathbf{T}\cdot\mathbf{n}\, dA - \frac{d}{dt}\int_V \mathbf{g}\, dV$.

---

## 4. Hinweise

- In der Statik reduziert sich $T_{ij}$ auf elektrische bzw. magnetische Version (siehe [[Maxwell-Spannungstensor (Elektrostatik)]]).
- $\mathbf{S}$ gibt Energieflussrichtung, $\mathbf{g}$ Impulsfluss; wichtig bei Strahlung/Druck.
- Verbindung zur Relativität: Energie-Impuls-Tensor $T^{\mu\nu}$ vereinigt $u$, $\mathbf{S}$, $\mathbf{g}$ und $T_{ij}$.

---

## 5. Verknüpfungen

- Dynamik/Wellen: [[Elektrodynamik - Dynamik und Wellen]].
- Induktion/Energie: [[Faraday-Induktion (Elektrodynamik)]], [[Induktivität und magnetische Energie]].
- Relativität: [[Relativität – Lorentz-Transformation]], [[Minkowski-Raum und Vierervektoren]] (optional).
