export type Locale = 'bg' | 'en'

export type LocalizedString = Record<Locale, string>

export interface NavLinkItem {
  label: LocalizedString
  to: string
}

export interface TrustMetric {
  label: LocalizedString
  value: string
  supportingText: LocalizedString
}

export interface SiteImage {
  src: string
  alt: LocalizedString
  caption?: LocalizedString
  source?: string
}

export interface RoomCategory {
  slug: string
  name: LocalizedString
  shortDescription: LocalizedString
  detailedDescription: LocalizedString
  viewType: LocalizedString
  size: string
  occupancy: LocalizedString
  floorInfo: LocalizedString
  bestFor: LocalizedString
  amenities: LocalizedString[]
  highlights: LocalizedString[]
  sourceNote: LocalizedString
  mainImage: SiteImage
  gallery: SiteImage[]
}

export interface Testimonial {
  author: string
  country: string
  quote: LocalizedString
  source: string
}

export interface FaqItem {
  question: LocalizedString
  answer: LocalizedString
}

export interface GuideCard {
  title: LocalizedString
  description: LocalizedString
  walkingTime: LocalizedString
}
