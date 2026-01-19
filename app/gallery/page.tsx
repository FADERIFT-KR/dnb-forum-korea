import SectionDivider from "@/app/components/SectionDivider"

const items = [1, 2, 3, 4, 5, 6]

export default function Gallery() {
  return (
    <main style={{ padding: "80px 60px" }}>
      <h1 style={{ textAlign: "center", letterSpacing: "0.3em" }}>
        GALLERY
      </h1>

      <SectionDivider />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 32
        }}
      >
        {items.map((id) => (
          <div
            key={id}
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              backgroundColor: "#e0e0e0", // ← 구분선과 동일 계열
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#999",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase"
            }}
          >
            {/* 이미지 없는 경우 텍스트도 안 쓰고 싶으면 이 줄 삭제 */}
            {/* NO IMAGE */}
          </div>
        ))}
      </section>
    </main>
  )
}
