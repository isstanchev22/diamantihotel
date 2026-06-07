import { useLanguage } from '../../context/LanguageContext'
import { testimonials } from '../../data/reviewsData'
import { ctas } from '../../data/siteData'
import { BookingCta } from '../ui/BookingCta'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { TestimonialCarousel } from '../ui/TestimonialCarousel'

export function ReviewsSection() {
  const { locale } = useLanguage()

  return (
    <SectionContainer id="reviews" background="sand">
      <RevealOnScroll>
        <SectionHeading
          eyebrow={{ bg: 'Отзиви от гости', en: 'Guest reviews' }}
          title={{
            bg: 'Гостите най-често помнят гледката, закуската и отношението.',
            en: 'Guests remember the view, the breakfast, and the way they were welcomed.',
          }}
        />
      </RevealOnScroll>

      <RevealOnScroll delayMs={70}>
        <figure className="premium-card-hover premium-shimmer mx-auto mt-8 max-w-4xl rounded-2xl border border-diamanti-sand/70 bg-white px-6 py-8 text-center shadow-soft md:px-10 md:py-10">
          <div className="premium-float mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-diamanti-navy font-display text-4xl leading-none text-diamanti-ivory">
            "
          </div>
          <blockquote className="font-display text-4xl leading-tight text-diamanti-navy md:text-6xl">
            {locale === 'bg' ? 'Тук живее щастието.' : 'Happiness lives here.'}
          </blockquote>
          <figcaption className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-diamanti-sea">
            {locale === 'bg' ? 'Любен Дилов - син' : 'Lyuben Dilov Jr.'}
          </figcaption>
        </figure>
      </RevealOnScroll>

      <RevealOnScroll delayMs={100}>
        <div className="mt-8">
          <TestimonialCarousel items={testimonials} />
        </div>
      </RevealOnScroll>

      <RevealOnScroll delayMs={180}>
        <div className="mt-8">
          <BookingCta placement="reviews_section">{ctas.book[locale]}</BookingCta>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  )
}
