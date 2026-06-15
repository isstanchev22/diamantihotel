import type { ReactElement, SVGProps } from 'react'

export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'check'
  | 'chevron-left'
  | 'chevron-right'
  | 'plus'
  | 'menu'
  | 'close'
  | 'phone'
  | 'whatsapp'
  | 'mail'
  | 'map-pin'
  | 'wave'
  | 'sun'
  | 'star'
  | 'ruler'
  | 'users'
  | 'compass'
  | 'utensils'
  | 'rings'
  | 'globe'

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

// Lucide-style line icons on a consistent 24x24 viewBox.
const paths: Record<IconName, ReactElement> = {
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="M20 6 9 17l-5-5" />,
  'chevron-left': <path d="m15 18-6-6 6-6" />,
  'chevron-right': <path d="m9 18 6-6-6-6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  phone: (
    <path d="M6.5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  ),
  whatsapp: (
    <>
      <path d="M5 19l1.2-3.5a7.5 7.5 0 1 1 2.8 2.7L5 19Z" />
      <path d="M9.2 9c.2 1.6 2.2 3.6 3.8 3.8.5.06 1.1-.5 1.4-.9l1.4.7c-.2.8-1.1 1.4-2 1.3-2.4-.2-4.8-2.6-5-5-.1-.9.5-1.8 1.3-2l.7 1.4c-.4.3-.9.9-.8 1.4Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  wave: <path d="M2 13c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 18c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  star: <path d="m12 3 2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9 6.7 19.2l1.1-5.9L3.5 9.2l5.9-.8L12 3Z" />,
  ruler: (
    <>
      <path d="M4 16 16 4l4 4L8 20Z" />
      <path d="M9 9l1.5 1.5M12 6l1.5 1.5M6 12l1.5 1.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5M21 20a6 6 0 0 0-4-5.7" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  utensils: <path d="M5 3v7a2 2 0 0 0 2 2v9M5 3v5M8 3v5M17 3c-1.5 0-2.5 1.5-2.5 4s1 4 2.5 4v10" />,
  rings: (
    <>
      <circle cx="9" cy="14" r="5" />
      <circle cx="16" cy="14" r="5" />
      <path d="M9 9l-1.5-4h3L9 9Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </>
  ),
}

export function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}
