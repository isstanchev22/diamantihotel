import type { ReactNode } from 'react'
import { bookingEngineUrl } from '../../data/siteData'
import { classNames } from '../../lib/classNames'
import { trackEvent } from '../../lib/tracking'

interface BookingCtaProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  placement: string
}

export function BookingCta({
  children,
  className,
  variant = 'primary',
  fullWidth = false,
  placement,
}: BookingCtaProps) {
  return (
    <a
      href={bookingEngineUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent('booking_cta_click', {
          placement,
          destination: 'clock_wbe_hotel_13742',
        })
      }
      className={classNames(
        'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:text-base',
        variant === 'primary'
          ? 'bg-diamanti-brass text-diamanti-ink hover:-translate-y-0.5 hover:bg-diamanti-brassDeep hover:shadow-brass focus-visible:outline-diamanti-brass'
          : 'border border-diamanti-sea/70 bg-transparent text-diamanti-sea hover:-translate-y-0.5 hover:bg-diamanti-sea hover:text-diamanti-limestone hover:shadow-soft focus-visible:outline-diamanti-sea',
        fullWidth && 'w-full',
        className,
      )}
    >
      {children}
    </a>
  )
}
