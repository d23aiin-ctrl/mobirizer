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
    title: 'Evaluating LLM Agents in Production | Mobirizer',
    description:
      'How we evaluate agents in production — offline replay, shadow traffic, live regression gates, and the metrics that actually matter.',
    keywords: 'LLM Evaluation, Agent Evals, LLM-as-judge, Production AI, Langfuse, Braintrust',
    alternates: pageAlternates('/blog/evaluating-llm-agents', locale),
    openGraph: {
      title: 'Evaluating LLM Agents in Production | Mobirizer',
      description: 'Offline replay, shadow traffic, and live regression gates.',
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
