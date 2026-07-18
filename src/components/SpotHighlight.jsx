import { useEffect, useRef } from 'react'

/**
 * A very soft indigo wash that trails the pointer — much subtler than a
 * dark-mode glow since it's sitting on a light background. Disables itself
 * on touch devices and for prefers-reduced-motion.
 */
export default function SpotHighlight() {
  const ref = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || reduceMotion) return

    let frame = null
    const handleMove = (e) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.setProperty('--x', `${e.clientX}px`)
          ref.current.style.setProperty('--y', `${e.clientY}px`)
        }
        frame = null
      })
    }

    window.addEventListener('pointermove', handleMove)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        background:
          'radial-gradient(420px circle at var(--x, 50%) var(--y, 20%), rgba(67,56,202,0.045), transparent 70%)',
      }}
    />
  )
}
