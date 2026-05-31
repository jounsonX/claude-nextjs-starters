import type { Metadata } from "next"
import Link from "next/link"
import { Zap, Shield, Globe, Palette, Code2, Layout } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "레이아웃 예제",
}

function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  )
}

const features = [
  { icon: Zap, title: "빠른 성능", desc: "최적화된 번들로 빠른 로딩 속도를 제공합니다." },
  { icon: Shield, title: "타입 안전", desc: "TypeScript로 런타임 오류를 사전에 방지합니다." },
  { icon: Palette, title: "다크모드", desc: "next-themes로 시스템 테마를 자동 감지합니다." },
  { icon: Layout, title: "App Router", desc: "Next.js 16의 최신 라우팅 시스템을 사용합니다." },
  { icon: Code2, title: "shadcn/ui", desc: "Radix UI 기반의 접근성 높은 컴포넌트입니다." },
  { icon: Globe, title: "반응형", desc: "모바일부터 데스크톱까지 완벽하게 대응합니다." },
]

const teamMembers = [
  { name: "김민수", role: "프론트엔드 개발자", initials: "KM" },
  { name: "이지은", role: "UI/UX 디자이너", initials: "LJ" },
  { name: "박서준", role: "백엔드 개발자", initials: "PS" },
  { name: "최유리", role: "프로덕트 매니저", initials: "CY" },
]

export default function LayoutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">홈</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/examples">예제</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>레이아웃 예제</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">레이아웃 예제</h1>
        <p className="mt-2 text-muted-foreground">
          실무에서 자주 사용하는 레이아웃 패턴을 확인하세요.
        </p>
      </div>

      <div className="space-y-16">
        {/* 1. 2단 그리드 */}
        <section>
          <SectionHeader
            title="2단 그리드"
            description="콘텐츠와 사이드바를 나누는 2단 구조"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>메인 콘텐츠</CardTitle>
                  <CardDescription>
                    lg:col-span-2로 넓은 영역을 차지합니다.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    2단 레이아웃에서 메인 콘텐츠 영역입니다. 블로그 포스트,
                    제품 상세, 아티클 등 주요 콘텐츠를 표시합니다. 반응형으로
                    모바일에서는 단일 컬럼으로 변환됩니다.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm">읽기 계속</Button>
                    <Button size="sm" variant="ghost">
                      공유
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">사이드바</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      관련 태그
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      관련 링크
                    </p>
                    {["문서", "API 레퍼런스", "예제"].map((item) => (
                      <p
                        key={item}
                        className="text-sm text-primary cursor-pointer hover:underline"
                      >
                        {item} →
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 2. 3단 카드 그리드 */}
        <section>
          <SectionHeader
            title="3단 카드 그리드"
            description="반응형 카드 그리드 (1→2→3 컬럼)"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="group hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                  <CardDescription className="text-sm">{desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* 3. 사이드바 레이아웃 */}
        <section>
          <SectionHeader
            title="사이드바 레이아웃"
            description="좌측 고정 사이드바 + 스크롤 가능한 메인 콘텐츠"
          />
          <div className="overflow-hidden rounded-xl border border-border">
            <div className="flex min-h-80">
              {/* 사이드바 */}
              <aside className="w-52 shrink-0 border-r border-border bg-muted/30 p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  내비게이션
                </p>
                <nav className="space-y-0.5">
                  {["대시보드", "분석", "사용자", "설정", "도움말"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className={`rounded-md px-3 py-2 text-sm cursor-pointer transition-colors ${
                          i === 0
                            ? "bg-primary text-primary-foreground font-medium"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        {item}
                      </div>
                    )
                  )}
                </nav>
              </aside>
              {/* 메인 */}
              <main className="flex-1 p-6">
                <h3 className="font-semibold">대시보드</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  사이드바가 고정되고 오른쪽 메인 영역이 확장됩니다.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {["방문자", "전환율", "수익"].map((label) => (
                    <div
                      key={label}
                      className="rounded-lg border border-border bg-card p-3"
                    >
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="mt-1 text-xl font-bold">—</p>
                    </div>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </section>

        {/* 4. 탭 레이아웃 */}
        <section>
          <SectionHeader
            title="탭 기반 뷰 전환"
            description="Tabs 컴포넌트로 콘텐츠 뷰를 전환하는 패턴"
          />
          <Tabs defaultValue="grid">
            <TabsList>
              <TabsTrigger value="grid">그리드 뷰</TabsTrigger>
              <TabsTrigger value="list">리스트 뷰</TabsTrigger>
              <TabsTrigger value="team">팀 뷰</TabsTrigger>
            </TabsList>

            <TabsContent value="grid" className="mt-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {features.slice(0, 4).map(({ icon: Icon, title }) => (
                  <Card key={title}>
                    <CardContent className="flex items-center gap-3 pt-4">
                      <div className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="size-4" />
                      </div>
                      <span className="text-sm font-medium">{title}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="list" className="mt-4">
              <Card>
                <CardContent className="pt-4">
                  <div className="divide-y divide-border">
                    {features.map(({ icon: Icon, title, desc }) => (
                      <div key={title} className="flex items-center gap-4 py-3">
                        <div className="flex size-8 items-center justify-center rounded-md bg-muted text-muted-foreground shrink-0">
                          <Icon className="size-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{title}</p>
                          <p className="text-xs text-muted-foreground truncate">
                            {desc}
                          </p>
                        </div>
                        <Button size="sm" variant="ghost">
                          →
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team" className="mt-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map(({ name, role, initials }) => (
                  <Card key={name}>
                    <CardContent className="flex flex-col items-center gap-3 pt-6 pb-4 text-center">
                      <Avatar className="size-14">
                        <AvatarFallback className="bg-primary/10 text-primary text-lg font-bold">
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-xs text-muted-foreground">{role}</p>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        프로필 보기
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* 5. 스플릿 레이아웃 */}
        <section>
          <SectionHeader
            title="스플릿 레이아웃"
            description="좌우를 동등하게 나누는 2단 분할 구조"
          />
          <div className="overflow-hidden rounded-xl border border-border lg:grid lg:grid-cols-2">
            <div className="flex flex-col justify-center bg-primary p-10 text-primary-foreground">
              <h3 className="text-2xl font-bold">왼쪽 패널</h3>
              <p className="mt-2 text-primary-foreground/80">
                이미지, 일러스트, 브랜드 메시지 등을 배치합니다.
                로그인·회원가입·온보딩 화면에 자주 쓰이는 패턴입니다.
              </p>
              <div className="mt-6 flex gap-2">
                <div className="size-2 rounded-full bg-primary-foreground" />
                <div className="size-2 rounded-full bg-primary-foreground/40" />
                <div className="size-2 rounded-full bg-primary-foreground/40" />
              </div>
            </div>
            <div className="flex flex-col justify-center p-10">
              <h3 className="text-xl font-semibold">오른쪽 패널</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                폼, 콘텐츠, 액션 등이 들어갑니다.
              </p>
              <div className="mt-6 space-y-3">
                <div className="h-10 rounded-md border border-border bg-muted/30 px-3 flex items-center">
                  <span className="text-sm text-muted-foreground">입력 필드 예시</span>
                </div>
                <Button className="w-full">액션 버튼</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
