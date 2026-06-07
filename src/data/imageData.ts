import type { SiteImage } from '../types/content'

export const sectionImages = {
  hero: {
    src: 'https://q-xx.bstatic.com/xdata/images/xphoto/max1280x900/557716178.jpg?k=7117a2e85fc87769f72710c8b89fc36eff861cfd3ab9b948db412a2062efdda9&o=',
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
  gallerySeaView: {
    src: 'https://i.ibb.co/XksWKNCG/1780860812897629.jpg',
    alt: {
      bg: 'Гледка и атмосфера от Hotel Diamanti',
      en: 'View and atmosphere from Hotel Diamanti',
    },
  },
  galleryExterior: {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEJ_P0mYmLL0yjTXrSKx1usCkDsxmFpumbnoBlZ4a4omh1R3WNHlTUMix0xj7w6Ftee9XY4GMFM5u5AVkWNLxvndsSFFMXGNe8tEWPRaqafuDkCUg8DGwIz2oRQKUfQi6DwKrixC46RRBn8=s680-w680-h510-rw',
    alt: {
      bg: 'Hotel Diamanti в Стария Созопол',
      en: 'Hotel Diamanti in Old Sozopol',
    },
  },
  galleryRoomDetail: {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/351629692.jpg?k=467cb091c083d37788fad4f42a848764f40b70a359529283b1c9797be2c08317&o=',
    alt: {
      bg: 'Интериор и детайл от Hotel Diamanti',
      en: 'Interior and detail from Hotel Diamanti',
    },
  },
} satisfies Record<string, SiteImage>

export const roomImageMap = {
  roomWithSideSeaView: {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/461728800.jpg?k=559eeefcdcb0fe3ec4301b7eb2c5da01148c3d63fcfccec75ea4d03160ba2138&o=',
    alt: {
      bg: 'Стая със страничен морски изглед в Hotel Diamanti',
      en: 'Room with side sea view at Hotel Diamanti',
    },
    source: 'Clock booking engine media',
  },
  roomWithBalconyNoSea: {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/461716389.jpg?k=2defb7d4725b169dbcfbeec911292380db763366652cabd79c2ce9622466d003&o=',
    alt: {
      bg: 'Стая с балкон и изглед към Стария град, без морски изглед',
      en: 'Room with balcony and old-town view, no sea view',
    },
    source: 'Clock booking engine media',
  },
  studioSeaView: {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/142908276.jpg?k=d13e5b35c82ac99eae0ce799083bd6ca6251f4236f6147d0de515a9955e4d2dc&o=',
    alt: {
      bg: 'Студио с директен морски изглед',
      en: 'Studio with direct sea view',
    },
    source: 'Clock booking engine media',
  },
  studioFirstFloor: {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/142909843.jpg?k=6553b2891cdde4359f5956deab63df828ab0c90102df91a683bf7147c60680c3&o=',
    alt: {
      bg: 'Студио на първи етаж с кухненски кът',
      en: 'First-floor studio with kitchenette',
    },
    source: 'Clock booking engine media',
  },
  atticStudioSeaView: {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/461715741.jpg?k=5d906ed4ef4387edd347877ca84df484a27be20fed8484dbacefa50d93f17585&o=',
    alt: {
      bg: 'Мансардно студио с морски изглед',
      en: 'Attic studio with sea view',
    },
    source: 'Clock booking engine media',
  },
  juniorSuiteSeaView: {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/676705889.jpg?k=91f05e03ebe9a1964a3aa6d9df6b05f92eef4added6ecf5908733a53f728ede3&o=',
    alt: {
      bg: 'Суит с морски изглед',
      en: 'Suite with sea view',
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
