const cols = [
  { script: 'morgens', head: 'FRÜHSTÜCK', hours: '08:00 — 11:30' },
  { script: 'tagsüber', head: 'MITTAGESSEN', hours: '11:30 — 17:00' },
  { script: 'abends', head: 'DINNER', hours: '17:00 — 23:00' },
]

export default function DaypartSection() {
  return (
    <section className="section bg-brown">
      <div className="noise" />
      <div className="daypart" data-card-stagger>
        {cols.map((c) => (
          <div className="col" key={c.head} data-card>
            <span className="script">{c.script}</span>
            <h3 className="display beige">{c.head}</h3>
            <span className="meta beige" style={{ opacity: .8 }}>{c.hours}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
