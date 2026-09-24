import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    // Zurück/Weiter entlang der Lernpfade (Reihenfolge = Lernpfad 1 bis 5)
    Component.PrevNext({
      order: [
        "Vektoranalysis",
        "Flächen- und Volumenelemente – Leitfaden",
        "Elektrostatik - Lernseite (Grundlagen)",
        "Elektrostatik",
        "Energie und Kapazität in der Elektrostatik",
        "Kugelkondensator",
        "Zylinderkondensator",
        "Maxwell-Spannungstensor (Elektrostatik)",
        "Randwertprobleme (Elektrostatik)",
        "Spiegelmethode (Elektrostatik)",
        "Legendre-Ansatz und Grenzflächen",
        "Multipolentwicklung (Elektrostatik)",
        "Green-Funktionen (Elektrostatik)",
        "Magnetostatik - Grundgleichungen",
        "Stromverteilungen und Magnetisches Vektorpotential",
        "Induktivität und magnetische Energie",
        "Elektrostatik in Materie",
        "Dielektrika (Elektrostatik)",
        "Magnetische Felder in Materie",
        "Materialgesetze Magnetik",
        "Faraday-Induktion (Elektrodynamik)",
        "Elektrodynamik - Dynamik und Wellen",
        "Impulsbilanz und Poynting-Vektor",
        "Helmholtz-Zerlegung (Vektorfelder)",
        "Coulomb-Eichung (Elektrodynamik)",
        "Lorenz-Eichung (Elektrodynamik)",
        "Poincaré-Eichung (Elektrodynamik)",
        "Relativität – Lorentz-Transformation",
        "Minkowski-Raum und Vierervektoren",
      ],
    }),
  ],
  footer: Component.Footer({
    links: {
      "Quellcode auf GitHub": "https://github.com/luisadow/theo-iii-wiki",
      "Fehler melden": "https://github.com/luisadow/theo-iii-wiki/issues/new",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    // Auf der Startseite übernimmt der Hero-Bereich (content/index.md) Titel und Einleitung
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      // Ordner nach Pfad sortieren ("01 Grundlagen", "02 …"), damit die Vorlesungsreihenfolge
      // erhalten bleibt, obwohl die Ordner-Titel keine Nummern tragen.
      sortFn: (a, b) => {
        if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
        const ka = a.isFolder ? a.slugSegment : a.displayName
        const kb = b.isFolder ? b.slugSegment : b.displayName
        return ka.localeCompare(kb, undefined, { numeric: true, sensitivity: "base" })
      },
    }),
  ],
  right: [
    Component.Graph({
      // Tags ausblenden; Namen nur für aktuelle Seite und meistverlinkte Notizen
      localGraph: {
        showTags: false,
        depth: 1,
        scale: 1.15,
        repelForce: 0.9,
        linkDistance: 55,
        fontSize: 0.7,
        opacityScale: 2, // >= 2: lokaler Graph beschriftet die 4 wichtigsten Nachbarn
        focusOnHover: true,
      },
      globalGraph: {
        showTags: false,
        repelForce: 0.7,
        linkDistance: 45,
        fontSize: 0.7,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      // Ordner nach Pfad sortieren ("01 Grundlagen", "02 …"), damit die Vorlesungsreihenfolge
      // erhalten bleibt, obwohl die Ordner-Titel keine Nummern tragen.
      sortFn: (a, b) => {
        if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
        const ka = a.isFolder ? a.slugSegment : a.displayName
        const kb = b.isFolder ? b.slugSegment : b.displayName
        return ka.localeCompare(kb, undefined, { numeric: true, sensitivity: "base" })
      },
    }),
  ],
  right: [],
}
