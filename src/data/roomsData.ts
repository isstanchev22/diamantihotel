import { roomImageMap } from './imageData'
import type { LocalizedString, RoomCategory } from '../types/content'

const amenities = {
  freeWifi: { bg: 'Безплатен Wi-Fi', en: 'Free WiFi' },
  airConditioning: { bg: 'Климатик', en: 'Air conditioning' },
  balcony: { bg: 'Балкон', en: 'Balcony' },
  terrace: { bg: 'Тераса', en: 'Terrace' },
  ensuiteBathroom: { bg: 'Самостоятелна баня', en: 'Ensuite bathroom' },
  flatScreenTv: { bg: 'Телевизор с плосък екран', en: 'Flat-screen TV' },
  refrigerator: { bg: 'Хладилник', en: 'Refrigerator' },
  hairdryer: { bg: 'Сешоар', en: 'Hairdryer' },
  safetyDepositBox: { bg: 'Сейф', en: 'Safety deposit box' },
  freeToiletries: { bg: 'Безплатни тоалетни принадлежности', en: 'Free toiletries' },
  sideSeaView: { bg: 'Страничен морски изглед', en: 'Side sea view' },
  seaView: { bg: 'Морски изглед', en: 'Sea view' },
  coffeeMachine: { bg: 'Кафемашина', en: 'Coffee machine' },
  minibar: { bg: 'Минибар', en: 'Minibar' },
  sofaBed: { bg: 'Разтегателен диван', en: 'Sofa bed' },
} satisfies Record<string, LocalizedString>

export const roomCategories: RoomCategory[] = [
  {
    slug: 'double-room-balcony',
    category: 'rooms',
    name: {
      bg: 'Двойна стая с балкон',
      en: 'Double Room with Balcony',
    },
    shortDescription: {
      bg: 'Уютна двойна стая с балкон, подходяща за спокоен престой в Стария Созопол. Разполага с климатик, самостоятелна баня, тераса и всичко необходимо за комфортна почивка.',
      en: 'A comfortable double room with a balcony, ideal for a calm stay in Old Sozopol. Includes air conditioning, a private bathroom, terrace, and everything needed for an easy seaside stay.',
    },
    detailedDescription: {
      bg: 'Стая от 20 m² с голямо двойно легло, балкон, градски изглед или изглед към вътрешния двор, самостоятелна баня и тераса. Кошара се предоставя при заявка.',
      en: 'A 20 m² room with one large double bed, balcony, city or inner courtyard view, ensuite bathroom, and terrace. A cot is available on request.',
    },
    viewType: {
      bg: 'Градски изглед и вътрешен двор',
      en: 'City and inner courtyard view',
    },
    size: '20 m²',
    occupancy: {
      bg: 'До 2 възрастни',
      en: 'Up to 2 adults',
    },
    floorInfo: {
      bg: 'Балкон и тераса',
      en: 'Balcony and terrace',
    },
    bestFor: {
      bg: 'Двойки, които искат тиха стая с балкон и удобен достъп до Стария град.',
      en: 'Couples who want a quiet balcony room with easy access to Old Town.',
    },
    amenities: [
      amenities.freeWifi,
      amenities.airConditioning,
      amenities.balcony,
      amenities.terrace,
      amenities.ensuiteBathroom,
      amenities.flatScreenTv,
      amenities.refrigerator,
      amenities.hairdryer,
      amenities.safetyDepositBox,
      amenities.freeToiletries,
    ],
    highlights: [
      { bg: '1 голямо двойно легло', en: '1 large double bed' },
      { bg: 'Кошара при заявка', en: 'Cot available on request' },
    ],
    sourceNote: {
      bg: '',
      en: '',
    },
    mainImage: roomImageMap.roomWithBalconyNoSea,
    gallery: [roomImageMap.roomWithBalconyNoSea],
  },
  {
    slug: 'double-twin-side-sea-view',
    category: 'rooms',
    name: {
      bg: 'Двойна стая със страничен морски изглед',
      en: 'Double or Twin Room with Side Sea View',
    },
    shortDescription: {
      bg: 'Стая със странична гледка към морето и възможност за двойно легло или две отделни легла. Добър избор за гости, които искат комфорт, тераса и усещане за близост до морето.',
      en: 'A room with a side sea view and the option of one double bed or two single beds. A good choice for guests who want comfort, a terrace, and a sense of being close to the sea.',
    },
    detailedDescription: {
      bg: 'Стая от 20 m² с балкон, страничен морски изглед, самостоятелна баня, тераса и избор между едно голямо двойно легло или две отделни легла. Кошара се предоставя при заявка.',
      en: 'A 20 m² room with balcony, side sea view, ensuite bathroom, terrace, and a choice of one large double bed or two single beds. A cot is available on request.',
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
      bg: 'Балкон и тераса',
      en: 'Balcony and terrace',
    },
    bestFor: {
      bg: 'Гости, които искат тераса, морска атмосфера и гъвкав избор на легла.',
      en: 'Guests who want a terrace, sea atmosphere, and flexible bedding.',
    },
    amenities: [
      amenities.freeWifi,
      amenities.airConditioning,
      amenities.balcony,
      amenities.terrace,
      amenities.sideSeaView,
      amenities.ensuiteBathroom,
      amenities.flatScreenTv,
      amenities.refrigerator,
      amenities.hairdryer,
      amenities.safetyDepositBox,
      amenities.freeToiletries,
    ],
    highlights: [
      { bg: '1 голямо двойно легло или 2 отделни легла', en: '1 large double bed or 2 single beds' },
      { bg: 'Кошара при заявка', en: 'Cot available on request' },
    ],
    sourceNote: {
      bg: '',
      en: '',
    },
    mainImage: roomImageMap.roomWithSideSeaView,
    gallery: [roomImageMap.roomWithSideSeaView],
  },
  {
    slug: 'attic-studio',
    category: 'studios',
    name: {
      bg: 'Мансардно студио',
      en: 'Attic Studio',
    },
    shortDescription: {
      bg: 'Просторно мансардно студио с морски изглед, балкон и отделно усещане за повече свобода. Подходящо за гости, които търсят повече пространство, тераса и гледка към морето.',
      en: 'A spacious attic studio with sea view, balcony, and a greater sense of privacy and freedom. Ideal for guests who want more space, a terrace, and a view toward the sea.',
    },
    detailedDescription: {
      bg: 'Цяло студио от 50 m² с голямо двойно легло, разтегателен диван, морски изглед, балкон, тераса, самостоятелна баня, кафемашина и минибар. Кошара се предоставя при заявка.',
      en: 'An entire 50 m² studio with one large double bed, sofa bed, sea view, balcony, terrace, ensuite bathroom, coffee machine, and minibar. A cot is available on request.',
    },
    viewType: {
      bg: 'Морски изглед',
      en: 'Sea view',
    },
    size: '50 m²',
    occupancy: {
      bg: 'До 2 възрастни',
      en: 'Up to 2 adults',
    },
    floorInfo: {
      bg: 'Мансарден етаж',
      en: 'Attic floor',
    },
    bestFor: {
      bg: 'Гости, които искат най-просторното студио, повече уединение и морска тераса.',
      en: 'Guests who want the most spacious studio, more privacy, and a sea-facing terrace.',
    },
    amenities: [
      amenities.freeWifi,
      amenities.airConditioning,
      amenities.seaView,
      amenities.balcony,
      amenities.terrace,
      amenities.ensuiteBathroom,
      amenities.flatScreenTv,
      amenities.coffeeMachine,
      amenities.minibar,
      amenities.sofaBed,
      amenities.hairdryer,
      amenities.freeToiletries,
    ],
    highlights: [
      { bg: '1 голямо двойно легло + 1 разтегателен диван', en: '1 large double bed + 1 sofa bed' },
      { bg: 'Кошара при заявка', en: 'Cot available on request' },
    ],
    sourceNote: {
      bg: '',
      en: '',
    },
    mainImage: roomImageMap.atticStudioSeaView,
    gallery: [roomImageMap.atticStudioSeaView],
  },
  {
    slug: 'studio-first-floor',
    category: 'studios',
    name: {
      bg: 'Студио - първи етаж',
      en: 'Studio - First floor',
    },
    shortDescription: {
      bg: 'Компактно и удобно студио на първи етаж с морски изглед. Подходящо за двойки, които искат комфортен престой, гледка към морето и лесен достъп.',
      en: 'A compact and comfortable first-floor studio with sea view. Suitable for couples who want an easy stay, sea-facing atmosphere, and practical comfort.',
    },
    detailedDescription: {
      bg: 'Цяло студио от 25 m² с голямо двойно легло, морски изглед, самостоятелна баня, кафемашина, минибар, климатик и телевизор с плосък екран. Кошара се предоставя при заявка.',
      en: 'An entire 25 m² studio with one large double bed, sea view, ensuite bathroom, coffee machine, minibar, air conditioning, and flat-screen TV. A cot is available on request.',
    },
    viewType: {
      bg: 'Морски изглед',
      en: 'Sea view',
    },
    size: '25 m²',
    occupancy: {
      bg: 'До 2 възрастни',
      en: 'Up to 2 adults',
    },
    floorInfo: {
      bg: 'Първи етаж',
      en: 'First floor',
    },
    bestFor: {
      bg: 'Двойки, които искат лесен достъп, практичен комфорт и морска атмосфера.',
      en: 'Couples who want easy access, practical comfort, and a sea-facing atmosphere.',
    },
    amenities: [
      amenities.freeWifi,
      amenities.airConditioning,
      amenities.seaView,
      amenities.ensuiteBathroom,
      amenities.flatScreenTv,
      amenities.coffeeMachine,
      amenities.minibar,
      amenities.hairdryer,
      amenities.freeToiletries,
    ],
    highlights: [
      { bg: '1 голямо двойно легло', en: '1 large double bed' },
      { bg: 'Кошара при заявка', en: 'Cot available on request' },
    ],
    sourceNote: {
      bg: '',
      en: '',
    },
    mainImage: roomImageMap.studioFirstFloor,
    gallery: [roomImageMap.studioFirstFloor],
  },
  {
    slug: 'studio-sea-view',
    category: 'studios',
    name: {
      bg: 'Студио с морски изглед',
      en: 'Studio with Sea View',
    },
    shortDescription: {
      bg: 'Студио с морски изглед, балкон и повече пространство за спокоен престой край брега. Подходящо за гости, които искат да усещат морето още от сутринта.',
      en: 'A sea-view studio with a balcony and extra space for a relaxed stay by the coast. Ideal for guests who want to feel close to the sea from the first moments of the day.',
    },
    detailedDescription: {
      bg: 'Цяло студио от 30 m² с голямо двойно легло, разтегателен диван, балкон, тераса, морски изглед, самостоятелна баня, кафемашина и минибар. Кошара се предоставя при заявка.',
      en: 'An entire 30 m² studio with one large double bed, sofa bed, balcony, terrace, sea view, ensuite bathroom, coffee machine, and minibar. A cot is available on request.',
    },
    viewType: {
      bg: 'Морски изглед',
      en: 'Sea view',
    },
    size: '30 m²',
    occupancy: {
      bg: 'До 2 възрастни',
      en: 'Up to 2 adults',
    },
    floorInfo: {
      bg: 'Балкон и тераса',
      en: 'Balcony and terrace',
    },
    bestFor: {
      bg: 'Гости, които искат повече пространство, балкон и гледка към морето.',
      en: 'Guests who want more space, a balcony, and a view toward the sea.',
    },
    amenities: [
      amenities.freeWifi,
      amenities.airConditioning,
      amenities.seaView,
      amenities.balcony,
      amenities.terrace,
      amenities.ensuiteBathroom,
      amenities.flatScreenTv,
      amenities.coffeeMachine,
      amenities.minibar,
      amenities.sofaBed,
      amenities.hairdryer,
      amenities.freeToiletries,
    ],
    highlights: [
      { bg: '1 голямо двойно легло + 1 разтегателен диван', en: '1 large double bed + 1 sofa bed' },
      { bg: 'Кошара при заявка', en: 'Cot available on request' },
    ],
    sourceNote: {
      bg: '',
      en: '',
    },
    mainImage: roomImageMap.studioSeaView,
    gallery: [roomImageMap.studioSeaView],
  },
  {
    slug: 'suite-sea-view',
    category: 'suites',
    name: {
      bg: 'Суит с морски изглед',
      en: 'Suite with Sea View',
    },
    shortDescription: {
      bg: 'Суит с морски изглед, балкон, спалня и кът за отдих. Подходящ за гости, които искат повече комфорт, отделно пространство и гледка към морето.',
      en: 'A sea-view suite with balcony, bedroom, and a separate living area. A strong choice for guests who want more comfort, more space, and a view of the sea.',
    },
    detailedDescription: {
      bg: 'Частен суит от 30 m² със спалня с голямо двойно легло, дневна зона с разтегателен диван, балкон, тераса, морски изглед, самостоятелна баня, кафемашина и минибар. Кошара се предоставя при заявка.',
      en: 'A private 30 m² suite with a bedroom with one large double bed, living room with one sofa bed, balcony, terrace, sea view, ensuite bathroom, coffee machine, and minibar. A cot is available on request.',
    },
    viewType: {
      bg: 'Морски изглед',
      en: 'Sea view',
    },
    size: '30 m²',
    occupancy: {
      bg: 'До 2 възрастни',
      en: 'Up to 2 adults',
    },
    floorInfo: {
      bg: 'Спалня и кът за отдих',
      en: 'Bedroom and living area',
    },
    bestFor: {
      bg: 'Гости, които искат отделна зона за отдих, повече комфорт и морски изглед.',
      en: 'Guests who want a separate living area, more comfort, and a sea view.',
    },
    amenities: [
      amenities.freeWifi,
      amenities.airConditioning,
      amenities.seaView,
      amenities.balcony,
      amenities.terrace,
      amenities.ensuiteBathroom,
      amenities.flatScreenTv,
      amenities.coffeeMachine,
      amenities.minibar,
      amenities.sofaBed,
      amenities.hairdryer,
      amenities.freeToiletries,
    ],
    highlights: [
      { bg: 'Спалня: 1 голямо двойно легло', en: 'Bedroom: 1 large double bed' },
      { bg: 'Дневна: 1 разтегателен диван', en: 'Living room: 1 sofa bed' },
    ],
    sourceNote: {
      bg: '',
      en: '',
    },
    mainImage: roomImageMap.juniorSuiteSeaView,
    gallery: [roomImageMap.juniorSuiteSeaView],
  },
]
