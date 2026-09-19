import { Button } from "@/components/ui/button"

const stats = [
  { value: "0km→5km", label: "완주 목표" },
  { value: "매주 토요일", label: "정기 러닝" },
  { value: "30명", label: "월 모집 인원" },
]

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 md:max-w-2xl">
          <span className="inline-flex w-fit items-center rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            초보자 환영 · 무료 러닝크루
          </span>
          <h1 className="text-pretty text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            처음 뛰는 사람도
            <br />
            함께라면 완주할 수 있어요
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            혼자 뛰기 막막했다면 런토피아와 함께해요. 페이스 걱정 없이, 같은 속도의 동료들과 매주 함께 달리는{" "}
            <span className="font-semibold text-foreground">초보자 맞춤 러닝크루</span>입니다. 매월{" "}
            <span className="font-semibold text-foreground">30명 한정</span>으로 모집해요.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-8 text-base">
              <a href="#apply">무료로 신청하기</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base bg-transparent">
              <a href="#schedule">일정 살펴보기</a>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-sm md:max-w-xl">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-xl font-semibold tracking-tight text-primary md:text-2xl">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
