import { ArrivalSection } from '../components/sections/ArrivalSection'
import { ContactTeaserSection } from '../components/sections/ContactTeaserSection'
import { FaqTeaserSection } from '../components/sections/FaqTeaserSection'
import { GallerySection } from '../components/sections/GallerySection'
import { HeroSection } from '../components/sections/HeroSection'
import { OldTownSection } from '../components/sections/OldTownSection'
import { RestaurantPreviewSection } from '../components/sections/RestaurantPreviewSection'
import { ReviewsSection } from '../components/sections/ReviewsSection'
import { RoomsPreviewSection } from '../components/sections/RoomsPreviewSection'
import { TrustStripSection } from '../components/sections/TrustStripSection'
import { WeddingsTeaserSection } from '../components/sections/WeddingsTeaserSection'
import { WhyChooseSection } from '../components/sections/WhyChooseSection'
import { PageSeo } from '../components/ui/PageSeo'
import { SchemaScript } from '../components/ui/SchemaScript'
import { faqSchema, hotelSchema, localBusinessSchema } from '../data/schemaData'
import { seoDefaults } from '../data/siteData'

export function HomePage() {
  return (
    <>
      <PageSeo title={seoDefaults.title} description={seoDefaults.description} />
      <SchemaScript schema={hotelSchema} />
      <SchemaScript schema={localBusinessSchema} />
      <SchemaScript schema={faqSchema} />

      <HeroSection />
      <TrustStripSection />
      <RoomsPreviewSection />
      <WhyChooseSection />
      <RestaurantPreviewSection />
      <OldTownSection />
      <GallerySection />
      <ArrivalSection />
      <ReviewsSection />
      <WeddingsTeaserSection />
      <FaqTeaserSection />
      <ContactTeaserSection />
    </>
  )
}
