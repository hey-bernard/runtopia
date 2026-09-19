import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const items = [
  {
    icon: Calendar,
    title: "매주 토요일",
    description: "격주가 아닌 매주 정기 러닝. 꾸준히 나올수록 실력이 쑥쑥 늘어요.",
  },
  {
    icon: Clock,
    title: "오전 7시 집합",
    description: "준비운동 15분 + 러닝 40분 + 쿨다운 및 담소. 약 1시간 30분 코스예요.",
  },
  {
    icon: MapPin,
    title: "한강공원 (반포~잠원)",
    description: "지하철 접근이 편한 한강공원에서 매주 같은 장소에 모여요.",
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">언제, 어디서 만날까요?</h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          정해진 시간과 장소에서 꾸준히 만나니, 일정 잡기가 훨씬 쉬워요.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} className="rounded-3xl border-border/60 shadow-sm">
            <CardContent className="flex flex-col gap-4 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <item.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
