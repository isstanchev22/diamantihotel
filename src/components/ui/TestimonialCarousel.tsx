import { useMemo, useState } from 'react'
import type { Testimonial } from '../../types/content'
import { useLanguage } from '../../context/LanguageContext'

interface TestimonialCarouselProps {
  items: Testimonial[]
}

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0)
  const { locale } = useLanguage()

  const current = useMemo(() => items[index], [index, items])

  function goPrevious() {
    setIndex((currentIndex) =>
      currentIndex === 0 ? items.length - 1 : currentIndex - 1,
    )
  }

  function goNext() {
    setIndex((currentIndex) =>
      currentIndex === items.length - 1 ? 0 : currentIndex + 1,
    )
  }

  return (
    <div className="rounded-3xl border border-diamanti-sand bg-white p-6 shadow-soft md:p-8">
      <p className="font-display text-2xl leading-relaxed text-diamanti-navy md:text-3xl">
        "{current.quote[locale]}"
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-diamanti-navy/80">
          <span className="font-medium text-diamanti-navy">{current.author}</span> ·{' '}
          {current.country} · {current.source}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrevious}
            aria-label={locale === 'bg' ? 'Предишен отзив' : 'Previous review'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-diamanti-navy text-diamanti-navy transition hover:bg-diamanti-sand/50"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label={locale === 'bg' ? 'Следващ отзив' : 'Next review'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-diamanti-navy text-diamanti-navy transition hover:bg-diamanti-sand/50"
          >
            ›
          </button>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        {items.map((item, dotIndex) => (
          <button
            key={`${item.author}-${dotIndex}`}
            type="button"
            onClick={() => setIndex(dotIndex)}
            aria-label={
              locale === 'bg'
                ? `Покажи отзив ${dotIndex + 1}`
                : `Show testimonial ${dotIndex + 1}`
            }
            className={`h-2.5 rounded-full transition ${
              index === dotIndex ? 'w-8 bg-diamanti-navy' : 'w-2.5 bg-diamanti-sand'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
