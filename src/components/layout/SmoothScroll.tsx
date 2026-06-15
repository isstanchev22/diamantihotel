import { useEffect } from 'react'
import Lenis from 'lenis'
import { setLenis } from '../../lib/lenisStore'

/**
 * Momentum / inertia smooth scrolling for the "weighted" luxury feel.
 * Disabled entirely under prefers-reduced-motion, and left to native
 * momentum on touch devices (smoothTouch off) so mobile stays predictable.
 */
export function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) {
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    })
    setLenis(lenis)

    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return null
}
