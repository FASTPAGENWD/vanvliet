'use client'

import { Star, Quote } from 'lucide-react'
import { reviews } from '@/data/reviews'
import { MotionWrapper, StaggerContainer, StaggerItem } from '@/components/motion-wrapper'
import Image from 'next/image'

export function ReviewsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <MotionWrapper variant="fade-up" className="mb-12 text-center">
          <span className="badge mb-4 inline-block">Reviews</span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl font-heading">
            Wat onze klanten zeggen
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <Image src="/google-icoon.png" alt="Google" width={20} height={20} className="mix-blend-multiply" />
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-gray-900">4.9 / 5.0</span>
            <span>op Google Reviews</span>
          </div>
        </MotionWrapper>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <StaggerItem key={i}>
              <div className="relative flex flex-col rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-card h-full">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-100" />
                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${
                        j < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-4 flex-1 text-sm text-gray-600 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{review.name}</div>
                    <div className="text-xs text-gray-400">{review.location}</div>
                  </div>
                  <span className="rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 border border-gray-100">
                    {review.pest}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
