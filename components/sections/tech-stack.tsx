import { Badge } from "@/components/ui/badge"

const techStack = [
  { label: "Next.js 16", variant: "default" },
  { label: "React 19", variant: "default" },
  { label: "TypeScript", variant: "secondary" },
  { label: "Tailwind CSS v4", variant: "secondary" },
  { label: "shadcn/ui", variant: "outline" },
  { label: "Radix UI", variant: "outline" },
  { label: "next-themes", variant: "secondary" },
  { label: "sonner", variant: "outline" },
  { label: "react-hook-form", variant: "secondary" },
  { label: "zod", variant: "outline" },
  { label: "Lucide React", variant: "default" },
] as const

export function TechStackSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              기술 스택
            </h2>
            <p className="mt-4 text-muted-foreground">
              검증된 라이브러리로 구성된 현대적인 기술 스택
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <Badge key={tech.label} variant={tech.variant} className="px-4 py-1.5 text-sm">
                {tech.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
