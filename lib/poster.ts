import { collectSources } from "./collector"

export async function getPosts() {
  const raw = await collectSources()

  return raw.map(r => ({
    title: r.title,
    category: r.category,
    summary: r.content + " (프로듀서 관점 요약)"
  }))
}
