import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { skills } from '../data/content'

const accents = ['var(--indigo)', 'var(--signal-ink)', 'var(--indigo)', 'var(--signal-ink)', 'var(--indigo)', 'var(--signal-ink)']

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Skills</p>
          <h2>What I build with.</h2>
          <p>The tools I reach for daily, grouped by where they fit in the stack.</p>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
          }}
        >
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-sm)',
                  padding: 22,
                  height: '100%',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 2,
                      background: accents[i % accents.length],
                      display: 'inline-block',
                      transform: 'rotate(45deg)',
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 14.5,
                      fontWeight: 700,
                      color: 'var(--ink)',
                    }}
                  >
                    {group.title}
                  </h3>
                </div>
                <div className="tag-row">
                  {group.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
