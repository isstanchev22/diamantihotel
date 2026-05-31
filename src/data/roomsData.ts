import { roomImageMap } from './imageData'
import type { RoomCategory } from '../types/content'

export const roomCategories: RoomCategory[] = [
  {
    slug: 'room-side-sea-view',
    name: {
      bg: 'Стая със страничен морски изглед',
      en: 'Room with Side Sea View',
    },
    shortDescription: {
      bg: 'Двойна стая с балкон и страничен изглед към морето.',
      en: 'Double room with balcony and side sea view.',
    },
    detailedDescription: {
      bg: 'Комфортна двойна стая с двойно легло или twin конфигурация, балкон със странична морска гледка и самостоятелна баня.',
      en: 'Comfortable double room with one double bed or twin setup, a balcony with side sea view, and an ensuite bathroom.',
    },
    viewType: {
      bg: 'Страничен морски изглед',
      en: 'Side sea view',
    },
    size: '20 m²',
    occupancy: {
      bg: 'До 2 възрастни',
      en: 'Up to 2 adults',
    },
    floorInfo: {
      bg: 'TODO: потвърдете етаж/позиция при резервация',
      en: 'TODO: confirm floor/location on booking',
    },
    bestFor: {
      bg: 'Подходяща за двойки, които искат морска гледка без по-висока категория.',
      en: 'Best for couples who want sea atmosphere in a standard room class.',
    },
    amenities: [
      { bg: 'Балкон', en: 'Balcony' },
      { bg: 'Самостоятелна баня', en: 'Ensuite bathroom' },
      { bg: 'Климатик', en: 'Air conditioning' },
      { bg: 'Wi-Fi', en: 'Wi-Fi' },
      { bg: 'Телевизор', en: 'TV' },
    ],
    highlights: [
      {
        bg: 'Минимум престой в примерна проверка: 3 нощувки',
        en: 'Minimum stay in sampled availability: 3 nights',
      },
    ],
    sourceNote: {
      bg: 'Детайлите се потвърждават спрямо наличност за избраните дати.',
      en: 'Final details are confirmed based on availability for your selected dates.',
    },
    mainImage: roomImageMap.roomWithSideSeaView,
    gallery: [roomImageMap.roomWithSideSeaView],
  },
  {
    slug: 'room-balcony-no-sea',
    name: {
      bg: 'Стая с балкон (без морски изглед)',
      en: 'Room with Balcony (No Sea View)',
    },
    shortDescription: {
      bg: 'Тиха двойна стая с балкон към вътрешната/градска зона.',
      en: 'Quiet double room with balcony facing inner or town side.',
    },
    detailedDescription: {
      bg: 'Тиха двойна стая с балкон, подходяща за гости, които поставят локацията в Стария град и удобния престой пред директния морски изглед.',
      en: 'Quiet double room with balcony, ideal for guests who prioritize the Old Town location and comfort over direct sea view.',
    },
    viewType: {
      bg: 'Без морски изглед',
      en: 'No sea view',
    },
    size: '20 m²',
    occupancy: {
      bg: 'До 2 възрастни',
      en: 'Up to 2 adults',
    },
    floorInfo: {
      bg: 'TODO: потвърдете предпочитан етаж при наличност',
      en: 'TODO: confirm preferred floor based on availability',
    },
    bestFor: {
      bg: 'Най-практичният избор за кратък престой с фокус върху локацията.',
      en: 'A practical choice for short stays focused on location.',
    },
    amenities: [
      { bg: 'Балкон', en: 'Balcony' },
      { bg: 'Самостоятелна баня', en: 'Ensuite bathroom' },
      { bg: 'Климатик', en: 'Air conditioning' },
      { bg: 'Wi-Fi', en: 'Wi-Fi' },
      { bg: 'Телевизор', en: 'TV' },
    ],
    highlights: [
      {
        bg: 'Минимум престой в примерна проверка: 3 нощувки',
        en: 'Minimum stay in sampled availability: 3 nights',
      },
    ],
    sourceNote: {
      bg: 'Детайлите се потвърждават спрямо наличност за избраните дати.',
      en: 'Final details are confirmed based on availability for your selected dates.',
    },
    mainImage: roomImageMap.roomWithBalconyNoSea,
    gallery: [roomImageMap.roomWithBalconyNoSea],
  },
  {
    slug: 'studio-direct-sea-view',
    name: {
      bg: 'Студио с директен морски изглед',
      en: 'Studio Direct Sea View',
    },
    shortDescription: {
      bg: 'Просторно студио с балкон, диван и опция за малък кухненски кът.',
      en: 'Spacious studio with balcony, sofa, and in some units a small kitchenette.',
    },
    detailedDescription: {
      bg: 'Просторно студио с едно голямо легло, диван, балкон с директен морски изглед и самостоятелна баня; в част от студиата има кухненски бокс.',
      en: 'Spacious studio with one large bed, sofa, direct sea-view balcony, and an ensuite bathroom; some studios also include a kitchenette.',
    },
    viewType: {
      bg: 'Директен морски изглед',
      en: 'Direct sea view',
    },
    size: '30 m²',
    occupancy: {
      bg: 'До 2 възрастни + 1 дете',
      en: 'Up to 2 adults + 1 child',
    },
    floorInfo: {
      bg: 'Различни етажи според наличност',
      en: 'Various floors, based on availability',
    },
    bestFor: {
      bg: 'Подходящо за 3-5 нощувки и за гости, които искат повече пространство.',
      en: 'Great for 3-5 night stays and guests needing more space.',
    },
    amenities: [
      { bg: 'Балкон с директен морски изглед', en: 'Balcony with direct sea view' },
      { bg: 'Диван', en: 'Sofa' },
      { bg: 'Самостоятелна баня', en: 'Ensuite bathroom' },
      { bg: 'Wi-Fi', en: 'Wi-Fi' },
      {
        bg: 'Малък кухненски кът (в част от студиата)',
        en: 'Small kitchenette (in some studios)',
      },
    ],
    highlights: [
      {
        bg: 'Минимум престой в примерна проверка: 3 нощувки',
        en: 'Minimum stay in sampled availability: 3 nights',
      },
    ],
    sourceNote: {
      bg: 'Детайлите се потвърждават спрямо наличност за избраните дати.',
      en: 'Final details are confirmed based on availability for your selected dates.',
    },
    mainImage: roomImageMap.studioSeaView,
    gallery: [roomImageMap.studioSeaView],
  },
  {
    slug: 'studio-first-floor-no-balcony',
    name: {
      bg: 'Студио на първи етаж без балкон',
      en: 'Studio on First Floor (No Balcony)',
    },
    shortDescription: {
      bg: 'Студио с морски изглед, кухненски кът и трапезна маса, без балкон.',
      en: 'Sea-view studio with kitchenette and dining table, without balcony.',
    },
    detailedDescription: {
      bg: 'Удобно студио на първи етаж с голямо легло, sofa bed, кухненски кът, маса за хранене и самостоятелна баня.',
      en: 'Comfortable first-floor studio with a large bed, sofa bed, kitchenette, dining table, and an ensuite bathroom.',
    },
    viewType: {
      bg: 'Морски изглед без балкон',
      en: 'Sea view without balcony',
    },
    size: '30 кв.м (30 m²)',
    occupancy: {
      bg: 'До 2 възрастни + 1 дете',
      en: 'Up to 2 adults + 1 child',
    },
    floorInfo: {
      bg: 'Първи етаж',
      en: 'First floor',
    },
    bestFor: {
      bg: 'Добър вариант за семейство с дете и по-лесен достъп без стълби.',
      en: 'A good option for families with a child and easier access.',
    },
    amenities: [
      { bg: 'Морски изглед', en: 'Sea view' },
      { bg: 'Кухненски кът', en: 'Kitchenette' },
      { bg: 'Трапезна маса', en: 'Dining table' },
      { bg: 'Sofa bed', en: 'Sofa bed' },
      { bg: 'Самостоятелна баня', en: 'Ensuite bathroom' },
    ],
    highlights: [
      {
        bg: 'Минимум престой в примерна проверка: 3 нощувки',
        en: 'Minimum stay in sampled availability: 3 nights',
      },
    ],
    sourceNote: {
      bg: 'Детайлите се потвърждават спрямо наличност за избраните дати.',
      en: 'Final details are confirmed based on availability for your selected dates.',
    },
    mainImage: roomImageMap.studioFirstFloor,
    gallery: [roomImageMap.studioFirstFloor],
  },
  {
    slug: 'attic-studio-direct-sea-view',
    name: {
      bg: 'Мансардно студио с директен морски изглед',
      en: 'Attic Studio Direct Sea View',
    },
    shortDescription: {
      bg: 'Студио на последен етаж с морска тераса и характерна атмосфера.',
      en: 'Top-floor studio with sea-view balcony and attic character.',
    },
    detailedDescription: {
      bg: 'Мансардно студио с голямо легло, диван, балкон с пълен морски изглед и самостоятелна баня; в част от студиата има малък кухненски кът.',
      en: 'Attic studio with a large bed, sofa, full sea-view balcony, and an ensuite bathroom; some units include a small kitchenette.',
    },
    viewType: {
      bg: 'Директен морски изглед (мансарден етаж)',
      en: 'Direct sea view (attic floor)',
    },
    size: '30 m²',
    occupancy: {
      bg: 'До 2 възрастни + 1 дете',
      en: 'Up to 2 adults + 1 child',
    },
    floorInfo: {
      bg: 'Мансарден/последен етаж',
      en: 'Attic/top floor',
    },
    bestFor: {
      bg: 'За двойки, които искат атмосфера и панорама от по-висока позиция.',
      en: 'For couples who value top-floor atmosphere and panorama.',
    },
    amenities: [
      { bg: 'Балкон с директен морски изглед', en: 'Balcony with direct sea view' },
      { bg: 'Диван', en: 'Sofa' },
      {
        bg: 'Малък кухненски кът (в част от студиата)',
        en: 'Small kitchenette (in some studios)',
      },
      { bg: 'Самостоятелна баня', en: 'Ensuite bathroom' },
      { bg: 'Wi-Fi', en: 'Wi-Fi' },
    ],
    highlights: [
      {
        bg: 'Минимум престой в примерна проверка: 3 нощувки',
        en: 'Minimum stay in sampled availability: 3 nights',
      },
    ],
    sourceNote: {
      bg: 'Детайлите се потвърждават спрямо наличност за избраните дати.',
      en: 'Final details are confirmed based on availability for your selected dates.',
    },
    mainImage: roomImageMap.atticStudioSeaView,
    gallery: [roomImageMap.atticStudioSeaView],
  },
  {
    slug: 'junior-suite-direct-sea-view',
    name: {
      bg: 'Junior Suite с директен морски изглед',
      en: 'Junior Suite Direct Sea View',
    },
    shortDescription: {
      bg: 'Мини суит със спалня и дневна зона, балкон и пълен морски изглед.',
      en: 'Mini-suite with bedroom, living area, balcony, and full sea view.',
    },
    detailedDescription: {
      bg: 'Junior Suite с отделна спалня и дневна зона със sofa, балкон с пълен морски изглед и самостоятелна баня.',
      en: 'Junior Suite with a separate bedroom, living area with sofa, full sea-view balcony, and an ensuite bathroom.',
    },
    viewType: {
      bg: 'Директен морски изглед',
      en: 'Direct sea view',
    },
    size: '40 m²',
    occupancy: {
      bg: 'До 2 възрастни + 1 дете',
      en: 'Up to 2 adults + 1 child',
    },
    floorInfo: {
      bg: '',
      en: '',
    },
    bestFor: {
      bg: 'Подходящ за специални поводи и по-дълъг престой с повече комфорт.',
      en: 'Best for special occasions and longer stays with more comfort.',
    },
    amenities: [
      { bg: 'Отделна спалня и дневна зона', en: 'Separate bedroom and living area' },
      { bg: 'Sofa', en: 'Sofa' },
      { bg: 'Балкон с пълен морски изглед', en: 'Full sea-view balcony' },
      { bg: 'Самостоятелна баня', en: 'Ensuite bathroom' },
      { bg: 'Wi-Fi', en: 'Wi-Fi' },
    ],
    highlights: [
      {
        bg: 'Минимум престой в примерна проверка: 3 нощувки',
        en: 'Minimum stay in sampled availability: 3 nights',
      },
    ],
    sourceNote: {
      bg: 'Детайлите се потвърждават спрямо наличност за избраните дати.',
      en: 'Final details are confirmed based on availability for your selected dates.',
    },
    mainImage: roomImageMap.juniorSuiteSeaView,
    gallery: [roomImageMap.juniorSuiteSeaView],
  },
]
