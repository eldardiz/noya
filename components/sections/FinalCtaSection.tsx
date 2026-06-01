import { brand } from '@/lib/brand'

export default function FinalCtaSection() {
  return (
    <section className="final-cta" id="reservieren">
      <img className="final-cta-bg" src="/assets/men-bar.jpg" alt="Abend im NOYA" />
      <div className="final-cta-overlay" />
      <div className="noise" />
      <div className="final-cta-inner">
        <div className="script">vielleicht heute abend?</div>
        <h2 className="display" data-words-pullup>Bis bald</h2>
        <div className="final-cta-actions">
          <button className="btn beige-fill">Reservieren</button>
          <a className="btn" href={`tel:${brand.phoneHref}`}>Anrufen</a>
        </div>
      </div>
      <div className="final-cta-meta left"><span className="meta">{brand.phone}</span></div>
      <div className="final-cta-meta right"><span className="meta">{brand.venue} · {brand.city}</span></div>
    </section>
  )
}
