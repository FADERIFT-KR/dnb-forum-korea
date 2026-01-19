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
            justifyContent: "space-between",
            alignItems: "center",
            padding: "32px 48px",
            borderBottom: "1px solid #e5e5e5"
          }}
        >
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="FADERIFT"
              width={180}
              height={40}
              priority
            />
          </Link>

          {/* NAV */}
          <nav style={{ display: "flex", gap: 32 }}>
            {["music", "live", "gallery"].map((item) => (
              <Link
                key={item}
                href={`/${item === "music" ? "" : item}`}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: 13,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase"
                }}
              >
                {item}
              </Link>
            ))}
          </nav>
        </header>

        {children}
      </body>
    </html>
  )
}
