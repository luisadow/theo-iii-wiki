---
description: "Elektrostatik in Materie: Polarisation, D-Feld, gebundene Ladungen, Energiedichte und Entelektrisierung – Überblick mit Links zu allen Materie-Themen."
title: "Elektrostatik in Materie – Überblick"
aliases:
  - Elektrostatik in Materie
date: "2025-11-25"
tags:
  - theo-iii
  - elektrostatik
  - materie
  - uebersicht
---

Diese Seite fasst alle Notizen zusammen, die sich mit Materieeffekten in der Elektrostatik beschäftigen. Sie dient als Navigator zwischen Grundlagen ([[Elektrostatik]]), Methoden ([[Randwertprobleme (Elektrostatik)]]), Materialeigenschaften ([[Dielektrika (Elektrostatik)]]) und kraft-/energiebezogenen Betrachtungen ([[Maxwell-Spannungstensor (Elektrostatik)]], [[Energie und Kapazität in der Elektrostatik]]).

---

## 1. Themenkompass

| Bereich                       | Fokus                                                  | Verweis                                                                                     |
| ----------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| Polarisation & Materiemodelle | Suszeptibilität, Verschiebungsfeld, gebundene Ladungen | [[Dielektrika (Elektrostatik)]]                                                             |
| Energie & Kräfte              | Feldenergie, Kapazitäten, Stress-Tensor, Druck/Zug     | [[Energie und Kapazität in der Elektrostatik]], [[Maxwell-Spannungstensor (Elektrostatik)]] |
| Randwertmethoden              | Dirichlet/Neumann-RBs, Spiegel-, SoV-Methoden          | [[Randwertprobleme (Elektrostatik)]]                                                        |
| Fernfeldanalyse               | Multipolmomente polarer Systeme                        | [[Multipolentwicklung (Elektrostatik)]]                                                     |
| Entelektrisierung             | Depolarisationsfeld, Formfaktor $N$, Kugel/Platte/Stab | [[Dielektrika (Elektrostatik)#5. Entelektrisierung (Depolarisationsfeld)]]                 |

---

## 2. Kernformeln & Operatoren

1. **Polarisation:**
   $$
   \mathbf{P} = \varepsilon_0 \chi_e \mathbf{E}
   $$
2. **Verschiebungsfeld:**
   $$
   \mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P} = \varepsilon \mathbf{E}
   $$
3. **Gebundene Ladungen:**
   $$
   \rho_b = -\nabla \cdot \mathbf{P}, \qquad \sigma_b = \mathbf{P} \cdot \mathbf{n}
   $$
4. **Energiedichte in Materie:**
   $$
   u = \tfrac{1}{2} \mathbf{E} \cdot \mathbf{D}
   $$

Diese Beziehungen knüpfen direkt an die Operator-Toolbox in [[Vektoranalysis]] an.

---

## 3. Typische Fragestellungen

- Wie verändert ein Dielektrikum die Kapazität eines gegebenen Leitersystems?
- Welche Randbedingungen gelten an Leiter-Dielektrikum-Grenzen?
- Mit welchem Verfahren (SoV, Spiegel, Multipol, numerisch) löst man ein konkretes Materieproblem am effizientesten?
- Wie berechnet man Kräfte auf dielektrische Einsätze?
- Wie groß ist das Feld im Inneren eines polarisierten Körpers (Entelektrisierungsfaktor)?

Verweise auf konkrete Beispiele finden sich in [[Dielektrika (Elektrostatik)]] und [[Randwertprobleme (Elektrostatik)]].

---

## 4. Ressourcen

**Tafelbilder:**

- `V8` Multipolentwicklung & elektrische Felder in Materie
- `V9` Elektrostatik in Materie & Randbedingungen
- `V10` Entelektrisierungsfeld und Dielektrika

**Literatur:** Griffiths Kap. 4, Jackson Kap. 4, MIT OCW 8.07 (Dielectrics & Electrostatic Energy)

**Backlink:** [[Elektrostatik]] (Hub) · [[Dielektrika (Elektrostatik)]] · [[Energie und Kapazität in der Elektrostatik]]

---

## 5. Ergänzungen

- Dielektrischer Einsatz im Kondensator: Herleitung in [[Dielektrika (Elektrostatik)#10.1 Teilweise Einschiebung eines Dielektrikums]]; Stress-Tensor-Check $p=\varepsilon_0(\varepsilon_r-1)E^2/2$.
- Übungsaufgaben (WS 25/26): HA 1, HA 8, HA 9, Aufg. 28.

---

### Kurz-Check

- Immer $\mathbf{P}$, $\mathbf{D}$, $\mathbf{E}$ klar trennen; notiere $\mathbf{D}=\varepsilon_0\mathbf{E}+\mathbf{P}$ am Rand.
- Gebundene Ladungen sofort: $\rho_b=-\nabla\cdot\mathbf{P}$, $\sigma_b=\mathbf{P}\cdot\mathbf{n}$ aufschreiben.
