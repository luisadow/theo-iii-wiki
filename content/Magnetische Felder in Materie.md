---
aliases:
  - Magnetfeld in Materie
date: '2025-11-25'
tags:
  - theo-iii
  - magnetostatik
  - materie
---

# Magnetische Felder in Materie – Überblick

Diese Notiz sammelt alle zentralen Konzepte für stationäre magnetische Felder in Materialien. Sie ergänzt [[Magnetostatik - Grundgleichungen]], [[Stromverteilungen und Magnetisches Vektorpotential]] sowie die dielektrische Schwesterseite [[Dielektrika (Elektrostatik)]]. Für Anwendungen in der vollständigen Elektrodynamik bildet sie eine Brücke zu den Maxwell-Gleichungen.

---

## 1. Grundgrößen und Definitionen

| Symbol              | Bedeutung                   | Hinweis                                             |
| ------------------- | --------------------------- | --------------------------------------------------- |
| $\mathbf{B}$        | Magnetische Flussdichte     | „magnetische Induktion“                             |
| $\mathbf{H}$        | Magnetfeldstärke            | Quellen durch freie Ströme                          |
| $\mathbf{M}$        | Magnetisierung              | magnetisches Dipolmoment pro Volumen                |
| $\chi_m$            | Magnetische Suszeptibilität | $\mathbf{M} = \chi_m \mathbf{H}$ für lineare Medien |
| $\mu = \mu_0 \mu_r$ | Permeabilität               | $\mu_r = 1 + \chi_m$ bei linearen Medien            |

### Feldbeziehungen

$$
\mathbf{B} = \mu_0 (\mathbf{H} + \mathbf{M}),
\qquad
\mathbf{H} = \frac{1}{\mu_0} \mathbf{B} - \mathbf{M}
$$

Für lineare, isotrope Medien (LIM):

$$
\mathbf{B} = \mu \mathbf{H},
\qquad
\mathbf{M} = \chi_m \mathbf{H}
$$

---

## 2. Maxwell-Gleichungen in der Magnetostatik mit Materie

$$
\begin{aligned}
\nabla \cdot \mathbf{B} &= 0, \\
\nabla \times \mathbf{H} &= \mathbf{J}_{\text{frei}}
\end{aligned}
$$

Magnetisierung erzeugt gebundene Ströme:

- Volumenstrom: $\mathbf{J}_{\text{b}} = \nabla \times \mathbf{M}$
- Oberflächenstrom: $\mathbf{K}_{\text{b}} = \mathbf{M} \times \mathbf{n}$

Gesamtstrom: $\mathbf{J}_{\text{gesamt}} = \mathbf{J}_{\text{frei}} + \mathbf{J}_{\text{b}}$.

---

## 3. Randbedingungen

Grenzfläche zwischen Medium 1 und 2 mit Normale $\mathbf{n}$:

1. **Normalanteil von $\mathbf{B}$**:
   $$
   \mathbf{n} \cdot (\mathbf{B}_2 - \mathbf{B}_1) = 0
   $$
2. **Tangentialanteil von $\mathbf{H}$**:
   $$
   \mathbf{n} \times (\mathbf{H}_2 - \mathbf{H}_1) = \mathbf{K}_{\text{frei}}
   $$
3. Gebundene Ströme sind bereits in $\mathbf{K}_{\text{b}}$ enthalten; es ist sinnvoll, $\mathbf{H}$ mit den freien Strömen zu koppeln.

---

## 4. Materialklassen

| Klasse                     | $\chi_m$           | Eigenschaften                                           | Beispiele          |
| -------------------------- | ------------------ | ------------------------------------------------------- | ------------------ |
| Diamagnetisch              | $\chi_m < 0$       | schwacher Widerstand gegen das Feld, $\mu_r \lesssim 1$ | Bismut, Kupfer     |
| Paramagnetisch             | $\chi_m > 0$ klein | leichte Verstärkung des Feldes                          | Aluminium, Wolfram |
| Ferromagnetisch            | $\chi_m \gg 1$     | Hysterese, Sättigung, Domänen                           | Eisen, Nickel      |
| Antiferro-/Ferrimagnetisch | komplex            | gekoppelte Dipolverhalten                               | MnO, Ferrite       |

_Ferromagnetismus_ erfordert nichtlineare Modelle (B-H-Kurven, Hysterese) → separate Detailnotiz anlegen.

---

## 5. Magnetisierung und gebundene Ströme

- Homogenes Material mit $\mathbf{M} = \text{const}$:
  - $\mathbf{J}_{\text{b}} = 0$ (keine Volumenströme),
  - $\mathbf{K}_{\text{b}} = \mathbf{M} \times \mathbf{n}$ → Strom entlang der Oberfläche.
- Nicht-homogene $\mathbf{M}$ erzeugt interne Ströme, analog zu $\rho_{\text{b}} = -\nabla \cdot \mathbf{P}$ in der Elektrostatik.

---

## 6. Beispiel: Zylindrischer Magnet im externen Feld

- Zylinder mit Radius $R$, magnetischer Suszeptibilität $\chi_m$, externem homogenem Feld $\mathbf{H}_0 = H_0 \hat{z}$.
- Innenfeld (langer Zylinder, Entmagnetisierungsfaktor $N$):
  $$
  \mathbf{H}_{\text{in}} = \frac{H_0}{1 + N \chi_m} \hat{z},
  \qquad
  \mathbf{B}_{\text{in}} = \mu_0 (\mathbf{H}_{\text{in}} + \mathbf{M})
  $$
  Für einen ideal langen Zylinder gilt $N \approx 0$; bei endlichen Geometrien muss $N \neq 0$ berücksichtigt werden.
- Oberfläche: gebundener Strom $\mathbf{K}_{\text{b}} = \mathbf{M} \times \hat{n}$ entspricht einem gleichmäßigen Oberflächenstromring.

---

## 7. Energie und Kräfte

Energie in magnetisierten Medien:

$$
W = \frac{1}{2} \int \mathbf{H} \cdot \mathbf{B} \, d^3 r = \frac{1}{2} \int \mathbf{H} \cdot \mu \mathbf{H} \, d^3 r
$$

Kräfte auf magnetische Einsätze können mit dem Maxwell-Spannungstensor (magnetische Variante) oder über Energieänderungen berechnet werden. Siehe [[Maxwell-Spannungstensor (Elektrostatik)]] als elektrostatik-Pendant; eine magnetische Detailnotiz ist geplant.

---

## 8. Relaxation der Magnetisierung

Der elektrostatiknahe Begriff „Entelektrisierung“ beschreibt das Entladen; magnetisch entspricht dies der Relaxation der Magnetisierung über Spin-Lattice-Prozesse. Typischerweise durch eine Relaxationszeit $\tau_m$ beschrieben (NMR/ESR-Kontext). Für statische Anwendungen reicht die Annahme, dass $\mathbf{M}$ dem äußeren Feld quasistatisch folgt, solange keine Hysterese auftritt.

---

## 9. Ressourcen & Verknüpfungen

- **Notizen:** [[Magnetostatik - Grundgleichungen]], [[Stromverteilungen und Magnetisches Vektorpotential]], [[Elektrostatik in Materie]], [[Dielektrika (Elektrostatik)]]
- **Tafelbilder:** `V11` Magnetostatik – Grundgleichungen, `V12` Ströme und Verteilungen, `V13` Magnetfeld in Materie
- **Literatur:** Griffiths Kap. 6, Jackson Kap. 6, MIT OCW 8.07 „Magnetostatics in Matter“

---

## 10. To-Dos

- [ ] Magnetische Form des Maxwell-Spannungstensors ausarbeiten.
- [ ] Tabelle typischer $\mu_r$ und Entmagnetisierungsfaktoren (Zylinder, Kugel, Platte) ergänzen.
- [ ] Beispiel „Ringkerntransformator“ mit materiellen Effekten dokumentieren.
- [ ] Verweise auf relevante Aufgaben in `20_Exercises` einpflegen.
- [ ] Separate Notizen zu Ferromagnetismus, Hysterese und Kernverlusten erstellen.

---

_Nutze diese Seite als Hub, sobald magnetische Materialien ins Spiel kommen. Ergänze Rechenbeispiele und Skizzen, damit der Übergang von Vakuum- zu Materiefeldern transparent bleibt._
