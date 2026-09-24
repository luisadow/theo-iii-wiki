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

Selbst- und Gegeninduktivität, die im Magnetfeld gespeicherte Energie und typische Induktivitäten – alles in quasistatischer Näherung (ohne Abstrahlung).

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

## Beispielaufgabe

> [!example]- Aufgabe: Induktivität eines Koaxialkabels
> Ein Koaxialkabel besteht aus einem dünnwandigen Innenleiter (Radius $a$) und einem dünnwandigen Außenleiter (Radius $b$), die den Strom $I$ in entgegengesetzter Richtung führen. Bestimme die Induktivität pro Länge auf zwei Wegen.
>
> > [!success]- Lösung
> > 1. **Feld:** Nur zwischen den Leitern ist $B \ne 0$: $\ B = \dfrac{\mu_0 I}{2\pi r}$ für $a<r<b$ (außen heben sich die Ströme auf).
> > 2. **Weg 1 – Fluss:** durch ein Rechteck der Länge $\ell$ zwischen den Leitern
> >    $$\Phi = \ell\int_a^b \frac{\mu_0 I}{2\pi r}\,dr = \frac{\mu_0 I\ell}{2\pi}\ln\frac{b}{a} \quad\Rightarrow\quad L' = \frac{\Phi}{I\ell} = \frac{\mu_0}{2\pi}\ln\frac{b}{a}.$$
> > 3. **Weg 2 – Energie:**
> >    $$W' = \int_a^b\frac{B^2}{2\mu_0}\,2\pi r\,dr = \frac{\mu_0 I^2}{4\pi}\ln\frac{b}{a} = \tfrac12 L' I^2\ \checkmark$$
> >
> > **Merke:** Fluss- und Energiemethode müssen dasselbe liefern – ein guter Selbstcheck. Die Formel ist das magnetische Gegenstück zur Kapazität des [[Zylinderkondensator|Zylinderkondensators]].

## 4. Schwingkreis (LC)

Energiependel zwischen $\tfrac{1}{2} C V^2$ und $\tfrac{1}{2} L I^2$, Eigenfrequenz $\omega_0 = 1/\sqrt{LC}$ (quasistatisch, keine Abstrahlung).

---

## 5. Verknüpfungen

- Induktion: [[Faraday-Induktion (Elektrodynamik)]].
- Felder/Potentiale: [[Stromverteilungen und Magnetisches Vektorpotential]].
- Materie: [[Magnetische Felder in Materie]], [[Materialgesetze Magnetik]].
- Dynamik: [[Elektrodynamik - Dynamik und Wellen]].
