"use client"

import { useEffect, useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What types of suppliers is Dollhouse looking for?",
      answer:
        "We're targeting mid to high-end furniture manufacturers who care about design and have between 200-1000 products. Ideal partners are drop-ship ready with existing warehouse inventory and can connect to our platform via API.",
    },
    {
      question: "How does the onboarding process work?",
      answer:
        "Our onboarding process is quick and efficient, typically taking less than 48 hours. We'll connect to your Inventory Management System, create or import 3D models of your products, and handle all the technical details to get your catalog live on our platform.",
    },
    {
      question: "What are the costs associated with joining Dollhouse?",
      answer:
        "There are no upfront costs to join Dollhouse. We operate on a revenue-share model where we apply a market-appropriate margin to your wholesale pricing. This alignment of incentives ensures we're motivated to maximize your sales volume while maintaining competitive consumer pricing.",
    },
    {
      question: "Do I need to provide 3D models of my products?",
      answer:
        "While we can use existing 3D models if you have them, it's not required. Our image-to-3D pipeline can generate high-fidelity models overnight using your product photos.",
    },
    {
      question: "What makes Dollhouse different from other furniture marketplaces?",
      answer:
        "Dollhouse is the only platform that combines semantic search, reactive recommendations, a live 3D viewer, build mode for customization, and an AI virtual designer. We're built for how people actually shop for furniture today, focusing on complete room design rather than individual products.",
    },
    {
      question: "When is Dollhouse launching?",
      answer:
        "Dollhouse is scheduled to launch in summer 2025. We're currently onboarding suppliers to our platform to ensure we have a robust catalog at launch.",
    },
    {
      question: "How soon can I start selling on Dollhouse?",
      answer:
        "Once you join our waitlist, we'll contact you to begin the onboarding process. The entire process from initial conversation to going live typically takes less than 48 hours.",
    },
  ]

  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 bg-white" id="faq" ref={sectionRef}>
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto opacity-0" ref={contentRef}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-2">
                <AccordionTrigger className="text-left font-medium text-gray-900 text-lg hover:text-green-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
