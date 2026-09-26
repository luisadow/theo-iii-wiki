---
description: "Minkowski-Raum: Metrik, Vierervektoren, Lorentz- und Poincaré-Gruppe, Viererstrom und Viererpotential in der Elektrodynamik."
title: "Minkowski-Raum und Vierervektoren"
aliases:
  - Minkowski-Raum
  - Vierervektoren
  - Poincaré-Gruppe
date: '2025-12-20'
tags:
  - theo-iii
  - relativitaet
  - elektrodynamik
---

Die spezielle Relativitätstheorie lässt sich am elegantesten im vierdimensionalen Minkowski-Raum formulieren: Metrik, Vierervektoren, Lorentz- und Poincaré-Gruppe.

---

## 1. Vierervektoren & Metrik

Koordinaten: $x^\mu = (ct, x, y, z)$, Metrik $\eta = \mathrm{diag}(1,-1,-1,-1)$. Norm:

$$
 s^2 = \eta_{\mu\nu} x^\mu x^\nu = c^2 t^2 - |\mathbf{x}|^2 \quad (\text{invariant}).
$$

Kontravariant vs. kovariant: $x_\mu = \eta_{\mu\nu} x^\nu$.

![[minkowski-diagramm.svg|Minkowski-Diagramm für β = 0,5: Die Achsen von S′ kippen symmetrisch zum Lichtkegel. Ihre Einheiten liegen auf den Hyperbeln s² = ±1. A und B liegen auf einer Parallelen zur x′-Achse: gleichzeitig in S′, nicht in S.]]

---

## 2. Lorentz-Transformation (allgemein)

Lineare Abbildung $\Lambda$ mit $\Lambda^T \eta \Lambda = \eta$; daraus $\det\Lambda=\pm1$ und $\lvert\Lambda^0_{\;0}\rvert\ge 1$. Eigentliche orthochrone Lorentz-Transformationen: $\det\Lambda=+1$, $\Lambda^0_{\;0}\ge 1$. Boosts (3) + Rotationen (3) → 6 Parameter.

Vierervektoren transformieren: $x'^\mu = \Lambda^\mu_{\;\nu} x^\nu$.

---

## 3. Vierergrößen (kurz)

- Vierergeschwindigkeit: $u^\mu = \gamma(c, \mathbf{v})$, $u^2 = c^2$.
- Viererimpuls: $p^\mu = m u^\mu$, Invariante $p^2 = m^2 c^2$.
- Viererstrom / Viererpotenzial (EM): $J^\mu = (c\rho, \mathbf{J})$, $A^\mu = (\phi/c, \mathbf{A})$.

---

## 4. Poincaré-Gruppe (kurz)

Lorentz + Translation → 10 Parameter. Zusammensetzung bildet Gruppe, Invariante $s^2$ bleibt erhalten. Boost in beliebiger Richtung via Rapidität; Matrizen multiplikativ.

---

## 5. Verknüpfungen

- Lorentz-Boosts & Effekte: [[Relativität – Lorentz-Transformation]].
- EM-Kovarianz: [[Elektrodynamik - Dynamik und Wellen]]; EM-Tensor $F^{\mu\nu}$, Energie-Impuls-Tensor $T^{\mu\nu}$ (siehe [[Impulsbilanz und Poynting-Vektor]]).
