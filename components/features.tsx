"use client"

import { useEffect, useRef } from "react"
import { Layers, LayoutGrid, Paintbrush, Bot, Truck } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Layers className="h-6 w-6 text-green-600" />,
      title: "Live 3D Viewer",
      description: "See your furniture in a 3D space before you buy, with true-to-scale dimensions.",
    },
    {
      icon: <LayoutGrid className="h-6 w-6 text-green-600" />,
      title: "Swipeable Discovery",
      description: "Browse products in a horizontal carousel that learns your preferences with every swipe.",
    },
    {
      icon: <Paintbrush className="h-6 w-6 text-green-600" />,
      title: "Design Mode",
      description: "Change walls, floors, and room dimensions to create your perfect space.",
    },
    {
      icon: <Bot className="h-6 w-6 text-green-600" />,
      title: "Meet Dolly",
      description: "Our AI design assistant helps you create your dream space with natural language.",
    },
    {
      icon: <Truck className="h-6 w-6 text-green-600" />,
      title: "Reduced Returns",
      description: "Our 3D visualization reduces return rates by ensuring furniture fits your space.",
    },
  ]

  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 bg-white relative" id="features" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-50/50 to-transparent"></div>

      <div className="container-narrow relative">
        <div className="text-center mb-8 opacity-0" ref={(el) => (cardsRef.current[0] = el)}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Reimagining <span className="text-gradient">Furniture Shopping</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dollhouse combines the best of Pinterest for inspiration, Tinder for discovery, and gaming for
            visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 opacity-0"
              ref={(el) => (cardsRef.current[index + 1] = el)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-50 w-12 h-12 flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
