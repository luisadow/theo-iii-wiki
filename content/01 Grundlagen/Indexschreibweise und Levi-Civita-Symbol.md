---
title: "Indexschreibweise – Summenkonvention, δ und ε"
description: "Indexschreibweise in der Elektrodynamik: Einsteinsche Summenkonvention, Kronecker-Delta, Levi-Civita-Symbol, ε-δ-Identität und Beweise für BAC-CAB, rot grad und div rot."
aliases: ["Indexschreibweise", "Einsteinsche Summenkonvention", "Levi-Civita-Symbol"]
tags: [theo-iii, vektoranalysis, indexnotation, tensoren]
date: 2026-10-18
---

Die Indexschreibweise schreibt Vektorgleichungen komponentenweise, lässt aber die Summenzeichen weg: Jeder Index steht für 1, 2, 3, und ein doppelt vorkommender Index wird automatisch aufsummiert. Damit werden Kreuzprodukte, die Identität $\varepsilon_{ijk}\varepsilon_{imn}=\delta_{jm}\delta_{kn}-\delta_{jn}\delta_{km}$ und Beweise wie $\nabla\times\nabla\phi=0$ zu wenigen Zeilen – in der Elektrodynamik ist das die Standardsprache für Rechnungen mit Feldern.

## Die Idee: ein Index ist eine Platznummer

Ein Vektor hat drei Komponenten, und der Index sagt, welche gemeint ist:

$$
\mathbf a = (a_1,a_2,a_3), \qquad a_i, \quad i=1,2,3 \quad (1\leftrightarrow x,\ 2\leftrightarrow y,\ 3\leftrightarrow z).
$$

Eine Gleichung mit einem freien Index ist damit eine Abkürzung für drei Gleichungen – eine pro Wert des Index. Der Buchstabe ist egal ($a_i$ und $a_k$ bezeichnen dasselbe), nur die Stellung zählt: oben/unten spielt in der euklidischen Vektoranalysis keine Rolle, deshalb schreibt man alle Indizes unten.

## Einsteinsche Summenkonvention

> [!info] Definition
> Kommt ein Index in einem Term genau zweimal vor, wird über ihn von 1 bis 3 summiert; das Summenzeichen lässt man weg:
> $$a_ib_i \;\equiv\; \sum_{i=1}^{3}a_ib_i = a_1b_1+a_2b_2+a_3b_3.$$

| Ausdruck | ausgeschrieben | Bedeutung |
| --- | --- | --- |
| $a_ib_i$ | $a_1b_1+a_2b_2+a_3b_3$ | Skalarprodukt |
| $A_{ij}b_j$ | $A_{i1}b_1+A_{i2}b_2+A_{i3}b_3$ | Matrix mal Vektor, freier Index $i$ |
| $A_{ii}$ | $A_{11}+A_{22}+A_{33}$ | Spur der Matrix $A$ |
| $\partial_iF_i$ | $\partial_xF_x+\partial_yF_y+\partial_zF_z$ | Divergenz |

Vier Regeln, an denen alles hängt:

1. **Zweimal im selben Term heißt Summe.** Der Index ist dann *gebunden* (Summationsindex, englisch *dummy index*).
2. **Einmal heißt stehen lassen.** Das ist ein *freier Index*; er macht aus dem Ausdruck einen Vektor (bzw. bei zwei freien Indizes eine Matrix).
3. **Dreimal im selben Term ist ein Fehler.** Über einen Index wird höchstens paarweise summiert; ein Ausdruck wie $a_ib_ic_i$ ist nicht definiert.
4. **Freie Indizes müssen auf beiden Seiten übereinstimmen.** $A_i = B_i + C_j$ ist falsch, $A_i = B_i + C_i$ richtig.

> [!tip] Faustregel
> Zweimal summiert, einmal frei, dreimal falsch. Und: Ein gebundener Index darf in seinem Term umbenannt werden ($a_ib_i = a_kb_k$) – ein freier Index nicht.

## Kronecker-Delta

$$
\delta_{ij} = \begin{cases} 1 & i=j \\ 0 & i\neq j \end{cases}
$$

Das ist die Einheitsmatrix in Indexschreibweise. Seine eigentliche Aufgabe ist das **Index-Austauschen**:

$$
\delta_{ij}a_j = a_i, \qquad \delta_{ij}\delta_{jk} = \delta_{ik}, \qquad \delta_{ii} = 3 .
$$

- $\delta_{ij}a_j$: Von den drei Termen der Summe überlebt nur $j=i$, also bleibt $a_i$ stehen. Das Delta „klebt“ die beiden Indizes zusammen.
- $\delta_{ii}=3$ ist die Spur der $3\times3$-Einheitsmatrix; in $d$ Dimensionen entsprechend $d$.
- $\delta_{ij}\delta_{jk}=\delta_{ik}$: erst $j$ ersetzen, dann bleibt eine Einheitsmatrix.

Damit schreibt sich zum Beispiel $\nabla\cdot\mathbf E = \partial_iE_i$ oder $\partial_i(\delta_{ij}f) = \partial_jf$.

## Levi-Civita-Symbol

$$
\varepsilon_{ijk} = \begin{cases}
+1 & (i,j,k) \text{ zyklisch: } (123),\ (231),\ (312) \\
-1 & (i,j,k) \text{ antizyklisch: } (132),\ (213),\ (321) \\
0 & \text{zwei Indizes gleich}
\end{cases}
$$

![[epsilon-vorzeichen.svg|Links der zyklische Umlauf 1→2→3: dann ist ε = +1. Rechts derselbe Umlauf in Gegenrichtung, also eine ungerade Vertauschung: ε = −1. Sobald zwei Indizes gleich sind, verschwindet ε – ein Kreuzprodukt mit sich selbst ist null.]]

Merken lässt sich das als Umlauf um ein Dreieck: einmal herum in Zählrichtung ist positiv, zurück negativ. Wichtig sind drei Eigenschaften:

- **Total antisymmetrisch:** Vertauscht man zwei Indizes, dreht sich das Vorzeichen, $\varepsilon_{ijk}=-\varepsilon_{jik}$. Zweimal vertauschen bringt es zurück.
- **Zyklisch invariant:** $\varepsilon_{ijk}=\varepsilon_{jki}=\varepsilon_{kij}$ – eine zyklische Verschiebung ist eine gerade Permutation und ändert nichts.
- **Kontraktion:** $\varepsilon_{ijk}\varepsilon_{ijk}=6$ (drei zyklische plus drei antizyklische Terme, jeder $+1$).

Damit schreiben sich Kreuzprodukt, Spatprodukt und Determinante ohne Merkregel:

$$
\begin{aligned}
(\mathbf a\times\mathbf b)_i &= \varepsilon_{ijk}a_jb_k, \\
(\nabla\times\mathbf F)_i &= \varepsilon_{ijk}\partial_jF_k, \\
\mathbf a\cdot(\mathbf b\times\mathbf c) &= \varepsilon_{ijk}a_ib_jc_k, \\
\det A &= \varepsilon_{ijk}A_{1i}A_{2j}A_{3k}.
\end{aligned}
$$

Probe für die erste Formel mit $i=1$: $\varepsilon_{1jk}a_jb_k = \varepsilon_{123}a_2b_3+\varepsilon_{132}a_3b_2 = a_2b_3-a_3b_2$ – genau die erste Komponente des Kreuzprodukts.

> [!warning] Typische Falle
> $\varepsilon_{ijk}$ ist antisymmetrisch, $\delta_{ij}$ symmetrisch. Ein Ausdruck wie $\varepsilon_{ijk}a_ja_k$ ist deshalb **null**: Beim Vertauschen $j\leftrightarrow k$ wechselt $\varepsilon$ das Vorzeichen, $a_ja_k$ aber nicht. Genau dieses Argument beweist gleich $\nabla\times\nabla\phi=0$.

## Die ε-δ-Identität

> [!tip] Merke
> $$\varepsilon_{ijk}\,\varepsilon_{imn} = \delta_{jm}\delta_{kn} - \delta_{jn}\delta_{km}$$
> Der gemeinsame Index (hier $i$) steht in beiden Epsilons an derselben Stelle. Die beiden übrigen Paare werden durch zwei Deltas verdrahtet: einmal gerade ($j$–$m$, $k$–$n$), einmal über Kreuz mit Minus ($j$–$n$, $k$–$m$).

In der allgemeinsten Form, mit dem gemeinsamen Index $i$ an erster Stelle beider Faktoren:

$$
\varepsilon_{ijk}\,\varepsilon_{ilm} = \delta_{jl}\delta_{km} - \delta_{jm}\delta_{kl}
= \begin{vmatrix} \delta_{jl} & \delta_{jm} \\ \delta_{kl} & \delta_{km}\end{vmatrix}.
$$

**Warum das gilt.** Halte $j,k$ fest und betrachte die linke Seite als Funktion der beiden Indexpaare. Für $j=k$ verschwindet sie, und beim Vertauschen $j\leftrightarrow k$ wechselt sie das Vorzeichen – sie ist also antisymmetrisch in $j$ und $k$, ebenso in $m$ und $n$. Eine in beiden Paaren antisymmetrische Kombination zweier Deltas kann nur ein Vielfaches von $\delta_{jm}\delta_{kn}-\delta_{jn}\delta_{km}$ sein. Den Faktor liefert ein einziger Testfall, $j=1,\ k=2,\ m=1,\ n=2$:

$$
\sum_{i=1}^{3}\varepsilon_{i12}\varepsilon_{i12} = \varepsilon_{312}^2 = 1,
$$

$$
\delta_{11}\delta_{22}-\delta_{12}\delta_{21} = 1-0 = 1 .
$$

Also ist der Faktor $1$.

### Kombinatorik: Warum genau zwei Fälle und warum das Minuszeichen?

Man kann sich die Identität auch direkt kombinatorisch klarmachen:

1. **Welche Indizes überleben?**  
   Damit $\varepsilon_{kij}\varepsilon_{klm} \neq 0$ ist, müssen $i \neq j$ sein. Im dreidimensionalen Raum gibt es für das Indexpaar $(i,j)$ genau einen verbleibenden Wert für $k$ (ist z. B. $i=1, j=2$, so muss $k=3$ sein). Im zweiten Tensor müssen $l$ und $m$ wiederum die beiden restlichen Werte annehmen – also dieselben Zahlen wie $\{i,j\}$. Es gibt folglich nur zwei Möglichkeiten:
   - **Fall 1:** $l=i$ und $m=j$ (gleiche Reihenfolge)
   - **Fall 2:** $l=j$ und $m=i$ (vertauschte Reihenfolge)
2. **Warum kein Mal ($\cdot$)?**  
   Weil $i \neq j$ gilt, schließen sich Fall 1 und Fall 2 gegenseitig aus (sie sind disjunkt). Tritt Fall 1 ein, ist $\delta_{im}\delta_{jl} = 0$. Ein Produkt $(\text{Fall 1})\cdot(\text{Fall 2})$ wäre stets null. Disjunkte Fälle werden addiert, nicht multipliziert.
3. **Warum steht in der Mitte ein Minuszeichen?**  
   Bringen wir den gemeinsamen Index $k$ an die erste Stelle: $\varepsilon_{kij}\varepsilon_{klm}$.
   - In Fall 1 ist $(l,m) = (i,j)$: Wir berechnen $\varepsilon_{kij}\varepsilon_{kij} = (\varepsilon_{kij})^2 = \mathbf{+1}$.
   - In Fall 2 ist $(l,m) = (j,i)$: Durch die Vertauschung der Indizes greift die totale Antisymmetrie, $\varepsilon_{kji} = -\varepsilon_{kij}$. Das Produkt liefert $\varepsilon_{kij}(-\varepsilon_{kij}) = -(\varepsilon_{kij})^2 = \mathbf{-1}$.
   - Fasst man beide Fälle zusammen, gewichtet mit ihrem Vorzeichen, entsteht exakt:
     $$\text{Wert} = (+1)\cdot(\delta_{il}\delta_{jm}) + (-1)\cdot(\delta_{im}\delta_{jl}) = \delta_{il}\delta_{jm} - \delta_{im}\delta_{jl}.$$

> [!tip] Merke
> Das Minuszeichen ist der direkte Fingerabdruck der Antisymmetrie: Eine Vertauschung zweier Indizes im Levi-Civita-Symbol kehrt das Vorzeichen um.

> [!warning] Reihenfolge der Indizes
> Die Identität gilt nur, wenn der gemeinsame Index in beiden Epsilons an derselben Position steht. Steht er – wie im Beweis unten – an verschiedenen Stellen, erst zyklisch umsortieren: $\varepsilon_{ijk}=\varepsilon_{kij}$, dann paaren. Eine ungerade Umsortierung würde das Vorzeichen der rechten Seite kippen.

## BAC-CAB in Indexschreibweise

Zu zeigen ist die Grassmann-Identität (englisch *BAC-CAB rule*):

$$
\mathbf A\times(\mathbf B\times\mathbf C) = \mathbf B\,(\mathbf A\cdot\mathbf C) - \mathbf C\,(\mathbf A\cdot\mathbf B).
$$

> [!info] Geometrische Bedeutung
> Der Vektor $\mathbf n = \mathbf B\times\mathbf C$ steht senkrecht auf der von $\mathbf B$ und $\mathbf C$ aufgespannten Ebene. Das erneute Kreuzprodukt $\mathbf A\times\mathbf n$ steht senkrecht auf dieser Flächennormalen $\mathbf n$ – es muss also zwingend wieder **in der Ebene von $\mathbf B$ und $\mathbf C$** liegen. Das doppelte Kreuzprodukt lässt sich daher immer als Linearkombination aus $\mathbf B$ und $\mathbf C$ darstellen; die Koeffizienten liefern die Skalarprodukte.

Der Beweis läuft komponentenweise; am Ende steht für jedes $i$ die richtige Komponente, also gilt die Vektorgleichung.

$$
\begin{aligned}
\bigl[\mathbf A\times(\mathbf B\times\mathbf C)\bigr]_i
&= \varepsilon_{ijk}A_j(\mathbf B\times\mathbf C)_k \\
&= \varepsilon_{ijk}\varepsilon_{kmn}A_jB_mC_n \\
&= \varepsilon_{kij}\varepsilon_{kmn}A_jB_mC_n \\
&= (\delta_{im}\delta_{jn}-\delta_{in}\delta_{jm})\,A_jB_mC_n \\
&= A_nB_iC_n - A_mB_mC_i \\
&= B_i\,(\mathbf A\cdot\mathbf C) - C_i\,(\mathbf A\cdot\mathbf B).
\end{aligned}
$$

Schritt für Schritt:

1. Äußeres Kreuzprodukt mit $(i,j,k)$ aufschreiben: $[\mathbf A\times\mathbf X]_i=\varepsilon_{ijk}A_jX_k$ mit $\mathbf X=\mathbf B\times\mathbf C$.
2. Inneres Kreuzprodukt einsetzen: $(\mathbf B\times\mathbf C)_k=\varepsilon_{kmn}B_mC_n$. Jetzt stehen zwei Epsilons da, der gemeinsame Index ist $k$.
3. Der gemeinsame Index $k$ steht an dritter bzw. erster Stelle. Zyklisch umsortieren ($\varepsilon_{ijk}=\varepsilon_{kij}$, Vorzeichen bleibt) bringt ihn in die Merkform.
4. ε-δ-Identität mit $k$ als gemeinsamem Index: $\varepsilon_{kij}\varepsilon_{kmn}=\delta_{im}\delta_{jn}-\delta_{in}\delta_{jm}$.
5. Deltas auswerten: $\delta_{im}$ setzt $m=i$, $\delta_{jn}$ setzt $j=n$ – es bleibt $A_nB_iC_n$. Im zweiten Term setzt $\delta_{in}$ das $i=n$ und $\delta_{jm}$ das $j=m$, also $A_mB_mC_i$.
6. Zusammensetzen: $A_nC_n=\mathbf A\cdot\mathbf C$ ist ein Skalar, $B_i$ und $C_i$ sind Komponenten. Fertig.

> [!info] Andere Benennung, gleicher Beweis
> Oft wird derselbe Beweis mit anderen Buchstaben notiert, etwa mit $\varepsilon_{jmn}\varepsilon_{jki}$ als Zwischenschritt. Die Rechnung ist identisch, nur der gemeinsame Index heißt anders – beim Abschreiben alle Indizes konsistent halten, sonst kippt genau dort das Vorzeichen.

## rot grad = 0

Ein Gradientenfeld ist wirbelfrei:

$$
\nabla\times\nabla\phi = 0 .
$$

In Indexschreibweise ist das eine Einzeiler-Begründung. Mit $(\nabla\phi)_k=\partial_k\phi$:

$$
(\nabla\times\nabla\phi)_i = \varepsilon_{ijk}\,\partial_j(\partial_k\phi) = \varepsilon_{ijk}\,\partial_j\partial_k\phi .
$$

Die zweite Ableitung ist symmetrisch in $j$ und $k$ (Satz von Schwarz, $\phi$ zweimal stetig differenzierbar), $\varepsilon_{ijk}$ ist antisymmetrisch – symmetrisch mal antisymmetrisch summiert ergibt null. Explizit, ohne dieses Argument:

$$
\begin{aligned}
\varepsilon_{ijk}\partial_j\partial_k\phi
&= \tfrac12\varepsilon_{ijk}\partial_j\partial_k\phi + \tfrac12\varepsilon_{ijk}\partial_j\partial_k\phi \\
&= \tfrac12\varepsilon_{ijk}\partial_j\partial_k\phi + \tfrac12\varepsilon_{ikj}\partial_k\partial_j\phi \\
&= \tfrac12\varepsilon_{ijk}\partial_j\partial_k\phi - \tfrac12\varepsilon_{ijk}\partial_j\partial_k\phi = 0 .
\end{aligned}
$$

In der zweiten Zeile wurden im zweiten Term nur die Summationsindizes $j\leftrightarrow k$ umbenannt; in der dritten $\varepsilon_{ikj}=-\varepsilon_{ijk}$ benutzt.

Physikalisch: Deshalb gibt es in der Elektrostatik ein Potential mit $\mathbf E=-\nabla\phi$, und $\nabla\times\mathbf E=0$ ist automatisch erfüllt.

## div rot = 0

Ein Wirbelfeld ist quellenfrei:

$$
\nabla\cdot(\nabla\times\mathbf F) = 0 .
$$

Mit $(\nabla\times\mathbf F)_k=\varepsilon_{kmn}\partial_mF_n$ und $\partial_k$ von außen:

$$
\partial_k(\nabla\times\mathbf F)_k = \partial_k\varepsilon_{kmn}\partial_mF_n = \varepsilon_{kmn}\,\partial_k\partial_mF_n = 0 ,
$$

weil $\partial_k\partial_m$ symmetrisch und $\varepsilon_{kmn}$ antisymmetrisch in $k,m$ ist. Hier sind **beide** Indizes, über die das Argument läuft, Summationsindizes – genau das macht die Symmetrie argumentierbar.

Physikalisch: Deshalb lässt sich das Magnetfeld als Rotation eines Vektorpotentials schreiben, $\mathbf B=\nabla\times\mathbf A$, und $\nabla\cdot\mathbf B=0$ ist dann automatisch erfüllt.

## Doppelte Rotation rot rot

Dieselbe Maschinerie liefert die zentrale Identität für die Vektoranalysis und Wellengleichung:

$$
\nabla\times(\nabla\times\mathbf F) = \nabla(\nabla\cdot\mathbf F) - \nabla^2\mathbf F .
$$

Die Herleitung läuft schrittweise analog zu BAC-CAB, wobei der Nabla-Operator $\nabla$ als partielle Ableitung $\partial_j$ wirkt:

1. **Äußere Rotation:** $[\nabla\times(\nabla\times\mathbf F)]_i = \varepsilon_{ijk}\,\partial_j(\nabla\times\mathbf F)_k$.
2. **Innere Rotation einsetzen** (frische Dummy-Indizes $l, m$ wählen):
   $$[\nabla\times(\nabla\times\mathbf F)]_i = \varepsilon_{ijk}\,\partial_j\bigl(\varepsilon_{klm}\,\partial_l F_m\bigr) = \varepsilon_{ijk}\varepsilon_{klm}\,\partial_j\partial_l F_m.$$
   *(Die konstanten Tensoren $\varepsilon_{klm}$ dürfen vor die Ableitung gezogen werden.)*
3. **ε-δ-Identität einsetzen:** Mit $\varepsilon_{ijk}\varepsilon_{klm} = \delta_{il}\delta_{jm} - \delta_{im}\delta_{jl}$ folgt:
   $$[\nabla\times(\nabla\times\mathbf F)]_i = (\delta_{il}\delta_{jm} - \delta_{im}\delta_{jl})\,\partial_j\partial_l F_m = \delta_{il}\delta_{jm}\,\partial_j\partial_l F_m - \delta_{im}\delta_{jl}\,\partial_j\partial_l F_m.$$
4. **Kronecker-Deltas auswerten:**
   - Im ersten Term: $l \to i$ und $m \to j \implies \partial_j\partial_i F_j$.
   - Im zweiten Term: $m \to i$ und $l \to j \implies \partial_j\partial_j F_i$.
5. **Satz von Schwarz anwenden:** Da die partiellen Ableitungen vertauschen ($\partial_j\partial_i = \partial_i\partial_j$), wird der erste Term zum Gradienten der Divergenz:
   $$\partial_i(\partial_j F_j) = [\nabla(\nabla\cdot\mathbf F)]_i.$$
   Der zweite Term ist die komponentenweise Wirkung des Laplace-Operators:
   $$\partial_j\partial_j F_i = \nabla^2 F_i = (\nabla^2\mathbf F)_i.$$

Zusammengesetzt ergibt sich exakt:
$$[\nabla\times(\nabla\times\mathbf F)]_i = [\nabla(\nabla\cdot\mathbf F)]_i - (\nabla^2\mathbf F)_i \iff \nabla\times(\nabla\times\mathbf F) = \nabla(\nabla\cdot\mathbf F) - \nabla^2\mathbf F.$$

> [!tip] Physikalische Bedeutung
> In der Elektrodynamik ist diese Identität der Schlüssel zur Herleitung der **elektromagnetischen Wellengleichung**: Wendet man die Rotation auf das Faradaysche Induktionsgesetz an ($\nabla\times(\nabla\times\mathbf E) = -\partial_t(\nabla\times\mathbf B)$) und nutzt im Vakuum $\nabla\cdot\mathbf E=0$ sowie $\nabla\times\mathbf B = \mu_0\varepsilon_0\partial_t\mathbf E$, fällt die linke Seite auf $-\nabla^2\mathbf E$ zusammen – und liefert unmittelbar $\nabla^2\mathbf E - \mu_0\varepsilon_0\partial_t^2\mathbf E = 0$.

## Beispielaufgabe

> [!example]- Aufgabe: Lagrange-Identität
> Zeige mit Indexschreibweise:
> $$(\mathbf a\times\mathbf b)\cdot(\mathbf c\times\mathbf d) = (\mathbf a\cdot\mathbf c)(\mathbf b\cdot\mathbf d) - (\mathbf a\cdot\mathbf d)(\mathbf b\cdot\mathbf c).$$
>
> > [!success]- Lösung
> > 1. Skalarprodukt als Summe über einen Index, jedes Kreuzprodukt mit $\varepsilon$:
> > $$(\mathbf a\times\mathbf b)_i(\mathbf c\times\mathbf d)_i = \varepsilon_{ijk}a_jb_k\;\varepsilon_{imn}c_md_n .$$
> > 2. ε-Paar mit gemeinsamem Index $i$ an erster Stelle: die Identität passt direkt.
> > $$\varepsilon_{ijk}\varepsilon_{imn} = \delta_{jm}\delta_{kn}-\delta_{jn}\delta_{km}$$
> > 3. Einsetzen und die Deltas auswerten:
> > $$(\delta_{jm}\delta_{kn}-\delta_{jn}\delta_{km})\,a_jb_kc_md_n = (a_jc_j)(b_kd_k) - (a_jd_j)(b_kc_k).$$
> > 4. Die Klammern sind Skalarprodukte:
> > $$= (\mathbf a\cdot\mathbf c)(\mathbf b\cdot\mathbf d) - (\mathbf a\cdot\mathbf d)(\mathbf b\cdot\mathbf c).$$
> >
> > **Merke:** Ein ε-Paar liefert immer zwei Arten, die vier Vektoren zu paaren; das Minuszeichen sagt, welche Paarung abgezogen wird. Ein Vorzeichenfehler hier ist fast immer eine ungerade Indexvertauschung.

## Selbsttest

Hake ab, was du sicher kannst – der Stand bleibt in deinem Browser gespeichert.

- [ ] Ich kann erklären, warum ein Index nur zweimal pro Term vorkommen darf und was ein freier Index ist.
- [ ] Ich kann $\delta_{ij}a_j=a_i$, $\delta_{ii}=d$ und $\varepsilon_{ijk}\varepsilon_{ijk}=6$ begründen.
- [ ] Ich schreibe $(\mathbf a\times\mathbf b)_i$, $(\nabla\times\mathbf F)_i$ und $\mathbf a\cdot(\mathbf b\times\mathbf c)$ ohne Nachschlagen hin.
- [ ] Ich kann die ε-δ-Identität mit dem Symmetrie-Argument und einem Testfall herleiten.
- [ ] Ich führe den BAC-CAB-Beweis in einem Zug, ohne die Zeilen abzuschreiben.
- [ ] Ich begründe $\nabla\times\nabla\phi=0$ und $\nabla\cdot(\nabla\times\mathbf F)=0$ in je zwei Zeilen.

## Siehe auch

- [[Vektoranalysis]] – dieselben Operatoren und Identitäten in ausgeschriebener Form, plus Kugel- und Zylinderkoordinaten
- [[Magnetostatik - Grundgleichungen]] – $\nabla\cdot\mathbf B=0$, $\nabla\times\mathbf B=\mu_0\mathbf J$ und das Vektorpotential als Anwendung
- [[Helmholtz-Zerlegung (Vektorfelder)]] – Projektorformeln, die ebenfalls mit $\delta$ und $\varepsilon$ argumentieren
- [[Formelsammlung]] – alle Formeln dieser Seite kompakt auf einer Seite
