export default function LivePage() {
  return (
    <main style={{ padding: "80px 60px", maxWidth: 960 }}>
      <h1
        style={{
          fontSize: 12,
          letterSpacing: "0.25em",
          marginBottom: 48
        }}
      >
        LIVE
      </h1>

      {/* UPCOMING */}
      <section style={{ marginBottom: 64 }}>
        <h2
          style={{
            fontSize: 12,
            letterSpacing: "0.18em",
            marginBottom: 16
          }}
        >
          UPCOMING SHOWS
        </h2>

        <p style={{ opacity: 0.5, fontSize: 13 }}>
          No upcoming shows announced.
        </p>
      </section>

      {/* PAST */}
      <section>
        <h2
          style={{
            fontSize: 12,
            letterSpacing: "0.18em",
            marginBottom: 24
          }}
        >
          PAST SHOWS
        </h2>

        <div style={{ display: "grid", gap: 24, fontSize: 14 }}>
          <div>
            <strong>DEC 28, 2024 · Seoul, South Korea</strong>
            <br />
            Itaewon Club SAVAGE
            <br />
            Team Rave Year End Party
          </div>

          <div>
            <strong>AUG 15, 2025 · Seoul, South Korea</strong>
            <br />
            Itaewon Cakeshop
            <br />
            Ekko & Sidetrack, Darklight DNB All Night Party
          </div>

          <div>
            <strong>NOV 07, 2025 · Gwanggyo, South Korea</strong>
            <br />
            Hillstate Media Art Exhibition
            <br />
            DJ Performance
          </div>
        </div>
      </section>
    </main>
  )
}
