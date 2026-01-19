export default function PastLive() {
  const shows = [
    ["2024-12-28", "Seoul, KR", "Club Savage", "Team Rave Year End Party"],
    ["2025-08-15", "Seoul, KR", "Cakeshop", "Ekko & Sidetrack / Darklight DNB All Night"],
    ["2025-11-07", "Gwanggyo, KR", "Hillstate Plaza", "Media Art Exhibition DJ"]
  ]

  return (
    <main style={{ padding: "80px 60px" }}>
      <h1 style={{ textAlign: "center", letterSpacing: "0.2em" }}>
        PAST SHOWS
      </h1>
      <hr style={{ margin: "32px 0" }} />

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["Date", "Location", "Venue", "Event"].map(h => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  paddingBottom: 12,
                  borderBottom: "1px solid #ccc"
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {shows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "12px 0" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
