export function scrollToSection(hash: string) {
  const id = hash.replace('#', '')
  const target = document.getElementById(id)
  if (!target) {
    return
  }

  const header = document.getElementById('site-header')
  const offset = header ? header.offsetHeight : 0
  const top = target.getBoundingClientRect().top + window.scrollY - offset - 8

  window.scrollTo({ top, behavior: 'smooth' })
  window.history.replaceState({}, '', `#${id}`)
}
