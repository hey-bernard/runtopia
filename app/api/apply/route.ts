import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = process.env.APPLY_NOTIFY_EMAIL ?? "bernard.bae@gmail.com"

export async function POST(request: Request) {
  const { name, email, phone } = await request.json()

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "필수 항목이 누락되었습니다." }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: process.env.APPLY_FROM_EMAIL ?? "Runtopia <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `런토피아 러닝크루 신청 - ${name}`,
      text: `이름: ${name}\n이메일: ${email}\n연락처: ${phone}`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[apply] failed to send email", error)
    return NextResponse.json({ error: "이메일 전송에 실패했습니다." }, { status: 500 })
  }
}
