import React, { type ComponentProps } from 'react'

type IconProps = ComponentProps<'svg'>

function BedBugIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="14" rx="5" ry="6" />
      <ellipse cx="12" cy="7" rx="3" ry="2" />
      <path d="M7 11 4 8m13 3 3-3M7 15H3m14 0h4M8 19l-3 2m11-2 3 2" />
    </svg>
  )
}

function RatIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 13c0-3.5 2.5-7 7-7 .7 0 1.3.1 2 .2m0 0C11.5 4 12.5 2 14 2c1 0 1.5 1 1 2.2M13 6.2C11.5 4 10.5 2 9 2c-1 0-1.5 1-1 2.2" />
      <path d="M4 13c0 3 2.5 5.5 6 6l1 3h2l1-3c3.5-.5 6-3 6-6 0-3.5-2.5-7-7-7s-7 3.5-7 7z" />
      <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none" />
      <path d="M11 14h2" />
    </svg>
  )
}

function MouseIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 6c-4 0-7 3-7 6.5S8 19 12 19s7-3 7-6.5S16 6 12 6z" />
      <circle cx="9" cy="12" r=".75" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r=".75" fill="currentColor" stroke="none" />
      <path d="M6.5 9C4 7 3 4 5 2.5M17.5 9c2.5-2 3.5-5 1.5-6.5" />
      <path d="M12 19v2c0 .5-.5 1-1 1" />
      <path d="M11 14.5h2" />
    </svg>
  )
}

function WaspIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="7" rx="3.5" ry="3" />
      <ellipse cx="12" cy="15" rx="4" ry="4.5" />
      <path d="M12 10v1.5" />
      <path d="M12 19.5 11 22m1-2.5 1 2.5" />
      <path d="M9 13h6m-6 2.5h6" />
      <path d="M8.5 7c-2-1-5 0-6 2m13-2c2-1 5 0 6 2" />
      <path d="M10 4.5 9 2m5 2.5L15 2" />
    </svg>
  )
}

function AntIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="5" r="2.5" />
      <ellipse cx="12" cy="11" rx="3" ry="2.5" />
      <ellipse cx="12" cy="18" rx="4" ry="3.5" />
      <path d="M9 10 5 7m10 3 4-3M9 13 4 14m11-1 5 1M9 17 5 20m10-3 4 3" />
      <path d="M10 3 8.5 1M14 3l1.5-2" />
    </svg>
  )
}

function CockroachIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="7" rx="3" ry="2.5" />
      <ellipse cx="12" cy="15" rx="4.5" ry="6" />
      <path d="M12 9.5v1" />
      <path d="M7.5 12 4 10m13 2 3.5-2M7.5 15 4 16m13-1 3.5 1M8 19l-3 2.5m11-2.5 3 2.5" />
      <path d="M10 5 7 1.5M14 5l3-3.5" />
      <line x1="12" y1="12" x2="12" y2="20" />
    </svg>
  )
}

function SilverfishIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3c-2 0-3.5 1-4 2.5C7 7.5 7 10 7.5 12c.5 2 1 4 2 5.5s2.5 2.5 2.5 2.5 1.5-1 2.5-2.5 1.5-3.5 2-5.5c.5-2 .5-4.5-.5-6.5C15.5 4 14 3 12 3z" />
      <path d="M8.5 7 6 5.5m9.5 1.5L18 5.5M8 10l-3-.5m11 .5 3-.5M8 14l-3 1m11-1 3 1" />
      <path d="M12 20v1.5M10 20l-1.5 2M14 20l1.5 2" />
      <path d="M10 4l-1-2M14 4l1-2" />
    </svg>
  )
}

const iconMap: Record<string, (props: IconProps) => React.ReactElement> = {
  bedwantsen: BedBugIcon,
  ratten: RatIcon,
  muizen: MouseIcon,
  wespen: WaspIcon,
  mieren: AntIcon,
  kakkerlakken: CockroachIcon,
  zilvervisjes: SilverfishIcon,
}

interface PestIconProps extends IconProps {
  slug: string
}

export function PestIcon({ slug, ...props }: PestIconProps) {
  const Icon = iconMap[slug]
  if (!Icon) return null
  return <Icon {...props} />
}
