import type { LocalizedString } from '../../types/content'
import { useLanguage } from '../../context/LanguageContext'

interface SectionHeadingProps {
  eyebrow?: LocalizedString
  title: LocalizedString
  description?: LocalizedString
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const { locale } = useLanguage()
  const isCentered = align === 'center'

  return (
    <div className={isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-diamanti-sea">
          {eyebrow[locale]}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-tight text-diamanti-navy md:text-5xl">
        {title[locale]}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-diamanti-navy/80 md:text-lg">
          {description[locale]}
        </p>
      ) : null}
    </div>
  )
}
