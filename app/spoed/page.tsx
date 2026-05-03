import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import { CTASection } from '@/components/cta-section'
import { SpoedContent } from './content'

export const metadata: Metadata = {
  title: 'Spoedservice | Vandaag Nog Geholpen',
  description:
    'Acute ongedierteoverlast? Onze spoedservice is 24/7 beschikbaar. Dezelfde dag nog ter plaatse. Bel nu: 085 060 4269.',
}

export default function SpoedPage() {
  return (
    <>
      <Navbar />
      <main>
        <SpoedContent />
        <CTASection
          title="Bel nu voor spoedservice"
          subtitle="Wacht niet langer. Onze specialisten zijn direct beschikbaar om u te helpen."
        />
      </main>
      <Footer />

    </>
  )
}
