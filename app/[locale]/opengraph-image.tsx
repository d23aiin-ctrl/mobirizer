import { renderOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Mobirizer — AI Development Studio';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOGImage({
    eyebrow: 'AI Development Studio · Since 2014',
    title: 'Ship AI that actually',
    accentTitle: 'works in production.',
    footer: ['Agents', 'RAG', 'Fine-tunes', 'LLMOps'],
  });
}
