import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'Privacy Policy | Mobirizer',
    description: 'Privacy Policy for Mobirizer Services Pvt. Ltd. Learn how we collect, use, and protect your personal data.',
    alternates: pageAlternates('/privacy-policy', locale),
  };
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
