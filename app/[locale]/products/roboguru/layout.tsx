import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'RoboGuru - AI Education Platform | Mobirizer',
    description:
      'RoboGuru - AI-powered education platform with photo-to-solution technology and adaptive learning for students.',
    keywords: 'RoboGuru, AI Tutor, Education AI, Photo to Solution, Adaptive Learning',
    alternates: pageAlternates('/products/roboguru', locale),
    openGraph: {
      title: 'RoboGuru - AI Education Platform | Mobirizer',
      description: 'Photo-to-solution AI tutor for students.',
      type: 'website',
    },
  };
}

export default function RoboGuruLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
