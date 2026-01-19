export default function GalleryPage() {
  const images = [1, 2, 3, 4, 5, 6]

  return (
    <main style={{ padding: "80px 60px", textAlign: "center" }}>
      <h1 style={{ fontSize: 28, letterSpacing: "0.3em" }}>GALLERY</h1>

      <div
        style={{
          width: "100%",
          maxWidth: 1400,
          height: 1,
          background: "#d1d5db",
          margin: "24px auto 48px",
        }}
      />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 32,
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {images.map((i) => (
          <div
            key={i}
            style={{
              aspectRatio: "1 / 1",
              background: "#d1d5db",
            }}
          >
            <img
              src={`/gallery/${i}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none"
              }}
            />
          </div>
        ))}
      </section>
    </main>
  )
}
