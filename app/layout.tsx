import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { COMPANY_NAME, SITE_URL } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | Professionele Ongediertebestrijding`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    'Professionele ongediertebestrijding door heel Nederland. Snel ter plaatse, effectieve oplossingen en garantie op resultaat. Bel nu: 085 060 4269.',
  keywords: [
    'ongediertebestrijding',
    'ongedierte',
    'bestrijding',
    'ratten',
    'muizen',
    'bedwantsen',
    'wespen',
    'mieren',
    'kakkerlakken',
    'zilvervisjes',
    'Nederland',
    'landelijk',
    'spoedservice',
  ],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: COMPANY_NAME,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: COMPANY_NAME,
              description:
                'Professionele ongediertebestrijding door heel Nederland.',
              url: SITE_URL,
              telephone: '+31850604269',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'NL',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '00:00',
                closes: '23:59',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '200',
                bestRating: '5',
              },
              priceRange: '€€',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
