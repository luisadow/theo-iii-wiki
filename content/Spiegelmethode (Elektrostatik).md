---
aliases:
  - Spiegelmethode Elektrostatik
date: "2025-11-25"
tags:
  - theo-iii
  - elektrostatik
  - randwert
  - methode
---

# Spiegelmethode (Method of Images) – Elektrostatik

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

---

## 2. Standardkonfigurationen

| Fall | Bildladungen | Ergebnisidee |

| --- | --- | --- |

| Punktladung $+Q$ im Abstand $a$ über geerdeter Ebene | Spiegelcharge $-Q$ symmetrisch unter der Ebene | Potential $\phi(\mathbf{r})=\frac{Q}{4\pi\varepsilon_0}\left(\frac{1}{|\mathbf{r}-\mathbf{r}_Q|}-\frac{1}{|\mathbf{r}-\mathbf{r}_{Q'}|}\right)$ |

| Punktladung $Q$ vor leitender Kugel (Radius $R$) | Bildladung $Q'=-Q\,R/r$ im Inneren auf derselben radialen Linie, Position $r'=R^2/r$ | Potential außerhalb = Summe realer + Bildladung, $\phi(R)=0$ |

| Linear geladener Draht neben geerdeter Ebene | Spiegel-Draht mit Dichte $-\lambda$ | Feldlinien identisch mit einer Doppelleiter-Anordnung, Kraft per Einheit Länge wie Coulomb-Anziehung |

Weitere Fälle (z. B. Kombination mehrerer Ebenen) erfordern iterative Spiegelungen oder Übergang zu [[Multipolentwicklung (Elektrostatik)]].

---

## 3. Schritt-für-Schritt-Anleitung

1. **Koordinatenwahl:** Ursprung oder Symmetrieachsen auf der leitenden Fläche positionieren.

2. **Reale Ladungen:** Lage, Vorzeichen und Abstände dokumentieren.

3. **Bildladungen erzeugen:**

   - Ebene: Spiegelung an der Fläche, Vorzeichen invertieren (für geerdete Ebene).

   - Kugel: Inversionsabbildung $r' = R^2/r$, $Q'=-Q\,R/r$.

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
  F = -\frac{Q^2}{16\pi\varepsilon_0 a^2}\,\hat{\mathbf{n}},
  $$

  wobei $\hat{\mathbf{n}}$ auf die Ebene zeigt. Die Vorfaktor-$\frac{1}{16\pi}$ stammt aus dem Abstand $2a$ zwischen Ladungen.

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

- Für die Ebene ergibt sich eine radialsymmetrische Verteilung $\sigma(\rho)$ mit hoher Ladungsdichte nahe der Projektion der Punktladung.

---

## 5. Grenzen und Kombinationen

- Funktioniert optimal für Dirichlet-RB. Neumann- oder Robin-Bedingungen erfordern modifizierte (z. B. verteilte) Bildladungen oder zusätzliche Gleichungen.

- Bei mehreren Leitflächen wächst die Anzahl der Bildladungen exponentiell → in diesen Fällen lieber SoV oder numerische Methoden einsetzen.

- Für zeitabhängige Phänomene (z. B. Entelektrisierung) muss die Spiegelmethode mit Relaxationsmodellen aus [[Dielektrika (Elektrostatik)]] kombiniert werden.

---

## 6. Ressourcen & Verweise

- **Notizen:** [[Elektrostatik]], [[Randwertprobleme (Elektrostatik)]], [[Multipolentwicklung (Elektrostatik)]], [[Maxwell-Spannungstensor (Elektrostatik)]], [[Dielektrika (Elektrostatik)]].

- **Material:** Tafelbilder `V6` (Randwertprobleme) und `V7` (Laplace & Multipole) im Ordner `90_Resources`.

- **Literatur:** Griffiths – _Introduction to Electrodynamics_ Kap. 3.2, Jackson – _Classical Electrodynamics_ Kap. 2, MIT OCW 8.07 (Lecture „Method of Images“).

---

## 7. Beispiel: Punktladung vor leitender Kugel

Gegeben: Kugelradius $R$, Punktladung $q$ auf der $z$-Achse bei $r_0>R$.

- Bildladung: $q' = -q \tfrac{R}{r_0}$ bei $r' = \tfrac{R^2}{r_0}$.
- Potential: $\phi(r) = \tfrac{1}{4\pi\varepsilon_0}\left( \tfrac{q}{|\mathbf{r}-r_0\hat{\mathbf{z}}|} + \tfrac{q'}{|\mathbf{r}-r'\hat{\mathbf{z}}|} \right)$.
- Kraft auf Kugel (Anziehung):
  $$
  F = \frac{1}{4\pi\varepsilon_0} \frac{q^2 R}{(r_0^2-R^2)^2}.
  $$
- Oberflächenladungsdichte: $\sigma(\theta) = -\varepsilon_0 E_r(R,\theta)$ aus dem radialen Feld der Bildladung.

## 8. Tabellenblatt: typische Setups

| Geometrie                                            | Bildladungen                                                           | Ergebnisidee                                                                |
| ---------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Punktladung vor leitender Ebene                      | eine Bildladung $-q$ gespiegelt                                        | Feld wie Dipol; Kraft $F = -\tfrac{1}{16\pi\varepsilon_0} \tfrac{q^2}{d^2}$ |
| Punktladung vor isolierender Ebene ($\varepsilon_r$) | skalierte Bildladung $q' = q \tfrac{\varepsilon_r-1}{\varepsilon_r+1}$ | gemischte RB, verwendet Reflektionskoeffizient                              |
| Punktladung vor leitender Kugel                      | $q'=-q R/r_0$ im Zentrum bei $r'=R^2/r_0$                              | siehe Beispiel oben                                                         |
| Parallele Platten (geerdet)                          | unendliche Bildladungsreihe                                            | Potential als Fourier-Reihe, Konvergenz $\propto e^{-n\pi d/L}$             |

## 9. Numerische Validierung (FDM)

1. Domäne als Rechteck/Keil diskretisieren, Gitter $h \lesssim 0.01 R$.
2. Dirichlet-RB auf leitender Fläche ($\phi=0$), Neumann auf Symmetrieachsen.
3. Relaxation (SOR) bis $\|\phi^{(k+1)}-\phi^{(k)}\|_\infty<10^{-6}$.
4. Vergleich: Fehler in $E_r$ an der Oberfläche gegen Bildladungs-Lösung ($<1\%$ für $h<0.01R$).

## 10. Aufgaben- und Ressourcenverweise

- Übungen: [[20_Exercises/HA1/HA1 - Loesung]] (klassische Bildladung), [[20_Exercises/HA8/HA8.md]] (Randwertmix), [[20_Exercises/HA9/Aufgabe28_Loesung]] (Gauge-Bezug).
- Crosslinks: [[Randwertprobleme (Elektrostatik)]], [[Elektrostatik]].

## 11. Skizzen

![[90_Resources/TheoIII -  Tafelbilder/V6-WS25-Randwertprobleme_Elektrostatik.pdf]]
![[90_Resources/TheoIII -  Tafelbilder/V7-WS25-Laplace-Gleichung—Multipolentwicklung.pdf]]

---

## 12. To-Dos

- [x] Vollständig durchgerechnetes Beispiel „Punktladung vor leitender Kugel“ ergänzt (Kraft auf Kugel und Oberflächenladungen).
- [x] Tabellenblatt mit häufigen Bildladungs-Setups erstellt.
- [x] Numerische Validierung (Finite Difference) skizziert.
- [x] Verweise auf relevante Aufgaben in `20_Exercises` angelegt.
- [x] Skizzen aus `V6/V7` eingebettet (PDF-Referenz).

---

_Nutze diese Notiz als Schnellreferenz, wenn Dirichlet-Randflächen über Bildladungen behandelt werden sollen. Dokumentiere eigene Spezialfälle, um sie später in [[Randwertprobleme (Elektrostatik)]] erneut verwenden zu können._
