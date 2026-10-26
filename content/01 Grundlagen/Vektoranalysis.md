---
description: "Vektoranalysis für Theo III: Gradient, Divergenz, Rotation, Laplace in Kugel- und Zylinderkoordinaten, Gauß und Stokes."
title: "Vektoranalysis – Toolbox für Theo III"
aliases:
  - VA-Toolbox
date: "2025-11-25"
tags:
  - theo-iii
  - vektoranalysis
  - werkzeuge
---

Kompakte Referenz für Operatoren, Koordinatensysteme, Integralsätze und Identitäten, abgestimmt auf [[Elektrostatik]] und [[Energie und Kapazität in der Elektrostatik]]. Nutze die Abschnitte als Spickzettel und verlinke sie aus thematischen Notizen.

---

## 1. Grundlegende Operatoren (kartesisch)

| Operator                                    | Definition                                                                               | Geometrische Bedeutung             |
| ------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------- |
| **Gradient** $\nabla f$                     | $\nabla f = \partial_x f\,\hat{e}_x + \partial_y f\,\hat{e}_y + \partial_z f\,\hat{e}_z$ | Richtung maximaler Zunahme von $f$ |
| **Divergenz** $\nabla \cdot \vec{F}$        | $\nabla \cdot \vec{F} = \partial_x F_x + \partial_y F_y + \partial_z F_z$                | Quellen-/Senkenmaß von $\vec{F}$   |
| **Rotation (Curl)** $\nabla \times \vec{F}$ | Determinante mit $(\hat{e}_i, \partial_i, F_i)$                                          | Wirbelstärke (lokale Rotation)     |
| **Laplacian** $\nabla^2 f$                  | $\nabla^2 f = \partial_x^2 f + \partial_y^2 f + \partial_z^2 f$                          | Divergenz des Gradienten           |

Siehe [[Elektrostatik - Lernseite (Grundlagen)]] für Anwendungen auf Felder und Potenziale.

---

## 2. Differentialoperatoren in häufigen Koordinaten

### 2.1 Zylinderkoordinaten $(\rho, \varphi, z)$

- Gradient:  
  $$\nabla f = \partial_\rho f\,\hat{e}_\rho + \frac{1}{\rho}\partial_\varphi f\,\hat{e}_\varphi + \partial_z f\,\hat{e}_z$$
- Divergenz:  
  $$\nabla \cdot \vec{F} = \frac{1}{\rho}\partial_\rho(\rho F_\rho) + \frac{1}{\rho}\partial_\varphi F_\varphi + \partial_z F_z$$
- Rotation:  
  $$(\nabla \times \vec{F})_\rho = \frac{1}{\rho}\partial_\varphi F_z - \partial_z F_\varphi$$
  $$(\nabla \times \vec{F})_\varphi = \partial_z F_\rho - \partial_\rho F_z$$
  $$(\nabla \times \vec{F})_z = \frac{1}{\rho}\partial_\rho(\rho F_\varphi) - \frac{1}{\rho}\partial_\varphi F_\rho$$
- Laplace-Operator:  
  $$\nabla^2 f = \frac{1}{\rho}\partial_\rho(\rho\,\partial_\rho f) + \frac{1}{\rho^2}\partial_\varphi^2 f + \partial_z^2 f$$

### 2.2 Kugelkoordinaten $(r, \theta, \phi)$

- Gradient:  
  $$\nabla f = \partial_r f\,\hat{e}_r + \frac{1}{r}\partial_\theta f\,\hat{e}_\theta + \frac{1}{r\sin\theta}\partial_\phi f\,\hat{e}_\phi$$
- Divergenz:  
  $$\nabla \cdot \vec{F} = \frac{1}{r^2}\partial_r(r^2 F_r) + \frac{1}{r\sin\theta}\partial_\theta(\sin\theta\,F_\theta) + \frac{1}{r\sin\theta}\partial_\phi F_\phi$$
- Laplace-Operator (Skalar):  
  $$\nabla^2 f = \frac{1}{r^2}\partial_r(r^2 \partial_r f) + \frac{1}{r^2\sin\theta}\partial_\theta(\sin\theta\,\partial_\theta f) + \frac{1}{r^2\sin^2\theta}\partial_\phi^2 f$$

Diese Formen sind essenziell für [[Randwertprobleme (Elektrostatik)]] und [[Multipolentwicklung (Elektrostatik)]].

### 2.3 Radialer Fall: Ableitung von $1/R$ und Laplace auf $f(r)$

Fast jede Rechnung der Elektrostatik hängt an einem einzigen Abstand $R = \lvert\mathbf r-\mathbf r'\rvert$. Zwei Ableitungen davon braucht man immer wieder – und beide folgen aus einer einzigen Kettenregel.

#### Der Baustein $\partial_i R = x_i/R$

Mit $\mathbf r = (x,y,z)$, $\mathbf r' = (x',y',z')$ und $R = \sqrt{(x-x')^2+(y-y')^2+(z-z')^2}$:

$$
\frac{\partial R}{\partial x} = \frac{1}{2\sqrt{\dots}}\cdot 2(x-x') = \frac{x-x'}{R}.
$$

Allgemein, für jede Koordinate $i$:

$$
\frac{\partial R}{\partial x_i} = \frac{x_i - x_i'}{R}, \qquad\text{bzw.}\qquad \nabla_{\mathbf r} R = \frac{\mathbf r-\mathbf r'}{R} = \hat{\mathbf R}.
$$

> [!tip] Merke
> Ableitung des Abstands nach einer Koordinate ergibt **die Koordinatendifferenz geteilt durch den Abstand**. Mehr steckt nicht dahinter – die Wurzel fällt weg, weil sie sich gegen den Faktor $2$ aus der Quadratregel kürzt. Damit ist jede weitere Ableitung von $1/R$, $R^n$ oder $\ln R$ reine Kettenregel.

#### Gradient von $1/R$

Beide Faktoren der Kettenregel zusammengesetzt ($\frac{\partial}{\partial x}R^{-1} = -R^{-2}\partial_x R$):

$$
\nabla_{\mathbf r}\,\frac{1}{\lvert\mathbf r-\mathbf r'\rvert} = -\frac{\mathbf r-\mathbf r'}{\lvert\mathbf r-\mathbf r'\rvert^{3}} = -\frac{\hat{\mathbf R}}{R^{2}}.
$$

Im Zähler steht der volle Abstandsvektor, nicht der Einheitsvektor – deshalb die $3$ im Nenner, die sich gegen den Betrag im Zähler wegkürzt:

$$
\frac{\mathbf r-\mathbf r'}{\lvert\mathbf r-\mathbf r'\rvert^{3}} = \frac{\hat{\mathbf R}}{R^{2}}.
$$

Damit wird aus $\mathbf E = -\nabla\phi$ mit dem Coulomb-Integral sofort

$$
\mathbf E(\mathbf r) = \int \rho(\mathbf r')\,\frac{\mathbf r-\mathbf r'}{\lvert \mathbf r-\mathbf r'\rvert^{3}}\,d^3r',
$$

also genau der $1/R^2$-Abfall des Coulomb-Gesetzes.

#### Warum $\nabla$ unter das Integral darf

Im Coulomb-Integral ist $\mathbf r'$ die **Integrationsvariable** (Ort der Ladung), $\mathbf r$ der **Aufpunkt** (Ort der Messung). Der Operator $\nabla = \nabla_{\mathbf r}$ leitet nur nach $\mathbf r$ ab, $\rho(\mathbf r')$ hängt gar nicht von $\mathbf r$ ab. Da die Integrationsgrenzen fest sind, gilt

$$
\nabla_{\mathbf r}\int f(\mathbf r,\mathbf r')\,d^3r' = \int \nabla_{\mathbf r} f(\mathbf r,\mathbf r')\,d^3r',
$$

und der Nabla-Operator wirkt allein auf den Abstandsterm $1/\lvert\mathbf r-\mathbf r'\rvert$.

#### Laplace auf radialsymmetrische Funktionen

Für $f = f(r)$ (nur vom Abstand von der $z$-Achse bzw. vom Ursprung abhängig) fallen die Winkelterme weg. Aus dem Kugel-Laplace-Operator oben folgt mit der Produktregel

$$
\nabla^2 f(r) = \frac{1}{r^2}\partial_r\left(r^2 f'(r)\right) = f''(r) + \frac{2}{r}f'(r).
$$

Das $2/r$ ist kein Zufall, sondern die **logarithmische Ableitung der Kugeloberfläche** $4\pi r^2$: Ein konstantes radiales Feld hat schon Divergenz $2/r$, weil durch die größere Kugelschale hinten mehr Fluss austritt als vorne eintritt. Kurzform zum Nachrechnen:

$$
\nabla^2 f(r) = \frac{1}{r}\frac{d^2}{dr^2}\bigl(r f(r)\bigr).
$$

Für $f = 1/r$ ergibt beides $0$:

$$
\nabla^2 \frac{1}{r} = \frac{2}{r^3} - \frac{2}{r}\cdot\frac{1}{r^2} = 0 \qquad (r \neq 0),
$$

und erst das Flussintegral über eine $\varepsilon$-Kugel liefert den Anteil im Ursprung (siehe [[Green-Funktionen (Elektrostatik)]]).

| Dimension | $\nabla^2 f$ für $f = f(r)$ | Fundamentallösung von $\nabla^2 f = 0$ |
| --- | --- | --- |
| 1D | $f''$ | $\lvert x\rvert$ |
| 2D | $f'' + \frac{1}{r}f'$ | $\ln r$ |
| 3D | $f'' + \frac{2}{r}f'$ | $1/r$ |

> [!info] Gauß-System
> Die Identität $\nabla^2\frac{1}{r} = -4\pi\delta(\mathbf r)$ ist reine Mathematik und gilt in jedem Einheitensystem. Unterschiedlich ist nur, welche Green-Funktion man darauf aufbaut: SI definiert $G_0 = \frac{1}{4\pi\lvert\mathbf r-\mathbf r'\rvert}$ mit $\nabla^2G_0 = -\delta$, das Gauß-System $G = -\frac{1}{4\pi\lvert\mathbf r-\mathbf r'\rvert}$ mit $\Delta G = +\delta$ – passend zu $\Delta\phi = -4\pi\rho$ statt $\nabla^2\phi = -\rho/\varepsilon_0$. Die Vorlesung im WiSe 26/27 rechnet im Gauß-System; die Vorzeichen von $G$ und $\rho$-Term gehören darum immer paarweise zusammen.

---

## 3. Integralsätze & Volumenelemente

| Satz                     | Formulierung                                                                                              | Anwendung                        |
| ------------------------ | --------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **Divergenzsatz (Gauß)** | $\displaystyle \int_V \nabla \cdot \vec{F}\,dV = \oint_{\partial V} \vec{F} \cdot d\vec{A}$               | Ladungsbilanz, Flussberechnungen |
| **Stokes**               | $\displaystyle \int_A (\nabla \times \vec{F}) \cdot d\vec{A} = \oint_{\partial A} \vec{F} \cdot d\vec{r}$ | Wirbel, Induktionsgesetz         |
| **Gradientensatz**       | $\displaystyle \int_\gamma \nabla f \cdot d\vec{r} = f(B) - f(A)$                                         | Potentialdifferenzen             |

![[integralsaetze.svg|Links der Satz von Gauß: Die Quellen in V zeigen sich als Nettofluss durch die geschlossene Fläche ∂V, dA zeigt nach außen. Rechts der Satz von Stokes: Die Wirbel auf der Fläche A ergeben die Zirkulation längs der Randkurve ∂A. Der Umlaufsinn passt nach der Rechte-Hand-Regel zu dA.]]

Volumenelemente:

- Kartesisch: $dV = dx\,dy\,dz$
- Zylindrisch: $dV = \rho\,d\rho\,d\varphi\,dz$
- Kugel: $dV = r^2\sin\theta\,dr\,d\theta\,d\phi$

---

## 4. Operatoridentitäten (häufig genutzt)

1. $\nabla \cdot (\nabla \times \vec{F}) = 0$
2. $\nabla \times (\nabla f) = 0$
3. $\nabla \times (\nabla \times \vec{F}) = \nabla(\nabla \cdot \vec{F}) - \nabla^2 \vec{F}$
4. Produktregeln:
   - $\nabla \cdot (f\vec{F}) = (\nabla f) \cdot \vec{F} + f\,(\nabla \cdot \vec{F})$
   - $\nabla \times (f\vec{F}) = (\nabla f) \times \vec{F} + f\,(\nabla \times \vec{F})$

### Helmholtz-Theorem (Kurzverweis)

Siehe [[Helmholtz-Zerlegung (Vektorfelder)]] für volle Projektorformeln.

Diese Identitäten tauchen in [[Elektrostatik]] (z. B. beim Ableiten der Maxwell-Gleichungen) und in [[Energie und Kapazität in der Elektrostatik]] (bei Ableitungen der Feldenergie) auf.

---

## 5. Indexnotation & Symbole

- Kronecker-Delta: $\delta_{ij}$ (Identitätstensor).
- Levi-Civita: $\varepsilon_{ijk}$; nützlich für Kreuzprodukte: $(\vec{A} \times \vec{B})_i = \varepsilon_{ijk} A_j B_k$.
- Divergenz: $\partial_i F_i$; Gradient: $\partial_i f$; Curl: $(\nabla \times \vec{F})_i = \varepsilon_{ijk} \partial_j F_k$.

Nutze diese Schreibweisen, wenn du Gleichungen aus Lehrbüchern wie Jackson nachvollziehst.

---

## 6. Verweise

- **Hauptnotizen:** [[Elektrostatik]], [[Elektrostatik - Lernseite (Grundlagen)]], [[Energie und Kapazität in der Elektrostatik]]
- **Anwendungen:** [[Randwertprobleme (Elektrostatik)]], [[Multipolentwicklung (Elektrostatik)]], [[Dielektrika (Elektrostatik)]]
- **Spezialisierte Guides:** [[Flächen- und Volumenelemente – Leitfaden]], [[Induktivität und magnetische Energie]], [[Magnetostatik - Grundgleichungen]]

---

### Schneller Einsatz

- Immer erst Koordinatensystem fixieren; dann passenden Laplace-/Divergenz-/Curl-Operator aus der Tabelle nehmen.
- Für elektrostatische Aufgaben: $\nabla^2 \phi = -\rho/\varepsilon_0$ notieren, um Rechenweg zu verankern.
- Für magnetostatische Ströme: $\nabla\times\mathbf{B}=\mu_0\mathbf{J}$, $\nabla\cdot\mathbf{B}=0$ als Minimal-Check.
