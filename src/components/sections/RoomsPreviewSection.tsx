import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { roomCategories } from '../../data/roomsData'
import { ctas } from '../../data/siteData'
import type { RoomCategory } from '../../types/content'
import { BookingCta } from '../ui/BookingCta'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { RoomCard } from '../ui/RoomCard'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'

const roomTabs: Array<{
  id: RoomCategory['category']
  label: { bg: string; en: string }
}> = [
  { id: 'rooms', label: { bg: 'Стаи', en: 'Rooms' } },
  { id: 'studios', label: { bg: 'Студиа', en: 'Studios' } },
  { id: 'suites', label: { bg: 'Суити', en: 'Suites' } },
]

export function RoomsPreviewSection() {
  const { locale } = useLanguage()
  const [activeCategory, setActiveCategory] =
    useState<RoomCategory['category']>('rooms')
  const visibleRooms = roomCategories.filter((room) => room.category === activeCategory)

  return (
    <SectionContainer id="rooms">
      <RevealOnScroll>
        <SectionHeading
          eyebrow={{
            bg: 'Стаи и студиа',
            en: 'Rooms and studios',
          }}
          title={{
            bg: 'Изберете стая според това как искате да виждате, чувате и усещате морето.',
            en: 'Choose your room by the view, the balcony, and how close you want the sea to feel.',
          }}
          description={{
            bg: 'Всяка категория е описана ясно, за да резервирате директно с увереност - изглед, капацитет, разположение и важни удобства.',
            en: 'Each category is described clearly so you can book direct with confidence: view, capacity, layout, and key comforts.',
          }}
        />
      </RevealOnScroll>

      <RevealOnScroll delayMs={90}>
        <div
          className="premium-scale-in mt-8 inline-flex flex-wrap gap-2 rounded-full border border-diamanti-sand bg-white/85 p-1 shadow-soft"
          role="tablist"
          aria-label={locale === 'bg' ? 'Категории стаи' : 'Room categories'}
        >
          {roomTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition duration-300 ${
                activeCategory === tab.id
                  ? 'bg-diamanti-navy text-diamanti-ivory shadow-soft'
                  : 'text-diamanti-navy hover:-translate-y-0.5 hover:bg-diamanti-sand/35'
              }`}
            >
              {tab.label[locale]}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      <div key={activeCategory} className="premium-fade-up mt-10 grid gap-5 md:grid-cols-2">
        {visibleRooms.map((room, index) => (
          <RevealOnScroll key={room.slug} delayMs={index * 60}>
            <RoomCard room={room} />
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delayMs={180}>
        <div className="mt-10 flex flex-wrap gap-3">
          <BookingCta placement="rooms_section_primary">{ctas.book[locale]}</BookingCta>
          <a
            href="#faq"
            className="inline-flex items-center justify-center rounded-full border border-diamanti-navy px-5 py-3 text-sm font-medium text-diamanti-navy transition duration-300 hover:-translate-y-1 hover:bg-diamanti-sand/40 hover:shadow-soft md:text-base"
          >
            {locale === 'bg' ? 'Въпроси преди резервация' : 'Questions before booking'}
          </a>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  )
}
