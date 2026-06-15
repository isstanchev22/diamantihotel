import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../../lib/scrollToSection'
import { getLenis } from '../../lib/lenisStore'

export function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash
      requestAnimationFrame(() => scrollToSection(hash))
      return
    }

    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}
