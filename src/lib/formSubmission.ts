type FormType = 'contact' | 'wedding' | 'restaurant'

interface SubmitFormOptions {
  formType: FormType
  locale: 'bg' | 'en'
  payload: Record<string, string>
}

function resolveFormEndpoint(formType: FormType): string {
  const endpointByType: Record<FormType, string | undefined> = {
    contact: import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT,
    wedding: import.meta.env.VITE_FORMSPREE_WEDDING_ENDPOINT,
    restaurant: import.meta.env.VITE_FORMSPREE_RESTAURANT_ENDPOINT,
  }

  const selected = endpointByType[formType] ?? import.meta.env.VITE_FORMSPREE_ENDPOINT
  return selected?.trim() ?? ''
}

export async function submitFormEnquiry({
  formType,
  locale,
  payload,
}: SubmitFormOptions): Promise<void> {
  const endpoint = resolveFormEndpoint(formType)

  if (!endpoint) {
    throw new Error('missing_form_endpoint')
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      formType,
      locale,
      submittedAt: new Date().toISOString(),
      source: 'hotel-diamanti-single-page',
      ...payload,
    }),
  })

  if (!response.ok) {
    throw new Error('form_submit_failed')
  }
}
