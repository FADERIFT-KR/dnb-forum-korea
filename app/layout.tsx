import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "FADERIFT",
  description: "Drum & Bass artist and producer"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, system-ui, -apple-system",
          background: "#ffffff",
          color: "#000000"
        }}
      >
        <header
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "24px 48px",
  }}
>
  {/* LOGO */}
  <img
    src="/logo.png"
    alt="FADERIFT"
    style={{ height: 28 }}
  />

  {/* NAV */}
  <nav
    style={{
      display: "flex",
      gap: 24,
      fontSize: 12,
      letterSpacing: "0.18em",
    }}
  >
    <a href="/music">MUSIC</a>
    <a href="/live">LIVE</a>
    <a href="/gallery">GALLERY</a>
  </nav>
</header>

        {children}
      </body>
    </html>
  )
}
