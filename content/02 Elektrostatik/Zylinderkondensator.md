---
description: "Zylinderkondensator (Koaxialkabel) Herleitung: Feld, Potential, Kapazität C = 2πεL/ln(b/a), Energie, Grenzfall dünner Spalt."
title: "Zylinderkondensator (Koaxialkondensator)"
aliases: ["Zylinderkondensator", "Koaxialkondensator"]
tags: [theo-iii, elektrostatik, kapazitaet, herleitung]
date: 2026-01-06
---

Koaxialer Kondensator mit Innenradius $a$, Außenradius $b$, Länge $L$, homogenes Medium $\varepsilon=\varepsilon_0\varepsilon_r$. Symmetrie: zylindrisch, Felder nur radial.

## Feld und Potential (Herleitung)

### Gauss-Fläche
- Wähle Zylinderfläche Radius $r$, Länge $L$, mit $a<r<b$.
- Gauss: $\oint \mathbf E\cdot d\mathbf A = E(r) (2\pi r L) = Q_\text{eing}/\varepsilon = \lambda L/\varepsilon$.

Daraus
$$
E(r)=\frac{\lambda}{2\pi\varepsilon\,r}, \quad a<r<b.
$$

![[zylinderkondensator.svg|Das Feld steht senkrecht auf der Achse und durchsetzt nur den Mantel des Gauß-Zylinders (Radius r, Länge L), nicht die Deckel. Daraus folgt E(r) = λ/(2πεr) zwischen a und b, außen ist E = 0.]]

### Potential
$$
\phi(r)-\phi(b) = -\int_b^r E(r')\,dr' = -\frac{\lambda}{2\pi\varepsilon}\int_b^r \frac{dr'}{r'} = \frac{\lambda}{2\pi\varepsilon}\ln\frac{b}{r}.
$$
Setze Bezug $\phi(b)=0$:
$$
\phi(r)=\frac{\lambda}{2\pi\varepsilon}\ln\frac{b}{r}.
$$

### Spannung und Kapazität
$$
V=\phi(a)-\phi(b)=\frac{\lambda}{2\pi\varepsilon}\ln\frac{b}{a},
\qquad
C=\frac{Q}{V}=\frac{2\pi\varepsilon L}{\ln(b/a)}.
$$

### Spezialfälle / Grenzwerte
- Luft/Vakuum: $\varepsilon_r=1$.
- Dünnwandig $b\to a$: $C\approx 2\pi\varepsilon a L/(b-a)$ (linearisierter Logarithmus $\ln(b/a)\approx(b-a)/a$; entspricht $\varepsilon A/d$).
- Pro Längeneinheit: $C' = C/L = 2\pi\varepsilon/\ln(b/a)$.

## Energie

Energiedichte $u=\tfrac12 \mathbf E\cdot\mathbf D=\tfrac12 \varepsilon E^2$. Gesamtenergie im Volumen $a<r<b$:
$$
W = \int_0^L\!dz\int_a^b\!2\pi r\,dr\; \frac{\varepsilon}{2}\left(\frac{\lambda}{2\pi\varepsilon r}\right)^2
= \frac{\lambda^2 L}{4\pi\varepsilon}\ln\frac{b}{a}.
$$
Vergleiche mit $W=\tfrac12 C V^2$: identisches Resultat.

## Material/Dielektrikum (kurz)
- Homogen: ersetze $\varepsilon_0$ durch $\varepsilon=\varepsilon_0\varepsilon_r$ in allen Formeln.
- Radial inhomogen: $D_r=\varepsilon(r)E_r$, dann $U=\int_a^b E(r)dr$ → $\lambda = 2\pi \bigl(\int_a^b \tfrac{dr}{\varepsilon(r) r}\bigr)^{-1} V$ → $C=\lambda L/V$.

## Siehe auch
- [[Energie und Kapazität in der Elektrostatik]]
- [[Elektrostatik - Lernseite (Grundlagen)]]
- [[Randwertprobleme (Elektrostatik)]]
- [[Dielektrika (Elektrostatik)]]
