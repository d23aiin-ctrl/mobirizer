import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'JanSeva - AI Citizen Engagement Platform | Mobirizer',
    description:
      'JanSeva - AI-powered citizen engagement platform for elected representatives. Connect with constituents via WhatsApp, manage grievances, and build digital presence.',
    keywords: 'JanSeva, Citizen Engagement, WhatsApp Bot, Grievance Management, MP MLA Platform, GovTech',
    alternates: pageAlternates('/products/janseva', locale),
    openGraph: {
      title: 'JanSeva - AI Citizen Engagement Platform | Mobirizer',
      description: 'AI-powered platform for elected representatives to connect with citizens.',
      type: 'website',
    },
  };
}

export default function JanSevaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
