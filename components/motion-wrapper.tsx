'use client'

import { motion, type Variants } from 'framer-motion'
import { type ReactNode, useEffect, useState } from 'react'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

const variantMap = {
  'fade-up': fadeInUp,
  'fade-in': fadeIn,
  'slide-left': slideInLeft,
  'slide-right': slideInRight,
  'scale-in': scaleIn,
}

interface MotionWrapperProps {
  children: ReactNode
  variant?: keyof typeof variantMap
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function MotionWrapper({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.4,
  className,
  once = true,
}: MotionWrapperProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMounted(true)
    }
  }, [])

  if (!mounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={variantMap[variant]}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMounted(true)
    }
  }, [])

  if (!mounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMounted(true)
    }
  }, [])

  if (!mounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
