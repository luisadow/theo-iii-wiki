---
description: "Induktivität und magnetische Energie: Selbst- und Gegeninduktivität, W = ½LI², Spule und Toroid, LC-Schwingkreis."
title: "Induktivität und magnetische Energie"
aliases:
  - Induktivität
  - Selbstinduktion
  - Gegeninduktion
date: "2025-12-20"
tags:
  - theo-iii
  - elektrodynamik
  - magnetostatik
  - energie
---

Kerne aus V16: L für Einzelspulen und Kopplung, Energie im Magnetfeld, quasistatische Annahme (keine Abstrahlung).

---

## 1. Selbst- und Gegeninduktivität

Ringspannung einer Schleife:

$$
\mathcal{E} = -\frac{d\Phi_B}{dt} = -L\, \frac{dI}{dt}.
$$

Gekoppelte Schleifen:

$$
\mathcal{E}_1 = -L_{11}\, \frac{dI_1}{dt} - M\, \frac{dI_2}{dt}, \qquad
\mathcal{E}_2 = -M\, \frac{dI_1}{dt} - L_{22}\, \frac{dI_2}{dt}.
$$

Symmetrie: $M_{12}=M_{21}=M$.

---

## 2. Energie im Magnetfeld

$$
W = \frac{1}{2} L I^2 = \frac{1}{2} \int \mathbf{J}\cdot\mathbf{A}\, d^3 r = \frac{1}{2\mu_0}\int |\mathbf{B}|^2 d^3 r.
$$

Dichte: $u_B = |\mathbf{B}|^2/(2\mu_0)$.

---

## 3. Beispielwerte (klassisch)

- Langer Leiter (Selbstinduktion, Radius $a$, Länge $\ell$): $L \sim \tfrac{\mu_0 \ell}{2\pi}\ln(\ell/a)$ (Log-Korrektur).
- Solenoid: $L = \mu_0 n^2 A \ell$ (ohne Kern). Mit Kern: $\mu \to \mu_r \mu_0$.
- Toroid: $L = \tfrac{\mu_0 N^2 A}{2\pi r_m}$.

---

## 4. Schwingkreis (LC)

Energiependel zwischen $\tfrac{1}{2} C V^2$ und $\tfrac{1}{2} L I^2$, Eigenfrequenz $\omega_0 = 1/\sqrt{LC}$ (quasistatisch, keine Abstrahlung).

---

## 5. Verknüpfungen

- Induktion: [[Faraday-Induktion (Elektrodynamik)]].
- Felder/Potentiale: [[Stromverteilungen und Magnetisches Vektorpotential]].
- Materie: [[Magnetische Felder in Materie]], [[Materialgesetze Magnetik]].
- Dynamik: [[Elektrodynamik - Dynamik und Wellen]].
