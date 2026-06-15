import { useLanguage } from '../../context/LanguageContext'
import type { RoomCategory } from '../../types/content'
import { BookingCta } from './BookingCta'
import { ExpandableCard } from './expandable-card'
import { Icon } from './Icon'
import type { IconName } from './Icon'

export function RoomExpandableCard({ room }: { room: RoomCategory }) {
  const { locale } = useLanguage()
  const floorInfo = room.floorInfo[locale].trim()

  const specs: Array<{ icon: IconName; label: string; value: string }> = [
    { icon: 'ruler', label: locale === 'bg' ? 'Площ' : 'Size', value: room.size },
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
    <ExpandableCard
      title={room.name[locale]}
      description={room.viewType[locale]}
      src={room.mainImage.src}
      imageAlt={room.mainImage.alt[locale]}
      openLabel={locale === 'bg' ? 'Виж детайли за стаята' : 'View room details'}
      closeLabel={locale === 'bg' ? 'Затвори детайлите' : 'Close details'}
      className="h-full"
    >
      <p className="w-full leading-relaxed text-diamanti-ink/85">
        {room.shortDescription[locale]}
      </p>

      <dl className="grid w-full grid-cols-3 gap-3 rounded-2xl border border-diamanti-mist/40 bg-diamanti-limestone/70 p-4 text-sm">
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

      <p className="w-full leading-relaxed text-diamanti-ink/85">
        {room.detailedDescription[locale]}
      </p>

      <p className="flex w-full gap-2 leading-relaxed text-diamanti-ink/85">
        <Icon name="star" size={18} className="mt-0.5 shrink-0 text-diamanti-coral" />
        <span>
          <strong className="font-semibold text-diamanti-ink">
            {locale === 'bg' ? 'Най-подходяща за: ' : 'Best for: '}
          </strong>
          {room.bestFor[locale]}
        </span>
      </p>

      {floorInfo ? (
        <p className="w-full leading-relaxed text-diamanti-ink/85">
          <strong className="font-semibold text-diamanti-ink">
            {locale === 'bg' ? 'Етаж / позиция: ' : 'Floor / position: '}
          </strong>
          {floorInfo}
        </p>
      ) : null}

      <div className="w-full">
        <h4 className="font-display text-xl text-diamanti-ink">
          {locale === 'bg' ? 'Ключови удобства' : 'Key amenities'}
        </h4>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {room.amenities.map((item) => (
            <li key={item.bg} className="flex gap-2 text-diamanti-ink/80">
              <Icon name="check" size={16} className="mt-0.5 shrink-0 text-diamanti-sea" />
              <span>{item[locale]}</span>
            </li>
          ))}
        </ul>
      </div>

      <BookingCta placement={`room_card_${room.slug}`} className="mt-2">
        {locale === 'bg' ? 'Провери наличност' : 'Check availability'}
      </BookingCta>
    </ExpandableCard>
  )
}
