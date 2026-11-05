---
title: "Lernpfad 1: Elektrostatik"
description: "Elektrostatik lernen in 9 Schritten: von Einheitensystemen und Vektoranalysis über Gauß und Potential bis zu Kapazität, Feldenergie, Variationsprinzip und Spannungstensor."
aliases:
  - Navigator - Elektrostatik
tags:
  - lernpfad
---

Der Einstieg in die Elektrodynamik. Am Ende kannst du Felder symmetrischer Ladungsverteilungen berechnen, Kapazitäten herleiten und Kräfte aus Feldern bestimmen.

> [!info] Voraussetzungen
> Vektorrechnung und Mehrfachintegrale aus der Analysis.

> [!note] Zur Vorlesung WiSe 26/27
> Entspricht den Skript-Kapiteln **I** (Einführung, Einheitensysteme, Vektoranalysis) und **II.A–D** (Feldgleichungen, Potential, Coulombkraft, Variationsprinzip). Die Vorlesung rechnet im Gauß-System; die Formeln auf den verlinkten Seiten lassen sich oben umschalten.

## Die Schritte

1. **[[Einheitensysteme]]**  
   SI, Gauß und Heaviside-Lorentz; wie du SI-Formeln ins Gauß-System der Vorlesung übersetzt.
2. **[[Vektoranalysis]]**  
   Gradient, Divergenz, Rotation in Kugel- und Zylinderkoordinaten; die Sätze von Gauß und Stokes.
3. **[[Flächen- und Volumenelemente – Leitfaden]]**  
   $dA$ und $dV$ sicher aufstellen, inklusive Jacobi-Faktor.
4. **[[Elektrostatik - Lernseite (Grundlagen)]]**  
   Coulomb, Gaußsches Gesetz, Potential, Poisson-Gleichung – mit durchgerechneten Beispielen.
5. **[[Elektrostatik]]**  
   Überblick, Spickzettel und welche Methode zu welchem Aufgabentyp passt.
6. **[[Energie und Kapazität in der Elektrostatik]]**  
   Feldenergie, Kapazität und Kapazitätsmatrix.
7. **[[Kugelkondensator]]**  
   Standardherleitung komplett – danach dasselbe für den [[Zylinderkondensator]].
8. **[[Variationsprinzip (Elektrostatik)]]**  
   Die Poisson-Gleichung als Minimum eines Energiefunktionals (Skript II.D).
9. **[[Maxwell-Spannungstensor (Elektrostatik)]]**  
   Kräfte direkt aus den Feldern berechnen.

## Selbsttest

Hake ab, was du sicher kannst – der Stand bleibt in deinem Browser gespeichert.

- [ ] Ich kann das Feld einer homogen geladenen Kugel innen und außen mit dem Gaußschen Gesetz herleiten.
- [ ] Ich weiß, warum aus $\nabla\times\mathbf E=0$ ein Potential mit $\mathbf E=-\nabla\phi$ folgt.
- [ ] Ich kann die Kapazität von Kugel- und Zylinderkondensator ohne Nachschlagen herleiten.
- [ ] Ich kann die Feldenergie auf zwei Arten berechnen ($\tfrac12\int\rho\phi$ und $\sg{\tfrac{\varepsilon_0}{2}}{\tfrac{1}{8\pi}}\int E^2$).
- [ ] Ich kann den Druck $\sg{\sigma^2/(2\varepsilon_0)}{2\pi\sigma^2}$ auf eine Leiteroberfläche begründen.
- [ ] Ich kann eine SI-Formel ins Gauß-System übersetzen, z. B. $\sg{\frac{Q}{4\pi\varepsilon_0 r^2}}{\frac{Q}{r^2}}$ für das Feld einer Punktladung, und weiß, warum dabei die Kraft gleich bleibt.
- [ ] Ich kann aus dem Energiefunktional $W[\phi]$ durch Variation die Poisson-Gleichung herleiten.

## Häufige Fehler

- **Gauß ohne Symmetrie:** Das Gesetz gilt immer, liefert $E$ aber nur, wenn $E$ auf der Gauß-Fläche konstant ist.
- **Vorzeichen:** $\phi(b)-\phi(a)=-\int_a^b\mathbf E\cdot d\mathbf l$ – Integrationsrichtung beachten.
- **Jacobi-Faktor vergessen:** $r^2\sin\theta$ bzw. $\rho$ gehören ins Volumenintegral.
- **Einheitensysteme gemischt:** SI-Zahlenwerte (z. B. $e = 1{,}6\cdot10^{-19}$ C) in Gauß-Formeln eingesetzt. Formeln und Zahlen immer aus demselben System nehmen, siehe [[Einheitensysteme]].
- **Punktladungen und Feldenergie:** $\sg{\tfrac{\varepsilon_0}{2}}{\tfrac{1}{8\pi}}\int E^2$ enthält die (divergente) Selbstenergie, die Summe über Paare nicht.

> [!tip] Weiter
> Als Nächstes: [[Lernpfad 2 - Randwertprobleme und Multipole|Lernpfad 2: Randwertprobleme & Multipole]]
