import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'Blog | Mobirizer',
    description:
      'Technical writing on agents, RAG, evals, and shipping AI in production — from the Mobirizer engineering team.',
    keywords: 'AI Blog, LLM Engineering, RAG, Agents, Mobirizer',
    alternates: pageAlternates('/blog', locale),
    openGraph: {
      title: 'Blog | Mobirizer',
      description: 'Technical writing on agents, RAG, and shipping AI in production.',
      type: 'website',
    },
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
