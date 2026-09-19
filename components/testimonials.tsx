import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "평생 3km도 못 뛰던 사람이었는데, 넉 달 만에 5km를 완주했어요. 혼자였으면 절대 못 했을 거예요.",
    name: "정하윤",
    role: "직장인 · 4개월 차 크루원",
  },
  {
    quote:
      "뒤처질까 봐 걱정했는데, 페이스메이커분들이 정말 잘 챙겨주세요. 이제는 토요일이 기다려져요.",
    name: "강민석",
    role: "러닝 입문자",
  },
  {
    quote:
      "러닝만 하고 헤어지는 게 아니라 커피 한잔 하면서 이야기하는 시간이 좋아요. 좋은 사람들도 많이 만났어요.",
    name: "오수빈",
    role: "런토피아 6기",
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            먼저 뛴 크루원들의 이야기
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="rounded-3xl border-border/60 bg-card shadow-sm">
              <CardContent className="flex h-full flex-col gap-6 p-8">
                <p className="text-pretty leading-relaxed text-foreground/90">{`"${t.quote}"`}</p>
                <div className="mt-auto">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
