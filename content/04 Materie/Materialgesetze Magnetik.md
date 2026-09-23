---
description: "Magnetische Materialgesetze: B = μ₀(H+M), Suszeptibilität, Permeabilität, Hysterese und Randbedingungen kompakt."
title: "Materialgesetze (Magnetik) – B, H, M"
aliases:
  - Materialgesetze Magnetik
  - Magnetische Suszeptibilität
  - Hysterese
date: '2025-12-20'
tags:
  - theo-iii
  - magnetostatik
  - materie
  - materialgesetze
---

Kerne aus V14: lineare/aniso Materialien, Permeabilität, Hysterese, Randbedingungen.

---

## 1. Grundbeziehungen

$$
\mathbf{B} = \mu_0 (\mathbf{H} + \mathbf{M}), \qquad \mathbf{M} = \chi_m \mathbf{H}, \qquad \mathbf{B} = \mu \mathbf{H},\; \mu = \mu_0 (1+\chi_m).
$$

Anisotrop: $M_i = \chi_{ij} H_j$, $B_i = \mu_{ij} H_j$ (Tensoren symmetrisch bei Verlustfreiheit).

---

## 2. Materialklassen

- Diamagnetisch: $\chi_m<0$, $\mu_r \lesssim 1$.
- Paramagnetisch: $\chi_m>0$ klein.
- Ferromagnetisch: nichtlinear, Hysterese (Kennwerte: $B_s$ Sättigung, $B_r$ Remanenz, $H_c$ Koerzitivfeld).

---

## 3. Hysterese-Kurven (Ferromagnet)

- $B(H)$ Schleife mit $B_s$, $B_r$, $H_c$.
- Energieverlust pro Zyklus = Fläche der Schleife.
- Entmagnetisierung: Rückführen entlang Minor Loop oder durch Wechselfeld/Erwärmung.

---

## 4. Randbedingungen (magnetisch)

$$
\mathbf{n}\cdot(\mathbf{B}_2-\mathbf{B}_1)=0,\qquad
\mathbf{n}\times(\mathbf{H}_2-\mathbf{H}_1)=\mathbf{K}_{\text{frei}}.
$$

Gebundene Ströme: $\mathbf{J}_b = \nabla \times \mathbf{M}$, $\mathbf{K}_b = \mathbf{M}\times\mathbf{n}$.

---

## 5. Verknüpfungen

- Grundlagen: [[Magnetische Felder in Materie]].
- Felder/Ströme: [[Stromverteilungen und Magnetisches Vektorpotential]], [[Magnetostatik - Grundgleichungen]].
- Energie/L: [[Induktivität und magnetische Energie]].
- Randbedingungen analog Elektrostatik: [[Dielektrika (Elektrostatik)]].
