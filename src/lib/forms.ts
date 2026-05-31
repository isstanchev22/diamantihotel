export interface ContactFormValues {
  name: string
  email: string
  phone: string
  arrivalDate: string
  departureDate: string
  guests: string
  message: string
}

export interface WeddingFormValues {
  name: string
  email: string
  phone: string
  eventDate: string
  guestCount: string
  message: string
}

export interface RestaurantFormValues {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  notes: string
}

export type FormErrors<T> = Partial<Record<keyof T, string>>

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function validateContactForm(
  values: ContactFormValues,
): FormErrors<ContactFormValues> {
  const errors: FormErrors<ContactFormValues> = {}

  if (!values.name.trim()) {
    errors.name = 'Моля, въведете име.'
  }
  if (!isValidEmail(values.email)) {
    errors.email = 'Моля, въведете валиден имейл.'
  }
  if (!values.phone.trim()) {
    errors.phone = 'Моля, въведете телефон.'
  }
  if (!values.arrivalDate) {
    errors.arrivalDate = 'Моля, изберете дата на пристигане.'
  }
  if (!values.departureDate) {
    errors.departureDate = 'Моля, изберете дата на заминаване.'
  }
  if (values.arrivalDate && values.departureDate) {
    const arrival = new Date(values.arrivalDate)
    const departure = new Date(values.departureDate)
    if (departure <= arrival) {
      errors.departureDate = 'Датата на заминаване трябва да е след пристигането.'
    }
  }
  if (!values.guests.trim()) {
    errors.guests = 'Моля, посочете брой гости.'
  }
  if (values.message.trim().length < 12) {
    errors.message = 'Добавете кратък детайл за престоя (мин. 12 символа).'
  }

  return errors
}

export function validateWeddingForm(
  values: WeddingFormValues,
): FormErrors<WeddingFormValues> {
  const errors: FormErrors<WeddingFormValues> = {}

  if (!values.name.trim()) {
    errors.name = 'Моля, въведете име.'
  }
  if (!isValidEmail(values.email)) {
    errors.email = 'Моля, въведете валиден имейл.'
  }
  if (!values.phone.trim()) {
    errors.phone = 'Моля, въведете телефон.'
  }
  if (!values.eventDate) {
    errors.eventDate = 'Моля, изберете ориентировъчна дата.'
  }
  if (!values.guestCount.trim()) {
    errors.guestCount = 'Моля, посочете брой гости.'
  }
  if (values.message.trim().length < 12) {
    errors.message = 'Споделете накратко какъв тип събитие планирате.'
  }

  return errors
}

export function validateRestaurantForm(
  values: RestaurantFormValues,
): FormErrors<RestaurantFormValues> {
  const errors: FormErrors<RestaurantFormValues> = {}

  if (!values.name.trim()) {
    errors.name = 'Моля, въведете име.'
  }
  if (!isValidEmail(values.email)) {
    errors.email = 'Моля, въведете валиден имейл.'
  }
  if (!values.phone.trim()) {
    errors.phone = 'Моля, въведете телефон.'
  }
  if (!values.date) {
    errors.date = 'Моля, изберете дата.'
  }
  if (!values.time) {
    errors.time = 'Моля, изберете час.'
  }
  if (!values.guests.trim()) {
    errors.guests = 'Моля, посочете брой гости.'
  }

  return errors
}
