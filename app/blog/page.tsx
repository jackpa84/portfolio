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
        <span className="section-label">// blog</span>
        <h1 className="section-title">Artigos</h1>
        <p
          style={{
            color: 'var(--text-secondary)',
            maxWidth: 560,
            marginBottom: 48,
            fontSize: 16,
          }}
        >
          Reflexões sobre inteligência artificial, engenharia de software e
          tecnologia.
        </p>

        <div className="blog-grid">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card blog-card"
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
      </div>
    </section>
  )
}
