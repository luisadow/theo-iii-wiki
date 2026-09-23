---
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

---

## 3. Integralsätze & Volumenelemente

| Satz                     | Formulierung                                                                                              | Anwendung                        |
| ------------------------ | --------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **Divergenzsatz (Gauß)** | $\displaystyle \int_V \nabla \cdot \vec{F}\,dV = \oint_{\partial V} \vec{F} \cdot d\vec{A}$               | Ladungsbilanz, Flussberechnungen |
| **Stokes**               | $\displaystyle \int_A (\nabla \times \vec{F}) \cdot d\vec{A} = \oint_{\partial A} \vec{F} \cdot d\vec{r}$ | Wirbel, Induktionsgesetz         |
| **Gradientensatz**       | $\displaystyle \int_\gamma \nabla f \cdot d\vec{r} = f(B) - f(A)$                                         | Potentialdifferenzen             |

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
