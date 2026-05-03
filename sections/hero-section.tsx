'use client'

import { Phone, Clock, CheckCircle2, Star, Users, ArrowRight } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-100/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-50/40 rounded-full blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:pt-32 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-hero-fade-in">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cta-600/20 bg-cta-600/5 px-4 py-2 text-sm font-semibold text-cta-600">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cta-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cta-600" />
                </span>
                SPOEDSERVICE – VANDAAG NOG GEHOLPEN
              </span>
            </div>

            <h1 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl font-heading">
              Last van{' '}
              <span className="text-brand-600">
                ongedierte
              </span>
              ?
            </h1>

            <p className="mb-8 text-lg text-gray-500 sm:text-xl lg:pr-8 leading-relaxed">
              Binnen 24 uur professionele hulp bij jou op locatie.
              Effectief, discreet en met garantie op resultaat.
            </p>

            <div className="mb-8 space-y-3">
              {[
                { icon: Clock, text: 'Binnen 24 uur hulp' },
                { icon: CheckCircle2, text: 'Effectieve oplossingen' },
                { icon: Star, text: '10+ jaar ervaring' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900">
                    <item.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-base font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a href={PHONE_LINK} className="btn-cta text-center">
                <Phone className="h-5 w-5" />
                BEL NU: {PHONE_NUMBER}
              </a>
              <Link
                href="/contact"
                className="btn-cta-outline text-center"
              >
                Gratis advies
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <Image src="/google-icoon.png" alt="Google" width={18} height={18} className="mix-blend-multiply" />
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-gray-700">4.9/5</span>
                <span>op Google</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-gray-400" />
                <span><strong className="text-gray-700">200+</strong> klanten geholpen</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-hero-fade-in">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/ongedierte-bescherming.png"
                  alt="Professionele ongediertebestrijding"
                  width={600}
                  height={600}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>

              <div className="absolute -top-4 -right-4 rounded-2xl bg-white p-4 shadow-card border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl">
                    <Image src="/google-icoon.png" alt="Google" width={28} height={28} className="mix-blend-multiply" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm font-bold text-gray-900">4.9 / 5.0</div>
                    <div className="text-xs text-gray-500">Google Reviews</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-card border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Binnen 24 uur</div>
                    <div className="text-xs text-gray-500">Bij u ter plaatse</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
