"""Feldlinien für figures/src/kugel-homogenes-feld.tex: leitende und dielektrische
Kugel (Radius a = 1) im homogenen Feld E0 ez, exakt aus der l=1-Lösung.

Außen:  E = E0 ez + B1 (3 cos(theta) er - ez) / r^3,  B1 = a^3 E0 (eps-1)/(eps+2)
Innen:  E = 3/(eps+2) E0 ez          (Leiter: B1 = a^3 E0, innen E = 0)
Die Linien zeigen die Richtung von E; da D = eps E parallel ist, sind es zugleich D-Linien.
"""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from fieldlines import tikz_path

A = 1.0
X, Z = 2.5, 2.1


def efield(eps):
    b1 = A**3 * ((eps - 1) / (eps + 2) if eps else 1.0)
    ein = 3 / (eps + 2) if eps else 0.0

    def f(x, z):
        r2 = x * x + z * z
        if r2 < A * A:
            return 0.0, ein
        r = math.sqrt(r2)
        c = z / r
        # Dipolanteil B1 (3 cos th er - ez)/r^3
        ex = b1 * 3 * c * (x / r) / r**3
        ez = 1.0 + b1 * (3 * c * (z / r) - 1) / r**3
        return ex, ez

    return f


def trace(f, x, z, h=0.01, stop_inside=False):
    pts = [(x, z)]
    for _ in range(3000):
        def d(px, pz):
            ex, ez = f(px, pz)
            n = math.hypot(ex, ez) or 1.0
            return ex / n, ez / n
        k1 = d(x, z)
        k2 = d(x + h / 2 * k1[0], z + h / 2 * k1[1])
        k3 = d(x + h / 2 * k2[0], z + h / 2 * k2[1])
        k4 = d(x + h * k3[0], z + h * k3[1])
        x += h / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0])
        z += h / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])
        if stop_inside and x * x + z * z < A * A:
            # auf die Kugeloberfläche projizieren
            r = math.hypot(x, z)
            pts.append((x / r * A, z / r * A))
            return pts, True
        pts.append((x, z))
        if abs(x) > X or abs(z) > Z:
            break
    return pts, False


out = os.path.join(os.path.dirname(__file__), "..", "data")
seeds = [k * 0.36 for k in range(-6, 7)]
style = "field=0.5, line width=0.6pt"

# Leiter: Linien enden unten auf der Kugel (sigma < 0) und beginnen gespiegelt oben (sigma > 0)
lines = []
f = efield(None)
for x0 in seeds:
    pts, hit = trace(f, x0, -Z, stop_inside=True)
    lines.append(tikz_path(pts, style))
    if hit:
        xs, zs = pts[-1]
        up, _ = trace(f, xs, -zs + 0.001)
        lines.append(tikz_path([(xs, -zs)] + up, style))
with open(os.path.join(out, "kugel-feld-leiter.tex"), "w") as fh:
    fh.write("\n".join(lines) + "\n")

# Dielektrikum eps_r = 3: Linien laufen durch die Kugel
lines = []
f = efield(3.0)
for x0 in seeds:
    pts, _ = trace(f, x0, -Z)
    lines.append(tikz_path(pts, "line width=0.6pt, postaction={decorate}, decoration={markings, "
                           "mark=at position 0.18 with {\\arrow{Stealth[length=4.5pt,width=3.6pt]}}, "
                           "mark=at position 0.85 with {\\arrow{Stealth[length=4.5pt,width=3.6pt]}}}"))
with open(os.path.join(out, "kugel-feld-dielektrikum.tex"), "w") as fh:
    fh.write("\n".join(lines) + "\n")
