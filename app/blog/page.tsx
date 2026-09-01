import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import type { Metadata } from 'next'

const siteUrl = 'https://www.pachecoia.com'

export const metadata: Metadata = {
  title: 'Blog | Jackson Pacheco',
  description:
    'Artigos sobre inteligência artificial, desenvolvimento de software, arquitetura de cloud e mais.',
  openGraph: {
    title: 'Blog | Jackson Pacheco',
    description:
      'Artigos sobre inteligência artificial, desenvolvimento de software, arquitetura de cloud e mais.',
    url: `${siteUrl}/blog`,
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="section" style={{ paddingTop: 140 }}>
      <div className="container">
        <div style={{ marginBottom: 64 }}>
          <span className="section-label">// blog</span>
          <h1 className="section-title">Artigos</h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              maxWidth: 600,
              fontSize: 18,
              lineHeight: 1.7,
            }}
          >
            Reflexões sobre inteligência artificial, engenharia de software e
            tecnologia. Escrevo sobre o que aprendo e construo.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card blog-card"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="blog-card-header">
                <time className="blog-date" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </time>
                <div className="blog-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-desc">{post.description}</p>
              <span className="blog-read-more">Ler artigo →</span>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '80px 20px',
              color: 'var(--text-muted)',
            }}
          >
            <p style={{ fontSize: 18 }}>Nenhum artigo publicado ainda.</p>
          </div>
        )}
      </div>
    </section>
  )
}
