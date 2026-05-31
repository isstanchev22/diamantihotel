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
                bg: 'Сватби и събития',
                en: 'Weddings and events',
              }}
              title={{
                bg: 'Малка морска церемония с усещане за лично място.',
                en: 'An intimate sea-view ceremony with a personal feel.',
              }}
              description={{
                bg: 'Услугата е вторична спрямо настаняването, но е организирана така, че гостите да получат спокойна координация между тераса, ресторант и стаи.',
                en: 'This is a secondary offer, yet carefully organized so terrace, restaurant, and accommodation work together smoothly.',
              }}
            />
            <ul className="mt-6 space-y-3 rounded-2xl border border-diamanti-sand/70 bg-white p-5 text-sm text-diamanti-navy/85 md:text-base">
              <li>• {locale === 'bg' ? 'Подходящо за 20-60 гости' : 'Suitable for 20-60 guests'}</li>
              <li>• {locale === 'bg' ? 'Морска тераса и ресторант в общ сценарий' : 'Sea-view terrace and restaurant in one scenario'}</li>
              <li>• {locale === 'bg' ? 'Опция за комбиниране с настаняване' : 'Can be combined with accommodation'}</li>
            </ul>
            <div className="mt-7">
              <BookingCta placement="weddings_section">{ctas.book[locale]}</BookingCta>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <SmartImage
            image={sectionImages.weddingTerrace}
            className="min-h-[360px]"
            imgClassName="aspect-[4/3]"
          />
        </RevealOnScroll>
      </div>

      <RevealOnScroll delayMs={150}>
        <div className="mt-10 rounded-3xl border border-diamanti-sand/70 bg-white p-6 md:p-7">
          <h3 className="font-display text-3xl text-diamanti-navy md:text-4xl">
            {ctas.askWedding[locale]}
          </h3>
          <p className="mt-2 text-sm text-diamanti-navy/75 md:text-base">
            {locale === 'bg'
              ? 'Изпратете ориентировъчна дата и брой гости. Връщаме персонална рамка за настаняване и организация.'
              : 'Send your target date and guest count. We will reply with a tailored accommodation and event outline.'}
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
                <p className="mt-3 text-sm text-green-700">
                  {locale === 'bg'
                    ? 'Благодарим. Получихме запитването и ще се свържем скоро.'
                    : 'Thank you. We received your enquiry and will get back to you soon.'}
                </p>
              ) : null}
              {submitError ? <p className="mt-2 text-sm text-red-700">{submitError}</p> : null}
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  )
}
