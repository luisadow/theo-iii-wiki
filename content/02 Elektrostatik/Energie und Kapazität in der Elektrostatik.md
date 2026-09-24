---
description: "Feldenergie und Kapazität: Energiedichte, Kapazitätsmatrix, Platten-, Kugel- und Zylinderkondensator, Dielektrika."
title: "Energie und Kapazität in der Elektrostatik"
aliases:
  - Energie und Kapazität
  - Elektrostatik Energie
date: "2025-11-25"
tags:
  - theo-iii
  - elektrostatik
  - energie
  - kapazitaet
---

Diese Seite bündelt Formeln, Beispiele und Strategien rund um Feldenergie, Kapazitäten und gekoppelte Leiter. Sie ergänzt [[Elektrostatik - Lernseite (Grundlagen)]] und verweist auf weiterführende Themen wie [[Maxwell-Spannungstensor (Elektrostatik)]], [[Randwertprobleme (Elektrostatik)|Randwertprobleme]] sowie Materialeffekte in [[Dielektrika (Elektrostatik)]] und [[Elektrostatik in Materie]].

---

## 1. Feldenergie und Energiedichte

### Energiedichte

$$
u(\mathbf{r}) = \frac{\varepsilon_0}{2}\,\lvert \mathbf{E}(\mathbf{r}) \rvert^2
$$

### Gesamtenergie im Volumen $V$

$$
W = \int_V u(\mathbf{r})\, d^3 r
  = \frac{\varepsilon_0}{2} \int_V \lvert \mathbf{E} \rvert^2\, d^3 r
$$

### Potentialdarstellung

$$
W = \frac{1}{2} \int_V \rho(\mathbf{r})\, \phi(\mathbf{r})\, d^3 r
$$

> Wähle die für das Problem passendere Form (Feldintegral vs. Potentialform).

---

## 2. Kapazität einzelner Leiter

### Definition

$$
C = \frac{Q}{\Phi}
$$

### Energie eines Kondensators

$$
W = \frac{Q^2}{2C} = \frac{1}{2} C \Phi^2
$$

---

## 3. Kapazitätsmatrix (Mehrleitersysteme)

Für $N$ Leiter mit Potentialen $\phi_i$ und Ladungen $Q_i$:

$$
Q_i = \sum_{j=1}^{N} C_{ij}\, \phi_j
$$

- $C_{ii} > 0$ (Selbstkapazitäten), $C_{ij} = C_{ji} \le 0$ für $i \ne j$ (Influenzkoeffizienten).
- $\sum_j C_{ij} \ge 0$; Gleichheit nur, wenn kein Feld nach $\infty$ entweicht (z. B. ein Leiter umschließt alle anderen vollständig).

### Matrixform

$$
\mathbf{Q} = \mathbf{C}\,\boldsymbol{\phi}
$$

### Energie

$$
W = \frac{1}{2}\, \boldsymbol{\phi}^\top \mathbf{C}\, \boldsymbol{\phi}
    = \frac{1}{2}\, \mathbf{Q}^\top \mathbf{C}^{-1} \mathbf{Q}
$$

**Bestimmung von $C_{ij}$**

1. Leiter $j$ auf $1\,\text{V}$, alle anderen auf $0\,\text{V}$.
2. Poisson-/Laplace-Gleichung lösen (siehe [[Randwertprobleme (Elektrostatik)]] bzw. [[Spiegelmethode (Elektrostatik)]]).
3. Induzierte Ladungen $Q_i$ über Flussintegrale bestimmen.
4. Für jeden Leiter wiederholen → Spalten von $\mathbf{C}$.

---

## 4. Beispiele

### 4.1 Isolierte Kugel

- Radius $R$, Ladung $Q$, Referenz $\phi(\infty)=0$
- Kapazität: $C = 4\pi \varepsilon_0 R$ (siehe [[Kugelkondensator]] für Doppelschale)

$$
W = \frac{\varepsilon_0}{2} \int_R^\infty
    \left( \frac{Q}{4\pi\varepsilon_0 r^2} \right)^2 \! 4\pi r^2\, dr
  = \frac{Q^2}{8\pi \varepsilon_0 R}
  = \frac{Q^2}{2C}
$$

### 4.2 Plattenkondensator (Vakuum)

- Fläche $A$, Abstand $d$, $\sigma = Q/A$

$$
C = \frac{\varepsilon_0 A}{d},
\qquad
u = \frac{1}{2} \varepsilon_0 E^2,
\qquad
W = \frac{1}{2} C \Phi^2 = \frac{1}{2} \frac{\varepsilon_0 A}{d} (E d)^2
$$

### 4.3 Koaxialkondensator (Kapazitätsmatrix)

- Innenradius $a$, Außenradius $b$, Länge $L$

Pro Längeneinheit; der Außenleiter schirmt ab, seine Kapazität gegen $\infty$ wird vernachlässigt ($\Phi$ = Spannung zwischen den Leitern):

$$
C' = \frac{2\pi \varepsilon_0}{\ln(b/a)}, \qquad
\mathbf{C} = C'
\begin{pmatrix}
 1 & -1 \\
-1 &  1
\end{pmatrix},
\qquad
W' = \frac{1}{2} C' \Phi^2
$$

### 4.4 Zylinderkondensator (einfach)
- Innenradius $a$, Außenradius $b$, Länge $L$, homogenes Medium $\varepsilon = \varepsilon_0 \varepsilon_r$.
- Feld (Gauss):
$$
E(r)=\frac{\lambda}{2\pi \varepsilon r}, \quad a<r<b.
$$
- Potential (Bezug $\phi(b)=0$):
$$
\phi(r)=\frac{\lambda}{2\pi \varepsilon}\ln\frac{b}{r}.
$$
- Spannung und Kapazität:
$$
V=\frac{\lambda}{2\pi \varepsilon}\ln\frac{b}{a},\quad
C = \frac{2\pi \varepsilon L}{\ln(b/a)}.
$$
- Spezial: Luft/Vakuum $\varepsilon_r=1$; dünnwandig $b\to a$: $C \approx 2\pi \varepsilon a L/(b-a)$ (wegen $\ln(b/a)\approx (b-a)/a$; entspricht $\varepsilon A/d$ mit $A=2\pi aL$).
- Ausführliche Herleitung: [[Zylinderkondensator]].

### 4.5 Kugelkondensator
- Radien $R_1<R_2$, homogenes Medium $\varepsilon = \varepsilon_0 \varepsilon_r$.
- Potential (Bezug $\phi(R_2)=0$):
$$
\phi(r)=\frac{Q}{4\pi \varepsilon}\Bigl(\frac{1}{r}-\frac{1}{R_2}\Bigr),\quad R_1<r<R_2.
$$
- Spannung und Kapazität:
$$
V = \frac{Q}{4\pi \varepsilon}\Bigl(\frac{1}{R_1}-\frac{1}{R_2}\Bigr),\quad
C = \frac{4\pi \varepsilon}{\frac{1}{R_1}-\frac{1}{R_2}}.
$$
- Spezial: isolierte Kugel ($R_2\to\infty$): $C=4\pi \varepsilon R_1$; dünne Schale $R_2\to R_1$: $C\approx 4\pi \varepsilon R_1^2/(R_2-R_1)$.
- Ausführliche Herleitung: [[Kugelkondensator]].

---

## 5. Dielektrika & effektive Kapazitäten

### 5.1 Homogene Dielektrika

$$
\varepsilon = \varepsilon_0 \varepsilon_r,
\qquad
C = \varepsilon \frac{A}{d}
$$

### 5.2 Mehrschichtsysteme

- Serie: $d_{\text{eff}} / \varepsilon_{\text{eff}} = \sum_i d_i / \varepsilon_i$
- Parallel: $\varepsilon_{\text{eff}} A_{\text{eff}} = \sum_i \varepsilon_i A_i$

### 5.3 Polarisation & Energie

$$
\mathbf{P} = \varepsilon_0 \chi_e \mathbf{E},
\qquad
\mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P} = \varepsilon \mathbf{E},
\qquad
u = \frac{1}{2} \mathbf{E} \cdot \mathbf{D}
$$

Siehe [[Dielektrika (Elektrostatik)]] und [[Elektrostatik in Materie]]; Randbedingungen in [[Randwertprobleme (Elektrostatik)]].

---

## 6. Methodische Hinweise

1. Symmetrie analysieren → geeignete Gauß-Fläche.
2. Feld/Potential lösen (Separation, Spiegel, numerisch).
3. Kapazität aus $Q/\Phi$ oder Energieformeln.
4. Matrixaufbau durch wiederholte RB-Lösungen.
5. Validierung über Grenzfälle und Energieerhaltung.

---

## 7. Ressourcen

- **Tafelbilder**: V4 Energie & Kapazitäten · V5 Spannungstensor · V6 Randwertprobleme
- **Literatur**: Griffiths Kap. 2–3 · Jackson Kap. 2 · MIT OCW 8.07 (Electrostatic Energy & Dielectrics)

---

## 8. Ergänzungen

### 8.1 Beispiel: Maxwell-Spannungstensor (Plattenkondensator)

- Feld: $E=\sigma/\varepsilon_0$ außerhalb Dielektrika, Druck auf Platte $p = \sigma^2/(2\varepsilon_0)$.
- Kraft auf Fläche $A$: $F = pA$; identisch mit Energieänderung $\Delta W = -F \Delta x$ beim Plattenabstand.
- Verbindung: siehe [[Maxwell-Spannungstensor (Elektrostatik)#9.1 Druck auf dielektrische Grenzfläche]].

### 8.2 Ladungsrelaxation in leitfähigen Medien

- Aus $\mathbf J=\sigma\mathbf E$ (hier $\sigma$ = Leitfähigkeit) und Kontinuitätsgleichung: $\partial_t\rho = -\tfrac{\sigma}{\varepsilon}\rho$, also $Q(t)=Q_0e^{-t/\tau}$ mit $\tau = \varepsilon/\sigma$.
- Energieabfall: $W(t)=W_0 e^{-2t/\tau}$ (da $W\propto Q^2$); konsistent zu $\dot{W}=-\int \mathbf{J}\cdot\mathbf{E}\, d^3r$.
- Nicht verwechseln mit der **Entelektrisierung** (Depolarisationsfeld), siehe [[Dielektrika (Elektrostatik)#5. Entelektrisierung (Depolarisationsfeld)]].

### 8.3 Übungen (WS 25/26)

- HA 1 (Grundlagen, Kugel/Platte), HA 8 (gemischte RB), HA 9, Aufg. 27 (Helmholtz/Energiefluss).
