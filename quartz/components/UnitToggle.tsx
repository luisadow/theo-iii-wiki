// @ts-ignore
import unitToggleScript from "./scripts/unittoggle.inline"
import styles from "./styles/unittoggle.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { Element, Node, Parent } from "hast"
import { readFileSync } from "fs"
// katex kommt als Abhängigkeit von rehype-katex mit
import katex from "katex"

interface UnitToggleOptions {
  label?: string
}

const defaultOptions: UnitToggleOptions = {
  label: "Einheiten:",
}

// SI-Konstanten, an denen man eine einheitenabhängige Seite erkennt. KaTeX rendert mit
// output: "html" (ohne TeX-Annotation), deshalb wird der Markdown-Quelltext durchsucht.
const SI_CONSTANT = /\\(?:var)?epsilon_\{?0\}?|\\mu_\{?0\}?/

function hasUnitVariants(node: Node): boolean {
  if (node.type === "element") {
    const cls = (node as Element).properties?.className
    const classes = Array.isArray(cls) ? cls.map(String) : []
    if (classes.includes("unit-si") || classes.includes("unit-gauss")) return true
  }
  return ((node as Parent).children ?? []).some(hasUnitVariants)
}

function usesSIConstants(filePath: string | undefined): boolean {
  if (!filePath) return false
  try {
    return SI_CONSTANT.test(readFileSync(filePath, "utf8"))
  } catch {
    return false
  }
}

const m = (tex: string) => katex.renderToString(tex, { throwOnError: false })

// Formale Ersetzung SI → Gauß (vgl. Jackson, Anhang). Einmal beim Build gerendert.
const fallbackHtml = `
<p><strong>Diese Seite ist nur in SI-Einheiten geschrieben.</strong> So übersetzt du ihre Formeln ins Gauß-System der Vorlesung:</p>
<table>
<thead><tr><th>Ersetze</th><th>durch</th><th>Beispiel</th></tr></thead>
<tbody>
<tr><td>${m("\\varepsilon_0")}</td><td>${m("\\tfrac{1}{4\\pi}")}</td><td>${m("\\nabla\\cdot\\mathbf E = \\rho/\\varepsilon_0 \\;\\to\\; \\nabla\\cdot\\mathbf E = 4\\pi\\rho")}</td></tr>
<tr><td>${m("\\mu_0")}</td><td>${m("\\tfrac{4\\pi}{c^2}")}</td><td>${m("\\varepsilon_0\\mu_0 = 1/c^2")} bleibt richtig</td></tr>
<tr><td>${m("\\mathbf B,\\ \\mathbf A")}</td><td>${m("\\mathbf B/c,\\ \\mathbf A/c")}</td><td>${m("\\nabla\\times\\mathbf E = -\\tfrac{1}{c}\\partial_t\\mathbf B")}</td></tr>
<tr><td>${m("\\mathbf D,\\ \\mathbf H")}</td><td>${m("\\tfrac{\\mathbf D}{4\\pi},\\ \\tfrac{c\\,\\mathbf H}{4\\pi}")}</td><td>${m("\\mathbf D = \\mathbf E + 4\\pi\\mathbf P")}</td></tr>
<tr><td>${m("\\mathbf M")}</td><td>${m("c\\,\\mathbf M")}</td><td>${m("\\mathbf B = \\mathbf H + 4\\pi\\mathbf M")}</td></tr>
</tbody>
</table>
<p>Unverändert bleiben ${m("\\mathbf E,\\ \\phi,\\ q,\\ \\rho,\\ \\mathbf J,\\ \\mathbf P")}. Vorsicht bei Green-Funktionen: Die Vorlesung nimmt ${m("G = -\\frac{1}{4\\pi\\lvert\\mathbf r-\\mathbf r'\\rvert}")} mit ${m("\\Delta G = +\\delta")} – das ist eine Vorzeichenkonvention, keine Einheitenfrage.</p>
`

/** Die beiden Buttons. content/index.md baut dasselbe Markup von Hand nach (gleiche Klassen). */
export const UnitButtons = () => (
  <div class="unit-toggle-group" role="group" aria-label="Einheitensystem umschalten">
    <button
      type="button"
      class="unit-btn active"
      data-unit-target="si"
      aria-pressed="true"
      title="Internationales Einheitensystem (SI)"
    >
      SI
    </button>
    <button
      type="button"
      class="unit-btn"
      data-unit-target="gauss"
      aria-pressed="false"
      title="Gaußsches CGS-System (Vorlesung WiSe 26/27, Prof. Weimer)"
    >
      Gauß
    </button>
  </div>
)

export default ((opts?: Partial<UnitToggleOptions>) => {
  const options = { ...defaultOptions, ...opts }

  const UnitToggle: QuartzComponent = ({ displayClass, tree, fileData }: QuartzComponentProps) => {
    const hasVariants = hasUnitVariants(tree)
    // Seiten ohne Einheiten (Mathe-Grundlagen, Relativität ohne Felder …) brauchen keinen Switch
    if (!hasVariants && !usesSIConstants(fileData.filePath)) return null

    return (
      <>
        <div
          class={classNames(displayClass, "unit-toggle-container")}
          role="region"
          aria-label="Einheitensystem-Auswahl"
        >
          <span class="unit-toggle-label">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            {options.label}
          </span>
          <UnitButtons />
        </div>
        {!hasVariants && (
          // Seite ist (noch) nur in SI geschrieben: im Gauß-Modus Übersetzungsregeln einblenden
          <div
            class="unit-gauss unit-fallback"
            dangerouslySetInnerHTML={{ __html: fallbackHtml }}
          />
        )}
      </>
    )
  }

  UnitToggle.beforeDOMLoaded = unitToggleScript
  UnitToggle.css = styles

  return UnitToggle
}) satisfies QuartzComponentConstructor
