import Link from "next/link"
import type { ReactNode } from "react"

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g

/**
 * Renders blog body text, turning markdown-style [label](/path) links into
 * real internal links. Keeps the blog data file readable and easy to extend.
 */
export function BlogRichText({ text }: { text: string }) {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  LINK_PATTERN.lastIndex = 0

  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    const [, label, href] = match
    const isInternal = href.startsWith("/")

    nodes.push(
      isInternal ? (
        <Link
          key={`link-${key++}`}
          href={href}
          className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
        >
          {label}
        </Link>
      ) : (
        <a
          key={`link-${key++}`}
          href={href}
          rel="noopener noreferrer"
          className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
        >
          {label}
        </a>
      )
    )

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return <>{nodes}</>
}
