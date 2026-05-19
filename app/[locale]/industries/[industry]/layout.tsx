import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageAlternates, siteConfig } from '@/lib/metadata';
import { industries, industrySlugs, type IndustrySlug } from '@/lib/industries';
import { Locale } from '@/i18n';

export function generateStaticParams() {
  return industrySlugs.map((industry) => ({ industry }));
}

export async function generateMetadata({
  params: { locale, industry },
}: {
  params: { locale: Locale; industry: string };
}): Promise<Metadata> {
  const data = industries[industry as IndustrySlug];
  if (!data) return {};
  const path = `/industries/${data.slug}`;
  return {
    title: `${data.name} — AI Solutions | Mobirizer`,
    description: data.subhead,
    keywords: `${data.name}, AI, Mobirizer, ${data.name} AI solutions, India`,
    alternates: pageAlternates(path, locale),
    openGraph: {
      title: `${data.name} — AI Solutions | Mobirizer`,
      description: data.subhead,
      type: 'website',
      url: `${siteConfig.url}/${locale}${path}`,
    },
  };
}

export default function IndustryLayout({
  children,
  params: { industry },
}: {
  children: React.ReactNode;
  params: { industry: string };
}) {
  if (!industries[industry as IndustrySlug]) notFound();
  return <>{children}</>;
}
