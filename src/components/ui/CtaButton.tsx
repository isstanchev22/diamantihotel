import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames } from '../../lib/classNames'

type Variant = 'primary' | 'secondary'

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  fullWidth?: boolean
}

export function CtaButton({
  children,
  className,
  variant = 'primary',
  fullWidth = false,
  ...props
}: CtaButtonProps) {
  return (
    <button
      className={classNames(
        'premium-shimmer inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:text-base',
        variant === 'primary'
          ? 'bg-diamanti-navy text-diamanti-ivory hover:-translate-y-1 hover:bg-diamanti-navy/90 hover:shadow-soft focus-visible:outline-diamanti-navy'
          : 'border border-diamanti-navy bg-transparent text-diamanti-navy hover:-translate-y-1 hover:bg-diamanti-sand/45 hover:shadow-soft focus-visible:outline-diamanti-sea',
        props.disabled && 'cursor-not-allowed opacity-65',
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
