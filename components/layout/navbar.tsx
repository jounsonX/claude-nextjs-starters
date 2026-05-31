import Link from "next/link"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { MobileMenu } from "@/components/layout/mobile-menu"
import { NavExamplesDropdown } from "@/components/layout/nav-examples-dropdown"

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/#features", label: "기능" },
  { href: "/dashboard", label: "대시보드" },
  { href: "/login", label: "로그인" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 font-bold text-foreground">
          <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-black">
            S
          </div>
          <span>StarterKit</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </Link>
          ))}
          <NavExamplesDropdown />
        </nav>

        {/* 우측 액션 */}
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
