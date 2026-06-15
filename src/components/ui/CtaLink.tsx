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
    'bg-diamanti-brass text-diamanti-ink hover:bg-diamanti-brassDeep hover:shadow-brass focus-visible:outline-diamanti-brass',
  secondary:
    'border border-diamanti-sea/70 bg-transparent text-diamanti-sea hover:bg-diamanti-sea hover:text-diamanti-limestone focus-visible:outline-diamanti-sea',
  text: 'text-diamanti-sea underline-offset-4 hover:underline focus-visible:outline-diamanti-sea',
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
        'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
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
