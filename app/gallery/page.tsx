export default function GalleryPage() {
  return (
    <main style={{ padding: "80px 60px" }}>
      <h1 style={{ textAlign: "center", letterSpacing: "0.2em" }}>
        GALLERY
      </h1>
      <hr style={{ margin: "32px 0" }} />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 40
        }}
      >
        {[1,2,3,4,5,6].map(i => (
          <img
            key={i}
            src={`/gallery/${i}.jpg`}
            style={{ width: "100%", objectFit: "cover" }}
          />
        ))}
      </section>
    </main>
  )
}
