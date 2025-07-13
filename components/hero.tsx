"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Initial page load animations
    if (titleRef.current) {
      titleRef.current.classList.add("animate-fade-in")
    }
  }, [])

  return (
    <section className="py-8 bg-gray-50" id="hero">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2 animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1
            ref={titleRef}
            className="text-6xl md:text-7xl lg:text-8xl font-heading font-normal text-gray-900 mb-8 leading-tight opacity-0"
          >
            Furniture Reimagined
          </h1>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Simple Laptop Bezel */}
          <div className="bg-gray-900 rounded-2xl p-2 shadow-2xl relative z-10">
            <div className="bg-black rounded-lg p-0.5">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/dollhouse-product-new.png"
                  alt="Dollhouse Product Interface"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Green element that cuts across the bottom */}
          <div className="absolute bottom-0 -left-8 -right-8 h-64 bg-green-300 rounded-2xl z-0"></div>
        </div>
      </div>
    </section>
  )
}
