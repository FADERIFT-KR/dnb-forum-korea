export default function GalleryPage() {
  return (
    <main style={{ padding: 48 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 24,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              background: "#e5e5e5",
              aspectRatio: "3 / 4",
            }}
          />
        ))}
      </div>
    </main>
  )
}
