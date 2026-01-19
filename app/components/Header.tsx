import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "32px 48px",
        borderBottom: "1px solid #e5e5e5",
        background: "#fff",
      }}
    >
      <Link href="/">
        <Image
          src="/faderift-logo.png"
          alt="FADERIFT"
          width={180}
          height={40}
          priority
        />
      </Link>

      <nav style={{ display: "flex", gap: 32 }}>
        {["music", "live", "gallery"].map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            style={{
              textDecoration: "none",
              color: "#000",
              fontSize: 14,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  )
}
