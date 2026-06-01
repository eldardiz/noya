export default function AboutSection() {
  return (
    <section className="section bg-beige" id="ueber">
      <div className="noise" />
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 'clamp(32px,4vw,56px)' }}>
          <div className="sec-num">— Kapitel 01 / Über uns</div>
          <div className="eyebrow brown">Brigittenau · 2025 —</div>
        </div>

        <div className="about-grid">
          <div className="about-photos" data-reveal>
            <figure className="p1"><img src="/assets/team-noya.jpg" alt="Das NOYA Team" /></figure>
            <figure className="p2"><img src="/assets/founders.jpg" alt="Gründer von NOYA" /></figure>
            <figure className="p3"><img src="/assets/barista.jpg" alt="Barista im NOYA" /></figure>
          </div>

          <div className="about-copy">
            <div className="script">unsere geschichte</div>
            <h2 className="display brown" data-words-pullup>Wir sind NOYA</h2>
            <p className="body-copy" data-anim-para>
              Eine mediterrane Fusionsküche im Norden Wiens. Wir verbinden italienische Handwerkskunst,
              levantinische Aromen und nordafrikanische Wärme zu einer modernen Wiener Tafel.
            </p>
            <p className="body-copy" style={{ marginTop: 14 }}>
              Vom ersten Espresso am Morgen bis zum letzten Glas Moscato am Abend. Gewachsen aus einer
              einfachen Idee: das Beste vom Mittelmeer auf einen Teller in Brigittenau.
            </p>
            <div style={{ marginTop: 36 }}><hr className="divider" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
