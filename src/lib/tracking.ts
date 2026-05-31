declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      params?: Record<string, string | number | boolean>,
    ) => void
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === 'undefined') {
    return
  }

  if (window.gtag) {
    window.gtag('event', eventName, params)
    return
  }

  // TODO: Remove console fallback after GA4 is connected.
  console.info(`[tracking] ${eventName}`, params)
}
