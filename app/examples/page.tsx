import type { Metadata } from "next"
import Link from "next/link"
import { Palette, Code2, Layout, ChevronRight } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "예제",
}

const examples = [
  {
    href: "/examples/components",
    icon: Palette,
    title: "컴포넌트 쇼케이스",
    description:
      "버튼, 배지, 카드, 다이얼로그, 툴팁 등 shadcn/ui 컴포넌트 전체를 한눈에 확인하세요.",
    tags: ["Button", "Badge", "Card", "Dialog", "Avatar"],
  },
  {
    href: "/examples/forms",
    icon: Code2,
    title: "폼 예제",
    description:
      "react-hook-form + zod를 활용한 유효성 검증, 다양한 입력 필드, sonner 토스트 패턴을 확인하세요.",
    tags: ["react-hook-form", "zod", "Input", "Select", "Checkbox"],
  },
  {
    href: "/examples/layout",
    icon: Layout,
    title: "레이아웃 예제",
    description:
      "2단·3단 그리드, 사이드바, 탭 기반 뷰 전환 등 실무에서 자주 쓰는 레이아웃 패턴을 확인하세요.",
    tags: ["Grid", "Sidebar", "Tabs", "Responsive"],
  },
]

export default function ExamplesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">홈</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>예제</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">예제 갤러리</h1>
        <p className="mt-2 text-muted-foreground">
          스타터킷에 포함된 컴포넌트와 패턴의 실제 예제를 확인하세요.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {examples.map(({ href, icon: Icon, title, description, tags }) => (
          <Link key={href} href={href} className="group">
            <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/40">
              <CardHeader className="gap-4">
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="size-5" />
                </div>
                <div className="space-y-1.5">
                  <CardTitle className="flex items-center gap-1.5">
                    {title}
                    <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  </CardTitle>
                  <CardDescription>{description}</CardDescription>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
