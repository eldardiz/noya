'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __lenis?: any
  }
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let rafId: number
    let destroyed = false
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenis: any = null

    // Lenis is ESM-only — dynamic import inside useEffect.
    import('lenis').then(({ default: Lenis }) => {
      if (destroyed) return
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.5,
        infinite: false,
      })
      window.__lenis = lenis

      lenis.on('scroll', () => {
        window.dispatchEvent(new CustomEvent('lenis-scroll'))
      })

      function raf(time: number) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    })

    return () => {
      destroyed = true
      cancelAnimationFrame(rafId)
      if (lenis) {
        lenis.destroy()
        delete window.__lenis
      }
    }
  }, [])

  return <>{children}</>
}
