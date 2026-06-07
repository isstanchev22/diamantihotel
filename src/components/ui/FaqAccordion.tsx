import { useState } from 'react'
import type { FaqItem } from '../../types/content'
import { useLanguage } from '../../context/LanguageContext'
import { classNames } from '../../lib/classNames'

interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { locale } = useLanguage()

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`
        const buttonId = `faq-button-${index}`

        return (
          <article
            key={item.question.bg}
            className={classNames(
              'premium-card-hover rounded-2xl border bg-white',
              isOpen ? 'border-diamanti-terracotta/70 shadow-soft' : 'border-diamanti-sand/70',
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-diamanti-navy transition duration-300">
                  {item.question[locale]}
                </span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    'inline-flex h-7 w-7 items-center justify-center rounded-full border border-diamanti-navy text-diamanti-navy transition duration-300',
                    isOpen && 'rotate-45 bg-diamanti-navy text-diamanti-ivory',
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={classNames(
                'grid transition-all duration-500 ease-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <p className="premium-fade-up px-5 pb-5 text-sm leading-relaxed text-diamanti-navy/80 md:text-base">
                  {item.answer[locale]}
                </p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
