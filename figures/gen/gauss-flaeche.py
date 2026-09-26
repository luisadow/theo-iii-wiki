"""Feldlinien für figures/src/gauss-flaeche.tex: q1, q3 > 0 und q2 < 0 innerhalb von
dV, q4 > 0 außerhalb. Schreibt außerdem die exakte Feldrichtung im Punkt P."""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from fieldlines import field, seeds, tikz_path, trace

charges = [(1.0, 0.9, -0.6), (-1.0, -1.2, 0.1), (1.0, -0.3, 0.85), (1.0, 4.2, -1.9)]
BOX = (-3.1, -2.6, 5.2, 2.4)
P = (2.4, 0.0)

lines = []
for q, cx, cy in charges:
    if q < 0:
        continue
    for x, y in seeds(cx, cy, 10, offset=0.25):
        pts = trace(charges, x, y, box=BOX)
        # Linien dicht am Sattelpunkt (E = 0) knicken scharf ab und wirken wie Fehler
        emin = min(math.hypot(*field(charges, px, py)) for px, py in pts[20:] or pts)
        if len(pts) > 5 and emin > 0.12:
            lines.append(tikz_path(pts, "field=0.55, line width=0.45pt, mu"))

ex, ey = field(charges, *P)
angle = math.degrees(math.atan2(ey, ex))

out = os.path.join(os.path.dirname(__file__), "..", "data")
with open(os.path.join(out, "gauss-flaeche.tex"), "w") as f:
    f.write(f"\\def\\EangP{{{angle:.2f}}}\n")
    f.write("\n".join(lines) + "\n")
print(f"E-Richtung in P: {angle:.1f} Grad")
