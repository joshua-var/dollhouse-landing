"use client"

import Hero from "@/components/hero"
import Partners from "@/components/partners"
import Features from "@/components/features"
import Manufacturers from "@/components/manufacturers"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Manufacturers />
      <Footer />
    </main>
  )
}
