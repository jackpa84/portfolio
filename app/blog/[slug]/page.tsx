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
      html.push(`<h2 class="blog-h2">${trimmed.slice(3)}</h2>`)
    } else if (trimmed.startsWith('### ')) {
      html.push(`<h3 class="blog-h3">${trimmed.slice(4)}</h3>`)
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (!inList) {
        html.push('<ul class="blog-list">')
        inList = true
      }
      html.push(`<li>${renderInline(trimmed.slice(2))}</li>`)
    } else if (trimmed.startsWith('> ')) {
      html.push(
        `<blockquote class="blog-quote">${renderInline(trimmed.slice(2))}</blockquote>`
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

  let html = '<div class="blog-table-wrap"><table class="blog-table"><thead><tr>'
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
    .replace(/`(.+?)`/g, '<code class="blog-code">$1</code>')
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" class="blog-link" target="_blank" rel="noopener noreferrer">$1</a>'
    )
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const contentHtml = renderMarkdown(post.content)

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
        <div className="container" style={{ maxWidth: 780 }}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <Link href="/blog" className="blog-back">
            ← Voltar ao blog
          </Link>

          <header style={{ marginBottom: 48 }}>
            <div className="blog-tags" style={{ marginBottom: 16 }}>
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
              <span>·</span>
              <span>{post.author}</span>
            </div>
          </header>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>
      <Footer />
    </main>
  )
}
