export default function LivePage() {
  return (
    <main style={{ padding: "80px 60px", textAlign: "center" }}>
      <h1 style={{ fontSize: 28, letterSpacing: "0.3em" }}>LIVE</h1>

      <div
        style={{
          width: "100%",
          maxWidth: 1400,
          height: 1,
          background: "#d1d5db",
          margin: "24px auto 48px",
        }}
      />

      <table
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          borderCollapse: "collapse",
          fontSize: 14,
        }}
      >
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #e5e7eb" }}>
            <th>Date</th>
            <th>City, Country</th>
            <th>Venue</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dec 28, 2024</td>
            <td>Seoul, KR</td>
            <td>Club Savage</td>
            <td>Team Rave Year End Party</td>
          </tr>
          <tr>
            <td>Aug 15, 2025</td>
            <td>Seoul, KR</td>
            <td>Cakeshop</td>
            <td>Ekko & Sidetrack / Darklight DNB</td>
          </tr>
          <tr>
            <td>Nov 7, 2025</td>
            <td>Gwanggyo, KR</td>
            <td>Hillstate Media Hall</td>
            <td>Media Art Exhibition DJ</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
