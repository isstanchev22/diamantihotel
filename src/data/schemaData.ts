import { contactDetails, bookingEngineUrl } from './siteData'
import { faqItems } from './faqData'

export const hotelSchema = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Hotel Diamanti',
  description:
    'Family-run waterfront hotel in Old Sozopol with sea-view rooms, terrace breakfast, and easy walking access to beach and harbour.',
  url: 'https://hoteldiamanti.com',
  telephone: contactDetails.phoneDisplay,
  email: contactDetails.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Valnobor 8, Old Town',
    addressLocality: 'Sozopol',
    postalCode: '8130',
    addressCountry: 'BG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.426228,
    longitude: 27.697992,
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Sea-view terraces' },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurant' },
    { '@type': 'LocationFeatureSpecification', name: 'Free WiFi' },
  ],
  makesOffer: {
    '@type': 'Offer',
    url: bookingEngineUrl,
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Hotel Diamanti',
  telephone: contactDetails.phoneDisplay,
  email: contactDetails.email,
  image: 'https://hoteldiamanti.com/images/stories/hotel/slaide4.jpg',
  // TODO: Replace with final production asset URL hosted on the project domain.
  priceRange: '$$',
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question.bg,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer.bg,
    },
  })),
}
