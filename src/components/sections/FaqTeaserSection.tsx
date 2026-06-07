import { useLanguage } from '../../context/LanguageContext'
import { faqItems } from '../../data/faqData'
import { ctas } from '../../data/siteData'
import { BookingCta } from '../ui/BookingCta'
import { FaqAccordion } from '../ui/FaqAccordion'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'

export function FaqTeaserSection() {
  const { locale } = useLanguage()

  return (
    <SectionContainer id="faq" background="stone">
      <RevealOnScroll>
        <SectionHeading
          eyebrow={{ bg: 'FAQ', en: 'FAQ' }}
          title={{
            bg: 'Отговори преди резервация - за да изберете уверено.',
            en: 'Answers before booking so you can choose with confidence.',
          }}
        />
      </RevealOnScroll>

      <RevealOnScroll delayMs={100}>
        <div className="mt-8">
          <FaqAccordion items={faqItems} />
        </div>
      </RevealOnScroll>

      <RevealOnScroll delayMs={170}>
        <div className="mt-8">
          <BookingCta placement="faq_section">{ctas.book[locale]}</BookingCta>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  )
}
