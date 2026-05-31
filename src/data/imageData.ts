import type { SiteImage } from '../types/content'

export const sectionImages = {
  hero: {
    src: '/images/hero-sea-view.jpg',
    alt: {
      bg: 'Тераса с директен морски изглед от Hotel Diamanti в Стария Созопол',
      en: 'Sea-view terrace at Hotel Diamanti in Old Sozopol',
    },
    source: 'Clock booking engine media',
  },
  breakfastTerrace: {
    src: '/images/breakfast-terrace.jpg',
    alt: {
      bg: 'Закуска на морската тераса на Hotel Diamanti',
      en: 'Breakfast on the sea-view terrace at Hotel Diamanti',
    },
    source: 'Hotel Diamanti official website',
  },
  restaurantTerrace: {
    src: '/images/restaurant-terrace.jpg',
    alt: {
      bg: 'Ресторант тераса с гледка към морето в Hotel Diamanti',
      en: 'Sea-view restaurant terrace at Hotel Diamanti',
    },
    source: 'Hotel Diamanti official website',
  },
  oldTownStreet: {
    src: '/images/old-sozopol-street.jpg',
    alt: {
      bg: 'Къща и калдъръм в Стария Созопол',
      en: 'Old Sozopol cobblestone street and heritage house',
    },
    source: 'Hotel Diamanti official website',
  },
  oldTownWaterfront: {
    src: '/images/old-sozopol-waterfront.jpg',
    alt: {
      bg: 'Гледка към брега на Стария Созопол',
      en: 'Old Sozopol waterfront view',
    },
    source: 'Hotel Diamanti official website',
  },
  weddingTerrace: {
    src: '/images/wedding-sea-terrace.jpg',
    alt: {
      bg: 'Сватбена церемония с морски фон в Hotel Diamanti',
      en: 'Sea-view wedding setup at Hotel Diamanti',
    },
    source: 'Hotel Diamanti official website',
  },
  waterfrontExterior: {
    src: '/images/waterfront-exterior.jpg',
    alt: {
      bg: 'Външна гледка към Hotel Diamanti от крайбрежната алея',
      en: 'Hotel Diamanti exterior by the waterfront promenade',
    },
    source: 'Hotel Diamanti official website',
  },
} satisfies Record<string, SiteImage>

export const roomImageMap = {
  roomWithSideSeaView: {
    src: '/images/room-side-sea-view.jpg',
    alt: {
      bg: 'Стая със страничен морски изглед в Hotel Diamanti',
      en: 'Room with side sea view at Hotel Diamanti',
    },
    source: 'Clock booking engine media',
  },
  roomWithBalconyNoSea: {
    src: '/images/room-balcony-no-sea.jpg',
    alt: {
      bg: 'Стая с балкон и изглед към Стария град, без морски изглед',
      en: 'Room with balcony and old-town view, no sea view',
    },
    source: 'Clock booking engine media',
  },
  studioSeaView: {
    src: '/images/studio-sea-view.jpg',
    alt: {
      bg: 'Студио с директен морски изглед',
      en: 'Studio with direct sea view',
    },
    source: 'Clock booking engine media',
  },
  studioFirstFloor: {
    src: '/images/studio-first-floor.jpg',
    alt: {
      bg: 'Студио на първи етаж с кухненски кът',
      en: 'First-floor studio with kitchenette',
    },
    source: 'Clock booking engine media',
  },
  atticStudioSeaView: {
    src: '/images/attic-studio-sea-view.jpg',
    alt: {
      bg: 'Мансардно студио с морски изглед',
      en: 'Attic studio with sea view',
    },
    source: 'Clock booking engine media',
  },
  juniorSuiteSeaView: {
    src: '/images/junior-suite-sea-view.jpg',
    alt: {
      bg: 'Junior Suite с директен морски изглед',
      en: 'Junior Suite with direct sea view',
    },
    source: 'Clock booking engine media',
  },
  largeApartmentSeaView: {
    src: '/images/large-apartment-sea-view.jpg',
    alt: {
      bg: 'Голям апартамент с морски изглед',
      en: 'Large apartment with sea view',
    },
    source: 'Hotel Diamanti official website',
  },
} satisfies Record<string, SiteImage>
