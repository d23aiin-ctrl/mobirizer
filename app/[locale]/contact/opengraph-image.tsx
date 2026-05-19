import { renderOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Mobirizer — Contact';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOGImage({
    eyebrow: 'Contact',
    title: 'Start a project.',
    accentTitle: "A founder will reply within 48 hours.",
    footer: ['info@mobirizer.online', '+91 9810503222'],
  });
}
