---
title: "Lernpfad 3: Magnetostatik & Materie"
description: "Magnetostatik und Felder in Materie lernen: Biot-Savart, Ampère, Vektorpotential, Induktivität, Dielektrika und Magnetisierung."
aliases:
  - Navigator - Material und Energie
tags:
  - lernpfad
---

Stationäre Ströme erzeugen Magnetfelder – und Materie reagiert auf Felder. Dieser Pfad führt durch die Magnetostatik und behandelt dann elektrische und magnetische Felder in Materie parallel.

> [!info] Voraussetzungen
> [[Lernpfad 1 - Elektrostatik|Lernpfad 1]].

> [!note] Zur Vorlesung WiSe 26/27
> Die Schritte 1–4 entsprechen Skript **III** (Coulomb-Eichung, Biot-Savart, Kontinuitätsgleichung, Lorentzkraft). Die Vorlesung führt die Coulomb-Eichung schon hier ein, das Wiki behandelt sie ausführlich unter [[Coulomb-Eichung (Elektrodynamik)]]. **Felder in Materie (Schritte 5–6) kommen in der Vorlesung erst später**; diese Seiten sind noch nur in SI geschrieben und zeigen im Gauß-Modus eine Ersetzungstabelle.

## Die Schritte

1. **[[Magnetostatik - Grundgleichungen]]**  
   Biot–Savart, Ampèresches Gesetz, $\nabla\cdot\mathbf B=0$, typische Felder.
2. **[[Stromverteilungen und Magnetisches Vektorpotential]]**  
   Das Vektorpotential $\mathbf A$ und die Coulomb-Eichung.
3. **[[Magnetostatik - Grundgleichungen#Kontinuitätsgleichung und Lorentzkraft|Kontinuitätsgleichung und Lorentzkraft]]**  
   Ladungserhaltung $\partial_t\rho + \nabla\cdot\mathbf J = 0$ und die Kraft $\mathbf F = q(\mathbf E + \sg{\mathbf v}{\tfrac{\mathbf v}{c}}\times\mathbf B)$.
4. **[[Induktivität und magnetische Energie]]**  
   Selbst- und Gegeninduktivität, $W=\tfrac12 LI^2$.
5. **[[Dielektrika (Elektrostatik)]]**  
   Polarisation, $\mathbf D$, gebundene Ladungen, Entelektrisierung – Überblick in [[Elektrostatik in Materie]].
6. **[[Magnetische Felder in Materie]]**  
   Magnetisierung, $\mathbf H$, gebundene Ströme – Details in [[Materialgesetze Magnetik]].

## Selbsttest

Hake ab, was du sicher kannst – der Stand bleibt in deinem Browser gespeichert.

- [ ] Ich kann $\mathbf B$ eines unendlich langen Drahts und einer langen Spule mit dem Ampèreschen Gesetz herleiten.
- [ ] Ich weiß, warum $\nabla\cdot\mathbf B=0$ die Existenz eines Vektorpotentials garantiert.
- [ ] Ich kann die Induktivität einer langen Spule über den Fluss und über die Feldenergie berechnen.
- [ ] Ich kann gebundene Ladungen ($-\nabla\cdot\mathbf P$, $\mathbf P\cdot\mathbf n$) und gebundene Ströme ($\sg{}{c\,}\nabla\times\mathbf M$, $\sg{}{c\,}\mathbf M\times\mathbf n$) bestimmen.
- [ ] Ich weiß, welche Komponenten von $\mathbf E$, $\mathbf D$, $\mathbf B$, $\mathbf H$ an Grenzflächen stetig sind.
- [ ] Ich kann begründen, warum in der Magnetostatik $\nabla\cdot\mathbf J = 0$ gelten muss.
- [ ] Ich kann zeigen, dass sich zwei parallel bewegte Ladungen magnetisch anziehen und der Effekt gegenüber Coulomb um $v^2/c^2$ kleiner ist.

## Häufige Fehler

- **$c$ vergessen:** Im Gauß-System trägt jeder magnetische Term ein $1/c$: $\mathbf A = \frac1c\int\frac{\mathbf J}{\lvert\mathbf r-\mathbf r'\rvert}$, $B = \frac{2I}{c\,r}$, $\mathbf F = q\,\tfrac{\mathbf v}{c}\times\mathbf B$.
- **$\mathbf H$ und $\mathbf B$ verwechselt:** Das Ampèresche Gesetz für $\mathbf H$ enthält nur freie Ströme.
- **Stetigkeit:** $D_t$ und $H_n$ springen im Allgemeinen – stetig sind $D_n$ (ohne freie Ladung), $E_t$, $B_n$, $H_t$ (ohne freien Flächenstrom).
- **Richtung von $\mathbf M\times\mathbf n$:** $\mathbf n$ zeigt aus dem Material heraus.
- **Entelektrisierung ≠ Entladung:** gemeint ist das Gegenfeld der Polarisationsladungen.

> [!tip] Weiter
> Als Nächstes: [[Lernpfad 4 - Elektrodynamik und Wellen|Lernpfad 4: Elektrodynamik & Wellen]]
