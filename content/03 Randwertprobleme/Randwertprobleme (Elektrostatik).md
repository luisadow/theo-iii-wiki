---
description: "Randwertprobleme der Elektrostatik: Dirichlet, Neumann, Eindeutigkeitssatz, Separation, Spiegelmethode und Green-Funktionen."
title: "Randwertprobleme in der Elektrostatik"
aliases:
  - Randwertprobleme Elektrostatik
date: "2025-11-25"
tags:
  - theo-iii
  - elektrostatik
  - randwert
  - methode
---

Randwertprobleme (RWP) liefern Potential- und Feldverteilungen auf Basis vorgegebener Geometrien und Randbedingungen. Diese Notiz verbindet [[Elektrostatik]], [[Vektoranalysis]] sowie Werkzeuge wie [[Maxwell-Spannungstensor (Elektrostatik)]] mit konkreten Lösungsstrategien.

---

## 1. Formulierung des Problems

1. **Gleichung**

   - Poisson: $$\nabla^2 \phi = -\frac{\rho}{\varepsilon}$$
   - Laplace: $$\nabla^2 \phi = 0$$ (ladungsfreie Regionen)

2. **Randbedingungen (RB)**

   - Dirichlet: $$\phi|_{\partial V} = \phi_0$$
   - Neumann: $$\frac{\partial \phi}{\partial n}\Big|_{\partial V} = g$$
   - Gemischt (Robin): $$a\,\phi + b\,\frac{\partial \phi}{\partial n} = c$$

3. **Eindeutigkeitssatz**  
   Für lineare Medien ist die Lösung durch die RB eindeutig – praktisches Prüfkriterium für analytische oder numerische Ergebnisse.

---

## 2. Klassische Randbedingungstypen

| RB-Typ     | Physikalisches Szenario                  | Konsequenz                                |
| ---------- | ---------------------------------------- | ----------------------------------------- |
| Dirichlet  | Idealer Leiter, Erdung, festes Potential | Feldlinien orthogonal zur Oberfläche      |
| Neumann    | Isolierte Fläche, Symmetrieebene         | Feldlinien tangential, Ladungserhaltung   |
| Gemischt   | Leiter–Dielektrikum, Oberflächenimpedanz | Kombination aus Feld- und Potentialwerten |
| Periodisch | Kristalline Gitter, Wellenleiter         | Wiederholungszelle, Fourier-Ansatz        |

---

## 3. Lösungsstrategien

### 3.1 Separation of Variables (SoV)

1. Koordinatensystem passend zur Geometrie wählen.
2. Ansatz $$\phi(\mathbf{r}) = X(x)Y(y)Z(z)$$ → getrennte ODEs.
3. RB je Koordinate anwenden und Eigenwerte bestimmen.
4. Superposition der Moden; Koeffizienten via Fourier-/Legendre-Reihen.

**Typische Geometrien:** Rechteckkästen, Zylinder, Kugelschalen.

### 3.2 Spiegelmethode

- Leitende Flächen durch Bildladungen ersetzen (planar, kugelsymmetrisch).
- Bildladungen so anordnen, dass Dirichlet-RB erfüllt ist.
- Beschränkt auf wenige Symmetrien (ebene Wand, Kugelleiter).

### 3.3 Multipol- und Fernfeldentwicklung

- Für Außenfelder komplexer Ladungsverteilungen (vgl. [[Multipolentwicklung (Elektrostatik)]]).
- Potential als Summe aus Monopol, Dipol, Quadrupol etc. darstellen.
- RB bei $r \to \infty$ (Abklingen) und an leitenden Oberflächen bestimmen Koeffizienten.

### 3.4 Green-Funktionen

- Lösung der Poisson-Gleichung:
  $$\phi(\mathbf{r}) = \int G(\mathbf{r}, \mathbf{r}')\,\rho(\mathbf{r}')\,d^3 r' + \text{Randterm}$$
- $G$ erfüllt $$\nabla^2 G = -\delta(\mathbf{r} - \mathbf{r}')$$ plus passende RB.
- Nützlich für Superpositionsaufgaben und numerische Implementierungen.

### 3.5 Numerische Methoden (Hinweis)

- Finite Differenzen/Elemente, Boundary Element Method (BEM).
- Domäne diskretisieren, RB abbilden, iterativ lösen.
- Diskretisierung, Konvergenz und Fehlerabschätzung dokumentieren (eigene Notiz empfohlen).

---

## 4. Workflow-Checkliste

1. Geometrie skizzieren, Koordinatensystem wählen.
2. Medien und Permittivitäten definieren (ggf. stückweise).
3. RB klassifizieren (Dirichlet/Neumann/Gemischt/Periodisch).
4. Lösungsweg auswählen (SoV, Spiegel, Multipol, Green, numerisch).
5. Eindeutigkeit prüfen (Symmetrien, alternative RB).
6. Feld berechnen: $$\mathbf{E} = -\nabla \phi$$.
7. Validierung: Grenzfälle, Energie-Konsistenz (siehe [[Energie und Kapazität in der Elektrostatik]]), Kräfte via [[Maxwell-Spannungstensor (Elektrostatik)]].

---

## 5. Beispielsammlung (Skizze)

| Fall                                 | Methode   | Kernformeln                                                                                             |
| ------------------------------------ | --------- | ------------------------------------------------------------------------------------------------------- |
| Rechteckkasten, Dirichlet-RB         | SoV       | $$\phi = \sum A_{mn}\sin\left(\frac{m\pi x}{a}\right)\sin\left(\frac{n\pi y}{b}\right)\sinh(k_{mn} z)$$, $k_{mn}=\pi\sqrt{m^2/a^2+n^2/b^2}$ |
| Linie nahe leitender Ebene           | Spiegel   | reale + Bildladung, Potential als Summe                                                                 |
| Kugel mit $\phi(\theta)$ vorgegeben  | SoV Kugel | $$\phi(r,\theta)=\sum \left(A_\ell r^\ell + B_\ell r^{-(\ell+1)}\right)P_\ell(\cos\theta)$$             |
| Dipol in sphärischer Hülle           | Multipol  | Matching von Innen-/Außenkoeffizienten                                                                  |
| Ladungswolke im Rechteck (Dirichlet) | Green     | Faltung mit $G(x,x')$                                                                                   |

---

## 6. RB an Materialgrenzen

- **Normal:** $$\varepsilon_1 E_{1n} - \varepsilon_2 E_{2n} = \sigma_{\text{frei}}$$
- **Tangential:** $$\mathbf{E}_{1t} = \mathbf{E}_{2t}$$
- **Potential:** stetig für endliche Felder.
- **Praxis:** RB mit Energie-/Kraftbetrachtungen kombinieren (vgl. [[Dielektrika (Elektrostatik)]]).

---

## 7. Häufige Stolpersteine

1. Falsche RB-Zuordnung (z. B. isolierte Fläche ≠ $\phi = \text{const}$).
2. Unpassendes Koordinatensystem → Separation scheitert.
3. Divergente Reihen → bekannte Lösungen subtrahieren.
4. Symmetrien nicht genutzt → unnötiger Aufwand.
5. Fehlende Einheitentests bei numerischen Lösungen → Energie/Kraft prüfen.

---

## 8. Verweise & Ressourcen

- **Literatur:** Griffiths Kap. 3 · Jackson Kap. 3 · MIT OCW 8.07 „Boundary-Value Problems“
- **Backlink:** [[Elektrostatik]] (Hub)

---

## 9. Beispiele & Ergänzungen

### 9.1 Leitende Kugel auf Potential $\phi_0$ (Außenraum)

- Kugel mit Radius $a$, $\phi(a)=\phi_0$, $\phi\to 0$ für $r\to\infty$.
- Legendre-Ansatz außen: $\phi=\sum_\ell B_\ell r^{-(\ell+1)}P_\ell(\cos\theta)$. Die RB ist winkelunabhängig, also bleibt nur $\ell=0$: $\phi(r)=\phi_0 a/r$, $E_r = -\partial_r\phi = \phi_0 a/r^2$.
- Oberflächenladung: $\sigma = \varepsilon_0 E_r(a) = \varepsilon_0 \phi_0/a$, Gesamtladung $Q=4\pi a^2\sigma = 4\pi\varepsilon_0 a\,\phi_0$.
- Damit $C = 4\pi\varepsilon_0 a$ und $W = \tfrac{1}{2} C \phi_0^2$.
- Gegenstück: In einem ladungsfreien Hohlraum eines Leiters ist $\phi$ konstant (Eindeutigkeitssatz), das Feld dort verschwindet (Faraday-Käfig).

### 9.2 Green-Funktionen (Kurzlink)

- Siehe [[Green-Funktionen (Elektrostatik)]] für $G(\mathbf{r},\mathbf{r}')$ in freiem Raum, Halbraum und Kugel.

### 9.3 Periodische Randbedingungen

- In 1D hat die Laplace-Gleichung nur $\phi = A + Bx$; Periodizität erzwingt $B=0$.
- 2D, periodisch in $x$ (Periode $L$): Separation liefert
  $$\phi(x,y) = A_0 + B_0 y + \sum_{n\neq 0}\left(A_n e^{|k_n| y} + B_n e^{-|k_n| y}\right)e^{i k_n x},\qquad k_n = \frac{2\pi n}{L}.$$
  Die Koeffizienten folgen aus den RB in $y$-Richtung; jede Fourier-Mode wächst oder fällt exponentiell in $y$.
