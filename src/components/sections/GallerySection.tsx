import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { roomImageMap, sectionImages } from '../../data/imageData'
import { classNames } from '../../lib/classNames'
import { Icon } from '../ui/Icon'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'
import type { SiteImage } from '../../types/content'

const galleryItems: SiteImage[] = [
  sectionImages.hero,
  sectionImages.breakfastTerrace,
  sectionImages.gallerySeaView,
  sectionImages.galleryExterior,
  sectionImages.galleryRoomDetail,
  roomImageMap.roomWithSideSeaView,
  roomImageMap.studioSeaView,
  roomImageMap.juniorSuiteSeaView,
  sectionImages.restaurantTerrace,
  sectionImages.weddingTerrace,
  sectionImages.waterfrontExterior,
]

export function GallerySection() {
  const { locale } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = galleryItems[activeIndex]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryItems.length)
    }, 4800)

    return () => window.clearInterval(intervalId)
  }, [])

  function showPrevious() {
    setActiveIndex((current) =>
      current === 0 ? galleryItems.length - 1 : current - 1,
    )
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % galleryItems.length)
  }

  return (
    <SectionContainer id="gallery" background="stone">
      <RevealOnScroll>
        <SectionHeading
          eyebrow={{ bg: 'Галерия', en: 'Gallery' }}
          title={{
            bg: 'Реални кадри от стаи, тераси и атмосферата на Стария Созопол.',
            en: 'Real images from rooms, terraces, and Old Sozopol atmosphere.',
          }}
        />
      </RevealOnScroll>

      <RevealOnScroll delayMs={100}>
        <div className="premium-scale-in mt-8 overflow-hidden rounded-3xl border border-diamanti-sea/30 bg-diamanti-ink shadow-soft">
          <div className="relative min-h-[390px] overflow-hidden md:min-h-[620px]">
            <img
              key={activeItem.src}
              src={activeItem.src}
              alt={activeItem.alt[locale]}
              className="gallery-hero-image absolute inset-0 h-full w-full object-cover"
              loading={activeIndex === 0 ? 'eager' : 'lazy'}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-diamanti-ink/80 via-diamanti-ink/12 to-transparent"
              aria-hidden="true"
            />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 md:p-7">
              <div className="rounded-full border border-white/25 bg-diamanti-ink/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-diamanti-limestone backdrop-blur">
                <span className="text-diamanti-brass">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>{' '}
                / {String(galleryItems.length).padStart(2, '0')}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label={locale === 'bg' ? 'Предишна снимка' : 'Previous image'}
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-diamanti-ink/40 text-diamanti-limestone backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-diamanti-brass hover:text-diamanti-ink"
                >
                  <Icon name="chevron-left" size={22} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label={locale === 'bg' ? 'Следваща снимка' : 'Next image'}
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-diamanti-ink/40 text-diamanti-limestone backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-diamanti-brass hover:text-diamanti-ink"
                >
                  <Icon name="chevron-right" size={22} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-diamanti-ink px-4 py-4 md:px-7">
            {galleryItems.map((item, index) => (
              <button
                key={`${item.src}-dot`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={
                  locale === 'bg'
                    ? `Покажи снимка ${index + 1}`
                    : `Show image ${index + 1}`
                }
                className={classNames(
                  'h-1.5 cursor-pointer rounded-full transition-all duration-500',
                  index === activeIndex ? 'w-12 bg-diamanti-brass' : 'w-4 bg-white/30',
                )}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  )
}
