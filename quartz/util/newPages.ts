import { QuartzPluginData } from "../plugins/vfile"

// Seiten, die im laufenden Semester dazugekommen sind, bekommen ein „neu“-Badge
// (Seitenkopf und Kapitelübersichten). Maßgeblich ist `date` im Frontmatter, also das
// Erstelldatum der Seite. Zum nächsten Semester das Datum weitersetzen.
export const NEW_SINCE = "2026-10-01"
export const NEW_LABEL = "neu"
export const NEW_TITLE = "Neu im WiSe 26/27"

export function isNewPage(page: QuartzPluginData): boolean {
  const date: unknown = page.frontmatter?.date
  if (date === undefined || date === null) return false
  const iso = date instanceof Date ? date.toISOString() : String(date)
  return iso.slice(0, 10) >= NEW_SINCE
}
