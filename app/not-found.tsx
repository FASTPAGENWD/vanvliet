import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Home, Phone, ArrowLeft } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK } from '@/lib/utils'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center px-4 pt-20">
        <div className="text-center">
          <div className="mb-6 text-8xl font-extrabold text-brand-600 font-heading">404</div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 font-heading">
            Pagina niet gevonden
          </h1>
          <p className="mb-8 max-w-md text-gray-600">
            De pagina die u zoekt bestaat niet of is verplaatst. 
            Neem contact met ons op als u hulp nodig heeft.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/" className="btn-brand">
              <Home className="h-5 w-5" />
              Naar homepage
            </Link>
            <a href={PHONE_LINK} className="btn-cta">
              <Phone className="h-5 w-5" />
              BEL: {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
