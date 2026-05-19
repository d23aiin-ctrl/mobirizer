import { renderOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Mobirizer — Company';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOGImage({
    eyebrow: 'Company · since 2014',
    title: 'AI Development Studio.',
    accentTitle: 'Vaishali, Bihar.',
    footer: ['Founded 2014', 'AI-first since 2019', '47 agents in production'],
  });
}
