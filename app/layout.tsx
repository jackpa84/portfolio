import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://www.pachecoia.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Jackson Pacheco | Full Stack Developer',
  description: 'Desenvolvedor Full Stack com 16+ anos de experiência. Especializado em AI, Cloud & Sistemas Distribuídos. Python, React, Next.js, AWS e muito mais.',
  keywords: ['Full Stack Developer', 'Python', 'React', 'Next.js', 'AWS', 'Docker', 'AI', 'Desenvolvedor', 'Engenheiro de Software'],
  authors: [{ name: 'Jackson Pacheco' }],
  creator: 'Jackson Pacheco',
  openGraph: {
    title: 'Jackson Pacheco | Full Stack Developer',
    description: 'Desenvolvedor Full Stack com 16+ anos de experiência em AI, Cloud & Sistemas Distribuídos.',
    url: siteUrl,
    siteName: 'Jackson Pacheco Portfolio',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'Jackson Pacheco - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jackson Pacheco | Full Stack Developer',
    description: 'Desenvolvedor Full Stack com 16+ anos de experiência em AI, Cloud & Sistemas Distribuídos.',
    images: ['/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jackson Pacheco',
    jobTitle: 'Full Stack Developer',
    description: 'Desenvolvedor Full Stack com 16+ anos de experiência em AI, Cloud & Sistemas Distribuídos.',
    url: siteUrl,
    image: `${siteUrl}/profile.png`,
    sameAs: [
      'https://github.com/jackpa84',
      'https://linkedin.com/in/jackson-pacheco-86901322a/',
    ],
    knowsAbout: [
      'Python',
      'React',
      'Next.js',
      'AWS',
      'Docker',
      'Artificial Intelligence',
      'Full Stack Development',
      'Cloud Architecture',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full Stack Developer',
      skills: 'Python, React, Next.js, AWS, Docker, AI, TypeScript, Node.js',
    },
  }

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="scanlines">{children}</body>
    </html>
  )
}
