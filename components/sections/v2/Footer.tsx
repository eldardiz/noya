import { brand } from '@/lib/brand'

// V2 Footer — working links, legal pages, franz-digital credit.
const links = [
  { label: 'Speisen', href: '#speisen' },
  { label: 'Frühstück', href: '#fruhstuck' },
  { label: 'Galerie', href: '#ambiente' },
  { label: 'Kontakt', href: '#anfahrt' },
  { label: 'TikTok', href: brand.social.tiktokUrl, ext: true },
  { label: 'Instagram', href: brand.social.instagramUrl, ext: true },
]

export default function FooterV2() {
  return (
    <footer className="footer section bg-brown">
      <div className="noise" />
      <div className="foot-row">
        <div>
          <div className="logo display" style={{ fontSize: 36, letterSpacing: '.18em', color: 'var(--noya-beige)', textTransform: 'uppercase' }}>{brand.name}</div>
          <div className="meta gold" style={{ marginTop: 8 }}>Mediterranean Fusion · Wien</div>
        </div>
        <nav className="foot-links">
          {links.map((l) => (
            <a key={l.label} href={l.href} {...(l.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{l.label}</a>
          ))}
        </nav>
        <div style={{ textAlign: 'right' }}>
          <div className="meta" style={{ opacity: .75 }}>{brand.address.line1}</div>
          <div className="meta" style={{ opacity: .75, marginTop: 4 }}>{brand.address.line2} · {brand.address.country}</div>
        </div>
      </div>
      <div className="foot-bottom">
        <span className="script" style={{ color: 'var(--noya-gold)' }}>made with love in wien</span>
        <span style={{ opacity: .75 }}>
          © 2026 {brand.name} · <a href="/impressum">Impressum</a> · <a href="/datenschutz">Datenschutz</a> · Webdesign by <a href="https://franz-digital.at" target="_blank" rel="noopener noreferrer">franz-digital.at</a>
        </span>
      </div>
    </footer>
  )
}
