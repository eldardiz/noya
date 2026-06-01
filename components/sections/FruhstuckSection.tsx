export default function FruhstuckSection() {
  return (
    <section className="section bg-beige" id="fruhstuck">
      <div className="split">
        <div className="split-photo">
          <img src="/assets/espresso-machine.jpg" alt="Italienische Espressomaschine im NOYA" data-parallax="0.12" />
          <div className="ph-eyebrow eyebrow">— Frühstück</div>
          <div className="ph-meta meta">La Cimbali · Eccellenza Italiana · dal 1912</div>
        </div>
        <div className="split-copy">
          <span className="script">der tag beginnt hier</span>
          <h2 className="display brown" data-words-pullup>Mediterranes Frühstück</h2>
          <p className="body-copy">
            Warme Focaccia direkt aus dem Ofen, Labneh mit Olivenöl, kandierte Zitrusfrüchte
            und ein Flat White, der wirklich sitzt. Bis 11:30, jeden Tag.
          </p>
          <ul className="dot-list">
            <li>Focaccia Sandwiches</li>
            <li>Frühstücksbowls</li>
            <li>Pancakes mit Ricotta</li>
            <li>Italian Espresso Bar</li>
          </ul>
          <a className="cta brown" style={{ marginTop: 40 }}>Frühstückskarte ansehen →</a>
        </div>
      </div>
    </section>
  )
}
