export default function LivePage() {
  const shows = [
    {
      date: "FEB. 6, 2026",
      city: "Christchurch, New Zealand",
      venue: "WORSHIP Christchurch",
      action: "Tickets",
    },
    {
      date: "FEB. 7, 2026",
      city: "Auckland, New Zealand",
      venue: "WORSHIP Auckland",
      action: "Tickets",
    },
    {
      date: "FEB. 20, 2026",
      city: "Bristol, United Kingdom",
      venue: "Dimension | Bristol 2026",
      action: "Tickets",
    },
    {
      date: "MAR. 27, 2026",
      city: "Petoskey, MI",
      venue: "WORSHIP Ultra Miami",
      action: "Notify Me",
    },
  ]

  return (
    <main style={{ padding: 48, maxWidth: 960 }}>
      <h1
        style={{
          fontSize: 12,
          letterSpacing: "0.25em",
          marginBottom: 32,
        }}
      >
        LIVE
      </h1>

      <section>
        {shows.map((show, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr 140px",
              alignItems: "center",
              padding: "20px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.12em",
              }}
            >
              {show.date}
            </div>

            <div>
              <div style={{ fontWeight: 600 }}>{show.city}</div>
              <div style={{ fontSize: 13, opacity: 0.75 }}>
                {show.venue}
              </div>
            </div>

            <button
              style={{
                border: "1px solid #111",
                background: "transparent",
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: 12,
                letterSpacing: "0.12em",
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = "#111"
                e.currentTarget.style.color = "#fff"
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#000"
              }}
            >
              {show.action}
            </button>
          </div>
        ))}
      </section>
    </main>
  )
}
