import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'Careers | Mobirizer',
    description:
      'Join Mobirizer — an AI Development Studio shipping production-grade agents, RAG, and fine-tuned models. Remote-friendly engineering roles.',
    keywords: 'Careers, AI Jobs, Machine Learning Jobs, LLM Engineering Jobs, Mobirizer Careers',
    alternates: pageAlternates('/careers', locale),
    openGraph: {
      title: 'Careers | Mobirizer',
      description: 'Join an AI development studio that ships in production.',
      type: 'website',
    },
  };
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
