'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Post {
  slug: string
  title: string
  date: string
  tags: string[]
}

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => {
        if (!res.ok) throw new Error('Unauthorized')
        return res.json()
      })
      .then((data) => {
        setPosts(data.posts)
        setLoading(false)
      })
      .catch(() => {
        router.push('/admin/login')
      })
  }, [router])

  async function handleLogout() {
    document.cookie = 'admin_token=; path=/; max-age=0'
    router.push('/admin/login')
  }

  async function handleDelete(slug: string) {
    if (!confirm('Tem certeza que deseja excluir este post?')) return

    try {
      const res = await fetch(`/api/posts?slug=${slug}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        setPosts(posts.filter((p) => p.slug !== slug))
      }
    } catch {
      alert('Erro ao excluir post')
    }
  }

  return (
    <div className="grid-bg" style={{ minHeight: '100vh', padding: '40px 20px' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="admin-header">
          <div>
            <span className="section-label">// admin</span>
            <h1 className="section-title" style={{ marginBottom: 0 }}>
              Painel
            </h1>
          </div>
          <button className="admin-logout" onClick={handleLogout}>
            Sair
          </button>
        </div>

        <div className="admin-nav">
          <Link href="/admin" className="active">
            Posts
          </Link>
          <Link href="/admin/new">Novo Post</Link>
          <Link href="/blog" target="_blank">
            Ver Blog
          </Link>
        </div>

        {loading ? (
          <div className="admin-empty">Carregando...</div>
        ) : posts.length === 0 ? (
          <div className="admin-empty">
            Nenhum post ainda.{' '}
            <Link href="/admin/new" style={{ color: 'var(--accent)' }}>
              Criar primeiro post
            </Link>
          </div>
        ) : (
          <div className="admin-list">
            {posts.map((post) => (
              <div key={post.slug} className="admin-list-item">
                <div>
                  <h3>{post.title}</h3>
                  <span>
                    {new Date(post.date).toLocaleDateString('pt-BR')} ·{' '}
                    {post.tags.join(', ')}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <Link href={`/blog/${post.slug}`} className="tag" target="_blank">
                    Ver
                  </Link>
                  <button
                    className="tag"
                    style={{ cursor: 'pointer', background: 'rgba(255,59,48,0.1)', borderColor: 'rgba(255,59,48,0.3)', color: '#ff3b30' }}
                    onClick={() => handleDelete(post.slug)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
