import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import { CTASection } from '@/components/cta-section'
import { ReviewsSection } from '@/sections/reviews-section'
import { OverOnsContent } from './content'

export const metadata: Metadata = {
  title: 'Over Ons',
  description:
    'Leer meer over Jansen Ongediertebestrijding. Al meer dan 10 jaar uw specialist in professionele ongediertebestrijding door heel Nederland.',
}

export default function OverOnsPage() {
  return (
    <>
      <Navbar />
      <main>
        <OverOnsContent />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />

    </>
  )
}
