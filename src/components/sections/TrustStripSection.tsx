import { useLanguage } from '../../context/LanguageContext'
import { trustBadges, trustMetrics } from '../../data/siteData'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionContainer } from '../ui/SectionContainer'
import { TrustMetricCard } from '../ui/TrustMetricCard'

export function TrustStripSection() {
  const { locale } = useLanguage()

  return (
    <SectionContainer background="sand" className="py-12 md:py-14">
      <RevealOnScroll>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trustMetrics.map((metric) => (
            <TrustMetricCard key={`${metric.label.bg}-${metric.value}`} item={metric} />
          ))}
        </div>
      </RevealOnScroll>
      <RevealOnScroll delayMs={120}>
        <div className="mt-6 flex flex-wrap gap-3">
          {trustBadges.map((badge) => (
            <span
              key={badge.bg}
              className="rounded-full border border-diamanti-sea/35 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.11em] text-diamanti-sea"
            >
              {badge[locale]}
            </span>
          ))}
        </div>
      </RevealOnScroll>
    </SectionContainer>
  )
}
