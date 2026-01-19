import { getPosts } from "../lib/poster"

const categoryColor: Record<string, string> = {
  Event: "#ff3b3b",
  Artist: "#3b82ff",
  Producer: "#a855f7"
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: "64px 24px" }}>
      {/* HERO HEADER */}
      <header style={{ marginBottom: 64 }}>
        <h1
          style={{
            fontSize: 48,
            letterSpacing: "0.18em",
            fontWeight: 800,
            margin: 0
          }}
        >
          DNB FORUM KOREA
        </h1>
        <p
          style={{
            marginTop: 16,
            color: "#9ca3af",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontSize: 14
          }}
        >
          Events · Artists · Producers
        </p>
      </header>

      {/* POSTS */}
      <section style={{ display: "grid", gap: 32 }}>
        {posts.map((p, i) => (
          <article
            key={i}
            style={{
              background: "#111",
              borderRadius: 12,
              padding: 24,
              border: "1px solid #1f1f1f"
            }}
          >
            {/* CATEGORY TAG */}
            <span
              style={{
                display: "inline-block",
                marginBottom: 12,
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: categoryColor[p.category] || "#aaa"
              }}
            >
              {p.category}
            </span>

            <h2 style={{ margin: "0 0 12px 0", fontSize: 22 }}>
              {p.title}
            </h2>

            <p style={{ margin: 0, color: "#cfcfcf", lineHeight: 1.6 }}>
              {p.summary}
            </p>
          </article>
        ))}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: 96,
          paddingTop: 32,
          borderTop: "1px solid #1f1f1f",
          color: "#777",
          fontSize: 12,
          letterSpacing: "0.1em",
          textTransform: "uppercase"
        }}
      >
        Curated by producers · Based in Korea
      </footer>
    </main>
  )
}
