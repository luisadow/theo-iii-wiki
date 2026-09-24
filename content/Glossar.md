---
title: "Glossar Elektrodynamik"
description: "Glossar Elektrodynamik: die wichtigsten Begriffe von Bildladung bis Viererpotential in je zwei, drei Sätzen erklärt, mit Link zur ausführlichen Seite."
aliases:
  - Glossar
tags:
  - glossar
---

Die wichtigsten Begriffe in je zwei, drei Sätzen. Der Pfeil führt zur Seite mit Herleitung und Beispielen; die [[Formelsammlung]] fasst die zugehörigen Formeln zusammen.

## A–D

### Ampèresches Gesetz

Das Linienintegral von $\mathbf B$ um eine geschlossene Kurve ist gleich $\mu_0$ mal dem durchfließenden Strom: $\oint\mathbf B\cdot d\mathbf l = \mu_0 I$. Wie das Gaußsche Gesetz liefert es das Feld direkt nur bei hoher Symmetrie. → [[Magnetostatik - Grundgleichungen]]

### Bildladung

Fiktive Ladung außerhalb des betrachteten Gebiets, die so gewählt wird, dass die Randbedingung (z. B. $\phi=0$ auf einem geerdeten Leiter) automatisch erfüllt ist. Nach dem Eindeutigkeitssatz ist das so gefundene Potential die richtige Lösung. → [[Spiegelmethode (Elektrostatik)]]

### Biot–Savart-Gesetz

Berechnet das Magnetfeld einer stationären Stromverteilung durch Aufsummieren der Beiträge aller Stromelemente – das magnetische Gegenstück zum Coulomb-Integral. → [[Magnetostatik - Grundgleichungen]]

### Coulomb-Eichung

Eichbedingung $\nabla\cdot\mathbf A = 0$. Das Skalarpotential erfüllt dann zu jeder Zeit die Poisson-Gleichung, das Vektorpotential wird nur vom transversalen Strom getrieben. → [[Coulomb-Eichung (Elektrodynamik)]]

### Dielektrikum

Isolator, dessen Moleküle sich im Feld polarisieren. Die gebundenen Ladungen schwächen das Feld im Inneren; in linearen Medien wird $\varepsilon_0$ durch $\varepsilon = \varepsilon_0\varepsilon_r$ ersetzt. → [[Dielektrika (Elektrostatik)]]

### Dipolmoment

Maß für die Ladungstrennung, $\mathbf p = \int\rho\,\mathbf r\,d^3r$. Bestimmt das Fernfeld einer neutralen Ladungsverteilung ($\phi\propto 1/r^2$). Magnetisch entsprechend $\mathbf m = \tfrac12\int\mathbf r\times\mathbf J\,d^3r$. → [[Multipolentwicklung (Elektrostatik)]]

### Dirichlet-Randbedingung

Auf dem Rand ist der Wert des Potentials vorgegeben, z. B. $\phi=\text{const}$ auf einem Leiter. Zusammen mit der Poisson-Gleichung legt sie die Lösung eindeutig fest. → [[Randwertprobleme (Elektrostatik)]]

## E–H

### Eichtransformation

Umformung $\mathbf A\to\mathbf A+\nabla\chi$, $\phi\to\phi-\partial_t\chi$, die die Felder $\mathbf E$ und $\mathbf B$ nicht ändert. Die Freiheit bei der Wahl von $\chi$ nutzt man, um die Gleichungen zu vereinfachen. → [[Lernpfad 5 - Potentiale, Eichungen und Relativität|Lernpfad 5]] · [[Lorenz-Eichung (Elektrodynamik)]]

### Eindeutigkeitssatz

Die Lösung der Poisson-Gleichung ist durch die Ladungsverteilung und Dirichlet- oder Neumann-Randbedingungen eindeutig bestimmt (bei Neumann bis auf eine Konstante). Deshalb darf man Lösungen „raten“, z. B. mit Bildladungen. → [[Randwertprobleme (Elektrostatik)]]

### Entelektrisierung

Die Polarisationsladungen an der Oberfläche eines Körpers erzeugen im Inneren ein Gegenfeld, das das äußere Feld abschwächt. Für Ellipsoide gilt $\mathbf E_{\text{in}} = \mathbf E_0 - \mathsf N\mathbf P/\varepsilon_0$ mit dem Entelektrisierungsfaktor $N$ (Kugel $1/3$). → [[Dielektrika (Elektrostatik)]]

### Feldenergie

Die Energie einer Ladungsanordnung sitzt im Feld, mit der Dichte $u = \tfrac{\varepsilon_0}{2}E^2 + \tfrac{1}{2\mu_0}B^2$. → [[Energie und Kapazität in der Elektrostatik]]

### Gaußsches Gesetz

Der Fluss von $\mathbf E$ durch eine geschlossene Fläche ist die eingeschlossene Ladung durch $\varepsilon_0$. Bei Kugel-, Zylinder- oder Ebenensymmetrie liefert es das Feld in einer Zeile. → [[Elektrostatik - Lernseite (Grundlagen)]]

### Gebundene Ladungen und Ströme

Ladungen ($\rho_b = -\nabla\cdot\mathbf P$, $\sigma_b = \mathbf P\cdot\mathbf n$) und Ströme ($\mathbf J_b = \nabla\times\mathbf M$, $\mathbf K_b = \mathbf M\times\mathbf n$), die durch Polarisation bzw. Magnetisierung von Materie entstehen, im Gegensatz zu freien Ladungen und Strömen. → [[Elektrostatik in Materie]]

### Green-Funktion

Das Potential einer Einheits-Punktladung unter gegebenen Randbedingungen. Kennt man sie, erhält man die Lösung für jede Ladungsverteilung als Integral. → [[Green-Funktionen (Elektrostatik)]]

### Helmholtz-Zerlegung

Jedes (hinreichend schnell abfallende) Vektorfeld lässt sich eindeutig in einen wirbelfreien (longitudinalen) und einen quellenfreien (transversalen) Anteil zerlegen. → [[Helmholtz-Zerlegung (Vektorfelder)]]

## I–L

### Induktivität

Verhältnis von magnetischem Fluss zu Strom, $L = \Phi/I$. Bestimmt die Induktionsspannung $-L\,dI/dt$ und die magnetische Energie $\tfrac12 LI^2$. → [[Induktivität und magnetische Energie]]

### Kapazität

Verhältnis von Ladung zu Spannung, $C = Q/U$. Hängt nur von Geometrie und Material ab. → [[Energie und Kapazität in der Elektrostatik]]

### Kontinuitätsgleichung

$\partial_t\rho + \nabla\cdot\mathbf J = 0$: Ladung kann nicht entstehen oder verschwinden, nur fließen. Sie folgt aus den Maxwell-Gleichungen – aber nur mit dem Verschiebungsstrom. → [[Elektrodynamik - Dynamik und Wellen]]

### Laplace- und Poisson-Gleichung

$\nabla^2\phi = -\rho/\varepsilon_0$ (Poisson) bzw. $\nabla^2\phi = 0$ im ladungsfreien Raum (Laplace). Die zentrale Gleichung der Elektrostatik. → [[Elektrostatik - Lernseite (Grundlagen)]]

### Legendre-Polynome

Die Winkelfunktionen $P_\ell(\cos\theta)$, die bei der Separation der Laplace-Gleichung in Kugelkoordinaten ohne $\varphi$-Abhängigkeit auftreten. Sie sind orthogonal und bilden eine Basis. → [[Legendre-Ansatz und Grenzflächen]]

### Lenzsche Regel

Der induzierte Strom ist so gerichtet, dass er der Flussänderung entgegenwirkt – das Minuszeichen im Induktionsgesetz. → [[Faraday-Induktion (Elektrodynamik)]]

### Lorentz-Transformation

Die Koordinatentransformation zwischen Inertialsystemen, unter der die Lichtgeschwindigkeit konstant und die Maxwell-Gleichungen forminvariant bleiben. → [[Relativität – Lorentz-Transformation]]

### Lorenz-Eichung

Eichbedingung $\nabla\cdot\mathbf A + \tfrac{1}{c^2}\partial_t\phi = 0$. Beide Potentiale erfüllen dann entkoppelte Wellengleichungen; kovariant geschrieben $\partial_\mu A^\mu = 0$. → [[Lorenz-Eichung (Elektrodynamik)]]

## M–P

### Magnetisierung

Magnetisches Dipolmoment pro Volumen, $\mathbf M$. Zusammen mit $\mathbf B = \mu_0(\mathbf H+\mathbf M)$ beschreibt sie Magnetfelder in Materie. → [[Magnetische Felder in Materie]]

### Maxwell-Spannungstensor

Tensor $T_{ij}$, dessen Oberflächenintegral die Kraft auf alle eingeschlossenen Ladungen und Ströme liefert – Kräfte aus Feldern, ohne die Ladungen einzeln zu kennen. → [[Maxwell-Spannungstensor (Elektrostatik)]]

### Minkowski-Raum

Die vierdimensionale Raumzeit mit Metrik $\eta = \operatorname{diag}(1,-1,-1,-1)$, in der die spezielle Relativität am einfachsten aussieht. → [[Minkowski-Raum und Vierervektoren]]

### Multipolentwicklung

Entwicklung des Potentials einer lokalisierten Ladungsverteilung nach Potenzen von $1/r$: Monopol, Dipol, Quadrupol, … Weit weg dominiert der erste nichtverschwindende Term. → [[Multipolentwicklung (Elektrostatik)]]

### Neumann-Randbedingung

Auf dem Rand ist die Normalableitung $\partial\phi/\partial n$ vorgegeben, also die Normalkomponente des Feldes. → [[Randwertprobleme (Elektrostatik)]]

### Polarisation

Elektrisches Dipolmoment pro Volumen, $\mathbf P$. In linearen Medien $\mathbf P = \varepsilon_0\chi_e\mathbf E$. → [[Dielektrika (Elektrostatik)]]

### Poynting-Vektor

$\mathbf S = \tfrac{1}{\mu_0}\mathbf E\times\mathbf B$ gibt Richtung und Stärke des Energieflusses im Feld an (Leistung pro Fläche). → [[Impulsbilanz und Poynting-Vektor]]

## R–Z

### Retardierte Potentiale

Lösungen der Wellengleichungen für $\phi$ und $\mathbf A$, bei denen jede Quelle zur früheren Zeit $t - \lvert\mathbf r-\mathbf r'\rvert/c$ zählt: Änderungen breiten sich mit Lichtgeschwindigkeit aus. → [[Lorenz-Eichung (Elektrodynamik)]]

### Suszeptibilität

Proportionalitätsfaktor zwischen Feld und Materialantwort: $\mathbf P = \varepsilon_0\chi_e\mathbf E$, $\mathbf M = \chi_m\mathbf H$. Es gilt $\varepsilon_r = 1+\chi_e$ und $\mu_r = 1+\chi_m$. → [[Materialgesetze Magnetik]]

### Vektorpotential

Feld $\mathbf A$ mit $\mathbf B = \nabla\times\mathbf A$. Existiert, weil $\nabla\cdot\mathbf B = 0$ gilt, und ist nur bis auf einen Gradienten bestimmt (Eichfreiheit). → [[Stromverteilungen und Magnetisches Vektorpotential]]

### Verschiebungsfeld

$\mathbf D = \varepsilon_0\mathbf E + \mathbf P$. Seine Quellen sind nur die freien Ladungen, $\nabla\cdot\mathbf D = \rho_{\text{frei}}$. → [[Dielektrika (Elektrostatik)]]

### Verschiebungsstrom

Der Term $\mu_0\varepsilon_0\,\partial_t\mathbf E$ im Ampère-Maxwell-Gesetz. Ohne ihn widerspräche das Ampèresche Gesetz der Ladungserhaltung, und es gäbe keine elektromagnetischen Wellen. → [[Elektrodynamik - Dynamik und Wellen]]

### Viererpotential

$A^\mu = (\phi/c,\,\mathbf A)$ fasst Skalar- und Vektorpotential zu einem Vierervektor zusammen; in Lorenz-Eichung gilt $\Box A^\mu = -\mu_0 J^\mu$. → [[Minkowski-Raum und Vierervektoren]]
