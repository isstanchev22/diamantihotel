import { useLanguage } from '../../context/LanguageContext'
import { practicalInfo, ctas } from '../../data/siteData'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'

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

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {practicalInfo.map((item, index) => (
          <RevealOnScroll key={item.bg} delayMs={index * 80}>
            <article className="rounded-2xl border border-diamanti-sand/80 bg-white p-5">
              <p className="text-sm leading-relaxed text-diamanti-navy/85 md:text-base">
                {item[locale]}
              </p>
            </article>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delayMs={170}>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact-parking"
            className="inline-flex items-center justify-center rounded-full border border-diamanti-navy px-5 py-3 text-sm font-medium text-diamanti-navy transition duration-300 hover:-translate-y-0.5 hover:bg-diamanti-sand/40 md:text-base"
          >
            {ctas.seeArrival[locale]}
          </a>
          <a
            href="#contact-parking"
            className="inline-flex items-center justify-center rounded-full bg-diamanti-navy px-5 py-3 text-sm font-medium text-diamanti-ivory transition duration-300 hover:-translate-y-0.5 hover:bg-diamanti-navy/90 md:text-base"
          >
            {ctas.contactUs[locale]}
          </a>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  )
}
