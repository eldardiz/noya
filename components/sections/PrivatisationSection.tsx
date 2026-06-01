const caps = [
  ['80', 'Gäste stehend'],
  ['48', 'Gäste sitzend'],
  ['2', 'Räume + Bar'],
]

export default function PrivatisationSection() {
  return (
    <section className="section bg-beige">
      <div className="priv">
        <div className="priv-info">
          <div className="noise" />
          <div className="sec-num" style={{ marginBottom: 24 }}>— Kapitel 06 / Veranstaltungen</div>
          <span className="script">ganz für sie allein</span>
          <h2 className="display brown" data-words-pullup>Private Feiern</h2>
          <p className="body-copy">
            Firmenessen, Geburtstage, Presse-Launch oder eine lange Tafel mit Freunden.
            Die ganze Tafel, die Bar oder unser Chefs Table. Offene Küche, eigenes Team.
          </p>
          <div className="priv-cap" data-card-stagger>
            {caps.map(([n, l]) => (
              <div key={l} data-card>
                <div className="n brown">{n}</div>
                <div className="l brown">{l}</div>
              </div>
            ))}
          </div>
          <div className="contact-actions">
            <a className="btn solid">Anfrage senden ↗</a>
            <a className="cta brown">Räume ansehen</a>
          </div>
        </div>
        <div className="priv-photo">
          <img src="/assets/team-noya.jpg" alt="Private Feiern im NOYA" data-parallax="0.1" />
          <div className="ph-meta meta">Die ganze Tafel · Millennium City</div>
        </div>
      </div>
    </section>
  )
}
