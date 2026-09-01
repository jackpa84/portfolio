'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NewPostPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    const tagsArray = tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          tags: tagsArray,
          content,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Erro ao criar post')
        setLoading(false)
        return
      }

      setSuccess('Post criado com sucesso!')
      setLoading(false)

      setTimeout(() => {
        router.push('/admin')
      }, 1500)
    } catch {
      setError('Erro de conexão')
      setLoading(false)
    }
  }

  return (
    <div className="grid-bg" style={{ minHeight: '100vh', padding: '40px 20px' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="admin-header">
          <div>
            <span className="section-label">// admin</span>
            <h1 className="section-title" style={{ marginBottom: 0 }}>
              Novo Post
            </h1>
          </div>
          <Link href="/admin" className="admin-logout">
            ← Voltar
          </Link>
        </div>

        <div className="admin-nav">
          <Link href="/admin">Posts</Link>
          <Link href="/admin/new" className="active">
            Novo Post
          </Link>
          <Link href="/blog" target="_blank">
            Ver Blog
          </Link>
        </div>

        {error && <div className="admin-error" style={{ marginBottom: 20 }}>{error}</div>}
        {success && <div className="admin-success" style={{ marginBottom: 20 }}>{success}</div>}

        <div className="card" style={{ padding: 32 }}>
          <form className="admin-form" onSubmit={handleSubmit}>
            <div className="admin-field">
              <label htmlFor="title">Título</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="A Origem da Inteligência Artificial"
                required
              />
            </div>

            <div className="admin-field">
              <label htmlFor="description">Descrição</label>
              <input
                id="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Uma breve descrição do artigo..."
                required
              />
            </div>

            <div className="admin-field">
              <label htmlFor="tags">Tags (separadas por vírgula)</label>
              <input
                id="tags"
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="IA, História, Tecnologia"
              />
            </div>

            <div className="admin-field">
              <label htmlFor="content">Conteúdo (Markdown)</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="## Título da Seção&#10;&#10;Conteúdo do artigo aqui...&#10;&#10;- Item 1&#10;- Item 2&#10;&#10;> Citação"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={loading}
            >
              {loading ? 'Publicando...' : 'Publicar Post'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
