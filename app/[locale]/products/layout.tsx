import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'Products | Mobirizer - AI Development Studio',
    description:
      'Mobirizer Products - AI solutions including D23.ai, RoboGuru, OHGRT, Xappy, and JanSeva serving millions of users worldwide.',
    keywords:
      'AI Products, D23.ai, RoboGuru, OHGRT, Xappy, JanSeva, Government AI, Education AI, Healthcare AI',
    alternates: pageAlternates('/products', locale),
    openGraph: {
      title: 'Products - Mobirizer AI Development Studio',
      description:
        'AI solutions serving millions of users worldwide across government, education, and enterprise sectors.',
      type: 'website',
    },
  };
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
