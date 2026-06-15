import { useState } from 'react'
import type { FormEvent } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { contactDetails, ctas } from '../../data/siteData'
import { type ContactFormValues, validateContactForm } from '../../lib/forms'
import { submitFormEnquiry } from '../../lib/formSubmission'
import { trackEvent } from '../../lib/tracking'
import { BookingCta } from '../ui/BookingCta'
import { CtaButton } from '../ui/CtaButton'
import { Icon } from '../ui/Icon'
import { FormField } from '../ui/FormField'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { TextAreaField } from '../ui/TextAreaField'

const initialForm: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  arrivalDate: '',
  departureDate: '',
  guests: '',
  message: '',
}

export function ContactTeaserSection() {
  const { locale } = useLanguage()
  const [values, setValues] = useState<ContactFormValues>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({})
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange<K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K],
  ) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateContactForm(values)
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
        formType: 'contact',
        locale,
        payload: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          arrivalDate: values.arrivalDate,
          departureDate: values.departureDate,
          guests: values.guests,
          message: values.message,
          _subject:
            locale === 'bg'
              ? 'Ново запитване от контакт формата | Hotel Diamanti'
              : 'New contact enquiry | Hotel Diamanti',
        },
      })

      setSuccess(true)
      trackEvent('contact_form_submit', { source: 'single_page' })
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
    <SectionContainer id="contact-parking" background="ivory">
      <div className="grid gap-8 lg:grid-cols-[1.02fr_1fr]">
        <RevealOnScroll>
          <div>
            <SectionHeading
              eyebrow={{ bg: 'Контакт и паркиране', en: 'Contact and parking' }}
              title={{
                bg: 'Свържете се директно за точна стая, достъп и спокойно пристигане.',
                en: 'Contact us directly for room clarity, access guidance, and smooth arrival.',
              }}
              description={{
                bg: 'Тук получавате най-бързия отговор за наличност, насоки за паркиране и късно настаняване.',
                en: 'Get the fastest response for availability, parking guidance, and late check-in.',
              }}
            />
            <ul className="mt-6 space-y-4 text-sm text-diamanti-ink/85 md:text-base">
              <li className="flex gap-3">
                <Icon name="map-pin" size={19} className="mt-0.5 shrink-0 text-diamanti-sea" />
                <span>
                  <span className="font-semibold text-diamanti-ink">
                    {locale === 'bg' ? 'Адрес: ' : 'Address: '}
                  </span>
                  {contactDetails.address[locale]}
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" size={19} className="mt-0.5 shrink-0 text-diamanti-sea" />
                <span>
                  <span className="font-semibold text-diamanti-ink">
                    {locale === 'bg' ? 'Рецепция: ' : 'Reception: '}
                  </span>
                  <a href={contactDetails.phoneHref} className="underline-offset-4 hover:underline">
                    {contactDetails.phoneDisplay}
                  </a>
                  {' · '}
                  <a href={contactDetails.mobileHref} className="underline-offset-4 hover:underline">
                    {contactDetails.mobileDisplay}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" size={19} className="mt-0.5 shrink-0 text-diamanti-sea" />
                <span>
                  <span className="font-semibold text-diamanti-ink">Email: </span>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {contactDetails.email}
                  </a>
                </span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={contactDetails.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-diamanti-sea/70 px-5 py-2.5 text-sm font-semibold text-diamanti-sea transition hover:bg-diamanti-sea hover:text-diamanti-limestone"
              >
                <Icon name="whatsapp" size={17} />
                WhatsApp
              </a>
              <a
                href={contactDetails.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-diamanti-sea/70 px-5 py-2.5 text-sm font-semibold text-diamanti-sea transition hover:bg-diamanti-sea hover:text-diamanti-limestone"
              >
                <Icon name="map-pin" size={17} />
                Google Maps
              </a>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <div className="overflow-hidden rounded-3xl border border-diamanti-mist/45 bg-diamanti-shell shadow-soft">
            <iframe
              title="Hotel Diamanti location map"
              src="https://www.google.com/maps?q=Hotel%20Diamanti%20Sozopol&output=embed"
              loading="lazy"
              className="h-[360px] w-full border-0 md:h-full md:min-h-[420px]"
            />
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delayMs={150}>
        <div className="mt-10 rounded-3xl border border-diamanti-mist/45 bg-diamanti-shell p-6 shadow-soft md:p-8">
          <h3 className="font-display text-3xl text-diamanti-ink md:text-4xl">
            {ctas.contactUs[locale]}
          </h3>
          <p className="mt-2 text-sm text-diamanti-ink/70 md:text-base">
            {locale === 'bg'
              ? 'Изпратете дати и предпочитания. Ще върнем конкретна препоръка за категория и достъп.'
              : 'Send your dates and preferences. We will reply with a concrete room and arrival recommendation.'}
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2" noValidate>
            <FormField
              id="contact-name"
              label={locale === 'bg' ? 'Име' : 'Name'}
              value={values.name}
              onChange={(event) => handleChange('name', event.target.value)}
              error={errors.name}
              autoComplete="name"
            />
            <FormField
              id="contact-email"
              type="email"
              label="Email"
              value={values.email}
              onChange={(event) => handleChange('email', event.target.value)}
              error={errors.email}
              autoComplete="email"
            />
            <FormField
              id="contact-phone"
              label={locale === 'bg' ? 'Телефон' : 'Phone'}
              value={values.phone}
              onChange={(event) => handleChange('phone', event.target.value)}
              error={errors.phone}
              autoComplete="tel"
            />
            <FormField
              id="contact-guests"
              label={locale === 'bg' ? 'Брой гости' : 'Guests'}
              value={values.guests}
              onChange={(event) => handleChange('guests', event.target.value)}
              error={errors.guests}
              placeholder={locale === 'bg' ? 'например 2' : 'for example 2'}
            />
            <FormField
              id="contact-arrival"
              type="date"
              label={locale === 'bg' ? 'Пристигане' : 'Arrival'}
              value={values.arrivalDate}
              onChange={(event) => handleChange('arrivalDate', event.target.value)}
              error={errors.arrivalDate}
            />
            <FormField
              id="contact-departure"
              type="date"
              label={locale === 'bg' ? 'Заминаване' : 'Departure'}
              value={values.departureDate}
              onChange={(event) => handleChange('departureDate', event.target.value)}
              error={errors.departureDate}
            />
            <div className="md:col-span-2">
              <TextAreaField
                id="contact-message"
                label={locale === 'bg' ? 'Съобщение' : 'Message'}
                value={values.message}
                onChange={(event) => handleChange('message', event.target.value)}
                error={errors.message}
                placeholder={
                  locale === 'bg'
                    ? 'Предпочитан изглед, повод за пътуването, късно пристигане...'
                    : 'Preferred view, trip occasion, late arrival, etc.'
                }
              />
            </div>
            <div className="md:col-span-2 flex flex-wrap items-center gap-3">
              <CtaButton type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? locale === 'bg'
                    ? 'Изпращане...'
                    : 'Sending...'
                  : ctas.contactUs[locale]}
              </CtaButton>
              <BookingCta placement="contact_final">{ctas.book[locale]}</BookingCta>
            </div>
            <div className="md:col-span-2">
              {success ? (
                <p className="inline-flex items-center gap-2 text-sm font-medium text-diamanti-sea">
                  <Icon name="check" size={17} className="text-diamanti-brass" />
                  {locale === 'bg'
                    ? 'Благодарим. Запитването е изпратено успешно.'
                    : 'Thank you. Your enquiry was submitted successfully.'}
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
