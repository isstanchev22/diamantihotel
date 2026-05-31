import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../../lib/scrollToSection'

export function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash
      requestAnimationFrame(() => scrollToSection(hash))
      return
    }

    window.scrollTo(0, 0)
  }, [location])

  return null
}
