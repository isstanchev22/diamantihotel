import { useLanguage } from '../../context/LanguageContext'
import { whyChoosePoints, ctas } from '../../data/siteData'
import { BookingCta } from '../ui/BookingCta'
import { Icon } from '../ui/Icon'
import type { IconName } from '../ui/Icon'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'

const pointIcons: IconName[] = ['wave', 'sun', 'compass', 'map-pin']

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

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {whyChoosePoints.map((point, index) => (
          <RevealOnScroll key={point.bg} delayMs={index * 70}>
            <article className="premium-card-hover flex h-full gap-4 rounded-2xl border border-diamanti-mist/45 bg-diamanti-shell p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-diamanti-sea/10 text-diamanti-sea">
                <Icon name={pointIcons[index % pointIcons.length]} size={22} />
              </span>
              <p className="self-center text-sm leading-relaxed text-diamanti-ink/85 md:text-base">
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
