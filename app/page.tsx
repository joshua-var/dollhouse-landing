"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Suppliers from "@/components/suppliers"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import SupplierForm from "@/components/supplier-form"
import Navbar from "@/components/navbar"

export default function Home() {
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that section
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Suppliers />
      <FAQ />
      <SupplierForm />
      <Footer />
    </main>
  )
}
