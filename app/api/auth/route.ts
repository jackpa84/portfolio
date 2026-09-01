import { NextRequest, NextResponse } from 'next/server'
import { createToken, verifyPassword, COOKIE_NAME } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body

    if (!password) {
      return NextResponse.json(
        { error: 'Senha obrigatória' },
        { status: 400 }
      )
    }

    if (!verifyPassword(password)) {
      return NextResponse.json(
        { error: 'Senha incorreta' },
        { status: 401 }
      )
    }

    const token = await createToken()

    const response = NextResponse.json({ success: true })
    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json(
      { error: 'Erro interno' },
      { status: 500 }
    )
  }
}
