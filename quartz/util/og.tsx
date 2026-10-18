import { promises as fs, readFileSync } from "fs"
import { FontWeight, SatoriOptions } from "satori/wasm"
import { GlobalConfiguration } from "../cfg"
import { QuartzPluginData } from "../plugins/vfile"
import { JSXInternal } from "preact/src/jsx"
import { ColorScheme, FontSpecification, getFontSpecificationName, ThemeKey } from "./theme"
import path from "path"
import { QUARTZ } from "./path"
import { formatDate, getDate } from "../components/Date"
import readingTime from "reading-time"
import { i18n } from "../i18n"
import { styleText } from "util"

const defaultHeaderWeight = [700]
const defaultBodyWeight = [400]

export async function getSatoriFonts(headerFont: FontSpecification, bodyFont: FontSpecification) {
  // Get all weights for header and body fonts
  const headerWeights: FontWeight[] = (
    typeof headerFont === "string"
      ? defaultHeaderWeight
      : (headerFont.weights ?? defaultHeaderWeight)
  ) as FontWeight[]
  // 700 zusätzlich: Oxanium hat keine griechischen Buchstaben, Satori weicht für δ, ε … auf die
  // Textschrift aus – in fetter Ausführung passen sie zu fetten Überschriften
  const bodyWeights: FontWeight[] = [
    ...new Set([
      ...((typeof bodyFont === "string"
        ? defaultBodyWeight
        : (bodyFont.weights ?? defaultBodyWeight)) as FontWeight[]),
      700 as FontWeight,
    ]),
  ]

  const headerFontName = typeof headerFont === "string" ? headerFont : headerFont.name
  const bodyFontName = typeof bodyFont === "string" ? bodyFont : bodyFont.name

  // Fetch fonts for all weights and convert to satori format in one go
  const headerFontPromises = headerWeights.map(async (weight) => {
    const data = await fetchTtf(headerFontName, weight)
    if (!data) return null
    return {
      name: headerFontName,
      data,
      weight,
      style: "normal" as const,
    }
  })

  const bodyFontPromises = bodyWeights.map(async (weight) => {
    const data = await fetchTtf(bodyFontName, weight)
    if (!data) return null
    return {
      name: bodyFontName,
      data,
      weight,
      style: "normal" as const,
    }
  })

  const [headerFonts, bodyFonts] = await Promise.all([
    Promise.all(headerFontPromises),
    Promise.all(bodyFontPromises),
  ])

  // Filter out any failed fetches and combine header and body fonts
  const fonts: SatoriOptions["fonts"] = [
    ...headerFonts.filter((font): font is NonNullable<typeof font> => font !== null),
    ...bodyFonts.filter((font): font is NonNullable<typeof font> => font !== null),
  ]

  return fonts
}

/**
 * Get the `.ttf` file of a google font
 * @param fontName name of google font
 * @param weight what font weight to fetch font
 * @returns `.ttf` file of google font
 */
export async function fetchTtf(
  rawFontName: string,
  weight: FontWeight,
): Promise<Buffer<ArrayBufferLike> | undefined> {
  const fontName = rawFontName.replaceAll(" ", "+")
  const cacheKey = `${fontName}-${weight}`
  const cacheDir = path.join(QUARTZ, ".quartz-cache", "fonts")
  const cachePath = path.join(cacheDir, cacheKey)

  // Check if font exists in cache
  try {
    await fs.access(cachePath)
    return fs.readFile(cachePath)
  } catch (error) {
    // ignore errors and fetch font
  }

  // Get css file from google fonts
  const cssResponse = await fetch(
    `https://fonts.googleapis.com/css2?family=${fontName}:wght@${weight}`,
  )
  const css = await cssResponse.text()

  // Extract .ttf url from css file
  const urlRegex = /url\((https:\/\/fonts.gstatic.com\/s\/.*?.ttf)\)/g
  const match = urlRegex.exec(css)

  if (!match) {
    console.log(
      styleText(
        "yellow",
        `\nWarning: Failed to fetch font ${rawFontName} with weight ${weight}, got ${cssResponse.statusText}`,
      ),
    )
    return
  }

  // fontData is an ArrayBuffer containing the .ttf file data
  const fontResponse = await fetch(match[1])
  const fontData = Buffer.from(await fontResponse.arrayBuffer())
  await fs.mkdir(cacheDir, { recursive: true })
  await fs.writeFile(cachePath, fontData)

  return fontData
}

export type SocialImageOptions = {
  /**
   * What color scheme to use for image generation (uses colors from config theme)
   */
  colorScheme: ThemeKey
  /**
   * Height to generate image with in pixels (should be around 630px)
   */
  height: number
  /**
   * Width to generate image with in pixels (should be around 1200px)
   */
  width: number
  /**
   * Whether to use the auto generated image for the root path ("/", when set to false) or the default og image (when set to true).
   */
  excludeRoot: boolean
  /**
   * JSX to use for generating image. See satori docs for more info (https://github.com/vercel/satori)
   */
  imageStructure: (
    options: ImageOptions & {
      userOpts: UserOpts
      iconBase64?: string
    },
  ) => JSXInternal.Element
}

export type UserOpts = Omit<SocialImageOptions, "imageStructure">

export type ImageOptions = {
  /**
   * what title to use as header in image
   */
  title: string
  /**
   * what description to use as body in image
   */
  description: string
  /**
   * header + body font to be used when generating satori image (as promise to work around sync in component)
   */
  fonts: SatoriOptions["fonts"]
  /**
   * `GlobalConfiguration` of quartz (used for theme/typography)
   */
  cfg: GlobalConfiguration
  /**
   * full file data of current page
   */
  fileData: QuartzPluginData
}

// This is the default template for generated social image.
export const defaultImage: SocialImageOptions["imageStructure"] = ({
  cfg,
  userOpts,
  title,
  description,
  fileData,
  iconBase64,
}) => {
  const { colorScheme } = userOpts
  const fontBreakPoint = 32
  const useSmallerFont = title.length > fontBreakPoint

  // Format date if available
  const rawDate = getDate(cfg, fileData)
  const date = rawDate ? formatDate(rawDate, cfg.locale) : null

  // Calculate reading time
  const { minutes } = readingTime(fileData.text ?? "")
  const readingTimeText = i18n(cfg.locale).components.contentMeta.readingTime({
    minutes: Math.ceil(minutes),
  })

  // Get tags if available
  const tags = fileData.frontmatter?.tags ?? []
  const bodyFont = getFontSpecificationName(cfg.theme.typography.body)
  const headerFont = getFontSpecificationName(cfg.theme.typography.header)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        backgroundColor: cfg.theme.colors[colorScheme].light,
        padding: "2.5rem",
        fontFamily: bodyFont,
      }}
    >
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "0.5rem",
        }}
      >
        {iconBase64 && (
          <img
            src={iconBase64}
            width={56}
            height={56}
            style={{
              borderRadius: "50%",
            }}
          />
        )}
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: cfg.theme.colors[colorScheme].gray,
            fontFamily: bodyFont,
          }}
        >
          {cfg.baseUrl}
        </div>
      </div>

      {/* Title Section */}
      <div
        style={{
          display: "flex",
          marginTop: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: useSmallerFont ? 64 : 72,
            fontFamily: headerFont,
            fontWeight: 700,
            color: cfg.theme.colors[colorScheme].dark,
            lineHeight: 1.2,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </h1>
      </div>

      {/* Description Section */}
      <div
        style={{
          display: "flex",
          flex: 1,
          fontSize: 36,
          color: cfg.theme.colors[colorScheme].darkgray,
          lineHeight: 1.4,
        }}
      >
        <p
          style={{
            margin: 0,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 5,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </p>
      </div>

      {/* Footer with Metadata */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "2rem",
          paddingTop: "2rem",
          borderTop: `1px solid ${cfg.theme.colors[colorScheme].lightgray}`,
        }}
      >
        {/* Left side - Date and Reading Time */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            color: cfg.theme.colors[colorScheme].gray,
            fontSize: 28,
          }}
        >
          {date && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg
                style={{ marginRight: "0.5rem" }}
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {date}
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              style={{ marginRight: "0.5rem" }}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {readingTimeText}
          </div>
        </div>

        {/* Right side - Tags */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            maxWidth: "60%",
          }}
        >
          {tags.slice(0, 3).map((tag: string) => (
            <div
              style={{
                display: "flex",
                padding: "0.5rem 1rem",
                backgroundColor: cfg.theme.colors[colorScheme].highlight,
                color: cfg.theme.colors[colorScheme].secondary,
                borderRadius: "10px",
                fontSize: 24,
              }}
            >
              #{tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Theo-III-Vorschaubild (Link-Vorschau in WhatsApp, Telegram, Discord …), dunkles Theme der Seite.
// Titel und Beschreibung zeigen die Messenger ohnehin als Text unter dem Bild, deshalb steht im Bild
// nur das Nötigste: Startseite zentriert mit Logo und Hinweis auf die laufende Vorlesung,
// Unterseiten mit Kapitel, Titel und Icon.
const theo3Chapters: Record<string, { label: string; icon: string }> = {
  "01-Grundlagen": { label: "01 · Grundlagen", icon: "icon-grundlagen" },
  "02-Elektrostatik": { label: "02 · Elektrostatik", icon: "icon-elektrostatik" },
  "03-Randwertprobleme": { label: "03 · Randwertprobleme", icon: "icon-randwertprobleme" },
  "04-Materie": { label: "04 · Felder in Materie", icon: "icon-materie" },
  "05-Magnetostatik": { label: "05 · Magnetostatik", icon: "icon-magnetostatik" },
  "06-Elektrodynamik": { label: "06 · Elektrodynamik", icon: "icon-elektrodynamik" },
  "07-Relativität": { label: "07 · Relativität", icon: "icon-relativitaet" },
  Lernpfade: { label: "Lernpfade", icon: "icon-lernpfade" },
  Formelsammlung: { label: "Formelsammlung", icon: "icon-formelsammlung" },
  Glossar: { label: "Glossar", icon: "icon-glossar" },
}

// Hinweis-Label auf dem Startseiten-Bild; zum Semesterende anpassen oder leeren
const theo3HomeBadge = "Läuft mit: VL Prof. Weimer · WiSe 26/27"

// Die TikZ-Icons färben sich per CSS-Variablen; für das Vorschaubild feste Farben des dunklen Themes einsetzen.
const theo3IconCache = new Map<string, string | undefined>()
function theo3Icon(name: string, colors: ColorScheme): string | undefined {
  if (!name) return undefined
  if (!theo3IconCache.has(name)) {
    let svg: string | undefined
    try {
      svg = readFileSync(path.join("content", "assets", "figures", `${name}.svg`), "utf-8")
        .replace(/<style>[\s\S]*?<\/style>/, "")
        .replaceAll("var(--f-fg)", colors.dark)
        .replaceAll("var(--f-acc)", colors.secondary)
        .replaceAll("var(--f-mu)", colors.gray)
        .replaceAll("var(--f-bg)", colors.light)
        .replaceAll("var(--f-blue)", "#7aa7ff")
        .replaceAll("var(--f-warm)", "#ff8a6b")
    } catch {
      svg = undefined
    }
    theo3IconCache.set(
      name,
      svg && `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`,
    )
  }
  return theo3IconCache.get(name)
}

export const theo3Image: SocialImageOptions["imageStructure"] = ({
  cfg,
  userOpts,
  title,
  fileData,
  iconBase64,
}) => {
  const colors = cfg.theme.colors[userOpts.colorScheme]
  const bodyFont = getFontSpecificationName(cfg.theme.typography.body)
  const headerFont = getFontSpecificationName(cfg.theme.typography.header)
  const slug = fileData.slug ?? ""

  const frame = {
    display: "flex",
    flexDirection: "column" as const,
    height: "100%",
    width: "100%",
    backgroundColor: colors.light,
    fontFamily: bodyFont,
    borderBottom: `12px solid ${colors.secondary}`,
  }
  const url = <div style={{ display: "flex", fontSize: 24, color: colors.gray }}>{cfg.baseUrl}</div>

  if (slug === "index") {
    return (
      <div style={{ ...frame, alignItems: "center", padding: "52px 64px 44px" }}>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {iconBase64 && (
            <img src={iconBase64} width={150} height={150} style={{ marginBottom: 18 }} />
          )}
          <div
            style={{
              display: "flex",
              fontFamily: headerFont,
              fontWeight: 700,
              fontSize: 84,
              color: colors.dark,
              marginBottom: 6,
            }}
          >
            {cfg.pageTitle}
          </div>
          <div style={{ display: "flex", fontSize: 34, color: colors.darkgray, marginBottom: 32 }}>
            Elektrodynamik, verständlich sortiert.
          </div>
          {theo3HomeBadge && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                border: `2px solid ${colors.secondary}`,
                borderRadius: 999,
                padding: "8px 20px",
                fontSize: 24,
                fontWeight: 700,
                color: colors.secondary,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  backgroundColor: colors.secondary,
                }}
              />
              {theo3HomeBadge}
            </div>
          )}
        </div>
        {url}
      </div>
    )
  }

  const chapter = theo3Chapters[slug.split("/")[0]] ?? theo3Chapters[slug]
  // ohne eigenes Icon (künftige Seiten außerhalb der Kapitelordner): ∇-Logo als Ersatz
  const chapterIcon = theo3Icon(chapter?.icon ?? "", colors)
  const visual = chapterIcon ?? iconBase64
  // kurzes letztes Wort (z. B. „ε“) per geschütztem Leerzeichen ans vorige binden, damit es
  // nicht allein in der letzten Zeile steht
  const safeTitle = title.replace(/ (\S{1,3})$/, "\u00a0$1")

  return (
    <div style={{ ...frame, padding: "52px 64px 44px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {iconBase64 && <img src={iconBase64} width={42} height={42} />}
          <div
            style={{ display: "flex", fontSize: 28, fontFamily: headerFont, color: colors.dark }}
          >
            {cfg.pageTitle}
          </div>
        </div>
        {url}
      </div>

      <div style={{ display: "flex", flex: 1, alignItems: "center", gap: "48px" }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
            {chapterIcon && <img src={chapterIcon} width={44} height={44} />}
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontFamily: headerFont,
                color: colors.secondary,
                letterSpacing: "0.04em",
              }}
            >
              {chapter?.label ?? cfg.pageTitle}
            </div>
          </div>
          <div
            style={{
              fontSize: title.length > 34 ? 60 : 72,
              fontFamily: headerFont,
              fontWeight: 700,
              color: colors.dark,
              lineHeight: 1.1,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
            }}
          >
            {safeTitle}
          </div>
        </div>
        {visual && (
          <img
            src={visual}
            width={240}
            height={240}
            style={{ borderRadius: chapterIcon ? 0 : 48 }}
          />
        )}
      </div>

      <div style={{ display: "flex", fontSize: 24, color: colors.gray }}>
        Elektrodynamik · TU Berlin
      </div>
    </div>
  )
}
