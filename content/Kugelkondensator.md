---
aliases: ["Kugelkondensator"]
tags: [theo-iii, elektrostatik, kapazitaet, herleitung]
date: 2026-01-06
---

# Kugelkondensator

Konzentrische Kugelschalen mit Radien $R_1<R_2$, homogenes Medium $\varepsilon=\varepsilon_0\varepsilon_r$. Symmetrie: kugelsymmetrisch, nur radiale Abhängigkeit.

## Feld und Potential (Herleitung)

### Gauss-Fläche
- Kugelradius $r$ mit $R_1<r<R_2$.
- Gauss: $\oint \mathbf E\cdot d\mathbf A = E_r(r) (4\pi r^2) = Q/\varepsilon$.

Daraus
$$
E_r(r)=\frac{Q}{4\pi \varepsilon r^2}, \quad R_1<r<R_2.
$$

### Potential
$$
\phi(r)-\phi(R_2) = -\int_{R_2}^r E_r(r')\,dr' = -\frac{Q}{4\pi\varepsilon}\int_{R_2}^r \frac{dr'}{r'^2}
= \frac{Q}{4\pi\varepsilon}\Bigl(\frac{1}{r}-\frac{1}{R_2}\Bigr).
$$
Setze Bezug $\phi(R_2)=0$:
$$
\phi(r)=\frac{Q}{4\pi\varepsilon}\Bigl(\frac{1}{r}-\frac{1}{R_2}\Bigr).
$$

### Spannung und Kapazität
$$
V=\phi(R_1)-\phi(R_2)=\frac{Q}{4\pi\varepsilon}\Bigl(\frac{1}{R_1}-\frac{1}{R_2}\Bigr),
\qquad
C=\frac{Q}{V}=\frac{4\pi\varepsilon}{\tfrac{1}{R_1}-\tfrac{1}{R_2}}.
$$

### Spezialfälle / Grenzwerte
- Isolierte Kugel ($R_2\to\infty$): $C=4\pi\varepsilon R_1$.
- Dünne Schale $R_2\to R_1$: $C\approx 4\pi\varepsilon R_1^2/(R_2-R_1)$.

## Energie

Energiedichte $u=\tfrac12 \varepsilon E^2$. Gesamtenergie im Bereich $R_1<r<R_2$:
$$
W = \int_{R_1}^{R_2}\!4\pi r^2 dr\; \frac{\varepsilon}{2}\left(\frac{Q}{4\pi\varepsilon r^2}\right)^2
= \frac{Q^2}{8\pi\varepsilon}\Bigl(\frac{1}{R_1}-\frac{1}{R_2}\Bigr) = \frac{1}{2} C V^2.
$$

## Randbedingungen / Potentialform
- Allgemeine Laplace-Lösung (kugelsymmetrisch): $\phi(r)=A+B/r$.
- Randwerte $\phi(R_1)=V_1$, $\phi(R_2)=V_2$ liefern $A,B$; obige Formeln folgen bei $V=V_1-V_2$.

## Material/Dielektrikum (kurz)
- Homogen: ersetze $\varepsilon_0$ durch $\varepsilon=\varepsilon_0\varepsilon_r$.
- Mehrschicht (radial): setze $D_r=\varepsilon(r)E_r$, integriere $U=\int_{R_1}^{R_2} E(r)dr$ und nutze $Q=4\pi r^2 D_r$ → $C=Q/V$.

## Aufgaben-Anker
- Passe zu Klausurteil in [[90_Resources/Tagesplan - Tag 6#Block B — Kugelkondensator (50–60 min)]].
- Verwandte Übung: [[20_Exercises/HA1/HA1 - Loesung]] (Kugel), eigene Variation mit Dielektrikum.

## Backlinks
- [[Energie und Kapazität in der Elektrostatik]]
- [[Elektrostatik - Lernseite (Grundlagen)]]
- [[Randwertprobleme (Elektrostatik)]]
- [[Dielektrika (Elektrostatik)]]
