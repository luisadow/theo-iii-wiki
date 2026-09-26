---
description: "Maxwell-Spannungstensor in der Elektrostatik: Definition, Kraft über Oberflächenintegral, Druck auf Leiter σ²/2ε₀, Beispiele und Randbedingungen."
title: "Maxwell-Spannungstensor (Elektrostatik)"
aliases:
  - Maxwell-Stress-Tensor
date: "2025-11-25"
tags:
  - theo-iii
  - elektrostatik
  - energie
  - grenzbedingungen
  - spannungstensor
---

Diese Notiz ergänzt [[Energie und Kapazität in der Elektrostatik]] um die feldtheoretische Betrachtung von Kräften und Grenzbedingungen. Sie verbindet lokale Energiedichten mit makroskopischen Resultierenden (Druck/Zug auf leitenden und dielektrischen Oberflächen).

---

## 1. Motivation & Kontext

- **Ziel:** Kräfte im Feldraum ohne explizite Ladungsverteilung berechnen.
- **Anwendung:** Drücke auf Kondensatorplatten, Kräfte zwischen Leitern, Randbedingungen an dielektrischen Interfaces.
- **Bezug:** Aus dem Stress-Tensor folgen mechanische Größen konsistent mit der Energie $W = \frac{\varepsilon_0}{2} \int |\mathbf{E}|^2\, d^3 r$ (siehe [[Energie und Kapazität in der Elektrostatik]]).

---

## 2. Definition des Maxwell-Spannungstensors

Für reine Elektrostatik (kein $\mathbf{B}$-Feld):

$$
\mathbf{T} = \varepsilon_0 \left( \mathbf{E}\mathbf{E} - \frac{1}{2} |\mathbf{E}|^2 \mathbf{I} \right)
$$

- $\mathbf{E}\mathbf{E}$: dyadisches Produkt mit Komponenten $T_{ij} = \varepsilon_0 \left( E_i E_j - \frac{1}{2} |\mathbf{E}|^2 \delta_{ij} \right)$.
- $\mathbf{I}$: Einheitsmatrix.

### Balance-Gesetz

$$
\mathbf{f} = \rho \mathbf{E} = \nabla \cdot \mathbf{T}
$$

Mit dem Divergenzsatz ergibt sich für eine geschlossene Oberfläche $\partial V$:

$$
\mathbf{F} = \int_V \rho \mathbf{E}\, dV = \oint_{\partial V} \mathbf{T} \cdot \mathbf{n}\, dA
$$

---

## 3. Kräfte auf Oberflächen (Feld-Druck)

### 3.1 Normal- und Tangentialanteile

Für eine Oberfläche mit Normalenvektor $\mathbf{n}$:

- **Normale Spannung:** $p_n = \mathbf{n} \cdot \mathbf{T} \cdot \mathbf{n} = \frac{\varepsilon_0}{2} (E_n^2 - E_t^2)$
- **Tangentialer Schub:** $\mathbf{t} = \mathbf{n} \cdot \mathbf{T} - p_n \mathbf{n} = \varepsilon_0 E_n \mathbf{E}_t$

Hierbei sind $E_n = \mathbf{E} \cdot \mathbf{n}$ und $\mathbf{E}_t = \mathbf{E} - E_n \mathbf{n}$.

![[spannungstensor-zug.svg|Die Kraft pro Fläche T·n hat den Betrag ε₀E²/2 und bildet mit n den Winkel 2θ, E halbiert also den Winkel zwischen n und T·n. Entlang der Feldlinien zieht das Feld (θ = 0), quer dazu drückt es (θ = 90°).]]

### 3.2 Druck auf leitende Flächen

Für perfekte Leiter (innen $\mathbf{E} = 0$, nur $E_n \neq 0$ außen):

$$
p_{\text{Leiter}} = \frac{\varepsilon_0}{2} E_n^2 = \frac{\sigma^2}{2 \varepsilon_0}
$$

(da $E_n = \sigma / \varepsilon_0$.)

---

## 4. Grenzbedingungen über die Tensorform

Grenzfläche zweier Medien mit Permittivitäten $\varepsilon_1, \varepsilon_2$:

1. **Normalanteil des Verschiebungsfeldes:**
   $$
   \varepsilon_1 E_{1n} - \varepsilon_2 E_{2n} = \sigma_{\text{frei}}
   $$
2. **Tangentialanteil des Feldes:**
   $$
   \mathbf{E}_{1t} = \mathbf{E}_{2t}
   $$
3. **Stress-Kontinuität:**
   $$
   \mathbf{n} \cdot (\mathbf{T}_1 - \mathbf{T}_2) = \mathbf{f}_{\text{Oberfläche}}
   $$

Dabei liefert die Differenz der Tensoren direkt die Oberflächenkraftdichte, z. B. durch freie Oberflächenladungen oder kapazitiv gekoppelte Leiter.

---

## 5. Rechenworkflow (Checkliste)

1. **Symmetrie nutzen:** wähle eine Gauß-Fläche, die das Feldprofil $\mathbf{E}$ vereinfacht.
2. **Tensor aufstellen:** berechne $T_{ij} = \varepsilon_0 (E_i E_j - \tfrac{1}{2} |\mathbf{E}|^2 \delta_{ij})$.
3. **Integrationsfläche wählen:** nutze eine Oberfläche $\partial V$, die den Raumabschnitt mit bekannter Feldlösung einschließt.
4. **Kraft/Druck berechnen:** $\mathbf{F} = \oint \mathbf{T} \cdot \mathbf{n}\, dA$ oder über die lokale Druckformel.
5. **Randbedingungen prüfen:** passen Normal- und Tangentialkomponenten zur Materialgrenze? Falls nicht, Feldlösung korrigieren.

---

## 6. Beispiele & Anwendungen

| System                        | Vorgehen                                                     | Ergebnis (skizziert)                                     |
| ----------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| Plattenkondensator            | $\mathbf{E} = \pm \sigma / \varepsilon_0\, \hat{\mathbf{n}}$ | $p = \sigma^2 / (2 \varepsilon_0)$ Druck auf jede Platte |
| Geladene Leiterkugel (Ladung $Q$, Radius $R$) | Halbkugel + Kreisscheibe als Fläche, $\mathbf T\cdot\mathbf n$ integrieren | Kraft, die die Halbkugeln auseinanderdrückt: $F = Q^2/(32\pi\varepsilon_0 R^2)$ |
| Dielektrikum zwischen Platten | Feldsprung durch unterschiedliche $\varepsilon$              | Differenz der Normalspannungen = Druck auf die Grenzfläche (Abschnitt 9.1) |

---

## 7. Ressourcen

- David J. Griffiths, _Introduction to Electrodynamics_, Kap. 2.6
- Jackson, _Classical Electrodynamics_, Kap. 1.10 & 4
- MIT OCW 8.07 Notes: „Electrostatic Energy and Pressure“

---

## 8. Verlinkungen

- **Von hier:** [[Elektrostatik]], [[Energie und Kapazität in der Elektrostatik]], [[Vektoranalysis]]
- **Siehe auch:** [[Randwertprobleme (Elektrostatik)]], [[Dielektrika (Elektrostatik)]], [[Impulsbilanz und Poynting-Vektor]] (dynamische Version)

---

## 9. Ergänzungen

### 9.1 Druck auf dielektrische Grenzfläche

- Zwei Medien $\varepsilon_1, \varepsilon_2$, Feld nur normal: $p = \tfrac{1}{2}(\varepsilon_1 E_{1n}^2 - \varepsilon_2 E_{2n}^2)$.
- In Bezug auf Sprung im Verschiebungsfeld: $p = \tfrac{1}{2\varepsilon_0}(D_{1n}^2/\varepsilon_{r1} - D_{2n}^2/\varepsilon_{r2})$.
- Für Plattenkondensator mit Dielektrikum: stimmt mit Energiedifferenz $\Delta W = -pA\,\Delta x$ überein.

### 9.2 Bezug zu Dielektrika

- Siehe [[Dielektrika (Elektrostatik)#10.1 Teilweise Einschiebung eines Dielektrikums]] für Kraftformel; dortige Kraft $F$ erfüllt $F = \oint \mathbf{T}\cdot\mathbf{n}\, dA$ mit $\mathbf{T}$ dieser Notiz.

### 9.4 Herleitung per Energievariation

- Variation von $W=\tfrac{\varepsilon_0}{2}\int |\mathbf{E}|^2 d^3r$ unter Verschiebung $\delta \mathbf{r}$ der Oberfläche liefert $\delta W = -\oint (\mathbf{T}\cdot\mathbf{n})\cdot \delta \mathbf{r}\, dA$.
- Damit ist $\mathbf{f}_{\text{Oberfläche}} = \mathbf{n}\cdot \mathbf{T}$ konsistent zu Feldkräften $\rho \mathbf{E}$.
