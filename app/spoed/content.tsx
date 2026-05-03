'use client'

import { motion } from 'framer-motion'
import { Phone, AlertTriangle, Clock, Zap, Shield, ArrowRight } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK } from '@/lib/utils'
import { MotionWrapper, StaggerContainer, StaggerItem } from '@/components/motion-wrapper'
import { PestIcon } from '@/components/pest-icons'
import Link from 'next/link'

const urgentPests = [
  { name: 'Ratten', slug: 'ratten', urgency: 'Gezondheidsrisico + schade' },
  { name: 'Bedwantsen', slug: 'bedwantsen', urgency: 'Snelle verspreiding' },
  { name: 'Wespen', slug: 'wespen', urgency: 'Gevaar voor steken' },
  { name: 'Kakkerlakken', slug: 'kakkerlakken', urgency: 'Hygiënerisico' },
]

const steps = [
  { step: '1', title: 'Bel ons', description: 'Neem direct telefonisch contact op. Wij staan klaar.' },
  { step: '2', title: 'Inspectie', description: 'Onze specialist komt dezelfde dag voor een inspectie.' },
  { step: '3', title: 'Behandeling', description: 'Directe bestrijding met professionele middelen.' },
  { step: '4', title: 'Garantie', description: 'Controle en garantie dat het probleem is opgelost.' },
]

export function SpoedContent() {
  return (
    <>
      <section className="relative bg-cta-600 pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDB2LTJoMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white border border-white/20">
              <AlertTriangle className="h-4 w-4" />
              SPOEDSERVICE – 24/7 BESCHIKBAAR
            </div>
            <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl font-heading tracking-tight">
              Acute ongedierteoverlast?
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
              Wacht niet langer. Onze specialisten zijn vandaag nog bij u ter plaatse.
              Snel, professioneel en met garantie.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-gray-900 shadow-xl transition-all hover:shadow-2xl hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5" />
                BEL NU: {PHONE_NUMBER}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
              >
                Stuur bericht
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <MotionWrapper variant="fade-up" className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl font-heading">
              Urgente situaties
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500">
              Bij deze ongedierte is snel handelen essentieel om schade en gezondheidsrisico&apos;s te beperken.
            </p>
          </MotionWrapper>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {urgentPests.map((pest) => (
              <StaggerItem key={pest.slug}>
                <Link
                  href={`/ongedierte/${pest.slug}`}
                  className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all hover:border-gray-200 hover:shadow-card hover:-translate-y-1"
                >
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white group-hover:bg-cta-600 transition-colors">
                    <PestIcon slug={pest.slug} className="h-7 w-7" />
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-gray-900">{pest.name}</h3>
                  <p className="text-sm text-cta-600 font-medium">{pest.urgency}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-surface-50">
        <div className="container-narrow">
          <MotionWrapper variant="fade-up" className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl font-heading">
              Hoe werkt onze spoedservice?
            </h2>
          </MotionWrapper>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <StaggerItem key={item.step}>
                <div className="relative rounded-2xl bg-white p-6 border border-gray-100 text-center h-full">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <MotionWrapper variant="fade-up" delay={0.2} className="mt-12">
            <div className="rounded-2xl bg-gray-900 p-8 sm:p-12">
              <div className="grid gap-8 sm:grid-cols-3 text-center text-white">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Dezelfde dag</div>
                    <div className="text-sm text-gray-400">Ter plaatse bij spoed</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">24/7 bereikbaar</div>
                    <div className="text-sm text-gray-400">Ook in het weekend</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Garantie</div>
                    <div className="text-sm text-gray-400">Op elk resultaat</div>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  )
}
