import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'AI Integration Services - Connect AI to Your Systems | Mobirizer',
    description:
      'Seamlessly integrate AI capabilities into your existing workflows. API development, legacy system modernization, and data pipeline automation.',
    keywords: 'AI Integration, API Development, System Integration, Data Pipelines, AI Deployment, MLOps',
    alternates: pageAlternates('/solutions/ai-integration', locale),
    openGraph: {
      title: 'AI Integration Services | Mobirizer',
      description: 'Connect AI to your existing systems and workflows.',
      type: 'website',
    },
  };
}

export default function AIIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
