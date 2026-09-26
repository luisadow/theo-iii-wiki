"""Numerische Feldlinien für Punktladungen in 2D (Schnitt durch die Symmetrieebene).

Integriert dr/ds = E/|E| mit RK4 und schreibt TikZ-Pfade, die ein .tex per
\\input{data/<name>.tex} einbindet. Koordinaten in cm, wie in TikZ.
"""
import math


def field(charges, x, y):
    ex = ey = 0.0
    for q, cx, cy in charges:
        dx, dy = x - cx, y - cy
        r3 = (dx * dx + dy * dy) ** 1.5
        if r3 < 1e-12:
            continue
        ex += q * dx / r3
        ey += q * dy / r3
    return ex, ey


def trace(charges, x, y, direction=1.0, h=0.01, box=(-5, -5, 5, 5), stop=None, max_steps=4000):
    """Folgt der Feldlinie ab (x, y); endet am Rand, nahe einer Ladung oder wenn stop(x, y)."""
    pts = [(x, y)]
    x0, y0, x1, y1 = box

    def f(px, py):
        ex, ey = field(charges, px, py)
        n = math.hypot(ex, ey) or 1.0
        return direction * ex / n, direction * ey / n

    prev = None
    for _ in range(max_steps):
        k1 = f(x, y)
        # Knick > 45° in einem Schritt: Nullstelle des Feldes (Sattelpunkt) erreicht -> anhalten
        if prev and k1[0] * prev[0] + k1[1] * prev[1] < 0.7:
            break
        prev = k1
        k2 = f(x + h / 2 * k1[0], y + h / 2 * k1[1])
        k3 = f(x + h / 2 * k2[0], y + h / 2 * k2[1])
        k4 = f(x + h * k3[0], y + h * k3[1])
        x += h / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0])
        y += h / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])
        if stop and stop(x, y):
            break
        pts.append((x, y))
        if not (x0 <= x <= x1 and y0 <= y <= y1):
            break
        if any(math.hypot(x - cx, y - cy) < 0.14 for q, cx, cy in charges if q * direction < 0):
            break
    return pts


def seeds(cx, cy, n, r=0.14, offset=0.0):
    return [(cx + r * math.cos(2 * math.pi * (k + offset) / n), cy + r * math.sin(2 * math.pi * (k + offset) / n)) for k in range(n)]


def simplify(pts, every=3):
    """Jeden n-ten Punkt behalten (plus Endpunkt); bei h=0.01 cm bleibt der Polygonzug glatt."""
    out = pts[::every]
    if out[-1] != pts[-1]:
        out.append(pts[-1])
    return out


def tikz_path(pts, style):
    coords = " ".join(f"({x:.3f},{y:.3f})" for x, y in simplify(pts))
    return f"\\draw[{style}] plot coordinates {{{coords}}};"


def split_at(pts, pred):
    """Zerlegt eine Punktliste in zusammenhängende Stücke mit gleichem pred-Wert."""
    parts, cur, state = [], [pts[0]], pred(*pts[0])
    for p in pts[1:]:
        s = pred(*p)
        if s != state:
            cur.append(p)
            parts.append((state, cur))
            cur, state = [p], s
        else:
            cur.append(p)
    parts.append((state, cur))
    return parts
