import remarkMath from "remark-math"
import { remarkUnitVariants } from "./unitVariants"
import rehypeKatex from "rehype-katex"
import rehypeMathjax from "rehype-mathjax/svg"
//@ts-ignore
import rehypeTypst from "@myriaddreamin/rehype-typst"
import { QuartzTransformerPlugin } from "../types"
import { KatexOptions } from "katex"
import { Options as MathjaxOptions } from "rehype-mathjax/svg"
//@ts-ignore
import { Options as TypstOptions } from "@myriaddreamin/rehype-typst"

interface Options {
  renderEngine: "katex" | "mathjax" | "typst"
  customMacros: MacroType
  katexOptions: Omit<KatexOptions, "macros" | "output">
  mathJaxOptions: Omit<MathjaxOptions, "macros">
  typstOptions: TypstOptions
}

// mathjax macros
export type Args = boolean | number | string | null
interface MacroType {
  [key: string]: string | Args[]
}

export const Latex: QuartzTransformerPlugin<Partial<Options>> = (opts) => {
  const engine = opts?.renderEngine ?? "katex"
  const macros = opts?.customMacros ?? {}
  return {
    name: "Latex",
    markdownPlugins() {
      // \sg{SI}{Gauß} in Formeln → zwei Varianten für den Einheiten-Umschalter
      return [remarkMath, remarkUnitVariants]
    },
    htmlPlugins() {
      switch (engine) {
        case "katex": {
          return [[rehypeKatex, { output: "html", macros, ...(opts?.katexOptions ?? {}) }]]
        }
        case "typst": {
          return [[rehypeTypst, opts?.typstOptions ?? {}]]
        }
        default:
        case "mathjax": {
          return [
            [
              rehypeMathjax,
              {
                ...(opts?.mathJaxOptions ?? {}),
                tex: {
                  ...(opts?.mathJaxOptions?.tex ?? {}),
                  macros,
                },
              },
            ],
          ]
        }
      }
    },
    externalResources() {
      switch (engine) {
        case "katex":
          return {
            // selbst gehostet in quartz/static/katex (Version wie node_modules/katex)
            css: [{ content: "/static/katex/katex.min.css" }],
            js: [
              {
                // fix copy behaviour: https://github.com/KaTeX/KaTeX/blob/main/contrib/copy-tex/README.md
                src: "/static/katex/copy-tex.min.js",
                loadTime: "afterDOMReady",
                contentType: "external",
              },
            ],
          }
      }
    },
  }
}
