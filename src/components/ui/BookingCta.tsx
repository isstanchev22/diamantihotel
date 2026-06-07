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
        'premium-shimmer inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:text-base',
        variant === 'primary'
          ? 'bg-diamanti-navy text-diamanti-ivory hover:-translate-y-1 hover:bg-diamanti-navy/90 hover:shadow-soft focus-visible:outline-diamanti-navy'
          : 'border border-diamanti-navy bg-transparent text-diamanti-navy hover:-translate-y-1 hover:bg-diamanti-sand/45 hover:shadow-soft focus-visible:outline-diamanti-sea',
        fullWidth && 'w-full',
        className,
      )}
    >
      {children}
    </a>
  )
}
