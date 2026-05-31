import { Zap, Shield, Palette, Layout, Code2, Globe } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "빠른 개발",
    description:
      "보일러플레이트 없이 핵심 기능 개발에 집중. 사전 설정된 구조로 즉시 시작할 수 있습니다.",
  },
  {
    icon: Shield,
    title: "타입 안전성",
    description:
      "TypeScript 엄격 모드와 zod 스키마 검증으로 런타임 에러를 빌드 타임에 잡아냅니다.",
  },
  {
    icon: Palette,
    title: "다크모드",
    description:
      "next-themes와 CSS 변수 기반의 완전한 다크모드 지원. 시스템 설정도 자동 반영됩니다.",
  },
  {
    icon: Layout,
    title: "App Router",
    description:
      "Next.js 16 App Router의 Server/Client Component를 올바르게 분리한 최적화된 구조.",
  },
  {
    icon: Code2,
    title: "shadcn/ui",
    description:
      "Radix UI 기반의 접근성 높은 컴포넌트. 복사 붙여넣기로 완전한 커스터마이징이 가능합니다.",
  },
  {
    icon: Globe,
    title: "반응형 디자인",
    description:
      "모바일 퍼스트 Tailwind CSS v4로 모든 화면 크기에서 완벽하게 동작합니다.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            개발에 필요한 모든 것
          </h2>
          <p className="mt-4 text-muted-foreground">
            프로덕션 수준의 웹 서비스를 위한 검증된 기술 스택
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="transition-shadow hover:shadow-md">
                <CardHeader className="gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
