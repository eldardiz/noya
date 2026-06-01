import { brand } from '@/lib/brand'

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <img className="hero-img" src="/assets/hero-waitress.jpg" alt="Gastgeberin im NOYA, Wien 20" />
      <div className="hero-overlay" />
      <div className="noise" />

      <div className="hero-headline">
        <div className="script hero-fade">vom morgen bis zum abend</div>
        <h1 className="display" data-words-pullup>Mediterrane Küche</h1>
        <div className="hero-tags hero-fade">
          <span>Frühstück</span><span>·</span><span>Mittagessen</span><span>·</span><span>Dinner</span>
          <span className="sep" />
          <span className="gold">{brand.venue} {brand.city}</span>
        </div>
        <div className="hero-actions hero-fade">
          <a className="btn beige-fill" href={brand.reserveUrl}>Reservieren</a>
          <a className="btn" href="#speisen">Speisekarte</a>
        </div>
      </div>

      <div className="hero-meta left hero-fade"><div className="meta">{brand.city} · {brand.venue}</div></div>
      <div className="hero-meta right hero-fade"><div className="meta">{brand.hours.heroLine}</div></div>
      <div className="hero-scroll hero-fade">SCROLL</div>
    </section>
  )
}
