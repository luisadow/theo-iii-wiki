---
description: "Spiegelmethode (Bildladungen) einfach erklärt: Punktladung vor Ebene und Kugel, induzierte Flächenladung, Kraft, Energie und dielektrischer Halbraum."
title: "Spiegelmethode (Method of Images) – Elektrostatik"
aliases:
  - Spiegelmethode Elektrostatik
date: "2025-11-25"
tags:
  - theo-iii
  - elektrostatik
  - randwert
  - methode
---

Die Spiegelmethode ersetzt leitende Randflächen durch äquivalente Bildladungen, sodass die resultierende Potentiallösung automatisch die Dirichlet-Randbedingungen erfüllt. Sie ergänzt [[Elektrostatik]], [[Randwertprobleme (Elektrostatik)]], [[Multipolentwicklung (Elektrostatik)]] sowie [[Maxwell-Spannungstensor (Elektrostatik)]].

---

## 1. Kernidee

1. **Geometrie identifizieren:** Perfekt leitende Flächen (Ebene, Kugel, Zylinder) müssen auf konstantem Potential liegen.

2. **Bildladungen platzieren:** Für jede reale Ladung wird eine virtuelle Ladung so gesetzt, dass

   $$
   \phi(\mathbf{r}\in\text{Leiter}) = \text{const}
   $$

   gilt. Häufig wird $\phi=0$ gewählt (geerdete Leiter).

3. **Superposition nutzen:** Das gesamte Feld ist die Summe aus realen und Bildladungen. Nur der Feldausschnitt im realen Raum ($\mathbf{r}$ außerhalb der Leiter) ist physikalisch relevant.

4. **Physikalische Größen ableiten:** Kräfte, Energien und Oberflächenladungsdichten folgen aus den so bestimmten Feldern.

![[spiegelmethode.svg|Links: Ladung +Q vor einer geerdeten Ebene. Die Feldlinien enden senkrecht auf dem Leiter, dort sitzt die influenzierte Ladung σ(x). Rechts: Das Paar +Q/−Q ohne Leiter erzeugt im oberen Halbraum exakt dasselbe Feld (numerisch berechnete Feldlinien).]]

---

## 2. Standardkonfigurationen

| Fall | Bildladungen | Ergebnisidee |
| --- | --- | --- |
| Punktladung $+Q$ im Abstand $a$ über geerdeter Ebene | Spiegelladung $-Q$ symmetrisch unter der Ebene | $\phi(\mathbf{r})=\frac{Q}{4\pi\varepsilon_0}\left(\frac{1}{\lvert\mathbf{r}-\mathbf{r}_Q\rvert}-\frac{1}{\lvert\mathbf{r}-\mathbf{r}_{Q'}\rvert}\right)$ |
| Punktladung $Q$ im Abstand $r_0$ vom Mittelpunkt einer geerdeten Kugel (Radius $R$) | $Q'=-Q\,R/r_0$ auf derselben radialen Linie im Abstand $R^2/r_0$ vom Mittelpunkt | Potential außerhalb = Summe realer + Bildladung, $\phi(R)=0$ |
| Linienladung $\lambda$ neben geerdeter Ebene | Spiegel-Linienladung $-\lambda$ | Feld wie Doppelleitung; Kraft pro Länge $\lambda^2/(2\pi\varepsilon_0\cdot 2a)$ zur Ebene hin |

Weitere Fälle (z. B. Kombination mehrerer Ebenen) erfordern iterative Spiegelungen oder Übergang zu [[Multipolentwicklung (Elektrostatik)]].

---

## 3. Schritt-für-Schritt-Anleitung

1. **Koordinatenwahl:** Ursprung oder Symmetrieachsen auf der leitenden Fläche positionieren.

2. **Reale Ladungen:** Lage, Vorzeichen und Abstände dokumentieren.

3. **Bildladungen erzeugen:**

   - Ebene: Spiegelung an der Fläche, Vorzeichen invertieren (für geerdete Ebene).

   - Kugel: Inversion am Kugelradius, $r' = R^2/r_0$, $Q'=-Q\,R/r_0$.

   - Zylinder: analog mittels Zylinderinversion oder Fourier-Darstellung.

4. **Potential bestimmen:**

   $$
   \phi(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\sum_i \frac{Q_i}{|\mathbf{r}-\mathbf{r}_i|}
   $$

5. **Feld berechnen:** $\mathbf{E} = -\nabla\phi$ im physikalischen Raum.

6. **Randkontrolle:** Prüfen, ob $\phi$ auf der leitenden Fläche konstant ist und Grenzfälle korrekt reproduziert werden.

7. **Messgrößen ableiten:** Kräfte (z. B. $F=Q\,E_{\text{Bild}}$), Oberflächenladungsdichte $\sigma=\varepsilon_0 E_\perp$, Energie oder Druck über [[Maxwell-Spannungstensor (Elektrostatik)]].

---

## 4. Beispielrechnungen

### 4.1 Kraft auf eine Punktladung vor geerdeter Ebene

- Reale Ladung $Q$ in Höhe $a$.

- Bildladung $-Q$ in Höhe $-a$.

- Feld am Ort der realen Ladung durch Bildladungen liefert

  $$
  \mathbf{F} = -\frac{Q^2}{16\pi\varepsilon_0 a^2}\,\hat{\mathbf{z}}
  $$

  (Ebene bei $z=0$, Ladung bei $z=a$): Anziehung zur Ebene hin. Der Vorfaktor $\frac{1}{16\pi}$ stammt aus dem Abstand $2a$ zwischen realer und Bildladung.

### 4.2 Energie derselben Konfiguration

- Energie = Hälfte der Coulomb-Energie zwischen realer und Bildladung:

  $$
  W = \frac{1}{2}\frac{Q(-Q)}{4\pi\varepsilon_0(2a)} = -\frac{Q^2}{16\pi\varepsilon_0 a}.
  $$

### 4.3 Oberflächenladungsdichte

- Normalkomponente des Feldes liefert

  $$
  \sigma(\mathbf{r}) = \varepsilon_0\,E_\perp(\mathbf{r}) = \varepsilon_0\left[E_{\text{real},\perp}+E_{\text{Bild},\perp}\right]_{\text{an der Fläche}}.
  $$

- Für die Ebene (Abstand $\rho$ vom Fußpunkt der Ladung):
  $$
  \sigma(\rho) = -\frac{Q\,a}{2\pi\left(\rho^2+a^2\right)^{3/2}},\qquad \int\sigma\,dA = -Q.
  $$

---

## Beispielaufgabe

> [!example]- Aufgabe: Influenzladung auf der geerdeten Ebene
> Eine Punktladung $q$ sitzt im Abstand $a$ über einer geerdeten, leitenden Ebene ($z=0$). Bestimme die induzierte Flächenladung $\sigma(\rho)$ und zeige, dass insgesamt genau $-q$ influenziert wird.
>
> > [!success]- Lösung
> > 1. **Bildladung:** $-q$ bei $z=-a$. Für $z>0$ ist das Potential das von $q$ und $-q$.
> > 2. **Feld auf der Ebene:** Die Tangentialanteile heben sich auf, die $z$-Anteile addieren sich:
> >    $$E_z(\rho, 0) = -\frac{1}{4\pi\varepsilon_0}\,\frac{2qa}{(\rho^2+a^2)^{3/2}}.$$
> > 3. **Flächenladung:** $\sigma = \varepsilon_0 E_z$ (Normale zeigt aus dem Leiter heraus):
> >    $$\sigma(\rho) = -\frac{q\,a}{2\pi(\rho^2+a^2)^{3/2}}.$$
> > 4. **Gesamtladung:** in Polarkoordinaten auf der Ebene
> >    $$\int_0^\infty \sigma\,2\pi\rho\,d\rho = -q\,a\left[-\frac{1}{\sqrt{\rho^2+a^2}}\right]_0^\infty = -q.$$
> >
> > **Merke:** Die Bildladung ist genau die Ladung, die physikalisch auf dem Leiter sitzt – nur verschmiert statt punktförmig.

## 5. Grenzen und Kombinationen

- Funktioniert optimal für Dirichlet-RB. Neumann- oder Robin-Bedingungen erfordern modifizierte (z. B. verteilte) Bildladungen oder zusätzliche Gleichungen.

- Mehrere Leitflächen: Keil mit Öffnungswinkel $\pi/n$ braucht $2n-1$ Bildladungen; zwei parallele Platten brauchen unendlich viele (langsam konvergente Reihe) → dort besser SoV/Fourier.

- Dielektrische Halbräume lassen sich ebenfalls mit Bildladungen behandeln, siehe Tabelle in Abschnitt 8.

---

## 6. Ressourcen & Verweise

- **Notizen:** [[Elektrostatik]], [[Randwertprobleme (Elektrostatik)]], [[Multipolentwicklung (Elektrostatik)]], [[Maxwell-Spannungstensor (Elektrostatik)]], [[Dielektrika (Elektrostatik)]].

- **Literatur:** Griffiths – _Introduction to Electrodynamics_ Kap. 3.2, Jackson – _Classical Electrodynamics_ Kap. 2, MIT OCW 8.07 (Lecture „Method of Images“).

---

## 7. Beispiel: Punktladung vor leitender Kugel

Gegeben: Kugelradius $R$, Punktladung $q$ auf der $z$-Achse bei $r_0>R$.

- Bildladung: $q' = -q \tfrac{R}{r_0}$ bei $r' = \tfrac{R^2}{r_0}$.
- Potential: $\phi(r) = \tfrac{1}{4\pi\varepsilon_0}\left( \tfrac{q}{|\mathbf{r}-r_0\hat{\mathbf{z}}|} + \tfrac{q'}{|\mathbf{r}-r'\hat{\mathbf{z}}|} \right)$.
- Kraft zwischen Ladung und geerdeter Kugel (Anziehung):
  $$
  F = \frac{1}{4\pi\varepsilon_0}\frac{q\,\lvert q'\rvert}{(r_0-r')^2} = \frac{1}{4\pi\varepsilon_0} \frac{q^2 R\, r_0}{(r_0^2-R^2)^2}.
  $$
- Oberflächenladungsdichte aus dem Gesamtfeld (reale + Bildladung) bei $r=R$:
  $$
  \sigma(\theta) = \varepsilon_0 E_r(R,\theta) = -\frac{q}{4\pi R}\,\frac{r_0^2-R^2}{\left(R^2+r_0^2-2Rr_0\cos\theta\right)^{3/2}},\qquad \int\sigma\,dA = q'.
  $$
- Isolierte, ungeladene Kugel: zusätzlich $-q'$ im Mittelpunkt, damit die Gesamtladung null ist.

## 8. Tabellenblatt: typische Setups

| Geometrie                                            | Bildladungen                                                           | Ergebnisidee                                                                |
| ---------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Punktladung vor leitender Ebene                      | eine Bildladung $-q$ gespiegelt                                        | Feld wie Dipol; Kraft $F = -\tfrac{1}{16\pi\varepsilon_0} \tfrac{q^2}{d^2}$ |
| Punktladung (im Vakuum) vor dielektrischem Halbraum ($\varepsilon_r$) | Bildladung $q' = -q \tfrac{\varepsilon_r-1}{\varepsilon_r+1}$ für das Feld im Vakuum; im Dielektrikum wirkt $q'' = q\tfrac{2}{\varepsilon_r+1}$ am Ort von $q$ | Stetigkeit von $E_t$ und $D_n$; Grenzfall $\varepsilon_r\to\infty$ = Leiter |
| Punktladung vor geerdeter Kugel | $q'=-q R/r_0$ im Abstand $R^2/r_0$ vom Mittelpunkt | siehe Beispiel oben |
| Parallele Platten (geerdet) | unendliche Bildladungsreihe | Reihe konvergiert langsam; besser Fourier/SoV |

## 9. Aufgaben- und Ressourcenverweise

- Crosslinks: [[Randwertprobleme (Elektrostatik)]], [[Elektrostatik]].
