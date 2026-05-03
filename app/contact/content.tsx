'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK } from '@/lib/utils'
import { MotionWrapper } from '@/components/motion-wrapper'

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
              Contact
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Heeft u last van ongedierte? Neem direct contact met ons op. Wij helpen u graag!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <MotionWrapper variant="slide-left">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl font-heading">
                Stuur ons een bericht
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl bg-brand-50 p-8 text-center"
                >
                  <CheckCircle2 className="mx-auto h-16 w-16 text-brand-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bericht verzonden!</h3>
                  <p className="text-gray-600">
                    Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        Naam *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        Telefoon *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                        placeholder="Uw telefoonnummer"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      E-mailadres
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                      placeholder="Uw e-mailadres"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      Type ongedierte
                    </label>
                    <select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20">
                      <option value="">Selecteer type ongedierte</option>
                      <option value="bedwantsen">Bedwantsen</option>
                      <option value="ratten">Ratten</option>
                      <option value="muizen">Muizen</option>
                      <option value="wespen">Wespen</option>
                      <option value="mieren">Mieren</option>
                      <option value="kakkerlakken">Kakkerlakken</option>
                      <option value="zilvervisjes">Zilvervisjes</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      Uw bericht *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 resize-none"
                      placeholder="Beschrijf uw situatie..."
                    />
                  </div>
                  <button type="submit" className="btn-cta w-full sm:w-auto">
                    <Send className="h-5 w-5" />
                    Verstuur bericht
                  </button>
                </form>
              )}
            </MotionWrapper>

            <MotionWrapper variant="slide-right">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl font-heading">
                Direct contact
              </h2>
              <p className="mb-8 text-gray-600">
                Liever direct contact? Bel ons of stuur een e-mail. Wij zijn 7 dagen per week bereikbaar.
              </p>

              <div className="space-y-6">
                <a href={PHONE_LINK} className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cta-600/10 transition-colors group-hover:bg-cta-600 flex-shrink-0">
                    <Phone className="h-5 w-5 text-cta-600 transition-colors group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telefoon</div>
                    <div className="text-lg font-bold text-cta-600">{PHONE_NUMBER}</div>
                    <div className="text-xs text-gray-500">Snelste manier van contact</div>
                  </div>
                </a>

                <a href="mailto:ongediertejansen@hotmail.com" className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 transition-colors group-hover:bg-brand-600 flex-shrink-0">
                    <Mail className="h-5 w-5 text-brand-600 transition-colors group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">E-mail</div>
                    <div className="text-brand-600">ongediertejansen@hotmail.com</div>
                    <div className="text-xs text-gray-500">Reactie binnen 2 uur</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Werkgebied</div>
                    <div className="text-gray-600">Heel Nederland</div>
                    <div className="text-xs text-gray-500">Snel ter plaatse</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 flex-shrink-0">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Bereikbaarheid</div>
                    <div className="text-gray-600">7 dagen per week</div>
                    <div className="text-xs text-gray-500">24/7 voor spoedgevallen</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-cta-600/5 border border-cta-200 p-6">
                <h3 className="mb-2 font-bold text-gray-900">Spoed?</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Bij acute ongedierteoverlast zijn wij dezelfde dag ter plaatse.
                </p>
                <a href={PHONE_LINK} className="btn-cta w-full text-center">
                  <Phone className="h-5 w-5" />
                  BEL NU: {PHONE_NUMBER}
                </a>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </>
  )
}
