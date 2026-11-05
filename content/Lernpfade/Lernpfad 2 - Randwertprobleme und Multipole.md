---
title: "Lernpfad 2: Randwertprobleme & Multipole"
description: "Randwertprobleme und Multipolentwicklung lernen: Eindeutigkeitssatz, Spiegelladungen, Legendre-Ansatz, Multipole und Green-Funktionen."
aliases:
  - Navigator - Erweiterte Elektrostatik
tags:
  - lernpfad
---

Wenn Leiter und Grenzflächen ins Spiel kommen, reicht Gauß nicht mehr. Hier lernst du die Standardmethoden, um die Poisson- und Laplace-Gleichung mit Randbedingungen zu lösen.

> [!info] Voraussetzungen
> [[Lernpfad 1 - Elektrostatik|Lernpfad 1]], Legendre-Polynome schadet nicht.

> [!note] Zur Vorlesung WiSe 26/27
> Entspricht Skript **II.E–G** (Randwertprobleme, Bildladungen, Multipolentwicklung). Die Vorlesung begründet Bildladungen über Symmetrien: Spiegelung, Translation, Drehung und Inversion $\mathbf r' = \frac{R^2}{r^2}\mathbf r$ (für die Kugel). Die Green-Funktion hat dort das Vorzeichen $G = -\frac{1}{4\pi\lvert\mathbf r-\mathbf r'\rvert}$. Das Skript normiert die sphärischen Multipolmomente als $q_{\ell m} = \sqrt{\tfrac{4\pi}{2\ell+1}}\int\rho\,r'^\ell\,Y^*_{\ell m}\,d^3r'$; damit wird der Monopolterm einfach $Q/r$.

## Die Schritte

1. **[[Randwertprobleme (Elektrostatik)]]**  
   Dirichlet und Neumann, Eindeutigkeitssatz, welche Methode wann.
2. **[[Spiegelmethode (Elektrostatik)]]**  
   Bildladungen für Ebene und Kugel, induzierte Flächenladung, Kräfte.
3. **[[Legendre-Ansatz und Grenzflächen]]**  
   Separation in Kugelkoordinaten; leitende und dielektrische Kugel im homogenen Feld.
4. **[[Multipolentwicklung (Elektrostatik)]]**  
   Monopol, Dipol, Quadrupol – das Fernfeld beliebiger Ladungsverteilungen.
5. **[[Green-Funktionen (Elektrostatik)]]**  
   Die allgemeine Lösung mit Randterm; Halbraum, Kugel, Zylinder.

## Selbsttest

Hake ab, was du sicher kannst – der Stand bleibt in deinem Browser gespeichert.

- [ ] Ich kann begründen, warum die Lösung der Poisson-Gleichung bei Dirichlet-Randbedingungen eindeutig ist.
- [ ] Ich kann Ort und Größe der Bildladung für eine geerdete Kugel herleiten.
- [ ] Ich weiß, welche Terme $A_\ell r^\ell$ bzw. $B_\ell r^{-(\ell+1)}$ innen und außen erlaubt sind.
- [ ] Ich kann das Innenfeld einer dielektrischen Kugel im homogenen Feld angeben: $E_{\text{in}}=\tfrac{3}{\sg{\varepsilon_r}{\varepsilon}+2}E_0$.
- [ ] Ich weiß, warum das Dipolmoment nur für $Q=0$ unabhängig von der Wahl des Ursprungs ist.
- [ ] Ich kann die Influenzladung $\sigma = \sg{-\varepsilon_0\,\partial_n\phi}{-\tfrac{1}{4\pi}\partial_n\phi}$ einer Punktladung vor einer geerdeten Ebene ausrechnen und zeigen, dass sie insgesamt $-q$ ergibt.
- [ ] Ich weiß, welches Vorzeichen die Green-Funktion in der Vorlesung hat und warum $G$ und Quellterm aus derselben Konvention stammen müssen.

## Häufige Fehler

- **Feld im falschen Gebiet:** Die Bildladungslösung gilt nur im physikalischen Raum, nicht am Ort der Bildladung.
- **Innen/außen vertauscht:** Innen keine $r^{-(\ell+1)}$-Terme (Singularität), außen keine $r^\ell$-Terme (Abfall).
- **Randbedingung an Dielektrika:** Stetig sind $\phi$, $E_t$ und (ohne freie Ladung) $D_n$ – nicht $E_n$.
- **Green-Funktion aus dem falschen System:** SI-Wiki $G_0 = +\frac{1}{4\pi\lvert\mathbf r-\mathbf r'\rvert}$ mit $\nabla^2 G_0=-\delta$, Vorlesung $G = -\frac{1}{4\pi\lvert\mathbf r-\mathbf r'\rvert}$ mit $\Delta G=+\delta$. Gemischt ergibt sich ein falsches Vorzeichen im Potential.
- **Quadrupol-Konventionen:** Spurfrei mit Faktor $\tfrac12$ oder ohne – innerhalb einer Rechnung konsistent bleiben.

> [!tip] Weiter
> Als Nächstes: [[Lernpfad 3 - Magnetostatik und Materie|Lernpfad 3: Magnetostatik & Materie]]
