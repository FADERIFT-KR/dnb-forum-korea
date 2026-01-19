import Link from "next/link"

export default function LivePage() {
  return (
    <main style={{ padding: "80px 60px", textAlign: "center" }}>
      <h1 style={{ fontSize: 42, letterSpacing: "0.2em" }}>LIVE</h1>
      <hr style={{ width: "60%", margin: "32px auto" }} />

      <div style={{ display: "flex", justifyContent: "center", gap: 48 }}>
        <Link href="/live/upcoming">Upcoming Shows</Link>
        <Link href="/live/past">Past Shows</Link>
      </div>
    </main>
  )
}
