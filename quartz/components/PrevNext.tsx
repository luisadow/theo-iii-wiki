import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"

interface Options {
  /** Dateinamen (ohne .md) in Lesereihenfolge */
  order: string[]
}

const baseName = (file: QuartzPluginData) =>
  (file.relativePath ?? "").split("/").pop()!.replace(/\.md$/, "").normalize("NFC")

/**
 * „Zurück / Weiter“-Navigation am Seitenende entlang einer festen Lesereihenfolge.
 * Seiten, die nicht in der Reihenfolge vorkommen, bekommen keine Navigation.
 */
export default ((opts: Options) => {
  const order = opts.order.map((n) => n.normalize("NFC"))

  const PrevNext: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    const idx = order.indexOf(baseName(fileData))
    if (idx === -1) return null

    const find = (name?: string) =>
      name === undefined ? undefined : allFiles.find((f) => baseName(f) === name)
    const prev = find(order[idx - 1])
    const next = find(order[idx + 1])

    const link = (file: QuartzPluginData | undefined, dir: "prev" | "next") =>
      file ? (
        <a class={`prevnext-link ${dir} internal`} href={resolveRelative(fileData.slug!, file.slug!)}>
          <span class="prevnext-label">{dir === "prev" ? "← Zurück" : "Weiter →"}</span>
          <span class="prevnext-title">{file.frontmatter?.title}</span>
        </a>
      ) : (
        <span />
      )

    return (
      <nav class="prevnext" aria-label="Seitennavigation">
        {link(prev, "prev")}
        <span class="prevnext-pos">
          {idx + 1} / {order.length}
        </span>
        {link(next, "next")}
      </nav>
    )
  }

  PrevNext.css = `
.prevnext {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: stretch;
  gap: 0.75rem;
  margin: 2.5rem 0 1rem;
}
.prevnext-link {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--lightgray);
  text-decoration: none !important;
}
.prevnext-link.next {
  text-align: right;
}
.prevnext-link:hover {
  border-color: var(--secondary);
}
.prevnext-label {
  font-size: 0.8rem;
  color: var(--gray);
}
.prevnext-title {
  font-weight: 600;
  color: var(--dark);
}
.prevnext-pos {
  align-self: center;
  font-family: var(--codeFont);
  font-size: 0.8rem;
  color: var(--gray);
}
@media (max-width: 800px) {
  .prevnext {
    grid-template-columns: 1fr 1fr;
  }
  .prevnext-pos {
    display: none;
  }
}
`
  return PrevNext
}) satisfies QuartzComponentConstructor<Options>
