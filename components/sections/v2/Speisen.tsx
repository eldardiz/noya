// V2 variant of SpeisenSection — identical markup + hscroll, new photos.
const panels = [
  {
    idx: 'I / III', script: 'eine reise in vorspeisen', head: 'MEZE', photo: '/assets/v2/sections/speisen-meze.jpg',
    items: [
      ['Hummus Beiruti', 'Kichererbsen · Tahin · Zitrone · Olivenöl'],
      ['Burrata Pugliese', 'Pesto Genovese · sonnengereifte Tomaten'],
      ['Vitello Tonnato', 'Kalbsrücken · Thunfischcreme · Kapern'],
      ['Octopus Carpaccio', 'Yuzu · Kalamata-Olive · Mikrokräuter'],
    ],
  },
  {
    idx: 'II / III', script: 'vom feuer und vom meer', head: 'HAUPT', photo: '/assets/v2/sections/speisen-haupt.jpg',
    items: [
      ['Branzino al Sale', 'Wolfsbarsch · Salzkruste · Zitronenöl'],
      ['Lamm Tagine', 'Aprikose · Mandel · Ras el Hanout'],
      ['Rigatoni Nduja', "'Nduja · Stracciatella · Basilikum"],
      ['Shakshuka Royale', 'Pochiertes Ei · Feta · Sauerteigbrot'],
    ],
  },
  {
    idx: 'III / III', script: 'das süße ende', head: 'DOLCE', photo: '/assets/v2/sections/speisen-dolce.jpg',
    items: [
      ['Tiramisù NOYA', 'Espresso · Mascarpone · Amaretto'],
      ['Baklava Cheesecake', 'Pistazie · Honig · Filoteig'],
      ['Cannoli Siciliani', 'Ricotta · kandierte Orange'],
      ['Affogato', 'Vanilleeis · heißer Espresso'],
    ],
  },
]

export default function SpeisenV2() {
  return (
    <section className="hscroll-outer" id="speisen" data-hscroll-outer>
      <div className="hscroll-pin">
        {panels.map((p) => (
          <div className="hscroll-panel" data-hscroll-panel key={p.head}>
            <div className="menu-photo">
              <img src={p.photo} alt={`${p.head} im NOYA`} />
              <div className="idx script" style={{ fontSize: 'clamp(36px,5vw,56px)' }}>{p.idx}</div>
              <div className="when meta">Speisen · 17:00 — 23:00</div>
            </div>
            <div className="menu-info">
              <div>
                <span className="script">{p.script}</span>
                <h2 className="display brown">{p.head}</h2>
                <div className="rule" style={{ marginTop: 22, width: 80 }} />
              </div>
              <ul className="menu-list">
                {p.items.map(([n, d]) => (
                  <li key={n}>
                    <span className="n brown">{n}</span>
                    <span className="d body-copy brown">{d}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <a className="cta brown" href="/speisekarte.pdf" target="_blank" rel="noopener noreferrer">Ganze Karte →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
