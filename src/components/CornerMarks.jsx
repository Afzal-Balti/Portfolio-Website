import { motion } from 'framer-motion'

const corners = [
  { top: -7, left: -7, rotate: 0 },
  { top: -7, right: -7, rotate: 90 },
  { bottom: -7, right: -7, rotate: 180 },
  { bottom: -7, left: -7, rotate: 270 },
]

/**
 * Four L-shaped brackets that appear on the parent's hover state —
 * the "selected element" look from a design tool (Figma-style inspector).
 * Place inside a motion element using whileHover="hover" / initial="rest";
 * these children inherit that animation state automatically.
 */
export default function CornerMarks({ size = 16, color = 'var(--indigo)' }) {
  return (
    <>
      {corners.map((pos, i) => (
        <motion.svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 16 16"
          style={{
            position: 'absolute',
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
            transform: `rotate(${pos.rotate}deg)`,
            pointerEvents: 'none',
          }}
          variants={{ rest: { opacity: 0, scale: 0.7 }, hover: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <path d="M1 9 V1 H9" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        </motion.svg>
      ))}
    </>
  )
}
