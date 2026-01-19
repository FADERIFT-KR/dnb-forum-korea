export const metadata = {
  title: "DNB FORUM KOREA",
  description: "Korean Drum & Bass scene · Events · Artists · Producers"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont",
          background: "#0a0a0a",
          color: "#eaeaea"
        }}
      >
        {children}
      </body>
    </html>
  )
}
