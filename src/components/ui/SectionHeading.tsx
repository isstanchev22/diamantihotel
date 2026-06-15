import type { LocalizedString } from '../../types/content'
import { useLanguage } from '../../context/LanguageContext'
import { classNames } from '../../lib/classNames'

interface SectionHeadingProps {
  eyebrow?: LocalizedString
  title: LocalizedString
  description?: LocalizedString
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
}: SectionHeadingProps) {
  const { locale } = useLanguage()
  const isCentered = align === 'center'
  const isLight = tone === 'light'

  return (
    <div
      className={classNames(
        'premium-fade-up',
        isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl',
      )}
    >
      {eyebrow ? (
        <div className={classNames('mb-4', isCentered && 'flex flex-col items-center')}>
          <p
            className={classNames(
              'text-xs font-semibold uppercase tracking-eyebrow',
              isLight ? 'text-diamanti-brass' : 'text-diamanti-coralDeep',
            )}
          >
            {eyebrow[locale]}
          </p>
          <span
            aria-hidden="true"
            className={classNames('horizon-rule mt-3', isCentered && 'is-centered')}
          />
        </div>
      ) : null}
      <h2
        className={classNames(
          'font-display text-[2.1rem] leading-[1.08] md:text-5xl',
          isLight ? 'text-diamanti-limestone' : 'text-diamanti-ink',
        )}
      >
        {title[locale]}
      </h2>
      {description ? (
        <p
          className={classNames(
            'mt-5 max-w-[65ch] text-base leading-relaxed md:text-lg',
            isLight ? 'text-diamanti-limestone/85' : 'text-diamanti-ink/75',
          )}
        >
          {description[locale]}
        </p>
      ) : null}
    </div>
  )
}
