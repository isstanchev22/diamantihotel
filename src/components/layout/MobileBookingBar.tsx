import { bookingEngineUrl, contactDetails, ctas } from '../../data/siteData'
import { useLanguage } from '../../context/LanguageContext'
import { trackEvent } from '../../lib/tracking'
import { Icon } from '../ui/Icon'

export function MobileBookingBar() {
  const { locale } = useLanguage()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-diamanti-mist/40 bg-diamanti-limestone/95 p-3 shadow-lift backdrop-blur md:hidden">
      <div className="mx-auto flex w-full max-w-7xl gap-2">
        <a
          href={bookingEngineUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent('booking_cta_click', {
              placement: 'sticky_mobile',
              destination: 'clock_wbe_hotel_13742',
            })
          }
          className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-diamanti-brass px-4 py-3 text-sm font-semibold text-diamanti-ink"
        >
          {ctas.book[locale]}
          <Icon name="arrow-right" size={17} />
        </a>
        <a
          href={contactDetails.mobileHref}
          aria-label={locale === 'bg' ? 'Обади се' : 'Call'}
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-diamanti-sea px-4 py-3 text-sm font-semibold text-diamanti-sea"
        >
          <Icon name="phone" size={17} />
          {locale === 'bg' ? 'Обади се' : 'Call'}
        </a>
      </div>
    </div>
  )
}
