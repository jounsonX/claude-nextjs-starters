import type { Metadata } from "next"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LoginForm } from "@/components/forms/login-form"

export const metadata: Metadata = { title: "로그인" }

export default function LoginPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-foreground">
            <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-black">
              S
            </div>
            <span>StarterKit</span>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>이메일과 비밀번호를 입력해주세요.</CardDescription>
          </CardHeader>

          <CardContent>
            <LoginForm />
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Separator />
            <p className="text-center text-sm text-muted-foreground">
              계정이 없으신가요?{" "}
              <Link
                href="#"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                회원가입
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
