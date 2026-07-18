import { useEffect, useRef, useState } from 'react'

/**
 * Cycles through a list of words with a type/delete effect,
 * similar to a terminal autocomplete. Respects prefers-reduced-motion.
 */
export function useTypedText(words, { typingSpeed = 85, deletingSpeed = 45, pause = 1400 } = {}) {
  const [text, setText] = useState(words[0] ?? '')
  const timeoutRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || words.length === 0) {
      setText(words[0] ?? '')
      return
    }

    let wordIndex = 0
    let charIndex = words[0].length
    let deleting = false

    function tick() {
      const current = words[wordIndex]

      if (!deleting) {
        charIndex++
        if (charIndex > current.length) {
          deleting = true
          timeoutRef.current = setTimeout(tick, pause)
          return
        }
      } else {
        charIndex--
        if (charIndex < 0) {
          deleting = false
          wordIndex = (wordIndex + 1) % words.length
          charIndex = 0
        }
      }

      setText(current.slice(0, Math.max(charIndex, 0)))
      timeoutRef.current = setTimeout(tick, deleting ? deletingSpeed : typingSpeed)
    }

    timeoutRef.current = setTimeout(tick, 1200)
    return () => clearTimeout(timeoutRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words.join('|')])

  return text
}
