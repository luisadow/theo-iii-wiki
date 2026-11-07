---
description: "Zylinderkondensator (Koaxialkabel) Herleitung: Feld, Potential, Kapazität C = 2πεL/ln(b/a), Energie, Grenzfall dünner Spalt."
title: "Zylinderkondensator (Koaxialkondensator)"
aliases: ["Zylinderkondensator", "Koaxialkondensator"]
tags: [theo-iii, elektrostatik, kapazitaet, herleitung]
date: 2026-01-06
---

Koaxialer Kondensator mit Innenradius $a$, Außenradius $b$, Länge $L$, homogenes Medium $\sg{\varepsilon=\varepsilon_0\varepsilon_r}{\varepsilon}$ (im Gauß-System dimensionslos, Vakuum $\varepsilon=1$). Symmetrie: zylindrisch, Felder nur radial.

## Feld und Potential (Herleitung)

### Gauss-Fläche
- Wähle Zylinderfläche Radius $r$, Länge $L$, mit $a<r<b$.
- Gauss: $\oint \mathbf E\cdot d\mathbf A = E(r) (2\pi r L) = \sg{}{4\pi}Q_\text{eing}/\varepsilon = \sg{}{4\pi}\lambda L/\varepsilon$.

Daraus
$$
E(r)=\sg{\frac{\lambda}{2\pi\varepsilon\,r}}{\frac{2\lambda}{\varepsilon\,r}}, \quad a<r<b.
$$

![[zylinderkondensator.svg|Das Feld steht senkrecht auf der Achse und durchsetzt nur den Mantel des Gauß-Zylinders (Radius r, Länge L), nicht die Deckel. Daraus folgt E(r) ∝ λ/r zwischen a und b, außen ist E = 0.]]

### Potential
$$
\phi(r)-\phi(b) = -\int_b^r E(r')\,dr' = -\sg{\frac{\lambda}{2\pi\varepsilon}}{\frac{2\lambda}{\varepsilon}}\int_b^r \frac{dr'}{r'} = \sg{\frac{\lambda}{2\pi\varepsilon}}{\frac{2\lambda}{\varepsilon}}\ln\frac{b}{r}.
$$
Setze Bezug $\phi(b)=0$:
$$
\phi(r)=\sg{\frac{\lambda}{2\pi\varepsilon}}{\frac{2\lambda}{\varepsilon}}\ln\frac{b}{r}.
$$

### Spannung und Kapazität
$$
V=\phi(a)-\phi(b)=\sg{\frac{\lambda}{2\pi\varepsilon}}{\frac{2\lambda}{\varepsilon}}\ln\frac{b}{a},
\qquad
C=\frac{Q}{V}=\sg{\frac{2\pi\varepsilon L}{\ln(b/a)}}{\frac{\varepsilon L}{2\ln(b/a)}}.
$$

### Spezialfälle / Grenzwerte
- Luft/Vakuum: $\sg{\varepsilon_r=1}{\varepsilon=1}$.
- Dünnwandig $b\to a$: $C\approx \sg{2\pi\varepsilon a L/(b-a)}{\varepsilon a L/(2(b-a))}$ (linearisierter Logarithmus $\ln(b/a)\approx(b-a)/a$; entspricht $\sg{\varepsilon A/d}{\varepsilon A/(4\pi d)}$).
- Pro Längeneinheit: $C' = C/L = \sg{2\pi\varepsilon/\ln(b/a)}{\varepsilon/(2\ln(b/a))}$.

## Energie

Energiedichte $u=\sg{\tfrac12}{\tfrac{1}{8\pi}} \mathbf E\cdot\mathbf D=\sg{\tfrac12}{\tfrac{1}{8\pi}} \varepsilon E^2$. Gesamtenergie im Volumen $a<r<b$:
$$
W = \int_0^L\!dz\int_a^b\!2\pi r\,dr\; \sg{\frac{\varepsilon}{2}}{\frac{\varepsilon}{8\pi}}\left(\sg{\frac{\lambda}{2\pi\varepsilon r}}{\frac{2\lambda}{\varepsilon r}}\right)^2
= \sg{\frac{\lambda^2 L}{4\pi\varepsilon}}{\frac{\lambda^2 L}{\varepsilon}}\ln\frac{b}{a}.
$$
Vergleiche mit $W=\tfrac12 C V^2$: identisches Resultat.

## Material/Dielektrikum (kurz)
- Homogen: $\sg{\text{ersetze }\varepsilon_0\text{ durch }\varepsilon=\varepsilon_0\varepsilon_r\text{ in allen Formeln}}{\text{Vakuumformel mit }\varepsilon=1\text{, im Medium }\varepsilon\text{ einsetzen}}$.
- Radial inhomogen: $D_r=\varepsilon(r)E_r$, dann $U=\int_a^b E(r)dr$ → $\lambda = \sg{2\pi}{\tfrac12} \bigl(\int_a^b \tfrac{dr}{\varepsilon(r) r}\bigr)^{-1} V$ → $C=\lambda L/V$.

## Siehe auch
- [[Energie und Kapazität in der Elektrostatik]]
- [[Elektrostatik - Lernseite (Grundlagen)]]
- [[Randwertprobleme (Elektrostatik)]]
- [[Dielektrika (Elektrostatik)]]
