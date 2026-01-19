export default function Home() {
  return (
    <main style={{ padding: "80px 60px" }}>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 32,
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i}>
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                overflow: "hidden",
              }}
            >
              <img
                src={`/gallery/${i}`}
                alt="FADERIFT artwork"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <p
              style={{
                marginTop: 12,
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Coming Soon
            </p>
          </div>
        ))}
      </section>
    </main>
  )
}
