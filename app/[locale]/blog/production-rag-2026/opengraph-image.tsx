import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Production RAG in 2026';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
              color: 'white',
              fontWeight: 800,
              fontSize: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            M
          </div>
          <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: '0.05em' }}>MOBIRIZER</span>
          <span style={{ fontSize: 14, color: '#a1a1aa', fontFamily: 'monospace', marginLeft: 8 }}>/ BLOG</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 16,
              color: '#a5b4fc',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: 24,
            }}
          >
            Engineering · 15 min read
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
            }}
          >
            Production RAG in 2026:
            <br />
            what works,{' '}
            <span style={{ color: '#a5b4fc' }}>what we stopped doing.</span>
          </div>
        </div>
        <div style={{ fontSize: 18, color: '#a1a1aa', fontFamily: 'monospace' }}>
          mobirizer.online/blog/production-rag-2026
        </div>
      </div>
    ),
    size
  );
}
