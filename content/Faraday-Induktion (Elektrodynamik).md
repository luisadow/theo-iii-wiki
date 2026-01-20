---
aliases:
  - Faraday-Induktion
  - Induktionsgesetz
  - Elektromotorische Kraft
Date: '2025-12-20'
tags:
  - theo-iii
  - elektrodynamik
  - induktion
  - maxwell
---

# Faraday-Induktion – Flux- und Bewegungsinduktion

Kerne aus V15: Änderung magnetischen Flusses erzeugt Ringspannung/Wirbelfeld. Gilt für ruhende Schleifen (Flussänderung) und bewegte Leiter (motional emf).

---

## 1. Faradaysches Gesetz

Integralform (orientierte Fläche $A$, Rand $\partial A$):

$$
\oint_{\partial A} \mathbf{E} \cdot d\boldsymbol{\ell} = -\frac{d}{dt} \int_A \mathbf{B} \cdot d\mathbf{A} = -\frac{d\Phi_B}{dt}.
$$

Differentialform:

$$
\nabla \times \mathbf{E} = -\partial_t \mathbf{B}.
$$

Vorzeichen (Lenz): induzierte $\mathbf{E}$ wirkt Flussänderung entgegen.

---

## 2. Bewegte Leiter (motional emf)

Für Leitergeschwindigkeit $\mathbf{v}$:

$$
\mathcal{E} = \oint (\mathbf{E} + \mathbf{v}\times\mathbf{B}) \cdot d\boldsymbol{\ell}.
$$

Der Term $\mathbf{v}\times\mathbf{B}$ stammt aus der Lorentzkraft. Beide Bilder (Flussänderung vs. Bewegung) sind äquivalent.

---

## 3. Typische Setups

- Stationäre Schleife, zeitabhängiges $B(t)$ → reine Wirbel-$\mathbf{E}$.
- Bewegter Stab im homogenen $\mathbf{B}$: $\mathcal{E} = B\,\ell\,v$ (Richtung per Rechte-Hand-Regel).
- Generator/Dynamo: rotierende Schleifen → sinusförmige EMK.
- Transformatorprinzip: gekoppelte Spulen, $\mathcal{E}_2 = -M\, dI_1/dt$ (siehe [[Induktivität und magnetische Energie]]).

---

## 4. Energiefluss

Induktion erzeugt Wirbel-$\mathbf{E}$; Arbeit pro Umlauf: $W = q\mathcal{E}$. Energieübertrag durch Poynting-Vektor $\mathbf{S} = \tfrac{1}{\mu_0}\mathbf{E}\times\mathbf{B}$ (siehe [[Impulsbilanz und Poynting-Vektor]]).

---

## 5. Verknüpfungen

- Maxwell: [[Elektrodynamik - Dynamik und Wellen]].
- Kopplung an Kreise: [[Induktivität und magnetische Energie]].
- Randbedingungen/Wirbelfelder: [[Vektoranalysis]], [[Stromverteilungen und Magnetisches Vektorpotential]].

---

_Kurzkarte für Faraday; ergänze konkrete Übungsbeispiele (Flussänderung vs. motional emf)._
