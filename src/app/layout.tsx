import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
export const metadata: Metadata = {
  title: "Hilmi Portfolio",
  description: "A modern code-themed portfolio showcasing my skills and projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-mono antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
