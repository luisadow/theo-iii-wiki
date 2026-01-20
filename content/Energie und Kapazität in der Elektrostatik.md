---
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

# Energie und Kapazität in der Elektrostatik

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

- $C_{ii} > 0$ (Selbstkapazitäten), $C_{ij} = C_{ji} < 0$ für $i \ne j$.
- Ladungserhaltung ⇒ $\sum_j C_{ij} = 0$.

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
- Spezial: Luft/Vakuum $\varepsilon_r=1$; dünnwandig $b\to a$: $C \approx 2\pi \varepsilon L/(b-a)$.
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

- **Tafelbilder**: `V4` Energie & Kapazitäten · `V5` Spannungs­tensor · `V6` Randwertprobleme
- **Literatur**: Griffiths Kap. 2–3 · Jackson Kap. 2 · MIT OCW 8.07 (Electrostatic Energy & Dielectrics)

---

## 8. Ergänzungen

### 8.1 Beispiel: Maxwell-Spannungstensor (Plattenkondensator)

- Feld: $E=\sigma/\varepsilon_0$ außerhalb Dielektrika, Druck auf Platte $p = \sigma^2/(2\varepsilon_0)$.
- Kraft auf Fläche $A$: $F = pA$; identisch mit Energieänderung $\Delta W = -F \Delta x$ beim Plattenabstand.
- Verbindung: siehe [[Maxwell-Spannungstensor (Elektrostatik)#7.1 Druck auf dielektrische Grenzfläche]].

### 8.2 Entelektrisierung / Relaxation

- Relaxationszeit $\tau = \varepsilon/\sigma$; Beispiel Kugel in [[Dielektrika (Elektrostatik)#10.2 Numerische Entelektrisierung (Skizze)]].
- Energieabfall: $W(t)=W_0 e^{-2t/\tau}$ (da $Q^2$ skaliert); konsistent zu $\dot{W}=-\int \mathbf{J}\cdot\mathbf{E}\, d^3r$.

### 8.3 Übungen (Energie/Kapazität)

- [[20_Exercises/HA1/HA1 - Loesung]] (Grundlagen, Kugel/Platte), [[20_Exercises/HA8/HA8.md]] (gemischte RB), [[20_Exercises/HA9/Aufgabe27_Loesung]] (Helmholtz/Energiefluss).

### 8.4 Bezug zum Lernplan (Woche 7)

- Siehe [[90_Resources/Lernplan TheoIII 2-Wochen#Checkliste (laufend)]]; relevante Punkte: Kapazitäten (Zylinder/Kugel), Poynting/Energiefluss, Gauges.

---

## 9. Backlinks & To-Dos

### Backlinks

- [[Elektrostatik]] · [[Elektrostatik - Lernseite (Grundlagen)]]
- [[Dielektrika (Elektrostatik)]] · [[Elektrostatik in Materie]]

### Offene Aufgaben

- [x] Beispiel „Maxwell-Spannungstensor“ mit konkreter Kraftberechnung ergänzt (siehe Abschnitt 9.1).
- [x] Entelektrisierung/Relaxation skizziert (Abschnitt 9.2) mit Verweis auf [[Dielektrika (Elektrostatik)]] und [[Elektrostatik in Materie]].
- [x] Übungen in `20_Exercises` eingebunden (Abschnitt 9.3).
- [x] Bezug zum [[Lernplan]] (Woche 7) hergestellt.

---

_Nutze diese Seite als Referenz, um Energie- und Kapazitätsberechnungen effizient zu strukturieren. Ergänze weitere Beispiele oder Skizzen direkt hier, sobald sie in Vorlesung oder Übungen behandelt wurden._
