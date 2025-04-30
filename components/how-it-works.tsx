"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up")
            entry.target.classList.remove("opacity-0")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 bg-gray-50 relative" id="how-it-works" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern z-0 opacity-30"></div>

      <div className="container-narrow relative z-10">
        <div className="text-center mb-16 opacity-0" ref={(el) => (stepsRef.current[0] = el)}>
          <Badge variant="outline" className="mb-4 px-3 py-1 border-green-200 bg-green-50 text-green-800 rounded-full">
            The Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            How <span className="text-gradient">Dollhouse</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience furniture shopping like never before with our interactive 3D platform.
          </p>
        </div>

        <div className="space-y-24">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center opacity-0"
            ref={(el) => (stepsRef.current[1] = el)}
          >
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                Step 01
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Choose a Room & Add Furniture</h3>
              <p className="text-lg text-gray-600 mb-8">
                Start with an empty room that matches your space or scan your own room. Every item you add appears
                instantly in your 3D canvas, showing you exactly how it will look in your home.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-800 text-sm font-medium">✓</span>
                  </span>
                  <span className="text-gray-600">True-to-scale dimensions</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-800 text-sm font-medium">✓</span>
                  </span>
                  <span className="text-gray-600">Realistic textures and lighting</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-800 text-sm font-medium">✓</span>
                  </span>
                  <span className="text-gray-600">Instant visualization</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-200/30 to-green-400/30 rounded-3xl blur-3xl z-0"></div>
              <div className="bg-white p-2 rounded-2xl shadow-2xl gradient-border futuristic-shadow relative z-10">
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/main-demo.gif"
                    alt="Add furniture to your 3D space"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-20">
                01
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center opacity-0"
            ref={(el) => (stepsRef.current[2] = el)}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400/30 to-green-200/30 rounded-3xl blur-3xl z-0"></div>
              <div className="bg-white p-2 rounded-2xl shadow-2xl gradient-border futuristic-shadow relative z-10">
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/carousel-demo.gif"
                    alt="Discover products with our carousel"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-20">
                02
              </div>
            </div>
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                Step 02
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-heading">
                Discover Products with Our Carousel
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Browse products in an endless horizontal carousel that learns your preferences with every swipe. No more
                endless scrolling through pages of products.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-800 text-sm font-medium">✓</span>
                  </span>
                  <span className="text-gray-600">Personalized recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-800 text-sm font-medium">✓</span>
                  </span>
                  <span className="text-gray-600">Swipe-based discovery</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-800 text-sm font-medium">✓</span>
                  </span>
                  <span className="text-gray-600">Zero page reloads</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center opacity-0"
            ref={(el) => (stepsRef.current[3] = el)}
          >
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                Step 03
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Customize with Design Mode</h3>
              <p className="text-lg text-gray-600 mb-8">
                Hit 'Design Mode' to sketch new walls, resize the room, change flooring, and more. It feels like playing
                The Sims, but everything in your cart ships to your door.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-800 text-sm font-medium">✓</span>
                  </span>
                  <span className="text-gray-600">Draw and delete walls</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-800 text-sm font-medium">✓</span>
                  </span>
                  <span className="text-gray-600">Change flooring and wall colors</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-800 text-sm font-medium">✓</span>
                  </span>
                  <span className="text-gray-600">Add windows and doors</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-200/30 to-green-400/30 rounded-3xl blur-3xl z-0"></div>
              <div className="bg-white p-2 rounded-2xl shadow-2xl gradient-border futuristic-shadow relative z-10">
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/design-demo.gif"
                    alt="Design mode for customizing your space"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-20">
                03
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center opacity-0"
            ref={(el) => (stepsRef.current[4] = el)}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400/30 to-green-200/30 rounded-3xl blur-3xl z-0"></div>
              <div className="bg-white p-2 rounded-2xl shadow-2xl gradient-border futuristic-shadow relative z-10">
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/dolly-demo.gif"
                    alt="Dolly AI design assistant"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-20">
                04
              </div>
            </div>
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                Step 04
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-heading">
                Get Help from Dolly, Your AI Design Assistant
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Describe your dream space to Dolly, our AI design assistant, and watch as she builds it for you using
                real inventory. She's not just a chatbot—she's a co-creator.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-800 text-sm font-medium">✓</span>
                  </span>
                  <span className="text-gray-600">Natural language room design</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-800 text-sm font-medium">✓</span>
                  </span>
                  <span className="text-gray-600">Personalized recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-800 text-sm font-medium">✓</span>
                  </span>
                  <span className="text-gray-600">Continuous learning from your style</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
