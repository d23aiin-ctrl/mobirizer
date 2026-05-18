import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'D23.ai - WhatsApp AI Assistant | Mobirizer',
    description:
      "D23.ai - India's WhatsApp AI Assistant supporting 11+ Indian languages. Voice messages, image generation, train PNR status, web search and more.",
    keywords: 'D23.ai, WhatsApp AI, ChatGPT for India, Indian Languages AI, Voice AI',
    alternates: pageAlternates('/products/d23-ai', locale),
    openGraph: {
      title: 'D23.ai - WhatsApp AI Assistant | Mobirizer',
      description: 'AI assistant for India with 11+ languages, voice, and image capabilities.',
      type: 'website',
    },
  };
}

export default function D23AILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
