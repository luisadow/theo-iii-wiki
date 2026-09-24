---
description: "Magnetische Materialgesetze: B = μ₀(H+M), Suszeptibilität, Permeabilität, Hysterese und Randbedingungen kompakt."
title: "Materialgesetze (Magnetik) – B, H, M"
aliases:
  - Materialgesetze Magnetik
  - Magnetische Suszeptibilität
  - Hysterese
date: '2025-12-20'
tags:
  - theo-iii
  - magnetostatik
  - materie
  - materialgesetze
---

Wie hängen $\mathbf B$, $\mathbf H$ und $\mathbf M$ in Materie zusammen? Lineare und anisotrope Materialien, Permeabilität, Hysterese und Randbedingungen im Überblick.

---

## 1. Grundbeziehungen

$$
\mathbf{B} = \mu_0 (\mathbf{H} + \mathbf{M}), \qquad \mathbf{M} = \chi_m \mathbf{H}, \qquad \mathbf{B} = \mu \mathbf{H},\; \mu = \mu_0 (1+\chi_m).
$$

Anisotrop: $M_i = \chi_{ij} H_j$, $B_i = \mu_{ij} H_j$ (Tensoren symmetrisch bei Verlustfreiheit).

---

## 2. Materialklassen

- Diamagnetisch: $\chi_m<0$, $\mu_r \lesssim 1$.
- Paramagnetisch: $\chi_m>0$ klein.
- Ferromagnetisch: nichtlinear, Hysterese (Kennwerte: $B_s$ Sättigung, $B_r$ Remanenz, $H_c$ Koerzitivfeld).

---

## 3. Hysterese-Kurven (Ferromagnet)

- $B(H)$ Schleife mit $B_s$, $B_r$, $H_c$.
- Energieverlust pro Zyklus = Fläche der Schleife.
- Entmagnetisierung: Rückführen entlang Minor Loop oder durch Wechselfeld/Erwärmung.

---

## 4. Randbedingungen (magnetisch)

$$
\mathbf{n}\cdot(\mathbf{B}_2-\mathbf{B}_1)=0,\qquad
\mathbf{n}\times(\mathbf{H}_2-\mathbf{H}_1)=\mathbf{K}_{\text{frei}}.
$$

Gebundene Ströme: $\mathbf{J}_b = \nabla \times \mathbf{M}$, $\mathbf{K}_b = \mathbf{M}\times\mathbf{n}$.

---

## 5. Beispiel: Brechung der Feldlinien an Eisen

An der Grenze zwischen Eisen (Medium 1, $\mu_1 = \mu_r\mu_0$ mit $\mu_r\approx 1000$) und Luft (Medium 2, $\mu_2 = \mu_0$) fließen keine freien Flächenströme. Dann sind $B_n$ und $H_t$ stetig. Mit dem Winkel $\alpha$ zwischen Feldlinie und Flächennormale gilt $\tan\alpha = B_t/B_n = \mu H_t/B_n$, also
$$\frac{\tan\alpha_1}{\tan\alpha_2} = \frac{\mu_1}{\mu_2} = \mu_r.$$
Verlaufen die Feldlinien im Eisen unter $\alpha_1 = 80^\circ$ ($\tan\alpha_1\approx 5{,}7$), treten sie unter $\tan\alpha_2 \approx 0{,}0057$, also $\alpha_2\approx 0{,}3^\circ$, in die Luft aus – praktisch senkrecht zur Oberfläche.

**Folge:** Eisen „führt“ den magnetischen Fluss wie ein Leiter den Strom (magnetische Kreise, Transformatorkerne). Das elektrische Gegenstück mit $\varepsilon_r$ steht in [[Dielektrika (Elektrostatik)]].

## 6. Verknüpfungen

- Grundlagen: [[Magnetische Felder in Materie]].
- Felder/Ströme: [[Stromverteilungen und Magnetisches Vektorpotential]], [[Magnetostatik - Grundgleichungen]].
- Energie/L: [[Induktivität und magnetische Energie]].
- Randbedingungen analog Elektrostatik: [[Dielektrika (Elektrostatik)]].
