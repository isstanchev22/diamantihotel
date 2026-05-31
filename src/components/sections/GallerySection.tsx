import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { roomImageMap, sectionImages } from '../../data/imageData'
import { classNames } from '../../lib/classNames'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { SmartImage } from '../ui/SmartImage'
import type { SiteImage } from '../../types/content'

const galleryItems: SiteImage[] = [
  sectionImages.hero,
  sectionImages.breakfastTerrace,
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

  return (
    <SectionContainer id="gallery" background="ivory">
      <RevealOnScroll>
        <SectionHeading
          eyebrow={{ bg: 'Галерия', en: 'Gallery' }}
          title={{
            bg: 'Реални кадри от стаи, тераси и атмосферата на Стария Созопол.',
            en: 'Real images from rooms, terraces, and Old Sozopol atmosphere.',
          }}
          description={{
            bg: 'Използвани са официални изображения от Hotel Diamanti и Clock booking engine-а. При финален launch заменете или допълнете с последните сезонни кадри.',
            en: 'Images are sourced from official Hotel Diamanti and Clock booking engine media. Replace or expand with latest seasonal assets before launch.',
          }}
        />
      </RevealOnScroll>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
        <RevealOnScroll>
          <SmartImage
            image={activeItem}
            className="lg:min-h-[390px]"
            imgClassName="aspect-[16/10]"
          />
        </RevealOnScroll>

        <div className="grid gap-3 sm:grid-cols-2">
          {galleryItems.map((item, index) => (
            <RevealOnScroll key={`${item.src}-${index}`} delayMs={index * 50}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={classNames(
                  'w-full rounded-2xl border p-3 text-left transition',
                  index === activeIndex
                    ? 'border-diamanti-navy bg-diamanti-sand/30'
                    : 'border-diamanti-sand bg-white hover:bg-diamanti-sand/25',
                )}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.src}
                    alt={item.alt[locale]}
                    loading="lazy"
                    className="h-24 w-full object-cover transition duration-300 hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-2 text-xs text-diamanti-navy/75">{item.alt[locale]}</p>
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
