import { brand } from '@/lib/brand'

const tracks = [
  ['01', 'Una Notte a Napoli', 'Pink Martini', '4:21'],
  ['02', "Tu Vuò Fà L'Americano", 'Renato Carosone', '3:38'],
  ['03', 'Friday Morning', 'Khruangbin', '4:06'],
  ['04', 'Chan Chan', 'Buena Vista Social Club', '4:16'],
  ['05', 'Cherry Wine', 'Édition NOYA', '3:52'],
]

export default function PlaylistSection() {
  return (
    <section className="section bg-brown">
      <div className="noise" />
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 'clamp(32px,4vw,48px)' }}>
          <div className="sec-num">— Kapitel 05 / Playlist</div>
          <div className="meta beige" style={{ opacity: .65 }}>↻ Updated wöchentlich · Spotify</div>
        </div>

        <div className="playlist">
          <div className="vinyl-wrap">
            <div className="vinyl">
              <div className="label">
                <span className="ln">{brand.name}</span>
                <small>VOL. 01 · MEDITERRAN</small>
              </div>
              <div className="spindle" />
            </div>
          </div>

          <div className="playlist-info">
            <span className="script">der klang des hauses</span>
            <h2 className="display beige" data-words-pullup>Abends bei NOYA</h2>
            <p className="body-copy beige">
              Bossa, levantinische Lounge und ein bisschen Napoli. Genau richtig zwischen
              dem Aperitivo und dem letzten Glas Moscato.
            </p>
            <div className="tracks">
              {tracks.map(([num, title, artist, dur]) => (
                <div className="track" key={num}>
                  <span className="num">{num}</span>
                  <span><span className="t-title">{title}</span><span className="t-artist">{artist}</span></span>
                  <span className="dur">{dur}</span>
                </div>
              ))}
            </div>
            <div className="playlist-actions">
              <a className="btn solid" href={brand.social.tiktokUrl}>Auf Spotify hören ↗</a>
              <a className="cta beige">Apple Music</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
