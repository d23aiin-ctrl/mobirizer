import { Metadata } from 'next';
import { locales } from '@/i18n';

export const siteConfig = {
  name: 'Mobirizer',
  tagline: 'AI Development Studio',
  description:
    'AI Development Studio building production-grade solutions for government, education, healthcare, and enterprise clients since 2014.',
  url: 'https://mobirizer.online',
  themeColor: '#6366f1',
  company: {
    name: 'Mobirizer Services Pvt. Ltd.',
    address: 'At- Bihari Gadh, Post- Bithauli, P.S.- Bhagwanpur, Hajipur, Dist.- Vaishali, Bihar 844114, India',
    email: 'info@mobirizer.com',
    phone: '+91 9810503222',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/mobirizer/',
    twitter: 'https://twitter.com/mobirizer',
    github: 'https://github.com/mobirizer',
    facebook: 'https://www.facebook.com/MobiRizer',
  },
};

export function createMetadata(options: {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
}): Metadata {
  return {
    title: options.title,
    description: options.description,
    keywords: options.keywords,
    authors: [{ name: siteConfig.company.name }],
    robots: 'index, follow',
    openGraph: {
      title: options.ogTitle || options.title,
      description: options.ogDescription || options.description,
      type: 'website',
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: options.ogTitle || options.title,
      description: options.ogDescription || options.description,
    },
    icons: {
      icon: '/assets/images/favicon.png',
      apple: '/assets/images/apple-icon.png',
    },
  };
}

/**
 * Build canonical + hreflang alternates for a route path (e.g. "/products/d23-ai").
 * Canonical points at the default-locale URL; languages cover every supported locale.
 */
export function pageAlternates(path: string, locale: string = 'en'): NonNullable<Metadata['alternates']> {
  const trimmed = path.startsWith('/') ? path : `/${path}`;
  return {
    canonical: `${siteConfig.url}/${locale}${trimmed}`,
    languages: Object.fromEntries(
      locales.map((loc) => [loc, `${siteConfig.url}/${loc}${trimmed}`])
    ),
  };
}
