import { brand } from '@/lib/brand'

// V2 Anfahrt — real Google Maps embed + all CTAs clickable.
const MAP_EMBED = 'https://maps.google.com/maps?q=Handelskai%2094-96%2C%201200%20Wien&z=15&output=embed'
const DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=Handelskai+94-96+1200+Wien+Millennium+City'

export default function AnfahrtV2() {
  return (
    <section className="section bg-beige" id="anfahrt">
      <div className="contact">
        <div className="hv2-map">
          <iframe
            src={MAP_EMBED}
            title="NOYA auf Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="addr-chip">
            <div className="eyebrow gold">— Hier finden Sie uns</div>
            <div className="body-copy brown" style={{ marginTop: 8, fontSize: 14 }}>
              {brand.venue}<br />{brand.address.line1}<br />{brand.address.line2}
            </div>
            <a className="cta brown" style={{ marginTop: 16, fontSize: 11 }} href={DIRECTIONS} target="_blank" rel="noopener noreferrer">Wegbeschreibung →</a>
          </div>
        </div>

        <div className="contact-card">
          <span className="script">besuchen sie uns</span>
          <h2 className="display brown" data-words-pullup>Anfahrt & Kontakt</h2>
          <div className="contact-grid">
            <div><div className="l">Telefon</div><div className="v"><a href={`tel:${brand.phoneHref}`}>{brand.phone}</a></div></div>
            <div><div className="l">E-Mail</div><div className="v"><a href={`mailto:${brand.email}`}>{brand.email}</a></div></div>
            <div><div className="l">Mo — Fr</div><div className="v">{brand.hours.weekday}</div></div>
            <div><div className="l">Sa — So</div><div className="v">{brand.hours.weekend}</div></div>
          </div>
          <div className="contact-actions">
            <a className="btn solid" href={`tel:${brand.phoneHref}`}>Reservieren</a>
            <a className="btn" href={`tel:${brand.phoneHref}`}>Anrufen</a>
          </div>
        </div>
      </div>
    </section>
  )
}
