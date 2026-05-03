import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const PHONE_NUMBER = '085 060 4269'
export const PHONE_LINK = 'tel:+31850604269'
export const COMPANY_NAME = 'Jansen Ongediertebestrijding'
export const SITE_URL = 'https://jansenongediertebestrijding.nl'
