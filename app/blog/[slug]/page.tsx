import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const siteUrl = 'https://www.pachecoia.com'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Blog - Jackson Pacheco`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  }
}

function extractHeadings(content: string) {
  const headings: { level: number; text: string; id: string }[] = []
  const lines = content.trim().split('\n')

  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('## ')) {
      const text = trimmed.slice(3)
      const id = text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
      headings.push({ level: 2, text, id })
    } else if (trimmed.startsWith('### ')) {
      const text = trimmed.slice(4)
      const id = text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
      headings.push({ level: 3, text, id })
    }
  }

  return headings
}

function renderMarkdown(content: string) {
  const lines = content.trim().split('\n')
  const html: string[] = []
  let inList = false
  let inTable = false
  let tableRows: string[] = []

  for (const line of lines) {
    const trimmed = line.trim()

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (!inTable) {
        inTable = true
        tableRows = []
      }
      if (trimmed.match(/^\|[\s-|]+\|$/)) continue
      tableRows.push(trimmed)
      continue
    } else if (inTable) {
      inTable = false
      html.push(renderTable(tableRows))
      tableRows = []
    }

    if (inList && !trimmed.startsWith('- ') && !trimmed.startsWith('* ')) {
      html.push('</ul>')
      inList = false
    }

    if (trimmed.startsWith('## ')) {
      const text = trimmed.slice(3)
      const id = text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
      html.push(`<h2 id="${id}">${text}</h2>`)
    } else if (trimmed.startsWith('### ')) {
      const text = trimmed.slice(4)
      const id = text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
      html.push(`<h3 id="${id}">${text}</h3>`)
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (!inList) {
        html.push('<ul>')
        inList = true
      }
      html.push(`<li>${renderInline(trimmed.slice(2))}</li>`)
    } else if (trimmed.startsWith('> ')) {
      html.push(
        `<blockquote>${renderInline(trimmed.slice(2))}</blockquote>`
      )
    } else if (trimmed === '') {
      html.push('')
    } else {
      html.push(`<p>${renderInline(trimmed)}</p>`)
    }
  }

  if (inList) html.push('</ul>')
  if (inTable && tableRows.length) html.push(renderTable(tableRows))

  return html.join('\n')
}

function renderTable(rows: string[]): string {
  const header = rows[0]
    .split('|')
    .filter((c) => c.trim())
    .map((c) => c.trim())
  const body = rows.slice(1).map((row) =>
    row
      .split('|')
      .filter((c) => c.trim())
      .map((c) => c.trim())
  )

  let html = '<div class="blog-table-wrap"><table><thead><tr>'
  header.forEach((h) => {
    html += `<th>${renderInline(h)}</th>`
  })
  html += '</tr></thead><tbody>'
  body.forEach((row) => {
    html += '<tr>'
    row.forEach((cell) => {
      html += `<td>${renderInline(cell)}</td>`
    })
    html += '</tr>'
  })
  html += '</tbody></table></div>'
  return html
}

function renderInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    )
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const contentHtml = renderMarkdown(post.content)
  const headings = extractHeadings(post.content)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: post.author,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  }

  return (
    <main className="grid-bg">
      <Nav />
      <article className="section" style={{ paddingTop: 140 }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <Link href="/blog" className="blog-back">
            ← Voltar ao blog
          </Link>

          <header style={{ marginBottom: 56 }}>
            <div className="blog-tags" style={{ marginBottom: 20 }}>
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="blog-title">{post.title}</h1>
            <p className="blog-desc">{post.description}</p>
            <div className="blog-meta">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <span style={{ color: 'var(--text-muted)' }}>·</span>
              <span>{post.author}</span>
            </div>
          </header>

          {headings.length > 1 && (
            <nav
              style={{
                marginBottom: 48,
                padding: '24px 28px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  display: 'block',
                  marginBottom: 14,
                }}
              >
                Neste artigo
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {headings.map((h) => (
                  <li
                    key={h.id}
                    style={{
                      paddingLeft: h.level === 3 ? 20 : 0,
                      marginBottom: 8,
                    }}
                  >
                    <a
                      href={`#${h.id}`}
                      style={{
                        fontSize: 14,
                        color: 'var(--text-secondary)',
                        transition: 'color 0.2s',
                      }}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          <div
            style={{
              marginTop: 64,
              paddingTop: 32,
              borderTop: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent), var(--accent-soft))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 18,
                color: 'var(--bg-primary)',
              }}
            >
              JP
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 15,
                  color: 'var(--text-primary)',
                }}
              >
                {post.author}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--text-muted)',
                }}
              >
                Full Stack Developer
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
