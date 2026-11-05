import { Root, Parent, RootContent } from "mdast"
import { visit, SKIP } from "unist-util-visit"

/**
 * Einheiten-Varianten in Formeln: `\sg{SI-Teil}{Gauß-Teil}`.
 *
 *   $\nabla\cdot\mathbf E = \sg{\rho/\varepsilon_0}{4\pi\rho}$
 *
 * wird zu zwei Formeln, eingewickelt in `.unit-si` bzw. `.unit-gauss`; der Umschalter
 * (UnitToggle) blendet per CSS eine davon aus. Mehrere und verschachtelte `\sg` sind erlaubt.
 * Läuft direkt nach remark-math, also bevor KaTeX rendert.
 */

const MACRO = "\\sg"

type Unit = "si" | "gauss"

/** Liest eine {…}-Gruppe ab `start` (muss auf `{` zeigen); gibt Inhalt und Endindex zurück. */
function readGroup(tex: string, start: number): { body: string; end: number } | null {
  if (tex[start] !== "{") return null
  let depth = 0
  for (let i = start; i < tex.length; i++) {
    const ch = tex[i]
    if (ch === "\\") {
      i++ // \{ und \} zählen nicht als Klammern
      continue
    }
    if (ch === "{") depth++
    else if (ch === "}" && --depth === 0) return { body: tex.slice(start + 1, i), end: i + 1 }
  }
  return null
}

const skipSpace = (tex: string, i: number) => {
  while (i < tex.length && /\s/.test(tex[i])) i++
  return i
}

/** Ersetzt jedes `\sg{a}{b}` durch a (SI) oder b (Gauß). Unvollständige Makros bleiben stehen. */
export function resolveUnits(tex: string, unit: Unit): string {
  let out = ""
  let i = 0
  while (i < tex.length) {
    const at = tex.indexOf(MACRO, i)
    // \sg muss als eigener Befehl stehen, nicht als Anfang von z. B. \sgn
    if (at === -1 || /[a-zA-Z]/.test(tex[at + MACRO.length] ?? "")) {
      if (at === -1) return out + tex.slice(i)
      out += tex.slice(i, at + MACRO.length)
      i = at + MACRO.length
      continue
    }
    const a = readGroup(tex, skipSpace(tex, at + MACRO.length))
    const b = a && readGroup(tex, skipSpace(tex, a.end))
    if (!a || !b) {
      out += tex.slice(i, at + MACRO.length)
      i = at + MACRO.length
      continue
    }
    // wie eine TeX-Makroexpansion ohne zusätzliche Klammern (sonst gehen Operator-Abstände verloren)
    out += tex.slice(i, at) + resolveUnits(unit === "si" ? a.body : b.body, unit)
    i = b.end
  }
  return out
}

export const hasUnitMacro = (tex: string) => resolveUnits(tex, "si") !== tex

const wrap = (unit: Unit, tag: "span" | "div", child: RootContent): RootContent =>
  ({
    type: "unitVariant",
    data: { hName: tag, hProperties: { className: [`unit-${unit}`] } },
    children: [child],
  }) as unknown as RootContent

// remark-math legt den TeX-Text zusätzlich in data.hChildren ab; dort muss er mit ersetzt werden
function withValue(node: any, value: string): RootContent {
  const replaceText = (n: any): any =>
    n.type === "text"
      ? { ...n, value }
      : n.children
        ? { ...n, children: n.children.map(replaceText) }
        : { ...n }
  const data = node.data
    ? { ...node.data, hChildren: node.data.hChildren?.map(replaceText) }
    : undefined
  return { ...node, value, ...(data ? { data } : {}) }
}

export function remarkUnitVariants() {
  return (tree: Root) => {
    visit(tree, ["math", "inlineMath"], (node, index, parent) => {
      const math = node as RootContent & { value: string }
      if (index === undefined || !parent || !hasUnitMacro(math.value)) return
      const tag = node.type === "math" ? "div" : "span"
      const variants = (["si", "gauss"] as const).map((unit) =>
        wrap(unit, tag, withValue(math, resolveUnits(math.value, unit))),
      )
      ;(parent as Parent).children.splice(index, 1, ...variants)
      return [SKIP, index + variants.length]
    })
  }
}
