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
        <figure className="premium-card-hover mx-auto mt-8 max-w-4xl rounded-3xl border border-diamanti-mist/45 bg-diamanti-shell px-6 py-10 text-center shadow-soft md:px-12 md:py-12">
          <div
            aria-hidden="true"
            className="premium-float mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-diamanti-sea font-display text-4xl leading-none text-diamanti-limestone"
          >
            “
          </div>
          <blockquote className="font-display text-4xl leading-[1.05] text-diamanti-ink md:text-6xl">
            {locale === 'bg' ? 'Тук живее щастието.' : 'Happiness lives here.'}
          </blockquote>
          <span aria-hidden="true" className="horizon-rule is-centered mt-5" />
          <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-diamanti-coralDeep">
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
