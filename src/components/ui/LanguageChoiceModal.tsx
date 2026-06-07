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
        'fixed inset-0 z-[100] flex items-center justify-center bg-diamanti-navy/78 px-5 py-8 backdrop-blur-sm',
        isClosing ? 'language-modal-backdrop-out' : 'premium-fade-up',
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-choice-title"
      aria-describedby="language-choice-description"
    >
      <div
        className={classNames(
          'w-full max-w-lg overflow-hidden rounded-3xl border border-white/35 bg-diamanti-ivory shadow-2xl',
          isClosing ? 'language-modal-panel-out' : 'premium-scale-in',
        )}
      >
        <div className="premium-shimmer bg-diamanti-navy px-6 py-5 text-center text-diamanti-ivory">
          <img
            src={brandLogoUrl}
            alt="Hotel Diamanti"
            className="mx-auto h-20 w-auto object-contain"
          />
        </div>

        <div className="px-6 py-7 text-center md:px-8">
          <p className="premium-fade-up text-xs font-semibold uppercase tracking-[0.2em] text-diamanti-sea">
            Hotel Diamanti
          </p>
          <h2
            id="language-choice-title"
            className="premium-fade-up mt-3 font-display text-4xl leading-tight text-diamanti-navy md:text-5xl"
            style={{ animationDelay: '80ms' }}
          >
            Изберете език
            <span className="block text-3xl text-diamanti-navy/75 md:text-4xl">
              Choose your language
            </span>
          </h2>
          <p
            id="language-choice-description"
            className="premium-fade-up mx-auto mt-4 max-w-sm text-sm leading-relaxed text-diamanti-navy/75 md:text-base"
            style={{ animationDelay: '150ms' }}
          >
            За да ви покажем най-подходящата версия на сайта. So we can show you
            the right version of the website.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {languageOptions.map((option, index) => (
              <button
                key={option.locale}
                type="button"
                onClick={() => chooseLanguage(option.locale)}
                disabled={isClosing}
                className="premium-card-hover premium-fade-up rounded-2xl border border-diamanti-sand bg-white px-5 py-4 text-left hover:border-diamanti-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-diamanti-navy disabled:pointer-events-none"
                style={{ animationDelay: `${220 + index * 90}ms` }}
              >
                <span className="block text-lg font-semibold text-diamanti-navy">
                  {option.label}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-diamanti-navy/65">
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
