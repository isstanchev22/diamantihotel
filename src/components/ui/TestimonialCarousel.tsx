import { useEffect, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import type { Testimonial } from '../../types/content'
import { useLanguage } from '../../context/LanguageContext'
import { classNames } from '../../lib/classNames'

interface TestimonialCarouselProps {
  items: Testimonial[]
}

const AUTO_SCROLL_SPEED = 34

function normalizeOffset(value: number, loopWidth: number) {
  if (loopWidth <= 0) {
    return 0
  }

  return ((value % loopWidth) + loopWidth) % loopWidth
}

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const { locale } = useLanguage()
  const marqueeItems = [...items, ...items]
  const trackRef = useRef<HTMLDivElement | null>(null)
  const offsetRef = useRef(0)
  const loopWidthRef = useRef(0)
  const pausedRef = useRef(false)
  const hoverRef = useRef(false)
  const draggingRef = useRef(false)
  const pointerXRef = useRef(0)
  const frameRef = useRef<number | null>(null)
  const previousTimeRef = useRef<number | null>(null)
  const reducedMotionRef = useRef(false)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    function measureLoop() {
      const track = trackRef.current
      if (!track) {
        return
      }

      loopWidthRef.current = track.scrollWidth / 2
      offsetRef.current = normalizeOffset(offsetRef.current, loopWidthRef.current)
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
    }

    function animate(time: number) {
      const track = trackRef.current
      const loopWidth = loopWidthRef.current

      if (track && loopWidth > 0 && !pausedRef.current && !reducedMotionRef.current) {
        const previousTime = previousTimeRef.current ?? time
        const deltaSeconds = Math.min((time - previousTime) / 1000, 0.05)
        offsetRef.current = normalizeOffset(
          offsetRef.current + AUTO_SCROLL_SPEED * deltaSeconds,
          loopWidth,
        )
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
      }

      previousTimeRef.current = time
      frameRef.current = window.requestAnimationFrame(animate)
    }

    measureLoop()
    window.addEventListener('resize', measureLoop)
    frameRef.current = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', measureLoop)
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  function pauseAutoScroll() {
    pausedRef.current = true
    previousTimeRef.current = null
  }

  function resumeAutoScroll() {
    if (draggingRef.current || hoverRef.current) {
      return
    }

    pausedRef.current = false
    previousTimeRef.current = null
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    draggingRef.current = true
    pointerXRef.current = event.clientX
    pauseAutoScroll()
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) {
      return
    }

    const loopWidth = loopWidthRef.current
    const track = trackRef.current
    const delta = event.clientX - pointerXRef.current
    pointerXRef.current = event.clientX
    offsetRef.current = normalizeOffset(offsetRef.current - delta, loopWidth)

    if (track) {
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
    }
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    draggingRef.current = false
    setIsDragging(false)
    event.currentTarget.releasePointerCapture(event.pointerId)
    resumeAutoScroll()
  }

  function handleMouseEnter() {
    hoverRef.current = true
    pauseAutoScroll()
  }

  function handleMouseLeave() {
    hoverRef.current = false
    resumeAutoScroll()
  }

  return (
    <div
      className={classNames(
        'testimonial-marquee overflow-hidden',
        isDragging ? 'cursor-grabbing' : 'cursor-grab',
      )}
      aria-label={locale === 'bg' ? 'Отзиви от гости' : 'Guest reviews'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        ref={trackRef}
        className="flex w-max touch-pan-y select-none gap-4 py-2 will-change-transform md:gap-5"
      >
        {marqueeItems.map((item, index) => (
          <article
            key={`${item.author}-${item.date ?? index}-${index}`}
            className="premium-card-hover flex w-[82vw] max-w-[390px] shrink-0 flex-col rounded-2xl border border-diamanti-sand/70 bg-white p-5 shadow-soft md:w-[390px] md:p-6"
            aria-hidden={index >= items.length}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                {item.rating ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-diamanti-terracotta">
                    {item.rating}/10
                  </p>
                ) : null}
                {item.title ? (
                  <h3 className="mt-2 font-display text-2xl leading-tight text-diamanti-navy">
                    {item.title[locale]}
                  </h3>
                ) : null}
              </div>
              <span className="rounded-full border border-diamanti-sand bg-diamanti-ivory px-3 py-1 text-[11px] font-medium text-diamanti-navy/70">
                {item.source}
              </span>
            </div>

            <p className="mt-4 line-clamp-[8] text-sm leading-relaxed text-diamanti-navy/82 md:text-[15px]">
              "{item.quote[locale]}"
            </p>

            <div className="mt-5 border-t border-diamanti-sand/60 pt-4 text-xs leading-relaxed text-diamanti-navy/68">
              <p>
                <span className="font-semibold text-diamanti-navy">{item.author}</span>
                {' · '}
                {item.country}
              </p>
              <p>{item.date}</p>
              {item.room ? <p className="mt-1">{item.room[locale]}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
