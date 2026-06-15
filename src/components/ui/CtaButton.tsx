import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames } from '../../lib/classNames'
import { useMagnetic } from '../../lib/useMagnetic'

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
  const magneticRef = useMagnetic<HTMLButtonElement>()
  return (
    <button
      ref={magneticRef}
      className={classNames(
        'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:text-base',
        variant === 'primary'
          ? 'bg-diamanti-brass text-diamanti-ink hover:-translate-y-0.5 hover:bg-diamanti-brassDeep hover:shadow-brass focus-visible:outline-diamanti-brass'
          : 'border border-diamanti-sea/70 bg-transparent text-diamanti-sea hover:-translate-y-0.5 hover:bg-diamanti-sea hover:text-diamanti-limestone hover:shadow-soft focus-visible:outline-diamanti-sea',
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
