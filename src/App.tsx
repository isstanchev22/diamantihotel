import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { MobileBookingBar } from './components/layout/MobileBookingBar'
import { ScrollManager } from './components/layout/ScrollManager'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { HomePage } from './pages/HomePage'
import { LanguageChoiceModal } from './components/ui/LanguageChoiceModal'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollManager />
        <div className="min-h-screen bg-diamanti-limestone text-diamanti-ink">
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
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <SiteFooter />
          <MobileBookingBar />
          <LanguageChoiceModal />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
