import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import { ContactContent } from './content'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Neem contact op met Jansen Ongediertebestrijding voor professionele ongediertebestrijding. Bel ons, stuur een bericht of vraag een offerte aan.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />

    </>
  )
}
