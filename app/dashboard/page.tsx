import type { Metadata } from "next"
import { Users, Activity, TrendingUp, DollarSign } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatCard } from "@/components/dashboard/stat-card"
import { QuickActions } from "@/components/dashboard/quick-actions"

export const metadata: Metadata = { title: "대시보드" }

const stats = [
  {
    title: "총 방문자",
    value: "12,493",
    description: "지난 30일 기준",
    icon: Users,
    trend: { value: 12, positive: true },
  },
  {
    title: "활성 사용자",
    value: "3,842",
    description: "현재 접속 중",
    icon: Activity,
    trend: { value: 4, positive: true },
  },
  {
    title: "전환율",
    value: "3.6%",
    description: "목표 대비 -0.4%",
    icon: TrendingUp,
    trend: { value: 2, positive: false },
  },
  {
    title: "월 수익",
    value: "₩4,820,000",
    description: "전월 대비",
    icon: DollarSign,
    trend: { value: 8, positive: true },
  },
]

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
        <p className="mt-1 text-muted-foreground">서비스 현황을 한눈에 확인하세요.</p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">개요</TabsTrigger>
          <TabsTrigger value="analytics">분석</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="flex flex-col gap-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>

          <QuickActions />
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>분석 데이터</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground mb-2">차트 영역 (준비 중)</p>
              <Skeleton className="h-48 w-full rounded-lg" />
              <div className="grid grid-cols-3 gap-3">
                <Skeleton className="h-20 rounded-lg" />
                <Skeleton className="h-20 rounded-lg" />
                <Skeleton className="h-20 rounded-lg" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
