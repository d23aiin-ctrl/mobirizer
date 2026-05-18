import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'Solutions | Mobirizer - AI Development Studio',
    description:
      'Mobirizer Solutions - Agentic AI, Conversational AI, AI Integration, and Custom AI Development services from strategy to production.',
    keywords:
      'AI Solutions, Agentic AI, Conversational AI, AI Integration, Custom AI Development, AI Strategy, AI Services',
    alternates: pageAlternates('/solutions', locale),
    openGraph: {
      title: 'Solutions - Mobirizer AI Development Studio',
      description:
        'AI solutions from concept to production—strategy, development, integration, and ongoing support.',
      type: 'website',
    },
  };
}

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
