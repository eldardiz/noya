import '@/styles/v2.css'
import { brand } from '@/lib/brand'

export const metadata = {
  title: 'Impressum — NOYA',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <main className="v2-page">
      <div className="legal-bar">
        <a href="/" className="logo">{brand.name}</a>
        <a href="/" className="back">← Zurück</a>
      </div>

      <article className="legal">
        <span className="script">Offenlegung</span>
        <h1>Impressum</h1>

        <p className="legal-note">
          Entwurf — vor dem Launch bitte rechtlich prüfen und die mit [bitte ergänzen] markierten
          Angaben (Rechtsform, Firmenbuch, UID, Gewerbebehörde) vervollständigen.
        </p>

        <h2>Angaben gemäß § 5 ECG, § 14 UGB, § 25 MedienG</h2>
        <p>
          NOYA — Mediterrane Fusion Kitchen<br />
          [bitte ergänzen: Firmenwortlaut / Rechtsform, z. B. NOYA Gastronomie GmbH]<br />
          {brand.venue}<br />
          {brand.address.line1}<br />
          {brand.address.line2}, Österreich
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href={`tel:${brand.phoneHref}`}>{brand.phone}</a><br />
          E-Mail: <a href={`mailto:${brand.email}`}>{brand.email}</a><br />
          Web: {brand.domain}
        </p>

        <h2>Unternehmensdaten</h2>
        <ul>
          <li>Unternehmensgegenstand: Gastronomie / Restaurant</li>
          <li>Firmenbuchnummer: [bitte ergänzen]</li>
          <li>Firmenbuchgericht: [bitte ergänzen]</li>
          <li>UID-Nummer: [bitte ergänzen]</li>
          <li>Gewerbebehörde: [bitte ergänzen]</li>
          <li>Mitgliedschaft: Wirtschaftskammer Wien, Fachgruppe Gastronomie</li>
          <li>Anwendbare Rechtsvorschriften: Gewerbeordnung (www.ris.bka.gv.at)</li>
        </ul>

        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.
          Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Inhalte und Werke auf dieser Website unterliegen dem österreichischen Urheberrecht. Eine
          Verwendung außerhalb der gesetzlich erlaubten Fälle bedarf der vorherigen schriftlichen
          Zustimmung von {brand.name}.
        </p>

        <h2>Webdesign</h2>
        <p>
          Gestaltung &amp; Umsetzung:{' '}
          <a href="https://franz-digital.at" target="_blank" rel="noopener noreferrer">franz-digital.at</a>
        </p>
      </article>
    </main>
  )
}
