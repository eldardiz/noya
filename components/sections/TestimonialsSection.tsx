const quotes = [
  ['Eine der schönsten Eröffnungen des Jahres. Burrata war makellos.', 'Maria K. · Google'],
  ['Endlich ein Ort in Brigittenau, wo Frühstück abends genauso gut funktioniert.', 'Lukas R. · TripAdvisor'],
  ['Das Octopus Carpaccio hat den Abend gemacht. Klare Empfehlung.', 'Sophie M. · Falter'],
  ['Bedienung warmherzig, Karte mutig, Wein klug gewählt.', 'Anton W. · Google'],
  ['Der Espresso allein ist die Reise nach Wien 20 wert.', 'Elena P. · Instagram'],
  ['Mediterran, aber unaufdringlich. Genau das, was Wien gebraucht hat.', 'David B. · The Gap'],
]

export default function TestimonialsSection() {
  return (
    <section className="section bg-brown">
      <div className="noise" />
      <div className="wrap" style={{ paddingBottom: 'clamp(48px,6vw,80px)' }}>
        <div className="sec-head">
          <div>
            <span className="script">stimmen</span>
            <h2 className="display beige" data-words-pullup style={{ marginTop: 8 }}>Was Gäste sagen</h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="sec-num">— Ø 4.9 · 312 Bewertungen</div>
            <div className="meta beige" style={{ marginTop: 6, opacity: .7 }}>↻ slow ticker</div>
          </div>
        </div>
      </div>
      <div className="testi-row">
        <div className="testi-track">
          {quotes.map(([q, who], i) => (
            <div className="testi-card" key={i}>
              <div className="stars">★ ★ ★ ★ ★</div>
              <p className="quote">„{q}"</p>
              <div className="meta" style={{ opacity: .7 }}>{who}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
