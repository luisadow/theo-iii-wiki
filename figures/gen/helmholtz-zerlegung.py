"""Pfeilfelder für figures/src/helmholtz-zerlegung.tex:
V_L = (x, y)/(r^2 + c)   wirbelfrei (Gradient von ln(r^2 + c)/2)
V_T = (-y, x)/(r^2 + c)  quellenfrei (div = 0)
V   = V_L + V_T"""
import math
import os

C = 0.3
H = 0.4  # Gitterabstand
L = 0.3  # maximale Pfeillänge


def arrows(fx, fy, style):
    out = []
    for i in range(-3, 4):
        for j in range(-3, 4):
            x, y = i * H, j * H
            vx, vy = fx(x, y), fy(x, y)
            m = math.hypot(vx, vy)
            if m < 1e-9:
                continue
            s = min(L, 0.45 * m) / m
            x0, y0 = x - vx * s / 2, y - vy * s / 2
            out.append(f"\\draw[{style}] ({x0:.3f},{y0:.3f}) -- ++({vx * s:.3f},{vy * s:.3f});")
    return "\n".join(out) + "\n"


d = lambda x, y: x * x + y * y + C
out = os.path.join(os.path.dirname(__file__), "..", "data")
fields = {
    "V": (lambda x, y: (x - y) / d(x, y), lambda x, y: (y + x) / d(x, y), "fg"),
    "L": (lambda x, y: x / d(x, y), lambda x, y: y / d(x, y), "acc"),
    "T": (lambda x, y: -y / d(x, y), lambda x, y: x / d(x, y), "blue"),
}
for key, (fx, fy, col) in fields.items():
    with open(os.path.join(out, f"helmholtz-{key}.tex"), "w") as fh:
        fh.write(arrows(fx, fy, f"{col}, line width=0.7pt, -{{Stealth[length=3.6pt,width=3pt]}}"))
