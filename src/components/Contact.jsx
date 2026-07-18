import Reveal from './Reveal'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal
          className="contact-box"
          style={{
            background: 'var(--ink)',
            borderRadius: 28,
            padding: '70px 60px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              width: 420,
              height: 420,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,201,51,0.14), transparent 70%)',
              top: -160,
              right: -110,
              pointerEvents: 'none',
            }}
          />
          <p className="eyebrow" style={{ justifyContent: 'center', color: 'var(--signal)' }}>
            Get In Touch
          </p>
          <h2
            style={{
              fontSize: 'clamp(30px,4.4vw,52px)',
              marginBottom: 18,
              position: 'relative',
              color: '#fff',
              fontWeight: 800,
            }}
          >
            Let's build the next checkpoint.
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.68)',
              maxWidth: 480,
              margin: '0 auto 36px',
              fontSize: 16.5,
              position: 'relative',
            }}
          >
            Open to Front-End Developer roles and freelance work. I usually reply within a day.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
              position: 'relative',
              marginBottom: 44,
            }}
          >
            <a
              href={`mailto:${profile.email}`}
              className="btn"
              style={{ background: 'var(--signal)', color: 'var(--signal-ink)', fontWeight: 700 }}
            >
              Email me →
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="btn"
              style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: '#fff' }}
            >
              Call: {profile.phoneDisplay}
            </a>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 26,
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              color: 'rgba(255,255,255,0.65)',
              position: 'relative',
              flexWrap: 'wrap',
            }}
            className="social-row"
          >
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </Reveal>
      </div>

      <style>{`
        .social-row a { transition: color .25s ease; }
        .social-row a:hover { color: var(--signal); }
        @media (max-width: 860px) {
          .contact-box { padding: 48px 26px !important; }
        }
      `}</style>
    </section>
  )
}
