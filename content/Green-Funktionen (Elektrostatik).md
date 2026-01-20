---
aliases:
  - Green-Funktionen Elektrostatik
  - Green Functions Electrostatics
date: '2026-01-05'
tags:
  - theo-iii
  - elektrostatik
  - methode
  - green-function
---

# Green-Funktionen (Elektrostatik)

Kurzer Spickzettel für Green-Funktionen $G(\mathbf{r}, \mathbf{r}')$ in typischen Geometrien. Dient als Referenz für [[Randwertprobleme (Elektrostatik)]], [[Spiegelmethode (Elektrostatik)]], [[Multipolentwicklung (Elektrostatik)]] und numerische Löser.

---

## 1. Freier Raum

$$
G_0(\mathbf{r}, \mathbf{r}') = \frac{1}{4\pi |\mathbf{r}-\mathbf{r}'|}
$$

- Eigenschaften: $\nabla^2 G_0 = -\delta(\mathbf{r}-\mathbf{r}')$; fällt wie $1/r$.
- Symmetrie: $G_0(\mathbf{r}, \mathbf{r}') = G_0(\mathbf{r}', \mathbf{r})$.

## 2. Geerdete Ebene (Halbraum, Spiegelmethode)

$$
G_{\text{Ebene}}(\mathbf{r}, \mathbf{r}') = \frac{1}{4\pi} \left( \frac{1}{|\mathbf{r}-\mathbf{r}'|} - \frac{1}{|\mathbf{r}-\mathbf{r}'^*|} \right)
$$

- $\mathbf{r}'^*$: Spiegelpunkt an der Ebene ($z \to -z$).
- Dirichlet-RB $\phi(z=0)=0$ automatisch erfüllt.

## 3. Kugel (geerdet, Radius $R$)

Für $r < R$ und Quelle bei $r'=a < R$ (Dirichlet $\phi(R)=0$):

$$
G_{\text{Kugel}}(r, r', \gamma) = \frac{1}{4\pi} \sum_{\ell=0}^{\infty} \frac{2\ell+1}{R} \frac{r_<^{\ell}}{r_>^{\ell+1}} \left( 1 - \left(\frac{r_>}{R}\right)^{2\ell+1} \right) P_\ell(\cos\gamma)
$$

- $r_< = \min(r,a)$, $r_> = \max(r,a)$, $\gamma$ Winkel zwischen $\mathbf{r}$ und $\mathbf{r}'$.
- Ableitbar aus Legendre-Reihen; Spezialfall $a \to 0$ liefert $G \to G_0$.

## 4. Zylinder (geerdete Wand, Radius $R$)

$$
G_{\text{Zyl}}(\rho,\phi,z; \rho',\phi',z') = \frac{1}{\pi} \sum_{m=-\infty}^{\infty} e^{im(\phi-\phi')} \int_0^{\infty} dk \cos(k(z-z')) I_m(k\rho_<) K_m(k\rho_>)
$$

- $I_m$, $K_m$: modifizierte Bessel-Funktionen; Randbedingung $\phi(R)=0$ erfüllt durch Wahl der Kombination.
- Praktisch numerisch mit endlichem $k$-Cutoff und Modenlimit $m_{\max}$.

## 5. Nutzung im RB-Problem

- Lösung: $\phi(\mathbf{r}) = \oint_{\partial V} \phi \nabla G \cdot d\mathbf{A} - \oint_{\partial V} G \nabla \phi \cdot d\mathbf{A} + \int_V \rho G / \varepsilon_0 \, d^3r$.
- Wahl von $G$ bestimmt die angepasste RB (Dirichlet/Neumann) automatisch.

## 6. Verknüpfungen

- [[Randwertprobleme (Elektrostatik)]] – Einbettung in SoV/Fourier.
- [[Spiegelmethode (Elektrostatik)]] – Ebene als einfachster Green-Fall.
- [[Multipolentwicklung (Elektrostatik)]] – Fernausdehnung von $G$.

---

_Nutze diese Seite als Ausgangspunkt, wenn eine geschlossene Form von $G$ benötigt wird. Ergänze weitere Geometrien (Streifenleiter, Rechteckhohlraum), sobald sie berechnet sind._
