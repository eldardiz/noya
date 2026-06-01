import { Fragment } from 'react'

const words = ['FOCACCIA', 'BURRATA', 'MEZE', 'BRANZINO', 'TIRAMISÙ', 'MOSCATO', 'NOYA', 'WIEN 20', 'MILLENNIUM CITY']

export default function MarqueeSection() {
  return (
    <section className="section bg-beige marquee" data-speed="70">
      <div className="noise" />
      <div className="marquee-track">
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className="w">{w}</span>
            <span className="dot" />
          </Fragment>
        ))}
      </div>
    </section>
  )
}
