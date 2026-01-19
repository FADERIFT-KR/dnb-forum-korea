import { getPosts } from "../lib/poster"

export default async function Home() {
  const posts = await getPosts()

  return (
    <main style={{ padding: 24 }}>
      <h1>dnb forum korea</h1>
      <p>행사 · 아티스트 · 프로듀서 시점 Drum & Bass 자동 뉴스</p>

      {posts.map((p, i) => (
        <article key={i} style={{ marginTop: 32 }}>
          <h2>{p.title}</h2>
          <small>{p.category}</small>
          <p>{p.summary}</p>
        </article>
      ))}
    </main>
  )
}
