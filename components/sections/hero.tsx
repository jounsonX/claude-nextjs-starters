import Link from "next/link"
import { Code2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-background via-background to-muted/40 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <Badge variant="secondary" className="gap-1.5">
            <span className="size-1.5 rounded-full bg-primary" />
            스타터킷 v1.0 출시
          </Badge>

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              더 빠른 웹 개발의{" "}
              <span className="text-primary">시작점</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui로 구성된 프로덕션 수준의 스타터킷.
              설정 없이 바로 개발을 시작하세요.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/dashboard">대시보드 보기</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Code2 className="size-4" />
                GitHub 보기
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>✓ 타입 안전</span>
            <span>✓ 다크모드</span>
            <span>✓ 반응형</span>
            <span>✓ 즉시 배포 가능</span>
          </div>
        </div>
      </div>
    </section>
  )
}
