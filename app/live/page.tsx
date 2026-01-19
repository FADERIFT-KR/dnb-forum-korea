export default function LivePage() {
  return (
    <main style={{ padding: "80px 60px", maxWidth: 900 }}>
      <h1
        style={{
          fontSize: 32,
          letterSpacing: "0.22em",
          marginBottom: 48,
        }}
      >
        LIVE
      </h1>

      {/* UPCOMING */}
      <section style={{ marginBottom: 64 }}>
        <h2
          style={{
            fontSize: 14,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Upcoming Shows
        </h2>

        <p style={{ color: "#777" }}>
          No upcoming dates announced.
        </p>
      </section>

      {/* PAST */}
      <section>
        <h2
          style={{
            fontSize: 14,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Past Shows
        </h2>

        <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
          <li>
            Dec 28, 2024 · Seoul, KR — Club Savage  
            <br />
            Team Rave Year End Party
          </li>
          <li>
            Aug 15, 2025 · Seoul, KR — Cakeshop  
            <br />
            Ekko & Sidetrack / Darklight DNB All Night
          </li>
          <li>
            Nov 7, 2025 · Gwanggyo, KR  
            <br />
            Media Art Exhibition DJ
          </li>
        </ul>
      </section>
    </main>
  )
}
