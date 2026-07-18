import { useState } from 'react'
import { motion } from 'framer-motion'
import { navItems } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(navItems.map((n) => n.href.slice(1)))
  const closeMenu = () => setOpen(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(245,246,250,0.78)',
        backdropFilter: 'blur(14px) saturate(140%)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <nav
        style={{
          maxWidth: 'var(--maxw)',
          margin: '0 auto',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 18,
            color: 'var(--ink)',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              background: 'var(--ink)',
              color: 'var(--signal)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 13,
              fontFamily: 'var(--font-mono)',
              marginRight: 4,
            }}
          >
            MA
          </span>
          Afzal
        </a>

        <ul className={open ? 'nav-links open' : 'nav-links'} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href} active={active === item.href.slice(1)} onClick={closeMenu}>
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={closeMenu} className="btn btn-primary" style={{ padding: '10px 20px', fontSize: 13.5 }}>
              Let's talk
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          className="burger"
          onClick={() => setOpen((o) => !o)}
          style={{ display: 'none', flexDirection: 'column', gap: 5 }}
        >
          <span style={{ width: 22, height: 2, background: 'var(--ink)', display: 'block', borderRadius: 2 }} />
          <span style={{ width: 22, height: 2, background: 'var(--ink)', display: 'block', borderRadius: 2 }} />
          <span style={{ width: 22, height: 2, background: 'var(--ink)', display: 'block', borderRadius: 2 }} />
        </button>
      </nav>

      <style>{`
        @media (max-width: 860px) {
          .nav-links {
            position: fixed; top: 62px; left: 0; right: 0; bottom: 0;
            background: var(--bg); flex-direction: column; justify-content: flex-start;
            padding: 40px 32px; gap: 18px !important; transform: translateX(100%);
            transition: transform .35s ease; border-top: 1px solid var(--line);
          }
          .nav-links.open { transform: translateX(0); }
          .burger { display: flex !important; }
        }
      `}</style>
    </motion.header>
  )
}

function NavLink({ href, active, onClick, children }) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: 14.5,
        color: active ? 'var(--ink)' : 'var(--ink-dim)',
        padding: '9px 14px',
        borderRadius: 100,
        background: active ? 'var(--indigo-wash)' : 'transparent',
        transition: 'all .2s ease',
        display: 'inline-block',
      }}
    >
      {children}
    </a>
  )
}
