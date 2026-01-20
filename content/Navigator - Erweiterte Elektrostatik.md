---
aliases:
  - Navigator Erweiterte Elektrostatik
  - Multipol Legendre Fahrplan
  - Elektrostatik Vertiefung
  - Legendre Multipol Reihenfolge
Tags:
  - navigator
  - elektrostatik
  - theo-iii
  - multipol
  - legendre
Date: 2026-01-13
---

# Navigator – Erweiterte Elektrostatik (Multipol, Dipol, Legendre)

Ziel: In 3–4 Blöcken die vertieften Elektrostatik-Themen sauber in Reihenfolge durcharbeiten, damit Multipol-/Legendre-Aufgaben sitzen.

## Lernpfad (empfohlene Reihenfolge)

1. **Multipol-Grundlage & Dipolmoment**

   - Was: Coulomb-Potential in Multipole zerlegen; Monopol/Dipol/Quadrupol interpretieren; Definition $\mathbf p=\int \mathbf r\,\rho\,\mathrm d^3r$.
   - Lesen: [[Multipolentwicklung (Elektrostatik)]].
   - Üben: Feld/ Potential eines Punktdipols; Grenzfall einer kleinen verschobenen Ladung.
   - Tafelbild: Ordner "TheoIII - Tafelbilder" → Multipol/Quadrupol.

2. **Legendre-Polynome als Winkelbasis**

   - Was: Generierende Funktion aus $1/\lvert\mathbf r-\mathbf r'\rvert$, Orthogonalität, Auswahl $P_\ell$ bei $\varphi$-Symmetrie.
   - Lesen: [[10_Notes/Legendre-Ansatz und Grenzflaechen]] Abschnitte 5.1–5.3.
   - Üben: Reproduziere $\dfrac{1}{\lvert\mathbf r-\mathbf r'\rvert}$-Reihe für $r>a$ und $r<a$; kleines Integral für $B_\ell$ auf $r=a$ ausrechnen.

3. **Boundary Matching mit Legendre-Ansatz**

   - Was: Innen/Außen-Ansatz $A_\ell r^\ell + B_\ell/r^{\ell+1}$, RB auf $\Phi$, $E_\parallel$, $D_\perp$.
   - Lesen: Abschnitt 1–4 in [[10_Notes/Legendre-Ansatz und Grenzflaechen]].
   - Üben: Kugel im homogenen Feld (Leiter vs. Dielektrikum); zeige, warum nur $\ell=1$ überlebt.
   - Tafelbild: Randwert/Kugel (Ordner "TheoIII - Tafelbilder" → Randwert/Kugel).

4. **Spezielle Geometrien & Symmetrie-Filter**
   - Was: Welche $\ell$-Moden bleiben? (gerade/ungerade, Dipol-only).
   - Lesen: Abschnitt 5.3 (Ring) in [[10_Notes/Legendre-Ansatz und Grenzflaechen]].
   - Üben: Geladener Ring außen ($r>a$, nur gerade $\ell$); optional Scheibe; prüfe Achsenlimit.
   - Tafelbild: Ring/Disk falls vorhanden; sonst selbst skizzieren.

## Kompakte Übungsabfolge (ca. 3×60–90 min)

- **Block A:** Multipol + Dipolmoment rechnen (zwei Beispiele), dann $1/\lvert\mathbf r-\mathbf r'\rvert$-Expansion herleiten.
- **Block B:** Kugelproblem lösen (Leiter & Dielektrikum) inkl. Feldkomponenten; Check $\ell$-Filter.
- **Block C:** Ring (außen) und kurzer Test: welche $\ell$-Moden überleben bei spiegelgerader Ladung.

## Kleine Checks

- Kannst du $B_\ell$ aus einem gegebenen $V(a,\mu)$ mit dem Integral in [[10_Notes/Legendre-Ansatz und Grenzflaechen#5.1 Generierende Funktion und Multipolentwicklung]] bestimmen?
- Weißt du, warum $P_\ell(\cos\theta)$ bei $\varphi$-Symmetrie reicht und wann $\ell$ ganzzahlig sein muss?
- Siehst du im Fernfeld immer den führenden Dipolterm ($\ell=1$), falls Gesamtladung $=0$?

## Verweise

- Kernnotiz: [[10_Notes/Legendre-Ansatz und Grenzflaechen]].
- Multipole: [[Multipolentwicklung (Elektrostatik)]].
- Randwert-Vorgehen: [[Randwertprobleme (Elektrostatik)]].
- Materie/Dielektrika: [[Dielektrika (Elektrostatik)]].
- Tafelbilder: 90_Resources/TheoIII - Tafelbilder (Multipol, Randwert Kugel/Ring).
