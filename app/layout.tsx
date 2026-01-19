export const metadata = {
  title: "dnb forum korea",
  description: "Drum & Bass news, events, and producer-focused insights in Korean"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, fontFamily: "system-ui", background: "#0b0b0b", color: "#fff" }}>
        {children}
      </body>
    </html>
  )
}
