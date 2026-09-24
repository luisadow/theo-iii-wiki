---
description: "Magnetostatik Grundgleichungen: Biot-Savart, Ampèresches Gesetz, Vektorpotential, magnetische Energie und typische Felder (Draht, Spule, Ring)."
title: "Magnetostatik – Grundgleichungen & Überblick"
aliases:
  - Magnetostatik Grundlagen
date: "2025-11-25"
tags:
  - theo-iii
  - magnetostatik
  - felder
---

Die Magnetostatik beschreibt stationäre Ströme und die dadurch erzeugten magnetischen Felder. Diese Notiz ergänzt die elektrostatischen Seiten ([[Elektrostatik]]) und bereitet die dynamischen Maxwell-Gleichungen vor.

---

## 1. Voraussetzungen & Annahmen

- Zeitunabhängige Ströme: $\partial \rho / \partial t = 0$, $\partial \mathbf{J} / \partial t = 0$.
- Ladungserhaltung reduziert sich auf $\nabla \cdot \mathbf{J} = 0$.
- Keine Verschiebungsströme ($\partial \mathbf{E} / \partial t = 0$).
- Felder hängen nur von stationären Quellen ab.

---

## 2. Biot–Savart-Gesetz

Für einen stationären Strom $\mathbf{J}(\mathbf{r}')$:

$$
\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int_V \mathbf{J}(\mathbf{r}') \times \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, d^3 r'
$$

Für einen dünnen Draht mit Strom $I$:

$$
\mathbf{B}(\mathbf{r}) = \frac{\mu_0 I}{4\pi} \int_{\mathcal{L}} \frac{d\mathbf{\ell}' \times (\mathbf{r} - \mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|^3}
$$

---

## 3. Grundgleichungen (Differentialform)

$$
\begin{aligned}
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{B} &= \mu_0 \mathbf{J}
\end{aligned}
$$

Mit dem Vektorpotential $\mathbf{A}$:

$$
\mathbf{B} = \nabla \times \mathbf{A}, \qquad \nabla \cdot \mathbf{A} = 0 \quad \text{(Coulomb-Eichung)}
$$

und

$$
\nabla^2 \mathbf{A} = -\mu_0 \mathbf{J}.
$$

---

## 4. Integralform (Ampère-Gesetz)

$$
\oint_{\partial S} \mathbf{B} \cdot d\mathbf{\ell} = \mu_0 I_{\text{durch}}
$$

Bei hoher Symmetrie (zylindrisch, plan, toroidal) lässt sich $\mathbf{B}$ direkt bestimmen, z. B. für den unendlich langen Leiter:

$$
B_\varphi(r) = \frac{\mu_0 I}{2\pi r}.
$$

---

## Beispielaufgabe

> [!example]- Aufgabe: Dicker Draht mit homogener Stromdichte
> Ein unendlich langer Draht vom Radius $a$ führt den Strom $I$, gleichmäßig über den Querschnitt verteilt. Bestimme $B(r)$ innen und außen und die magnetische Energie pro Länge im Drahtinneren.
>
> > [!success]- Lösung
> > 1. **Symmetrie:** $\mathbf B = B(r)\,\hat{\boldsymbol\varphi}$; Ampère-Kreis vom Radius $r$ um die Achse: $\oint\mathbf B\cdot d\mathbf l = 2\pi r\,B$.
> > 2. **Außen:** $2\pi r B = \mu_0 I \Rightarrow B = \dfrac{\mu_0 I}{2\pi r}$.
> > 3. **Innen:** umschlossen ist $I\,r^2/a^2$ (siehe [[Flächen- und Volumenelemente – Leitfaden]]), also $B = \dfrac{\mu_0 I\,r}{2\pi a^2}$.
> > 4. **Energie innen pro Länge:**
> >    $$W' = \int_0^a \frac{B^2}{2\mu_0}\,2\pi r\,dr = \frac{\mu_0 I^2}{4\pi a^4}\int_0^a r^3\,dr = \frac{\mu_0 I^2}{16\pi}.$$
> > 5. Mit $W' = \tfrac12 L' I^2$ folgt die **innere Induktivität** $L'_{\text{innen}} = \dfrac{\mu_0}{8\pi}$ – unabhängig vom Radius.
> >
> > **Merke:** Das Vorgehen ist dasselbe wie bei der geladenen Vollkugel: Symmetrie → Integrationsweg → eingeschlossene Quelle.

## 5. Magnetostatische Energie

Feldenergie:

$$
W = \frac{1}{2\mu_0} \int_V |\mathbf{B}|^2\, d^3 r = \frac{1}{2} \int_V \mathbf{J} \cdot \mathbf{A}\, d^3 r
$$

Hilfreich für Induktivitäten:

$$
W = \frac{1}{2} L I^2 \quad \Rightarrow \quad L = \frac{2W}{I^2}.
$$

---

## 6. Materialgleichungen (Ausblick)

Für lineare Medien:

$$
\mathbf{B} = \mu_0 (\mathbf{H} + \mathbf{M}), \qquad \mathbf{M} = \chi_m \mathbf{H}.
$$

Diese Beziehungen werden wichtig, sobald magnetische Materialien (Dia-, Para-, Ferromagnetismus) betrachtet werden; Details siehe [[Magnetische Felder in Materie]].

---

## 7. Typische Beispiele

| System                      | Ergebnis                                               | Hinweis                          |
| --------------------------- | ------------------------------------------------------ | -------------------------------- |
| Unendlich langer Leiter     | $B_\varphi(r) = \mu_0 I / (2\pi r)$                    | Ampère-Linie (Zylinder)          |
| Kreisförmige Leiterschleife | $B_z$ auf Achse: $\mu_0 I R^2 / [2 (R^2 + z^2)^{3/2}]$ | Biot–Savart                      |
| Langes Solenoid             | $B \approx \mu_0 n I$                                  | Innen homogen, außen $\approx 0$ |
| Toroid (ideal)              | $B_\varphi = \mu_0 N I / (2\pi r)$                     | Feld eingeschlossen              |

---

## 8. Das solltest du können

1. Symmetrien analysieren → Ampère oder Biot–Savart wählen.
2. Stromdichte korrekt formulieren (Volumen-, Flächen-, Linienströme).
3. Grenzbedingungen an Oberflächenströmen: $\mathbf{n} \times (\mathbf{H}_2 - \mathbf{H}_1) = \mathbf{K}_{\text{frei}}$.
4. Energie/Induktivität berechnen und mit $\mathbf{J} \cdot \mathbf{A}$ abgleichen.
5. Materieeffekte im Hinterkopf behalten → Verweis auf [[Magnetische Felder in Materie]].

---

## 9. Ausblick auf dynamische Maxwell-Gleichungen

Sobald $\partial_t \neq 0$ gilt, treten Verschiebungsstrom und induzierte Felder auf:

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0}, \\
\nabla \cdot \mathbf{B} &= 0, \\
\nabla \times \mathbf{E} &= -\partial_t \mathbf{B}, \\
\nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \partial_t \mathbf{E}.
\end{aligned}
$$

Wichtige Konsequenzen für Theo III:

- Wellengleichungen: $\Box \mathbf{E} = \mu_0 \varepsilon_0 \partial_t \mathbf{J} + \nabla(\rho/\varepsilon_0)$, $\Box \mathbf{B} = -\mu_0 \nabla \times \mathbf{J}$ mit $\Box = \nabla^2 - \tfrac{1}{c^2}\partial_t^2$.
- Potentiale und Eichungen: Coulomb- vs. Lorenz- vs. Poincaré-Eichung steuern, welche Quellanteile ($\rho$, $\mathbf{j}_T$) wirken.
- Energiefluss: Poynting-Vektor $\mathbf{S} = \tfrac{1}{\mu_0}\mathbf{E} \times \mathbf{B}$, Energiedichte $u = \tfrac{1}{2}(\varepsilon_0 |\mathbf{E}|^2 + |\mathbf{B}|^2/\mu_0)$.

Siehe [[Helmholtz-Zerlegung (Vektorfelder)]], [[Coulomb-Eichung (Elektrodynamik)]], [[Lorenz-Eichung (Elektrodynamik)]], [[Poincaré-Eichung (Elektrodynamik)]] und [[Elektrodynamik - Dynamik und Wellen]] für Details.

---

## 10. Ressourcen

- **Literatur:** Griffiths Kap. 5, Jackson Kap. 5, MIT OCW 8.02/8.07.
- **Verknüpfungen:** [[Elektrostatik]], [[Randwertprobleme (Elektrostatik)]], [[Stromverteilungen und Magnetisches Vektorpotential]], [[Magnetische Felder in Materie]], [[Materialgesetze Magnetik]], [[Induktivität und magnetische Energie]].
