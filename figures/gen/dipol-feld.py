"""Feldlinien des Punktdipols (p entlang z): r = C sin^2(theta), exakt.
Schreibt nur die sichtbaren Stücke im Rahmen, je mit einem Richtungspfeil."""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from fieldlines import split_at, tikz_path

X, Z = 2.9, 2.5
lines = []
for C in (0.8, 1.5, 2.4, 3.6, 5.4):
    for sign in (1, -1):
        pts = []
        for k in range(1, 1800):
            th = math.pi * k / 1800
            r = C * math.sin(th) ** 2
            if r < 0.3:  # Umgebung des Dipols frei lassen
                pts.append((None, None))
                continue
            pts.append((sign * r * math.sin(th), r * math.cos(th)))
        inside = lambda x, z: x is not None and abs(x) <= X and abs(z) <= Z
        for ok, part in split_at(pts, inside):
            part = [p for p in part if inside(*p)]
            if ok and len(part) > 5:
                lines.append(tikz_path(part, "field=0.5"))

with open(os.path.join(os.path.dirname(__file__), "..", "data", "dipol-feld.tex"), "w") as f:
    f.write("\n".join(lines) + "\n")
