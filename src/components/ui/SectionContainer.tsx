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
    ivory: 'bg-diamanti-limestone',
    sand: 'bg-diamanti-sand/55',
    stone: 'bg-diamanti-mist/20',
    navy: 'bg-diamanti-sea text-diamanti-limestone',
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
        'scroll-mt-24 py-20 md:scroll-mt-28 md:py-28',
        backgroundClasses[background],
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">{children}</div>
    </section>
  )
}
