import { useEffect, useState } from 'react'
import { brandLogoUrl } from '../../data/siteData'
import type { Locale } from '../../types/content'
import { useLanguage } from '../../context/LanguageContext'
import { classNames } from '../../lib/classNames'

const languageOptions: Array<{
  locale: Locale
  label: string
  helper: string
}> = [
  { locale: 'bg', label: 'Български', helper: 'Сайтът ще се отвори на български.' },
  { locale: 'en', label: 'English', helper: 'Continue with the English website.' },
]

export function LanguageChoiceModal() {
  const { setLocale } = useLanguage()
  const [isMounted, setIsMounted] = useState(true)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (!isMounted) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMounted])

  function chooseLanguage(nextLocale: Locale) {
    if (isClosing) {
      return
    }

    setLocale(nextLocale)
    setIsClosing(true)
    window.setTimeout(() => setIsMounted(false), 420)
  }

  if (!isMounted) {
    return null
  }

  return (
    <div
      className={classNames(
        'fixed inset-0 z-[100] flex items-center justify-center bg-diamanti-ink/80 px-5 py-8 backdrop-blur-sm',
        isClosing ? 'language-modal-backdrop-out' : 'premium-fade-up',
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-choice-title"
      aria-describedby="language-choice-description"
    >
      <div
        className={classNames(
          'w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-diamanti-limestone shadow-lift',
          isClosing ? 'language-modal-panel-out' : 'premium-scale-in',
        )}
      >
        <div className="premium-shimmer bg-diamanti-sea px-6 py-6 text-center text-diamanti-limestone">
          <img
            src={brandLogoUrl}
            alt="Hotel Diamanti"
            width={160}
            height={80}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="mx-auto h-20 w-auto object-contain"
          />
        </div>

        <div className="px-6 py-8 text-center md:px-8">
          <div className="premium-fade-up flex flex-col items-center">
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-diamanti-coralDeep">
              Hotel Diamanti
            </p>
            <span aria-hidden="true" className="horizon-rule is-centered mt-3" />
          </div>
          <h2
            id="language-choice-title"
            className="premium-fade-up mt-4 font-display text-4xl leading-tight text-diamanti-ink md:text-5xl"
            style={{ animationDelay: '80ms' }}
          >
            Изберете език
            <span className="block text-3xl text-diamanti-ink/70 md:text-4xl">
              Choose your language
            </span>
          </h2>
          <p
            id="language-choice-description"
            className="premium-fade-up mx-auto mt-4 max-w-sm text-sm leading-relaxed text-diamanti-ink/70 md:text-base"
            style={{ animationDelay: '150ms' }}
          >
            За да ви покажем най-подходящата версия на сайта. So we can show you
            the right version of the website.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {languageOptions.map((option, index) => (
              <button
                key={option.locale}
                type="button"
                onClick={() => chooseLanguage(option.locale)}
                disabled={isClosing}
                className="premium-card-hover premium-fade-up cursor-pointer rounded-2xl border border-diamanti-mist/55 bg-diamanti-shell px-5 py-4 text-left transition-colors hover:border-diamanti-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-diamanti-sea disabled:pointer-events-none"
                style={{ animationDelay: `${220 + index * 90}ms` }}
              >
                <span className="block text-lg font-semibold text-diamanti-ink">
                  {option.label}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-diamanti-ink/65">
                  {option.helper}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
