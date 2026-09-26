---
description: "Lorentz-Transformation und Postulate der speziellen Relativitätstheorie: Boost, Zeitdilatation, Längenkontraktion, Relativität der Gleichzeitigkeit."
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

Aus Einsteins Relativitätsprinzip und der Konstanz der Lichtgeschwindigkeit folgt die Lorentz-Transformation – die Grundlage, unter der die Maxwell-Gleichungen forminvariant sind.

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

![[minkowski-diagramm.svg|Minkowski-Diagramm für β = 0,5: Die Achsen von S′ kippen symmetrisch zum Lichtkegel. Ihre Einheiten liegen auf den Hyperbeln s² = ±1. A und B liegen auf einer Parallelen zur x′-Achse: gleichzeitig in S′, nicht in S.]]

---

## Beispielaufgabe

> [!example]- Aufgabe: Myonen aus der Atmosphäre
> Myonen entstehen in etwa $10\ \mathrm{km}$ Höhe und fliegen mit $v = 0{,}998\,c$ zum Boden. Ihre mittlere Lebensdauer in Ruhe ist $\tau = 2{,}2\ \mu\mathrm s$. Welcher Anteil erreicht den Boden – mit und ohne Zeitdilatation?
>
> > [!success]- Lösung
> > 1. **Lorentzfaktor:** $\gamma = 1/\sqrt{1-0{,}998^2} \approx 15{,}8$.
> > 2. **Flugzeit im Erdsystem:** $\ t = \dfrac{10\ \mathrm{km}}{0{,}998\,c} \approx 33{,}4\ \mu\mathrm s$.
> > 3. **Eigenzeit der Myonen:** $\ \Delta\tau = t/\gamma \approx 2{,}11\ \mu\mathrm s$.
> > 4. **Überlebender Anteil:** $e^{-\Delta\tau/\tau} = e^{-0{,}96} \approx 38\,\%$. Ohne Zeitdilatation wäre es $e^{-33{,}4/2{,}2} \approx 3\cdot 10^{-7}$.
> > 5. **Sicht der Myonen:** Für sie ist die Atmosphäre auf $10\ \mathrm{km}/\gamma \approx 630\ \mathrm m$ verkürzt – dieselbe Eigenzeit, andere Erklärung.
> >
> > **Merke:** Zeitdilatation (Erdsystem) und Längenkontraktion (Myonsystem) beschreiben denselben Vorgang aus zwei Inertialsystemen.

## 4. Minkowski-Raum (Kurzverweis)

Vierervektoren $x^\mu = (ct, \mathbf{x})$, Metrik $\eta = \operatorname{diag}(1,-1,-1,-1)$, Invariante $s^2 = c^2 t^2 - |\mathbf{x}|^2$. Siehe [[Minkowski-Raum und Vierervektoren]].

---

## 5. Verknüpfungen

- EM-Kovarianz: [[Elektrodynamik - Dynamik und Wellen]] (Maxwell bleibt forminvariant).
- Experimente: Michelson–Morley (Null-Resultat), Lichtuhren-Denken für $c=\text{const}$.
- Vierervektoren & Poincaré-Gruppe: [[Minkowski-Raum und Vierervektoren]].
