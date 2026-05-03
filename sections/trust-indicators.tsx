'use client'

import { Shield, Award, CheckCircle2 } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/motion-wrapper'
import Image from 'next/image'

const trustItems = [
  {
    icon: null,
    isGoogle: true,
    label: '4.9 / 5.0',
    sublabel: 'Google Reviews',
  },
  {
    icon: Shield,
    isGoogle: false,
    label: 'Gecertificeerd',
    sublabel: 'Erkend bedrijf',
  },
  {
    icon: Award,
    isGoogle: false,
    label: 'Garantie',
    sublabel: 'Op resultaat',
  },
  {
    icon: CheckCircle2,
    isGoogle: false,
    label: '10+ jaar',
    sublabel: 'Ervaring',
  },
]

export function TrustIndicators() {
  return (
    <section className="relative -mt-8 z-10 px-4 sm:px-6 lg:px-8">
      <StaggerContainer className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {trustItems.map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-card border border-gray-100 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900">
                  {item.isGoogle ? (
                    <Image src="/google-icoon.png" alt="Google" width={28} height={28} className="rounded-sm brightness-0 invert" />
                  ) : (
                    item.icon && <item.icon className="h-6 w-6 text-white" />
                  )}
                </div>
                <div>
                  <div className="text-base font-bold text-gray-900">{item.label}</div>
                  <div className="text-xs text-gray-400">{item.sublabel}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  )
}
