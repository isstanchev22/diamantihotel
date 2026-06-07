import { useLocation } from 'react-router-dom'
import { brandLogoUrl, contactDetails, ctas, navigationLinks } from '../../data/siteData'
import { useLanguage } from '../../context/LanguageContext'
import { trackEvent } from '../../lib/tracking'
import { bookingEngineUrl } from '../../data/siteData'

export function SiteFooter() {
  const { locale } = useLanguage()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <footer className="border-t border-diamanti-sand/60 bg-diamanti-navy text-diamanti-ivory">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
        <div>
          <img
            src={brandLogoUrl}
            alt="Hotel Diamanti"
            className="h-16 w-auto object-contain"
          />
          <p className="mt-3 max-w-md text-sm leading-relaxed text-diamanti-ivory/85">
            {locale === 'bg'
              ? 'Хотел на самия бряг в Стария Созопол, където гледката, закуската и личното отношение са еднакво важни.'
              : 'A waterfront hotel in Old Sozopol where sea view, breakfast, and personal service matter equally.'}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={contactDetails.phoneHref}
              className="rounded-full border border-diamanti-ivory/30 px-4 py-2 text-sm hover:bg-diamanti-ivory/10"
            >
              {locale === 'bg' ? 'Рецепция' : 'Reception'}
            </a>
            <a
              href={contactDetails.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-diamanti-ivory/30 px-4 py-2 text-sm hover:bg-diamanti-ivory/10"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.14em] text-diamanti-ivory/75">
            {locale === 'bg' ? 'Навигация' : 'Navigation'}
          </h3>
          <ul className="mt-4 space-y-2">
            {navigationLinks.map((item) => (
              <li key={item.to}>
                <a
                  href={isHomePage ? item.to : `/${item.to}`}
                  className="text-sm text-diamanti-ivory/85 hover:text-diamanti-ivory"
                >
                  {item.label[locale]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.14em] text-diamanti-ivory/75">
            {locale === 'bg' ? 'Контакт' : 'Contact'}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-diamanti-ivory/85">
            <li>{contactDetails.address[locale]}</li>
            <li>
              <a href={contactDetails.phoneHref} className="hover:text-diamanti-ivory">
                {contactDetails.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={contactDetails.mobileHref} className="hover:text-diamanti-ivory">
                {contactDetails.mobileDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactDetails.email}`}
                className="hover:text-diamanti-ivory"
              >
                {contactDetails.email}
              </a>
            </li>
            <li>
              <a
                href={contactDetails.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-diamanti-ivory"
              >
                {locale === 'bg' ? 'Отвори в Google Maps' : 'Open in Google Maps'}
              </a>
            </li>
          </ul>
          <a
            href={bookingEngineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-diamanti-ivory px-5 py-2 text-sm font-medium text-diamanti-navy transition hover:bg-white"
            onClick={() => trackEvent('booking_cta_click', { placement: 'footer' })}
          >
            {ctas.book[locale]}
          </a>
        </div>
      </div>

      <div className="border-t border-diamanti-ivory/15">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-4 text-xs text-diamanti-ivory/75 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Hotel Diamanti</p>
        </div>
      </div>
    </footer>
  )
}
