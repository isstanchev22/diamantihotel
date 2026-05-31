import { useLanguage } from '../../context/LanguageContext'
import { ctas, heroContent } from '../../data/siteData'
import { sectionImages } from '../../data/imageData'
import { BookingCta } from '../ui/BookingCta'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionContainer } from '../ui/SectionContainer'

export function HeroSection() {
  const { locale } = useLanguage()

  return (
    <SectionContainer id="home" className="relative overflow-hidden pt-14 md:pt-16">
      <img
        src={sectionImages.hero.src}
        alt={sectionImages.hero.alt[locale]}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-diamanti-navy/60 backdrop-blur-[1px]" aria-hidden="true" />

      <div className="relative max-w-3xl">
        <RevealOnScroll>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/85">
              {locale === 'bg' ? 'Waterfront Old Town Stay' : 'Waterfront Old Town Stay'}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-white md:text-7xl">
              {heroContent.title[locale]}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white md:text-lg">
              {heroContent.subtitle[locale]}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookingCta placement="hero_primary">{heroContent.primaryCta[locale]}</BookingCta>
              <a
                href="#rooms"
                className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 md:text-base"
              >
                {heroContent.secondaryCta[locale]}
              </a>
            </div>
            <div className="mt-6 rounded-2xl border border-white/30 bg-white/15 p-4 backdrop-blur-sm">
              <p className="text-sm text-white md:text-base">
                <strong>9.3</strong> Booking · <strong>9.9</strong>{' '}
                {locale === 'bg' ? 'локация' : 'location'} · <strong>9.7</strong>{' '}
                {locale === 'bg' ? 'персонал' : 'staff'} · <strong>4.3/5</strong> Tripadvisor
              </p>
              <p className="mt-1 text-xs text-white/90">
                {locale === 'bg'
                  ? 'Реални оценки за гледка, закуска и отношение - точно това, което гостите описват най-често.'
                  : 'Verified ratings that repeatedly highlight the view, breakfast, and staff care.'}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href="#contact-parking"
                className="text-white/90 underline-offset-4 hover:text-white hover:underline"
              >
                {ctas.seeArrival[locale]}
              </a>
              <a
                href="#faq"
                className="text-white/90 underline-offset-4 hover:text-white hover:underline"
              >
                {locale === 'bg' ? 'Въпроси преди резервация' : 'Booking questions'}
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </SectionContainer>
  )
}
