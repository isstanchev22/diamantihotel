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
          ? 'border border-white/30 bg-diamanti-ink/35 backdrop-blur'
          : 'border border-diamanti-mist/60 bg-diamanti-shell',
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
            'cursor-pointer rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] transition',
            isDark
              ? locale === item
                ? 'bg-diamanti-limestone text-diamanti-ink'
                : 'text-white hover:bg-white/20'
              : locale === item
                ? 'bg-diamanti-sea text-diamanti-limestone'
                : 'text-diamanti-ink hover:bg-diamanti-mist/30',
          )}
          aria-pressed={locale === item}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
