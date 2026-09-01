import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated, COOKIE_NAME } from '@/lib/auth'
import { posts } from '@/lib/posts'
import type { Post } from '@/lib/posts'

export async function GET() {
  const auth = await isAuthenticated()
  if (!auth) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }
  return NextResponse.json({ posts })
}

export async function POST(request: NextRequest) {
  const auth = await isAuthenticated()
  if (!auth) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, description, tags, content } = body

    if (!title || !description || !content) {
      return NextResponse.json(
        { error: 'Título, descrição e conteúdo são obrigatórios' },
        { status: 400 }
      )
    }

    const slug = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()

    const existingPost = posts.find((p) => p.slug === slug)
    if (existingPost) {
      return NextResponse.json(
        { error: 'Já existe um post com esse título' },
        { status: 409 }
      )
    }

    const newPost: Post = {
      slug,
      title,
      description,
      date: new Date().toISOString().split('T')[0],
      author: 'Jackson Pacheco',
      tags: tags || [],
      content,
    }

    posts.push(newPost)

    return NextResponse.json(
      { success: true, post: newPost },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Erro ao processar dados' },
      { status: 400 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  const auth = await isAuthenticated()
  if (!auth) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')

    if (!slug) {
      return NextResponse.json(
        { error: 'Slug obrigatório' },
        { status: 400 }
      )
    }

    const index = posts.findIndex((p) => p.slug === slug)
    if (index === -1) {
      return NextResponse.json(
        { error: 'Post não encontrado' },
        { status: 404 }
      )
    }

    posts.splice(index, 1)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Erro ao processar dados' },
      { status: 400 }
    )
  }
}
