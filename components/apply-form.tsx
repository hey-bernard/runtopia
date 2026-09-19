"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({ name: "", email: "", phone: "" })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error ?? "신청 처리 중 오류가 발생했습니다.")
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "신청 처리 중 오류가 발생했습니다.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="apply" className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-xl text-center">
        <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
          매월 30명 한정 모집
        </span>
        <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          런토피아에 신청하세요
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          아래 정보를 남겨주시면, 다음 기수 모집 안내를 가장 먼저 보내드립니다.
        </p>
      </div>

      <Card className="rounded-3xl border-border/60 shadow-sm">
        <CardContent className="p-8 md:p-10">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle2 className="h-14 w-14 text-primary" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold">신청이 완료되었어요!</h3>
              <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                {form.name ? `${form.name}님, ` : ""}소중한 신청 감사합니다. 다음 기수 모집이 시작되면 입력해 주신
                연락처로 안내드릴게요.
              </p>
              <Button
                variant="outline"
                className="mt-2 rounded-full bg-transparent"
                onClick={() => {
                  setSubmitted(false)
                  setForm({ name: "", email: "", phone: "" })
                }}
              >
                다시 신청하기
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">이름</Label>
                <Input
                  id="name"
                  required
                  placeholder="홍길동"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-12 rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-12 rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">연락처</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="010-0000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="h-12 rounded-xl"
                />
              </div>
              {error && <p className="text-center text-sm text-destructive">{error}</p>}
              <Button type="submit" size="lg" disabled={submitting} className="mt-2 h-12 rounded-full text-base">
                {submitting ? "신청 중..." : "무료로 신청하기"}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                신청은 무료이며, 언제든 취소할 수 있어요.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
