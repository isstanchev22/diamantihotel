import { useMemo, useState } from 'react'
import type { MouseEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { navigationLinks, ctas, brandLogoUrl } from '../../data/siteData'
import { useLanguage } from '../../context/LanguageContext'
import { classNames } from '../../lib/classNames'
import { useActiveSection } from '../../lib/useActiveSection'
import { scrollToSection } from '../../lib/scrollToSection'
import { BookingCta } from '../ui/BookingCta'
import { Icon } from '../ui/Icon'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale } = useLanguage()
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const headerBookingLabel = locale === 'bg' ? 'Провери наличност' : ctas.book[locale]

  const sectionIds = useMemo(
    () => navigationLinks.map((item) => item.to.replace('#', '')),
    [],
  )

  const activeSection = useActiveSection(sectionIds, isHomePage)
  const isDarkTheme = isHomePage && activeSection === 'home'
  const headerTheme = isDarkTheme ? 'dark' : 'light'

  const resolveHref = (hash: string) => (isHomePage ? hash : `/${hash}`)

  function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>, hash: string) {
    setIsOpen(false)

    if (!isHomePage) {
      return
    }

    event.preventDefault()
    scrollToSection(hash)
  }

  return (
    <header
      id="site-header"
      className={classNames(
        'sticky top-0 z-50 backdrop-blur transition-colors duration-300',
        isDarkTheme
          ? 'border-b border-white/15 bg-diamanti-ink/55'
          : 'border-b border-diamanti-mist/40 bg-diamanti-limestone/95',
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a
          href={resolveHref('#home')}
          onClick={(event) => handleAnchorClick(event, '#home')}
          className="group"
          aria-label="Hotel Diamanti home"
        >
          <img
            src={brandLogoUrl}
            alt="Hotel Diamanti"
            className="h-11 w-auto object-contain transition duration-300 group-hover:scale-[1.03]"
          />
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navigationLinks.map((item) => {
            const currentId = item.to.replace('#', '')
            const isActive = isHomePage
              ? currentId === activeSection
              : location.hash === item.to

            return (
              <a
                key={item.to}
                href={resolveHref(item.to)}
                onClick={(event) => handleAnchorClick(event, item.to)}
                className={classNames(
                  'relative py-1 text-sm transition',
                  isDarkTheme
                    ? isActive
                      ? 'font-semibold text-white'
                      : 'text-white/75 hover:text-white'
                    : isActive
                      ? 'font-semibold text-diamanti-ink'
                      : 'text-diamanti-ink/70 hover:text-diamanti-ink',
                )}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label[locale]}
                <span
                  aria-hidden="true"
                  className={classNames(
                    'absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-diamanti-brass transition-all duration-300',
                    isActive ? 'w-full' : 'w-0',
                  )}
                />
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher theme={headerTheme} />
          <BookingCta placement="header">{headerBookingLabel}</BookingCta>
        </div>

        <button
          type="button"
          className={classNames(
            'inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-colors lg:hidden',
            isDarkTheme
              ? 'border border-white/40 text-white hover:bg-white/10'
              : 'border border-diamanti-mist/70 text-diamanti-ink hover:bg-diamanti-mist/25',
          )}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={locale === 'bg' ? 'Отвори меню' : 'Open menu'}
        >
          <Icon name={isOpen ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={classNames(
          'overflow-hidden px-5 transition-all duration-300 lg:hidden',
          isDarkTheme
            ? 'border-t border-white/15 bg-diamanti-ink/95'
            : 'border-t border-diamanti-mist/40 bg-diamanti-limestone',
          isOpen ? 'max-h-[80vh] py-4' : 'max-h-0 py-0',
        )}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {navigationLinks.map((item) => (
            <a
              key={item.to}
              href={resolveHref(item.to)}
              className={classNames(
                'rounded-xl px-3 py-2.5 transition-colors',
                isDarkTheme
                  ? 'text-white hover:bg-white/10'
                  : 'text-diamanti-ink hover:bg-diamanti-mist/25',
              )}
              onClick={(event) => handleAnchorClick(event, item.to)}
            >
              {item.label[locale]}
            </a>
          ))}
        </nav>
        <div className="mt-5 space-y-3 pb-2">
          <LanguageSwitcher theme={headerTheme} />
          <BookingCta placement="mobile_menu" fullWidth>
            {headerBookingLabel}
          </BookingCta>
        </div>
      </div>
    </header>
  )
}
