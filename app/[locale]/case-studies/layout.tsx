import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'Case Studies | Mobirizer',
    description:
      'What we shipped, with the numbers. Production AI case studies across BFSI, healthcare, government, and education.',
    keywords: 'AI Case Studies, Production AI, Mobirizer, KYC Agent, RAG, Fine-tuning',
    alternates: pageAlternates('/case-studies', locale),
    openGraph: {
      title: 'Case Studies | Mobirizer',
      description: 'AI solutions shipped to production, with the numbers.',
      type: 'website',
    },
  };
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
