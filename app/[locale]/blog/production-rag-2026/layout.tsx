import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';
import { ReadingProgress } from '@/components/ui';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'Production RAG in 2026 | Mobirizer',
    description:
      'What we learned shipping RAG to production — hybrid retrieval, re-ranking, propositional chunking, and what we stopped doing.',
    keywords: 'RAG, Retrieval, Re-ranking, Production AI, Hybrid Search, BM25, Dense Retrieval',
    alternates: pageAlternates('/blog/production-rag-2026', locale),
    openGraph: {
      title: 'Production RAG in 2026 | Mobirizer',
      description: 'Hybrid retrieval, re-ranking, and what we stopped doing.',
      type: 'article',
    },
  };
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  );
}
