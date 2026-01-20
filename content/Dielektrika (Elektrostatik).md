---
aliases:
  - Dielektrika Elektrostatik
date: "2025-11-25"
tags:
  - theo-iii
  - elektrostatik
  - dielektrika
  - materie
---

# Dielektrika in der Elektrostatik

Diese Notiz bündelt alle Aspekte zu polarisierbaren Medien in der Elektrostatik. Sie ergänzt [[Elektrostatik]], [[Energie und Kapazität in der Elektrostatik]], [[Maxwell-Spannungstensor (Elektrostatik)]] sowie [[Randwertprobleme (Elektrostatik)]] und führt den Begriff der _Entelektrisierung_ (Entladen durch leitende oder dielektrische Prozesse) zusammen.

---

## 1. Grundlagen der Polarisation

- **Polarisation:** $\mathbf{P}(\mathbf{r}) = \varepsilon_0 \chi_e \mathbf{E}$ für lineare, homogene, isotrope Medien (LHI).
- **Elektrische Suszeptibilität:** $\chi_e$ (dimensionslos). Relative Permittivität: $\varepsilon_r = 1 + \chi_e$.
- **Verschiebungsfeld:** $\mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P} = \varepsilon \mathbf{E}$.

### Polarisierbarkeit (mikroskopisch → makroskopisch)

- **Molekulare Polarisierbarkeit:** $\alpha$ (Einheit C·m²/V). Ein einzelnes Dipolmoment: $\mathbf p = \alpha \mathbf E_{\text{lokal}}$.
- **Dichte von Dipolen:** $N$ Teilchen pro Volumen. Makroskopisch: $\mathbf P = N \langle \mathbf p \rangle \approx N \alpha \mathbf E$ (für schwache Felder, isotrop, linear).
- **Brücke zu $\chi_e$:** $\chi_e = \dfrac{N \alpha}{\varepsilon_0}$ (Clausius-Mossotti/Lorentz-Lorenz verfeinert mit lokalen Feldern; Klausur-Standard meist die einfache Relation).
- **Interpretation:** Große $\alpha$ oder hohe Dichte $N$ → starke Polarisation → große $\chi_e$ → große $\varepsilon_r$.

### Gebundene Ladungen

- **Volumenladungsdichte:** $\rho_b = -\nabla \cdot \mathbf{P}$.
- **Oberflächenladungsdichte:** $\sigma_b = \mathbf{P} \cdot \mathbf{n}$.

Damit lässt sich jede dielektrische Reaktion auf externe Felder auf Quellenebene formulieren.

---

## 2. Maxwell-Gleichungen mit Dielektrika

In statischen Situationen:

1. $\nabla \cdot \mathbf{D} = \rho_{\text{frei}}$
2. $\nabla \times \mathbf{E} = \mathbf{0}$

Mit $\mathbf{D} = \varepsilon \mathbf{E}$ folgt für lineare Medien direkt die Poisson- bzw. Laplace-Gleichung mit effektiver Permittivität.

---

## 3. Randbedingungen an Grenzflächen

Grenzfläche zwischen Medium 1 ($\varepsilon_1$) und Medium 2 ($\varepsilon_2$):

1. **Normal:** $\varepsilon_1 E_{1n} - \varepsilon_2 E_{2n} = \sigma_{\text{frei}}$
2. **Tangential:** $\mathbf{E}_{1t} = \mathbf{E}_{2t}$
3. **Potential:** $\phi_1 = \phi_2$ (bei endlichen Feldern)
4. **Verschiebungsfeld:** $\mathbf{D}_{1n} - \mathbf{D}_{2n} = \sigma_{\text{frei}}$, $\mathbf{D}_{1t} = \mathbf{D}_{2t}$

Nutze diese RBs gemeinsam mit [[Maxwell-Spannungstensor (Elektrostatik)]] zur Bestimmung von Drücken und Zugspannungen.

### Beispielaufgabe: ebene Grenzfläche, schräges Feld

- Gegeben: Medium 1 Luft $\varepsilon_1=\varepsilon_0$, Medium 2 Dielektrikum $\varepsilon_2=3\varepsilon_0$, Grenzfläche ist die $xy$-Ebene mit Normalvektor $\mathbf n=\mathbf e_z$. Feld in Medium 1: $|\mathbf E_1|=E_0=100\,\text{V/m}$ unter $45^\circ$ zur Normalen (also $E_{1n}=E_0/\sqrt{2}$, $E_{1t}=E_0/\sqrt{2}$).
- Gesucht: $\mathbf E_2$ in Medium 2.
- Randbedingungen (keine freie Oberflächenladung): $D_{1n}=D_{2n}$ und $E_{1t}=E_{2t}$.
  - $D_{1n}=\varepsilon_0 E_{1n}=\varepsilon_0 E_0/\sqrt{2}$
  - $E_{2t}=E_{1t}=E_0/\sqrt{2}$
  - $E_{2n}=D_{2n}/\varepsilon_2 = (\varepsilon_0 E_0/\sqrt{2})/(3\varepsilon_0)=E_0/(3\sqrt{2})$
- Betrag und Winkel in Medium 2: $|\mathbf E_2| = \sqrt{E_{2n}^2+E_{2t}^2} = \dfrac{E_0}{\sqrt{2}}\sqrt{1+1/9} \approx 0.745\,E_0$; Winkel zur Normalen: $\tan\theta_2 = E_{2t}/E_{2n} = 3$ → $\theta_2 \approx 71.6^\circ$ (Feld knickt zur Fläche hin).

---

## 4. Energie und Kräfte in Dielektrika

- **Energiedichte:** $u = \tfrac{1}{2} \mathbf{E} \cdot \mathbf{D} = \tfrac{1}{2} \varepsilon |\mathbf{E}|^2$
- **Kraft auf dielektrische Einsätze:** über Energievariation oder Stress-Tensor
- **Kapazität mit Dielektrikum:** $C = \varepsilon \frac{A}{d}$ im Plattenkondensator; analog für geschichtete Systeme (siehe [[Energie und Kapazität in der Elektrostatik]])

---

## 5. Entelektrisierung (Entladungsvorgänge)

**Entelektrisierung** bezeichnet den Prozess, in dem geladene Körper durch geeignete Kopplung (z. B. Erdung, Luftionisation oder das Einbringen von Dielektrika) Ladung verlieren bzw. das System in einen feldfreien Zustand übergeht.

### Mechanismen

1. **Kontakt mit Leitern:** Ladung wandert aufgrund Potentialausgleichs → Dirichlet-RB ($\phi = \text{const}$)
2. **Dielektrische Entladung:** Feuchte bzw. ionisierte Luft oder ein Dielektrikum mit endlicher Leitfähigkeit $\sigma$ → langsamer Ladungsfluss mittels $\mathbf{J} = \sigma \mathbf{E}$
3. **Entelektrisierungsfeld:** Eingeprägtes Feld/Schirmung, das die Ladungsträger an Oberflächen neu verteilt (siehe Tafelbilder `V9`/`V10`)

### Modellierung

- **Zeitliche Relaxation:** $\tau = \varepsilon / \sigma$, $Q(t) = Q_0 e^{-t/\tau}$
- **Randwertproblem:** Vorgehen wie in [[Randwertprobleme (Elektrostatik)]] → bestimme $\phi(\mathbf{r}, t)$ und $\mathbf{E}(\mathbf{r}, t)$ iterativ
- **Energieperspektive:** $\Delta W = -\int \mathbf{J} \cdot \mathbf{E}\, d^3 r\, dt$ (konsistent mit [[Energie und Kapazität in der Elektrostatik]])

---

## 6. Beispiel: Dielektrischer Einsatz im Kondensator

1. Ausgangszustand: Plattenkondensator, Abstand $d$, Spannung $V$, Kapazität $C_0 = \varepsilon_0 A/d$
2. Einsatz eines Dielektrikums ($\varepsilon_r$):
   - $E = V/d$
   - $P = \varepsilon_0 (\varepsilon_r - 1) E$
   - $\sigma_b = P \cdot \hat{n}$
   - $C = \varepsilon_r C_0$
3. Kraftwirkung: $F = \tfrac{1}{2} V^2 \frac{\partial C}{\partial x}$ (alternativ Stress-Tensor)

---

## 7. Beispiel: Entelektrisierung einer geladenen Kugel

- Radius $R$, anfängliche Ladung $Q_0$
- Umgebung: Dielektrikum mit $\sigma$
- Relaxation: $Q(t) = Q_0 e^{-t/\tau}$, $\tau = \varepsilon/\sigma$
- Feld: $E(r, t) = \frac{1}{4\pi \varepsilon} \frac{Q(t)}{r^2}$
- Energie: $W(t) = \frac{Q(t)^2}{8\pi \varepsilon R}$

---

## 8. Verbindung zu weiteren Themen

- [[Elektrostatik]]
- [[Randwertprobleme (Elektrostatik)]]
- [[Multipolentwicklung (Elektrostatik)]]
- [[Maxwell-Spannungstensor (Elektrostatik)]]
- [[Energie und Kapazität in der Elektrostatik]]

---

## 9. Ressourcen & Literatur

- **Backlink:** [[Elektrostatik]] (Hub) · [[Elektrostatik in Materie]]

## 10. To-Dos

## 10. Beispiele & Tabellen

### 10.1 Teilweise Einschiebung eines Dielektrikums

- Plattenkondensator, Länge $L$, Breite $b$, Abstand $d$, Dielektrikum Länge $x$ eingesteckt.
- Kapazität: $C = \varepsilon_0 b\left( \tfrac{x \varepsilon_r}{d} + \tfrac{L-x}{d} \right)$.
- Kraft (unter Spannung $V$): $F = \tfrac{1}{2} V^2 \tfrac{\partial C}{\partial x} = \tfrac{1}{2} V^2 \varepsilon_0 b \tfrac{\varepsilon_r-1}{d}$ (zieht das Dielektrikum hinein).
- Skizze: Kraft nach innen, Oberflächenladungen an Front-/Rückkante; für konstante Ladung analog mit $C$-Zunahme.

### 10.2 Numerische Entelektrisierung (Skizze)

- PDE: $\nabla\cdot(\sigma \nabla \phi) + \varepsilon \partial_t \nabla^2 \phi = 0$.
- Diskretisierung: implizites Euler, Jacobi/SOR; Schritt $\Delta t < \tau/10$ mit $\tau=\varepsilon/\sigma$.
- Monitoring: $Q(t)$ am Rand, Feldabfall $\propto e^{-t/\tau}$ validiert analytische Relaxation.

### 10.3 Typische Materialwerte

| Material       | $\varepsilon_r$ | $\sigma$ (S/m) | $\tau=\varepsilon/\sigma$ |
| -------------- | --------------- | -------------- | ------------------------- |
| Luft (trocken) | 1.0006          | $10^{-15}$     | Stunden–Tage              |
| Glas           | 5–10            | $10^{-12}$     | $10^2$–$10^4$ s           |
| Wasser (dest.) | 80              | $10^{-6}$      | $\sim 0.7$ s              |
| FR4            | 4.2             | $10^{-14}$     | $10^5$ s                  |

### 10.4 Übungen & Verknüpfungen

- [[20_Exercises/HA1/HA1 - Loesung]] (Grundlagen), [[20_Exercises/HA8/HA8.md]] (Materialeinfluss), [[20_Exercises/HA9/Aufgabe28_Loesung]] (Gauge + Materie-Kopplung).

### 10.5 Grafiken

![[90_Resources/TheoIII -  Tafelbilder/V9-WS25-Elektrostatik_in_Materie.pdf]]
![[90_Resources/TheoIII -  Tafelbilder/V10-WS25-Entelektrisierung.pdf]]

---

## 11. To-Dos

- [x] Beispiel „teilweise Dielektrik-Einschiebung“ mit Kraftdiagrammen ergänzt.
- [x] Numerische Simulation zur Entelektrisierung skizziert.
- [x] Tabelle typischer $\varepsilon_r$, $\sigma$, Relaxationszeiten ergänzt.
- [x] Querverweise zu `20_Exercises` ergänzt.
- [x] Tafelbild-Grafiken eingebettet.

_Diese Notiz dient als zentraler Einstiegspunkt, wenn Materieeinflüsse in der Elektrostatik eine Rolle spielen. Ergänze konkrete Rechnungen und Messdaten, sobald sie verfügbar sind, um Theorie und Praxis konsequent zu verbinden._
