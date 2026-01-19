import Link from "next/link"

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "32px 60px"
      }}
    >
      <Link href="/">
        <img
          src="/logo.png"
          alt="FADERIFT"
          style={{
            height: 120,   // 기존 대비 약 8배
            objectFit: "contain",
            cursor: "pointer"
          }}
        />
      </Link>

      <nav style={{ display: "flex", gap: 32 }}>
        {["music", "live", "gallery"].map(menu => (
          <Link
            key={menu}
            href={`/${menu}`}
            style={{
              textDecoration: "none",
              color: "#000",
              fontSize: 14,
              letterSpacing: "0.18em",
              textTransform: "uppercase"
            }}
          >
            {menu}
          </Link>
        ))}
      </nav>
    </header>
  )
}
