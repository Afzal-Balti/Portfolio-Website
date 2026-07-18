import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer
      style={{
        padding: '36px 0',
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--ink-faint)',
      }}
    >
      <div className="wrap">
        © {new Date().getFullYear()} {profile.name} · Built with React, Vite & Framer Motion ·{' '}
        {profile.location}
      </div>
    </footer>
  )
}
