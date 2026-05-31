import type { TrustMetric } from '../../types/content'
import { useLanguage } from '../../context/LanguageContext'

export function TrustMetricCard({ item }: { item: TrustMetric }) {
  const { locale } = useLanguage()

  return (
    <article className="rounded-2xl border border-diamanti-sand bg-white/80 p-5 shadow-soft">
      <p className="text-xs uppercase tracking-[0.15em] text-diamanti-sea">
        {item.label[locale]}
      </p>
      <p className="mt-2 font-display text-4xl leading-none text-diamanti-navy">
        {item.value}
      </p>
      <p className="mt-2 text-sm text-diamanti-navy/75">{item.supportingText[locale]}</p>
    </article>
  )
}
