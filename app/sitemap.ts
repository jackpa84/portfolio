import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

const siteUrl = 'https://www.pachecoia.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const blogPosts = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogPosts,
  ]
}
