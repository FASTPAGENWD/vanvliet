'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Award, Clock, CheckCircle2, Target, Heart, Lightbulb } from 'lucide-react'
import { MotionWrapper, StaggerContainer, StaggerItem } from '@/components/motion-wrapper'
import { AnimatedCounter } from '@/components/animated-counter'
import { PHONE_NUMBER, PHONE_LINK } from '@/lib/utils'
import { Phone } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Resultaatgericht',
    description: 'Wij stoppen niet tot het probleem volledig is opgelost. Garantie op resultaat.',
  },
  {
    icon: Heart,
    title: 'Klantgericht',
    description: 'Uw tevredenheid staat centraal. Wij luisteren, adviseren en leveren.',
  },
  {
    icon: Shield,
    title: 'Betrouwbaar',
    description: 'Transparante werkwijze, eerlijke prijzen en afspraken die wij nakomen.',
  },
  {
    icon: Lightbulb,
    title: 'Innovatief',
    description: 'Wij werken met de nieuwste technieken en middelen voor het beste resultaat.',
  },
]

const timeline = [
  { year: '2014', title: 'Opgericht', description: 'Start van Jansen Ongediertebestrijding.' },
  { year: '2017', title: 'Groei', description: 'Uitbreiding van het team en landelijke dekking.' },
  { year: '2020', title: '500+ klanten', description: 'Mijlpaal van 500 tevreden klanten bereikt.' },
  { year: '2024', title: 'Landelijk actief', description: 'Erkend als toonaangevend bedrijf in heel Nederland.' },
]

export function OverOnsContent() {
  return (
    <>
      <section className="relative bg-gray-900 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDB2LTJoMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl font-heading">
              Over Jansen Ongediertebestrijding
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Al meer dan 10 jaar uw betrouwbare partner in professionele ongediertebestrijding.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <MotionWrapper variant="slide-left">
              <span className="badge mb-4 inline-block">Ons Verhaal</span>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl font-heading">
                Vakmanschap en toewijding
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Jansen Ongediertebestrijding is opgericht met één doel: mensen snel en effectief helpen bij
                  ongedierteoverlast. Wat begon als een klein bedrijf, is uitgegroeid
                  tot een toonaangevend bestrijdingsbedrijf met landelijke dekking.
                </p>
                <p>
                  Ons team van gecertificeerde specialisten beschikt over jarenlange ervaring en
                  werkt met de nieuwste technieken en middelen. Wij geloven dat iedereen recht heeft
                  op een veilige, ongediertevrije leefomgeving.
                </p>
                <p>
                  Met meer dan 200 tevreden klanten en een gemiddelde Google-score van 4.9/5 zijn wij
                  trots op het vertrouwen dat onze klanten in ons stellen.
                </p>
              </div>
              <a href={PHONE_LINK} className="btn-cta mt-8 inline-flex">
                <Phone className="h-5 w-5" />
                BEL: {PHONE_NUMBER}
              </a>
            </MotionWrapper>

            <MotionWrapper variant="slide-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-brand-50 p-6 text-center">
                  <div className="text-3xl font-extrabold text-brand-700">
                    <AnimatedCounter target={200} suffix="+" />
                  </div>
                  <div className="mt-1 text-sm text-gray-600">Klanten geholpen</div>
                </div>
                <div className="rounded-2xl bg-yellow-50 p-6 text-center">
                  <div className="text-3xl font-extrabold text-yellow-700">4.9</div>
                  <div className="mt-1 text-sm text-gray-600">Google score</div>
                </div>
                <div className="rounded-2xl bg-blue-50 p-6 text-center">
                  <div className="text-3xl font-extrabold text-blue-700">
                    <AnimatedCounter target={10} suffix="+" />
                  </div>
                  <div className="mt-1 text-sm text-gray-600">Jaar ervaring</div>
                </div>
                <div className="rounded-2xl bg-purple-50 p-6 text-center">
                  <div className="text-3xl font-extrabold text-purple-700">24/7</div>
                  <div className="mt-1 text-sm text-gray-600">Bereikbaar</div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-50">
        <div className="container-narrow">
          <MotionWrapper variant="fade-up" className="mb-12 text-center">
            <span className="badge mb-4 inline-block">Onze Waarden</span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl font-heading">
              Waar wij voor staan
            </h2>
          </MotionWrapper>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-2xl bg-white p-6 shadow-soft h-full text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-500">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
