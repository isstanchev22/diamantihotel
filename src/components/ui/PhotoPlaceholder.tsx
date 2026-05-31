import { classNames } from '../../lib/classNames'
import type { LocalizedString } from '../../types/content'
import { useLanguage } from '../../context/LanguageContext'

interface PhotoPlaceholderProps {
  title: LocalizedString
  caption: LocalizedString
  className?: string
  aspect?: 'wide' | 'standard' | 'tall'
}

const aspectClasses: Record<NonNullable<PhotoPlaceholderProps['aspect']>, string> =
  {
    wide: 'aspect-[16/8]',
    standard: 'aspect-[4/3]',
    tall: 'aspect-[3/4]',
  }

export function PhotoPlaceholder({
  title,
  caption,
  className,
  aspect = 'standard',
}: PhotoPlaceholderProps) {
  const { locale } = useLanguage()

  return (
    <figure
      className={classNames(
        'relative overflow-hidden rounded-3xl border border-diamanti-sand/60 bg-gradient-to-br from-diamanti-sea/55 via-diamanti-navy/65 to-diamanti-terracotta/55 p-4 text-diamanti-ivory shadow-soft',
        aspectClasses[aspect],
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(246,242,235,0.25),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(220,199,166,0.22),transparent_55%)]" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <p className="text-[11px] uppercase tracking-[0.16em] text-diamanti-ivory/90">
          {title[locale]}
        </p>
        <figcaption className="max-w-sm text-sm leading-relaxed text-diamanti-ivory/95 md:text-base">
          {caption[locale]}
        </figcaption>
      </div>
    </figure>
  )
}
