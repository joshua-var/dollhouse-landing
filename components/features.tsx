"use client"

import Image from "next/image"

export default function Features() {
  return (
    <section className="py-20 bg-neutral-50" id="features">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-px bg-gradient-to-r from-green-700 to-green-500"></div>
              <h2 className="text-5xl font-heading font-normal text-gray-900 leading-[1.05] tracking-tight">
                Shop Like a Designer
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-2 h-2 rounded-full bg-green-700 mt-3 flex-shrink-0"></div>
                <h3 className="text-xl font-light text-gray-800 leading-relaxed">
                  Luxury furniture sourced from artisans worldwide.
                </h3>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-2 h-2 rounded-full bg-green-700 mt-3 flex-shrink-0"></div>
                <h3 className="text-xl font-light text-gray-800 leading-relaxed">
                  3D Design Studio with unlimited customization. Every piece goes into your room. Pick your own walls,
                  floors, and lighting. Or change its dimensions.
                </h3>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-2 h-2 rounded-full bg-green-700 mt-3 flex-shrink-0"></div>
                <h3 className="text-xl font-light text-gray-800 leading-relaxed">
                  Meet Dolly, our AI Interior Designer. She can shop and design full rooms, categories, and specific
                  products. The sky is the limit.
                </h3>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-2 h-2 rounded-full bg-green-700 mt-3 flex-shrink-0"></div>
                <h3 className="text-xl font-light text-gray-800 leading-relaxed">
                  24/7 Customer Service. Reach one of our specialists to help address your needs, at any time of day.
                </h3>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
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
