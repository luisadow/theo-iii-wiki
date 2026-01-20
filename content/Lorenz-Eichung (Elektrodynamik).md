---
aliases:
  - Lorenz Gauge
  - Lorenz-Eichung
Date: '2025-12-20'
tags:
  - theo-iii
  - elektrodynamik
  - gauge
  - vektorpotential
---

# Lorenz-Eichung (Elektrodynamik)

Eichbedingung: $\nabla \cdot \mathbf{A} + \tfrac{1}{c^2}\partial_t \phi = 0$. Führt zu entkoppelten Wellengleichungen für beide Potentiale und ist manifest kovariant.

---

## 1. Wellengleichungen

$$
\Box \phi = -\rho/\varepsilon_0, \qquad \Box \mathbf{A} = -\mu_0 \mathbf{J}, \qquad \Box = \nabla^2 - c^{-2} \partial_t^2.
$$

Felder: $\mathbf{E} = -\nabla \phi - \partial_t \mathbf{A}$, $\mathbf{B} = \nabla \times \mathbf{A}$.

---

## 2. Retardierte Potentiale (Standardform)

$$
\phi(\mathbf{r}, t) = \frac{1}{4\pi\varepsilon_0} \int \frac{\rho(\mathbf{r}', t_r)}{|\mathbf{r}-\mathbf{r}'|} \, d^3 r', \qquad
\mathbf{A}(\mathbf{r}, t) = \frac{\mu_0}{4\pi} \int \frac{\mathbf{J}(\mathbf{r}', t_r)}{|\mathbf{r}-\mathbf{r}'|} \, d^3 r',
$$

mit $t_r = t - |\mathbf{r}-\mathbf{r}'|/c$.

---

## 3. Vergleich zu Coulomb- und Poincaré-Eichung

- Quellen: ganze $\mathbf{J}$ wirkt direkt (kein Projektor nötig), aber $\phi$ koppelt zeitlich via $\partial_t \phi$-Term.
- Für quasistatische Probleme ist Coulomb bequemer; für Strahlung/Relativität Lorenz meist natürlicher.
- Poincaré bietet direkte Feldintegrale, ist aber speziell.

---

## 4. Verknüpfungen

- Dynamik/Wellen: [[Elektrodynamik - Dynamik und Wellen]].
- Projektoren: [[Helmholtz-Zerlegung (Vektorfelder)]].
- Weitere Gauges: [[Coulomb-Eichung (Elektrodynamik)]], [[Poincaré-Eichung (Elektrodynamik)]].
- Anwendungen: Strahlung (Dipol, Liénard–Wiechert) → ergänzen in eigener Strahlungsnotiz.

---

_Karte für Lorenz-Eichung; ergänze Beispiele (retardierte Potentiale, Dipol) bei Bedarf._
