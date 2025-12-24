import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Mudit B.",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "muditbhargava66.github.io/notes/",
    ignorePatterns: ["private", "templates"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // Match main site fonts
        header: "Roboto",
        body: "Roboto",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f0f0f0",
          gray: "#828282",
          darkgray: "#333333",
          dark: "#000000",
          secondary: "#B509AC",      // Main site purple accent
          tertiary: "#B509AC",
          highlight: "rgba(181, 9, 172, 0.08)",
          textHighlight: "#B509AC33",
        },
        darkMode: {
          light: "#1C1C1D",           // Main site dark background
          lightgray: "#2C3237",       // Main site code bg
          gray: "#646464",
          darkgray: "#E8E8E8",        // Main site text color
          dark: "#E8E8E8",
          secondary: "#2698BA",       // Main site cyan accent
          tertiary: "#2698BA",
          highlight: "rgba(38, 152, 186, 0.15)",
          textHighlight: "#2698BA33",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.Poetry(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      // Removed duplicate Plugin.Latex() for faster builds
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
