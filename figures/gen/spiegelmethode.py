"""Feldlinien für figures/src/spiegelmethode.tex: Ladung +Q über geerdeter Ebene
(links) und äquivalentes Paar +Q/-Q (rechts)."""
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from fieldlines import seeds, split_at, tikz_path, trace

A = 1.1  # Abstand der Ladung zur Ebene (cm)
BOX = (-2.3, -2.5, 2.3, 2.6)
charges = [(1.0, 0.0, A), (-1.0, 0.0, -A)]

real, image = [], []
for k, (x, y) in enumerate(seeds(0.0, A, 14, offset=0.5)):
    pts = trace(charges, x, y, box=BOX)
    # links: nur y >= 0, die Linie endet senkrecht auf der Ebene
    upper = [p for p in pts if p[1] >= 0]
    if len(upper) > 2:
        real.append(tikz_path(upper, "field=0.45"))
    # rechts: ganze Linie, unterer Teil gedämpft
    for below, part in split_at(pts, lambda x, y: y < 0):
        if len(part) > 2:
            image.append(tikz_path(part, "thin, mu" if below else "field=0.45"))

out = os.path.join(os.path.dirname(__file__), "..", "data")
with open(os.path.join(out, "spiegelmethode-real.tex"), "w") as f:
    f.write("\n".join(real) + "\n")
with open(os.path.join(out, "spiegelmethode-bild.tex"), "w") as f:
    f.write("\n".join(image) + "\n")
