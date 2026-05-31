"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">기본 툴팁</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>이것은 툴팁입니다</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" aria-label="정보">
            <Globe className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>아이콘 버튼에 표시되는 툴팁</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
