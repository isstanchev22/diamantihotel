import type { ReactNode } from 'react'
import { classNames } from '../../lib/classNames'

interface SectionContainerProps {
  id?: string
  background?: 'ivory' | 'sand' | 'stone' | 'navy'
  className?: string
  children: ReactNode
}

const backgroundClasses: Record<NonNullable<SectionContainerProps['background']>, string> =
  {
    ivory: 'bg-diamanti-ivory',
    sand: 'bg-diamanti-sand/35',
    stone: 'bg-diamanti-stone/55',
    navy: 'bg-diamanti-navy text-diamanti-ivory',
  }

export function SectionContainer({
  id,
  background = 'ivory',
  className,
  children,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={classNames(
        'scroll-mt-24 border-b border-diamanti-sand/50 py-16 md:scroll-mt-28 md:py-20',
        backgroundClasses[background],
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">{children}</div>
    </section>
  )
}
