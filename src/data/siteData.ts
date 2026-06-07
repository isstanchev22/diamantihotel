import type { LocalizedString, NavLinkItem, TrustMetric } from '../types/content'

export const bookingEngineUrl =
  'https://sky-eu1.clock-software.com/spa/pms-wbe/#/hotel/13742'

export const brandLogoUrl = 'https://i.ibb.co/0pJvfHVP/Untitled-Artwork-Edited.png'

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
    bg: 'Събудете се над морето в Стария Созопол.',
    en: 'Wake up above the sea in Old Sozopol.',
  },
  subtitle: {
    bg: 'В Хотел Диаманти морето е част от всеки момент - от първата гледка сутрин, през закуската на терасата, до вечерните разходки из града.',
    en: 'Hotel Diamanti sits right on the waterfront, with sea-view rooms and studios, terrace breakfast, and the old town just a few steps away.',
  },
  primaryCta: {
    bg: 'Провери наличност',
    en: 'Check availability',
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
    bg: 'Хотел с лично отношение',
    en: 'Hotel with personal service',
  },
  {
    bg: 'На самия бряг в Стария град',
    en: 'Waterfront old-town location',
  },
  {
    bg: 'Закуска на тераса с гледка към морето',
    en: 'Sea-view terrace breakfast',
  },
]

export const whyChoosePoints: LocalizedString[] = [
  {
    bg: 'Първа линия в Стария град, където морето присъства още от първото сутрешно кафе.',
    en: 'A first-line Old Town address where the sea is part of the morning, not just the view.',
  },
  {
    bg: 'Закуска и вечеря на тераса с хоризонт към Св. Иван, Св. Петър и тихия ритъм на залива.',
    en: 'Breakfast and dinner on a terrace facing St. Ivan, St. Peter, and the quiet rhythm of the bay.',
  },
  {
    bg: 'Плажът, пристанището, галериите и калдъръмените улици са на кратка разходка разстояние.',
    en: 'The beach, harbour, galleries, and cobbled lanes are all an easy walk away.',
  },
  {
    bg: 'Преди пристигане получавате спокойни и точни насоки за достъп, паркиране и късно настаняване.',
    en: 'Before arrival, you get calm, practical guidance for access, parking, and late check-in.',
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
    bg: 'Провери наличност',
    en: 'Check availability',
  },
  viewRooms: {
    bg: 'Разгледай стаите',
    en: 'Explore rooms',
  },
  reserveTable: {
    bg: 'Резервирай маса',
    en: 'Reserve a table',
  },
  askWedding: {
    bg: 'Попитай за сватба',
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
    bg: 'Hotel Diamanti | Хотел на самия бряг в Стария Созопол',
    en: 'Hotel Diamanti | Waterfront hotel in Old Sozopol',
  },
  description: {
    bg: 'Стаи и студиа с морски изглед в Стария Созопол, закуска на тераса, лично отношение и директна резервация през официалната система.',
    en: 'Sea-view rooms and studios in Old Sozopol with terrace breakfast, personal service, and direct access to the official booking engine.',
  },
}
