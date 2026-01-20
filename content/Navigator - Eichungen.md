---
tags:
  - theo-iii
  - navigator
  - gauge
---

# Navigator: Eichungen

Kurzorientierung, wozu die Wahl einer Eichung dient und wann welche Form praktisch ist.

## Konzept in 30 Sekunden

- Eichfreiheit: Potentiale sind nicht eindeutig; physikalisch relevante Groessen sind Felder. Eine Eichung fixiert Freiheitsgrade, damit die Gleichungen bestimmt werden.
- Ziel: Rechenaufwand senken, Randbedingungen kontrollieren, numerische Stabilitaet sichern.
- Typische Wahlkriterien: Stationaer vs. transient, dominierende Ladungsdichte vs. Stromdichte, Relativitaetsvertrauen.

## Wann welche Eichung?

- Coulomb-Eichung (nabla · A = 0): Gut bei quasistationaeren Situationen mit dominanten ladungsfreien Bereichen; Potentialgleichung elliptisch.
- Lorenz-Eichung (nabla · A + (1/c^2) ∂t phi = 0): Relativistisch sauber, wellenartige Gleichungen fuer phi und A, praktisch fuer Ausbreitung.
- Poincare-Eichung (r · A = 0): Praktisch in Strahlungsfeldern um Quellen; trennt longitudinale/ transversale Anteile geometrisch.

## Verweise

- Coulomb-Eichung: [[Coulomb-Eichung (Elektrodynamik)|Coulomb-Eichung]]
- Lorenz-Eichung: [[Lorenz-Eichung (Elektrodynamik)|Lorenz-Eichung]]
- Poincaré-Eichung: [[Poincaré-Eichung (Elektrodynamik)|Poincaré-Eichung]]
- Vektorpotential allgemein: [[Stromverteilungen und Magnetisches Vektorpotential]]
- Kontext Wellen/Retardierung: [[Elektrodynamik - Dynamik und Wellen]]

### Nutzung

- Wahlkriterium kurz notieren: statisch/quasistatisch → Coulomb, relativistisch/Strahlung → Lorenz, radial → Poincaré.
- Bei Wechsel immer Transformationsformel $\mathbf{A}'=\mathbf{A}+\nabla\chi$, $\phi'=
\phi-\partial_t\chi$ erinnern.
- Links auf Aufgaben/Übungen ergänzen, wenn eine Eichung gefordert ist.
