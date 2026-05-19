import { renderOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Mobirizer — Products';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOGImage({
    eyebrow: 'Products',
    title: 'AI products serving',
    accentTitle: 'millions of users.',
    footer: ['D23.ai', 'JanSeva', 'Xappy', 'OHGRT', 'RoboGuru'],
  });
}
