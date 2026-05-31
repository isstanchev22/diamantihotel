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
    <SectionContainer id="reviews" background="ivory">
      <RevealOnScroll>
        <SectionHeading
          eyebrow={{ bg: 'Отзиви от гости', en: 'Guest reviews' }}
          title={{
            bg: 'Най-често повтаряните думи: гледка, закуска, отношение и локация.',
            en: 'The most repeated words: view, breakfast, care, and location.',
          }}
        />
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
