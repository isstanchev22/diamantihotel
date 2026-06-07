import { useLanguage } from '../../context/LanguageContext'
import { whyChoosePoints, ctas } from '../../data/siteData'
import { BookingCta } from '../ui/BookingCta'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'

export function WhyChooseSection() {
  const { locale } = useLanguage()

  return (
    <SectionContainer background="stone">
      <RevealOnScroll>
        <SectionHeading
          eyebrow={{
            bg: 'Защо гостите избират Diamanti',
            en: 'Why guests choose Diamanti',
          }}
          title={{
            bg: 'Спокойният лукс тук е в гледката, детайлите и начина, по който ви посрещаме.',
            en: 'The quiet luxury here is in the view, the details, and the way you are welcomed.',
          }}
        />
      </RevealOnScroll>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {whyChoosePoints.map((point, index) => (
          <RevealOnScroll key={point.bg} delayMs={index * 70}>
            <article className="rounded-2xl border border-diamanti-sand/70 bg-white/85 p-5">
              <p className="text-sm leading-relaxed text-diamanti-navy/85 md:text-base">
                {point[locale]}
              </p>
            </article>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delayMs={160}>
        <div className="mt-9">
          <BookingCta placement="why_choose_section">{ctas.book[locale]}</BookingCta>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  )
}
