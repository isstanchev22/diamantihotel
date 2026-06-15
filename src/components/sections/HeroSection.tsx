import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { ctas, heroContent } from '../../data/siteData'
import { sectionImages } from '../../data/imageData'
import { BookingCta } from '../ui/BookingCta'
import { Icon } from '../ui/Icon'
import { RevealText } from '../ui/RevealText'

const trustStats = [
  { value: '9.3', bg: 'Booking', en: 'Booking' },
  { value: '9.9', bg: 'локация', en: 'location' },
  { value: '9.7', bg: 'персонал', en: 'staff' },
  { value: '4.3/5', bg: 'Tripadvisor', en: 'Tripadvisor' },
]

const ease = [0.22, 1, 0.36, 1] as const

function rise(delay: number) {
  return {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, ease, delay },
  }
}

export function HeroSection() {
  const { locale } = useLanguage()
  const reduced = useReducedMotion()
  const heroRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const rawImageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section
      id="home"
      ref={heroRef}
      style={{ marginTop: 'calc(var(--header-h) * -1)' }}
      className="relative flex min-h-[92vh] scroll-mt-24 items-center overflow-hidden md:scroll-mt-28"
    >
      <motion.img
        src={sectionImages.hero.src}
        alt={sectionImages.hero.alt[locale]}
        initial={{ opacity: 0, scale: 1.07 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease }}
        style={{ y: reduced ? 0 : rawImageY }}
        className="absolute inset-x-0 -top-[15%] h-[130%] w-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      {/* Legibility scrim: darker through the left where the copy sits,
          plus a top/bottom vertical wash so the header and lower text stay AA. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-diamanti-ink/95 via-diamanti-ink/72 to-diamanti-ink/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-diamanti-ink/85 via-diamanti-ink/15 to-diamanti-ink/55"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="max-w-3xl">
          <motion.div className="flex flex-col items-start" {...rise(0)}>
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-diamanti-brass">
              {locale === 'bg'
                ? 'Хотел на самия бряг в Стария град'
                : 'Waterfront Old Town Hotel'}
            </p>
            <span aria-hidden="true" className="horizon-rule mt-3" />
          </motion.div>

          <RevealText
            as="h1"
            immediate
            delay={0.18}
            text={heroContent.title[locale]}
            className="mt-5 font-display text-[2.5rem] leading-[1.04] text-diamanti-limestone sm:text-5xl md:text-7xl md:leading-[1.02]"
          />

          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-diamanti-limestone/90 md:text-lg"
            {...rise(0.5)}
          >
            {heroContent.subtitle[locale]}
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap gap-3" {...rise(0.62)}>
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
          </motion.div>

          <motion.div
            className="mt-9 max-w-xl rounded-2xl border border-diamanti-limestone/20 bg-diamanti-ink/65 p-5 backdrop-blur-md"
            {...rise(0.74)}
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
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm"
            {...rise(0.86)}
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
