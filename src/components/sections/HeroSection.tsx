import { useLanguage } from '../../context/LanguageContext'
import { ctas, heroContent } from '../../data/siteData'
import { sectionImages } from '../../data/imageData'
import { BookingCta } from '../ui/BookingCta'
import { Icon } from '../ui/Icon'

const trustStats = [
  { value: '9.3', bg: 'Booking', en: 'Booking' },
  { value: '9.9', bg: 'локация', en: 'location' },
  { value: '9.7', bg: 'персонал', en: 'staff' },
  { value: '4.3/5', bg: 'Tripadvisor', en: 'Tripadvisor' },
]

export function HeroSection() {
  const { locale } = useLanguage()

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] scroll-mt-24 items-center overflow-hidden md:scroll-mt-28"
    >
      <img
        src={sectionImages.hero.src}
        alt={sectionImages.hero.alt[locale]}
        className="hero-cinematic-image absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {/* Teal duotone grade keeps the reused waterfront photo on-brand. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-diamanti-ink/92 via-diamanti-ink/60 to-diamanti-sea/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-diamanti-ink/80 via-transparent to-diamanti-ink/30 mix-blend-multiply"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-28">
        <div className="max-w-3xl">
          <div className="premium-fade-up flex flex-col items-start">
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-diamanti-brass">
              {locale === 'bg'
                ? 'Хотел на самия бряг в Стария град'
                : 'Waterfront Old Town Hotel'}
            </p>
            <span aria-hidden="true" className="horizon-rule mt-3" />
          </div>

          <h1
            className="premium-fade-up mt-5 font-display text-[2.5rem] leading-[1.04] text-diamanti-limestone sm:text-5xl md:text-7xl md:leading-[1.02]"
            style={{ animationDelay: '90ms' }}
          >
            {heroContent.title[locale]}
          </h1>
          <p
            className="premium-fade-up mt-6 max-w-2xl text-base leading-relaxed text-diamanti-limestone/90 md:text-lg"
            style={{ animationDelay: '170ms' }}
          >
            {heroContent.subtitle[locale]}
          </p>

          <div
            className="premium-fade-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: '240ms' }}
          >
            <BookingCta placement="hero_primary">
              {heroContent.primaryCta[locale]}
              <Icon name="arrow-right" size={18} />
            </BookingCta>
            <a
              href="#rooms"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-diamanti-limestone/55 bg-diamanti-ink/20 px-6 py-3 text-sm font-semibold text-diamanti-limestone backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-diamanti-limestone hover:bg-diamanti-ink/40 md:text-base"
            >
              {heroContent.secondaryCta[locale]}
            </a>
          </div>

          <div
            className="premium-fade-up mt-9 max-w-xl rounded-2xl border border-diamanti-limestone/20 bg-diamanti-ink/65 p-5 backdrop-blur-md"
            style={{ animationDelay: '320ms' }}
          >
            <dl className="flex flex-wrap items-end gap-x-7 gap-y-3">
              {trustStats.map((stat) => (
                <div key={stat.en} className="flex items-baseline gap-1.5">
                  <dt className="sr-only">{locale === 'bg' ? stat.bg : stat.en}</dt>
                  <dd className="font-display text-2xl leading-none text-diamanti-brass md:text-3xl">
                    {stat.value}
                  </dd>
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-diamanti-limestone/85">
                    {locale === 'bg' ? stat.bg : stat.en}
                  </span>
                </div>
              ))}
            </dl>
            <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-diamanti-limestone/80">
              <Icon name="wave" size={16} className="mt-0.5 shrink-0 text-diamanti-mist" />
              {locale === 'bg'
                ? 'Реални оценки за гледка, закуска и отношение - детайлите, които гостите описват най-често.'
                : 'Verified ratings that repeatedly highlight the view, breakfast, and staff care.'}
            </p>
          </div>

          <div
            className="premium-fade-up mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm"
            style={{ animationDelay: '400ms' }}
          >
            <a
              href="#contact-parking"
              className="inline-flex items-center gap-1.5 text-diamanti-limestone/90 underline-offset-4 transition hover:text-diamanti-brass hover:underline"
            >
              <Icon name="map-pin" size={15} />
              {ctas.seeArrival[locale]}
            </a>
            <a
              href="#faq"
              className="inline-flex items-center gap-1.5 text-diamanti-limestone/90 underline-offset-4 transition hover:text-diamanti-brass hover:underline"
            >
              {locale === 'bg' ? 'Въпроси преди резервация' : 'Booking questions'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
