---
aliases:
  - Legendre Ansatz Grenzflaechen
date: "2026-01-12"
tags:
  - theo-iii
  - elektrostatik
  - methode
  - randwert
---

# Legendre-Ansatz und Grenzflaechen

Kurze Merkseite fuer axialsymmetrische Loesungen von Laplace/Poisson in Kugelkoordinaten und die passenden Grenzflaechenbedingungen. Anschluss an [[Randwertprobleme (Elektrostatik)]], [[Dielektrika (Elektrostatik)]], [[Multipolentwicklung (Elektrostatik)]].

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

- Nur $P_\ell(\cos\theta)$, weil keine $\varphi$-Abhaengigkeit.
- Innenraum: setze $B_\ell=0$ (keine Singularitaet bei $r=0$); Aussenraum: setze $A_\ell=0$, falls $\Phi\to 0$ fuer $r\to\infty$.
- Symmetrie filtert Terme: konstantes Feld $\Rightarrow$ meist nur $\ell=1$; reine Verschiebungspotentiale oft $\ell=0$.
- Feldkomponenten: $\mathbf E=-\nabla\Phi$, also $E_r=-\partial_r\Phi$, $E_\theta=-(1/r)\partial_\theta\Phi$.
- Workflow: (1) Ansatz innen/aussen, (2) RB an $r=a$, (3) Koeffizienten loesen, (4) Felder ableiten.

## 2. Grenzflaechenformeln (Elektrostatik)

- Potential stetig: $\Phi_{\text{in}}(a,\theta)=\Phi_{\text{out}}(a,\theta)$.
- Normalanteil von $\mathbf D$: $(\mathbf D_{\text{out}}-\mathbf D_{\text{in}})\cdot\hat n=\sigma_f$.
- Tangentialanteil von $\mathbf E$: $(\mathbf E_{\text{out}}-\mathbf E_{\text{in}})\times\hat n=0$ $\Rightarrow$ $E_{\parallel}$ stetig.
- Linear isotrop: $\mathbf D=\varepsilon\mathbf E$ $\Rightarrow$ $\varepsilon_{\text{out}}E_{\perp,\text{out}}-\varepsilon_{\text{in}}E_{\perp,\text{in}}=\sigma_f$.
- Leitergrenze: $E_{\parallel}=0$, $\Phi=\text{konstant}$ auf der Oberflaeche; $E_{\perp}=\sigma_f/\varepsilon_0$ ausserhalb.

### Bedeutung der Groessen

- $\sigma_f$: freie Flaechenladung (keine gebundene).
- $E_{\perp}$, $E_{\parallel}$: Komponenten senkrecht bzw. tangential zur Grenzflaeche.
- $\varepsilon_{\text{in/out}}$: Permittivitaet der angrenzenden Medien.
- $\hat n$: Einheitsnormale, zeigt von „innen“ nach „außen“ (konventionsabhaengig, aber konsistent nutzen).

## 3. Schnellrezept: Dielektrische Kugel im aeusseren Feld

Nur $\ell=1$ relevant. Aeusseres Feld $E_0\hat z$, Kugelradius $a$:

- Ansatz: $\Phi_{\text{out}}=-E_0 r\cos\theta + B_1 \cos\theta / r^2$, $\Phi_{\text{in}}=A_1 r\cos\theta$.
- RB bei $r=a$: (1) Stetigkeit von $\Phi$, (2) Sprungbedingung fuer $D_\perp$ mit $\sigma_f=0$.
- Koeffizienten: $A_1=\dfrac{3\varepsilon_{\text{out}}}{\varepsilon_{\text{in}}+2\varepsilon_{\text{out}}}E_0$, $\displaystyle B_1=a^3E_0\frac{\varepsilon_{\text{in}}-\varepsilon_{\text{out}}}{\varepsilon_{\text{in}}+2\varepsilon_{\text{out}}}$.
- Induzierter Dipolmoment: $p=4\pi\varepsilon_{\text{out}} a^3 E_0\dfrac{\varepsilon_{\text{in}}-\varepsilon_{\text{out}}}{\varepsilon_{\text{in}}+2\varepsilon_{\text{out}}}$.

### Leseschluessel

- $A_1$: Innenfeld-Proportionalitaet (skaliert $E_0$ im Medium innen).
- $B_1$: Staerke des aeusseren Dipolanteils (Abklingen wie $1/r^2$ im Potential).
- $p$: effektiver Dipolmoment der Kugel; pruefe Grenzfaelle $\varepsilon_{\text{in}}\to\varepsilon_{\text{out}}$ (verschwindet) und Leiterlimit $\varepsilon_{\text{in}}\to\infty$.

## 4. Kurzcheck Workflow (RB-Matching)

1. Geometrie und Symmetrie fixieren; geeignete Koordinaten waehlen.
2. Ansatz innen/aussen mit passenden Summanden (Singularitaeten vermeiden, Abfall im Unendlichen erzwingen).
3. RB auf $\Phi$, $E_{\parallel}$, $D_{\perp}$ anwenden; ggf. freie Flaechenladung $\sigma_f$ beachten.
4. Koeffizienten loesen, dann $\mathbf E=-\nabla\Phi$ ableiten und Plausibilitaet (Grenzfaelle) pruefen.

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

- RB bei $r=a$: (i) Stetigkeit von $\Phi$, (ii) $E_{\parallel}$ stetig (hier automatisch erfüllt), (iii) $D_\perp$-Sprung mit $\sigma_f=0$.
- Gleichungen: $-E_0 a+B_1/a^2=A_1 a$ und $-\varepsilon_0 E_0-2\varepsilon_0 B_1/a^3=-\varepsilon_0 A_1$. Lösen ergibt $A_1=-\tfrac{3}{2}E_0$, $B_1=\tfrac{1}{2}E_0 a^3$ (reine Leitergrenze; die dielektrische Variante steht in Abschnitt 3).
- Felder: $E_r^{\text{out}}=E_0\cos\theta\left(1+2a^3/r^3\right)$, $E_\theta^{\text{out}}=E_0\sin\theta\left(1-a^3/r^3\right)$; innen homogen $\mathbf E_{\text{in}}=-A_1\hat z$.
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
- Allgemeine Feldgroessen: [[Elektrostatik]].
