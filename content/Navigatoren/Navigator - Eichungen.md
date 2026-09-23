---
title: "Navigator: Eichungen"
tags:
  - theo-iii
  - navigator
  - gauge
---

Kurzorientierung, wozu die Wahl einer Eichung dient und wann welche Form praktisch ist.

## Konzept in 30 Sekunden

- Eichfreiheit: Potentiale sind nicht eindeutig; physikalisch relevante Größen sind Felder. Eine Eichung fixiert Freiheitsgrade, damit die Gleichungen bestimmt werden.
- Ziel: Rechenaufwand senken, Randbedingungen kontrollieren, numerische Stabilität sichern.
- Typische Wahlkriterien: stationär vs. zeitabhängig, Rechenaufwand, ob manifeste Lorentz-Kovarianz gebraucht wird.

## Wann welche Eichung?

- **Coulomb-Eichung** ($\nabla\cdot\mathbf A = 0$): $\phi$ ist das instantane Coulomb-Potential (Poisson-Gleichung), $\mathbf A$ wird nur von $\mathbf j_T$ getrieben. Gut für quasistatische Probleme und die Trennung longitudinal/transversal.
- **Lorenz-Eichung** ($\nabla\cdot\mathbf A + \tfrac{1}{c^2}\partial_t\phi = 0$): Lorentz-kovariant, entkoppelte Wellengleichungen für $\phi$ und $\mathbf A$, retardierte Potentiale; Standard für Strahlung.
- **Poincaré-Eichung** ($\mathbf r\cdot\mathbf A = 0$): Potentiale direkt als Linienintegrale der Felder $\mathbf E$, $\mathbf B$ entlang radialer Strahlen; nützlich, wenn die Felder bekannt sind (z. B. Multipolentwicklung um einen Punkt).

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
