import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import { CTASection } from '@/components/cta-section'
import { ServicesGrid } from '@/sections/services-grid'
import { WhyChooseUs } from '@/sections/why-choose-us'
import { FAQSection } from '@/sections/faq-section'
import { DienstenHero } from './hero'

export const metadata: Metadata = {
  title: 'Diensten | Ongediertebestrijding',
  description:
    'Bekijk al onze diensten voor professionele ongediertebestrijding. Van ratten en muizen tot bedwantsen en wespen. Snel en effectief.',
}

export default function DienstenPage() {
  return (
    <>
      <Navbar />
      <main>
        <DienstenHero />
        <ServicesGrid />
        <WhyChooseUs />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />

    </>
  )
}
