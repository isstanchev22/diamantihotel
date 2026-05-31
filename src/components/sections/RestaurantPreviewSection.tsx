import { useState } from 'react'
import type { FormEvent } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { ctas } from '../../data/siteData'
import { sectionImages } from '../../data/imageData'
import {
  type RestaurantFormValues,
  validateRestaurantForm,
} from '../../lib/forms'
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

const initialForm: RestaurantFormValues = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
  notes: '',
}

export function RestaurantPreviewSection() {
  const { locale } = useLanguage()
  const [values, setValues] = useState<RestaurantFormValues>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof RestaurantFormValues, string>>>({})
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange<K extends keyof RestaurantFormValues>(
    field: K,
    value: RestaurantFormValues[K],
  ) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateRestaurantForm(values)
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
        formType: 'restaurant',
        locale,
        payload: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          date: values.date,
          time: values.time,
          guests: values.guests,
          notes: values.notes,
          _subject:
            locale === 'bg'
              ? 'Нова резервация за ресторант | Hotel Diamanti'
              : 'New restaurant reservation | Hotel Diamanti',
        },
      })

      setSuccess(true)
      trackEvent('restaurant_reservation_submit', { source: 'single_page' })
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
    <SectionContainer id="restaurant" background="ivory">
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.05fr]">
        <RevealOnScroll>
          <div>
            <SectionHeading
              eyebrow={{
                bg: 'Ресторант и закуска',
                en: 'Restaurant and breakfast',
              }}
              title={{
                bg: 'Закуска на терасата и спокойни вечери с морски хоризонт.',
                en: 'Terrace breakfast and relaxed evenings with sea horizon.',
              }}
              description={{
                bg: 'Ресторантът допълва основния престой: сутрин с кафе и закуска, вечер с тиха атмосфера над водата.',
                en: 'The restaurant extends the stay: morning coffee and breakfast, then calm evening atmosphere above the sea.',
              }}
            />
            <ul className="mt-6 space-y-3 rounded-2xl border border-diamanti-sand/70 bg-white p-5 text-sm text-diamanti-navy/85 md:text-base">
              <li>• {locale === 'bg' ? 'Тераса с директна морска панорама' : 'Terrace with direct sea panorama'}</li>
              <li>• {locale === 'bg' ? 'Подходящо за гости и външни посетители' : 'Suitable for hotel guests and outside visitors'}</li>
              <li>• {locale === 'bg' ? 'Възможност за комбиниране с настаняване' : 'Can be combined with accommodation stay'}</li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookingCta placement="restaurant_section_primary">{ctas.book[locale]}</BookingCta>
              <a
                href="#weddings-events"
                className="inline-flex items-center justify-center rounded-full border border-diamanti-navy px-5 py-3 text-sm font-medium text-diamanti-navy transition duration-300 hover:-translate-y-0.5 hover:bg-diamanti-sand/40 md:text-base"
              >
                {ctas.askWedding[locale]}
              </a>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <SmartImage
            image={sectionImages.restaurantTerrace}
            className="min-h-[360px]"
            imgClassName="aspect-[4/3]"
          />
        </RevealOnScroll>
      </div>

      <RevealOnScroll delayMs={160}>
        <div className="mt-10 rounded-3xl border border-diamanti-sand/70 bg-white p-6 md:p-7">
          <h3 className="font-display text-3xl text-diamanti-navy md:text-4xl">
            {locale === 'bg' ? 'Резервирай маса' : 'Reserve a table'}
          </h3>
          <p className="mt-2 text-sm text-diamanti-navy/75 md:text-base">
            {locale === 'bg'
              ? 'Изпратете предпочитани дата и час. Ще потвърдим обратно с налични места.'
              : 'Send your preferred date and time. We will confirm availability.'}
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2" noValidate>
            <FormField
              id="restaurant-name"
              label={locale === 'bg' ? 'Име' : 'Name'}
              value={values.name}
              onChange={(event) => handleChange('name', event.target.value)}
              error={errors.name}
              autoComplete="name"
            />
            <FormField
              id="restaurant-email"
              type="email"
              label="Email"
              value={values.email}
              onChange={(event) => handleChange('email', event.target.value)}
              error={errors.email}
              autoComplete="email"
            />
            <FormField
              id="restaurant-phone"
              label={locale === 'bg' ? 'Телефон' : 'Phone'}
              value={values.phone}
              onChange={(event) => handleChange('phone', event.target.value)}
              error={errors.phone}
              autoComplete="tel"
            />
            <FormField
              id="restaurant-date"
              type="date"
              label={locale === 'bg' ? 'Дата' : 'Date'}
              value={values.date}
              onChange={(event) => handleChange('date', event.target.value)}
              error={errors.date}
            />
            <FormField
              id="restaurant-time"
              type="time"
              label={locale === 'bg' ? 'Час' : 'Time'}
              value={values.time}
              onChange={(event) => handleChange('time', event.target.value)}
              error={errors.time}
            />
            <FormField
              id="restaurant-guests"
              label={locale === 'bg' ? 'Брой гости' : 'Guests'}
              value={values.guests}
              onChange={(event) => handleChange('guests', event.target.value)}
              error={errors.guests}
              placeholder={locale === 'bg' ? 'например 2' : 'for example 2'}
            />
            <div className="md:col-span-2">
              <TextAreaField
                id="restaurant-notes"
                label={locale === 'bg' ? 'Бележки (по желание)' : 'Notes (optional)'}
                value={values.notes}
                onChange={(event) => handleChange('notes', event.target.value)}
                placeholder={
                  locale === 'bg'
                    ? 'Алергии, детско столче, предпочитана позиция...'
                    : 'Allergies, child seat, preferred table...'
                }
              />
            </div>
            <div className="md:col-span-2">
              <CtaButton type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? locale === 'bg'
                    ? 'Изпращане...'
                    : 'Sending...'
                  : ctas.reserveTable[locale]}
              </CtaButton>
              {success ? (
                <p className="mt-3 text-sm text-green-700">
                  {locale === 'bg'
                    ? 'Благодарим. Запитването е изпратено успешно.'
                    : 'Thank you. Your request was submitted successfully.'}
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
