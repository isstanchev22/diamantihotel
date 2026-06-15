import type Lenis from 'lenis'

// Module-level reference so non-React helpers (e.g. scrollToSection) can drive
// the active Lenis instance for inertia-smooth anchor scrolling.
let lenisInstance: Lenis | null = null

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance
}

export function getLenis(): Lenis | null {
  return lenisInstance
}
