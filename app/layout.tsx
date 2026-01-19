import Header from "./components/Header"

export const metadata = {
  title: "DNB FORUM KOREA",
  description: "Drum & Bass producer & curator based in Korea",
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
          background: "#fff",
          color: "#000",
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
