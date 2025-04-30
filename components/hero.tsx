"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white z-0"></div>
      <div className="absolute inset-0 dot-pattern z-0 opacity-70"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-green-200/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-green-200/30 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 z-0"></div>

      <div className="container-narrow relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1.5 border-green-200 bg-green-50 text-green-800 rounded-full animate-fade-in"
          >
            Launching Summer 2025
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 max-w-4xl font-heading animate-slide-up">
            Think like a <span className="text-gradient">designer</span>, and it feels like{" "}
            <span className="text-gradient">play</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-slide-up animate-delay-100">
            Dollhouse is a 3D-powered furniture marketplace that lets you design your space in real-time, with an
            interactive experience that makes shopping fun again.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl gradient-border futuristic-shadow animate-scale-up animate-delay-300">
          <div className="aspect-video relative">
            <Image
              src="/images/main-demo.gif"
              alt="Dollhouse 3D furniture marketplace demo"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "40M+", label: "Americans shop for furniture online annually", delay: "100" },
            { number: "90%", label: "Of shoppers never add a single item to cart", delay: "200" },
            { number: "30%", label: "Reduction in returns with 3D visualization", delay: "300" },
            { number: "48hrs", label: "To onboard your catalog to Dollhouse", delay: "400" },
          ].map((stat, index) => (
            <div key={index} className={`text-center animate-fade-in animate-delay-${stat.delay}`}>
              <p className="text-3xl md:text-4xl font-bold text-green-600 font-heading">{stat.number}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
