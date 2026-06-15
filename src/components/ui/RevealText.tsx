import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

type AllowedTag = 'h1' | 'h2' | 'h3' | 'span' | 'p'

interface RevealTextProps {
  text: string
  className?: string
  as?: AllowedTag
  /** Seconds before the word stagger begins. */
  delay?: number
  /** When true, animate on first paint instead of on scroll into view. */
  immediate?: boolean
}

const wordVariants: Variants = {
  hidden: { y: '115%' },
  visible: { y: '0%' },
}

const tagMap = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  span: motion.span,
  p: motion.p,
} as const

/**
 * Word-by-word mask reveal. Each word rides up out of an overflow-clip box
 * with a staggered spring-eased entrance. Falls back to plain text when the
 * user prefers reduced motion (no split, no animation).
 */
export function RevealText({
  text,
  className,
  as = 'span',
  delay = 0,
  immediate = false,
}: RevealTextProps) {
  const reduced = useReducedMotion()
  const Tag = tagMap[as]

  if (reduced) {
    const Plain = as
    return <Plain className={className}>{text}</Plain>
  }

  const words = text.split(' ')

  return (
    <Tag
      key={text}
      className={className}
      initial="hidden"
      {...(immediate
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: { once: true, margin: '0px 0px -12% 0px' } })}
      transition={{ staggerChildren: 0.045, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            aria-hidden="true"
            className="inline-block overflow-hidden pb-[0.14em] align-bottom -mb-[0.14em]"
          >
            <motion.span
              className="inline-block"
              variants={wordVariants}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 ? <span aria-hidden="true">{' '}</span> : null}
        </Fragment>
      ))}
    </Tag>
  )
}
