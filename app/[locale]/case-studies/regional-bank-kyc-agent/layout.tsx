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
    title: 'Regional Bank KYC Agent — Case Study | Mobirizer',
    description:
      'How we shipped a production KYC agent for a regional bank — evals, guardrails, and the numbers that came out the other side.',
    keywords: 'KYC, BFSI AI, Compliance AI, Banking AI, Production Agent, Case Study',
    alternates: pageAlternates('/case-studies/regional-bank-kyc-agent', locale),
    openGraph: {
      title: 'Regional Bank KYC Agent — Case Study | Mobirizer',
      description: 'Production KYC agent for a regional bank: evals, guardrails, results.',
      type: 'article',
    },
  };
}

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  );
}
