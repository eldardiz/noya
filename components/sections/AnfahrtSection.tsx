import { brand } from '@/lib/brand'

export default function AnfahrtSection() {
  return (
    <section className="section bg-beige" id="anfahrt">
      <div className="contact">
        <div className="map-mock">
          <div className="map-road" style={{ left: '-10%', top: '32%', width: '120%', transform: 'rotate(-8deg)' }} />
          <div className="map-road" style={{ left: '20%', top: 0, height: '110%', width: 6, transform: 'rotate(6deg)' }} />
          <div className="map-road" style={{ left: '-10%', top: '68%', width: '120%', transform: 'rotate(-4deg)', height: 4 }} />
          <div className="map-pin">N</div>
          <div className="addr-chip">
            <div className="eyebrow gold">— Hier finden Sie uns</div>
            <div className="body-copy brown" style={{ marginTop: 8, fontSize: 14 }}>
              {brand.venue}<br />{brand.address.line1}<br />{brand.address.line2}
            </div>
            <a className="cta brown" style={{ marginTop: 16, fontSize: 11 }}>Wegbeschreibung →</a>
          </div>
        </div>

        <div className="contact-card">
          <span className="script">besuchen sie uns</span>
          <h2 className="display brown" data-words-pullup>Anfahrt & Kontakt</h2>
          <div className="contact-grid">
            <div><div className="l">Telefon</div><div className="v">{brand.phone}</div></div>
            <div><div className="l">E-Mail</div><div className="v">{brand.email}</div></div>
            <div><div className="l">Mo — Fr</div><div className="v">{brand.hours.weekday}</div></div>
            <div><div className="l">Sa — So</div><div className="v">{brand.hours.weekend}</div></div>
          </div>
          <div className="contact-actions">
            <button className="btn solid">Reservieren</button>
            <a className="btn" href={`tel:${brand.phoneHref}`}>Anrufen</a>
          </div>
        </div>
      </div>
    </section>
  )
}
