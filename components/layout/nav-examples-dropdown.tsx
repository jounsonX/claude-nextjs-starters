"use client"

import Link from "next/link"
import { ChevronDown, Palette, Layout, Code2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const exampleLinks = [
  {
    href: "/examples/components",
    label: "컴포넌트 쇼케이스",
    description: "버튼, 배지, 카드 등 UI 컴포넌트",
    icon: Palette,
  },
  {
    href: "/examples/forms",
    label: "폼 예제",
    description: "react-hook-form + zod 패턴",
    icon: Code2,
  },
  {
    href: "/examples/layout",
    label: "레이아웃 예제",
    description: "그리드, 사이드바, 탭 패턴",
    icon: Layout,
  },
]

export function NavExamplesDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
        예제
        <ChevronDown className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {exampleLinks.map(({ href, label, description, icon: Icon }) => (
          <DropdownMenuItem key={href} asChild>
            <Link href={href} className="flex items-start gap-3 py-2">
              <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <div>
                <div className="font-medium">{label}</div>
                <div className="text-xs text-muted-foreground">{description}</div>
              </div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
