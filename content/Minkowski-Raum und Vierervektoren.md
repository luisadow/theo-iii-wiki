---
aliases:
  - Minkowski-Raum
  - Vierervektoren
  - Poincaré-Gruppe
Date: '2025-12-20'
tags:
  - theo-iii
  - relativitaet
  - elektrodynamik
---

# Minkowski-Raum und Vierervektoren

Kerne aus V20: Raumzeitstruktur, Lorentz-Trafo als Poincaré-Gruppe, Norm und Metrik.

---

## 1. Vierervektoren & Metrik

Koordinaten: $x^\mu = (ct, x, y, z)$, Metrik $\eta = \mathrm{diag}(1,-1,-1,-1)$. Norm:

$$
 s^2 = \eta_{\mu\nu} x^\mu x^\nu = c^2 t^2 - |\mathbf{x}|^2 \quad (\text{invariant}).
$$

Kontravariant vs. kovariant: $x_\mu = \eta_{\mu\nu} x^\nu$.

---

## 2. Lorentz-Transformation (allgemein)

Lineare Abbildung $\Lambda$ mit $\Lambda^T \eta \Lambda = \eta$ (Det $=\pm1$, $\Lambda^0_{\;0}\ge 1$ für reine Lorentz). Boost + Rotation → 6 Parameter.

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

---

_Kurzblatt für 4D-Formalia; ergänze Feldtransformationen oder $F^{\mu\nu}$ bei Bedarf._
