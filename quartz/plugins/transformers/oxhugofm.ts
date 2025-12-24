import { QuartzTransformerPlugin } from "../types"
import rehypeRaw from "rehype-raw"
import { PluggableList } from "unified"

export interface Options {
  /** Replace {{ relref }} with quartz wikilinks []() */
  wikilinks: boolean
  /** Remove pre-defined anchor (see https://ox-hugo.scripter.co/doc/anchors/) */
  removePredefinedAnchor: boolean
  /** Remove hugo shortcode syntax */
  removeHugoShortcode: boolean
  /** Replace <figure/> with ![]() */
  replaceFigureWithMdImg: boolean

  /** Replace org latex fragments with $ and $$ */
  replaceOrgLatex: boolean
}

const defaultOptions: Options = {
  wikilinks: true,
  removePredefinedAnchor: true,
  removeHugoShortcode: true,
  replaceFigureWithMdImg: true,
  replaceOrgLatex: true,
}

const relrefRegex = new RegExp(/\[([^\]]+)\]\(\{\{< relref "([^"]+)" >\}\}\)/, "g")
const predefinedHeadingIdRegex = new RegExp(/(.*) {#(?:.*)}/, "g")
const hugoShortcodeRegex = new RegExp(/{{(.*)}}/, "g")
const figureTagRegex = new RegExp(/<figure src="(.*)" ?>/, "g")
// \\\\\\( -> matches \\(
// (.+?) -> Lazy match for capturing the equation
// \\\\\\) -> matches \\)
const inlineLatexRegex = new RegExp(/\\\\\\((.+?)\\\\\\)/, "g")
// (?:\\begin{...}|\\\\\\(|\\\\\\[) -> start of equation (supports multiple environments)
// ([\\s\\S]*?) -> Matches the block equation
// (?:\\\\\\]|\\\\\\)|\\end{...}) -> end of equation
// Supported environments: equation, equation*, align, align*, gather, gather*, multline, multline*, split
const mathEnvironments = "equation\\*?|align\\*?|gather\\*?|multline\\*?|split"
const blockLatexRegex = new RegExp(
  `(?:\\\\begin{(${mathEnvironments})}|\\\\\\\\\\(|\\\\\\\\\\[)([\\s\\S]*?)(?:\\\\\\\\\\]|\\\\\\\\\\)|\\\\end{(${mathEnvironments})})`,
  "g",
)
// \$\$[\s\S]*?\$\$ -> Matches block equations
// \$.*?\$ -> Matches inline equations
const quartzLatexRegex = new RegExp(/\$\$[\s\S]*?\$\$|\$.*?\$/, "g")

/**
 * ox-hugo is an org exporter backend that exports org files to hugo-compatible
 * markdown in an opinionated way. This plugin adds some tweaks to the generated
 * markdown to make it compatible with quartz but the list of changes applied it
 * is not exhaustive.
 * */
export const OxHugoFlavouredMarkdown: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "OxHugoFlavouredMarkdown",
    textTransform(_ctx, src) {
      if (opts.wikilinks) {
        src = src.toString()
        src = src.replaceAll(relrefRegex, (_value, ...capture) => {
          const [text, link] = capture
          return `[${text}](${link})`
        })
      }

      if (opts.removePredefinedAnchor) {
        src = src.toString()
        src = src.replaceAll(predefinedHeadingIdRegex, (_value, ...capture) => {
          const [headingText] = capture
          return headingText
        })
      }

      if (opts.removeHugoShortcode) {
        src = src.toString()
        src = src.replaceAll(hugoShortcodeRegex, (_value, ...capture) => {
          const [scContent] = capture
          return scContent
        })
      }

      if (opts.replaceFigureWithMdImg) {
        src = src.toString()
        src = src.replaceAll(figureTagRegex, (_value, ...capture) => {
          const [src] = capture
          return `![](${src})`
        })
      }

      if (opts.replaceOrgLatex) {
        src = src.toString()
        src = src.replaceAll(inlineLatexRegex, (_value, ...capture) => {
          const [eqn] = capture
          return `$${eqn}$`
        })
        // Updated to handle multiple capture groups from the new regex
        src = src.replaceAll(blockLatexRegex, (_value, startEnv, eqn, endEnv) => {
          // If we matched a \begin{env}...\end{env} pattern, preserve the environment
          if (startEnv && endEnv) {
            return `$$\\begin{${startEnv}}${eqn}\\end{${endEnv}}$$`
          }
          // For \\( \\) or \\[ \\] patterns, just wrap in $$
          return `$$${eqn}$$`
        })

        // ox-hugo escapes _ as \_
        src = src.replaceAll(quartzLatexRegex, (value) => {
          return value.replaceAll("\\_", "_")
        })
      }
      return src
    },
    htmlPlugins() {
      const plugins: PluggableList = [rehypeRaw]
      return plugins
    },
  }
}
