import Reveal from './Reveal'
import { about, whoami } from '../data/content'

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 style={{ fontSize: 'clamp(26px,3vw,36px)', marginBottom: 24, fontWeight: 700 }}>
            {about.heading}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} style={{ color: 'var(--ink-dim)', fontSize: 16.5, marginBottom: 18 }}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.12}>
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              padding: 26,
              boxShadow: '0 24px 48px -32px rgba(20,23,31,0.14)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                paddingBottom: 14,
                marginBottom: 8,
                borderBottom: '1px solid var(--line)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--indigo)',
                  background: 'var(--indigo-wash)',
                  padding: '3px 8px',
                  borderRadius: 6,
                }}
              >
                profile.json
              </span>
            </div>
            {whoami.map((row, i) => (
              <div
                key={row.k}
                style={{
                  display: 'flex',
                  gap: 10,
                  padding: '9px 0',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13.5,
                  color: 'var(--ink-dim)',
                  borderBottom: i === whoami.length - 1 ? 'none' : '1px solid var(--line)',
                }}
              >
                <span style={{ color: 'var(--ink-faint)', minWidth: 96 }}>{row.k}</span>
                <span style={{ color: 'var(--ink)' }}>{row.v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        .about-grid {
          display: grid; grid-template-columns: 1.3fr 1fr; gap: 60px; align-items: start;
        }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
