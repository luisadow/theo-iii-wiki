---
aliases:
  - Stromverteilungen und Vektorpotential
date: '2025-11-25'
tags:
  - theo-iii
  - magnetostatik
  - stroeme
  - vektorpotential
---

# Stromverteilungen & Magnetisches Vektorpotential

Diese Notiz bündelt Strategien zum Umgang mit kontinuierlichen stromführenden Strukturen und beschreibt deren Felder über das magnetische Vektorpotential $\mathbf{A}$. Sie ergänzt [[Magnetostatik - Grundgleichungen]], verweist auf [[Randwertprobleme (Elektrostatik)]] für methodische Parallelen und bildet die Grundlage für die spätere Notiz [[Magnetische Felder in Materie]].

---

## 1. Stromverteilungen

| Typ                       | Beschreibung                            | Kontinuitätsbedingung                                                                                  |
| ------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Linienstrom $I$           | Strom entlang einer Kurve $\mathcal{L}$ | $\mathbf{J}(\mathbf{r}) = I \int_{\mathcal{L}} \delta(\mathbf{r} - \mathbf{r}')\, d\boldsymbol{\ell}'$ |
| Flächenstrom $\mathbf{K}$ | Stromdichte auf einer Oberfläche $S$    | $\nabla_s \cdot \mathbf{K} = 0$                                                                        |
| Volumenstrom $\mathbf{J}$ | Stromdichte im Volumen $V$              | $\nabla \cdot \mathbf{J} = 0$                                                                          |
|                           |                                         |                                                                                                        |

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
- $A_z(r) = \frac{\mu_0 I}{2\pi} \ln \left(\frac{r}{r_0}\right)$
- Feld: $\mathbf{B} = \nabla \times (A_z\, \hat{\mathbf{z}}) = \frac{\mu_0 I}{2\pi r}\, \hat{\boldsymbol{\varphi}}$

### 3.2 Kreisstrom (Radius $R$)

- $\mathbf{A}(\mathbf{r}) = \frac{\mu_0 I}{4\pi} \oint \frac{d\boldsymbol{\ell}'}{|\mathbf{r} - \mathbf{r}'|}$
- Auf der Achse ($z$-Richtung):
  $$
  A_\varphi(z) = 0, \qquad A_z(z) = \frac{\mu_0 I}{2} \frac{R^2}{\sqrt{R^2 + z^2}}
  $$
- $\mathbf{B}$ folgt durch Ableitung von $A_z$ nach $z$

### 3.3 Langes Solenoid (Windungsdichte $n$)

- $\mathbf{J} = n I\, \delta(r - R)\, \hat{\boldsymbol{\varphi}}$
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

---

## 7. Offene Punkte

- [ ] Beispiel „Rechteckige Leiterschleife“ mit numerischer Bestimmung von $\mathbf{A}$ ergänzen.
- [ ] Vergleich Coulomb- vs. Lorenz-Eichung für $\mathbf{A}$ ausarbeiten.
- [ ] Verknüpfung zu [[Dielektrika (Elektrostatik)]] hinzufügen, sobald magnetische Materialien behandelt sind.
- [ ] Referenzen zu passenden Übungen ausbauen.

---

Nutze diese Notiz, um Stromverteilungen konsistent über $\mathbf{J} \rightarrow \mathbf{A} \rightarrow \mathbf{B}$ bis hin zu Energie- und Induktivitätsberechnungen zu verfolgen und eigene Beispiele zu ergänzen.
