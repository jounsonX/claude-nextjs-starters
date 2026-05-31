import { Plus, Download, Upload, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const actions = [
  { icon: Plus, label: "새 항목 추가", variant: "default" as const },
  { icon: Download, label: "내보내기", variant: "outline" as const },
  { icon: Upload, label: "가져오기", variant: "outline" as const },
  { icon: Settings, label: "설정", variant: "ghost" as const },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">빠른 액션</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <Button
                key={action.label}
                variant={action.variant}
                className="flex h-auto flex-col gap-2 py-4"
              >
                <Icon className="size-5" />
                <span className="text-xs">{action.label}</span>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
