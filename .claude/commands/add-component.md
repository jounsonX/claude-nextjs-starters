---
description: 'TypeScript + TailwindCSS React 함수형 컴포넌트를 components 폴더에 생성합니다'
argument-hint: '<ComponentName>'
allowed-tools:
  [
    'Bash(find:*)',
    'Bash(mkdir:*)',
    'Read',
    'Write',
    'Glob',
  ]
---

# Claude 명령어: add-component

`$ARGUMENTS`(컴포넌트 이름)을 받아 `components/` 폴더에 TypeScript + TailwindCSS 기반 React 함수형 컴포넌트 파일을 생성합니다.

## 사용법

```
/add-component <ComponentName>
```

예시:
```
/add-component Button
/add-component UserCard
/add-component NavigationBar
```

## 프로세스

1. `$ARGUMENTS`에서 컴포넌트 이름 추출 및 유효성 검사
   - PascalCase가 아니면 자동으로 변환
   - 비어 있으면 오류 메시지 출력 후 중단
2. 프로젝트 루트의 `components/` 폴더 존재 여부 확인 (없으면 생성)
3. `components/<ComponentName>.tsx` 파일 생성
4. 아래 템플릿을 기반으로 컴포넌트 코드 작성
5. 생성된 파일 경로 출력

## 컴포넌트 템플릿

```tsx
import { FC } from 'react'

interface <ComponentName>Props {
  className?: string
}

const <ComponentName>: FC<<ComponentName>Props> = ({ className }) => {
  return (
    <div className={className}>
      <ComponentName />
    </div>
  )
}

export default <ComponentName>
```

## 규칙

- 파일명은 PascalCase (`UserCard.tsx`)
- `interface <Name>Props`로 props 타입 정의
- `className` prop은 기본으로 포함 (TailwindCSS 확장성)
- named export 대신 `export default` 사용
- 이미 파일이 존재하면 덮어쓰기 전에 확인 요청
