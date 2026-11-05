---
title: "Einheitensysteme – SI, Gauß und Heaviside-Lorentz"
description: "Einheitensysteme der Elektrodynamik: SI, Gauß-System und Heaviside-Lorentz im Vergleich, Maxwell-Gleichungen in allen drei Systemen, Ersetzungsregeln SI → Gauß, Umrechnung von Zahlenwerten und typische Fehler."
aliases: ["Gauß-System", "Gaußsches Einheitensystem", "CGS-System", "Heaviside-Lorentz"]
tags: [theo-iii, grundlagen, einheiten]
date: 2026-11-05
# vergleicht die Systeme nebeneinander, daher kein Umschalter
unitToggle: false
---

Die Elektrodynamik lässt sich in verschiedenen Einheitensystemen aufschreiben. Die Physik ist dieselbe, aber Faktoren wie $4\pi$, $\varepsilon_0$ und $c$ wandern zwischen den Formeln hin und her. Das Wiki ist ursprünglich in **SI** geschrieben, die Vorlesung im WiSe 26/27 rechnet konsequent im **Gauß-System**. Mit dem Umschalter oben auf den Seiten siehst du die Formeln in beiden Systemen.

## Warum es überhaupt mehrere Systeme gibt

Messbar ist nicht das Feld selbst, sondern die Kraft zwischen Ladungen. In der Coulombkraft tritt die Ladung nur als Produkt $q_1q_2$ zusammen mit einer Konstante auf. Man kann deshalb die **Einheit der Ladung** so wählen, dass die Konstante eine bequeme Form bekommt:

| System | Coulombkraft | Ladungseinheit |
| --- | --- | --- |
| SI | $F = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r^2}$ | Coulomb, über das Ampere festgelegt |
| Gauß | $F = \dfrac{q_1q_2}{r^2}$ | Statcoulomb, $1\,\mathrm{statC} = 1\,\mathrm{cm^{3/2}\,g^{1/2}\,s^{-1}}$ |
| Heaviside-Lorentz | $F = \dfrac{1}{4\pi}\dfrac{q_1q_2}{r^2}$ | so gewählt, dass in den Maxwell-Gleichungen kein $4\pi$ steht |

Das Gauß-System benutzt cm, g und s als Basiseinheiten. Weil die Ladung keine eigene Grundeinheit hat, haben $\mathbf E$ und $\mathbf B$ dort **dieselbe Dimension**. Das vereinfacht vor allem die kovariante Formulierung in der Relativität. Heaviside-Lorentz ist vor allem in der Hochenergiephysik verbreitet.

## Maxwell-Gleichungen in allen drei Systemen

| | SI | Gauß | Heaviside-Lorentz |
| --- | --- | --- | --- |
| Gauß | $\nabla\cdot\mathbf E = \rho/\varepsilon_0$ | $\nabla\cdot\mathbf E = 4\pi\rho$ | $\nabla\cdot\mathbf E = \rho$ |
| Faraday | $\nabla\times\mathbf E = -\partial_t\mathbf B$ | $\nabla\times\mathbf E = -\tfrac1c\partial_t\mathbf B$ | $\nabla\times\mathbf E = -\tfrac1c\partial_t\mathbf B$ |
| keine Monopole | $\nabla\cdot\mathbf B = 0$ | $\nabla\cdot\mathbf B = 0$ | $\nabla\cdot\mathbf B = 0$ |
| Ampère–Maxwell | $\nabla\times\mathbf B = \mu_0\mathbf J + \mu_0\varepsilon_0\partial_t\mathbf E$ | $\nabla\times\mathbf B = \tfrac{4\pi}{c}\mathbf J + \tfrac1c\partial_t\mathbf E$ | $\nabla\times\mathbf B = \tfrac1c\mathbf J + \tfrac1c\partial_t\mathbf E$ |
| Lorentzkraft | $\mathbf F = q(\mathbf E + \mathbf v\times\mathbf B)$ | $\mathbf F = q(\mathbf E + \tfrac{\mathbf v}{c}\times\mathbf B)$ | $\mathbf F = q(\mathbf E + \tfrac{\mathbf v}{c}\times\mathbf B)$ |
| Poisson | $\Delta\phi = -\rho/\varepsilon_0$ | $\Delta\phi = -4\pi\rho$ | $\Delta\phi = -\rho$ |
| Feldenergiedichte | $\tfrac{\varepsilon_0}{2}E^2 + \tfrac{1}{2\mu_0}B^2$ | $\tfrac{1}{8\pi}(E^2+B^2)$ | $\tfrac12(E^2+B^2)$ |

Im Gauß-System steht das $4\pi$ bei den **Quellen** (Feldgleichungen), dafür fehlt es in den **Lösungen** (Coulomb: $\phi = q/r$). Im SI-System ist es umgekehrt.

## Formeln von SI ins Gauß-System übersetzen

Für eine Formel, die nur aus Feldern, Ladungen und Strömen besteht, reicht eine formale Ersetzung:

| Ersetze | durch | Beispiel |
| --- | --- | --- |
| $\varepsilon_0$ | $\dfrac{1}{4\pi}$ | $\dfrac{1}{4\pi\varepsilon_0}\dfrac{q}{r} \;\to\; \dfrac{q}{r}$ |
| $\mu_0$ | $\dfrac{4\pi}{c^2}$ | $\varepsilon_0\mu_0 = \dfrac{1}{c^2}$ bleibt richtig |
| $\mathbf B,\ \mathbf A$ | $\dfrac{\mathbf B}{c},\ \dfrac{\mathbf A}{c}$ | $\mathbf F = q(\mathbf E + \tfrac{\mathbf v}{c}\times\mathbf B)$ |
| $\mathbf D,\ \mathbf H$ | $\dfrac{\mathbf D}{4\pi},\ \dfrac{c\,\mathbf H}{4\pi}$ | $\mathbf D = \mathbf E + 4\pi\mathbf P$ |
| $\mathbf M$ | $c\,\mathbf M$ | $\mathbf B = \mathbf H + 4\pi\mathbf M$ |

Unverändert bleiben $\mathbf E$, $\phi$, $q$, $\rho$, $\mathbf J$, $I$ und $\mathbf P$. Die Ersetzung ändert nur die Gestalt der Formel. Die **Zahlenwerte** von Ladung und Feld sind in den beiden Systemen verschieden, siehe nächster Abschnitt.

> [!example]- Beispiel: Feld eines Drahts übersetzen
> SI: $B = \dfrac{\mu_0 I}{2\pi r}$. Ersetze $B\to B/c$ und $\mu_0\to 4\pi/c^2$:
> $$\frac{B}{c} = \frac{4\pi}{c^2}\,\frac{I}{2\pi r} \quad\Longrightarrow\quad B = \frac{2I}{c\,r}.$$
> Genau das liefert auch das Biot-Savart-Gesetz im Skript (III.B.5).

## Zahlenwerte umrechnen

| Größe | SI | Gauß |
| --- | --- | --- |
| Länge, Masse | 1 m, 1 kg | $10^2$ cm, $10^3$ g |
| Kraft | 1 N | $10^5$ dyn |
| Energie | 1 J | $10^7$ erg |
| Ladung | 1 C | $2{,}998\cdot10^{9}$ statC |
| Elementarladung | $e = 1{,}602\cdot10^{-19}$ C | $e = 4{,}803\cdot10^{-10}$ statC |
| Strom | 1 A | $2{,}998\cdot10^{9}$ statA |
| Spannung | 299,79 V | 1 statV |
| elektrisches Feld | $2{,}998\cdot10^{4}$ V/m | 1 statV/cm |
| Magnetfeld | 1 T | $10^4$ G (Gauß) |
| Kapazität | 1 F | $8{,}988\cdot10^{11}$ cm |

Die krummen Faktoren sind immer Potenzen von $c = 2{,}998\cdot10^{10}$ cm/s.

> [!example]- Beispiel: Coulombkraft zweier Elektronen im Abstand 1 Å
> Gauß: $F = \dfrac{e^2}{r^2} = \dfrac{(4{,}803\cdot10^{-10})^2}{(10^{-8})^2}\,\mathrm{dyn} = 2{,}307\cdot10^{-3}\,\mathrm{dyn}$.
>
> SI: $F = \dfrac{1}{4\pi\varepsilon_0}\dfrac{e^2}{r^2} = 8{,}988\cdot10^{9}\cdot\dfrac{(1{,}602\cdot10^{-19})^2}{(10^{-10})^2}\,\mathrm N = 2{,}307\cdot10^{-8}\,\mathrm N$.
>
> Beides ist dieselbe Kraft, denn $1\,\mathrm N = 10^5\,\mathrm{dyn}$. Ein schöner Check ist die Feinstrukturkonstante: $\alpha = \dfrac{e^2}{\hbar c}$ (Gauß) $= \dfrac{e^2}{4\pi\varepsilon_0\hbar c}$ (SI) $\approx \dfrac{1}{137}$.

## Typische Fehler beim Umrechnen

- **Green-Funktion aus der falschen Konvention:** Die Vorlesung nimmt $G = -\frac{1}{4\pi\lvert\mathbf r-\mathbf r'\rvert}$ mit $\Delta G = +\delta$, das SI-Wiki $G_0 = +\frac{1}{4\pi\lvert\mathbf r-\mathbf r'\rvert}$ mit $\nabla^2 G_0 = -\delta$. Das ist eine Vorzeichenkonvention, keine Einheitenfrage. $G$ und Quellterm immer aus derselben Quelle nehmen, siehe [[Green-Funktionen (Elektrostatik)]].
- **$c$ vergessen:** Jedes $\mathbf B$, $\mathbf A$ und jeder Strom kommt im Gauß-System mit einem $1/c$. Kontrolle: $\mathbf E$ und $\mathbf B$ müssen dieselbe Dimension haben.
- **SI-Zahlen in Gauß-Formeln:** $e = 1{,}6\cdot10^{-19}$ in $F = e^2/r^2$ einzusetzen ist falsch. Zahlen und Formeln immer aus demselben System nehmen.
- **$\varepsilon$ in Materie:** Im Gauß-System ist $\varepsilon$ dimensionslos (Vakuum: $\varepsilon = 1$) und entspricht $\varepsilon_r$ im SI. Ebenso $\mu$ und $\mu_r$.
- **Vakuum: $\mathbf H = \mathbf B$:** Im Gauß-System haben $\mathbf B$ (Gauß) und $\mathbf H$ (Oersted) dieselbe Dimension und im Vakuum denselben Wert.
- **Induktivität:** Die Definition ist im Gauß-System nicht einheitlich. Im Wiki gilt $\Phi = c\,LI$, damit bleiben $\mathcal E = -L\,\dot I$ und $W = \tfrac12 LI^2$ erhalten.

## Verwandte Seiten

- [[Formelsammlung|Formelsammlung Elektrodynamik]]: alle Formeln umschaltbar zwischen SI und Gauß
- [[Elektrostatik - Lernseite (Grundlagen)]]: Coulomb und Gaußsches Gesetz in beiden Systemen
- [[Vektoranalysis]]: die mathematischen Werkzeuge, unabhängig vom Einheitensystem

*Im Skript WiSe 26/27: Abschnitt I.C.*
