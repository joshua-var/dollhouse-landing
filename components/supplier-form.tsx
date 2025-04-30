"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check } from "lucide-react"

export default function SupplierForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

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

    if (formRef.current) {
      observer.observe(formRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      companyName: formData.get("companyName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      catalogSize: formData.get("catalogSize") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }

      setSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError(error instanceof Error ? error.message : 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-12 bg-green-50 relative" id="supplier-form" ref={sectionRef}>
      <div className="absolute inset-0 dot-pattern z-0 opacity-30"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-green-200/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-green-200/30 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 z-0"></div>

      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto">
          {!submitted ? (
            <>
              <div className="opacity-0" ref={formRef}>
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-2xl gradient-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        required
                        className="h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        className="h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <Input
                      id="companyName"
                      name="companyName"
                      placeholder="Company Name"
                      required
                      className="h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Business Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      className="h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="catalogSize" className="text-sm font-medium text-gray-700">
                      Catalog Size
                    </label>
                    <Select name="catalogSize">
                      <SelectTrigger className="h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500">
                        <SelectValue placeholder="Select catalog size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-99">0-99 products</SelectItem>
                        <SelectItem value="100-299">100-299 products</SelectItem>
                        <SelectItem value="300-699">300-699 products</SelectItem>
                        <SelectItem value="700+">700+ products</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Additional Information
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your products and what you're looking for in a marketplace partner."
                      rows={4}
                      className="rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  {formError && (
                    <div className="text-red-600 text-sm text-center p-2 bg-red-50 rounded-md">
                      Error: {formError}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 rounded-full h-12 text-base font-medium shadow-lg futuristic-shadow"
                  >
                    {isSubmitting ? "Submitting..." : "Join Waitlist"}
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <div className="text-center bg-white p-12 rounded-2xl shadow-2xl gradient-border animate-scale-up">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Joining Our Waitlist!</h2>
              <p className="text-xl text-gray-600 mb-6">
                We've received your information and will be in touch shortly to discuss how we can work together to
                showcase your furniture on Dollhouse.
              </p>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 rounded-full px-8 h-12"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Application
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
