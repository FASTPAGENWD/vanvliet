'use client'

import { Phone } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK } from '@/lib/utils'

export function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden animate-slide-up">
      <div className="bg-gradient-to-t from-black/10 to-transparent pb-0 pt-4">
        <a
          href={PHONE_LINK}
          className="flex items-center justify-center gap-3 bg-cta-600 px-6 py-4 text-lg font-bold text-white shadow-2xl transition-colors active:bg-cta-700"
        >
          <Phone className="h-5 w-5" />
          BEL NU: {PHONE_NUMBER}
        </a>
      </div>
    </div>
  )
}
