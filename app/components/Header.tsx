import Link from "next/link"

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px 60px",
      }}
    >
      <Link href="/">
        <img
          src="/logo.png"
          alt="FADERIFT"
          style={{ height: 72 }} // 기존보다 약 3배
        />
      </Link>

      <nav
        style={{
          display: "flex",
          gap: 32,
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        <Link href="/music">Music</Link>
        <Link href="/live">Live</Link>
        <Link href="/gallery">Gallery</Link>
      </nav>
    </header>
  )
}
