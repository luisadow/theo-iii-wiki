---
description: "Legendre-Ansatz für Laplace-Probleme: dielektrische und leitende Kugel im Feld, Randbedingungen an Grenzflächen, geladener Ring."
title: "Legendre-Ansatz und Grenzflächen"
aliases:
  - Legendre Ansatz Grenzflächen
date: "2026-01-12"
tags:
  - theo-iii
  - elektrostatik
  - methode
  - randwert
---

Kurze Merkseite für axialsymmetrische Lösungen von Laplace/Poisson in Kugelkoordinaten und die passenden Grenzflächenbedingungen. Anschluss an [[Randwertprobleme (Elektrostatik)]], [[Dielektrika (Elektrostatik)]], [[Multipolentwicklung (Elektrostatik)]].

---

## 0. Idee und Kontext

Der Legendre-Ansatz zerlegt jedes axialsymmetrische Potential in Kugelkoordinaten in Moden $P_\ell(\cos\theta)$. Er nutzt, dass die Winkelabhängigkeit der Laplace-Gleichung auf die Legendre-Polynome führt, wenn keine $\varphi$-Abhängigkeit vorliegt. Damit wird das 3D-Problem auf radiale Koeffizienten $A_\ell$, $B_\ell$ reduziert.

### Voraussetzungen

- Keine $\varphi$-Abhängigkeit (Rotation um die $z$-Achse).
- Laplace/Poisson in Kugelkoordinaten; Ladungen höchstens stückweise radial oder als Effekt in RB.

### Typische Anwendungen

- Kugel im äußeren Feld, eingeschlossene Kugel, Mehrschicht-Kugeln.
- Außenfeld weit weg: Abklingen verlangt $B_\ell$-Terme allein; Innenfeld regulär: nur $A_\ell$-Terme.

## 1. Legendre-Ansatz (axialsymmetrisch)

$$
\Phi(r,\theta)=\sum_{\ell=0}^{\infty}\left(A_\ell r^\ell + \frac{B_\ell}{r^{\ell+1}}\right) P_\ell(\cos\theta)
$$

- Nur $P_\ell(\cos\theta)$, weil keine $\varphi$-Abhängigkeit.
- Innenraum: setze $B_\ell=0$ (keine Singularität bei $r=0$); Außenraum: setze $A_\ell=0$, falls $\Phi\to 0$ für $r\to\infty$.
- Symmetrie filtert Terme: konstantes Feld $\Rightarrow$ meist nur $\ell=1$; reine Verschiebungspotentiale oft $\ell=0$.
- Feldkomponenten: $\mathbf E=-\nabla\Phi$, also $E_r=-\partial_r\Phi$, $E_\theta=-(1/r)\partial_\theta\Phi$.
- Workflow: (1) Ansatz innen/außen, (2) RB an $r=a$, (3) Koeffizienten lösen, (4) Felder ableiten.

## 2. Grenzflächenformeln (Elektrostatik)

- Potential stetig: $\Phi_{\text{in}}(a,\theta)=\Phi_{\text{out}}(a,\theta)$.
- Normalanteil von $\mathbf D$: $(\mathbf D_{\text{out}}-\mathbf D_{\text{in}})\cdot\hat n=\sigma_f$.
- Tangentialanteil von $\mathbf E$: $(\mathbf E_{\text{out}}-\mathbf E_{\text{in}})\times\hat n=0$ $\Rightarrow$ $E_{\parallel}$ stetig.
- Linear isotrop: $\mathbf D=\varepsilon\mathbf E$ $\Rightarrow$ $\varepsilon_{\text{out}}E_{\perp,\text{out}}-\varepsilon_{\text{in}}E_{\perp,\text{in}}=\sigma_f$.
- Leitergrenze: $E_{\parallel}=0$, $\Phi=\text{konstant}$ auf der Oberfläche; $E_{\perp}=\sigma_f/\varepsilon_0$ außerhalb.

### Bedeutung der Größen

- $\sigma_f$: freie Flächenladung (keine gebundene).
- $E_{\perp}$, $E_{\parallel}$: Komponenten senkrecht bzw. tangential zur Grenzfläche.
- $\varepsilon_{\text{in/out}}$: Permittivität der angrenzenden Medien.
- $\hat n$: Einheitsnormale, zeigt von „innen“ nach „außen“ (konventionsabhängig, aber konsistent nutzen).

## 3. Schnellrezept: Dielektrische Kugel im äußeren Feld

Nur $\ell=1$ relevant. Äußeres Feld $E_0\hat z$, Kugelradius $a$:

- Ansatz: $\Phi_{\text{out}}=-E_0 r\cos\theta + B_1 \cos\theta / r^2$, $\Phi_{\text{in}}=A_1 r\cos\theta$.
- RB bei $r=a$: (1) Stetigkeit von $\Phi$, (2) Sprungbedingung für $D_\perp$ mit $\sigma_f=0$.
- Koeffizienten: $A_1=-\dfrac{3\varepsilon_{\text{out}}}{\varepsilon_{\text{in}}+2\varepsilon_{\text{out}}}E_0$ (Innenfeld homogen, $\mathbf E_{\text{in}} = -A_1\hat z$), $\displaystyle B_1=a^3E_0\frac{\varepsilon_{\text{in}}-\varepsilon_{\text{out}}}{\varepsilon_{\text{in}}+2\varepsilon_{\text{out}}}$.
- Induziertes Dipolmoment (definiert über $\Phi_{\text{Dipol}} = p\cos\theta/(4\pi\varepsilon_{\text{out}} r^2)$): $p=4\pi\varepsilon_{\text{out}} a^3 E_0\dfrac{\varepsilon_{\text{in}}-\varepsilon_{\text{out}}}{\varepsilon_{\text{in}}+2\varepsilon_{\text{out}}}$.

### Leseschlüssel

- $A_1$: Innenfeld-Proportionalität (skaliert $E_0$ im Medium innen).
- $B_1$: Stärke des äußeren Dipolanteils (Abklingen wie $1/r^2$ im Potential).
- $p$: effektiver Dipolmoment der Kugel; prüfe Grenzfälle $\varepsilon_{\text{in}}\to\varepsilon_{\text{out}}$ (verschwindet) und Leiterlimit $\varepsilon_{\text{in}}\to\infty$.

## 4. Kurzcheck Workflow (RB-Matching)

1. Geometrie und Symmetrie fixieren; geeignete Koordinaten wählen.
2. Ansatz innen/außen mit passenden Summanden (Singularitäten vermeiden, Abfall im Unendlichen erzwingen).
3. RB auf $\Phi$, $E_{\parallel}$, $D_{\perp}$ anwenden; ggf. freie Flächenladung $\sigma_f$ beachten.
4. Koeffizienten lösen, dann $\mathbf E=-\nabla\Phi$ ableiten und Plausibilität (Grenzfälle) prüfen.

## 5. Herleitung und Beispiele (aus Coulomb-Expansions)

### 5.1 Generierende Funktion und Multipolentwicklung

Die Coulomb-Potentialentwicklung liefert direkt die Legendre-Reihe (Winkel $\gamma$ zwischen $\mathbf r$ und $\mathbf r'$):

$$
\frac{1}{\lvert\mathbf r-\mathbf r'\rvert}=\frac{1}{r_>}\sum_{\ell=0}^{\infty}\left(\frac{r_<}{r_>}\right)^\ell P_\ell(\cos\gamma),\qquad r_>\equiv\max(r,r'),~r_<\equiv\min(r,r').
$$

- Dieser Ausdruck erzeugt das Potential jeder räumlich begrenzten Ladungsverteilung als Summe von Moden $P_\ell$; es ist zugleich die generierende Funktion der Legendre-Polynome.
- Orthogonalität liefert Koeffizienten auf einer Kugeloberfläche $r=a$ (Dirichlet-RB):

$$
B_\ell=a^{\ell+1}\,\frac{2\ell+1}{2}\int_{-1}^{1} V(a,\mu)\,P_\ell(\mu)\,\mathrm d\mu,\qquad \mu\equiv\cos\theta,
$$

wobei $\Phi(r,\theta)=\sum_{\ell\ge 0} B_\ell\,P_\ell(\cos\theta)/r^{\ell+1}$ für ein außen abklingendes Potential. Für ein Innenproblem (regulär bei $r=0$) analog mit $A_\ell$ und Faktor $r^\ell$.

### 5.2 Leitende Kugel im homogenen Feld (Ableitung auf Aufgaben-Niveau)

- Ansatz (außen nur abklingend, innen regulär, Symmetrie $\Rightarrow$ nur $\ell=1$):

$$
\Phi_{\text{out}}=-E_0 r\cos\theta+\frac{B_1\cos\theta}{r^2},\qquad \Phi_{\text{in}}=A_1 r\cos\theta.
$$

- RB bei $r=a$: Die Kugel ist ein Leiter (Äquipotentialfläche). Neutral bzw. geerdet: $\Phi(a,\theta)=0$ für alle $\theta$. Im Inneren ist $\mathbf E_{\text{in}}=0$, also $A_1=0$.
- Gleichung: $-E_0 a + B_1/a^2 = 0 \Rightarrow B_1 = E_0 a^3$, d. h. induziertes Dipolmoment $p = 4\pi\varepsilon_0 a^3 E_0$.
- Felder außen: $E_r=E_0\cos\theta\left(1+2a^3/r^3\right)$, $E_\theta=-E_0\sin\theta\left(1-a^3/r^3\right)$; an der Oberfläche steht $\mathbf E$ senkrecht ($E_\theta(a)=0$).
- Influenzladung: $\sigma(\theta)=\varepsilon_0 E_r(a,\theta) = 3\varepsilon_0 E_0\cos\theta$ (Gesamtladung $0$).
- Check: Das ist der Grenzfall $\varepsilon_{\text{in}}\to\infty$ der dielektrischen Kugel aus Abschnitt 3.
- Intuition: Nur $\ell=1$ bleibt, weil das entfernte Feld wie ein Dipolterm $\propto P_1$ aussieht; höhere $\ell$ würden die Fernbedingung verletzen.

### 5.3 Geladener Ring (Außenpotential, nur even $\ell$)

Geladener Ring mit Radius $a$ in der Ebene $\theta=\pi/2$, Gesamtladung $q$, Beobachtungspunkt mit $r>a$:

$$
\Phi(r,\theta)=\frac{q}{4\pi\varepsilon_0 r}\sum_{s=0}^{\infty}(-1)^s\frac{(2s)!}{2^{2s}(s!)^2}\left(\frac{a}{r}\right)^{2s} P_{2s}(\cos\theta).
$$

- Nur gerade $\ell=2s$ treten auf, weil die Ladungsverteilung unter $\theta\to\pi-\theta$ unverändert bleibt.
- Für Punkte auf der Achse ($\theta=0$) kollabiert die Reihe zur bekannten Achsenform $\Phi=q/(4\pi\varepsilon_0\sqrt{z^2+a^2})$.
- Praktischer Tipp: Für Ringe/Disks schnell prüfen, ob das Vorzeichen unter Spiegelung wechselt ($\Rightarrow$ nur ungerade $\ell$) oder nicht ($\Rightarrow$ nur gerade $\ell$).

## 6. Verweise

- Randbedingungen und PDE-Schritte: [[Randwertprobleme (Elektrostatik)]].
- Materialbezug und $\mathbf D$/$\mathbf P$: [[Dielektrika (Elektrostatik)]].
- Multipol-Sicht und Potentialentwicklung: [[Multipolentwicklung (Elektrostatik)]].
- Kugel- und Zylindergeometrien: [[Kugelkondensator]], [[Zylinderkondensator]].
- Allgemeine Feldgrößen: [[Elektrostatik]].
