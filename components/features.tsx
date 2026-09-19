import { Footprints, HeartHandshake, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Footprints,
    title: "초보자 맞춤 페이스",
    description: "빨리 뛰지 않아도 괜찮아요. 걷기와 뛰기를 섞어가며 내 몸에 맞는 속도로 천천히 거리를 늘려갑니다.",
  },
  {
    icon: HeartHandshake,
    title: "혼자가 아닌 완주",
    description: "페이스메이커가 함께 뛰며 챙겨드려요. 처음이라 뒤처질 걱정, 중간에 포기할 걱정 없이 완주할 수 있어요.",
  },
  {
    icon: Users,
    title: "따뜻한 크루 커뮤니티",
    description: "러닝 후에는 함께 커피 한 잔. 같은 목표를 가진 사람들과 친해지고, 함께 성장하는 즐거움을 느껴보세요.",
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">왜 런토피아일까요?</h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          부담 없이 시작해서, 꾸준히 이어갈 수 있는 러닝 습관을 만들어 드립니다.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="rounded-3xl border-border/60 shadow-sm transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col gap-4 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <feature.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
