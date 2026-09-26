"""Höhenlinien der Dirichlet-Green-Funktion der Kugel (Schnitt durch den Mittelpunkt):
G(r, r') = 1/(4 pi) [ 1/|r - r'| - (R/r') / |r - r'*| ],  r'' = (R/r')^2 r'.
G verschwindet exakt auf der Kugeloberfläche. Schreibt TikZ-Pfade nach data/."""
import math
import os
import sys

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np

sys.path.insert(0, os.path.dirname(__file__))
from fieldlines import tikz_path

R = 1.7
SRC = np.array([0.75, 0.35])
rs = np.linalg.norm(SRC)
IMG = SRC * (R / rs) ** 2

n = 700
xs = np.linspace(-R, R, n)
X, Y = np.meshgrid(xs, xs)
d1 = np.hypot(X - SRC[0], Y - SRC[1])
d2 = np.hypot(X - IMG[0], Y - IMG[1])
G = (1 / d1 - (R / rs) / d2) / (4 * math.pi)
G[X**2 + Y**2 > R**2] = np.nan

levels = [0.012, 0.03, 0.055, 0.09, 0.15, 0.27]
cs = plt.contour(X, Y, G, levels=levels)
lines = []
for segs in cs.allsegs:
    for seg in segs:
        if len(seg) > 10:
            pts = [(float(x), float(y)) for x, y in seg]
            lines.append(tikz_path(pts, "acc, line width=0.7pt"))

out = os.path.join(os.path.dirname(__file__), "..", "data")
with open(os.path.join(out, "green-kugel.tex"), "w") as fh:
    fh.write(f"\\def\\Rk{{{R}}}\\def\\srcx{{{SRC[0]}}}\\def\\srcy{{{SRC[1]}}}"
             f"\\def\\imgx{{{IMG[0]:.4f}}}\\def\\imgy{{{IMG[1]:.4f}}}\n")
    fh.write("\n".join(lines) + "\n")
print(f"Bildpunkt r'' = ({IMG[0]:.3f}, {IMG[1]:.3f})")
