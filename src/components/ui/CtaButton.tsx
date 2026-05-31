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
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-wide transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:text-base',
        variant === 'primary'
          ? 'bg-diamanti-navy text-diamanti-ivory hover:bg-diamanti-navy/90 focus-visible:outline-diamanti-navy'
          : 'border border-diamanti-navy bg-transparent text-diamanti-navy hover:bg-diamanti-sand/45 focus-visible:outline-diamanti-sea',
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
