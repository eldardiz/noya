import { brand } from '@/lib/brand'

// V2 variant of FinalCtaSection — identical markup, new photo.
export default function FinalCtaV2() {
  return (
    <section className="final-cta" id="reservieren">
      <img className="final-cta-bg" src="/assets/v2/sections/finalcta.jpg" alt="Abend im NOYA" />
      <div className="final-cta-overlay" />
      <div className="noise" />
      <div className="final-cta-inner">
        <div className="script">vielleicht heute abend?</div>
        <h2 className="display" data-words-pullup>Bis bald</h2>
        <div className="final-cta-actions">
          <a className="btn beige-fill" href={`tel:${brand.phoneHref}`}>Reservieren</a>
          <a className="btn" href={`tel:${brand.phoneHref}`}>Anrufen</a>
        </div>
      </div>
      <div className="final-cta-meta left"><span className="meta">{brand.phone}</span></div>
      <div className="final-cta-meta right"><span className="meta">{brand.venue} · {brand.city}</span></div>
    </section>
  )
}
