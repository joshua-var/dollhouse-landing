"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
      const offset = 80 // Account for fixed navbar height
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center h-8 w-8">
              <Image
                src="/images/dollhouse-logo-final.png"
                alt="Dollhouse Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="font-heading font-normal text-2xl tracking-tight text-gray-900">DOLLHOUSE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Manufacturers
            </button>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="mailto:miran@dollhouseai.co"
              className="inline-block bg-green-700 hover:bg-green-800 text-white rounded-full px-6 py-2 transition-all duration-300 btn-hover"
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors text-left"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors text-left"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors text-left"
            >
              Manufacturers
            </button>
          </nav>
          <a
            href="mailto:miran@dollhouseai.co"
            className="inline-block bg-green-700 hover:bg-green-800 text-white rounded-full px-6 py-2 w-full text-center transition-all duration-300 btn-hover"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}
