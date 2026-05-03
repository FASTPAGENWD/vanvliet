'use client'

import { Phone, ArrowRight } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK } from '@/lib/utils'
import { MotionWrapper } from './motion-wrapper'
import Link from 'next/link'

interface CTASectionProps {
  title?: string
  subtitle?: string
  variant?: 'red' | 'green' | 'dark'
}

export function CTASection({
  title = 'Direct hulp nodig?',
  subtitle = 'Onze specialisten staan voor u klaar. Bel nu voor snelle, professionele hulp.',
  variant = 'red',
}: CTASectionProps) {
  const bgClass =
    variant === 'red'
      ? 'bg-cta-600'
      : variant === 'green'
        ? 'bg-brand-700'
        : 'bg-gray-900'

  return (
    <section className={`${bgClass} section-padding relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDB2LTJoMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      <div className="container-narrow relative text-center">
        <MotionWrapper variant="fade-up">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading tracking-tight">
            {title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
            {subtitle}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-gray-900 shadow-xl transition-all hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" />
              BEL NU: {PHONE_NUMBER}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
            >
              Stuur een bericht
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
