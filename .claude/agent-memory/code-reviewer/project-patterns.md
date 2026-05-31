---
name: project-patterns
description: 이 프로젝트의 아키텍처 결정, 반복 패턴, 기술 스택 선택에 관한 핵심 정보
metadata:
  type: project
---

이 프로젝트는 Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui 기반의 스타터킷이다. `radix-ui` 패키지를 monorepo 방식으로 사용하며 (`import { Slot } from "radix-ui"`), 과거 `@radix-ui/react-*` 개별 패키지 방식과 다르다.

**Why:** shadcn v4 + radix-ui v1 통합 패키지 사용. components.json style: "radix-nova".

**How to apply:** 새 shadcn 컴포넌트 추가 시 `radix-ui` monorepo import 패턴을 따를 것. `@radix-ui/react-*` 개별 패키지 import 제안은 이 프로젝트에 맞지 않음.

## 반복 패턴

- **named export** 선호: 모든 컴포넌트는 `export function ComponentName` 형태 (shadcn ui 파일은 예외적으로 function 선언)
- **서버 컴포넌트 우선**: `"use client"` 지시어는 실제로 클라이언트 기능이 필요한 곳에만 사용
- **폼 패턴**: `react-hook-form` + `zodResolver` + `z.infer<typeof schema>` 타입 추론
- **레이아웃**: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8` 패딩 패턴 일관 적용
- **아이콘**: lucide-react 사용, `size-N` className으로 크기 제어
- **중복 navLinks 배열**: navbar.tsx와 mobile-menu.tsx에 동일한 navLinks 상수가 각각 존재 (중복)

## 발견된 문제 (2026-05-31 초기 리뷰)

1. `navLinks` 배열 중복 (navbar.tsx, mobile-menu.tsx)
2. `contact-form.tsx`에 `console.log` 디버그 코드 잔존 (62번째 줄)
3. `contact-form.tsx`의 `newsletter` 상태가 react-hook-form과 이중 관리됨
4. `login/page.tsx`의 "회원가입" 링크가 `href="#"` (미구현 링크)
5. `add-component.md` 커맨드 템플릿이 named export 대신 default export 사용 (프로젝트 컨벤션과 불일치)
6. `theme-toggle.tsx`에서 `theme === "dark"` 비교가 `"system"` 테마에서 달빛 아이콘 표시 (의도적일 수 있음)
7. `settings.local.json`의 `"WebSerach"` 오타 (WebSearch)
8. `hero.tsx`에서 GitHub 링크가 `https://github.com` (실제 레포 미연결)
9. `footer.tsx`의 저작권 연도 하드코딩 (`© 2025`)
