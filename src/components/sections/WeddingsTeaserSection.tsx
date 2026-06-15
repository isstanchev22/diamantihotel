import { useState } from 'react'
import type { FormEvent } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { ctas } from '../../data/siteData'
import { sectionImages } from '../../data/imageData'
import { type WeddingFormValues, validateWeddingForm } from '../../lib/forms'
import { submitFormEnquiry } from '../../lib/formSubmission'
import { trackEvent } from '../../lib/tracking'
import { BookingCta } from '../ui/BookingCta'
import { CtaButton } from '../ui/CtaButton'
import { Icon } from '../ui/Icon'
import { FormField } from '../ui/FormField'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { SmartImage } from '../ui/SmartImage'
import { TextAreaField } from '../ui/TextAreaField'

const initialForm: WeddingFormValues = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  guestCount: '',
  message: '',
}

export function WeddingsTeaserSection() {
  const { locale } = useLanguage()
  const [values, setValues] = useState<WeddingFormValues>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof WeddingFormValues, string>>>({})
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange<K extends keyof WeddingFormValues>(
    field: K,
    value: WeddingFormValues[K],
  ) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateWeddingForm(values)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSuccess(false)
      setSubmitError(null)
      return
    }

    try {
      setErrors({})
      setSubmitError(null)
      setIsSubmitting(true)

      await submitFormEnquiry({
        formType: 'wedding',
        locale,
        payload: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          eventDate: values.eventDate,
          guestCount: values.guestCount,
          message: values.message,
          _subject:
            locale === 'bg'
              ? 'Ново запитване за сватба/събитие | Hotel Diamanti'
              : 'New wedding/event enquiry | Hotel Diamanti',
        },
      })

      setSuccess(true)
      trackEvent('wedding_enquiry_submit', { source: 'single_page' })
      setValues(initialForm)
    } catch {
      setSuccess(false)
      setSubmitError(
        locale === 'bg'
          ? 'Неуспешно изпращане. Опитайте отново или пишете на contact@hoteldiamanti.com.'
          : 'Sending failed. Please try again or email contact@hoteldiamanti.com.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SectionContainer id="weddings-events" background="sand">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <RevealOnScroll>
          <div>
            <SectionHeading
              eyebrow={{
                bg: 'Сватби край морето',
                en: 'Sea-view weddings',
              }}
              title={{
                bg: 'Малка сватба с гледка към морето и атмосферата на Стария Созопол.',
                en: 'An intimate wedding by the sea, in the heart of Old Sozopol.',
              }}
              description={{
                bg: 'Организираме камерни сватби за 20-40 гости - с възможност за изнесен ритуал, ресторантска част и координация според вашия ден. Сватбата може да бъде организирана и без нощувки в хотела.',
                en: 'We host small weddings for 20-40 guests, with the option for an external ceremony, restaurant coordination, and a calm seaside setting. The wedding can also be arranged without overnight stays at the hotel.',
              }}
            />
            <ul className="mt-6 space-y-3 rounded-2xl border border-diamanti-mist/45 bg-diamanti-shell p-6 text-sm text-diamanti-ink/85 md:text-base">
              <li className="flex gap-2.5">
                <Icon name="users" size={18} className="mt-0.5 shrink-0 text-diamanti-brass" />
                <span>{locale === 'bg' ? 'Подходящо за 20-40 гости' : 'Suitable for 20-40 guests'}</span>
              </li>
              <li className="flex gap-2.5">
                <Icon name="rings" size={18} className="mt-0.5 shrink-0 text-diamanti-brass" />
                <span>{locale === 'bg' ? 'Възможност за изнесен ритуал' : 'External ceremony available'}</span>
              </li>
              <li className="flex gap-2.5">
                <Icon name="check" size={18} className="mt-0.5 shrink-0 text-diamanti-brass" />
                <span>
                  {locale === 'bg'
                    ? 'Може да бъде без настаняване в хотела'
                    : 'Can be organized without hotel accommodation'}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Icon name="globe" size={18} className="mt-0.5 shrink-0 text-diamanti-brass" />
                <span>
                  {locale === 'bg'
                    ? 'Работим със Сватбена агенция „Диаманти“ - '
                    : 'In partnership with Wedding Agency "Diamanti" - '}
                  <a
                    href="https://diamanti-bs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-diamanti-sea underline-offset-4 hover:underline"
                  >
                    diamanti-bs.com
                  </a>
                </span>
              </li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#wedding-enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-diamanti-brass px-6 py-3 text-sm font-semibold text-diamanti-ink transition duration-300 hover:-translate-y-0.5 hover:bg-diamanti-brassDeep hover:shadow-brass md:text-base"
              >
                {ctas.askWedding[locale]}
                <Icon name="arrow-right" size={17} />
              </a>
              <BookingCta placement="weddings_section" variant="secondary">
                {ctas.book[locale]}
              </BookingCta>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <SmartImage
            image={sectionImages.weddingTerrace}
            className="min-h-[360px]"
            imgClassName="aspect-[4/3]"
            graded
            parallax
          />
        </RevealOnScroll>
      </div>

      <RevealOnScroll delayMs={150}>
        <div
          id="wedding-enquiry"
          className="mt-10 scroll-mt-28 rounded-3xl border border-diamanti-mist/45 bg-diamanti-shell p-6 shadow-soft md:p-8"
        >
          <h3 className="font-display text-3xl text-diamanti-ink md:text-4xl">
            {ctas.askWedding[locale]}
          </h3>
          <p className="mt-2 text-sm text-diamanti-ink/70 md:text-base">
            {locale === 'bg'
              ? 'Изпратете дата, брой гости и кратка идея за деня. Ще ви върнем ясна рамка за възможностите.'
              : 'Send your date, guest count, and a short idea for the day. We’ll reply with a clear outline of what’s possible.'}
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2" noValidate>
            <FormField
              id="wedding-name"
              label={locale === 'bg' ? 'Име' : 'Name'}
              value={values.name}
              onChange={(event) => handleChange('name', event.target.value)}
              error={errors.name}
              autoComplete="name"
            />
            <FormField
              id="wedding-email"
              type="email"
              label="Email"
              value={values.email}
              onChange={(event) => handleChange('email', event.target.value)}
              error={errors.email}
              autoComplete="email"
            />
            <FormField
              id="wedding-phone"
              label={locale === 'bg' ? 'Телефон' : 'Phone'}
              value={values.phone}
              onChange={(event) => handleChange('phone', event.target.value)}
              error={errors.phone}
              autoComplete="tel"
            />
            <FormField
              id="wedding-date"
              type="date"
              label={locale === 'bg' ? 'Ориентировъчна дата' : 'Target date'}
              value={values.eventDate}
              onChange={(event) => handleChange('eventDate', event.target.value)}
              error={errors.eventDate}
            />
            <FormField
              id="wedding-guests"
              label={locale === 'bg' ? 'Брой гости' : 'Guest count'}
              value={values.guestCount}
              onChange={(event) => handleChange('guestCount', event.target.value)}
              error={errors.guestCount}
              placeholder={locale === 'bg' ? 'например 40' : 'for example 40'}
            />
            <div className="md:col-span-2">
              <TextAreaField
                id="wedding-message"
                label={locale === 'bg' ? 'Какво планирате' : 'What are you planning'}
                value={values.message}
                onChange={(event) => handleChange('message', event.target.value)}
                error={errors.message}
                placeholder={
                  locale === 'bg'
                    ? 'Тип церемония, програма, меню, декор, специални изисквания...'
                    : 'Ceremony type, program, menu, decor, special requests...'
                }
              />
            </div>
            <div className="md:col-span-2">
              <CtaButton type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? locale === 'bg'
                    ? 'Изпращане...'
                    : 'Sending...'
                  : ctas.askWedding[locale]}
              </CtaButton>
              {success ? (
                <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-diamanti-sea">
                  <Icon name="check" size={17} className="text-diamanti-brass" />
                  {locale === 'bg'
                    ? 'Благодарим. Получихме запитването и ще се свържем скоро.'
                    : 'Thank you. We received your enquiry and will get back to you soon.'}
                </p>
              ) : null}
              {submitError ? (
                <p className="mt-2 text-sm font-medium text-diamanti-coral">{submitError}</p>
              ) : null}
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  )
}
