export default function Home() {
  return (
    <main style={{ padding: "80px 60px" }}>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 32
        }}
      >
        {[
          "/images/1.jpg",
          "/images/2.jpg",
          "/images/3.jpg",
          "/images/4.jpg",
          "/images/5.jpg",
          "/images/6.jpg"
        ].map((src, i) => (
          <div key={i}>
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                background: "#e5e5e5",
                overflow: "hidden"
              }}
            >
              <img
                src={src}
                alt="album artwork"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            <p
              style={{
                marginTop: 12,
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase"
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
