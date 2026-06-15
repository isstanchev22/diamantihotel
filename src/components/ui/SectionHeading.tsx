import { motion } from 'framer-motion'
import type { LocalizedString } from '../../types/content'
import { useLanguage } from '../../context/LanguageContext'
import { classNames } from '../../lib/classNames'
import { RevealText } from './RevealText'

interface SectionHeadingProps {
  eyebrow?: LocalizedString
  title: LocalizedString
  description?: LocalizedString
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
}

const ease = [0.22, 1, 0.36, 1] as const

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
}: SectionHeadingProps) {
  const { locale } = useLanguage()
  const isCentered = align === 'center'
  const isLight = tone === 'light'

  return (
    <div className={classNames(isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl')}>
      {eyebrow ? (
        <motion.div
          className={classNames('mb-4', isCentered && 'flex flex-col items-center')}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -12% 0px' }}
          transition={{ duration: 0.6, ease }}
        >
          <p
            className={classNames(
              'text-xs font-semibold uppercase tracking-eyebrow',
              isLight ? 'text-diamanti-brass' : 'text-diamanti-coralDeep',
            )}
          >
            {eyebrow[locale]}
          </p>
          <span
            aria-hidden="true"
            className={classNames('horizon-rule mt-3', isCentered && 'is-centered')}
          />
        </motion.div>
      ) : null}
      <RevealText
        as="h2"
        text={title[locale]}
        delay={0.05}
        className={classNames(
          'font-display text-[2.1rem] leading-[1.08] md:text-5xl',
          isLight ? 'text-diamanti-limestone' : 'text-diamanti-ink',
        )}
      />
      {description ? (
        <motion.p
          className={classNames(
            'mt-5 max-w-[65ch] text-base leading-relaxed md:text-lg',
            isLight ? 'text-diamanti-limestone/85' : 'text-diamanti-ink/75',
          )}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
        >
          {description[locale]}
        </motion.p>
      ) : null}
    </div>
  )
}
