import { useEffect, useState } from 'react'

/**
 * Watches a set of section ids and returns whichever is currently
 * most visible in the viewport, for highlighting the nav link.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.4 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids.join('|')])

  return active
}
