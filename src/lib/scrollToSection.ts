import { getLenis } from './lenisStore'

export function scrollToSection(hash: string) {
  const id = hash.replace('#', '')
  const target = document.getElementById(id)
  if (!target) {
    return
  }

  const header = document.getElementById('site-header')
  const offset = (header ? header.offsetHeight : 0) + 8

  const lenis = getLenis()
  if (lenis) {
    // Inertia-smooth scroll through Lenis when active.
    lenis.scrollTo(target, { offset: -offset })
  } else {
    const top = target.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  window.history.replaceState({}, '', `#${id}`)
}
