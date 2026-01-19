export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Inter, system-ui, sans-serif" }}>
        {/* HEADER */}
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

        {children}
      </body>
    </html>
  )
}
