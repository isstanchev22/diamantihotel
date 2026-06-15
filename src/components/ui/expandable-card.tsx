'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { getLenis } from '@/lib/lenisStore'

interface ExpandableCardProps {
  title: string
  src: string
  description: string
  /** Accessible alt text for the image (falls back to title). */
  imageAlt?: string
  /** Label for the collapsed card's open button. */
  openLabel?: string
  /** Label for the expanded card's close button. */
  closeLabel?: string
  children?: React.ReactNode
  className?: string
  classNameExpanded?: string
}

export function ExpandableCard({
  title,
  src,
  description,
  imageAlt,
  openLabel = 'Open card',
  closeLabel = 'Close card',
  children,
  className,
  classNameExpanded,
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false)
  const cardRef = React.useRef<HTMLDivElement>(null)
  const id = React.useId()

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActive(false)
      }
    }

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  // Lock background scroll (and pause Lenis) while the card is expanded.
  React.useEffect(() => {
    const lenis = getLenis()
    if (active) {
      const previous = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      lenis?.stop()
      return () => {
        document.body.style.overflow = previous
        lenis?.start()
      }
    }
  }, [active])

  const overlay = (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] h-full w-full bg-diamanti-ink/55 backdrop-blur-md"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[100] grid place-items-center before:pointer-events-none sm:mt-16">
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              role="dialog"
              aria-modal="true"
              aria-label={title}
              data-lenis-prevent
              className={cn(
                'relative flex h-full w-full max-w-[850px] flex-col overflow-auto bg-diamanti-shell shadow-lift [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:rounded-t-3xl',
                classNameExpanded,
              )}
            >
              <motion.div layoutId={`image-${title}-${id}`}>
                <div className="relative before:absolute before:inset-x-0 before:bottom-[-1px] before:z-50 before:h-[70px] before:bg-gradient-to-t before:from-diamanti-shell">
                  <img
                    src={src}
                    alt={imageAlt ?? title}
                    decoding="async"
                    className="h-80 w-full object-cover object-center"
                  />
                </div>
              </motion.div>
              <div className="relative h-full before:fixed before:inset-x-0 before:bottom-0 before:z-50 before:h-[70px] before:bg-gradient-to-t before:from-diamanti-shell">
                <div className="flex h-auto items-start justify-between p-8">
                  <div>
                    <motion.p
                      layoutId={`description-${description}-${id}`}
                      className="text-sm font-semibold uppercase tracking-eyebrow text-diamanti-coralDeep"
                    >
                      {description}
                    </motion.p>
                    <motion.h3
                      layoutId={`title-${title}-${id}`}
                      className="mt-2 font-display text-4xl text-diamanti-ink"
                    >
                      {title}
                    </motion.h3>
                  </div>
                  <motion.button
                    type="button"
                    aria-label={closeLabel}
                    layoutId={`button-${title}-${id}`}
                    className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-diamanti-mist/70 bg-diamanti-limestone text-diamanti-ink transition-colors duration-300 hover:border-diamanti-sea hover:bg-diamanti-sea hover:text-diamanti-limestone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-diamanti-sea"
                    onClick={() => setActive(false)}
                  >
                    <motion.div animate={{ rotate: active ? 45 : 0 }} transition={{ duration: 0.4 }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </div>
                <div className="relative px-6 pb-12 sm:px-8">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-start gap-4 overflow-auto text-base text-diamanti-ink/80"
                  >
                    {children}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )

  return (
    <>
      {typeof document !== 'undefined' ? createPortal(overlay, document.body) : null}

      <motion.div
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className={cn(
          'group flex cursor-pointer flex-col justify-between rounded-3xl border border-diamanti-mist/50 bg-diamanti-shell p-3 shadow-soft transition-colors duration-300 hover:border-diamanti-sea/40',
          className,
        )}
      >
        <div className="flex w-full flex-col gap-4">
          <motion.div layoutId={`image-${title}-${id}`} className="overflow-hidden rounded-2xl">
            <img
              src={src}
              alt={imageAlt ?? title}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full rounded-2xl object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </motion.div>
          <div className="flex items-end justify-between gap-3 px-2 pb-1">
            <div className="flex flex-col">
              <motion.p
                layoutId={`description-${description}-${id}`}
                className="text-xs font-semibold uppercase tracking-eyebrow text-diamanti-coralDeep"
              >
                {description}
              </motion.p>
              <motion.h3
                layoutId={`title-${title}-${id}`}
                className="mt-1.5 font-display text-2xl leading-tight text-diamanti-ink"
              >
                {title}
              </motion.h3>
            </div>
            <motion.button
              type="button"
              aria-label={openLabel}
              layoutId={`button-${title}-${id}`}
              className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-diamanti-mist/70 bg-diamanti-limestone text-diamanti-ink transition-colors duration-300 hover:border-diamanti-sea hover:bg-diamanti-sea hover:text-diamanti-limestone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-diamanti-sea"
            >
              <motion.div animate={{ rotate: active ? 45 : 0 }} transition={{ duration: 0.4 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  )
}
