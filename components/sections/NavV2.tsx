'use client'

import { useEffect, useState } from 'react'
import { brand } from '@/lib/brand'

// Roll-up hover label: the text is rendered twice inside an overflow-hidden clip;
// on hover the stack slides up so the duplicate replaces the original (Qitchen effect).
function RollLabel({ text }: { text: string }) {
  return (
    <span className="hv2-roll" data-text={text}>
      <span className="hv2-roll-in">
        <span>{text}</span>
        <span aria-hidden="true">{text}</span>
      </span>
    </span>
  )
}

// Full-screen overlay links mirror Qitchen's order: primary actions first.
const menuLinks = [
  { label: 'Speisen', href: '#speisen' },
  { label: 'Reservieren', href: `tel:${brand.phoneHref}` },
  { label: 'Frühstück', href: '#fruhstuck' },
  { label: 'Über', href: '#ueber' },
  { label: 'Galerie', href: '#ambiente' },
  { label: 'Kontakt', href: '#anfahrt' },
]

export default function NavV2() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Solidify the pill once scrolled past the hero (~70vh). Works with Lenis or native.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    const lenis = window.__lenis
    if (lenis?.on) lenis.on('scroll', onScroll)
    else window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('lenis-scroll', onScroll, { passive: true })
    return () => {
      lenis?.off?.('scroll', onScroll)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('lenis-scroll', onScroll)
    }
  }, [])

  // Lock scroll while the overlay is open (class + Lenis stop)
  useEffect(() => {
    document.body.classList.toggle('hv2-noscroll', open)
    if (open) window.__lenis?.stop()
    else window.__lenis?.start()
    return () => { document.body.classList.remove('hv2-noscroll'); window.__lenis?.start() }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      {/* closed pill */}
      <header className={`hv2-nav hv2-fade${scrolled ? ' scrolled' : ''}`}>
        <button className="hv2-burger" aria-label="Menü öffnen" onClick={() => setOpen(true)}>
          <span /><span /><span />
        </button>
        <span className="hv2-logo">{brand.name}</span>
        <nav className="hv2-links">
          <a href="#speisen"><RollLabel text="Speisen" /></a>
          <a href="#ueber"><RollLabel text="Über" /></a>
        </nav>
        <a className="hv2-reserve" href={`tel:${brand.phoneHref}`}><RollLabel text="Reservieren" /></a>
      </header>

      {/* fullscreen overlay menu */}
      <div className={`hv2-menu${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!open}>
        <button className="hv2-menu-close" aria-label="Menü schließen" onClick={() => setOpen(false)}>
          <span />
          <span />
        </button>

        <div className="hv2-menu-inner">
          <span className="hv2-orn" aria-hidden="true" />
          <nav className="hv2-menu-list">
            {menuLinks.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className="hv2-menu-link"
                style={{ transitionDelay: open ? `${0.12 + i * 0.06}s` : '0s' }}
                onClick={() => setOpen(false)}
              >
                <RollLabel text={l.label} />
              </a>
            ))}
          </nav>
          <span className="hv2-orn" aria-hidden="true" />
        </div>

        <div className="hv2-menu-foot">
          <span>{brand.address.line1} · {brand.address.line2}</span>
          <a href={brand.social.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </>
  )
}
