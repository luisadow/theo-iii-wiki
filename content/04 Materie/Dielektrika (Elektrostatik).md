---
description: "Dielektrika: Polarisation, Randbedingungen für E und D, Entelektrisierungsfaktor, dielektrische Kugel im Feld."
title: "Dielektrika in der Elektrostatik"
aliases:
  - Dielektrika Elektrostatik
date: "2025-11-25"
tags:
  - theo-iii
  - elektrostatik
  - dielektrika
  - materie
---

Diese Notiz bündelt alle Aspekte zu polarisierbaren Medien in der Elektrostatik. Sie ergänzt [[Elektrostatik]], [[Energie und Kapazität in der Elektrostatik]], [[Maxwell-Spannungstensor (Elektrostatik)]] sowie [[Randwertprobleme (Elektrostatik)]] und behandelt die _Entelektrisierung_ (das Depolarisationsfeld polarisierter Körper).

---

## 1. Grundlagen der Polarisation

- **Polarisation:** $\mathbf{P}(\mathbf{r}) = \varepsilon_0 \chi_e \mathbf{E}$ für lineare, homogene, isotrope Medien (LHI).
- **Elektrische Suszeptibilität:** $\chi_e$ (dimensionslos). Relative Permittivität: $\varepsilon_r = 1 + \chi_e$.
- **Verschiebungsfeld:** $\mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P} = \varepsilon \mathbf{E}$.

### Polarisierbarkeit (mikroskopisch → makroskopisch)

- **Molekulare Polarisierbarkeit:** $\alpha$ (Einheit C·m²/V). Ein einzelnes Dipolmoment: $\mathbf p = \alpha \mathbf E_{\text{lokal}}$.
- **Dichte von Dipolen:** $N$ Teilchen pro Volumen. Makroskopisch: $\mathbf P = N \langle \mathbf p \rangle \approx N \alpha \mathbf E$ (für schwache Felder, isotrop, linear).
- **Brücke zu $\chi_e$:** $\chi_e = \dfrac{N \alpha}{\varepsilon_0}$ (Clausius-Mossotti/Lorentz-Lorenz verfeinert mit lokalen Feldern; in Standardaufgaben reicht meist die einfache Relation).
- **Interpretation:** Große $\alpha$ oder hohe Dichte $N$ → starke Polarisation → große $\chi_e$ → große $\varepsilon_r$.

### Gebundene Ladungen

- **Volumenladungsdichte:** $\rho_b = -\nabla \cdot \mathbf{P}$.
- **Oberflächenladungsdichte:** $\sigma_b = \mathbf{P} \cdot \mathbf{n}$.

![[dielektrikum-polarisation.svg|Dielektrikum im Plattenkondensator: Die Dipole richten sich parallel zu E aus. Innen heben sich die Ladungen auf, an den Oberflächen bleibt σ_b = P·n übrig. Dieses Gegenfeld schwächt E im Inneren auf E₀/ε_r.]]

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
4. **Verschiebungsfeld:** $D_{1n} - D_{2n} = \sigma_{\text{frei}}$; tangential ist $\mathbf D$ **nicht** stetig, sondern $\mathbf D_{1t}/\varepsilon_1 = \mathbf D_{2t}/\varepsilon_2$.

Konvention: $\mathbf n$ zeigt von Medium 2 nach Medium 1.

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

## Beispielaufgabe

> [!example]- Aufgabe: Kondensator mit Dielektrikumsschicht
> Ein Plattenkondensator (Fläche $A$, Abstand $d$) trägt die Ladung $\pm Q$. Parallel zu den Platten liegt eine Schicht der Dicke $t<d$ mit $\varepsilon_r$, der Rest ist Luft. Bestimme die Kapazität und die gebundene Flächenladung auf der Schicht.
>
> > [!success]- Lösung
> > 1. **$\mathbf D$ zuerst:** $\mathbf D$ hat nur freie Ladungen als Quelle und seine Normalkomponente ist stetig – also überall $D = Q/A$.
> > 2. **Felder:** $E_{\text{Luft}} = \dfrac{Q}{\varepsilon_0 A}$, $\ E_{\text{Diel}} = \dfrac{Q}{\varepsilon_0\varepsilon_r A}$.
> > 3. **Spannung und Kapazität:**
> >    $$U = E_{\text{Luft}}(d-t) + E_{\text{Diel}}\,t \quad\Rightarrow\quad C = \frac{\varepsilon_0 A}{d - t + t/\varepsilon_r}.$$
> > 4. **Gebundene Ladung:** $P = D - \varepsilon_0 E_{\text{Diel}} = \dfrac{\varepsilon_r-1}{\varepsilon_r}\,\dfrac{Q}{A}$, also $\sigma_b = \pm P$ auf den beiden Schichtoberflächen.
> > 5. **Grenzfälle:** $t=0$ gibt $\varepsilon_0 A/d$, $t=d$ gibt $\varepsilon_r\varepsilon_0 A/d$. ✓
> >
> > **Merke:** Bei Schichten parallel zu den Platten mit $\mathbf D$ anfangen, bei Schichten senkrecht dazu mit $\mathbf E$ (dann ist die Spannung überall gleich).

## 4. Energie und Kräfte in Dielektrika

- **Energiedichte:** $u = \tfrac{1}{2} \mathbf{E} \cdot \mathbf{D} = \tfrac{1}{2} \varepsilon |\mathbf{E}|^2$
- **Kraft auf dielektrische Einsätze:** über Energievariation oder Stress-Tensor
- **Kapazität mit Dielektrikum:** $C = \varepsilon \frac{A}{d}$ im Plattenkondensator; analog für geschichtete Systeme (siehe [[Energie und Kapazität in der Elektrostatik]])

---

## 5. Entelektrisierung (Depolarisationsfeld)

Ein polarisierter Körper trägt gebundene Oberflächenladungen $\sigma_b=\mathbf P\cdot\mathbf n$. Deren Feld zeigt im Inneren gegen $\mathbf P$ und **schwächt das äußere Feld ab**: das _Entelektrisierungsfeld_.

### Ellipsoid im homogenen Feld $\mathbf E_0$

- Für Ellipsoide (und nur für diese) ist die Polarisation im Inneren homogen, das Entelektrisierungsfeld ebenfalls:
  $$
  \mathbf E_{\text{in}} = \mathbf E_0 - \frac{1}{\varepsilon_0}\,\mathsf N\,\mathbf P .
  $$
- $\mathsf N$: Entelektrisierungstensor; im Hauptachsensystem diagonal mit Faktoren $N_i \ge 0$ und $\operatorname{Sp}\mathsf N = N_x+N_y+N_z = 1$.
- Spezialfälle:

| Form | $N$ (in Feldrichtung) | Innenfeld (lineares Medium) |
| --- | --- | --- |
| Kugel | $1/3$ | $E_{\text{in}} = \frac{3}{\varepsilon_r+2}E_0$ |
| dünne Platte, Feld senkrecht | $1$ | $E_{\text{in}} = E_0/\varepsilon_r$ |
| langer Stab/Nadel, Feld parallel | $0$ | $E_{\text{in}} = E_0$ |

### Herleitung Innenfeld

Mit $\mathbf P=\varepsilon_0(\varepsilon_r-1)\mathbf E_{\text{in}}$ eingesetzt:
$$
E_{\text{in}}\bigl(1+N(\varepsilon_r-1)\bigr)=E_0 \quad\Rightarrow\quad E_{\text{in}}=\frac{E_0}{1+N(\varepsilon_r-1)}.
$$
Für die Kugel ($N=1/3$) stimmt das mit dem Legendre-Ergebnis überein, siehe [[Legendre-Ansatz und Grenzflächen#3. Schnellrezept: Dielektrische Kugel im äußeren Feld]].

### Magnetisches Gegenstück

Entmagnetisierung: $\mathbf H_{\text{in}} = \mathbf H_0 - \mathsf N\mathbf M$ mit denselben Formfaktoren (siehe [[Magnetische Felder in Materie]]).

---

## 6. Beispiel: Dielektrischer Einsatz im Kondensator

1. Ausgangszustand: Plattenkondensator, Abstand $d$, Spannung $V$, Kapazität $C_0 = \varepsilon_0 A/d$
2. Einsatz eines Dielektrikums ($\varepsilon_r$) bei fester Spannung:
   - $E = V/d$
   - $P = \varepsilon_0 (\varepsilon_r - 1) E$
   - $\sigma_b = \mathbf P \cdot \hat{\mathbf n}$
   - $C = \varepsilon_r C_0$
3. Kraftwirkung: $F = \tfrac{1}{2} V^2 \frac{\partial C}{\partial x}$ (alternativ Stress-Tensor)

Zum Vergleich bei fester Ladung $Q$: $E$ sinkt auf $E_0/\varepsilon_r$, das ist gerade der Fall $N=1$ (Platte senkrecht zum Feld).

---

## 7. Beispiel: Dielektrische Kugel im homogenen Feld

- Radius $a$, Permittivität $\varepsilon=\varepsilon_0\varepsilon_r$, Außenraum Vakuum, $\mathbf E_0 = E_0\hat z$.
- Innen: homogen, $\mathbf E_{\text{in}} = \frac{3}{\varepsilon_r+2}\mathbf E_0$, $\mathbf P = 3\varepsilon_0\frac{\varepsilon_r-1}{\varepsilon_r+2}\mathbf E_0$.
- Außen: $\mathbf E_0$ + Dipolfeld mit $\mathbf p = \frac{4\pi}{3}a^3\mathbf P = 4\pi\varepsilon_0 a^3\frac{\varepsilon_r-1}{\varepsilon_r+2}\mathbf E_0$.
- Grenzfall $\varepsilon_r\to\infty$: leitende Kugel, $\mathbf E_{\text{in}}=0$, $\mathbf p = 4\pi\varepsilon_0 a^3\mathbf E_0$.
- Ausführlich (Legendre-Ansatz, Randbedingungen): [[Legendre-Ansatz und Grenzflächen]].

---

## 8. Verbindung zu weiteren Themen

- [[Elektrostatik]]
- [[Randwertprobleme (Elektrostatik)]]
- [[Multipolentwicklung (Elektrostatik)]]
- [[Maxwell-Spannungstensor (Elektrostatik)]]
- [[Energie und Kapazität in der Elektrostatik]]

---

## 9. Ressourcen & Literatur

- **Literatur:** Griffiths Kap. 4, Jackson Kap. 4.4
- **Siehe auch:** [[Elektrostatik]] (Hub) · [[Elektrostatik in Materie]]

## 10. Ergänzungen

### 10.1 Teilweise Einschiebung eines Dielektrikums

- Plattenkondensator, Länge $L$, Breite $b$, Abstand $d$, Dielektrikum Länge $x$ eingesteckt.
- Kapazität: $C = \varepsilon_0 b\left( \tfrac{x \varepsilon_r}{d} + \tfrac{L-x}{d} \right)$.
- Kraft (unter Spannung $V$): $F = \tfrac{1}{2} V^2 \tfrac{\partial C}{\partial x} = \tfrac{1}{2} V^2 \varepsilon_0 b \tfrac{\varepsilon_r-1}{d}$ (zieht das Dielektrikum hinein).
- Skizze: Kraft nach innen, Oberflächenladungen an Front-/Rückkante; für konstante Ladung analog mit $C$-Zunahme.
