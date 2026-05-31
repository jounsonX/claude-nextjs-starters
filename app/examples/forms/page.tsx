import type { Metadata } from "next"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ContactForm } from "@/components/examples/contact-form"

export const metadata: Metadata = {
  title: "폼 예제",
}

export default function FormsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
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
            <BreadcrumbPage>폼 예제</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">폼 예제</h1>
        <p className="mt-2 text-muted-foreground">
          react-hook-form + zod를 활용한 유효성 검증 패턴을 확인하세요.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="secondary">react-hook-form</Badge>
          <Badge variant="secondary">zod</Badge>
          <Badge variant="secondary">Input</Badge>
          <Badge variant="secondary">Select</Badge>
          <Badge variant="secondary">Checkbox</Badge>
          <Badge variant="secondary">Switch</Badge>
          <Badge variant="secondary">sonner</Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>문의 폼</CardTitle>
          <CardDescription>
            아래 필드를 작성 후 제출하면 유효성 검증이 실행됩니다. 필수 항목(
            <span className="text-destructive">*</span>)을 비워두고 제출하면 오류
            메시지를 확인할 수 있습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>

      {/* 패턴 설명 */}
      <div className="mt-8 rounded-lg border border-border bg-muted/30 p-5">
        <h2 className="font-semibold">이 예제에서 확인할 수 있는 패턴</h2>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">zodResolver</span> — zod 스키마를 react-hook-form에 연결
          </li>
          <li>
            <span className="font-medium text-foreground">register</span> — 텍스트 인풋 등록 패턴
          </li>
          <li>
            <span className="font-medium text-foreground">setValue + shouldValidate</span> — Select, Checkbox, Switch 등 비표준 입력 처리
          </li>
          <li>
            <span className="font-medium text-foreground">isSubmitting</span> — 제출 중 로딩 스피너 표시
          </li>
          <li>
            <span className="font-medium text-foreground">toast()</span> — sonner로 성공 알림 전송
          </li>
          <li>
            <span className="font-medium text-foreground">aria-invalid</span> — 에러 필드 접근성 처리
          </li>
        </ul>
      </div>
    </div>
  )
}
