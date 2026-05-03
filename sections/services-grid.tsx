'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { pests } from '@/data/pests'
import { PestIcon } from '@/components/pest-icons'
import { MotionWrapper, StaggerContainer, StaggerItem } from '@/components/motion-wrapper'

export function ServicesGrid() {
  return (
    <section className="section-padding bg-white" id="diensten">
      <div className="container-narrow">
        <MotionWrapper variant="fade-up" className="mb-12 text-center">
          <span className="badge mb-4 inline-block">Onze Diensten</span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl font-heading">
            Welk ongedierte heeft u last van?
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            Wij bestrijden alle soorten ongedierte professioneel en effectief.
            Klik op een dienstsoort voor meer informatie.
          </p>
        </MotionWrapper>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pests.map((pest) => (
            <StaggerItem key={pest.slug}>
              <Link
                href={`/ongedierte/${pest.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-card hover:border-gray-200 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white transition-colors group-hover:bg-brand-600">
                  <PestIcon slug={pest.slug} className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                  {pest.name}
                </h3>
                <p className="mb-4 flex-1 text-sm text-gray-500 line-clamp-2">
                  {pest.shortDescription}
                </p>
                <div className="flex items-center gap-1 text-sm font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                  Meer info
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
