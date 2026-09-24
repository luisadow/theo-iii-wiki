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

## 3. Hinweise

- Die Darstellung nutzt Feldwerte entlang der Linie $u\mathbf{r}$ (radiale Integration).
- Konsistenz prüfen: Einsetzen in Felddefinitionen muss $\mathbf{E}, \mathbf{B}$ reproduzieren.
- Praktisch vor allem für Aufgaben, die explizit nach dieser Eichung fragen.

---

## 4. Verknüpfungen

- Gauges: [[Coulomb-Eichung (Elektrodynamik)]], [[Lorenz-Eichung (Elektrodynamik)]].
- Methoden: [[Helmholtz-Zerlegung (Vektorfelder)]], [[Vektoranalysis]].
- Dynamik: [[Elektrodynamik - Dynamik und Wellen]].
