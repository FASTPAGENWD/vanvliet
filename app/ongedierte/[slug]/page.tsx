import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import { CTASection } from '@/components/cta-section'
import { FAQSection } from '@/sections/faq-section'
import { ReviewsSection } from '@/sections/reviews-section'
import { pests, getPestBySlug, getAllPestSlugs } from '@/data/pests'
import { SITE_URL, COMPANY_NAME } from '@/lib/utils'
import { PestContent } from './content'

interface PestPageProps {
  params: { slug: string }
}

function getFAQSchema(pest: NonNullable<ReturnType<typeof getPestBySlug>>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pest.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

function getServiceSchema(pest: NonNullable<ReturnType<typeof getPestBySlug>>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${pest.name} Bestrijding`,
    description: pest.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
      telephone: '+31850604269',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nederland',
    },
  }
}

export async function generateStaticParams() {
  return getAllPestSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PestPageProps): Promise<Metadata> {
  const pest = getPestBySlug(params.slug)
  if (!pest) return {}

  return {
    title: pest.metaTitle,
    description: pest.metaDescription,
    openGraph: {
      title: pest.metaTitle,
      description: pest.metaDescription,
      url: `${SITE_URL}/ongedierte/${pest.slug}`,
      type: 'website',
    },
  }
}

export default function PestPage({ params }: PestPageProps) {
  const pest = getPestBySlug(params.slug)
  if (!pest) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(pest)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema(pest)) }}
      />
      <Navbar />
      <main>
        <PestContent pest={pest} />
        <CTASection
          variant="green"
          title={`Hulp nodig bij ${pest.pluralName}?`}
          subtitle="Onze specialisten staan klaar om u te helpen. Bel nu voor directe hulp."
        />
        <ReviewsSection />
        <FAQSection
          title={`Veelgestelde vragen over ${pest.pluralName}`}
          subtitle="Hieronder vindt u antwoorden op veelgestelde vragen."
          faqs={pest.faqs}
        />
        <CTASection
          title="Direct hulp nodig?"
          subtitle="Wacht niet langer met het aanpakken van uw ongedierteprobleem. Bel nu!"
        />
      </main>
      <Footer />

    </>
  )
}
