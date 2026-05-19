import { renderOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Mobirizer — Industries';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOGImage({
    eyebrow: 'Industries',
    title: 'AI for the sector',
    accentTitle: 'you work in.',
    footer: ['Government', 'BFSI', 'Healthcare', 'Education'],
  });
}
