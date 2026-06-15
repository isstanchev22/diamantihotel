import { useLanguage } from '../../context/LanguageContext'
import { practicalInfo, ctas } from '../../data/siteData'
import { Icon } from '../ui/Icon'
import type { IconName } from '../ui/Icon'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'

const arrivalIcons: IconName[] = ['compass', 'map-pin', 'phone']

export function ArrivalSection() {
  const { locale } = useLanguage()

  return (
    <SectionContainer id="arrival-info" background="ivory">
      <RevealOnScroll>
        <SectionHeading
          eyebrow={{
            bg: 'Преди пристигане',
            en: 'Before arrival',
          }}
          title={{
            bg: 'Практична яснота за достъп и паркиране в Стария град.',
            en: 'Practical clarity for access and parking in Old Town.',
          }}
          description={{
            bg: 'Тази секция е тук, за да премахне най-честото колебание преди резервация: къде се спира, как се влиза и как се действа при късно пристигане.',
            en: 'This section removes the biggest pre-booking uncertainty: where to stop, how to access, and what to do for late arrivals.',
          }}
        />
      </RevealOnScroll>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {practicalInfo.map((item, index) => (
          <RevealOnScroll key={item.bg} delayMs={index * 80}>
            <article className="premium-card-hover flex h-full flex-col gap-4 rounded-2xl border border-diamanti-mist/45 bg-diamanti-shell p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-diamanti-sea/10 text-diamanti-sea">
                <Icon name={arrivalIcons[index % arrivalIcons.length]} size={22} />
              </span>
              <p className="text-sm leading-relaxed text-diamanti-ink/85 md:text-base">
                {item[locale]}
              </p>
            </article>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delayMs={170}>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#contact-parking"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-diamanti-sea/70 px-6 py-3 text-sm font-semibold text-diamanti-sea transition duration-300 hover:-translate-y-0.5 hover:bg-diamanti-sea hover:text-diamanti-limestone md:text-base"
          >
            <Icon name="map-pin" size={17} />
            {ctas.seeArrival[locale]}
          </a>
          <a
            href="#contact-parking"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-diamanti-brass px-6 py-3 text-sm font-semibold text-diamanti-ink transition duration-300 hover:-translate-y-0.5 hover:bg-diamanti-brassDeep hover:shadow-brass md:text-base"
          >
            {ctas.contactUs[locale]}
            <Icon name="arrow-right" size={17} />
          </a>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  )
}
