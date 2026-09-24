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
- [ ] Ich kann das Innenfeld einer dielektrischen Kugel im homogenen Feld angeben: $E_{\text{in}}=\tfrac{3}{\varepsilon_r+2}E_0$.
- [ ] Ich weiß, warum das Dipolmoment nur für $Q=0$ unabhängig von der Wahl des Ursprungs ist.

## Häufige Fehler

- **Feld im falschen Gebiet:** Die Bildladungslösung gilt nur im physikalischen Raum, nicht am Ort der Bildladung.
- **Innen/außen vertauscht:** Innen keine $r^{-(\ell+1)}$-Terme (Singularität), außen keine $r^\ell$-Terme (Abfall).
- **Randbedingung an Dielektrika:** Stetig sind $\phi$, $E_t$ und (ohne freie Ladung) $D_n$ – nicht $E_n$.
- **Quadrupol-Konventionen:** Spurfrei mit Faktor $\tfrac12$ oder ohne – innerhalb einer Rechnung konsistent bleiben.

> [!tip] Weiter
> Als Nächstes: [[Lernpfad 3 - Magnetostatik und Materie|Lernpfad 3: Magnetostatik & Materie]]
