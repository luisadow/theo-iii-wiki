---
description: "Multipolentwicklung einfach erklärt: Monopol, Dipol, Quadrupol, Legendre-Polynome und Kugelflächenfunktionen, Dipol im äußeren Feld."
title: "Multipolentwicklung in der Elektrostatik"
aliases:
  - Multipolentwicklung Elektrostatik
date: "2025-11-25"
tags:
  - theo-iii
  - elektrostatik
  - multipole
  - methode
---

Diese Notiz fasst die Entwicklung des elektrischen Potentials in Multipolbeiträge zusammen. Sie ergänzt [[Elektrostatik - Lernseite (Grundlagen)]], [[Randwertprobleme (Elektrostatik)]] und [[Energie und Kapazität in der Elektrostatik]] und dient als Referenz, wenn weit entfernte Felder komplexer Ladungsverteilungen approximiert werden.

---

## 1. Motivation & Kontext

- **Ziel:** Potenzial/Feld einer lokalen Ladungsverteilung für große Abstände in eine Serie von Monopol-, Dipol-, Quadrupol- … Termen zerlegen.
- **Anwendung:** Näherungen für Moleküle, verschobene Leiter, Fernfeldbedingungen bei Randwertproblemen.
- **Gültigkeit:** Für $r = |\mathbf{r}|$ deutlich größer als der charakteristische Quellbereich $r'$ (d. h. $r \gg r'$).

---

## 2. Allgemeiner Ansatz

Für eine kompakte Ladungsverteilung $\rho(\mathbf{r}')$ im Volumen $V$ gilt

$$
\phi(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \int_V \frac{\rho(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\, d^3 r'.
$$

Der Kehrwert lässt sich via Laplace-Entwicklung ausdrücken:

$$
\frac{1}{|\mathbf{r} - \mathbf{r}'|} = \sum_{\ell=0}^{\infty} \frac{r'^{\,\ell}}{r^{\ell+1}} P_\ell(\cos\gamma) \quad (r > r'),
$$

wobei $P_\ell$ Legendre-Polynome und $\gamma$ der Winkel zwischen $\mathbf{r}$ und $\mathbf{r}'$ ist.

---

## 3. Multipolmomente

### 3.1 Monopol (Gesamtladung)

$$
Q = \int_V \rho(\mathbf{r}')\, d^3 r', \qquad
\phi_0(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \frac{Q}{r}.
$$

### 3.2 Dipolmoment

$$
\mathbf{p} = \int_V \rho(\mathbf{r}')\, \mathbf{r}'\, d^3 r'
$$

mit Feld-/Potentialbeitrag

$$
\phi_1(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \frac{\mathbf{p} \cdot \hat{\mathbf{r}}}{r^2}, \qquad
\mathbf{E}_1(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \left[\frac{3(\mathbf{p} \cdot \hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{p}}{r^3}\right].
$$

### 3.3 Quadrupolmoment (trazefrei)

$$
Q_{ij} = \int_V \rho(\mathbf{r}') \left(3 x'_i x'_j - r'^2 \delta_{ij}\right)\, d^3 r', \qquad
\phi_2(\mathbf{r}) = \frac{1}{8\pi\varepsilon_0} \frac{Q_{ij}\, \hat{r}_i \hat{r}_j}{r^3}.
$$

Einstein-Summenkonvention gilt für wiederholte Indizes.

### 3.4 Höhere Ordnung

Allgemein: $\phi_\ell(\mathbf{r}) \propto r^{-(\ell+1)} M_\ell(\hat{\mathbf{r}})$ mit $M_\ell$ als Satz von $(2\ell+1)$ unabhängigen Momenten. Kugelflächenfunktionen $Y_{\ell m}$ liefern eine kompakte Darstellung.

---

## 4. Kugelflächenentwicklung

Alternative Darstellung mit Kugelflächenfunktionen:

$$
\phi(\mathbf{r}) = \frac{1}{\varepsilon_0}
\sum_{\ell=0}^{\infty} \sum_{m=-\ell}^{\ell}
\frac{1}{2\ell+1}\,\frac{Q_{\ell m}}{r^{\ell+1}}\, Y_{\ell m}(\theta,\phi),
$$

(der Faktor $4\pi/(2\ell+1)$ stammt aus dem Additionstheorem $P_\ell(\cos\gamma)=\tfrac{4\pi}{2\ell+1}\sum_m Y^*_{\ell m}(\theta',\phi')Y_{\ell m}(\theta,\phi)$), wobei

$$
Q_{\ell m} = \int_V \rho(\mathbf{r}')\, r'^{\,\ell}\, Y_{\ell m}^*(\theta',\phi')\, d^3 r'.
$$

Diese Form ist ideal für Kugelsymmetrie oder Molekülmomente und knüpft direkt an [[Randwertprobleme (Elektrostatik)]] an.

---

## 5. Praktische Vorgehensweise

1. **Koordinatenwahl:** Ursprung meist im Schwerpunkt oder Symmetriezentrum setzen.
2. **Momente bestimmen:** Monopol, Dipol, Quadrupol … berechnen; bei symmetrischen Verteilungen fallen viele Terme weg.
3. **Dominante Ordnung wählen:** Abbruch nach gewünschter Genauigkeit; Beiträge fallen mit $r^{-(\ell+1)}$.
4. **Validierung:**
   - Grenzfälle prüfen (z. B. große Abstände, Nullmomente).
   - Vergleich mit numerischen Lösungen.
   - Energiecheck über $W = \tfrac{1}{2} \int \rho \phi\, d^3 r$ (siehe [[Energie und Kapazität in der Elektrostatik]]).

---

## 6. Beispiele & Anwendungen

| System                      | Relevante Momente                         | Hinweise                                |
| --------------------------- | ----------------------------------------- | --------------------------------------- |
| Punktladung                 | Monopol                                   | Alle höheren Momente verschwinden       |
| Dipol (±Q mit Abstand $d$)  | Dipolmoment $\mathbf{p} = Q\, \mathbf{d}$ | Ursprung in der Mitte: Quadrupol verschwindet, nächster Term Oktupol |
| Homogen geladener Stab (Mitte im Ursprung) | Monopol + Quadrupol       | Dipol verschwindet aus Symmetrie        |
| Wasser-Molekül              | Monopol $=0$, Dipol + Quadrupol           | Grundlage polarer Medien                |

Merke: Das führende nichtverschwindende Moment ist unabhängig von der Wahl des Ursprungs; höhere Momente hängen davon ab (z. B. $\mathbf p$ nur, wenn $Q=0$).

---

## 7. Verbindung zu Randwertmethoden

- **Außenprobleme:** Multipole approximieren das Fernfeld ohne vollständige Separation der Variablen.
- **Innenprobleme:** Fourier-/Legendre-Reihen teilen denselben mathematischen Kern; Multipolkoeffizienten spiegeln Randwerte.
- **Spiegelmethode:** Lässt sich als Multipolproblem interpretieren, da Bildladungen die benötigten Koeffizienten vorgeben.

---

## 8. Ressourcen & Verweise

- Literatur: Griffiths Kap. 3.2–3.4, Jackson Kap. 3, MIT OCW 8.07 „Multipole Expansion“.
- Verknüpfungen: [[Elektrostatik]], [[Randwertprobleme (Elektrostatik)]], [[Vektoranalysis]], [[Maxwell-Spannungstensor (Elektrostatik)]].
- Backlink: [[Elektrostatik]] (Hub)

---

## 9. Ergänzungen & Beispiele

### 9.1 Dipol im äußeren Feld

- Dipolmoment $\mathbf{p}$ im homogenen Feld $\mathbf{E}_0$:
  - Energie: $W = -\mathbf{p}\cdot\mathbf{E}_0$.
  - Kraft: im homogenen Feld $\mathbf F = 0$; im inhomogenen Feld $\mathbf{F} = (\mathbf{p}\cdot\nabla) \mathbf{E}$.
  - Drehmoment: $\boldsymbol{\tau} = \mathbf{p} \times \mathbf{E}_0$.
- In Kugelkoordinaten: Multipolkoeffizient $A_1 = p/(4\pi\varepsilon_0)$, höhere Terme fallen für ideales Dipolmodell weg.

### 9.2 Green-Funktionen Link

- Siehe [[Green-Funktionen (Elektrostatik)]] für $G$ und Ableitung der Legendre-Reihen; Multipolkoeffizienten folgen aus der Projektion $\phi(r,\theta)=\sum A_\ell r^{-(\ell+1)}P_\ell(\cos\theta)$.

### 9.4 Kräfte via Stress-Tensor

- Für Feld $\mathbf{E}$ eines Multipols: $\mathbf{T} = \varepsilon_0(\mathbf{E}\mathbf{E}-\tfrac{1}{2}|\mathbf{E}|^2\mathbf{I})$.
- Kraft auf Teilvolumen $V$: $\mathbf{F} = \oint_{\partial V} \mathbf{T}\cdot \mathbf{n}\, dA$; für Dipol im homogenen Feld verschwindet resultierende Kraft, nur Torque bleibt (konsistent zu oben).
