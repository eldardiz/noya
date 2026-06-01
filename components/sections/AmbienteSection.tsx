const tiles = [
  { src: '/assets/lamps.jpg', cls: 'g1', alt: 'Marokkanische Lampen im NOYA' },
  { src: '/assets/bar-wide.jpg', cls: 'g2', alt: 'Die Bar im NOYA' },
  { src: '/assets/espresso-detail.jpg', cls: 'g3', alt: 'Espresso Detail' },
  { src: '/assets/silver-teapots.jpg', cls: 'g4', alt: 'Silberne Teekannen' },
  { src: '/assets/bar-photo.jpg', cls: 'g5', alt: 'An der Bar' },
  { src: '/assets/details.jpg', cls: 'g6', alt: 'Details im NOYA' },
]

export default function AmbienteSection() {
  return (
    <section className="section bg-beige" id="ambiente">
      <div className="noise" />
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="script">das haus, von innen</div>
            <h2 className="display brown" data-words-pullup style={{ fontSize: 'clamp(48px,8vw,110px)', marginTop: 6 }}>Ambiente</h2>
          </div>
          <div style={{ textAlign: 'right', maxWidth: 240 }}>
            <p className="body-copy brown" style={{ fontSize: 12, opacity: .7 }}>
              Warmes Licht, marokkanische Lampen, italienische Cimbali.
            </p>
          </div>
        </div>

        <div className="gallery" data-card-stagger>
          {tiles.map((t) => (
            <figure className={t.cls} key={t.cls} data-card>
              <img src={t.src} alt={t.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
