import { motion } from 'framer-motion'

/**
 * Fades + slides content into view once it enters the viewport.
 * Wrap any block with <Reveal> instead of hand-rolling IntersectionObservers.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  as = 'div',
  className,
  style,
  once = true,
  ...rest
}) {
  const Component = motion[as] ?? motion.div

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  )
}
