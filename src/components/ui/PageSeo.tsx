import { useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import type { LocalizedString } from '../../types/content'

interface PageSeoProps {
  title: LocalizedString
  description: LocalizedString
}

export function PageSeo({ title, description }: PageSeoProps) {
  const { locale } = useLanguage()

  useEffect(() => {
    document.title = title[locale]

    const descriptionTag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )

    if (descriptionTag) {
      descriptionTag.setAttribute('content', description[locale])
      return
    }

    const tag = document.createElement('meta')
    tag.name = 'description'
    tag.content = description[locale]
    document.head.appendChild(tag)
  }, [description, locale, title])

  return null
}
