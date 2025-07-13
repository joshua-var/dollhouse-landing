"use client"

import Image from "next/image"

export default function Partners() {
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

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">With Support From:</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center h-16">
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
