import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'Industries | Mobirizer',
    description:
      'AI solutions for government, BFSI, healthcare, and education — built around the constraints each sector actually has.',
    keywords: 'AI industries, Government AI, BFSI AI, Healthcare AI, Education AI, Mobirizer',
    alternates: pageAlternates('/industries', locale),
    openGraph: {
      title: 'Industries | Mobirizer',
      description: 'AI solutions for government, BFSI, healthcare, and education.',
      type: 'website',
    },
  };
}

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
