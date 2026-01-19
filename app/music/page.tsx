export default function MusicPage() {
  const releases = [
    { title: "Silence (Remix)" },
    { title: "Guardian Angel" },
    { title: "Hardest Style" },
    { title: "Angel w/ Sub Focus" },
    { title: "Satellite" },
    { title: "Lost This Feeling (Remix)" },
  ]

  return (
    <main style={{ padding: 48 }}>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 32,
        }}
      >
        {releases.map((item, i) => (
          <article key={i}>
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                background: "#e5e5e5",
                marginBottom: 12,
              }}
            />
            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {item.title}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
