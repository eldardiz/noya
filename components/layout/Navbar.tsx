'use client'

import { useEffect, useState } from 'react'
import { brand, nav } from '@/lib/brand'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#top" className="logo">{brand.name}</a>
      <nav className="links">
        {nav.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
      <div className="right">
        <span className="phone">{brand.phone}</span>
        <a href={brand.reserveUrl} className="pill">Reservieren</a>
        <button className="burger" aria-label="Menü">
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
