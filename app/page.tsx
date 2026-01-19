export default function Home() {
  const artworks = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
  ]

  return (
    <main
      style={{
        padding: "96px 64px",
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      {/* HERO */}
      <section style={{ marginBottom: 96 }}>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "0.28em",
            margin: 0,
          }}
        >
          FADERIFT
        </h1>
        <p
          style={{
            marginTop: 20,
            fontSize: 12,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#9ca3af",
          }}
        >
          Drum &amp; Bass Producer · Seoul
        </p>
      </section>

      {/* MUSIC GRID */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 36,
        }}
      >
        {artworks.map((src, i) => (
          <article key={i}>
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                background: "#111",
                overflow: "hidden",
              }}
            >
              <img
                src={src}
                alt="Album artwork"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.06)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>

            <p
              style={{
                marginTop: 14,
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#555",
              }}
            >
              Coming Soon
            </p>
          </article>
        ))}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: 120,
          paddingTop: 32,
          borderTop: "1px solid #e5e7eb",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#9ca3af",
        }}
      >
        Official artist site · Drum &amp; Bass
      </footer>
    </main>
  )
}
