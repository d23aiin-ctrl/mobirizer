import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/metadata';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: 'Conversational AI - Chatbots & Voice Assistants | Mobirizer',
    description:
      'Build intelligent chatbots and voice assistants with natural language understanding. Multi-channel deployment on WhatsApp, web, mobile, and voice platforms.',
    keywords: 'Conversational AI, Chatbots, Voice AI, NLP, WhatsApp Bots, Customer Service AI',
    alternates: pageAlternates('/solutions/conversational-ai', locale),
    openGraph: {
      title: 'Conversational AI Solutions | Mobirizer',
      description: 'Intelligent chatbots and voice assistants for your business.',
      type: 'website',
    },
  };
}

export default function ConversationalAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
