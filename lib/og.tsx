import { ImageResponse } from 'next/og';

/**
 * Shared Open Graph image renderer. Keeps per-route opengraph-image.tsx
 * files thin — just pass the eyebrow/title/footer.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

interface RenderOGOptions {
  eyebrow: string;
  title: string;
  /** Final clause rendered in the indigo accent color. Renders on its own line. */
  accentTitle?: string;
  /** Optional pillar/category labels rendered as a mono footer row. */
  footer?: string[];
}

export function renderOGImage({ eyebrow, title, accentTitle, footer }: RenderOGOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(180deg, #08080a 0%, #0f0f14 60%, #151523 100%)',
          color: '#fafafa',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: '#6366f1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            M
          </div>
          <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: '0.05em' }}>
            MOBIRIZER
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 20,
              color: '#a1a1aa',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontFamily: 'monospace',
              marginBottom: 24,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: accentTitle ? 72 : 80,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
            }}
          >
            <span>{title}</span>
            {accentTitle && (
              <span style={{ color: '#a5b4fc' }}>{accentTitle}</span>
            )}
          </div>
        </div>
        <div
          style={{
            fontSize: 16,
            color: '#a1a1aa',
            fontFamily: 'monospace',
            display: 'flex',
            gap: 32,
          }}
        >
          {(footer && footer.length > 0 ? footer : ['mobirizer.online']).map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
      </div>
    ),
    OG_SIZE
  );
}
