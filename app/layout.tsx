import "./globals.css"
import Header from "./components/Header"

export const metadata = {
  title: "FADERIFT",
  description: "Official website of FADERIFT"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Inter, system-ui, sans-serif" }}>
        <Header />
        {children}
      </body>
    </html>
  )
}
