import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © 2025 StarterKit. Built with Next.js & Tailwind CSS
        </p>
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground">
            Next.js · TypeScript · shadcn/ui
          </span>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <ExternalLink className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
