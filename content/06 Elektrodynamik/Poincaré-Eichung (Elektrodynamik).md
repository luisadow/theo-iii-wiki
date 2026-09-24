---
description: "Poincaré-Eichung (radiale Eichung) r·A = 0: Potentiale als Linienintegrale über E und B, Herleitung und Hinweise."
title: "Poincaré-Eichung (radiale Eichung)"
aliases:
  - Poincare-Gauge
  - Radiale Eichung
  - Poincaré-Eichung
date: '2025-12-20'
tags:
  - theo-iii
  - elektrodynamik
  - gauge
  - vektorpotential
---

Eichbedingung: $\mathbf{r} \cdot \mathbf{A}_p(\mathbf{r}, t) = 0$ (daraus folgt insbesondere $\int_0^1 du\, \mathbf{A}_p(u\mathbf{r}, t)\cdot\mathbf{r}=0$). Nutze sie, um Potentiale direkt aus Feldern auszudrücken.

---

## 1. Resultierende Potentiale

$$
\mathbf{A}_p(\mathbf{r}, t) = -\int_0^1 du\, u\, \mathbf{r} \times \mathbf{B}(u\mathbf{r}, t),
\qquad
\phi_p(\mathbf{r}, t) = -\int_0^1 du\, \mathbf{r} \cdot \mathbf{E}(u\mathbf{r}, t).
$$

Eichwechsel: $\mathbf{A}_p = \mathbf{A} + \nabla \chi$, $\phi_p = \phi - \partial_t \chi$; wähle $\chi$ so, dass $\mathbf{r}\cdot\mathbf{A}_p=0$ erfüllt ist.

---

## 2. Herleitungs-Skizze

1. Starte aus $\int_0^1 du\, \mathbf{A}_p(u\mathbf{r})\cdot\mathbf{r}=0$ → leite Bedingung für $\chi$ ab.
2. Nutze Kugelkoordinaten und $\nabla \times (f\mathbf{r}) = \nabla f \times \mathbf{r}$ für radial abhängige $f$.
3. Setze $\mathbf{B} = \nabla \times \mathbf{A}_p$, $\mathbf{E} = -\nabla \phi_p - \partial_t \mathbf{A}_p$ → erhalte obige Integrale.

---

## 3. Beispiel: homogene Felder

**Homogenes Magnetfeld $\mathbf B$:** Da $\mathbf B(u\mathbf r) = \mathbf B$ nicht von $u$ abhängt,
$$\mathbf A_p = -\int_0^1 u\,du\;\mathbf r\times\mathbf B = -\tfrac12\,\mathbf r\times\mathbf B = \tfrac12\,\mathbf B\times\mathbf r.$$
Check: $\mathbf r\cdot(\mathbf B\times\mathbf r) = 0$ ✓, und $\nabla\times\left(\tfrac12\mathbf B\times\mathbf r\right) = \tfrac12\left[\mathbf B(\nabla\cdot\mathbf r) - (\mathbf B\cdot\nabla)\mathbf r\right] = \tfrac12(3\mathbf B - \mathbf B) = \mathbf B$ ✓. Das ist die bekannte „symmetrische Eichung“.

**Homogenes elektrisches Feld $\mathbf E$ (statisch):**
$$\phi_p = -\int_0^1 du\;\mathbf r\cdot\mathbf E = -\mathbf E\cdot\mathbf r,\qquad -\nabla\phi_p = \mathbf E\ \checkmark$$

## 4. Hinweise

- Die Darstellung nutzt Feldwerte entlang der Linie $u\mathbf{r}$ (radiale Integration).
- Konsistenz prüfen: Einsetzen in Felddefinitionen muss $\mathbf{E}, \mathbf{B}$ reproduzieren.
- Praktisch vor allem für Aufgaben, die explizit nach dieser Eichung fragen.

---

## 5. Verknüpfungen

- Gauges: [[Coulomb-Eichung (Elektrodynamik)]], [[Lorenz-Eichung (Elektrodynamik)]].
- Methoden: [[Helmholtz-Zerlegung (Vektorfelder)]], [[Vektoranalysis]].
- Dynamik: [[Elektrodynamik - Dynamik und Wellen]].
