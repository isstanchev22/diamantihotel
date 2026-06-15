import type { LocalizedString } from '../types/content'
import { useLanguage } from '../context/LanguageContext'
import { PageSeo } from '../components/ui/PageSeo'
import { SectionContainer } from '../components/ui/SectionContainer'

interface LegalPageProps {
  title: LocalizedString
  description: LocalizedString
  body: LocalizedString[]
}

export function LegalPage({ title, description, body }: LegalPageProps) {
  const { locale } = useLanguage()

  return (
    <>
      <PageSeo title={title} description={description} />
      <SectionContainer>
        <h1 className="font-display text-5xl text-diamanti-ink">{title[locale]}</h1>
        <div className="mt-6 max-w-[68ch] space-y-4 text-sm leading-relaxed text-diamanti-ink/80 md:text-base">
          {body.map((paragraph) => (
            <p key={paragraph.bg}>{paragraph[locale]}</p>
          ))}
        </div>
      </SectionContainer>
    </>
  )
}
