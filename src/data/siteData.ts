import type { LocalizedString, NavLinkItem, TrustMetric } from '../types/content'

export const bookingEngineUrl =
  'https://sky-eu1.clock-software.com/spa/pms-wbe/#/hotel/13742'

export const contactDetails = {
  phoneDisplay: '+359 550 22 640',
  phoneHref: 'tel:+35955022640',
  mobileDisplay: '+359 888 975 739',
  mobileHref: 'tel:+359888975739',
  email: 'contact@hoteldiamanti.com',
  address: {
    bg: 'ул. Морски скали / ул. Вълнобор 8, Стария град, 8130 Созопол',
    en: 'Morski Skali St / Valnobor 8, Old Town, 8130 Sozopol',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Hotel+Diamanti+Sozopol',
  whatsappHref: 'https://wa.me/359888975739',
}

export const navigationLinks: NavLinkItem[] = [
  { label: { bg: 'Начало', en: 'Home' }, to: '#home' },
  { label: { bg: 'Стаи и студиа', en: 'Rooms & Studios' }, to: '#rooms' },
  { label: { bg: 'Ресторант', en: 'Restaurant' }, to: '#restaurant' },
  {
    label: { bg: 'Сватби и събития', en: 'Weddings & Events' },
    to: '#weddings-events',
  },
  { label: { bg: 'Гид за Созопол', en: 'Sozopol Guide' }, to: '#sozopol-guide' },
  {
    label: { bg: 'Контакт и паркиране', en: 'Contact & Parking' },
    to: '#contact-parking',
  },
  { label: { bg: 'FAQ', en: 'FAQ' }, to: '#faq' },
]

export const heroContent = {
  title: {
    bg: 'Събудете се над морето в сърцето на Стария Созопол.',
    en: 'Wake up above the sea in the heart of Old Sozopol.',
  },
  subtitle: {
    bg: 'Семеен хотел на самия бряг - със sea-view стаи и студиа, закуска на терасата и няколко минути пеша до плажа, пристанището и най-красивите улици на Стария град.',
    en: 'A family-run waterfront stay with sea-view rooms, breakfast on the terrace, and short walks to the beach, harbour, and old-town streets.',
  },
  primaryCta: {
    bg: 'Провери наличност и цени',
    en: 'Check availability and prices',
  },
  secondaryCta: {
    bg: 'Виж стаите',
    en: 'See rooms',
  },
}

export const trustMetrics: TrustMetric[] = [
  {
    label: { bg: 'Booking оценка', en: 'Booking score' },
    value: '9.3',
    supportingText: {
      bg: '338+ реални отзива',
      en: '338+ verified reviews',
    },
  },
  {
    label: { bg: 'Локация', en: 'Location' },
    value: '9.9',
    supportingText: {
      bg: 'Сред най-високите оценки',
      en: 'Top-rated category',
    },
  },
  {
    label: { bg: 'Персонал', en: 'Staff' },
    value: '9.7',
    supportingText: {
      bg: 'Последователно силна оценка',
      en: 'Consistently high score',
    },
  },
  {
    label: { bg: 'Tripadvisor', en: 'Tripadvisor' },
    value: '4.3/5',
    supportingText: {
      bg: 'Добро общо представяне',
      en: 'Strong overall rating',
    },
  },
]

export const trustBadges: LocalizedString[] = [
  {
    bg: 'Семеен хотел с лично отношение',
    en: 'Family-run hospitality',
  },
  {
    bg: 'Waterfront позиция в Стария град',
    en: 'Waterfront old-town location',
  },
  {
    bg: 'Закуска на тераса с гледка към морето',
    en: 'Sea-view terrace breakfast',
  },
]

export const whyChoosePoints: LocalizedString[] = [
  {
    bg: 'Локация на първа линия в Стария град, където гледката е част от самия престой.',
    en: 'First-line old-town location where the view is part of the stay itself.',
  },
  {
    bg: 'Реални room категории с ясни разлики между изглед, етаж и конфигурация.',
    en: 'Real room categories with clear differences in view, floor, and setup.',
  },
  {
    bg: 'Тераса за закуска и вечеря с директен хоризонт към Св. Иван и Св. Петър.',
    en: 'Breakfast and dinner terrace with direct views toward St. Ivan and St. Peter.',
  },
  {
    bg: 'Плаж, пристанище и културни точки в рамките на удобна пешеходна дистанция.',
    en: 'Beach, harbour, and cultural spots within easy walking distance.',
  },
  {
    bg: 'Преди пристигане получавате ясни инструкции за достъп, паркиране и късно настаняване.',
    en: 'Before arrival, you get clear guidance for access, parking, and late check-in.',
  },
]

export const practicalInfo: LocalizedString[] = [
  {
    bg: 'Старият град има сезонни ограничения за автомобилен достъп и паркиране.',
    en: 'Old Town has seasonal access and parking restrictions for cars.',
  },
  {
    bg: 'Изпращаме точни насоки къде да спрете и как най-лесно да стигнете до входа с багаж.',
    en: 'We provide exact guidance on where to stop and how to reach the entrance with luggage.',
  },
  {
    bg: 'При пристигане след 22:00 уведомете екипа предварително, за да организираме посрещането.',
    en: 'For arrivals after 22:00, please notify us in advance so we can coordinate check-in.',
  },
]

export const oldTownHighlights: LocalizedString[] = [
  {
    bg: '3 минути пеша до пристанището',
    en: '3-minute walk to the harbour',
  },
  {
    bg: '5 минути до Централния плаж',
    en: '5 minutes to Central Beach',
  },
  {
    bg: 'Близо до църкви, галерии и летни сцени',
    en: 'Close to churches, galleries, and summer stages',
  },
]

export const ctas = {
  book: {
    bg: 'Провери наличност и цени',
    en: 'Check availability and prices',
  },
  viewRooms: {
    bg: 'Виж стаите',
    en: 'See rooms',
  },
  reserveTable: {
    bg: 'Резервирай маса',
    en: 'Reserve a table',
  },
  askWedding: {
    bg: 'Запитай за сватба',
    en: 'Ask about a wedding',
  },
  seeArrival: {
    bg: 'Виж как да стигнеш',
    en: 'See how to arrive',
  },
  contactUs: {
    bg: 'Свържи се с нас',
    en: 'Contact us',
  },
}

export const seoDefaults = {
  title: {
    bg: 'Hotel Diamanti | Семеен waterfront хотел в Стария Созопол',
    en: 'Hotel Diamanti | Family waterfront stay in Old Sozopol',
  },
  description: {
    bg: 'Стаи и студиа с морски изглед в Стария Созопол, закуска на тераса, семейно отношение и директен достъп до официалния booking engine.',
    en: 'Sea-view rooms and studios in Old Sozopol with terrace breakfast, family hospitality, and direct access to the official booking engine.',
  },
}
