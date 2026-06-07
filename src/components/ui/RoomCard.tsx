import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import type { RoomCategory } from '../../types/content'
import { BookingCta } from './BookingCta'
import { SmartImage } from './SmartImage'

export function RoomCard({ room }: { room: RoomCategory }) {
  const { locale } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  const floorInfo = room.floorInfo[locale].trim()

  return (
    <article className="premium-card-hover group flex h-full flex-col overflow-hidden rounded-3xl border border-diamanti-sand/80 bg-white shadow-soft">
      <SmartImage
        image={room.mainImage}
        className="rounded-none border-0 border-b border-diamanti-sand/60"
        imgClassName="aspect-[16/10] transition duration-700 group-hover:scale-[1.045]"
      />

      <div className="flex flex-1 flex-col p-6">
        <p className="transition duration-300 text-xs uppercase tracking-[0.16em] text-diamanti-sea group-hover:text-diamanti-terracotta">
          {room.viewType[locale]}
        </p>
        <h3 className="mt-3 font-display text-3xl leading-tight text-diamanti-navy">
          {room.name[locale]}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-diamanti-navy/82 md:text-base">
          {room.shortDescription[locale]}
        </p>

        <dl className="mt-5 grid gap-3 rounded-2xl bg-diamanti-sand/15 p-4 text-sm transition duration-300 group-hover:bg-diamanti-sand/25">
          <div>
            <dt className="text-diamanti-sea">{locale === 'bg' ? 'Площ' : 'Size'}</dt>
            <dd className="font-medium text-diamanti-navy">{room.size}</dd>
          </div>
          <div>
            <dt className="text-diamanti-sea">
              {locale === 'bg' ? 'Капацитет' : 'Occupancy'}
            </dt>
            <dd className="font-medium text-diamanti-navy">{room.occupancy[locale]}</dd>
          </div>
        </dl>

        <ul className="mt-5 space-y-2 text-sm text-diamanti-navy/82 md:text-base">
          {room.highlights.slice(0, 2).map((highlight) => (
            <li key={highlight.bg} className="flex gap-2">
              <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-diamanti-terracotta" />
              <span>{highlight[locale]}</span>
            </li>
          ))}
        </ul>

        <div
          className={`grid transition-all duration-300 ${
            expanded ? 'mt-5 grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="premium-scale-in space-y-4 rounded-2xl border border-diamanti-sand/60 bg-diamanti-ivory/70 p-4 text-sm md:text-base">
              <p className="leading-relaxed text-diamanti-navy/85">
                {room.detailedDescription[locale]}
              </p>
              <p className="leading-relaxed text-diamanti-navy/85">
                <strong>{locale === 'bg' ? 'Най-подходяща за:' : 'Best for:'}</strong>{' '}
                {room.bestFor[locale]}
              </p>
              {floorInfo ? (
                <p className="leading-relaxed text-diamanti-navy/85">
                  <strong>{locale === 'bg' ? 'Етаж / позиция:' : 'Floor / position:'}</strong>{' '}
                  {floorInfo}
                </p>
              ) : null}
              <div>
                <p className="font-medium text-diamanti-navy">
                  {locale === 'bg' ? 'Ключови удобства' : 'Key amenities'}
                </p>
                <ul className="mt-2 grid gap-2 text-diamanti-navy/82">
                  {room.amenities.map((item) => (
                    <li key={item.bg} className="flex gap-2">
                      <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-diamanti-terracotta" />
                      <span>{item[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="inline-flex items-center justify-center rounded-full border border-diamanti-navy px-4 py-2 text-sm font-medium text-diamanti-navy transition hover:bg-diamanti-sand/35"
          >
            {expanded
              ? locale === 'bg'
                ? 'Скрий детайли'
                : 'Hide details'
              : locale === 'bg'
                ? 'Виж детайли'
                : 'View details'}
          </button>
          <BookingCta placement={`room_card_${room.slug}`} className="px-4 py-2 text-sm">
            {locale === 'bg' ? 'Провери наличност' : 'Check availability'}
          </BookingCta>
        </div>
      </div>
    </article>
  )
}
