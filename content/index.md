---
title: "Theo III Elektrodynamik – Lernwiki (TU Berlin)"
description: "Elektrodynamik verständlich: Zusammenfassungen, Formeln und Herleitungen zu Theo III (TU Berlin) – von Elektrostatik bis Relativität."
---

<section class="hero">
  <p class="hero-eyebrow">TU Berlin · Theoretische Physik III</p>
  <h1 class="hero-title">Theo III: Elektrodynamik,<br/>verständlich sortiert.</h1>
  <p class="hero-lead">Zusammenfassungen, Formeln und durchgerechnete Herleitungen zur theoretischen Elektrodynamik – in der Reihenfolge der Vorlesung <strong>Theo III</strong> an der TU Berlin, fachlich durchgesehen und für alle, die das Thema lernen wollen.</p>
  <div class="hero-actions">
    <a class="btn btn-primary internal" href="./01-Grundlagen/Vektoranalysis">Mit den Grundlagen starten</a>
    <a class="btn internal" href="./Lernpfade/">Lernpfade ansehen</a>
    <a class="btn internal" href="./Formelsammlung">Formelsammlung</a>
  </div>
</section>

<div class="topic-grid">
  <a class="topic-card internal" href="./01-Grundlagen/"><span class="topic-num">01</span><span class="topic-name">Grundlagen</span><span class="topic-lec">2 Seiten</span><span class="topic-desc">Operatoren in Kugel- und Zylinderkoordinaten, Integralsätze, Flächenelemente</span></a>
  <a class="topic-card internal" href="./02-Elektrostatik/"><span class="topic-num">02</span><span class="topic-name">Elektrostatik</span><span class="topic-lec">6 Seiten</span><span class="topic-desc">Gauß, Potential, Feldenergie, Kapazität, Maxwell-Spannungstensor</span></a>
  <a class="topic-card internal" href="./03-Randwertprobleme/"><span class="topic-num">03</span><span class="topic-name">Randwert&shy;probleme</span><span class="topic-lec">5 Seiten</span><span class="topic-desc">Spiegelladungen, Green-Funktionen, Legendre-Ansatz, Multipole</span></a>
  <a class="topic-card internal" href="./04-Materie/"><span class="topic-num">04</span><span class="topic-name">Felder in Materie</span><span class="topic-lec">4 Seiten</span><span class="topic-desc">Dielektrika, Entelektrisierung, Magnetisierung, Materialgesetze</span></a>
  <a class="topic-card internal" href="./05-Magnetostatik/"><span class="topic-num">05</span><span class="topic-name">Magnetostatik</span><span class="topic-lec">3 Seiten</span><span class="topic-desc">Biot–Savart, Ampère, Vektorpotential, Induktivität</span></a>
  <a class="topic-card internal" href="./06-Elektrodynamik/"><span class="topic-num">06</span><span class="topic-name">Elektrodynamik</span><span class="topic-lec">7 Seiten</span><span class="topic-desc">Induktion, Maxwell-Gleichungen, Eichungen, Wellen, Poynting</span></a>
  <a class="topic-card internal" href="./07-Relativität/"><span class="topic-num">07</span><span class="topic-name">Relativität</span><span class="topic-lec">2 Seiten</span><span class="topic-desc">Lorentz-Transformation, Minkowski-Raum, Vierervektoren</span></a>
  <a class="topic-card topic-card-paths internal" href="./Lernpfade/"><span class="topic-num">→</span><span class="topic-name">Lernpfade</span><span class="topic-lec">5 Pfade</span><span class="topic-desc">Schritt für Schritt mit Selbsttest und typischen Fehlern</span></a>
</div>

## Alles in vier Gleichungen

Der ganze Kurs läuft auf die Maxwell-Gleichungen hinaus. Statik, Materie, Induktion und Wellen sind Spezialfälle oder Folgerungen davon:

$$
\begin{aligned}
\nabla\cdot\mathbf E &= \frac{\rho}{\varepsilon_0} &\qquad \nabla\times\mathbf E &= -\partial_t\mathbf B \\[4pt]
\nabla\cdot\mathbf B &= 0 &\qquad \nabla\times\mathbf B &= \mu_0\mathbf J + \mu_0\varepsilon_0\,\partial_t\mathbf E
\end{aligned}
$$

## Worum es geht

Dieses Wiki behandelt die klassische Elektrodynamik auf dem Niveau eines Physik-Bachelors: Elektro- und Magnetostatik, Randwertprobleme, Felder in Materie, Maxwell-Gleichungen, Eichungen und spezielle Relativität. Es ist bei der Vorbereitung auf die Prüfung in **Theoretischer Physik III** an der **TU Berlin** entstanden, eignet sich aber für jede Elektrodynamik-Vorlesung. Es ersetzt kein Lehrbuch, soll dir aber schnell helfen, wenn du bei einem Thema hängst: jede Seite fasst Definitionen, zentrale Formeln und typische Rechenwege zusammen und verlinkt verwandte Themen.

> [!warning] Keine offizielle Quelle
> Studentische Notizen – fachlich durchgesehen, trotzdem können Fehler drin sein. Im Zweifel gelten Vorlesung und Lehrbuch. Fehler oder Unklarheiten gern [als Issue melden](https://github.com/luisadow/theo-iii-wiki/issues/new).

## So benutzt du das Wiki

- **Suche** mit <kbd>Strg</kbd>/<kbd>⌘</kbd> + <kbd>K</kbd> findet Begriffe auf allen Seiten.
- **[[Lernpfade/index|Lernpfade]]** führen Schritt für Schritt durch einen Themenblock, mit Selbsttest zum Abhaken.
- **[[Formelsammlung]]**: alle wichtigen Formeln auf einer Seite, jeweils mit Link zur Herleitung.
- **Hover** über einen Link zeigt eine Vorschau, rechts findest du Inhaltsverzeichnis, Graph und Rückverweise.

## Alle Seiten nach Themen

Alles Wichtige kompakt: [[Formelsammlung|Formelsammlung Elektrodynamik]].

### Mathematische Grundlagen

- [[Vektoranalysis]]: Operatoren, Koordinatensysteme, Integralsätze
- [[Flächen- und Volumenelemente – Leitfaden]]

### Elektrostatik

- Einstieg: [[Elektrostatik - Lernseite (Grundlagen)]] · Überblick & Spickzettel: [[Elektrostatik]]
- [[Energie und Kapazität in der Elektrostatik]] mit [[Kugelkondensator]] und [[Zylinderkondensator]]
- [[Maxwell-Spannungstensor (Elektrostatik)]]

### Randwertprobleme & Multipole

- [[Randwertprobleme (Elektrostatik)]] · [[Spiegelmethode (Elektrostatik)]] · [[Green-Funktionen (Elektrostatik)]]
- [[Legendre-Ansatz und Grenzflächen]] · [[Multipolentwicklung (Elektrostatik)]]

### Elektrostatik in Materie

- [[Elektrostatik in Materie]] (Überblick) · [[Dielektrika (Elektrostatik)]] inkl. Entelektrisierung

### Magnetostatik & Materie

- [[Magnetostatik - Grundgleichungen]] · [[Stromverteilungen und Magnetisches Vektorpotential]]
- [[Magnetische Felder in Materie]] · [[Materialgesetze Magnetik]]

### Induktion, Maxwell-Gleichungen, Eichungen

- [[Faraday-Induktion (Elektrodynamik)]] · [[Induktivität und magnetische Energie]]
- [[Elektrodynamik - Dynamik und Wellen]] · [[Helmholtz-Zerlegung (Vektorfelder)]]
- Eichungen: [[Coulomb-Eichung (Elektrodynamik)|Coulomb]] · [[Lorenz-Eichung (Elektrodynamik)|Lorenz]] · [[Poincaré-Eichung (Elektrodynamik)|Poincaré]]

### Impulsbilanz & Relativität

- [[Impulsbilanz und Poynting-Vektor]]
- [[Relativität – Lorentz-Transformation]] · [[Minkowski-Raum und Vierervektoren]]

## Literatur

- D. J. Griffiths, _Introduction to Electrodynamics_: gut lesbar, Kap. 1–12
- J. D. Jackson, _Classical Electrodynamics_: Standardwerk, v. a. für Randwertprobleme und Green-Funktionen
