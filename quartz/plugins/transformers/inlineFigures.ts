import { Element, Root } from "hast"
import { fromHtml } from "hast-util-from-html"
import { readFileSync } from "fs"
import path from "path"
import { visit } from "unist-util-visit"
import { QuartzTransformerPlugin } from "../types"

// Setzt Abbildungen aus content/assets/figures (gebaut mit figures/build.mjs)
// inline statt als <img> ein, damit sie die Farbvariablen der Seite erben und
// mit dem Hell-/Dunkelmodus wechseln. In Obsidian bleiben es normale Embeds:
//
//   ![[gauss-flaeche.svg|Bildunterschrift]]   -> <figure> mit <figcaption>
//   ![[icon-elektrostatik.svg]]               -> dekoratives Icon (icon-*)
//   <img src="assets/figures/icon-….svg">     -> auch in HTML-Blöcken

const figureSrc = /(?:^|\/)assets\/figures\/([\w-]+)\.svg$/

export const InlineFigures: QuartzTransformerPlugin = () => ({
  name: "InlineFigures",
  htmlPlugins(ctx) {
    const cache = new Map<string, Element>()
    const load = (name: string): Element => {
      if (!cache.has(name)) {
        const file = path.join(ctx.argv.directory, "assets", "figures", `${name}.svg`)
        const svg = fromHtml(readFileSync(file, "utf8"), { fragment: true }).children.find(
          (n): n is Element => n.type === "element" && n.tagName === "svg",
        )
        if (!svg) throw new Error(`${file}: kein <svg> gefunden`)
        cache.set(name, svg)
      }
      return structuredClone(cache.get(name)!)
    }

    return [
      () => (tree: Root) => {
        visit(tree, "element", (node, index, parent) => {
          if (node.tagName !== "img" || !parent || index === undefined) return
          const src = decodeURI(String(node.properties?.src ?? ""))
          const name = src.match(figureSrc)?.[1]
          if (!name) return

          const svg = load(name)
          const alt = String(node.properties?.alt ?? "").trim()
          let replacement: Element
          if (name.startsWith("icon-")) {
            svg.properties["aria-hidden"] = "true"
            replacement = {
              type: "element",
              tagName: "span",
              properties: { className: ["fig-icon"] },
              children: [svg],
            }
          } else {
            svg.properties.role = "img"
            if (alt) svg.properties["aria-label"] = alt
            replacement = {
              type: "element",
              tagName: "figure",
              properties: { className: ["fig"] },
              children: alt
                ? [
                    svg,
                    {
                      type: "element",
                      tagName: "figcaption",
                      properties: {},
                      children: [{ type: "text", value: alt }],
                    },
                  ]
                : [svg],
            }
          }

          // Ein Embed allein im Absatz: den <p> ersetzen (<figure> darf nicht in <p>)
          const onlyChild =
            parent.type === "element" &&
            parent.tagName === "p" &&
            parent.children.every((c) => c === node || (c.type === "text" && !c.value.trim()))
          if (onlyChild && !name.startsWith("icon-")) {
            Object.assign(parent, replacement)
          } else {
            parent.children[index] = replacement
          }
        })
      },
    ]
  },
})
