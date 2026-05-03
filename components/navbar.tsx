'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, Menu, X, Shield, ChevronDown } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK, COMPANY_NAME } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/diensten',
    label: 'Diensten',
    children: [
      { href: '/ongedierte/bedwantsen', label: 'Bedwantsen' },
      { href: '/ongedierte/ratten', label: 'Ratten' },
      { href: '/ongedierte/muizen', label: 'Muizen' },
      { href: '/ongedierte/wespen', label: 'Wespen' },
      { href: '/ongedierte/mieren', label: 'Mieren' },
      { href: '/ongedierte/kakkerlakken', label: 'Kakkerlakken' },
      { href: '/ongedierte/zilvervisjes', label: 'Zilvervisjes' },
    ],
  },
  { href: '/over-ons', label: 'Over Ons' },
  { href: '/spoed', label: 'Spoed' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileSubmenu, setMobileSubmenu] = useState(false)

  const toggleMobileSubmenu = useCallback(() => {
    setMobileSubmenu((prev) => !prev)
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 transition-transform group-hover:scale-105">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold font-heading text-gray-900 tracking-tight">
                {COMPANY_NAME}
              </span>
            </Link>

            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                    >
                      {link.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Link>
                    <AnimatePresence>
                      {openDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full mt-1 w-56 rounded-xl bg-white p-2 shadow-lg border border-gray-100"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-gray-900 ${
                      link.href === '/spoed'
                        ? 'text-cta-600 hover:bg-red-50 hover:text-cta-700'
                        : 'text-gray-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PHONE_LINK}
                className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-gray-800 hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />
                {PHONE_NUMBER}
              </a>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
                aria-label="Menu openen"
              >
                {isMobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-bold font-heading tracking-tight">
                {COMPANY_NAME}
              </span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
                aria-label="Menu sluiten"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.children ? (
                    <div>
                      <button
                        onClick={toggleMobileSubmenu}
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                            mobileSubmenu ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {mobileSubmenu && (
                        <div className="ml-4 space-y-1 pb-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsMobileOpen(false)}
                              className="block rounded-lg px-4 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-gray-50 hover:text-gray-900 ${
                        link.href === '/spoed' ? 'text-cta-600' : 'text-gray-700'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={PHONE_LINK}
                className="flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-gray-800"
              >
                <Phone className="h-5 w-5" />
                Bel {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
