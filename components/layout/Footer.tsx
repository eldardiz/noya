import { brand } from '@/lib/brand'

const links = ['Speisen', 'Frühstück', 'Galerie', 'Kontakt', 'TikTok', 'Instagram']

export default function Footer() {
  return (
    <footer className="footer section bg-brown">
      <div className="noise" />
      <div className="foot-row">
        <div>
          <div className="logo display" style={{ fontSize: 36, letterSpacing: '.18em', color: 'var(--noya-beige)', textTransform: 'uppercase' }}>{brand.name}</div>
          <div className="meta gold" style={{ marginTop: 8 }}>Mediterranean Fusion · Wien</div>
        </div>
        <nav className="foot-links">
          {links.map((l) => <a key={l} href="#">{l}</a>)}
        </nav>
        <div style={{ textAlign: 'right' }}>
          <div className="meta" style={{ opacity: .75 }}>{brand.address.line1}</div>
          <div className="meta" style={{ opacity: .75, marginTop: 4 }}>{brand.address.line2} · {brand.address.country}</div>
        </div>
      </div>
      <div className="foot-bottom">
        <span className="script" style={{ color: 'var(--noya-gold)' }}>made with love in wien</span>
        <span style={{ opacity: .7 }}>© 2026 {brand.name} · Impressum · Datenschutz · Webdesign by Axamo</span>
      </div>
    </footer>
  )
}
