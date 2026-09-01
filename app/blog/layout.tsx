import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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
    siteName: 'Jackson Pacheco Portfolio',
    type: 'website',
    locale: 'pt_BR',
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="grid-bg">
      <Nav />
      {children}
      <Footer />
    </main>
  )
}
