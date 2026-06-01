'use client'

import { useEffect, useRef, useState } from 'react'

export default function Preloader() {
  const [done, setDone] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mounted = true

    async function run() {
      const { default: gsap } = await import('gsap')
      window.__lenis?.stop()

      const counter = counterRef.current
      const mask = maskRef.current
      const content = contentRef.current
      const root = rootRef.current
      if (!root) return

      const obj = { v: 0 }
      gsap.to(obj, {
        v: 100,
        duration: 1.5,
        ease: 'power1.inOut',
        onUpdate: () => { if (counter) counter.textContent = String(Math.floor(obj.v)).padStart(3, '0') },
        onComplete: () => {
          if (!mounted) return
          gsap.to(content, { opacity: 0, duration: 0.4, ease: 'power2.out' })
          gsap.to(mask, {
            clipPath: 'circle(0% at 50% 50%)',
            duration: 1.5,
            ease: 'power3.inOut',
            delay: 0.15,
            onComplete: () => {
              if (!mounted) return
              root.style.pointerEvents = 'none'
              gsap.to(root, {
                opacity: 0,
                duration: 0.4,
                onComplete: () => {
                  if (!mounted) return
                  window.__lenis?.start()
                  setDone(true)
                  window.dispatchEvent(new CustomEvent('preloader-done'))
                },
              })
            },
          })

          // Hero entrance, choreographed to the reveal
          const heroImg = document.querySelector('.hero-img')
          if (heroImg) gsap.fromTo(heroImg, { scale: 1.35, filter: 'brightness(0.55)' }, { scale: 1, filter: 'brightness(1)', duration: 2.2, ease: 'power3.out', delay: 0.3 })

          const innerWords = document.querySelectorAll('.hero-headline .word .inner')
          if (innerWords.length) gsap.fromTo(Array.from(innerWords), { yPercent: 115 }, { yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.06, delay: 0.85 })

          gsap.fromTo('.hero-fade', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.12, delay: 1.3 })
        },
      })
    }

    run()
    return () => { mounted = false }
  }, [])

  if (done) return null

  return (
    <div className="preloader" ref={rootRef}>
      <div className="preloader-bg" aria-hidden="true">
        <img src="/assets/hero-waitress.jpg" alt="" />
      </div>
      <div className="preloader-mask" ref={maskRef} />
      <div className="preloader-content" ref={contentRef}>
        <span className="mark">NOYA</span>
        <span className="lead">Wien 20 · Mediterran</span>
      </div>
      <div className="preloader-counter" ref={counterRef}>000</div>
    </div>
  )
}
