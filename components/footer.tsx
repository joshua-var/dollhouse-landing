"use client"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="flex items-center justify-center h-6 w-6">
              <Image
                src="/images/dollhouse-logo-final.png"
                alt="Dollhouse Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="font-heading font-normal text-xl tracking-tight text-gray-900">DOLLHOUSE</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-gray-600">
            <span>© 2025</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
