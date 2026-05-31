import type { Metadata } from "next"
import Link from "next/link"
import { Zap, Shield, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TooltipDemo } from "./tooltip-demo"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "컴포넌트 쇼케이스",
}

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <Card>
        <CardContent className="pt-6">{children}</CardContent>
      </Card>
    </section>
  )
}

export default function ComponentsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
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
            <BreadcrumbPage>컴포넌트 쇼케이스</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">컴포넌트 쇼케이스</h1>
        <p className="mt-2 text-muted-foreground">
          shadcn/ui 기반으로 설치된 모든 UI 컴포넌트를 확인하세요.
        </p>
      </div>

      <div className="space-y-10">
        {/* 버튼 */}
        <Section title="버튼 (Button)" description="variant와 size 조합">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
            <Separator />
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="아이콘 버튼">
                <Zap className="size-4" />
              </Button>
            </div>
            <Separator />
            <div className="flex flex-wrap gap-2">
              <Button disabled>비활성화</Button>
              <Button variant="outline" disabled>
                비활성화 Outline
              </Button>
            </div>
          </div>
        </Section>

        {/* 배지 */}
        <Section title="배지 (Badge)" description="상태·라벨 표시">
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </Section>

        {/* 아바타 */}
        <Section title="아바타 (Avatar)" description="이미지 또는 이니셜 폴백">
          <div className="flex flex-wrap items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">
                SK
              </AvatarFallback>
            </Avatar>
          </div>
        </Section>

        {/* 인풋 & 텍스트영역 */}
        <Section
          title="인풋 & 텍스트영역 (Input & Textarea)"
          description="텍스트 입력 필드"
        >
          <div className="space-y-4 max-w-sm">
            <div className="space-y-1.5">
              <Label htmlFor="demo-text">텍스트 인풋</Label>
              <Input id="demo-text" placeholder="내용을 입력하세요..." />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="demo-disabled">비활성화 인풋</Label>
              <Input id="demo-disabled" placeholder="비활성화" disabled />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="demo-textarea">텍스트영역</Label>
              <Textarea
                id="demo-textarea"
                placeholder="여러 줄 입력..."
                rows={3}
              />
            </div>
          </div>
        </Section>

        {/* 셀렉트 */}
        <Section title="셀렉트 (Select)" description="드롭다운 선택 컴포넌트">
          <div className="max-w-xs">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="옵션을 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nextjs">Next.js</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Section>

        {/* 체크박스 & 스위치 */}
        <Section
          title="체크박스 & 스위치 (Checkbox & Switch)"
          description="불리언 입력 컴포넌트"
        >
          <div className="space-y-4">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Checkbox id="chk-1" />
                <Label htmlFor="chk-1">기본 체크박스</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="chk-2" defaultChecked />
                <Label htmlFor="chk-2">체크된 상태</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="chk-3" disabled />
                <Label htmlFor="chk-3" className="text-muted-foreground">
                  비활성화
                </Label>
              </div>
            </div>
            <Separator />
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Switch id="sw-1" />
                <Label htmlFor="sw-1">기본 스위치</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="sw-2" defaultChecked />
                <Label htmlFor="sw-2">켜진 상태</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="sw-3" disabled />
                <Label htmlFor="sw-3" className="text-muted-foreground">
                  비활성화
                </Label>
              </div>
            </div>
          </div>
        </Section>

        {/* 알림 */}
        <Section title="알림 (Alert)" description="정보 및 오류 메시지 표시">
          <div className="space-y-3">
            <Alert>
              <Info className="size-4" />
              <AlertTitle>안내</AlertTitle>
              <AlertDescription>
                이것은 기본 알림 컴포넌트입니다. 일반 정보를 전달할 때
                사용합니다.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <Shield className="size-4" />
              <AlertTitle>오류</AlertTitle>
              <AlertDescription>
                요청을 처리하는 중 오류가 발생했습니다. 다시 시도해 주세요.
              </AlertDescription>
            </Alert>
          </div>
        </Section>

        {/* 스켈레톤 */}
        <Section title="스켈레톤 (Skeleton)" description="로딩 상태 플레이스홀더">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Skeleton className="size-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/5" />
          </div>
        </Section>

        {/* 툴팁 */}
        <Section title="툴팁 (Tooltip)" description="호버 시 추가 정보 표시">
          <TooltipDemo />
        </Section>

        {/* 다이얼로그 */}
        <Section
          title="다이얼로그 (Dialog)"
          description="모달 오버레이 컴포넌트"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button>다이얼로그 열기</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>다이얼로그 예제</DialogTitle>
                <DialogDescription>
                  shadcn/ui Dialog 컴포넌트 데모입니다. Radix UI Primitive 기반으로
                  접근성이 보장됩니다.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 py-2">
                <div className="space-y-1.5">
                  <Label htmlFor="dialog-input">이름</Label>
                  <Input id="dialog-input" placeholder="이름을 입력하세요" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">취소</Button>
                <Button>확인</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Section>

        {/* 카드 */}
        <Section title="카드 (Card)" description="콘텐츠 그룹화 컨테이너">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>기본 카드</CardTitle>
                <CardDescription>카드 설명 텍스트가 들어갑니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  카드 본문 콘텐츠입니다. 다양한 내용을 담을 수 있습니다.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">액션</Button>
              </CardFooter>
            </Card>
            <Card className="border-primary/40 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="size-4 text-primary" />
                  강조 카드
                </CardTitle>
                <CardDescription>
                  색상을 변경하여 강조할 수 있습니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  border와 background를 커스터마이징한 카드 예시입니다.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" variant="outline">
                  취소
                </Button>
                <Button size="sm">시작하기</Button>
              </CardFooter>
            </Card>
          </div>
        </Section>

        {/* 구분선 */}
        <Section title="구분선 (Separator)" description="콘텐츠 영역 분리">
          <div className="space-y-4">
            <div>
              <p className="text-sm">위 영역</p>
              <Separator className="my-4" />
              <p className="text-sm">아래 영역</p>
            </div>
            <div className="flex h-6 items-center gap-4 text-sm">
              <span>항목 1</span>
              <Separator orientation="vertical" />
              <span>항목 2</span>
              <Separator orientation="vertical" />
              <span>항목 3</span>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
