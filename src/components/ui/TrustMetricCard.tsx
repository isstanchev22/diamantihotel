import type { TrustMetric } from '../../types/content'
import { useLanguage } from '../../context/LanguageContext'

export function TrustMetricCard({ item }: { item: TrustMetric }) {
  const { locale } = useLanguage()

  return (
    <article className="premium-card-hover rounded-2xl border border-diamanti-mist/45 bg-diamanti-shell p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-eyebrow text-diamanti-sea">
        {item.label[locale]}
      </p>
      <p className="mt-3 font-display text-4xl leading-none text-diamanti-ink md:text-5xl">
        {item.value}
      </p>
      <p className="mt-3 text-sm text-diamanti-ink/70">{item.supportingText[locale]}</p>
    </article>
  )
}
