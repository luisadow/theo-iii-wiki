---
title: "Formelsammlung Elektrodynamik"
description: "Formelsammlung Elektrodynamik: alle wichtigen Formeln von Elektrostatik bis Relativität auf einer Seite, jeweils mit Link zur Herleitung."
aliases:
  - Formelsammlung
tags:
  - formelsammlung
---

Alle zentralen Formeln auf einer Seite, wahlweise in SI- oder Gauß-Einheiten (Umschalter oben). Die Links führen jeweils zur Seite mit Herleitung und Beispielen.

## Konstanten

| Größe | Wert |
| --- | --- |
| Elektrische Feldkonstante | $\sg{\varepsilon_0 \approx 8{,}854\cdot 10^{-12}\ \mathrm{F/m}}{\text{entfällt}\ (\varepsilon_0 \to 1/4\pi)}$ |
| Magnetische Feldkonstante | $\sg{\mu_0 \approx 1{,}2566\cdot 10^{-6}\ \mathrm{N/A^2}}{\text{entfällt}\ (\mu_0 \to 4\pi/c^2)}$ |
| Lichtgeschwindigkeit | $\sg{c = 1/\sqrt{\mu_0\varepsilon_0} = 299\,792\,458\ \mathrm{m/s}}{c \approx 2{,}998\cdot 10^{10}\ \mathrm{cm/s}}$ |
| Coulomb-Konstante | $\sg{\frac{1}{4\pi\varepsilon_0} \approx 8{,}988\cdot 10^{9}\ \mathrm{N\,m^2/C^2}}{k_\text{e} = 1}$ |
| Elementarladung | $e \approx \sg{1{,}602\cdot 10^{-19}\ \mathrm{C}}{4{,}803\cdot 10^{-10}\ \mathrm{statC}}$ |

## Vektoranalysis

→ [[Vektoranalysis]] · [[Indexschreibweise und Levi-Civita-Symbol|Indexschreibweise – Summenkonvention, δ und ε]]

$$
\int_V \nabla\cdot\mathbf F\,dV = \oint_{\partial V}\mathbf F\cdot d\mathbf A,
\qquad
\int_A (\nabla\times\mathbf F)\cdot d\mathbf A = \oint_{\partial A}\mathbf F\cdot d\mathbf l
$$

$$
\nabla\times\nabla f = 0,\qquad
\nabla\cdot(\nabla\times\mathbf F) = 0,\qquad
\nabla\times(\nabla\times\mathbf F) = \nabla(\nabla\cdot\mathbf F) - \nabla^2\mathbf F
$$

$$
\nabla^2\frac{1}{\lvert\mathbf r-\mathbf r'\rvert} = -4\pi\,\delta^3(\mathbf r-\mathbf r')
$$

$$
(\mathbf a\times\mathbf b)_i = \varepsilon_{ijk}a_jb_k,\qquad
(\nabla\times\mathbf F)_i = \varepsilon_{ijk}\partial_jF_k,\qquad
\varepsilon_{ijk}\varepsilon_{imn} = \delta_{jm}\delta_{kn} - \delta_{jn}\delta_{km}
$$

## Elektrostatik

→ [[Elektrostatik - Lernseite (Grundlagen)]] · [[Energie und Kapazität in der Elektrostatik]]

| | SI | Gauß |
| --- | --- | --- |
| Feldgleichungen | $\nabla\cdot\mathbf E = \rho/\varepsilon_0$, $\quad\nabla\times\mathbf E = 0$ | $\nabla\cdot\mathbf E = 4\pi\rho$, $\quad\nabla\times\mathbf E = 0$ |
| Potential | $\mathbf E = -\nabla\phi$, $\quad\nabla^2\phi = -\rho/\varepsilon_0$ | $\mathbf E = -\nabla\phi$, $\quad\Delta\phi = -4\pi\rho$ |
| Coulomb-Integral | $\phi(\mathbf r) = \dfrac{1}{4\pi\varepsilon_0}\displaystyle\int\frac{\rho(\mathbf r')}{\lvert\mathbf r-\mathbf r'\rvert}\,d^3r'$ | $\phi(\mathbf r) = \displaystyle\int\frac{\rho(\mathbf r')}{\lvert\mathbf r-\mathbf r'\rvert}\,d^3r'$ |
| Gaußsches Gesetz | $\oint\mathbf E\cdot d\mathbf A = Q_{\text{in}}/\varepsilon_0$ | $\oint\mathbf E\cdot d\mathbf A = 4\pi Q_{\text{in}}$ |
| Leiteroberfläche | $\mathbf E_{\text{innen}}=0$, $\quad E_n = \sigma/\varepsilon_0$, $\quad p = \sigma^2/(2\varepsilon_0)$ | $\mathbf E_{\text{innen}}=0$, $\quad E_n = 4\pi\sigma$, $\quad p = 2\pi\sigma^2$ |
| Feldenergie | $W = \dfrac{\varepsilon_0}{2}\displaystyle\int E^2\,d^3r = \dfrac12\int\rho\,\phi\,d^3r$ | $W = \dfrac{1}{8\pi}\displaystyle\int E^2\,d^3r = \dfrac12\int\rho\,\phi\,d^3r$ |
| Kapazität | $C = Q/U$, $\quad W = \dfrac{Q^2}{2C} = \dfrac12 CU^2$ | unverändert ($C = Q/U$, $W = Q^2/2C$) |

> [!info] Gauß-System
> Die Vorlesung Elektrodynamik im WiSe 26/27 rechnet im Gauß-System. Die Umrechnung ist eine Ersetzung in den Feldgleichungen, $1/\varepsilon_0 \to 4\pi$; Ladungen misst man dann in statC ($q_\text{Gauß} = q_\text{SI}/\sqrt{4\pi\varepsilon_0}$), Energien und Kräfte bleiben gleich. Typische Vorzeichenfalle: die Green-Funktion ist $G = -1/(4\pi\lvert\mathbf r-\mathbf r'\rvert)$ mit $\Delta G = +\delta$.

Kondensatoren (Vakuum; in Materie $\sg{\varepsilon_0\to\varepsilon}{C\to\varepsilon C}$):

$$
C_{\text{Platte}} = \sg{\frac{\varepsilon_0 A}{d}}{\frac{A}{4\pi d}},\qquad
C_{\text{Kugel}} = \sg{\frac{4\pi\varepsilon_0 R_1R_2}{R_2-R_1}}{\frac{R_1R_2}{R_2-R_1}},\qquad
C_{\text{Zylinder}} = \sg{\frac{2\pi\varepsilon_0 L}{\ln(b/a)}}{\frac{L}{2\ln(b/a)}}
$$

→ [[Kugelkondensator]] · [[Zylinderkondensator]] · [[Maxwell-Spannungstensor (Elektrostatik)]]

## Randwertprobleme & Multipole

→ [[Randwertprobleme (Elektrostatik)]] · [[Legendre-Ansatz und Grenzflächen]] · [[Multipolentwicklung (Elektrostatik)]]

Axialsymmetrische Lösung der Laplace-Gleichung:

$$
\phi(r,\theta) = \sum_{\ell=0}^{\infty}\left(A_\ell r^\ell + \frac{B_\ell}{r^{\ell+1}}\right)P_\ell(\cos\theta),
\qquad
\int_{-1}^{1}P_\ell P_{\ell'}\,dx = \frac{2}{2\ell+1}\,\delta_{\ell\ell'}
$$

$P_0 = 1$, $P_1 = x$, $P_2 = \tfrac12(3x^2-1)$. Entwicklung des Coulomb-Kerns:

$$
\frac{1}{\lvert\mathbf r-\mathbf r'\rvert} = \sum_{\ell=0}^{\infty}\frac{r_<^\ell}{r_>^{\ell+1}}\,P_\ell(\cos\gamma)
$$

Multipolentwicklung für $r$ außerhalb der Ladungsverteilung:

$$
\phi(\mathbf r) = \sg{\frac{1}{4\pi\varepsilon_0}}{}\left(\frac{Q}{r} + \frac{\mathbf p\cdot\hat{\mathbf r}}{r^2} + \frac{1}{2}\,\frac{Q_{ij}\,\hat r_i\hat r_j}{r^3} + \dots\right),
\qquad
\mathbf p = \int\rho\,\mathbf r'\,d^3r'
$$

Dipolfeld: $\mathbf E = \sg{\dfrac{1}{4\pi\varepsilon_0}\,}{}\dfrac{3(\mathbf p\cdot\hat{\mathbf r})\hat{\mathbf r}-\mathbf p}{r^3}$; im äußeren Feld $W=-\mathbf p\cdot\mathbf E$, $\boldsymbol\tau = \mathbf p\times\mathbf E$.

Bildladungen (→ [[Spiegelmethode (Elektrostatik)]]): Ebene $q' = -q$ gespiegelt; geerdete Kugel $q' = -qR/r_0$ im Abstand $R^2/r_0$ vom Mittelpunkt.

## Felder in Materie

→ [[Dielektrika (Elektrostatik)]] · [[Magnetische Felder in Materie]]

| Elektrisch | Magnetisch |
| --- | --- |
| $\mathbf D = \sg{\varepsilon_0\mathbf E + \mathbf P}{\mathbf E + 4\pi\mathbf P}$ | $\mathbf B = \sg{\mu_0(\mathbf H + \mathbf M)}{\mathbf H + 4\pi\mathbf M}$ |
| $\nabla\cdot\mathbf D = \sg{}{4\pi}\rho_{\text{frei}}$ | $\nabla\times\mathbf H = \sg{}{\frac{4\pi}{c}}\mathbf J_{\text{frei}}$ (statisch) |
| $\rho_b = -\nabla\cdot\mathbf P$, $\ \sigma_b = \mathbf P\cdot\mathbf n$ | $\mathbf J_b = \sg{}{c\,}\nabla\times\mathbf M$, $\ \mathbf K_b = \sg{}{c\,}\mathbf M\times\mathbf n$ |
| linear: $\sg{\mathbf D = \varepsilon_0\varepsilon_r\mathbf E,\ \varepsilon_r = 1+\chi_e}{\mathbf D = \varepsilon\mathbf E,\ \varepsilon = 1+4\pi\chi_e}$ | linear: $\sg{\mathbf B = \mu_0\mu_r\mathbf H,\ \mu_r = 1+\chi_m}{\mathbf B = \mu\mathbf H,\ \mu = 1+4\pi\chi_m}$ |
| Entelektrisierung: $\mathbf E_{\text{in}} = \mathbf E_0 - \sg{\mathsf N\mathbf P/\varepsilon_0}{4\pi\mathsf N\mathbf P}$ | Entmagnetisierung: $\mathbf H_{\text{in}} = \mathbf H_0 - \sg{}{4\pi}\mathsf N\mathbf M$ |

Randbedingungen ($\mathbf n$ von Medium 1 nach 2):

$$
\mathbf n\cdot(\mathbf D_2-\mathbf D_1) = \sg{}{4\pi}\sigma_{\text{frei}},\quad
\mathbf n\times(\mathbf E_2-\mathbf E_1) = 0,\quad
\mathbf n\cdot(\mathbf B_2-\mathbf B_1) = 0,\quad
\mathbf n\times(\mathbf H_2-\mathbf H_1) = \sg{}{\frac{4\pi}{c}}\mathbf K_{\text{frei}}
$$

## Magnetostatik

→ [[Magnetostatik - Grundgleichungen]] · [[Stromverteilungen und Magnetisches Vektorpotential]] · [[Induktivität und magnetische Energie]]

| | Formel |
| --- | --- |
| Feldgleichungen | $\nabla\cdot\mathbf B = 0$, $\quad\nabla\times\mathbf B = \sg{\mu_0}{\frac{4\pi}{c}}\mathbf J$ |
| Biot–Savart | $\mathbf B(\mathbf r) = \sg{\dfrac{\mu_0}{4\pi}}{\dfrac{1}{c}}\displaystyle\int\mathbf J(\mathbf r')\times\frac{\mathbf r-\mathbf r'}{\lvert\mathbf r-\mathbf r'\rvert^3}\,d^3r'$ |
| Ampère | $\oint\mathbf B\cdot d\mathbf l = \sg{\mu_0}{\frac{4\pi}{c}} I_{\text{durch}}$ |
| Vektorpotential | $\mathbf B = \nabla\times\mathbf A$, $\quad\mathbf A = \sg{\dfrac{\mu_0}{4\pi}}{\dfrac{1}{c}}\displaystyle\int\frac{\mathbf J(\mathbf r')}{\lvert\mathbf r-\mathbf r'\rvert}\,d^3r'$ (Coulomb-Eichung) |
| Typische Felder | Draht $B = \sg{\dfrac{\mu_0 I}{2\pi r}}{\dfrac{2I}{c\,r}}$, $\quad$ lange Spule $B = \sg{\mu_0 nI}{\dfrac{4\pi nI}{c}}$ |
| Magnetischer Dipol | $\mathbf m = \sg{\tfrac12}{\tfrac{1}{2c}}\displaystyle\int\mathbf r\times\mathbf J\,d^3r$, $\quad\mathbf B = \sg{\dfrac{\mu_0}{4\pi}\,}{}\dfrac{3(\mathbf m\cdot\hat{\mathbf r})\hat{\mathbf r}-\mathbf m}{r^3}$ |
| Kraft | $\mathbf F = q(\mathbf E + \sg{\mathbf v}{\tfrac{\mathbf v}{c}}\times\mathbf B)$, $\quad d\mathbf F = \sg{I}{\tfrac{I}{c}}\,d\mathbf l\times\mathbf B$ |
| Induktivität | $\Phi = \sg{}{c\,}LI$, $\quad W = \tfrac12 LI^2 = \sg{\dfrac{1}{2\mu_0}}{\dfrac{1}{8\pi}}\displaystyle\int B^2\,d^3r$, $\quad L_{\text{Spule}} = \sg{\mu_0 n^2 A\ell}{\dfrac{4\pi n^2 A\ell}{c^2}}$ |

## Maxwell-Gleichungen & Induktion

→ [[Elektrodynamik - Dynamik und Wellen]] · [[Faraday-Induktion (Elektrodynamik)]]

$$
\begin{aligned}
\nabla\cdot\mathbf E &= \sg{\frac{\rho}{\varepsilon_0}}{4\pi\rho} &\qquad \nabla\times\mathbf E &= -\sg{}{\frac{1}{c}}\partial_t\mathbf B \\[4pt]
\nabla\cdot\mathbf B &= 0 &\qquad \nabla\times\mathbf B &= \sg{\mu_0\mathbf J + \mu_0\varepsilon_0\,\partial_t\mathbf E}{\frac{4\pi}{c}\mathbf J + \frac{1}{c}\,\partial_t\mathbf E}
\end{aligned}
$$

In Materie: $\nabla\cdot\mathbf D = \sg{}{4\pi}\rho_{\text{frei}}$, $\ \nabla\times\mathbf H = \sg{\mathbf J_{\text{frei}} + \partial_t\mathbf D}{\frac{4\pi}{c}\mathbf J_{\text{frei}} + \frac{1}{c}\partial_t\mathbf D}$. Kontinuitätsgleichung: $\partial_t\rho + \nabla\cdot\mathbf J = 0$.

Induktionsgesetz: $\mathcal E = \oint(\mathbf E + \sg{\mathbf v}{\tfrac{\mathbf v}{c}}\times\mathbf B)\cdot d\mathbf l = -\sg{}{\dfrac{1}{c}}\dfrac{d\Phi_B}{dt}$.

## Potentiale & Eichungen

→ [[Coulomb-Eichung (Elektrodynamik)]] · [[Lorenz-Eichung (Elektrodynamik)]] · [[Helmholtz-Zerlegung (Vektorfelder)]]

$$
\mathbf B = \nabla\times\mathbf A,\qquad \mathbf E = -\nabla\phi - \sg{}{\frac{1}{c}}\partial_t\mathbf A,\qquad
\mathbf A\to\mathbf A + \nabla\chi,\quad \phi\to\phi - \sg{}{\frac{1}{c}}\partial_t\chi
$$

| Eichung | Bedingung | Gleichungen |
| --- | --- | --- |
| Coulomb | $\nabla\cdot\mathbf A = 0$ | $\nabla^2\phi = \sg{-\rho/\varepsilon_0}{-4\pi\rho}$, $\ \Box\mathbf A = -\sg{\mu_0}{\frac{4\pi}{c}}\mathbf J_T$ |
| Lorenz | $\nabla\cdot\mathbf A + \sg{\frac{1}{c^2}}{\frac{1}{c}}\partial_t\phi = 0$ | $\Box\phi = \sg{-\rho/\varepsilon_0}{-4\pi\rho}$, $\ \Box\mathbf A = -\sg{\mu_0}{\frac{4\pi}{c}}\mathbf J$ |

mit $\Box = \nabla^2 - \frac{1}{c^2}\partial_t^2$. Retardierte Potentiale (Lorenz-Eichung):

$$
\phi(\mathbf r,t) = \sg{\frac{1}{4\pi\varepsilon_0}}{}\int\frac{\rho(\mathbf r',t_r)}{\lvert\mathbf r-\mathbf r'\rvert}\,d^3r',\qquad
\mathbf A(\mathbf r,t) = \sg{\frac{\mu_0}{4\pi}}{\frac{1}{c}}\int\frac{\mathbf J(\mathbf r',t_r)}{\lvert\mathbf r-\mathbf r'\rvert}\,d^3r',\qquad
t_r = t - \frac{\lvert\mathbf r-\mathbf r'\rvert}{c}
$$

## Energie, Impuls & Wellen

→ [[Impulsbilanz und Poynting-Vektor]]

| | Formel |
| --- | --- |
| Energiedichte | $u = \sg{\dfrac{\varepsilon_0}{2}E^2 + \dfrac{1}{2\mu_0}B^2}{\dfrac{1}{8\pi}\left(E^2 + B^2\right)}$ (in Materie $\sg{\tfrac12}{\tfrac{1}{8\pi}}(\mathbf E\cdot\mathbf D + \mathbf B\cdot\mathbf H)$) |
| Poynting-Vektor | $\mathbf S = \sg{\dfrac{1}{\mu_0}}{\dfrac{c}{4\pi}}\,\mathbf E\times\mathbf B$ |
| Poynting-Theorem | $\partial_t u + \nabla\cdot\mathbf S = -\mathbf J\cdot\mathbf E$ |
| Impulsdichte | $\mathbf g = \sg{\varepsilon_0}{\dfrac{1}{4\pi c}}\,\mathbf E\times\mathbf B = \mathbf S/c^2$ |
| Spannungstensor | $T_{ij} = \sg{\varepsilon_0}{\tfrac{1}{4\pi}}\left(E_iE_j - \tfrac12\delta_{ij}E^2\right) + \sg{\tfrac{1}{\mu_0}}{\tfrac{1}{4\pi}}\left(B_iB_j - \tfrac12\delta_{ij}B^2\right)$ |
| Ebene Welle | $\mathbf E = \mathbf E_0\,e^{i(\mathbf k\cdot\mathbf r-\omega t)}$, $\ \omega = ck$, $\ \mathbf B = \sg{\tfrac1\omega}{\tfrac{c}{\omega}}\,\mathbf k\times\mathbf E$, $\ \mathbf k\cdot\mathbf E = 0$ |
| Intensität | $I = \langle S\rangle = \sg{\tfrac12 c\,\varepsilon_0}{\tfrac{c}{8\pi}}\, E_0^2$ |
| Dipolstrahlung | $P = \sg{\dfrac{\mu_0\,\lvert\ddot{\mathbf p}\rvert^2}{6\pi c}}{\dfrac{2\,\lvert\ddot{\mathbf p}\rvert^2}{3c^3}}$, harmonisch $\langle P\rangle = \sg{\dfrac{\mu_0\,p_0^2\,\omega^4}{12\pi c}}{\dfrac{p_0^2\,\omega^4}{3c^3}}$ |

## Spezielle Relativität

→ [[Relativität – Lorentz-Transformation]] · [[Minkowski-Raum und Vierervektoren]]

$$
\gamma = \frac{1}{\sqrt{1-v^2/c^2}},\qquad
ct' = \gamma\left(ct - \tfrac{v}{c}\,x\right),\quad x' = \gamma(x - vt),\qquad
s^2 = c^2t^2 - \lvert\mathbf x\rvert^2\ \text{invariant}
$$

Zeitdilatation $\Delta t = \gamma\,\Delta\tau$, Längenkontraktion $L = L_0/\gamma$, Geschwindigkeitsaddition $u = \dfrac{u'+v}{1+u'v/c^2}$.

Vierervektoren mit $\eta = \operatorname{diag}(1,-1,-1,-1)$:

$$
p^\mu = \left(\tfrac{E}{c},\,\mathbf p\right),\quad E^2 = (pc)^2 + (mc^2)^2,\qquad
J^\mu = (c\rho,\,\mathbf J),\quad A^\mu = \sg{\left(\tfrac{\phi}{c},\,\mathbf A\right)}{(\phi,\,\mathbf A)},\quad
\partial_\mu A^\mu = 0,\quad \Box A^\mu = -\sg{\mu_0}{\frac{4\pi}{c}} J^\mu
$$
