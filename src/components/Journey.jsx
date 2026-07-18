import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Reveal from './Reveal'
import { journey } from '../data/content'

export default function Journey() {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.85', 'end 0.6'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })

  return (
    <section id="journey" style={{ background: 'var(--surface)' }}>
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">The Journey</p>
          <h2>Every checkpoint since 2022.</h2>
          <p>
            The route from first semester to first production deploy — and where I'm building
            right now.
          </p>
        </Reveal>

        <div ref={timelineRef} style={{ position: 'relative', marginTop: 20 }}>
          <div
            aria-hidden="true"
            style={{ position: 'absolute', left: 26, top: 0, bottom: 0, width: 2, background: 'var(--line)' }}
          />
          <motion.div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 26,
              top: 0,
              width: 2,
              scaleY: progress,
              transformOrigin: 'top',
              height: '100%',
              background: 'linear-gradient(var(--indigo), var(--signal))',
            }}
          />

          {journey.map((step, i) => (
            <Checkpoint key={step.marker} step={step} index={i} isLast={i === journey.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Checkpoint({ step, index, isLast }) {
  return (
    <Reveal delay={index * 0.05} style={{ position: 'relative', paddingLeft: 72, marginBottom: 56 }}>
      <CheckpointMarker label={step.marker} isLast={isLast} />
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: 'var(--ink)',
          background: 'var(--signal)',
          padding: '3px 9px',
          borderRadius: 6,
          letterSpacing: '0.02em',
          marginBottom: 10,
          display: 'inline-block',
          fontWeight: 600,
        }}
      >
        {step.date}
      </span>
      <h3 style={{ fontSize: 20, marginBottom: 6, fontWeight: 700 }}>{step.title}</h3>
      <span
        style={{
          color: 'var(--indigo)',
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          marginBottom: 10,
          display: 'block',
        }}
      >
        {step.org}
      </span>
      <p style={{ color: 'var(--ink-dim)', fontSize: 15, maxWidth: 560 }}>{step.desc}</p>
    </Reveal>
  )
}

function CheckpointMarker({ label, isLast }) {
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0.4 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'absolute',
        left: 14,
        top: 2,
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: isLast ? 'var(--indigo)' : 'var(--surface)',
        border: `2px solid ${isLast ? 'var(--indigo)' : 'var(--line-strong)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: isLast ? '#fff' : 'var(--ink-dim)',
        fontWeight: 600,
      }}
    >
      {label}
    </motion.div>
  )
}
