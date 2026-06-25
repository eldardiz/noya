'use client'

import { useEffect, useState } from 'react'

// V2 Ambiente — gap-free masonry of all ambient shots, each click-to-enlarge (lightbox).
const gallery = [
  { src: '/assets/v2/sections/ambiente-1.jpg', alt: 'Warmes Licht im NOYA' },
  { src: '/assets/v2/sections/ambiente-2.jpg', alt: 'Der Gastraum im NOYA' },
  { src: '/assets/v2/sections/ambiente-7.jpg', alt: 'NOYA Schriftzug' },
  { src: '/assets/v2/sections/ambiente-3.jpg', alt: 'Tische im NOYA' },
  { src: '/assets/v2/sections/ambiente-8.jpg', alt: 'Gedeckte Tafel im NOYA' },
  { src: '/assets/v2/sections/ambiente-4.jpg', alt: 'NOYA Detail' },
  { src: '/assets/v2/sections/ambiente-9.jpg', alt: 'Tischgedeck im NOYA' },
  { src: '/assets/v2/sections/ambiente-5.jpg', alt: 'Wand im NOYA' },
  { src: '/assets/v2/sections/ambiente-10.jpg', alt: 'Abendtisch im NOYA' },
  { src: '/assets/v2/sections/ambiente-6.jpg', alt: 'Die Bar im NOYA' },
]

export default function AmbienteV2() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!active) return
    document.body.classList.add('hv2-noscroll')
    window.__lenis?.stop()
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('hv2-noscroll')
      window.__lenis?.start()
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section className="section bg-beige" id="ambiente">
      <div className="noise" />
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="script">das haus, von innen</div>
            <h2 className="display brown" data-words-pullup style={{ fontSize: 'clamp(48px,8vw,110px)', marginTop: 6 }}>Ambiente</h2>
          </div>
          <div style={{ textAlign: 'right', maxWidth: 240 }}>
            <p className="body-copy brown" style={{ fontSize: 12, opacity: .7 }}>
              Warmes Licht, marokkanische Lampen, italienische Cimbali.
            </p>
          </div>
        </div>

        <div className="hv2-gallery" data-card-stagger>
          {gallery.map((t) => (
            <figure key={t.src} data-card onClick={() => setActive(t.src)}>
              <img src={t.src} alt={t.alt} />
            </figure>
          ))}
        </div>
      </div>

      {active && (
        <div className="hv2-lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button className="hv2-lightbox-close" aria-label="Schließen" onClick={() => setActive(null)}>
            <span /><span />
          </button>
          <img src={active} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
