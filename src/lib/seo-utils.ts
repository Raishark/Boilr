export const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://boilr.ribla.mx';

export function getOgImageUrl(title?: string, description?: string) {
    const url = new URL(`${BASE_URL}/api/og`);
    if (title) url.searchParams.set('title', title);
    if (description) url.searchParams.set('description', description);
    return url.toString();
}

export function getStructuredData(type: 'SoftwareApplication' | 'WebSite' | 'HowTo', data: Record<string, unknown>) {
    const base = {
        '@context': 'https://schema.org',
        '@type': type,
        ...data
    };
    return JSON.stringify(base);
}
