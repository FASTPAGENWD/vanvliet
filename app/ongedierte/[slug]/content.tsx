'use client'

import { motion } from 'framer-motion'
import {
  Phone,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK } from '@/lib/utils'
import { MotionWrapper, StaggerContainer, StaggerItem } from '@/components/motion-wrapper'
import { PestIcon } from '@/components/pest-icons'
import type { Pest } from '@/data/pests'
import Link from 'next/link'

interface PestContentProps {
  pest: Pest
}

export function PestContent({ pest }: PestContentProps) {
  return (
    <>
      <section className="relative bg-gray-900 pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDB2LTJoMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex items-center gap-2 text-sm text-white/40">
                <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link href="/diensten" className="hover:text-white/70 transition-colors">Diensten</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-white/70">{pest.name}</span>
              </div>

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                <PestIcon slug={pest.slug} className="h-9 w-9 text-white" />
              </div>
              <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl font-heading tracking-tight">
                {pest.heroTitle}
              </h1>
              <p className="mb-8 text-lg text-white/60 max-w-lg">
                {pest.heroSubtitle}
              </p>

              <div className="mb-8 space-y-3">
                {[
                  { icon: Clock, text: 'Binnen 24 uur hulp' },
                  { icon: Shield, text: 'Garantie op resultaat' },
                  { icon: Zap, text: 'Veilig en effectief' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-white/80">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cta-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-cta-700 hover:shadow-2xl hover:scale-[1.02]">
                  <Phone className="h-5 w-5" />
                  BEL NU: {PHONE_NUMBER}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
                >
                  Gratis advies
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl bg-white/5 backdrop-blur-sm p-12 border border-white/10">
                <div className="flex flex-col items-center text-white">
                  <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-3xl bg-white/10">
                    <PestIcon slug={pest.slug} className="h-20 w-20" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pest.name} Bestrijding</h3>
                  <p className="text-white/50">Professioneel & met garantie</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <MotionWrapper variant="slide-left">
              <span className="badge mb-4 inline-block">Het Probleem</span>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl font-heading">
                Wat u moet weten over {pest.pluralName}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {pest.problemDescription}
              </p>
              <div className="rounded-2xl bg-red-50 border border-red-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-cta-600" />
                  <h3 className="font-bold text-gray-900">Waarom snel handelen?</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pest.whyActFast}
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper variant="slide-right">
              <div className="rounded-2xl bg-surface-50 p-8 border border-gray-100">
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  Gevaren van {pest.pluralName}
                </h3>
                <div className="space-y-4">
                  {pest.dangers.map((danger, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cta-100 flex-shrink-0 mt-0.5">
                        <AlertTriangle className="h-3.5 w-3.5 text-cta-600" />
                      </div>
                      <span className="text-gray-700">{danger}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-50">
        <div className="container-narrow">
          <MotionWrapper variant="fade-up" className="mb-12 text-center">
            <span className="badge mb-4 inline-block">Onze Aanpak</span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl font-heading">
              Hoe wij {pest.pluralName} bestrijden
            </h2>
            <p className="mx-auto max-w-3xl text-gray-500">
              {pest.solutionDescription}
            </p>
          </MotionWrapper>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pest.benefits.map((benefit, i) => (
              <StaggerItem key={i}>
                <div className="rounded-2xl bg-white p-6 border border-gray-100 text-center h-full">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900">{benefit}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-gray-900 py-12 px-4">
        <MotionWrapper variant="fade-up">
          <div className="container-narrow flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white">{pest.heroTitle}</h3>
              <p className="text-white/50">Neem nu contact op voor directe hulp.</p>
            </div>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 rounded-2xl bg-cta-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-cta-700 hover:shadow-2xl hover:scale-[1.02] whitespace-nowrap"
            >
              <Phone className="h-5 w-5" />
              {PHONE_NUMBER}
            </a>
          </div>
        </MotionWrapper>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <MotionWrapper variant="fade-up" className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl font-heading">
              Ons werkproces
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500">
              Van melding tot resultaat – zo werken wij.
            </p>
          </MotionWrapper>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '1', title: 'Contact', desc: 'Bel ons of vul het contactformulier in.' },
              { step: '2', title: 'Inspectie', desc: 'Grondige inspectie van de situatie ter plaatse.' },
              { step: '3', title: 'Bestrijding', desc: 'Professionele behandeling met effectieve middelen.' },
              { step: '4', title: 'Garantie', desc: 'Controle en garantie op het resultaat.' },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="relative rounded-2xl border border-gray-100 bg-white p-6 text-center h-full">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
