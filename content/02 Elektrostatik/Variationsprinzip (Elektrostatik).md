---
title: "Variationsprinzip der Elektrostatik"
description: "Variationsprinzip der Elektrostatik: Das Energiefunktional W[φ] wird von der Lösung der Poisson-Gleichung minimiert. Herleitung, Wert am Minimum, Existenz der Lösung und Ritz-Verfahren als Näherungsmethode."
aliases: ["Variationsprinzip Elektrostatik", "Energiefunktional Elektrostatik", "Dirichlet-Prinzip"]
tags: [theo-iii, elektrostatik, variationsrechnung]
date: 2026-11-05
---

Wie in der Mechanik das Hamiltonsche Prinzip die Bewegungsgleichungen liefert, so liefert in der Elektrostatik ein **Energiefunktional** die Poisson-Gleichung: Unter allen Potentialen mit den vorgegebenen Randwerten macht die physikalische Lösung das Funktional minimal. Daraus folgt die Existenz der Lösung von [[Randwertprobleme (Elektrostatik)|Randwertproblemen]], und man bekommt eine Näherungsmethode für Probleme ohne geschlossene Lösung.

## Das Energiefunktional

$$
W[\phi] = \int d^3r\left[\sg{\frac{\varepsilon_0}{2}}{\frac{1}{8\pi}}\,\lvert\nabla\phi\rvert^2 - \rho\,\phi\right]
$$

Der erste Term ist die Energie des Felds $\mathbf E = -\nabla\phi$, der zweite die Wechselwirkung der Ladungsverteilung $\rho$ mit dem Potential. $W$ ordnet jeder Funktion $\phi$ eine Zahl zu. Gesucht ist die Funktion, für die diese Zahl extremal wird.

## Herleitung der Poisson-Gleichung

Variiere um eine Lösung $\phi_0$ herum, $\phi = \phi_0 + \epsilon\,\eta$, mit $\eta = 0$ auf dem Rand (die Randwerte sind vorgegeben). Einsetzen und nach Potenzen von $\epsilon$ ordnen:

$$
W[\phi] = W[\phi_0]
+ \epsilon\int d^3r\left[\sg{\varepsilon_0}{\frac{1}{4\pi}}\,\nabla\phi_0\cdot\nabla\eta - \rho\,\eta\right]
+ \epsilon^2\int d^3r\,\sg{\frac{\varepsilon_0}{2}}{\frac{1}{8\pi}}\,\lvert\nabla\eta\rvert^2.
$$

Am Extremum verschwindet der lineare Term. Partielle Integration wälzt den Gradienten von $\eta$ auf $\phi_0$ über; der Randterm fällt weg, weil $\eta$ dort null ist:

$$
\int d^3r\left[-\sg{\varepsilon_0}{\frac{1}{4\pi}}\,\Delta\phi_0 - \rho\right]\eta = 0 .
$$

Das muss für **jede** Variation $\eta$ gelten, also verschwindet die eckige Klammer:

$$
\Delta\phi_0 = \sg{-\frac{\rho}{\varepsilon_0}}{-4\pi\rho}.
$$

Der Term zweiter Ordnung ist immer positiv. Das Extremum ist also ein **Minimum**: Die Lösung der Poisson-Gleichung minimiert $W$.

> [!info] Vorzeichen bei der partiellen Integration
> $\int \nabla\phi_0\cdot\nabla\eta\,d^3r = -\int \eta\,\Delta\phi_0\,d^3r$ (plus Randterm). Das Minuszeichen ist der Grund, warum in der Klammer $-\Delta\phi_0$ steht und die Poisson-Gleichung ein negatives Vorzeichen bekommt.

## Wert am Minimum

Mit $\int\lvert\nabla\phi_0\rvert^2 = -\int\phi_0\,\Delta\phi_0 = \sg{\frac{1}{\varepsilon_0}}{4\pi}\int\rho\,\phi_0$ (bei verschwindendem Randterm) folgt

$$
W[\phi_0] = \frac12\int\rho\,\phi_0\,d^3r - \int\rho\,\phi_0\,d^3r = -\frac12\int\rho\,\phi_0\,d^3r .
$$

Das Funktional ist also am Minimum **nicht** die Feldenergie $W_\text{Feld} = \frac12\int\rho\,\phi$ aus [[Energie und Kapazität in der Elektrostatik]], sondern deren Negatives. Für die Herleitung der Feldgleichung spielt das keine Rolle; beim Einsetzen von Zahlen sollte man die beiden Größen aber nicht verwechseln.

## Existenz und Eindeutigkeit

- **Existenz:** $W$ ist nach unten beschränkt und wird von einer Funktion mit den vorgegebenen Randwerten minimiert. Diese Funktion löst die Poisson-Gleichung, auch wenn die Randwerte nicht null sind (null sein muss nur die Variation $\eta$).
- **Eindeutigkeit:** folgt getrennt aus der ersten Greenschen Identität. Zwei Lösungen unterscheiden sich höchstens um eine Konstante, siehe [[Randwertprobleme (Elektrostatik)]].

## Anwendung: Ritz-Verfahren

Setzt man für $\phi$ eine Familie von Testfunktionen mit freien Parametern ein und minimiert $W$ nach diesen Parametern, erhält man die beste Näherung innerhalb der Familie. Liegt die exakte Lösung in der Familie, findet man sie genau.

> [!example]- Aufgabe: Geladene Schicht zwischen geerdeten Platten
> Zwischen zwei geerdeten Platten bei $z = \pm d$ liegt die konstante Ladungsdichte $\rho_0$. Bestimme das Potential mit dem Ansatz $\phi(z) = A\,(d^2 - z^2)$, der die Randbedingungen $\phi(\pm d) = 0$ erfüllt.
>
> > [!success]- Lösung
> > 1. **Einsetzen** (pro Fläche): $\phi' = -2Az$, also
> >    $$W(A) = \int_{-d}^{d}\left[\sg{\frac{\varepsilon_0}{2}}{\frac{1}{8\pi}}\,4A^2z^2 - \rho_0 A\,(d^2-z^2)\right]dz = \sg{\frac{4\varepsilon_0 d^3}{3}}{\frac{d^3}{3\pi}}\,A^2 - \frac{4\rho_0 d^3}{3}\,A.$$
> > 2. **Minimieren:** $\dfrac{dW}{dA} = 0$ ergibt $A = \sg{\dfrac{\rho_0}{2\varepsilon_0}}{2\pi\rho_0}$.
> > 3. **Ergebnis:** $\phi(z) = \sg{\dfrac{\rho_0}{2\varepsilon_0}}{2\pi\rho_0}\,(d^2 - z^2)$.
> >
> > **Check:** Das ist genau die exakte Lösung der Poisson-Gleichung aus der [[Elektrostatik - Lernseite (Grundlagen)|Lernseite]] (Abschnitt „Beispiele – Laplace/Poisson“), weil der Ansatz sie enthält. Mit einem schlechteren Ansatz (z. B. $\phi = A\cos(\pi z/2d)$) liegt $W$ etwas über dem Minimum.

## Verwandte Seiten

- [[Elektrostatik - Lernseite (Grundlagen)]]: Poisson-Gleichung und Beispiele
- [[Energie und Kapazität in der Elektrostatik]]: Feldenergie $\frac12\int\rho\,\phi$
- [[Randwertprobleme (Elektrostatik)]]: Dirichlet- und Neumann-Bedingungen, Eindeutigkeitssatz

*Im Skript WiSe 26/27: Abschnitt II.D.*
