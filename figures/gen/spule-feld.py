"""B-Feldlinien einer endlichen Spule (Achse x, Radius R, N Windungen) im Längsschnitt.
Jede Windung ist ein Ringstrom; dessen Feld folgt exakt aus den vollständigen
elliptischen Integralen K und E (berechnet über das arithmetisch-geometrische Mittel)."""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from fieldlines import tikz_path

R, LEN, N = 0.8, 3.6, 14
LOOPS = [-LEN / 2 + LEN * (k + 0.5) / N for k in range(N)]
BOX = (-3.4, -2.2, 3.4, 2.2)


def ellip(m):
    """K(m), E(m) mit m = k^2 über AGM."""
    a, b = 1.0, math.sqrt(1 - m)
    c2sum, p = m / 2, 0.5
    while abs(a - b) > 1e-14:
        c = (a - b) / 2
        a, b = (a + b) / 2, math.sqrt(a * b)
        p *= 2
        c2sum += p * c * c
    K = math.pi / (2 * a)
    return K, K * (1 - c2sum)


def loop(z, rho):
    """(B_z, B_rho) eines Rings Radius R bei axialem Abstand z, radial rho (mu0 I / 2 pi = 1)."""
    q = (R + rho) ** 2 + z * z
    m = 4 * R * rho / q
    K, E = ellip(min(m, 1 - 1e-12))
    d = (R - rho) ** 2 + z * z
    bz = (K + (R * R - rho * rho - z * z) / d * E) / math.sqrt(q)
    if rho < 1e-9:
        return bz, 0.0
    br = z / (rho * math.sqrt(q)) * (-K + (R * R + rho * rho + z * z) / d * E)
    return bz, br


def field(x, y):
    bx = by = 0.0
    rho, s = abs(y), (1 if y >= 0 else -1)
    for x0 in LOOPS:
        bz, br = loop(x - x0, rho)
        bx += bz
        by += s * br
    return bx, by


def trace(x, y, direction, h=0.012):
    pts, x0, y0 = [(x, y)], x, y
    for step in range(4000):
        def d(px, py):
            bx, by = field(px, py)
            n = math.hypot(bx, by) or 1.0
            return direction * bx / n, direction * by / n
        k1 = d(x, y)
        k2 = d(x + h / 2 * k1[0], y + h / 2 * k1[1])
        k3 = d(x + h / 2 * k2[0], y + h / 2 * k2[1])
        k4 = d(x + h * k3[0], y + h * k3[1])
        x += h / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0])
        y += h / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])
        pts.append((x, y))
        if step > 50 and math.hypot(x - x0, y - y0) < h:
            return pts, True  # geschlossen
        if not (BOX[0] <= x <= BOX[2] and BOX[1] <= y <= BOX[3]):
            return pts, False
    return pts, False


lines = []
for rho in (0.0, 0.2, 0.38, 0.54, 0.66):
    for sgn in ((1,) if rho == 0 else (1, -1)):
        fwd, closed = trace(0.0, sgn * rho, 1)
        pts = fwd
        if not closed:
            back, _ = trace(0.0, sgn * rho, -1)
            pts = back[::-1] + fwd[1:]
        lines.append(tikz_path(pts, "blue, line width=0.7pt, postaction={decorate}, decoration={markings, "
                               "mark=at position 0.25 with {\\arrow{Stealth[length=4.5pt,width=3.6pt]}}, "
                               "mark=at position 0.75 with {\\arrow{Stealth[length=4.5pt,width=3.6pt]}}}"))

out = os.path.join(os.path.dirname(__file__), "..", "data")
with open(os.path.join(out, "spule-feld.tex"), "w") as fh:
    fh.write("\n".join(lines) + "\n")
print("B im Zentrum (Richtung):", field(0, 0))
