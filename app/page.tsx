import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Schedule } from "@/components/schedule"
import { Testimonials } from "@/components/testimonials"
import { ApplyForm } from "@/components/apply-form"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-lg font-semibold tracking-tight">런토피아</span>
        <a
          href="#apply"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          신청하기
        </a>
      </header>
      <main>
        <Hero />
        <Features />
        <Schedule />
        <Testimonials />
        <ApplyForm />
      </main>
      <footer className="border-t border-border/60 py-8">
        <p className="text-center text-sm text-muted-foreground">
          © 2026 런토피아. 함께 달리는 즐거움을 나눕니다.
        </p>
      </footer>
    </div>
  )
}
