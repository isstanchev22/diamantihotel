import { useLanguage } from '../../context/LanguageContext'
import { roomCategories } from '../../data/roomsData'
import { ctas } from '../../data/siteData'
import { BookingCta } from '../ui/BookingCta'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { RoomCard } from '../ui/RoomCard'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'

export function RoomsPreviewSection() {
  const { locale } = useLanguage()

  return (
    <SectionContainer id="rooms">
      <RevealOnScroll>
        <SectionHeading
          eyebrow={{
            bg: 'Стаи и студиа',
            en: 'Rooms and studios',
          }}
          title={{
            bg: 'Изберете категория по реален изглед, конфигурация и капацитет.',
            en: 'Choose your room by real view type, setup, and occupancy.',
          }}
          description={{
            bg: 'Данните са синхронизирани с активните категории в Clock booking engine-а. Където детайл липсва публично, е отбелязано като TODO за потвърждение.',
            en: 'Data is aligned with active categories in the Clock booking engine. Missing public details are marked as TODO for confirmation.',
          }}
        />
      </RevealOnScroll>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {roomCategories.map((room, index) => (
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
            className="inline-flex items-center justify-center rounded-full border border-diamanti-navy px-5 py-3 text-sm font-medium text-diamanti-navy transition duration-300 hover:-translate-y-0.5 hover:bg-diamanti-sand/40 md:text-base"
          >
            {locale === 'bg' ? 'Въпроси за избор на стая' : 'Room choice FAQ'}
          </a>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  )
}
