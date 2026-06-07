import { useLanguage } from '../../context/LanguageContext'
import { guideCards } from '../../data/guideData'
import { oldTownHighlights } from '../../data/siteData'
import { sectionImages } from '../../data/imageData'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { SmartImage } from '../ui/SmartImage'

export function OldTownSection() {
  const { locale } = useLanguage()

  return (
    <SectionContainer id="sozopol-guide" background="sand">
      <RevealOnScroll>
        <SectionHeading
          eyebrow={{ bg: 'Гид за Созопол', en: 'Sozopol guide' }}
          title={{
            bg: 'Старият град започва още от прага на хотела.',
            en: 'Old Sozopol starts right at the hotel doorstep.',
          }}
          description={{
            bg: 'Това е локация за престой без автомобил - плаж, пристанище и исторически улици са в рамките на кратка разходка.',
            en: 'This is a stay-you-can-walk location: beach, harbour, and heritage streets are all nearby.',
          }}
        />
      </RevealOnScroll>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <RevealOnScroll>
          <div>
            <ul className="space-y-3">
              {oldTownHighlights.map((highlight) => (
                <li key={highlight.bg} className="flex gap-3 rounded-2xl bg-white/85 p-4">
                  <span className="mt-1 block h-2 w-2 rounded-full bg-diamanti-terracotta" />
                  <span className="text-sm text-diamanti-navy/85 md:text-base">
                    {highlight[locale]}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {guideCards.map((card) => (
                <article key={card.title.bg} className="rounded-2xl border border-diamanti-sand/70 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.13em] text-diamanti-sea">
                    {card.walkingTime[locale]}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight text-diamanti-navy">
                    {card.title[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-diamanti-navy/80">
                    {card.description[locale]}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <div className="grid gap-4">
            <SmartImage image={sectionImages.oldTownStreet} imgClassName="aspect-[4/3]" />
            <SmartImage image={sectionImages.oldTownWaterfront} imgClassName="aspect-[4/3]" />
          </div>
        </RevealOnScroll>
      </div>
    </SectionContainer>
  )
}
