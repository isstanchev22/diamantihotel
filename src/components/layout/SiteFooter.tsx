import { useLocation } from 'react-router-dom'
import { brandLogoUrl, contactDetails, ctas, navigationLinks } from '../../data/siteData'
import { useLanguage } from '../../context/LanguageContext'
import { trackEvent } from '../../lib/tracking'
import { bookingEngineUrl } from '../../data/siteData'
import { Icon } from '../ui/Icon'

export function SiteFooter() {
  const { locale } = useLanguage()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <footer className="bg-diamanti-ink text-diamanti-limestone">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="horizon-divider" aria-hidden="true" />
      </div>
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.3fr_1fr_1.1fr] md:px-8">
        <div>
          <img
            src={brandLogoUrl}
            alt="Hotel Diamanti"
            className="h-16 w-auto object-contain"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-diamanti-limestone/80">
            {locale === 'bg'
              ? 'Хотел на самия бряг в Стария Созопол, където гледката, закуската и личното отношение са еднакво важни.'
              : 'A waterfront hotel in Old Sozopol where sea view, breakfast, and personal service matter equally.'}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={contactDetails.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-diamanti-limestone/25 px-4 py-2 text-sm transition hover:border-diamanti-brass hover:text-diamanti-brass"
            >
              <Icon name="phone" size={16} />
              {locale === 'bg' ? 'Рецепция' : 'Reception'}
            </a>
            <a
              href={contactDetails.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-diamanti-limestone/25 px-4 py-2 text-sm transition hover:border-diamanti-brass hover:text-diamanti-brass"
            >
              <Icon name="whatsapp" size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-diamanti-brass">
            {locale === 'bg' ? 'Навигация' : 'Navigation'}
          </h3>
          <ul className="mt-5 space-y-2.5">
            {navigationLinks.map((item) => (
              <li key={item.to}>
                <a
                  href={isHomePage ? item.to : `/${item.to}`}
                  className="text-sm text-diamanti-limestone/80 transition hover:text-diamanti-limestone"
                >
                  {item.label[locale]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-diamanti-brass">
            {locale === 'bg' ? 'Контакт' : 'Contact'}
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-diamanti-limestone/80">
            <li className="flex gap-2.5">
              <Icon name="map-pin" size={17} className="mt-0.5 shrink-0 text-diamanti-mist" />
              <span>{contactDetails.address[locale]}</span>
            </li>
            <li className="flex gap-2.5">
              <Icon name="phone" size={17} className="mt-0.5 shrink-0 text-diamanti-mist" />
              <span className="flex flex-col">
                <a href={contactDetails.phoneHref} className="hover:text-diamanti-limestone">
                  {contactDetails.phoneDisplay}
                </a>
                <a href={contactDetails.mobileHref} className="hover:text-diamanti-limestone">
                  {contactDetails.mobileDisplay}
                </a>
              </span>
            </li>
            <li className="flex gap-2.5">
              <Icon name="mail" size={17} className="mt-0.5 shrink-0 text-diamanti-mist" />
              <a
                href={`mailto:${contactDetails.email}`}
                className="hover:text-diamanti-limestone"
              >
                {contactDetails.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Icon name="compass" size={17} className="mt-0.5 shrink-0 text-diamanti-mist" />
              <a
                href={contactDetails.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-diamanti-limestone"
              >
                {locale === 'bg' ? 'Отвори в Google Maps' : 'Open in Google Maps'}
              </a>
            </li>
          </ul>
          <a
            href={bookingEngineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-diamanti-brass px-5 py-2.5 text-sm font-semibold text-diamanti-ink transition hover:bg-diamanti-brassDeep"
            onClick={() => trackEvent('booking_cta_click', { placement: 'footer' })}
          >
            {ctas.book[locale]}
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </div>

      <div className="border-t border-diamanti-limestone/12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-diamanti-limestone/70 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Hotel Diamanti</p>
          <p>{locale === 'bg' ? 'Стария Созопол, България' : 'Old Town Sozopol, Bulgaria'}</p>
        </div>
      </div>
    </footer>
  )
}
