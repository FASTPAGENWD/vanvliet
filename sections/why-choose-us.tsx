'use client'

import { Zap, EyeOff, ShieldCheck, Award } from 'lucide-react'
import { MotionWrapper, StaggerContainer, StaggerItem } from '@/components/motion-wrapper'
import { AnimatedCounter } from '@/components/animated-counter'

const features = [
  {
    icon: Zap,
    title: 'Snelle Service',
    description: 'Binnen 24 uur ter plaatse. Bij spoed dezelfde dag nog geholpen.',
  },
  {
    icon: EyeOff,
    title: 'Discreet',
    description: 'Onopvallende voertuigen en discrete werkwijze. Uw privacy is gewaarborgd.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantie',
    description: 'Wij garanderen resultaat. Komt het ongedierte terug? Wij komen gratis terug.',
  },
  {
    icon: Award,
    title: 'Ervaren Specialisten',
    description: 'Meer dan 10 jaar ervaring in professionele ongediertebestrijding.',
  },
]

const stats = [
  { value: 200, suffix: '+', label: 'Klanten geholpen' },
  { value: 10, suffix: '+', label: 'Jaar ervaring' },
  { value: 24, suffix: '/7', label: 'Bereikbaar' },
  { value: 4, suffix: '.9', label: 'Google score' },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-surface-50">
      <div className="container-narrow">
        <MotionWrapper variant="fade-up" className="mb-12 text-center">
          <span className="badge mb-4 inline-block">Waarom Wij</span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl font-heading">
            Waarom kiezen voor Ongediertecheck?
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            Wij combineren snelheid, vakmanschap en klanttevredenheid voor het beste resultaat.
          </p>
        </MotionWrapper>

        <StaggerContainer className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group rounded-2xl bg-white p-6 border border-gray-100 transition-all duration-300 hover:shadow-card hover:-translate-y-1 h-full">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 transition-transform group-hover:scale-105">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <MotionWrapper variant="fade-up">
          <div className="grid grid-cols-2 gap-6 rounded-3xl bg-gray-900 p-8 sm:grid-cols-4 sm:p-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-white sm:text-4xl">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
