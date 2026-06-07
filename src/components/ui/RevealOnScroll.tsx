import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { classNames } from '../../lib/classNames'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function RevealOnScroll({
  children,
  className,
  delayMs = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches,
  )

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) {
      return
    }

    const element = ref.current
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={classNames(
        'transform-gpu transition-all duration-700 ease-out',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
