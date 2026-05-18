import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'Custom AI Development - Tailored AI Solutions | Mobirizer',
    description:
      'Bespoke AI solutions built for your unique requirements. Custom model training, fine-tuning, MLOps, and end-to-end AI development.',
    keywords: 'Custom AI Development, AI Solutions, Machine Learning, Model Training, Fine-tuning, MLOps',
    alternates: pageAlternates('/solutions/custom-development', locale),
    openGraph: {
      title: 'Custom AI Development | Mobirizer',
      description: 'Tailored AI solutions for your unique business needs.',
      type: 'website',
    },
  };
}

export default function CustomDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
