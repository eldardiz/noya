'use client'

import { useEffect } from 'react'

// The "Passage feel" motion system, ported to vanilla GSAP + Lenis and
// re-tuned for NOYA's markup. Driven entirely by data-* attributes and
// class names so section components stay declarative.
export default function AnimationInit() {
  useEffect(() => {
    let mounted = true

    async function init() {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      if (!mounted) return

      // Frame-accurate sync of Lenis -> ScrollTrigger
      const lenisInst = window.__lenis
      if (lenisInst?.on) lenisInst.on('scroll', () => ScrollTrigger.update())
      else window.addEventListener('lenis-scroll', () => ScrollTrigger.update(), { passive: true })

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // ---- helpers ----
      function splitWords(el: Element) {
        const text = el.textContent ?? ''
        el.textContent = ''
        const frag = document.createDocumentFragment()
        text.split(/(\s+)/).forEach((token) => {
          if (token.match(/^\s+$/)) frag.appendChild(document.createTextNode(token))
          else if (token.length) {
            const w = document.createElement('span')
            w.className = 'word'
            const inner = document.createElement('span')
            inner.className = 'inner'
            inner.textContent = token
            w.appendChild(inner)
            frag.appendChild(w)
          }
        })
        el.appendChild(frag)
        return el.querySelectorAll('.word .inner')
      }

      function splitChars(el: Element) {
        const walk = (node: Node) => {
          if (node.nodeType === 3) {
            const text = node.textContent ?? ''
            const frag = document.createDocumentFragment()
            for (const c of text) {
              if (c === ' ') frag.appendChild(document.createTextNode(' '))
              else {
                const span = document.createElement('span')
                span.className = 'char'
                span.textContent = c
                frag.appendChild(span)
              }
            }
            node.parentNode?.replaceChild(frag, node)
          } else if (node.nodeType === 1) Array.from(node.childNodes).forEach(walk)
        }
        walk(el)
        return el.querySelectorAll('.char')
      }

      // ---- runs immediately ----
      function vinylSpin() {
        document.querySelectorAll('.vinyl').forEach((v) => {
          gsap.to(v, { rotation: 360, duration: 16, repeat: -1, ease: 'none' })
        })
      }

      function infiniteMarquees() {
        document.querySelectorAll('.marquee').forEach((m) => {
          const track = m.querySelector<HTMLElement>('.marquee-track')
          if (!track) return
          track.innerHTML += track.innerHTML
          const w = track.scrollWidth / 2
          gsap.set(track, { x: 0 })
          const speed = parseFloat((m as HTMLElement).dataset.speed ?? '60') || 60
          gsap.to(track, { x: -w, duration: w / speed, ease: 'none', repeat: -1 })
          const bias = gsap.quickTo(track, 'skewX', { duration: 0.6, ease: 'power3.out' })
          ScrollTrigger.create({
            trigger: m, start: 'top bottom', end: 'bottom top',
            onUpdate: (st) => bias(gsap.utils.clamp(-6, 6, st.getVelocity() / 240)),
          })
        })
      }

      function testimonialsTicker() {
        document.querySelectorAll<HTMLElement>('.testi-track').forEach((track) => {
          track.innerHTML += track.innerHTML
          const items = track.children
          let half = 0
          Array.from(items).slice(0, items.length / 2).forEach((it) => {
            half += (it as HTMLElement).offsetWidth + 24
          })
          gsap.set(track, { x: 0 })
          gsap.to(track, { x: -half, duration: half / 36, ease: 'none', repeat: -1 })
        })
      }

      // ---- scroll-triggered (run after preloader) ----
      function heroScroll() {
        const hero = document.querySelector('.hero')
        if (!hero) return
        const img = hero.querySelector('.hero-img')
        const headline = hero.querySelector('.hero-headline')
        if (img) gsap.to(img, { yPercent: 16, scale: 1.08, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } })
        if (headline) gsap.to(headline, { yPercent: -32, opacity: 0.25, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } })
      }

      function wordsPullUp() {
        document.querySelectorAll('[data-words-pullup]').forEach((el) => {
          const words = splitWords(el)
          gsap.fromTo(words, { yPercent: 115, opacity: 0 }, {
            yPercent: 0, opacity: 1, duration: 1.0, ease: 'power4.out', stagger: 0.08,
            scrollTrigger: { trigger: el, start: 'top 88%' },
          })
        })
      }

      function animatedParagraphs() {
        document.querySelectorAll('[data-anim-para]').forEach((el) => {
          const chars = splitChars(el)
          el.classList.add('char-reveal')
          gsap.fromTo(chars, { opacity: 0.2 }, {
            opacity: 1, ease: 'none', stagger: { each: 0.02, from: 'start' },
            scrollTrigger: { trigger: el, start: 'top 78%', end: 'bottom 62%', scrub: true },
          })
        })
      }

      function genericReveals() {
        document.querySelectorAll('[data-reveal]').forEach((el) => {
          gsap.fromTo(el, { opacity: 0, yPercent: 8, filter: 'blur(16px)' }, {
            opacity: 1, yPercent: 0, filter: 'blur(0px)', duration: 1.3, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          })
        })
        document.querySelectorAll('[data-card-stagger]').forEach((container) => {
          const items = container.querySelectorAll('[data-card]')
          gsap.fromTo(items, { opacity: 0, scale: 0.96, y: 28 }, {
            opacity: 1, scale: 1, y: 0, duration: 1.0, ease: 'power3.out', stagger: 0.1,
            scrollTrigger: { trigger: container, start: 'top 82%' },
          })
        })
      }

      function parallaxImages() {
        document.querySelectorAll('[data-parallax]').forEach((el) => {
          const speed = parseFloat((el as HTMLElement).dataset.parallax ?? '0.15') || 0.15
          gsap.to(el, { yPercent: speed * 100, ease: 'none', scrollTrigger: {
            trigger: (el as HTMLElement).parentElement, start: 'top bottom', end: 'bottom top', scrub: true,
          }})
        })
      }

      function finalCtaScroll() {
        const fc = document.querySelector('.final-cta')
        if (!fc) return
        const bg = fc.querySelector('.final-cta-bg')
        if (bg) gsap.to(bg, { yPercent: 16, scale: 1.1, ease: 'none', scrollTrigger: { trigger: fc, start: 'top bottom', end: 'bottom top', scrub: true } })
      }

      // The one "stop and look" moment — horizontal sticky pan (desktop only)
      function horizontalScroll() {
        const mm = gsap.matchMedia()
        mm.add('(min-width:768px)', () => {
          const outers = document.querySelectorAll<HTMLElement>('[data-hscroll-outer]')
          if (!outers.length) return
          const ctx = gsap.context(() => {
            outers.forEach((outer) => {
              const panels = gsap.utils.toArray<HTMLElement>('[data-hscroll-panel]', outer)
              if (panels.length < 2) return
              const setH = () => { outer.style.height = `${window.innerHeight + (panels.length - 1) * window.innerWidth}px` }
              setH()
              gsap.to(panels, {
                x: () => -((panels.length - 1) * window.innerWidth),
                ease: 'none',
                scrollTrigger: { trigger: outer, start: 'top top', end: 'bottom bottom', scrub: true, invalidateOnRefresh: true, onRefresh: setH },
              })
            })
          })
          return () => { ctx.revert(); outers.forEach((o) => { o.style.height = '' }) }
        })
      }

      // Run immediately
      if (!prefersReduced) { vinylSpin(); infiniteMarquees(); testimonialsTicker() }

      function runScrollAnimations() {
        if (prefersReduced) { ScrollTrigger.refresh(); return }
        heroScroll(); wordsPullUp(); animatedParagraphs(); genericReveals()
        parallaxImages(); finalCtaScroll(); horizontalScroll()
        ScrollTrigger.refresh()
      }

      window.addEventListener('preloader-done', runScrollAnimations, { once: true })
      if (!document.querySelector('.preloader')) setTimeout(runScrollAnimations, 100)
    }

    init()
    return () => { mounted = false }
  }, [])

  return null
}
