export default function MusicPage() {
  const releases = Array(6).fill("Coming Soon")

  return (
    <main style={{ padding: 48 }}>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 32,
        }}
      >
        {releases.map((title, i) => (
          <article
            key={i}
            style={{ cursor: "pointer" }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                background: "#e5e5e5",
                marginBottom: 12,
                transition: "opacity 0.3s ease",
              }}
              onMouseOver={e => (e.currentTarget.style.opacity = "0.75")}
              onMouseOut={e => (e.currentTarget.style.opacity = "1")}
            />
            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              {title}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
