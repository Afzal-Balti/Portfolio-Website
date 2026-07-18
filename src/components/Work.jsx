import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { projects } from '../data/content'
import CornerMarks from './CornerMarks'

export default function Work() {
  return (
    <section id="work" style={{ background: 'var(--surface)' }}>
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Selected Work</p>
          <h2>Things I've shipped.</h2>
          <p>
            A mix of client work and self-directed builds — from a full-stack social app to
            smaller front-end-only projects.
          </p>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}
        >
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{ rest: { y: 0 }, hover: { y: -6 } }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        background: 'var(--bg)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius)',
        padding: 26,
        position: 'relative',
        height: '100%',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <CornerMarks />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--ink-faint)',
              display: 'block',
              marginBottom: 4,
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 style={{ fontSize: 19, marginBottom: 5, fontWeight: 700 }}>{project.title}</h3>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-faint)' }}>
            {project.tagline}
          </span>
        </div>
        {project.badge && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10.5,
              color: '#fff',
              background: 'var(--live)',
              padding: '4px 9px',
              borderRadius: 100,
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            ● {project.badge}
          </span>
        )}
      </div>

      <p style={{ color: 'var(--ink-dim)', fontSize: 14.5, margin: '14px 0 18px' }}>{project.desc}</p>

      <div className="tag-row" style={{ marginBottom: 18 }}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 14 }}>
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 13,
              color: 'var(--indigo)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            {link.label} ↗
          </a>
        ))}
      </div>

      <style>{`
        .project-link { transition: gap .2s ease; }
        .project-link:hover { gap: 9px; }
      `}</style>
    </motion.div>
  )
}
