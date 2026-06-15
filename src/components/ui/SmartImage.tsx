import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { classNames } from '../../lib/classNames'
import type { SiteImage } from '../../types/content'

interface SmartImageProps {
  image: SiteImage
  className?: string
  imgClassName?: string
  priority?: boolean
  /** Adds a subtle teal duotone grade so reused stock photos feel on-brand. */
  graded?: boolean
}

export function SmartImage({
  image,
  className,
  imgClassName,
  priority = false,
  graded = false,
}: SmartImageProps) {
  const { locale } = useLanguage()
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={classNames(
          'relative flex h-full min-h-[220px] items-end overflow-hidden rounded-3xl border border-diamanti-mist/60 bg-diamanti-mist/25 p-4',
          className,
        )}
      >
        <p className="text-sm text-diamanti-ink/80">
          TODO: Добавете финална снимка: <strong>{image.src}</strong>
        </p>
      </div>
    )
  }

  return (
    <figure
      className={classNames(
        'group relative overflow-hidden rounded-3xl border border-diamanti-mist/50 bg-diamanti-sand shadow-soft',
        className,
      )}
    >
      <img
        src={image.src}
        alt={image.alt[locale]}
        loading={priority ? 'eager' : 'lazy'}
        onError={() => setFailed(true)}
        className={classNames(
          'h-full w-full object-cover transition duration-700',
          imgClassName,
        )}
      />
      {graded ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-diamanti-sea/35 via-transparent to-diamanti-brass/10 mix-blend-multiply"
        />
      ) : null}
      {image.caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-diamanti-ink/85 to-transparent px-4 py-3 text-xs text-diamanti-limestone md:text-sm">
          {image.caption[locale]}
        </figcaption>
      ) : null}
    </figure>
  )
}
