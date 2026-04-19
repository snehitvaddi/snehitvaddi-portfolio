import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Snehit Vaddi — GenAI Engineer in Healthcare'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
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
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Top row — brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#22c55e',
              boxShadow: '0 0 20px #22c55e',
            }}
          />
          <span
            style={{
              fontSize: 22,
              color: '#94a3b8',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Snehit Vaddi · snehitvaddi.com
          </span>
        </div>

        {/* Main heading */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h1
            style={{
              fontSize: 84,
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              margin: 0,
              maxWidth: 1000,
            }}
          >
            GenAI Engineer shipping{' '}
            <span style={{ color: '#60a5fa' }}>Healthcare AI</span> to production
          </h1>
          <p
            style={{
              fontSize: 28,
              color: '#cbd5e1',
              margin: 0,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Clinical LLMs · Agentic AI · RAG · HealthTech SaaS
          </p>
        </div>

        {/* Bottom row — stats */}
        <div style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 44, fontWeight: 800, color: '#ffffff' }}>15,000+</span>
            <span style={{ fontSize: 18, color: '#94a3b8', marginTop: 4 }}>
              providers served
            </span>
          </div>
          <div style={{ width: 1, height: 50, background: '#334155' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 44, fontWeight: 800, color: '#ffffff' }}>600+</span>
            <span style={{ fontSize: 18, color: '#94a3b8', marginTop: 4 }}>
              GitHub stars
            </span>
          </div>
          <div style={{ width: 1, height: 50, background: '#334155' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 44, fontWeight: 800, color: '#ffffff' }}>4+ yrs</span>
            <span style={{ fontSize: 18, color: '#94a3b8', marginTop: 4 }}>
              building production AI
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
