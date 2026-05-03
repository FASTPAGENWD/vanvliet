import Link from 'next/link'
import { Phone, Mail, MapPin, Shield, Clock, CheckCircle2 } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK, COMPANY_NAME } from '@/lib/utils'

const pestLinks = [
  { href: '/ongedierte/bedwantsen', label: 'Bedwantsen' },
  { href: '/ongedierte/ratten', label: 'Ratten' },
  { href: '/ongedierte/muizen', label: 'Muizen' },
  { href: '/ongedierte/wespen', label: 'Wespen' },
  { href: '/ongedierte/mieren', label: 'Mieren' },
  { href: '/ongedierte/kakkerlakken', label: 'Kakkerlakken' },
  { href: '/ongedierte/zilvervisjes', label: 'Zilvervisjes' },
]

const companyLinks = [
  { href: '/', label: 'Home' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/over-ons', label: 'Over Ons' },
  { href: '/spoed', label: 'Spoedservice' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                <Shield className="h-4.5 w-4.5 text-gray-900" />
              </div>
              <span className="text-lg font-bold text-white font-heading tracking-tight">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Professionele ongediertebestrijding door heel Nederland.
              Snel, effectief en met garantie op resultaat.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm">
                <CheckCircle2 className="h-4 w-4 text-brand-500 flex-shrink-0" />
                <span>Gecertificeerd bedrijf</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Clock className="h-4 w-4 text-brand-500 flex-shrink-0" />
                <span>24/7 spoedservice</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <CheckCircle2 className="h-4 w-4 text-brand-500 flex-shrink-0" />
                <span>Garantie op resultaat</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
              Ongedierte
            </h3>
            <ul className="space-y-2.5">
              {pestLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
              Bedrijf
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href={PHONE_LINK}
                className="flex items-center gap-3 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 transition-colors group-hover:bg-cta-600 group-hover:border-cta-600">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Bel ons</div>
                  <div className="text-sm font-semibold text-white">{PHONE_NUMBER}</div>
                </div>
              </a>
              <a
                href="mailto:ongediertejansen@hotmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 transition-colors group-hover:bg-brand-600 group-hover:border-brand-600">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">E-mail</div>
                  <div className="text-sm font-semibold text-white">ongediertejansen@hotmail.com</div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 flex-shrink-0">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Werkgebied</div>
                  <div className="text-sm text-white">Heel Nederland</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} {COMPANY_NAME}. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              <Link href="/contact" className="text-xs text-gray-500 transition-colors hover:text-gray-300">
                Privacybeleid
              </Link>
              <Link href="/contact" className="text-xs text-gray-500 transition-colors hover:text-gray-300">
                Algemene voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
