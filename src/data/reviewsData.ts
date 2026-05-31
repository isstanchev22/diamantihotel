import type { Testimonial } from '../types/content'

export const testimonials: Testimonial[] = [
  {
    author: 'Roxana M.',
    country: 'Romania',
    quote: {
      bg: 'Гледката от балкона беше точна като на снимките. Закуската на терасата и отношението на екипа ни накараха да удължим престоя.',
      en: 'The balcony view matched the photos exactly. Terrace breakfast and the team’s care made us extend our stay.',
    },
    source: 'Booking.com',
  },
  {
    author: 'Daniel H.',
    country: 'United Kingdom',
    quote: {
      bg: 'Локацията е идеална за разходки в Стария град - навсякъде стигаш пеша за минути. Отлична комуникация преди пристигане.',
      en: 'The location is perfect for old-town walks, everything is minutes away on foot. Excellent communication before arrival.',
    },
    source: 'Booking.com',
  },
  {
    author: 'Ewa K.',
    country: 'Poland',
    quote: {
      bg: 'Студиото беше просторно и добре организирано, а морската тераса направи престоя ни много по-специален.',
      en: 'The studio was spacious and well arranged, and the sea-view terrace made our stay truly special.',
    },
    source: 'Tripadvisor',
  },
  {
    author: 'Michael S.',
    country: 'USA',
    quote: {
      bg: 'Тук не е безличен хотел. Чувства се семейна грижа, а практичните инструкции за паркиране ни спестиха много време.',
      en: 'This is not an impersonal hotel. You feel family care, and the parking guidance saved us significant time.',
    },
    source: 'Tripadvisor',
  },
]
