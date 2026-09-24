---
description: "Flächen- und Volumenelemente richtig aufstellen: dA und dV in Zylinder- und Kugelkoordinaten, eingeschlossener Strom und Ladung – Schritt für Schritt."
title: "Flächen- und Volumenelemente – Leitfaden"
---

Kurz-Anleitung, wie man für Integrale in Elektro-/Magnetostatik schnell das richtige Flächen- oder Volumenelement setzt, vor allem bei Draht- und Zylindersymmetrie.

## 1) Grundprinzip

1. **Symmetrie bestimmen** (kartesisch / zylindrisch / kugelförmig).
2. **Passende Koordinaten wählen** (zylindrisch bei Drähten, kugelförmig bei Punkt-/Kugelsymmetrie).
3. **Geometrisches Objekt festlegen**: Fläche oder Volumen, über das integriert wird.
4. **Differentialelement notieren** und **Richtung** (bei Flächen) angeben.
5. **Integrationsgrenzen** direkt aus der Skizze ablesen.

## 2) Flächenelemente: Wann ist $d\mathbf A=\hat{\mathbf n}\,dA$?

Ein Flächenelement ist immer ein **Vektor**, der senkrecht auf der Fläche steht:

$$
 d\mathbf A = \hat{\mathbf n}\,dA.
$$

**Beispiel 1: Querschnitt eines Drahts** (Kreisfläche senkrecht zur $z$-Achse):

- Normalenrichtung: $\hat{\mathbf n}=\hat{\mathbf z}$.
- Skalarfläche in Zylinderkoordinaten:

$$
 dA = 2\pi\rho\,d\rho
$$

weil der Kreisring mit Radius $\rho$ und Breite $d\rho$ die Fläche $dA$ hat.  
Damit

$$
 d\mathbf A = \hat{\mathbf z}\,2\pi\rho\,d\rho.
$$

**Beispiel 2: Mantelfläche Zylinder** (Radius $a$, Höhe $h$):

- Normalenrichtung: $\hat{\mathbf n}=\hat{\mathbf \rho}$.
- Skalarfläche:

$$
 dA = a\,d\varphi\,dz.
$$

## 3) Volumenelemente: Standard-Formeln merken

- Kartesisch:  
  $$dV = dx\,dy\,dz$$
- Zylindrisch:  
  $$dV = \rho\,d\rho\,d\varphi\,dz$$
- Kugel:  
  $$dV = r^2\sin\theta\,dr\,d\theta\,d\phi$$

**Schnelltest:** In Zylinderkoordinaten kommt immer ein Faktor $\rho$ vor, in Kugelkoordinaten $r^2\sin\theta$.

## 4) Beispiel: eingeschlossener Strom in einem Draht

1. **Stromdichte definieren** (homogen):

$$
\mathbf j = j\,\hat{\mathbf z}.
$$

2. **Gesamtstrom über die volle Querschnittsfläche** $A=\pi a^2$:

$$
I = \int_A \mathbf j\cdot d\mathbf A
= j\int_0^a 2\pi\rho\,d\rho
= j\pi a^2.
$$

3. **Eingeschlossener Strom** bis Radius $\rho$:

$$
I_{\rm encl} = \int_{A_\rho} \mathbf j\cdot d\mathbf A
= j\int_0^{\rho} 2\pi\rho'\,d\rho'
= j\pi\rho^2
= I\,\frac{\rho^2}{a^2}.
$$

Merke: Das Integral für $I_{\rm encl}$ ist **dasselbe**, nur mit oberer Grenze $\rho$ statt $a$.

## 5) Schnellregeln für Integrale

- **Kreisringfläche**: $dA = 2\pi\rho\,d\rho$
- **Zylindervolumen**: $dV = 2\pi\rho\,d\rho\,dz$ (nach $\varphi$ schon integriert)
- **Symmetrie ausnutzen**: Bei vollständiger Rotationssymmetrie kannst du $\varphi$ sofort integrieren ($\int_0^{2\pi} d\varphi = 2\pi$).

## 6) Verweise

- [[Vektoranalysis]]
- [[Induktivität und magnetische Energie]]
- [[Magnetostatik - Grundgleichungen]]
