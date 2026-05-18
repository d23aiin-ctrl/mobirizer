import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'Engineering | Mobirizer',
    description:
      'How we build AI systems that survive production — evals, LLMOps, guardrails, fine-tuning, MCP, and retrieval.',
    keywords: 'AI Engineering, LLMOps, Evals, Guardrails, MCP, Retrieval, Fine-tuning',
    alternates: pageAlternates('/engineering', locale),
    openGraph: {
      title: 'Engineering | Mobirizer',
      description: 'Engineering discipline behind production AI systems.',
      type: 'website',
    },
  };
}

export default function EngineeringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
