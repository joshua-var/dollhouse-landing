"use client"

import { useEffect, useRef } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function Suppliers() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])

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

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 bg-white relative" id="suppliers" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>

      <div className="container-narrow relative">
        <div className="text-center mb-12 opacity-0" ref={(el) => (elementsRef.current[0] = el)}>
          <Badge variant="outline" className="mb-4 px-3 py-1 border-green-200 bg-green-50 text-green-800 rounded-full">
            Join Our Platform
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            For <span className="text-gradient">Furniture Suppliers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Dollhouse to reduce returns, increase average order value, and reach design-conscious customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0" ref={(el) => (elementsRef.current[1] = el)}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Why Suppliers Choose Dollhouse</h3>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg glass-card overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Reduced Returns</h4>
                      <p className="text-gray-600">
                        Our 3D visualization ensures customers know exactly what they're getting, reducing costly
                        returns by up to 30%.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg glass-card overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Higher Average Order Value</h4>
                      <p className="text-gray-600">
                        Customers naturally build complete rooms, increasing bundle purchases and average order value.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg glass-card overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Design-Conscious Customers</h4>
                      <p className="text-gray-600">
                        Reach customers who care about design and are willing to invest in quality furniture.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg glass-card overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Seamless Integration</h4>
                      <p className="text-gray-600">
                        We handle everything from 3D modeling to transactions, billing, and marketing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 rounded-full px-8 h-12 shadow-lg futuristic-shadow"
                onClick={() => {
                  const element = document.getElementById("supplier-form")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Join Our Supplier Waitlist
              </Button>
            </div>
          </div>

          <div
            className="bg-gray-50 rounded-2xl p-8 shadow-xl gradient-border opacity-0"
            ref={(el) => (elementsRef.current[2] = el)}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Onboarding Process</h3>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-600 text-white flex items-center justify-center mr-4 shadow-lg">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Initial Conversation</h4>
                  <p className="text-gray-600">
                    We'll discuss your catalog, shipping capabilities, and integration needs.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-600 text-white flex items-center justify-center mr-4 shadow-lg">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">API Connection</h4>
                  <p className="text-gray-600">We connect to your Inventory Management System via our API.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-600 text-white flex items-center justify-center mr-4 shadow-lg">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">3D Asset Creation</h4>
                  <p className="text-gray-600">
                    We'll use your existing 3D files or create high-fidelity models from your product photos.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-600 text-white flex items-center justify-center mr-4 shadow-lg">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Launch</h4>
                  <p className="text-gray-600">
                    Your products go live on Dollhouse, ready for customers to discover and purchase.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 bg-green-50 rounded-xl border border-green-100">
              <p className="text-green-800 font-medium">
                <span className="font-bold">The entire process takes less than 48 hours</span> from our first call to
                your products being live on our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
