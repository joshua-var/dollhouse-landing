import type React from "react"
import "./globals.css"
import { Playfair_Display, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

// Load Playfair Display for headings - luxury serif font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

// Load Montserrat for body text - premium sans-serif
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata = {
  title: "Dollhouse - Furniture Reimagined",
  description:
    "Shop like a designer with our AI-powered 3D furniture marketplace. Luxury furniture sourced from artisans worldwide.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
