import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'Contact | Mobirizer - AI Development Studio',
    description:
      'Contact Mobirizer - Get in touch with our AI development team. Email, phone, or visit our office in Vaishali, Bihar.',
    keywords: 'Contact Mobirizer, AI Development, Bihar, India',
    alternates: pageAlternates('/contact', locale),
    openGraph: {
      title: 'Contact - Mobirizer AI Development Studio',
      description: 'Get in touch with our AI development team.',
      type: 'website',
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
