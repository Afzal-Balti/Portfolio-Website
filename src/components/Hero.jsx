import { motion } from 'framer-motion'
import { profile, typedRoles, heroPanel } from '../data/content'
import { useTypedText } from '../hooks/useTypedText'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const typed = useTypedText(typedRoles)

  return (
    <section
      id="top"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 90,
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'radial-gradient(circle, var(--line-strong) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 90%)',
          opacity: 0.6,
        }}
      />

      <motion.div
        className="wrap hero-grid"
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 48,
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}
      >
        <div>
          <motion.p variants={item} className="eyebrow">
            {profile.role} · {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            style={{
              fontSize: 'clamp(38px, 5.6vw, 68px)',
              lineHeight: 1.05,
              fontWeight: 800,
              marginBottom: 22,
            }}
          >
            {profile.name}
            <br />
            builds interfaces <span className="highlight">people actually enjoy.</span>
          </motion.h1>

          <motion.p
            variants={item}
            style={{ fontSize: 18, color: 'var(--ink-dim)', maxWidth: 520, marginBottom: 36 }}
          >
            Close to 3 years turning Figma files and API specs into fast, responsive React
            applications — from an 8-month internship to shipping features on live client
            platforms today.
          </motion.p>

          <motion.div
            variants={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-mono)',
              fontSize: 14,
              color: 'var(--ink-dim)',
              marginBottom: 36,
            }}
          >
            <span style={{ color: 'var(--ink-faint)' }}>currently building with</span>
            <span
              style={{
                color: 'var(--indigo)',
                fontWeight: 600,
                minWidth: 118,
                display: 'inline-block',
              }}
            >
              {typed}
              <span className="type-cursor" />
            </span>
          </motion.div>

          <motion.div variants={item} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#work" className="btn btn-primary">
              View my work →
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="inspector-wrap">
          <InspectorPanel />
        </motion.div>
      </motion.div>

      <style>{`
        .type-cursor {
          display: inline-block; width: 2px; height: 15px; background: var(--indigo);
          margin-left: 3px; vertical-align: middle;
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .inspector-wrap { display: none; }
        }
      `}</style>
    </section>
  )
}

function InspectorPanel() {
  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius)',
        boxShadow: '0 30px 60px -24px rgba(20,23,31,0.16)',
        overflow: 'hidden',
      }}
    >
      {/* fake browser chrome */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '14px 18px',
          borderBottom: '1px solid var(--line)',
          background: 'var(--surface-2)',
        }}
      >
        <i style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF6B6B', display: 'block' }} />
        <i style={{ width: 9, height: 9, borderRadius: '50%', background: '#FFC933', display: 'block' }} />
        <i style={{ width: 9, height: 9, borderRadius: '50%', background: '#16A34A', display: 'block' }} />
        <span
          style={{
            marginLeft: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: 11.5,
            color: 'var(--ink-faint)',
          }}
        >
          Hero.jsx — inspector
        </span>
      </div>

      {/* mock canvas with a "selected" button */}
      <div
        style={{
          padding: '46px 30px',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 27px, var(--line) 27px, var(--line) 28px)',
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', display: 'inline-block' }}
        >
          <div
            style={{
              background: 'var(--ink)',
              color: 'var(--signal)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 14,
              padding: '13px 26px',
              borderRadius: 100,
              whiteSpace: 'nowrap',
            }}
          >
            View my work →
          </div>
          <div style={{ position: 'absolute', inset: -7 }}>
            <StaticCornerMarks />
          </div>
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.4 }}
            style={{
              position: 'absolute',
              top: -34,
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: 'var(--font-mono)',
              fontSize: 10.5,
              color: 'var(--indigo)',
              background: 'var(--indigo-wash)',
              padding: '4px 9px',
              borderRadius: 6,
              whiteSpace: 'nowrap',
            }}
          >
            W: 168 · H: 48
          </motion.span>
        </motion.div>
      </div>

      {/* spec sheet rows */}
      <div style={{ padding: '20px 24px 26px' }}>
        {heroPanel.map((row, i) => (
          <div
            key={row.k}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '9px 0',
              borderBottom: i === heroPanel.length - 1 ? 'none' : '1px solid var(--line)',
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
            }}
          >
            <span style={{ color: 'var(--ink-faint)' }}>{row.k}</span>
            <span style={{ color: row.accent ? 'var(--indigo)' : 'var(--ink)', fontWeight: row.accent ? 600 : 400 }}>
              {row.v}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Always-visible corner brackets for the hero mock-up (decorative, not hover-gated). */
function StaticCornerMarks() {
  const corners = [
    { top: 0, left: 0, rotate: 0 },
    { top: 0, right: 0, rotate: 90 },
    { bottom: 0, right: 0, rotate: 180 },
    { bottom: 0, left: 0, rotate: 270 },
  ]
  return (
    <>
      {corners.map((pos, i) => (
        <svg
          key={i}
          width={16}
          height={16}
          viewBox="0 0 16 16"
          style={{ position: 'absolute', ...pos, transform: `rotate(${pos.rotate}deg)` }}
        >
          <path d="M1 9 V1 H9" stroke="var(--indigo)" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      ))}
    </>
  )
}
