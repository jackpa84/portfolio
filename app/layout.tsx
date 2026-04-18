import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jackson Pacheco | Full Stack Developer',
  description: 'Desenvolvedor Full Stack com 16+ anos de experiência. Especializado em AI, Cloud & Sistemas Distribuídos. Python, React, Next.js, AWS e muito mais.',
  keywords: ['Full Stack Developer', 'Python', 'React', 'Next.js', 'AWS', 'Docker', 'AI'],
  authors: [{ name: 'Jackson Pacheco' }],
  openGraph: {
    title: 'Jackson Pacheco | Full Stack Developer',
    description: 'Desenvolvedor Full Stack com 16+ anos de experiência em AI, Cloud & Sistemas Distribuídos.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="scanlines">{children}</body>
    </html>
  )
}
