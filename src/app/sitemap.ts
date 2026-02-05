import { MetadataRoute } from 'next'
import { DOCS_CONFIG } from '@/lib/docs-config'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://boilr.ribla.mx'

    const staticRoutes = [
        '',
        '/templates',
        '/generate',
        '/docs',
        '/features',
        '/how-it-works',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const docsRoutes = DOCS_CONFIG.map((doc) => ({
        url: `${baseUrl}/docs/${doc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...staticRoutes, ...docsRoutes]
}
