---
title: "Navigator – Erweiterte Elektrostatik (Multipol, Dipol, Legendre)"
aliases:
  - Navigator Erweiterte Elektrostatik
  - Multipol Legendre Übersicht
  - Elektrostatik Vertiefung
date: '2026-01-13'
---

Kurzüberblick über fortgeschrittene Werkzeuge der Elektrostatik: Multipolentwicklung, Legendre-Ansatz und Randwert-Matching in Kugelkoordinaten.

---

## 1. Multipolentwicklung

- Zerlegung des Potentials in Monopol-, Dipol-, Quadrupol- … Beiträge.
- Fernfeldverhalten $\propto r^{-(\ell+1)}$; Symmetrien eliminieren viele Terme.
- Referenz: [[Multipolentwicklung (Elektrostatik)]].

---

## 2. Legendre-Ansatz (axialsymmetrisch)

- Ansatz: $\Phi(r,\theta)=\sum_{\ell}(A_\ell r^\ell + B_\ell r^{-(\ell+1)})P_\ell(\cos\theta)$.
- Einsatz: Kugelprobleme mit $\varphi$‑Symmetrie und passenden Randbedingungen.
- Referenz: [[Legendre-Ansatz und Grenzflächen]].

---

## 3. Randwert-Matching (Innen/Außen)

- Innen regulär bei $r=0$ → nur $A_\ell$.
- Außen abklingend für $r\to\infty$ → nur $B_\ell$.
- Randbedingungen auf $\Phi$, $E_{\parallel}$, $D_{\perp}$ bestimmen Koeffizienten.
- Referenz: [[Randwertprobleme (Elektrostatik)]].

---

## 4. Symmetrie-Filter

- Spiegelgerade Ladungen → nur gerade $\ell$.
- Gesamtladung $=0$ → führender Term ist Dipol ($\ell=1$).
- Spezielle Geometrien (Ring, Kugel, Hohlraum) liefern charakteristische Moden.

---

## Verweise

- [[Multipolentwicklung (Elektrostatik)]]
- [[Legendre-Ansatz und Grenzflächen]]
- [[Randwertprobleme (Elektrostatik)]]
- [[Dielektrika (Elektrostatik)]]
