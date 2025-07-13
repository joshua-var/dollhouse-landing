"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const rightImageRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftContentRef.current) {
              entry.target.classList.add("animate-slide-in-left")
            } else if (entry.target === rightImageRef.current) {
              entry.target.classList.add("animate-slide-in-right")
            } else if (entry.target === featuresRef.current) {
              const features = entry.target.children
              Array.from(features).forEach((feature, index) => {
                setTimeout(() => {
                  feature.classList.add("animate-slide-up")
                }, index * 150)
              })
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (leftContentRef.current) observer.observe(leftContentRef.current)
    if (rightImageRef.current) observer.observe(rightImageRef.current)
    if (featuresRef.current) observer.observe(featuresRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-neutral-50 py-16" id="features" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div ref={leftContentRef} className="space-y-8 opacity-0">
            <div className="space-y-4">
              <div className="w-16 h-px bg-gradient-to-r from-green-700 to-green-500"></div>
              <h2 className="text-5xl md:text-5xl font-heading font-extralight text-gray-900 leading-[1.05] tracking-tight">
                Shop Like a Designer
              </h2>
            </div>

            <div ref={featuresRef} className="space-y-8">
              <div className="flex items-start gap-6 opacity-0">
                <div className="w-2 h-2 rounded-full bg-green-700 mt-3 flex-shrink-0"></div>
                <h3 className="text-xl font-light text-gray-800 leading-relaxed">
                  Luxury furniture sourced from artisans worldwide.
                </h3>
              </div>

              <div className="flex items-start gap-6 opacity-0">
                <div className="w-2 h-2 rounded-full bg-green-700 mt-3 flex-shrink-0"></div>
                <h3 className="text-xl font-light text-gray-800 leading-relaxed">
                  3D Design Studio with unlimited customization. Every piece goes into your room. Pick your own walls,
                  floors, and lighting. Or change its dimensions.
                </h3>
              </div>

              <div className="flex items-start gap-6 opacity-0">
                <div className="w-2 h-2 rounded-full bg-green-700 mt-3 flex-shrink-0"></div>
                <h3 className="text-xl font-light text-gray-800 leading-relaxed">
                  Meet Dolly, our AI Interior Designer. She can shop and design full rooms, categories, and specific
                  products. The sky is the limit.
                </h3>
              </div>

              <div className="flex items-start gap-6 opacity-0">
                <div className="w-2 h-2 rounded-full bg-green-700 mt-3 flex-shrink-0"></div>
                <h3 className="text-xl font-light text-gray-800 leading-relaxed">
                  24/7 Customer Service. Reach one of our specialists to help address your needs, at any time of day.
                </h3>
              </div>
            </div>
          </div>

          <div ref={rightImageRef} className="relative opacity-0">
            <div className="relative overflow-hidden rounded-3xl card-hover">
              <Image
                src="/images/luxury-furniture-set.jpeg"
                alt="Luxury modern furniture collection featuring sage green armchair, tan sofa, and cream coffee table"
                width={900}
                height={750}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
