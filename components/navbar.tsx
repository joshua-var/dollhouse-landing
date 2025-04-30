"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center h-10 w-10">
              <Image
                src="/images/dollhouse-logo-new.png"
                alt="Dollhouse Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl tracking-tight">Dollhouse</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("suppliers")}
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              For Suppliers
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              FAQ
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-green-600 hover:bg-green-700" onClick={() => scrollToSection("supplier-form")}>
              Join Supplier Waitlist
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-narrow py-4 space-y-4">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("suppliers")}
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                For Suppliers
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                FAQ
              </button>
            </nav>
            <div className="flex flex-col gap-2">
              <Button
                className="bg-green-600 hover:bg-green-700 w-full"
                onClick={() => scrollToSection("supplier-form")}
              >
                Join Supplier Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
