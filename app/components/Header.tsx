export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "32px 60px",
      }}
    >
      {/* LOGO */}
      <img
        src="/logo.png"
        alt="FADERIFT"
        style={{
          height: 28,
          objectFit: "contain",
          display: "block",
        }}
      />

      {/* NAV */}
      <nav
        style={{
          display: "flex",
          gap: 32,
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        <a href="/music" style={{ textDecoration: "none", color: "#000" }}>
          Music
        </a>
        <a href="/live" style={{ textDecoration: "none", color: "#000" }}>
          Live
        </a>
        <a href="/gallery" style={{ textDecoration: "none", color: "#000" }}>
          Gallery
        </a>
      </nav>
    </header>
  )
}
