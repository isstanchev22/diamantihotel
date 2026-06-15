import { useEffect, useRef } from 'react'

/**
 * Subtle "magnetic" pull toward the cursor for primary CTAs.
 * Only active on fine-pointer (hover-capable) devices and never when the
 * user prefers reduced motion. The element's CSS transition smooths the move.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.28) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      return
    }

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduced) {
      return
    }

    let frame = 0

    function handleMove(event: MouseEvent) {
      if (!el) {
        return
      }
      const rect = el.getBoundingClientRect()
      const relX = event.clientX - (rect.left + rect.width / 2)
      const relY = event.clientY - (rect.top + rect.height / 2)
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`
      })
    }

    function reset() {
      cancelAnimationFrame(frame)
      if (el) {
        el.style.transform = ''
      }
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', reset)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', reset)
      cancelAnimationFrame(frame)
    }
  }, [strength])

  return ref
}
