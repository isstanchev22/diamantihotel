import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { classNames } from '../../lib/classNames'
import type { SiteImage } from '../../types/content'

interface SmartImageProps {
  image: SiteImage
  className?: string
  imgClassName?: string
  priority?: boolean
}

export function SmartImage({
  image,
  className,
  imgClassName,
  priority = false,
}: SmartImageProps) {
  const { locale } = useLanguage()
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={classNames(
          'relative flex h-full min-h-[220px] items-end overflow-hidden rounded-3xl border border-diamanti-sand/70 bg-diamanti-stone p-4',
          className,
        )}
      >
        <p className="text-sm text-diamanti-navy/80">
          TODO: Добавете финална снимка: <strong>{image.src}</strong>
        </p>
      </div>
    )
  }

  return (
    <figure
      className={classNames(
        'relative overflow-hidden rounded-3xl border border-diamanti-sand/70 bg-diamanti-stone shadow-soft',
        className,
      )}
    >
      <img
        src={image.src}
        alt={image.alt[locale]}
        loading={priority ? 'eager' : 'lazy'}
        onError={() => setFailed(true)}
        className={classNames('h-full w-full object-cover', imgClassName)}
      />
      {image.caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-diamanti-navy/80 to-transparent px-4 py-3 text-xs text-diamanti-ivory md:text-sm">
          {image.caption[locale]}
        </figcaption>
      ) : null}
    </figure>
  )
}
