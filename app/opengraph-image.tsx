import { ImageResponse } from 'next/og';

export const alt = 'Muhammed Ibrahim (Ovansa), Senior QA Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#0a0a0a',
          color: '#fafafa',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          padding: '72px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1040px' }}>
          <div
            style={{
              color: '#a3a3a3',
              display: 'flex',
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            Senior QA Engineer
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.08,
              marginTop: 28,
            }}
          >
            I find product risks early and help teams act with confidence.
          </div>
          <div
            style={{
              color: '#d4d4d4',
              display: 'flex',
              fontSize: 30,
              marginTop: 42,
            }}
          >
            Muhammed Ibrahim · Ovansa
          </div>
        </div>
      </div>
    ),
    size
  );
}
