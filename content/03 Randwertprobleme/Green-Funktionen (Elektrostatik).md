---
title: "Green-Funktionen (Elektrostatik)"
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

Innenraum $r, r' < R$ (Dirichlet $G=0$ bei $r=R$), geschlossen per Spiegelladung $-R/r'$ bei $\mathbf r'' = (R^2/r'^2)\,\mathbf r'$:

$$
G_{\text{Kugel}}(\mathbf r,\mathbf r') = \frac{1}{4\pi}\left(\frac{1}{\lvert\mathbf r-\mathbf r'\rvert} - \frac{R/r'}{\lvert\mathbf r-\tfrac{R^2}{r'^2}\mathbf r'\rvert}\right)
= \frac{1}{4\pi} \sum_{\ell=0}^{\infty} \frac{r_<^{\ell}}{r_>^{\ell+1}} \left( 1 - \left(\frac{r_>}{R}\right)^{2\ell+1} \right) P_\ell(\cos\gamma)
$$

- $r_< = \min(r,r')$, $r_> = \max(r,r')$, $\gamma$ Winkel zwischen $\mathbf{r}$ und $\mathbf{r}'$.
- Check: für $r_>=R$ verschwindet jeder Summand; für $R \to \infty$ folgt $G \to G_0$.

## 4. Zylinder (geerdete Wand, Radius $R$)

Innenraum $\rho,\rho'<R$:

$$
G_{\text{Zyl}} = \frac{1}{2\pi^2} \sum_{m=-\infty}^{\infty} e^{im(\phi-\phi')} \int_0^{\infty} dk\, \cos\big(k(z-z')\big) \left[ I_m(k\rho_<) K_m(k\rho_>) - \frac{K_m(kR)}{I_m(kR)}\, I_m(k\rho)\, I_m(k\rho') \right]
$$

- $I_m$, $K_m$: modifizierte Bessel-Funktionen. Der erste Term allein ist die Freiraum-Funktion $G_0$ in Zylinderkoordinaten; der zweite (homogene) Term sorgt für $G=0$ bei $\rho=R$.
- Praktisch numerisch mit endlichem $k$-Cutoff und Modenlimit $m_{\max}$.

## 5. Nutzung im RB-Problem

- Aus dem Greenschen Satz (mit $\nabla'^2 G = -\delta$, Ableitungen nach $\mathbf r'$, Normale nach außen):
  $$\phi(\mathbf{r}) = \frac{1}{\varepsilon_0}\int_V \rho(\mathbf r')\, G(\mathbf r,\mathbf r')\, d^3r' + \oint_{\partial V} \left[G\,\frac{\partial \phi}{\partial n'} - \phi\,\frac{\partial G}{\partial n'}\right] dA'.$$
- Dirichlet-Problem: wähle $G_D=0$ auf $\partial V$, dann bleibt nur $-\oint \phi\,\partial_{n'} G_D\, dA'$ als Randterm.
- Neumann-Problem: $\partial_{n'} G_N = -1/A$ auf $\partial V$ (nicht $0$, wegen Gauß); der Randterm liefert dann eine Konstante $\langle\phi\rangle_{\partial V}$.

## 6. Verknüpfungen

- [[Randwertprobleme (Elektrostatik)]] – Einbettung in SoV/Fourier.
- [[Spiegelmethode (Elektrostatik)]] – Ebene als einfachster Green-Fall.
- [[Multipolentwicklung (Elektrostatik)]] – Fernausdehnung von $G$.
