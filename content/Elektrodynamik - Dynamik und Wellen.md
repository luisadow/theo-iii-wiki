---
aliases:
  - Dynamische Maxwell-Gleichungen
  - EM-Wellen Theo III
  - Elektrodynamik Wellen
Date: '2025-12-20'
tags:
  - theo-iii
  - elektrodynamik
  - maxwell
  - wellen
---

# Elektrodynamik – Dynamik und Wellen

Kompakte Sammelnotiz für zeitabhängige Maxwell-Gleichungen, Potentiale, Eichungen und EM-Wellen. Ergänzt die statischen Seiten ([[Elektrostatik]], [[Magnetostatik - Grundgleichungen]]), die Werkzeugseiten ([[Vektoranalysis]], [[Stromverteilungen und Magnetisches Vektorpotential]]) und verweist auf prüfungsrelevante Methoden.

---

## 1. Dynamische Maxwell-Gleichungen (SI)

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \rho / \varepsilon_0, \\
\nabla \cdot \mathbf{B} &= 0, \\
\nabla \times \mathbf{E} &= -\partial_t \mathbf{B}, \\
\nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \partial_t \mathbf{E}.
\end{aligned}
$$

Kontinuitätsgleichung: $\partial_t \rho + \nabla \cdot \mathbf{J} = 0$ folgt automatisch.

---

## 2. Potentiale und Eichungen

- Definition: $\mathbf{B} = \nabla \times \mathbf{A}$, $\mathbf{E} = -\nabla \phi - \partial_t \mathbf{A}$.
- Eichfreiheit: $\mathbf{A} \to \mathbf{A} + \nabla \chi$, $\phi \to \phi - \partial_t \chi$.

**Lorenz-Eichung** $\nabla \cdot \mathbf{A} + \tfrac{1}{c^2}\partial_t \phi = 0$

$$
\Box \phi = -\rho / \varepsilon_0, \qquad \Box \mathbf{A} = -\mu_0 \mathbf{J}, \quad \Box = \nabla^2 - c^{-2} \partial_t^2.
$$

**Coulomb-Eichung** $\nabla \cdot \mathbf{A} = 0$ → siehe [[Coulomb-Eichung (Elektrodynamik)]].

**Poincaré-Eichung (radial)** $\mathbf{r} \cdot \mathbf{A}_p = 0$ → siehe [[Poincaré-Eichung (Elektrodynamik)]].

Eichwechsel: $\chi$ so wählen, dass die jeweilige Bedingung erfüllt ist; erhalte neue $\phi, \mathbf{A}$ via Transformation. ÜB 9 prüft diese Zusammenhänge explizit.

---

## 3. Retardierte Potentiale (Lorenz-Eichung)

Für Quellen $\rho, \mathbf{J}$:

$$
\phi(\mathbf{r}, t) = \frac{1}{4\pi \varepsilon_0} \int \frac{\rho(\mathbf{r}', t_r)}{|\mathbf{r}-\mathbf{r}'|} \, d^3 r', \qquad
\mathbf{A}(\mathbf{r}, t) = \frac{\mu_0}{4\pi} \int \frac{\mathbf{J}(\mathbf{r}', t_r)}{|\mathbf{r}-\mathbf{r}'|} \, d^3 r',
$$

mit retardierter Zeit $t_r = t - |\mathbf{r}-\mathbf{r}'|/c$. Leitet direkt Wellengleichungen und Fernfeld ab; Spezialfall: Liénard–Wiechert-Potentiale bewegter Punktladungen.

---

## 4. Wellengleichungen und Lösungen

- Vakuum: $\Box \mathbf{E} = 0$, $\Box \mathbf{B} = 0$ (quellenfrei).
- Lineare Materie: $c \to c/n$ mit $n^2 = \varepsilon_r \mu_r$ (Dispersionsrelation ggf. frequenzabhängig).

**Ebene Welle** (Vakuum, $k = \omega/c$):

$$
\mathbf{E}(\mathbf{r}, t) = \Re\{ \mathbf{E}_0 e^{i(\mathbf{k}\cdot\mathbf{r} - \omega t)} \}, \quad
\mathbf{B} = \frac{1}{\omega} \mathbf{k} \times \mathbf{E}, \quad \mathbf{k} \cdot \mathbf{E} = 0.
$$

**Polarisation**: linear, zirkular, elliptisch; Jones-Vektoren; Stokes-Parameter optional.

---

## 5. Randbedingungen im Zeitbereich

Aus Maxwell folgen (mit Normalen $\mathbf{n}$):

- $\mathbf{n} \cdot (\mathbf{B}_2 - \mathbf{B}_1) = 0$,
- $\mathbf{n} \times (\mathbf{E}_2 - \mathbf{E}_1) = 0$ (keine Sprungquelle),
- $\mathbf{n} \cdot (\varepsilon_2 \mathbf{E}_2 - \varepsilon_1 \mathbf{E}_1) = \sigma_{\text{frei}}$,
- $\mathbf{n} \times (\mathbf{H}_2 - \mathbf{H}_1) = \mathbf{K}_{\text{frei}}$.

Anwendung: Reflexion/Transmission an Grenzflächen, Wellenleiter-Moden, Einstrahlung in Materialien.

---

## 6. Energie- und Impulsbilanz

- Poynting-Vektor: $\mathbf{S} = \tfrac{1}{\mu_0} \mathbf{E} \times \mathbf{B}$.
- Energiedichte: $u = \tfrac{1}{2}( \varepsilon_0 |\mathbf{E}|^2 + |\mathbf{B}|^2/\mu_0 )$.
- Poynting-Theorem: $\partial_t u + \nabla \cdot \mathbf{S} = -\mathbf{J} \cdot \mathbf{E}$.
- Maxwell-Spannungstensor (dynamisch): $T_{ij} = \varepsilon_0 (E_i E_j - \tfrac{1}{2}\delta_{ij}|\mathbf{E}|^2) + (1/\mu_0)(B_i B_j - \tfrac{1}{2}\delta_{ij}|\mathbf{B}|^2)$.

---

## 7. Strahlung (Kurzreferenz)

- Dipolstrahlung (harmonischer Dipolmoment $\mathbf{p}(t)$):
  $$
  \mathbf{E}_{\text{rad}}(r, t) \approx \frac{\mu_0}{4\pi} \frac{\ddot{\mathbf{p}}(t_r) \times \hat{\mathbf{r}} \times \hat{\mathbf{r}}}{r}, \qquad
  \mathbf{B}_{\text{rad}} = \hat{\mathbf{r}} \times \mathbf{E}_{\text{rad}}/c.
  $$
- Abstrahlleistung (Larmor): $P = \tfrac{\mu_0}{6\pi c} |\ddot{\mathbf{p}}|^2$.

Nutze dies als Fernfeld-Test für Lösungen aus retarierten Potentialen; für bewegte Punktladungen → Liénard–Wiechert.

---

## 8. Übungs- und Prüfungsanker (2-Wochen-Fokus)

- Helmholtz-Zerlegung sauber beherrschen (ÜB 9).
- Gaußsche vs. Wellengleichungen konsistent setzen; prüfe Eichbedingungen.
- Retardierte Potentiale einsetzen können (mind. stationäre Quellen, Dipol-Approx).
- Plane Welle: Polarisationsbedingungen und Poynting-Fluss ausrechnen.
- Grenzfläche: Fresnel-Koeffizienten qualitativ, Energieerhaltung mit $\mathbf{S}$.
- Lorenz- vs. Coulomb-Eichung: wann welche Quelle wirkt ($\rho$, $\mathbf{j}_T$).

---

## 9. Verknüpfungen

- Statik: [[Elektrostatik]], [[Magnetostatik - Grundgleichungen]], [[Elektrostatik in Materie]], [[Dielektrika (Elektrostatik)]].
- Methoden: [[Vektoranalysis]], [[Randwertprobleme (Elektrostatik)]], [[Stromverteilungen und Magnetisches Vektorpotential]], [[Multipolentwicklung (Elektrostatik)]].
- Induktion/Magnetenergie: [[Faraday-Induktion (Elektrodynamik)]], [[Induktivität und magnetische Energie]].
- Kräfte/Energie/Impuls: [[Maxwell-Spannungstensor (Elektrostatik)]], [[Impulsbilanz und Poynting-Vektor]].
- Relativität: [[Relativität – Lorentz-Transformation]], [[Minkowski-Raum und Vierervektoren]].
- Übungen: `20_Exercises/HA9` (Helmholtz, Eichungen), kommende Blätter voraussichtlich Wellen/Strahlung.

---

_Diese Seite bündelt alles Dynamische: Ergänze bei Bedarf eigene Beispielrechnungen (z. B. Ebenewelle an Grenzfläche, Dipolstrahlung) und verknüpfe zu den Übungsblättern._
