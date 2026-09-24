---
title: "Lernpfad 1: Elektrostatik"
description: "Elektrostatik lernen in 7 Schritten: von der Vektoranalysis über Gauß und Potential bis zu Kapazität, Feldenergie und Spannungstensor."
aliases:
  - Navigator - Elektrostatik
tags:
  - lernpfad
---

Der Einstieg in die Elektrodynamik. Am Ende kannst du Felder symmetrischer Ladungsverteilungen berechnen, Kapazitäten herleiten und Kräfte aus Feldern bestimmen.

> [!info] Voraussetzungen
> Vektorrechnung und Mehrfachintegrale aus der Analysis.

## Die Schritte

1. **[[Vektoranalysis]]**  
   Gradient, Divergenz, Rotation in Kugel- und Zylinderkoordinaten; die Sätze von Gauß und Stokes.
2. **[[Flächen- und Volumenelemente – Leitfaden]]**  
   $dA$ und $dV$ sicher aufstellen, inklusive Jacobi-Faktor.
3. **[[Elektrostatik - Lernseite (Grundlagen)]]**  
   Coulomb, Gaußsches Gesetz, Potential, Poisson-Gleichung – mit durchgerechneten Beispielen.
4. **[[Elektrostatik]]**  
   Überblick, Spickzettel und welche Methode zu welchem Aufgabentyp passt.
5. **[[Energie und Kapazität in der Elektrostatik]]**  
   Feldenergie, Kapazität und Kapazitätsmatrix.
6. **[[Kugelkondensator]]**  
   Standardherleitung komplett – danach dasselbe für den [[Zylinderkondensator]].
7. **[[Maxwell-Spannungstensor (Elektrostatik)]]**  
   Kräfte direkt aus den Feldern berechnen.

## Selbsttest

Hake ab, was du sicher kannst – der Stand bleibt in deinem Browser gespeichert.

- [ ] Ich kann das Feld einer homogen geladenen Kugel innen und außen mit dem Gaußschen Gesetz herleiten.
- [ ] Ich weiß, warum aus $\nabla\times\mathbf E=0$ ein Potential mit $\mathbf E=-\nabla\phi$ folgt.
- [ ] Ich kann die Kapazität von Kugel- und Zylinderkondensator ohne Nachschlagen herleiten.
- [ ] Ich kann die Feldenergie auf zwei Arten berechnen ($\tfrac12\int\rho\phi$ und $\tfrac{\varepsilon_0}{2}\int E^2$).
- [ ] Ich kann den Druck $\sigma^2/(2\varepsilon_0)$ auf eine Leiteroberfläche begründen.

## Häufige Fehler

- **Gauß ohne Symmetrie:** Das Gesetz gilt immer, liefert $E$ aber nur, wenn $E$ auf der Gauß-Fläche konstant ist.
- **Vorzeichen:** $\phi(b)-\phi(a)=-\int_a^b\mathbf E\cdot d\mathbf l$ – Integrationsrichtung beachten.
- **Jacobi-Faktor vergessen:** $r^2\sin\theta$ bzw. $\rho$ gehören ins Volumenintegral.
- **Punktladungen und Feldenergie:** $\tfrac{\varepsilon_0}{2}\int E^2$ enthält die (divergente) Selbstenergie, die Summe über Paare nicht.

> [!tip] Weiter
> Als Nächstes: [[Lernpfad 2 - Randwertprobleme und Multipole|Lernpfad 2: Randwertprobleme & Multipole]]
