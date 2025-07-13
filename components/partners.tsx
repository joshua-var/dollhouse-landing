"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)

  const partners = [
    {
      name: "Dirigo Labs",
      logo: "/images/dirigo-labs-logo.png",
      width: 160,
      height: 50,
    },
    {
      name: "Halloran Lab",
      logo: "/images/halloran-lab-logo.webp",
      width: 140,
      height: 140,
    },
    {
      name: "Green Light Maine",
      logo: "/images/greenlight-maine-new-logo.png",
      width: 180,
      height: 60,
    },
    {
      name: "The Roux Institute",
      logo: "/images/roux-institute-new-logo.png",
      width: 220,
      height: 70,
    },
    {
      name: "Colby College",
      logo: "/images/colby-college-logo.png",
      width: 120,
      height: 40,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add("animate-fade-in")
            } else if (entry.target === logosRef.current) {
              const logos = entry.target.children
              Array.from(logos).forEach((logo, index) => {
                setTimeout(() => {
                  logo.classList.add("animate-slide-up")
                }, index * 100)
              })
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (logosRef.current) observer.observe(logosRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-8 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p ref={titleRef} className="text-sm font-medium text-gray-600 uppercase tracking-wide opacity-0">
            With Support From:
          </p>
        </div>
        <div ref={logosRef} className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 opacity-0 hover:scale-110 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
