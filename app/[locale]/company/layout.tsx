import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'Company | Mobirizer - AI Development Studio',
    description:
      'About Mobirizer - AI Development Studio founded in 2014, now an AI-first company serving government, education, and enterprise clients.',
    keywords: 'Mobirizer, AI Company, About Us, AI Development Studio, Bihar, India',
    alternates: pageAlternates('/company', locale),
    openGraph: {
      title: 'Company - Mobirizer AI Development Studio',
      description: 'AI Development Studio since 2014.',
      type: 'website',
    },
  };
}

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
