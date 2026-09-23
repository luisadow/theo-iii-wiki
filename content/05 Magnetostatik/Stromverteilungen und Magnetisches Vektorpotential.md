---
title: "Stromverteilungen & Magnetisches Vektorpotential"
aliases:
  - Stromverteilungen und Vektorpotential
date: "2025-11-25"
tags:
  - theo-iii
  - magnetostatik
  - stroeme
  - vektorpotential
---

Diese Notiz bündelt Strategien zum Umgang mit kontinuierlichen stromführenden Strukturen und beschreibt deren Felder über das magnetische Vektorpotential $\mathbf{A}$. Sie ergänzt [[Magnetostatik - Grundgleichungen]], verweist auf [[Randwertprobleme (Elektrostatik)]] für methodische Parallelen und bildet die Grundlage für die spätere Notiz [[Magnetische Felder in Materie]].

---

## 1. Stromverteilungen

| Typ                       | Beschreibung                            | Kontinuitätsbedingung                                                                                  |
| ------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Linienstrom $I$           | Strom entlang einer Kurve $\mathcal{L}$ | $\mathbf{J}(\mathbf{r}) = I \int_{\mathcal{L}} \delta(\mathbf{r} - \mathbf{r}')\, d\boldsymbol{\ell}'$ |
| Flächenstrom $\mathbf{K}$ | Stromdichte auf einer Oberfläche $S$    | $\nabla_s \cdot \mathbf{K} = 0$                                                                        |
| Volumenstrom $\mathbf{J}$ | Stromdichte im Volumen $V$              | $\nabla \cdot \mathbf{J} = 0$                                                                          |

**Konvention:** Die positiven Richtungen folgen der Orientierung von $d\boldsymbol{\ell}$, $d\mathbf{a}$ und $d^3 r$.

---

## 2. Magnetisches Vektorpotential $\mathbf{A}$

### Definition

$$
\mathbf{B} = \nabla \times \mathbf{A}, \qquad \nabla \cdot \mathbf{A} = 0 \quad \text{(Coulomb-Eichung)}
$$

### Poisson-Gleichung

$$
\nabla^2 \mathbf{A} = -\mu_0 \mathbf{J}
$$

### Lösung für allgemeine Stromverteilungen

$$
\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int_V \frac{\mathbf{J}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\, d^3 r'
$$

Für Linienströme:

$$
\mathbf{A}(\mathbf{r}) = \frac{\mu_0 I}{4\pi} \int_{\mathcal{L}} \frac{d\boldsymbol{\ell}'}{|\mathbf{r} - \mathbf{r}'|}
$$

---

## 3. Typische Strommodelle & $\mathbf{A}$

### 3.1 Unendlich langer Leiter

- $\mathbf{J} = I\, \delta(x)\, \delta(y)\, \hat{\mathbf{z}}$
- $A_z(r) = -\frac{\mu_0 I}{2\pi} \ln \left(\frac{r}{r_0}\right)$ ($r_0$ beliebige Referenz; das Integral über den unendlichen Draht divergiert, nur Differenzen sind physikalisch)
- Feld: $\mathbf{B} = \nabla \times (A_z\, \hat{\mathbf{z}}) = -\partial_r A_z\,\hat{\boldsymbol{\varphi}} = \frac{\mu_0 I}{2\pi r}\, \hat{\boldsymbol{\varphi}}$

### 3.2 Kreisstrom (Radius $R$)

- $\mathbf{A}(\mathbf{r}) = \frac{\mu_0 I}{4\pi} \oint \frac{d\boldsymbol{\ell}'}{|\mathbf{r} - \mathbf{r}'|}$
- Aus Symmetrie hat $\mathbf A$ nur eine $\varphi$-Komponente: $\mathbf A = A_\varphi(r,\theta)\,\hat{\boldsymbol\varphi}$; auf der Achse ist $\mathbf A = 0$.
- Das allgemeine $A_\varphi$ führt auf elliptische Integrale. Fernfeld ($r\gg R$): Dipolform
  $$
  \mathbf A = \frac{\mu_0}{4\pi}\frac{\mathbf m\times\hat{\mathbf r}}{r^2},\qquad \mathbf m = I\pi R^2\,\hat{\mathbf z}.
  $$
- $\mathbf B$ auf der Achse bequemer direkt mit Biot–Savart: $B_z = \dfrac{\mu_0 I R^2}{2(R^2+z^2)^{3/2}}$.

### 3.3 Langes Solenoid (Windungsdichte $n$)

- $\mathbf{J} = n I\, \delta(r - R)\, \hat{\boldsymbol{\varphi}}$ (Flächenstrom $K = nI$)
- Innen ($r < R$): $A_\varphi = \frac{1}{2}\mu_0 n I r$
- Außen ($r > R$): $A_\varphi = \frac{1}{2}\mu_0 n I \frac{R^2}{r}$

---

## 4. Energie & Induktivität

$$
W = \frac{1}{2} \int_V \mathbf{J} \cdot \mathbf{A}\, d^3 r = \frac{1}{2} L I^2
$$

**Vorgehen:**

1. Bestimme $\mathbf{A}$ für die gegebene Stromdichte $\mathbf{J}$.
2. Werte $\int \mathbf{J} \cdot \mathbf{A}\, d^3 r$ aus.
3. Leite daraus $L$ ab oder verifiziere bekannte Induktivitäten (Solenoid, Toroid).

---

## 5. Randwert- & Symmetrieüberlegungen

- **Linearität:** $\mathbf{A}$ überlagert sich für mehrere Quellen direkt.
- **Spiegelmethode (magnetostatische Analogie):** Bei perfekten Leitern können Bildströme genutzt werden; vgl. [[Spiegelmethode (Elektrostatik)]].
- **Numerische Lösungen:** Diskretisiere $\mathbf{J}$ und löse $\nabla^2 \mathbf{A} = -\mu_0 \mathbf{J}$ (Finite Differences/Elements) mit Randbedingungen $\mathbf{A} \to 0$ für $r \to \infty$ oder periodischen Grenzen.

---

## 6. Verknüpfungen & weiterführende Notizen

- [[Magnetostatik - Grundgleichungen]] für Maxwell-Grundlagen.
- [[Randwertprobleme (Elektrostatik)]] · [[Spiegelmethode (Elektrostatik)]] (Analogie für Bildströme).
- [[Magnetische Felder in Materie]] für $\mathbf{M}$, $\mathbf{H}$ und gebundene Ströme.
- Gauges & Zerlegung: [[Helmholtz-Zerlegung (Vektorfelder)]], [[Coulomb-Eichung (Elektrodynamik)]], [[Poincaré-Eichung (Elektrodynamik)]], [[Lorenz-Eichung (Elektrodynamik)]], [[Elektrodynamik - Dynamik und Wellen]].
