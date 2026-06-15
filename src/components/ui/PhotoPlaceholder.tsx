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
        'relative overflow-hidden rounded-3xl border border-diamanti-sea/40 bg-gradient-to-br from-diamanti-sea via-diamanti-ink to-diamanti-seaSoft p-4 text-diamanti-limestone shadow-soft',
        aspectClasses[aspect],
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(242,236,223,0.22),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(189,138,60,0.28),transparent_55%)]" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-diamanti-limestone/90">
          {title[locale]}
        </p>
        <figcaption className="max-w-sm text-sm leading-relaxed text-diamanti-limestone/95 md:text-base">
          {caption[locale]}
        </figcaption>
      </div>
    </figure>
  )
}
