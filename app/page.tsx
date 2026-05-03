import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import { CTASection } from '@/components/cta-section'
import { HeroSection } from '@/sections/hero-section'
import { TrustIndicators } from '@/sections/trust-indicators'
import { ServicesGrid } from '@/sections/services-grid'
import { WhyChooseUs } from '@/sections/why-choose-us'
import { ReviewsSection } from '@/sections/reviews-section'
import { FAQSection } from '@/sections/faq-section'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustIndicators />
        <ServicesGrid />
        <CTASection
          variant="green"
          title="Snel hulp nodig?"
          subtitle="Wacht niet langer. Neem nu contact op en wij helpen u vandaag nog."
        />
        <WhyChooseUs />
        <ReviewsSection />
        <FAQSection />
        <CTASection
          title="Direct hulp nodig?"
          subtitle="Onze specialisten staan 24/7 voor u klaar. Bel nu voor snelle, professionele hulp bij elk ongedierteprobleem."
        />
      </main>
      <Footer />

    </>
  )
}
