import { renderOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Mobirizer — Solutions';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOGImage({
    eyebrow: 'Solutions',
    title: 'AI from concept',
    accentTitle: 'to production.',
    footer: ['agentic', 'conversational', 'integration', 'custom'],
  });
}
