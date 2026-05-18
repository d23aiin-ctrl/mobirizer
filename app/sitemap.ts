import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mobirizer.online';

  const routes = [
    '',
    '/company',
    '/contact',
    '/careers',
    '/engineering',
    '/blog',
    '/blog/evaluating-llm-agents',
    '/blog/production-rag-2026',
    '/case-studies',
    '/case-studies/regional-bank-kyc-agent',
    '/products',
    '/solutions',
    '/products/d23-ai',
    '/products/whatsapp-commerce',
    '/products/roboguru',
    '/products/ohgrt',
    '/products/xappy',
    '/products/janseva',
    '/solutions/agentic-ai',
    '/solutions/conversational-ai',
    '/solutions/ai-integration',
    '/solutions/custom-development',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route.startsWith('/products/') ? 0.7 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${baseUrl}/${loc}${route}`])
          ),
        },
      });
    });
  });

  return sitemapEntries;
}
