import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import type { RoomCategory } from '../../types/content'
import { BookingCta } from './BookingCta'
import { Icon } from './Icon'
import type { IconName } from './Icon'
import { SmartImage } from './SmartImage'

export function RoomCard({ room }: { room: RoomCategory }) {
  const { locale } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  const floorInfo = room.floorInfo[locale].trim()

  const specs: Array<{ icon: IconName; label: string; value: string }> = [
    {
      icon: 'ruler',
      label: locale === 'bg' ? 'Площ' : 'Size',
      value: room.size,
    },
    {
      icon: 'users',
      label: locale === 'bg' ? 'Капацитет' : 'Occupancy',
      value: room.occupancy[locale],
    },
    {
      icon: 'compass',
      label: locale === 'bg' ? 'Изглед' : 'View',
      value: room.viewType[locale],
    },
  ]

  return (
    <article className="premium-card-hover group flex h-full flex-col overflow-hidden rounded-3xl border border-diamanti-mist/45 bg-diamanti-shell shadow-soft">
      <div className="relative overflow-hidden">
        <SmartImage
          image={room.mainImage}
          className="rounded-none border-0"
          imgClassName="aspect-[16/10] group-hover:scale-[1.04]"
          graded
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-diamanti-ink/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-diamanti-limestone backdrop-blur">
          <Icon name="compass" size={13} className="text-diamanti-brass" />
          {room.viewType[locale]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-3xl leading-tight text-diamanti-ink">
          {room.name[locale]}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-diamanti-ink/80 md:text-base">
          {room.shortDescription[locale]}
        </p>

        <dl className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-diamanti-mist/40 bg-diamanti-limestone/70 p-4 text-sm transition duration-300 group-hover:border-diamanti-sea/30">
          {specs.map((spec) => (
            <div key={spec.label} className="flex flex-col gap-1">
              <dt className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-diamanti-sea">
                <Icon name={spec.icon} size={15} />
                {spec.label}
              </dt>
              <dd className="font-medium leading-snug text-diamanti-ink">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-5 space-y-2.5 text-sm text-diamanti-ink/80 md:text-base">
          {room.highlights.slice(0, 2).map((highlight) => (
            <li key={highlight.bg} className="flex gap-2.5">
              <Icon
                name="check"
                size={18}
                className="mt-0.5 shrink-0 text-diamanti-brass"
              />
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
            <div className="premium-scale-in space-y-4 rounded-2xl border border-diamanti-mist/40 bg-diamanti-limestone/60 p-4 text-sm md:text-base">
              <p className="leading-relaxed text-diamanti-ink/85">
                {room.detailedDescription[locale]}
              </p>
              <p className="flex gap-2 leading-relaxed text-diamanti-ink/85">
                <Icon name="star" size={18} className="mt-0.5 shrink-0 text-diamanti-coral" />
                <span>
                  <strong className="font-semibold text-diamanti-ink">
                    {locale === 'bg' ? 'Най-подходяща за: ' : 'Best for: '}
                  </strong>
                  {room.bestFor[locale]}
                </span>
              </p>
              {floorInfo ? (
                <p className="leading-relaxed text-diamanti-ink/85">
                  <strong className="font-semibold text-diamanti-ink">
                    {locale === 'bg' ? 'Етаж / позиция: ' : 'Floor / position: '}
                  </strong>
                  {floorInfo}
                </p>
              ) : null}
              <div>
                <p className="font-semibold text-diamanti-ink">
                  {locale === 'bg' ? 'Ключови удобства' : 'Key amenities'}
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {room.amenities.map((item) => (
                    <li key={item.bg} className="flex gap-2 text-diamanti-ink/80">
                      <Icon
                        name="check"
                        size={16}
                        className="mt-0.5 shrink-0 text-diamanti-sea"
                      />
                      <span>{item[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-diamanti-sea/60 px-4 py-2 text-sm font-medium text-diamanti-sea transition hover:bg-diamanti-sea hover:text-diamanti-limestone"
          >
            {expanded
              ? locale === 'bg'
                ? 'Скрий детайли'
                : 'Hide details'
              : locale === 'bg'
                ? 'Виж детайли'
                : 'View details'}
          </button>
          <BookingCta placement={`room_card_${room.slug}`} className="px-5 py-2 text-sm">
            {locale === 'bg' ? 'Провери наличност' : 'Check availability'}
          </BookingCta>
        </div>
      </div>
    </article>
  )
}
