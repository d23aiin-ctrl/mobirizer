import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'Terms of Service | Mobirizer',
    description: 'Terms of Service for Mobirizer Services Pvt. Ltd. Read our terms and conditions for using our AI development services.',
    alternates: pageAlternates('/terms-of-service', locale),
  };
}

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
