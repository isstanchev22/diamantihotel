import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { MobileBookingBar } from './components/layout/MobileBookingBar'
import { ScrollManager } from './components/layout/ScrollManager'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'

const privacyBody = [
  {
    bg: 'Тази страница е временен legal placeholder. Добавете финалния текст според GDPR и вътрешните ви процеси.',
    en: 'This page is a temporary legal placeholder. Replace with final GDPR-compliant content.',
  },
  {
    bg: 'Събираме само данни, нужни за обработка на запитвания за настаняване, ресторант и събития.',
    en: 'We collect only data required to process accommodation, restaurant, and event enquiries.',
  },
]

const termsBody = [
  {
    bg: 'Тази страница е временен placeholder за общи условия на директни резервации и анулации.',
    en: 'This page is a temporary placeholder for direct booking and cancellation terms.',
  },
  {
    bg: 'Добавете финални правила за депозит, no-show, късно настаняване и сезонни условия.',
    en: 'Add final policies for deposits, no-shows, late check-in, and seasonal terms.',
  },
]

const cookiesBody = [
  {
    bg: 'Тази страница е временен placeholder за политика за бисквитки.',
    en: 'This page is a temporary cookie policy placeholder.',
  },
  {
    bg: 'След свързване на аналитика и маркетинг тагове, допълнете списък с реално използваните cookies.',
    en: 'After analytics and marketing tags are connected, list all active cookies here.',
  },
]

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollManager />
        <div className="min-h-screen bg-diamanti-ivory text-diamanti-navy">
          <SiteHeader />
          <main className="pb-24 md:pb-0">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/rooms" element={<Navigate to="/#rooms" replace />} />
              <Route path="/rooms/:slug" element={<Navigate to="/#rooms" replace />} />
              <Route path="/restaurant" element={<Navigate to="/#restaurant" replace />} />
              <Route
                path="/weddings-events"
                element={<Navigate to="/#weddings-events" replace />}
              />
              <Route path="/sozopol-guide" element={<Navigate to="/#sozopol-guide" replace />} />
              <Route
                path="/contact-parking"
                element={<Navigate to="/#contact-parking" replace />}
              />
              <Route path="/faq" element={<Navigate to="/#faq" replace />} />
              <Route path="/booking" element={<Navigate to="/" replace />} />

              <Route
                path="/privacy-policy"
                element={
                  <LegalPage
                    title={{
                      bg: 'Политика за поверителност',
                      en: 'Privacy policy',
                    }}
                    description={{
                      bg: 'Правила за обработка на лични данни в сайта на Hotel Diamanti.',
                      en: 'Personal data processing policy for Hotel Diamanti website.',
                    }}
                    body={privacyBody}
                  />
                }
              />
              <Route
                path="/terms"
                element={
                  <LegalPage
                    title={{
                      bg: 'Общи условия',
                      en: 'Terms and conditions',
                    }}
                    description={{
                      bg: 'Общи условия за ползване на уебсайта и запитвания към Hotel Diamanti.',
                      en: 'Website usage and enquiry terms for Hotel Diamanti.',
                    }}
                    body={termsBody}
                  />
                }
              />
              <Route
                path="/cookies"
                element={
                  <LegalPage
                    title={{
                      bg: 'Политика за бисквитки',
                      en: 'Cookie policy',
                    }}
                    description={{
                      bg: 'Информация за използването на бисквитки и аналитични инструменти.',
                      en: 'Information about cookie usage and analytics tools.',
                    }}
                    body={cookiesBody}
                  />
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <SiteFooter />
          <MobileBookingBar />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
