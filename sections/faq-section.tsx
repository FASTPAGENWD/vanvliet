'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { MotionWrapper } from '@/components/motion-wrapper'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs?: FAQ[]
}

const defaultFaqs: FAQ[] = [
  {
    question: 'Wat kost ongediertebestrijding?',
    answer: 'De kosten van ongediertebestrijding hangen af van het type ongedierte, de ernst van de plaag en de grootte van de ruimte. Neem contact met ons op voor een vrijblijvende offerte. Wij hanteren transparante prijzen zonder verborgen kosten.',
  },
  {
    question: 'Hoe snel kunnen jullie komen?',
    answer: 'Bij reguliere meldingen zijn wij binnen 24 uur bij u ter plaatse. Bij spoedsituaties bieden wij dezelfde dag nog hulp. Bel ons voor de snelste beschikbaarheid.',
  },
  {
    question: 'Is de bestrijding veilig voor kinderen en huisdieren?',
    answer: 'Ja, wij gebruiken methoden en middelen die veilig zijn voor uw gezin en huisdieren. Onze specialisten adviseren u altijd over eventuele voorzorgsmaatregelen.',
  },
  {
    question: 'Geven jullie garantie op de bestrijding?',
    answer: 'Ja, wij geven garantie op al onze behandelingen. Als het ongedierte terugkeert binnen de garantieperiode, komen wij kosteloos terug om het probleem opnieuw te behandelen.',
  },
  {
    question: 'Werken jullie ook in het weekend?',
    answer: 'Ja, wij zijn 7 dagen per week bereikbaar. Voor spoedgevallen kunt u ons ook buiten kantoortijden bellen.',
  },
  {
    question: 'Moet ik mijn huis verlaten tijdens de behandeling?',
    answer: 'Dit hangt af van het type behandeling. Bij de meeste behandelingen kunt u gewoon thuisblijven. Onze specialist informeert u vooraf over wat u kunt verwachten.',
  },
]

export function FAQSection({
  title = 'Veelgestelde vragen',
  subtitle = 'Heeft u nog vragen? Neem gerust contact met ons op.',
  faqs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faqList = faqs || defaultFaqs

  return (
    <section className="section-padding bg-surface-50" id="faq">
      <div className="container-narrow">
        <MotionWrapper variant="fade-up" className="mb-12 text-center">
          <span className="badge mb-4 inline-block">FAQ</span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl font-heading">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">{subtitle}</p>
        </MotionWrapper>

        <MotionWrapper variant="fade-up" delay={0.1} className="mx-auto max-w-3xl">
          <div className="space-y-3">
            {faqList.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-white overflow-hidden transition-shadow hover:shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
