"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactSchema = z.object({
  name: z.string().min(2, "이름은 최소 2자 이상이어야 합니다."),
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  phone: z.string().optional(),
  subject: z.string().min(1, "문의 유형을 선택해주세요."),
  message: z.string().min(10, "메시지는 최소 10자 이상이어야 합니다."),
  terms: z.boolean().refine((v) => v === true, "이용약관에 동의해주세요."),
  newsletter: z.boolean().optional(),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const [newsletter, setNewsletter] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      newsletter: false,
      terms: false,
    },
  })

  const termsChecked = watch("terms")

  async function onSubmit(data: ContactFormValues) {
    await new Promise((r) => setTimeout(r, 1000))
    console.log("제출 데이터:", data)
    toast.success("문의가 접수되었습니다!", {
      description: `${data.name}님의 문의를 확인 후 연락드리겠습니다.`,
    })
    reset()
    setNewsletter(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* 이름 + 이메일 */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">
            이름 <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            placeholder="홍길동"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">
            이메일 <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* 전화번호 + 문의 유형 */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="phone">전화번호 (선택)</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="010-0000-0000"
            {...register("phone")}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="subject">
            문의 유형 <span className="text-destructive">*</span>
          </Label>
          <Select onValueChange={(v) => setValue("subject", v, { shouldValidate: true })}>
            <SelectTrigger id="subject" aria-invalid={!!errors.subject}>
              <SelectValue placeholder="유형을 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">일반 문의</SelectItem>
              <SelectItem value="support">기술 지원</SelectItem>
              <SelectItem value="feedback">피드백</SelectItem>
              <SelectItem value="other">기타</SelectItem>
            </SelectContent>
          </Select>
          {errors.subject && (
            <p className="text-sm text-destructive">{errors.subject.message}</p>
          )}
        </div>
      </div>

      {/* 메시지 */}
      <div className="space-y-1.5">
        <Label htmlFor="message">
          메시지 <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="문의 내용을 자세히 입력해주세요..."
          rows={5}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* 뉴스레터 스위치 */}
      <div className="flex items-center gap-3 rounded-lg border border-border p-4">
        <Switch
          id="newsletter"
          checked={newsletter}
          onCheckedChange={(v) => {
            setNewsletter(v)
            setValue("newsletter", v)
          }}
        />
        <div>
          <Label htmlFor="newsletter" className="cursor-pointer">
            뉴스레터 구독
          </Label>
          <p className="text-xs text-muted-foreground">
            최신 업데이트와 소식을 이메일로 받아보세요.
          </p>
        </div>
      </div>

      {/* 이용약관 체크박스 */}
      <div className="space-y-1.5">
        <div className="flex items-start gap-2">
          <Checkbox
            id="terms"
            checked={termsChecked}
            onCheckedChange={(v) =>
              setValue("terms", v === true, { shouldValidate: true })
            }
            aria-invalid={!!errors.terms}
            className="mt-0.5"
          />
          <Label htmlFor="terms" className="cursor-pointer leading-snug">
            <span className="text-primary underline underline-offset-2">
              이용약관
            </span>
            에 동의합니다. <span className="text-destructive">*</span>
          </Label>
        </div>
        {errors.terms && (
          <p className="text-sm text-destructive">{errors.terms.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
        {isSubmitting ? "전송 중..." : "문의 보내기"}
      </Button>
    </form>
  )
}
