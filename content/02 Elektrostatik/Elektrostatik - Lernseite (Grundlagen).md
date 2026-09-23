---
description: "Elektrostatik Grundlagen einfach erklärt: Coulomb-Gesetz, E-Feld, Gaußsches Gesetz, Potential, Poisson- und Laplace-Gleichung mit durchgerechneten Beispielen."
title: "Elektrostatik – Lernseite (Grundlagen)"
date: "2025-11-25"
tags:
  - theo-iii
  - elektrostatik
  - grundlagen
---

## 1. Coulomb-Gesetz

**Frage:** Was beschreibt das Coulomb-Gesetz?

> Zwei Punktladungen $q_1$, $q_2$ im Abstand $r = \lvert \mathbf{r}_1 - \mathbf{r}_2 \rvert$ üben die Kraft
>
> $$
> \mathbf{F}_{12} = k_\text{e} \frac{q_1 q_2}{r^2} \hat{\mathbf{r}},\quad k_\text{e} = \frac{1}{4\pi\varepsilon_0}
> $$
>
> aufeinander aus. Die Richtung zeigt entlang der Verbindungsachse.

**Verknüpfungen:** [[Elektrostatik]] · [[Vektoranalysis]] · Weiteres Beispiel siehe [[Energie und Kapazität in der Elektrostatik]].

**Konstanten:**

$$
\frac{1}{4\pi\varepsilon_0} = k_\text{e} \approx 8{,}988 \cdot 10^9\, \frac{\text{N m}^2}{\text{C}^2}
$$

---

## 2. Elektrisches Feld

> Definition: Kraft pro Probeladung
>
> $$
> \mathbf{E}(\mathbf{r}) = \frac{\mathbf{F}}{q}
> $$
>
> Für eine Punktladung $Q$ gilt
>
> $$
> \mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \frac{Q}{r^2} \hat{\mathbf{r}}
> $$

**Hinweis:** Für Randbedingungen und Kraftdichten siehe [[Maxwell-Spannungstensor (Elektrostatik)]] und [[Randwertprobleme (Elektrostatik)]].

---

## 3. Superpositionsprinzip

Für Punktladungen $Q_i$:

$$
\mathbf{E}(\mathbf{r}) = \sum_i \frac{1}{4\pi\varepsilon_0} \frac{Q_i}{\lvert \mathbf{r}-\mathbf{r}_i \rvert^2}\, \widehat{(\mathbf{r}-\mathbf{r}_i)}
$$

Für kontinuierliche Ladungsverteilungen:

- **Volumenladung** $\rho(\mathbf{r}')$
  $$
  \mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \int_V \rho(\mathbf{r}') \frac{\mathbf{r}-\mathbf{r}'}{\lvert \mathbf{r}-\mathbf{r}' \rvert^3} \, d^3r'
  $$
- **Oberflächenladung** $\sigma(\mathbf{r}')$
  $$
  \mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \int_A \sigma(\mathbf{r}') \frac{\mathbf{r}-\mathbf{r}'}{\lvert \mathbf{r}-\mathbf{r}' \rvert^3} \, dA'
  $$

---

## 4. Gaußsches Gesetz

$$
\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0},\quad \oint_{\partial V} \mathbf{E}\cdot d\mathbf{A} = \frac{Q_\text{in}}{\varepsilon_0}
$$

### Symmetrie-Check (Faustregel vor jedem Gauß-Integral)

- **Bestimme die Isotropie:** Kugel (Punktladung), Zylinder (Linienladung), Ebene (Flächenladung).
- **Wähle Gauß-Fläche:** Kugel → $4\pi r^2$; Zylinder → $2\pi r L$ (Deckel einbeziehen, falls Feld normal); Pillenbox bei Platten → $2A$.
- **Normalen:** nach außen gerichtet; Deckel entgegengesetzt orientiert.
- **Integral vereinfachen:** Bei konstanter Feldstärke auf der Fläche wird $\oint \mathbf{E}\cdot d\mathbf{A} = E \cdot (\text{Fläche})$.
- **Enclosed charge:** Volumen mit $\rho$, Fläche mit $\sigma$, Linie mit $\lambda$.
- **Abschließend:** $E$ aus $\oint \mathbf{E}\cdot d\mathbf{A} = Q_\text{in}/\varepsilon_0$, Richtung aus Symmetrie.

### Typische Flächenmaße (bei konstanter Feldstärke)

- Kugelschale Radius $r$: Fläche $4\pi r^2$.
- Zylinder-Seitenfläche (Radius $r$, Länge $L$): Fläche $2\pi r L$.
- Pillenbox bei Platten (Fläche $A$ je Deckel): Beitrag $2A$, wenn Feld auf beiden Seiten gleich groß.
- Ringfläche auf Kugel/Zylinder (für Teilflüsse): $dA = r^2 \sin\theta \, d\theta \, d\phi$ (Kugel), $dA = r \, d\phi \, dz$ (Zylinder).

---

## 5. Elektrisches Potential

$$
\mathbf{E} = -\nabla \phi
$$

- Punktladung:
  $$
  \phi(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \frac{Q}{r}
  $$
- Kontinuierliche Ladung:
  $$
  \phi(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \int_V \frac{\rho(\mathbf{r}')}{\lvert \mathbf{r}-\mathbf{r}' \rvert} \, d^3r'
  $$

---

## 6. Poisson- und Laplace-Gleichung

Allgemeine Form:

$$
\nabla^2 \phi(\mathbf{r}) = -\frac{\rho(\mathbf{r})}{\varepsilon_0}
$$

Ladungsfreie Gebiete ($\rho = 0$) → Laplace-Gleichung $\nabla^2 \phi = 0$. Lösung eindeutig bei gegebenen Randbedingungen (Eindeutigkeitssatz).

### Typische Randbedingungen

- Dirichlet: $\phi|_{\partial V} = \phi_0$
- Neumann: $(\mathbf{n}\cdot\nabla\phi)|_{\partial V} = g$
- Gemischt: Kombination aus beiden; an Materialgrenzen zusätzlich  
  $\varepsilon_1 (\mathbf{E}_1\cdot\mathbf{n}) - \varepsilon_2 (\mathbf{E}_2\cdot\mathbf{n}) = \sigma_\text{frei}$ und $\mathbf{n}\times(\mathbf{E}_1-\mathbf{E}_2)=0$

**Strategien:** Variablentrennung in Zylinderkoordinaten/Kugelkoordinaten, [[Randwertprobleme (Elektrostatik)]], [[Multipolentwicklung (Elektrostatik)]], [[Spiegelmethode (Elektrostatik)]].

---

## 7. Beispiel – Unendlich lange Linienladung

Linienladung $\lambda$ entlang der $z$-Achse:

1. Symmetrie → $\mathbf{E}(r) = E(r)\,\hat{\mathbf{r}}$
2. Gauß-Fläche: Zylinder Radius $r$, Länge $L$
3. Gaußsches Gesetz:

$$
E(r) (2\pi r L) = \frac{\lambda L}{\varepsilon_0}
$$

4. Lösung:

$$
E(r) = \frac{\lambda}{2\pi\varepsilon_0 r}
$$

5. Richtung:

$$
\mathbf{E}(r) = \frac{\lambda}{2\pi\varepsilon_0 r} \hat{\mathbf{r}}
$$

---

## Verweise & Ressourcen

- Weiterführend: **[[Energie und Kapazität in der Elektrostatik]]**
- Vertiefung: [[Randwertprobleme (Elektrostatik)]], [[Spiegelmethode (Elektrostatik)]], [[Multipolentwicklung (Elektrostatik)]]
- Tafelbilder: V3 (Coulomb, Feldgleichung) · V5 (Maxwell-Spannungstensor) · V6 (Randwertprobleme)
- Literatur: Griffiths – _Introduction to Electrodynamics_ · MIT OCW 8.07 Notes
- Nützlich: [[Vektoranalysis]] (Operatoren & Identitäten)

### Lesetipp

- Erst Definition, dann Beispiel lesen; jede Formel kurz mit Dimensionen prüfen ($[E]=\text{V/m}$, $[\phi]=\text{V}$).
- Bei Superpositionen Quellenart notieren (Punkt/Fläche/Linie) und das passende Integral auswählen.
- Gauß-Gesetz: vor Integration Symmetrie und Gauß-Fläche als zwei Stichpunkte festhalten.

## Beispiele – Laplace/Poisson (schnelle Referenz)

**1) 1D-Poisson mit konstanter Quelle (Kartesisch)**  
$\nabla^2\phi = -\rho_0/\varepsilon_0$ auf $z\in[-d,d]$, Dirichlet $\phi(\pm d)=0$.  
Zweifach integrieren: $\phi(z) = -\rho_0 z^2/(2\varepsilon_0) + C_1 z + C_2$. Randbedingungen $\phi(\pm d)=0$ liefern $C_1=0$, $C_2 = \rho_0 d^2/(2\varepsilon_0)$.  
Ergebnis: $$\phi(z) = \frac{\rho_0}{2\varepsilon_0}(d^2 - z^2),\quad E_z = -\partial_z\phi = \frac{\rho_0}{\varepsilon_0} z.$$  
Symmetrische Quelle → Feld linear, Potential parabolisch.

**2) 1D-Laplace zwischen zwei Platten (Kartesisch)**  
$\nabla^2\phi = 0$ auf $z\in[0,d]$, Dirichlet $\phi(0)=V_0$, $\phi(d)=0$.  
Ansatz $\phi(z)=A z + B$, Randwerte geben $B=V_0$, $A=-V_0/d$.  
Ergebnis: $$\phi(z)=V_0\left(1-\frac{z}{d}\right),\quad E_z = -\partial_z\phi = \frac{V_0}{d}.$$  
Linearer Verlauf, Feld konstant.

**3) Zylindersymmetrie – Laplace im Hohlraum (Zylinderkondensator ohne Quelle)**  
Gebiet $a<r<b$, $\nabla^2\phi=0$ in Zylinderkoordinaten: $\dfrac{1}{r}\partial_r(r\partial_r\phi)=0$.  
Integriere: $r\partial_r\phi = C_1 \Rightarrow \partial_r\phi = C_1/r \Rightarrow \phi(r)= C_1\ln r + C_2$.  
Dirichlet $\phi(a)=V_a$, $\phi(b)=V_b$:  
$$C_1 = \frac{V_a - V_b}{\ln(a/b)},\quad C_2 = V_a - C_1\ln a.$$  
Potentialverlauf: $$\phi(r) = V_a + (V_b - V_a)\frac{\ln(r/a)}{\ln(b/a)},\quad E_r = -\partial_r\phi = -\frac{V_b - V_a}{\ln(b/a)}\frac{1}{r}.$$  
Diese Form liefert direkt das $E(r)\propto 1/r$ und ist Basis für $C = 2\pi\varepsilon_0 L/\ln(b/a)$.

**4) Kugelsymmetrie – Laplace im leeren Raum (außen ohne Quellen)**  
$\nabla^2\phi=0$ für $R_1<r<R_2$. Allgemeine Lösung: $\phi(r) = A + B/r$.  
Dirichlet $\phi(R_1)=V_1$, $\phi(R_2)=V_2$:  
$$B = \frac{(V_1 - V_2) R_1 R_2}{R_2 - R_1},\quad A = V_1 - \frac{B}{R_1}.$$  
$$\phi(r) = V_2 + (V_1 - V_2)\frac{R_2 - r}{R_2 - R_1}\frac{R_1}{r},\quad E_r = -\partial_r\phi = \frac{B}{r^2}.$$  
Grenzfall $R_2\to\infty$, $V_2=0$ ergibt $\phi(r)=V_1 R_1/r$ (Punktladungsform ohne Quelle im betrachteten Gebiet).

### Nutzungshinweis

- Bei 1D-Problemen stets: zweimal integrieren, Konstanten über Randwerte fixen.
- Bei Zylinder/Kugel: allgemeine radiale Lösung (Koordinaten-Jacobian beachten), dann Konstanten über Randwerte.
- Quelle als Delta nur am Rand/außerhalb übernehmen; im Quell-freien Gebiet gilt Laplace.

### Ausgeschriebene Beispiele (mit Zwischenschritten)

**A) 1D-Poisson, konstante Quelle, symmetrische Dirichlet-Randwerte**  
Problem: $\nabla^2\phi = -\rho_0/\varepsilon_0$ für $z\in[-d,d]$, Rand: $\phi(\pm d)=0$.

1. Schreibe $\nabla^2\phi = \partial_{zz}\phi$ (nur z-Abhängigkeit).
2. Erste Integration:  
   $$\partial_{zz}\phi = -\frac{\rho_0}{\varepsilon_0} \Rightarrow \partial_z\phi = -\frac{\rho_0}{\varepsilon_0} z + C_1.$$
3. Zweite Integration:  
   $$\phi(z) = -\frac{\rho_0}{2\varepsilon_0} z^2 + C_1 z + C_2.$$
4. Symmetrie: Quelle und Gebiet sind gerade in $z$, daher $\phi(z)$ gerade und $\partial_z\phi$ ungerade $\Rightarrow C_1=0$.
5. Randbedingung $\phi(d)=0$ gibt $0 = -\rho_0 d^2/(2\varepsilon_0) + C_2 \Rightarrow C_2 = \rho_0 d^2/(2\varepsilon_0)$.  
   **Ergebnis:**  
   $$\phi(z) = \frac{\rho_0}{2\varepsilon_0}(d^2 - z^2),\quad E_z = -\partial_z\phi = \frac{\rho_0}{\varepsilon_0} z.$$  
   Parabel für $\phi$, lineares Feld.

**B) 1D-Laplace zwischen Platten (Dirichlet)**  
Problem: $\nabla^2\phi=0$ auf $z\in[0,d]$, $\phi(0)=V_0$, $\phi(d)=0$.

1. $\partial_{zz}\phi = 0$.
2. Erste Integration: $\partial_z\phi = C_1$.
3. Zweite Integration: $\phi(z) = C_1 z + C_2$.
4. Rand $\phi(0)=V_0 \Rightarrow C_2=V_0$. Rand $\phi(d)=0 \Rightarrow 0 = C_1 d + V_0 \Rightarrow C_1 = -V_0/d$.  
   **Ergebnis:**  
   $$\phi(z)=V_0\left(1-\frac{z}{d}\right),\quad E_z = -\partial_z\phi = \frac{V_0}{d}.$$  
   Linearer Verlauf, konstantes Feld.

**C) Zylindersymmetrie, quellenfreier Raum (Coax, Dirichlet an $r=a,b$)**  
Problem: $\nabla^2\phi=0$ für $a<r<b$, keine $\varphi,z$-Abhängigkeit.

1. Laplace in Zylinderkoordinaten (nur $r$): $\dfrac{1}{r}\partial_r(r\partial_r\phi)=0$.
2. Multipliziere mit $r$: $\partial_r(r\partial_r\phi)=0$.
3. Integriere in $r$: $r\partial_r\phi = C_1$.
4. Teile durch $r$: $\partial_r\phi = C_1 / r$.
5. Integriere erneut: $\phi(r) = C_1 \ln r + C_2$.
6. Randwerte: $\phi(a)=V_a$, $\phi(b)=V_b$.
   - Aus $\phi(a)$: $V_a = C_1 \ln a + C_2$.
   - Aus $\phi(b)$: $V_b = C_1 \ln b + C_2$.
   - Subtrahiere: $V_a - V_b = C_1 (\ln a - \ln b) = C_1 \ln(a/b)$ $\Rightarrow$ $C_1 = \dfrac{V_a - V_b}{\ln(a/b)}$.
   - Setze in $V_a$: $C_2 = V_a - C_1 \ln a$.  
     **Ergebnis (kompakt):**  
     $$\phi(r) = V_a + (V_b - V_a)\frac{\ln(r/a)}{\ln(b/a)},\quad E_r = -\partial_r\phi = -\frac{V_b - V_a}{\ln(b/a)}\frac{1}{r}.$$  
     Die Ableitung zeigt das $1/r$-Profil für den Zylinderkondensator.

**D) Kugelsymmetrie, quellenfreier Zwischenraum (Dirichlet an $r=R_1,R_2$)**  
Problem: $\nabla^2\phi=0$ für $R_1<r<R_2$, keine Winkelabhängigkeit.

1.  Laplace radial: $\dfrac{1}{r^2}\partial_r\big(r^2 \partial_r\phi\big)=0$.
2.  Multipliziere mit $r^2$: $\partial_r\big(r^2 \partial_r\phi\big)=0$.
3.  Integriere: $r^2 \partial_r\phi = C_1$.
4.  Teile durch $r^2$: $\partial_r\phi = C_1 / r^2$.
5.  Integriere: $\phi(r) = -C_1 / r + C_2$ (umbenenne $B=-C_1$, $A=C_2$).  
    → Standardform: $\phi(r) = A + B/r$.
6.  Randwerte $\phi(R_1)=V_1$, $\phi(R_2)=V_2$:

    - $V_1 = A + B/R_1$, $V_2 = A + B/R_2$.
    - Subtrahiere: $V_1 - V_2 = B (1/R_1 - 1/R_2) = B (R_2 - R_1)/(R_1 R_2)$.
    - Daraus: $B = \dfrac{(V_1 - V_2) R_1 R_2}{R_2 - R_1}$.
    - Dann: $A = V_1 - B/R_1$.

    **Ergebnis:**  
    $$\phi(r) = A + \frac{B}{r},\quad E_r = -\partial_r\phi = \frac{B}{r^2}.$$  
    Grenzfall $R_2\to\infty$, $V_2=0$ liefert $\phi(r)=V_1 R_1/r$ (wie Punktladung außerhalb des Gebiets).

---

## Übungen (WS 25/26)

- HA 1 über Gauß-Flächen, Basis-Poisson/Laplace und Kondensator-Formeln.
- HA 8 für Randwert-Mix (Dirichlet/Neumann) und Materialeinsatz; siehe auch [[Randwertprobleme (Elektrostatik)]].
- HA 9, Aufg. 27 (Helmholtz/Gauges) zur Verbindung Feld-/Potentialdarstellung.
