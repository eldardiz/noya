import '@/styles/v2.css'
import { brand } from '@/lib/brand'

export const metadata = {
  title: 'Datenschutz — NOYA',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <main className="v2-page">
      <div className="legal-bar">
        <a href="/v2" className="logo">{brand.name}</a>
        <a href="/v2" className="back">← Zurück</a>
      </div>

      <article className="legal">
        <span className="script">Ihre Daten</span>
        <h1>Datenschutz</h1>

        <p className="legal-note">
          Entwurf — vor dem Launch bitte rechtlich prüfen lassen und an die tatsächlich eingesetzten
          Dienste sowie an die DSGVO anpassen.
        </p>

        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist {brand.name},
          {' '}{brand.address.line1}, {brand.address.line2}.
          {' '}E-Mail: <a href={`mailto:${brand.email}`}>{brand.email}</a>, Telefon:{' '}
          <a href={`tel:${brand.phoneHref}`}>{brand.phone}</a>.
        </p>

        <h2>2. Allgemeines zur Datenverarbeitung</h2>
        <p>
          Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website
          und unserer Leistungen erforderlich ist oder Sie eingewilligt haben. Rechtsgrundlagen sind
          insbesondere Art. 6 Abs. 1 lit. a, b und f DSGVO.
        </p>

        <h2>3. Aufruf der Website &amp; Hosting</h2>
        <p>
          Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf werden technisch notwendige Daten
          (z. B. IP-Adresse, Datum und Uhrzeit, abgerufene Seite, Browsertyp) in Server-Logs
          verarbeitet, um Auslieferung und Sicherheit zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO).
          Mit dem Anbieter besteht erforderlichenfalls ein Auftragsverarbeitungsvertrag.
        </p>

        <h2>4. Reservierung</h2>
        <p>
          Reservierungen erfolgen telefonisch oder über unseren Partner TheFork. Bei Nutzung von
          TheFork gelten zusätzlich deren Datenschutzbestimmungen. Telefonisch übermittelte Daten
          verwenden wir ausschließlich zur Abwicklung Ihrer Reservierung.
        </p>

        <h2>5. Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung der
          Anfrage gespeichert (Art. 6 Abs. 1 lit. b bzw. f DSGVO) und nicht ohne Ihre Einwilligung
          weitergegeben.
        </p>

        <h2>6. Externe Dienste &amp; Links</h2>
        <p>
          Wir binden eine Google-Maps-Karte sowie Links zu sozialen Netzwerken (TikTok, Instagram)
          ein. Beim Laden dieser Inhalte können Daten an die jeweiligen Anbieter übertragen werden.
          Für deren Verarbeitung gelten die Datenschutzhinweise der jeweiligen Anbieter.
        </p>

        <h2>7. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit sowie Widerspruch. Außerdem können Sie sich bei der österreichischen
          Datenschutzbehörde (dsb.gv.at) beschweren.
        </p>

        <h2>8. Kontakt in Datenschutzfragen</h2>
        <p>
          Bei Fragen zum Datenschutz erreichen Sie uns unter{' '}
          <a href={`mailto:${brand.email}`}>{brand.email}</a>.
        </p>
      </article>
    </main>
  )
}
