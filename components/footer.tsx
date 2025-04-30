"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-green-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 z-0"></div>

      <div className="container-narrow py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center h-8 w-8 mr-2">
                <Image
                  src="/images/dollhouse-logo-new.png"
                  alt="Dollhouse Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="text-white text-xl font-bold">Dollhouse</span>
            </div>
            <p className="mb-6 text-gray-400">
              A 3D-powered furniture marketplace that lets you think like a designer and feel like you're playing a
              game. Launching summer 2025.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">For Shoppers</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Browse Rooms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Design Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Meet Dolly
                </Link>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">For Suppliers</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => document.getElementById("suppliers")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Why Join Dollhouse
                </button>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Onboarding Process
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("supplier-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Join Waitlist
                </button>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Partner Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Stay Updated</h3>
            <p className="mb-4 text-gray-400">Subscribe to our newsletter for the latest updates and features.</p>
            <div className="flex space-x-2">
              <Input
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white focus:border-green-500 focus:ring-green-500 h-12 rounded-lg"
              />
              <Button className="bg-green-600 hover:bg-green-500 h-12 px-6">Subscribe</Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} Dollhouse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
