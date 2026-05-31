import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { classNames } from '../../lib/classNames'

type Variant = 'primary' | 'secondary' | 'text'
type Size = 'sm' | 'md' | 'lg'

interface CtaLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: Variant
  size?: Size
  fullWidth?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-diamanti-navy text-diamanti-ivory hover:bg-diamanti-navy/90 focus-visible:outline-diamanti-navy',
  secondary:
    'border border-diamanti-navy bg-transparent text-diamanti-navy hover:bg-diamanti-sand/45 focus-visible:outline-diamanti-sea',
  text: 'text-diamanti-navy underline-offset-4 hover:underline focus-visible:outline-diamanti-sea',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm md:text-base',
  lg: 'px-6 py-3 text-base',
}

export function CtaLink({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}: CtaLinkProps) {
  return (
    <a
      className={classNames(
        'inline-flex items-center justify-center rounded-full font-medium tracking-wide transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
