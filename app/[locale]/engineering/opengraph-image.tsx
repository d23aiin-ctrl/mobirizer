import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Mobirizer — Engineering';
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
            How we build
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
            }}
          >
            Engineering discipline,
            <br />
            <span style={{ color: '#a5b4fc' }}>not AI theatre.</span>
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
          <span>evals</span>
          <span>LLMOps</span>
          <span>guardrails</span>
          <span>fine-tuning</span>
          <span>MCP</span>
          <span>retrieval</span>
        </div>
      </div>
    ),
    size
  );
}
