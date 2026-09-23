import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
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
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
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
    Component.Graph(),
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
