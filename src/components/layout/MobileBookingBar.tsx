import { bookingEngineUrl, contactDetails, ctas } from '../../data/siteData'
import { useLanguage } from '../../context/LanguageContext'
import { trackEvent } from '../../lib/tracking'

export function MobileBookingBar() {
  const { locale } = useLanguage()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-diamanti-sand/60 bg-diamanti-ivory/95 p-3 shadow-2xl backdrop-blur md:hidden">
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
          className="inline-flex flex-1 items-center justify-center rounded-full bg-diamanti-navy px-4 py-3 text-sm font-medium text-diamanti-ivory"
        >
          {ctas.book[locale]}
        </a>
        <a
          href={contactDetails.mobileHref}
          className="inline-flex items-center justify-center rounded-full border border-diamanti-navy px-4 py-3 text-sm font-medium text-diamanti-navy"
        >
          {locale === 'bg' ? 'Обади се' : 'Call'}
        </a>
      </div>
    </div>
  )
}
