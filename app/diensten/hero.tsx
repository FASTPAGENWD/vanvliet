'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK } from '@/lib/utils'

export function DienstenHero() {
  return (
    <section className="relative bg-gray-900 pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDB2LTJoMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl font-heading tracking-tight">
            Onze Diensten
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/60">
            Professionele bestrijding van alle soorten ongedierte. Snel, effectief en met garantie op resultaat.
          </p>
          <a href={PHONE_LINK} className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-gray-900 shadow-xl transition-all hover:shadow-2xl hover:scale-[1.02]">
            <Phone className="h-5 w-5" />
            BEL NU: {PHONE_NUMBER}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
