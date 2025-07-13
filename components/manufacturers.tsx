"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Manufacturers() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              entry.target.classList.add("animate-fade-in")
            } else if (entry.target === imageRef.current) {
              entry.target.classList.add("animate-scale-in")
            } else if (entry.target === faqRef.current) {
              entry.target.classList.add("animate-slide-up")
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (headerRef.current) observer.observe(headerRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    if (faqRef.current) observer.observe(faqRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="pt-8 bg-gray-50 pb-0" id="contact" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-20 opacity-0">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-4">For Manufacturers</p>
          <h2 className="text-4xl md:text-5xl font-heading font-normal text-gray-900 mb-8 leading-tight">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Join our collection of furniture brands. We're seeking manufacturers who share our commitment to great
            design and craftsmanship.
          </p>
          <a
            href="mailto:miran@dollhouseai.co"
            className="inline-block bg-green-700 hover:bg-green-800 text-white rounded-full px-8 py-3 text-lg transition-all duration-300 btn-hover"
          >
            Contact
          </a>
        </div>

        <div ref={imageRef} className="relative max-w-4xl mx-auto mb-16 opacity-0">
          <div className="bg-gradient-to-br from-green-100 to-brown-100 rounded-3xl p-8 h-80 flex items-center justify-center card-hover">
            <Image
              src="/images/modern-living-room.jpeg"
              alt="Modern minimalist living room with sage green chair, tan leather sofa, and white coffee table"
              width={600}
              height={250}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>

        <div ref={faqRef} className="max-w-3xl mx-auto opacity-0 py-9">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-normal text-gray-900 mb-2">Frequently Asked Questions</h3>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1" className="bg-white rounded-xl border border-gray-200 px-6 card-hover">
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-green-600 transition-colors py-4">
                What types of suppliers is Dollhouse looking for?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                We're targeting furniture manufacturers who prioritize great design and craftsmanship. Ideal partners
                are established brands with 200-1000 curated products, drop-ship capabilities, existing warehouse
                inventory, and API integration readiness.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-xl border border-gray-200 px-6 card-hover">
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-green-600 transition-colors py-4">
                How does the onboarding process work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                Our onboarding process is designed for brands and typically completed within 48 hours. We seamlessly
                connect to your Inventory Management System, create or import 3D models of your products, and handle all
                technical integration to showcase your catalog.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-xl border border-gray-200 px-6 card-hover">
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-green-600 transition-colors py-4">
                Do I need to provide 3D models of my products?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                While we welcome existing 3D assets, they're not required. Our proprietary image-to-3D pipeline creates
                photorealistic, high-fidelity models overnight using your professional product photography, ensuring
                your pieces are presented with exceptional detail and accuracy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-xl border border-gray-200 px-6 card-hover">
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-green-600 transition-colors py-4">
                What makes Dollhouse different from other furniture marketplaces?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                Dollhouse is the world's first furniture platform combining advanced semantic search, AI-powered
                recommendations, immersive 3D visualization, custom room design tools, and our exclusive AI interior
                designer, Dolly. We cater to customers who approach furniture as complete lifestyle curation, not
                individual purchases.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-xl border border-gray-200 px-6 card-hover">
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-green-600 transition-colors py-4">
                When is Dollhouse launching?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                Dollhouse launches summer 2025. We're currently curating a collection of manufacturers to ensure our
                marketplace reflects the highest standards of design excellence from day one.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-xl border border-gray-200 px-6 card-hover">
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-green-600 transition-colors py-4">
                What are the partnership requirements?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                We seek established brands with proven track records in furniture design. Partners should have robust
                inventory management systems, professional product photography, and the ability to maintain the
                exceptional service standards our clientele expects.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
