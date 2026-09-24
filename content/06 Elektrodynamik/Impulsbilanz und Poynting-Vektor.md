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

Das elektromagnetische Feld transportiert Energie und Impuls. Diese Seite fasst Energie- und Impulsdichte, den Poynting-Vektor und den vollen Maxwell-Spannungstensor zusammen.

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

## Beispielaufgabe

> [!example]- Aufgabe: Wie kommt die Energie in einen Draht?
> Ein gerader Draht (Länge $\ell$, Radius $a$, Widerstand $R$) führt den Gleichstrom $I$. Berechne den Poynting-Vektor an der Drahtoberfläche und den gesamten Energiefluss in den Draht.
>
> > [!success]- Lösung
> > 1. **Felder an der Oberfläche:** Längs des Drahts $E = U/\ell$ mit $U = IR$ (Tangentialkomponente ist stetig, gilt also auch direkt außen). Das Magnetfeld ist $B = \dfrac{\mu_0 I}{2\pi a}$ in $\hat{\boldsymbol\varphi}$-Richtung.
> > 2. **Richtung:** $\hat{\mathbf z}\times\hat{\boldsymbol\varphi} = -\hat{\mathbf r}$ – $\mathbf S$ zeigt **radial nach innen**.
> > 3. **Betrag:** $\ S = \dfrac{EB}{\mu_0} = \dfrac{UI}{2\pi a\ell}$.
> > 4. **Gesamtfluss** durch die Mantelfläche $2\pi a\ell$:
> >    $$P = S\cdot 2\pi a\ell = UI = I^2R.$$
> >
> > **Merke:** Die Energie fließt nicht im Draht entlang, sondern durch das Feld von außen hinein – genau so viel, wie als Wärme frei wird.

## 4. Hinweise

- In der Statik reduziert sich $T_{ij}$ auf elektrische bzw. magnetische Version (siehe [[Maxwell-Spannungstensor (Elektrostatik)]]).
- $\mathbf{S}$ gibt Energieflussrichtung, $\mathbf{g}$ Impulsfluss; wichtig bei Strahlung/Druck.
- Verbindung zur Relativität: Energie-Impuls-Tensor $T^{\mu\nu}$ vereinigt $u$, $\mathbf{S}$, $\mathbf{g}$ und $T_{ij}$.

---

## 5. Verknüpfungen

- Dynamik/Wellen: [[Elektrodynamik - Dynamik und Wellen]].
- Induktion/Energie: [[Faraday-Induktion (Elektrodynamik)]], [[Induktivität und magnetische Energie]].
- Relativität: [[Relativität – Lorentz-Transformation]], [[Minkowski-Raum und Vierervektoren]] (optional).
