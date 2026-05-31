import { useLanguage } from '../../context/LanguageContext'
import { classNames } from '../../lib/classNames'

interface LanguageSwitcherProps {
  theme?: 'light' | 'dark'
}

export function LanguageSwitcher({ theme = 'light' }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage()
  const isDark = theme === 'dark'

  return (
    <div
      className={classNames(
        'inline-flex items-center rounded-full p-1 transition-colors duration-300',
        isDark
          ? 'border border-white/35 bg-diamanti-navy/35 backdrop-blur'
          : 'border border-diamanti-sand bg-white/90',
      )}
      role="group"
      aria-label="Language switcher"
    >
      {(['bg', 'en'] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={classNames(
            'rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] transition',
            isDark
              ? locale === item
                ? 'bg-white text-diamanti-navy'
                : 'text-white hover:bg-white/20'
              : locale === item
                ? 'bg-diamanti-navy text-diamanti-ivory'
                : 'text-diamanti-navy hover:bg-diamanti-sand/45',
          )}
          aria-pressed={locale === item}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
