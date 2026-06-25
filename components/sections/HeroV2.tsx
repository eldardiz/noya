import { brand } from '@/lib/brand'
import NavV2 from '@/components/sections/NavV2'

// NOYA V2 hero — Qitchen-style bento: full-bleed hero photo (left) with a giant
// stacked display headline, a floating pill navbar, and a 3-card rail (right).
// Motion reuses the global system: data-words-pullup (headline), data-reveal
// (script), data-card-stagger (rail). Hover zoom + tab states are pure CSS.
export default function HeroV2() {
  return (
    <section className="hv2">
      <NavV2 />

      <div className="hv2-grid">
        {/* hero photo + headline */}
        <section className="hv2-hero">
          <video
            className="hv2-hero-img"
            poster="/assets/v2/hero-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="NOYA Showreel, Wien 20"
          >
            <source src="/videos/v2-hero-showreel.mp4" type="video/mp4" />
          </video>
          <div className="hv2-hero-grad" />
          <div className="noise" />

          <div className="hv2-hero-foot">
            <span className="script" data-reveal>vom morgen bis zum abend</span>
            <h1 className="display hv2-title" data-words-pullup>Mediterrane Küche</h1>
          </div>

          <div className="hv2-social hv2-fade">
            <a href={brand.social.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
            <span className="sep" />
            <a href={brand.social.tiktokUrl} target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </section>

        {/* card rail */}
        <aside className="hv2-rail" data-card-stagger>
          <a className="hv2-card" data-card href="#speisen">
            <img src="/assets/v2/card-speisen.jpg" alt="Mediterrane Speisen im NOYA" />
            <span className="hv2-tab">Speisen <span className="arrow">&rarr;</span></span>
          </a>
          <a className="hv2-card" data-card href={brand.reserveUrl}>
            <img src="/assets/v2/card-reservieren.jpg" alt="Gäste bei NOYA" />
            <span className="hv2-tab">Reservieren <span className="arrow">&rarr;</span></span>
          </a>
          <a className="hv2-card" data-card href="#ambiente">
            <img src="/assets/v2/card-galerie.jpg" alt="Ambiente im NOYA" />
            <span className="hv2-tab">Galerie <span className="arrow">&rarr;</span></span>
          </a>
        </aside>
      </div>
    </section>
  )
}
