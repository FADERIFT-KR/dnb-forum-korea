export default function LivePage() {
  const shows = [
    "FEB 20, 2026 · Seoul",
    "MAR 14, 2026 · Tokyo",
  ]

  return (
    <main style={{ padding: 48, maxWidth: 720 }}>
      {shows.map((show, i) => (
        <div
          key={i}
          style={{
            padding: "18px 0",
            borderBottom: "1px solid #e5e5e5",
            fontSize: 14,
          }}
        >
          {show}
        </div>
      ))}
    </main>
  )
}
