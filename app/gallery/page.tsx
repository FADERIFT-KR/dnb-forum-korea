const images = [
  "/gallery/01.jpg",
  "/gallery/02.jpg",
  "/gallery/03.jpg",
  "/gallery/04.jpg",
  "/gallery/05.jpg",
  "/gallery/06.jpg",
]

export default function GalleryPage() {
  return (
    <main
      style={{
        padding: 48,
        maxWidth: 1400,
      }}
    >
      <h1
        style={{
          fontSize: 12,
          letterSpacing: "0.25em",
          marginBottom: 32,
        }}
      >
        GALLERY
      </h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              overflow: "hidden",
              aspectRatio: "1 / 1",
              background: "#111",
            }}
          >
            <img
              src={src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
              onMouseOver={e =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={e =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        ))}
      </section>
    </main>
  )
}
