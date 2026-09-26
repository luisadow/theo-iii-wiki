#!/usr/bin/env node
// Vorschau: rendert Abbildungen hell/dunkel nebeneinander als PNG.
//
//   node figures/preview.mjs <out.png> name [name ...]
//
// Nutzt dieselben CSS-Variablen wie die Website und headless Chromium/Chrome.

import { execFileSync } from "node:child_process"
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.dirname(fileURLToPath(import.meta.url))
const figDir = path.join(root, "..", "content", "assets", "figures")
const [out, ...names] = process.argv.slice(2)
if (!out || !names.length) {
  console.error("usage: node figures/preview.mjs <out.png> name [name ...]")
  process.exit(1)
}

const browsers = [
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
]
const browser = browsers.find(existsSync)
if (!browser) throw new Error("Chromium/Chrome nicht gefunden")

const vars = {
  light: `--light:#faf8f8;--gray:#b8b8b8;--dark:#2b2b2b;--darkgray:#4e4e4e;--secondary:#4a6a00;--fig-blue:#2563a8;--fig-warm:#b8432b`,
  dark: `--light:#161618;--gray:#646464;--dark:#ebebec;--darkgray:#d4d4d4;--secondary:#d7ff1a;--fig-blue:#7aa7ff;--fig-warm:#ff8f6b`,
}
const cells = names
  .map((n) => {
    const svg = readFileSync(path.join(figDir, `${n}.svg`), "utf8")
    return ["light", "dark"]
      .map((t) => `<div class="cell" style="${vars[t]};background:var(--light)">${svg}</div>`)
      .join("")
  })
  .join("")
const html = `<!doctype html><meta charset="utf-8"><style>
body{margin:0;background:#888;font-family:sans-serif}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:4px;width:max-content}
.cell{padding:24px;display:flex;align-items:center;justify-content:center}
</style><div class="grid">${cells}</div>`

const tmp = mkdtempSync(path.join(tmpdir(), "figprev-"))
const htmlPath = path.join(tmp, "p.html")
writeFileSync(htmlPath, html)

// Seitengröße grob aus den SVG-Maßen schätzen
let w = 0,
  h = 0
for (const n of names) {
  const s = readFileSync(path.join(figDir, `${n}.svg`), "utf8")
  const [, sw, sh] = s.match(/width="([\d.]+)" height="([\d.]+)"/).map(Number)
  w = Math.max(w, sw)
  h += sh + 52
}
execFileSync(
  browser,
  [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=2",
    `--window-size=${Math.ceil(2 * (w + 48) + 4)},${Math.ceil(h + 4)}`,
    `--screenshot=${path.resolve(out)}`,
    `file://${htmlPath}`,
  ],
  { stdio: "ignore" },
)
console.log(path.resolve(out))
