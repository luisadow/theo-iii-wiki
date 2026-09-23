---
title: "Relativität – Lorentz-Transformation"
aliases:
  - Lorentztransformation
  - Relativitätsprinzip
date: '2025-12-20'
tags:
  - theo-iii
  - relativitaet
  - elektrodynamik
---

Kerne aus V19/V20: Einsteins Relativitätsprinzip, konstante Lichtgeschwindigkeit, Lorentz-Trafo (Boosts), Basis für kovariante Maxwell-Darstellung.

---

## 1. Postulate

1. Physik ist in allen Inertialsystemen gleich (Relativitätsprinzip).
2. Lichtgeschwindigkeit $c$ ist in allen Inertialsystemen konstant.

---

## 2. Lorentz-Boost (1D, Geschwindigkeit $v$ entlang $x$)

$$
\gamma = \frac{1}{\sqrt{1-\beta^2}},\; \beta = v/c; \qquad
\begin{aligned}
ct' &= \gamma (ct - \beta x),\\
x'  &= \gamma (x - \beta ct),\\
y'  &= y,\; z' = z.
\end{aligned}
$$

Inverse: $\beta \to -\beta$. Galilei-Grenze $v\ll c$ → $x'=x-vt$, $t'=t$.

---

## 3. Konsequenzen

- Zeitdilatation: $\Delta t = \gamma\, \Delta\tau$; die Eigenzeit $\Delta\tau$ einer bewegten Uhr ist kürzer als die Koordinatenzeit $\Delta t$.
- Längenkontraktion: $L = L_0/\gamma$ entlang der Bewegungsrichtung ($L_0$ = Ruhelänge).
- Relativität der Gleichzeitigkeit.

---

## 4. Minkowski-Raum (Kurzverweis)

Vierervektoren $x^\mu = (ct, \mathbf{x})$, Metrik $\eta = \operatorname{diag}(1,-1,-1,-1)$, Invariante $s^2 = c^2 t^2 - |\mathbf{x}|^2$. Siehe [[Minkowski-Raum und Vierervektoren]].

---

## 5. Verknüpfungen

- EM-Kovarianz: [[Elektrodynamik - Dynamik und Wellen]] (Maxwell bleibt forminvariant).
- Experimente: Michelson–Morley (Null-Resultat), Lichtuhren-Denken für $c=\text{const}$.
- Vierervektoren & Poincaré-Gruppe: [[Minkowski-Raum und Vierervektoren]].
