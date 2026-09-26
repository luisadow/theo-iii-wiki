#!/usr/bin/env node
// Baut die Abbildungen: figures/src/<name>.tex -> content/assets/figures/<name>.svg
//
//   node figures/build.mjs            alle Abbildungen
//   node figures/build.mjs dipol ...  nur die genannten
//
// Braucht tectonic (brew install tectonic) und pdftocairo (brew install poppler).
// Vor dem Kompilieren laufen passende Python-Generatoren figures/gen/<name>.py
// (z. B. für numerisch berechnete Feldlinien), die figures/data/<name>*.dat schreiben.

import { execFileSync } from "node:child_process"
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.join(root, "src")
const genDir = path.join(root, "gen")
const outDir = path.join(root, "..", "content", "assets", "figures")

// Sentinel-RGB aus style.tex -> CSS-Variable im SVG
const palette = {
  "1,2,3": "--f-fg",
  "4,5,6": "--f-mu",
  "7,8,9": "--f-acc",
  "10,11,12": "--f-blue",
  "13,14,15": "--f-warm",
  "16,17,18": "--f-bg",
}

// Werte der Website (quartz.config.ts / custom.scss) als Fallback, wenn das SVG
// als Bild eingebunden ist (Obsidian) und die Seitenvariablen fehlen.
const fallback = {
  light: {
    "--f-fg": "var(--dark,#2b2b2b)",
    "--f-mu": "color-mix(in srgb,var(--gray,#b8b8b8) 55%,var(--darkgray,#4e4e4e))",
    "--f-acc": "var(--secondary,#4a6a00)",
    "--f-blue": "var(--fig-blue,#2563a8)",
    "--f-warm": "var(--fig-warm,#b8432b)",
    "--f-bg": "var(--light,#faf8f8)",
  },
  dark: {
    "--f-fg": "var(--dark,#ebebec)",
    "--f-mu": "color-mix(in srgb,var(--gray,#646464) 55%,var(--darkgray,#d4d4d4))",
    "--f-acc": "var(--secondary,#d7ff1a)",
    "--f-blue": "var(--fig-blue,#7aa7ff)",
    "--f-warm": "var(--fig-warm,#ff8f6b)",
    "--f-bg": "var(--light,#161618)",
  },
}

// TeX-Punkt -> CSS-Pixel. 1pt = 4/3 px; ×1.45, damit \small-Beschriftungen
// etwa so groß wie der Fließtext der Seite erscheinen.
const PX_PER_PT = (4 / 3) * 1.45

const styleBlock = (() => {
  const decl = (m) =>
    Object.entries(m)
      .map(([k, v]) => `${k}:${v}`)
      .join(";")
  return (
    `<style>.tikzfig{${decl(fallback.light)}}` +
    `@media (prefers-color-scheme:dark){.tikzfig{${decl(fallback.dark)}}}</style>`
  )
})()

function sentinel(rgb) {
  const [r, g, b] = rgb.split(",").map((p) => Math.round(parseFloat(p) * 2.55))
  const key = `${r},${g},${b}`
  if (!(key in palette)) throw new Error(`Farbe rgb(${key}) ist nicht in der Palette`)
  return palette[key]
}

function postprocess(svg, name) {
  svg = svg.replace(/<\?xml[^>]*>\s*/, "")

  // fill/stroke-Attribute -> ein style-Attribut mit CSS-Variablen
  // (Präsentationsattribute akzeptieren kein var())
  svg = svg.replace(/<([a-zA-Z]+)(\s[^>]*?)(\/?)>/g, (tag, el, attrs, close) => {
    const styles = []
    attrs = attrs.replace(
      /\s(fill|stroke)="rgb\(([^)]*)\)"/g,
      (_, prop, rgb) => (styles.push(`${prop}:var(${sentinel(rgb.replace(/%/g, ""))})`), ""),
    )
    if (/\s(fill|stroke)="(?!none)[^"]*"/.test(attrs.replace(/fill-rule="[^"]*"/, "")))
      throw new Error(`${name}: unbekannte Farbe in ${tag.slice(0, 120)}`)
    if (!styles.length) return tag
    return `<${el}${attrs} style="${styles.join(";")}"${close}>`
  })

  // IDs eindeutig machen, weil mehrere SVGs inline auf einer Seite landen
  svg = svg
    .replace(/\sid="([^"]+)"/g, (_, id) => ` id="${name}-${id}"`)
    .replace(/(?:xlink:)?href="#([^"]+)"/g, (_, id) => `href="#${name}-${id}"`)
    .replace(/\sxmlns:xlink="[^"]*"/, "")
    .replace(/url\(#([^)]+)\)/g, (_, id) => `url(#${name}-${id})`)

  // Wurzel: feste Pixelgröße aus der viewBox, Klasse, Style-Block
  svg = svg.replace(/<svg([^>]*)>/, (_, attrs) => {
    const [, , w, h] = attrs
      .match(/viewBox="([^"]+)"/)[1]
      .split(/\s+/)
      .map(Number)
    attrs = attrs
      .replace(/\swidth="[^"]*"/, ` width="${(w * PX_PER_PT).toFixed(1)}"`)
      .replace(/\sheight="[^"]*"/, ` height="${(h * PX_PER_PT).toFixed(1)}"`)
    return `<svg${attrs} class="tikzfig" data-fig="${name}">${styleBlock}`
  })

  // Zahlen kürzen (pdftocairo schreibt 6 Nachkommastellen)
  svg = svg.replace(/(\d+\.\d{2})\d+/g, "$1")
  return svg.trim() + "\n"
}

function build(name) {
  const gen = path.join(genDir, `${name}.py`)
  if (existsSync(gen)) execFileSync("python3", [gen], { cwd: root, stdio: "inherit" })

  const tmp = mkdtempSync(path.join(tmpdir(), "fig-"))
  execFileSync(
    "tectonic",
    [
      "-X",
      "compile",
      "--outdir",
      tmp,
      "-Z",
      `search-path=${root}`,
      path.join(srcDir, `${name}.tex`),
    ],
    { cwd: root, stdio: ["ignore", "ignore", "inherit"] },
  )
  const svgTmp = path.join(tmp, `${name}.svg`)
  execFileSync("pdftocairo", ["-svg", path.join(tmp, `${name}.pdf`), svgTmp])
  const svg = postprocess(readFileSync(svgTmp, "utf8"), name)
  writeFileSync(path.join(outDir, `${name}.svg`), svg)
  console.log(`✓ ${name}.svg (${(svg.length / 1024).toFixed(1)} KiB)`)
}

mkdirSync(outDir, { recursive: true })
const names = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync(srcDir)
      .filter((f) => f.endsWith(".tex"))
      .map((f) => f.slice(0, -4))
let failed = 0
for (const name of names) {
  try {
    build(name)
  } catch (e) {
    failed++
    console.error(`✗ ${name}: ${e.message}`)
  }
}
process.exit(failed ? 1 : 0)
