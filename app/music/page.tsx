export default function MusicPage() {
  const tracks = [
    "Silence (Remix)",
    "Guardian Angel",
    "Hardest Style",
  ]

  return (
    <main style={{ padding: 48 }}>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 32,
        }}
      >
        {tracks.map((title, i) => (
          <div key={i}>
            <div
              style={{
                background: "#e5e5e5",
                aspectRatio: "1 / 1",
                marginBottom: 12,
              }}
            />
            <div
              style={{
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {title}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
