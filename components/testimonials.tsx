import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Most of the stuff we get back isn't broken at all, it's just the wrong fit. Dollhouse's 3D visualization has cut our returns by 27% in just three months.",
      name: "Sarah Johnson",
      title: "Sales Executive, Modern Home Furnishings",
      avatar: "/confident-leader.png",
    },
    {
      quote:
        "Our average order value has increased by 35% since joining Dollhouse. Customers are naturally building complete rooms instead of buying single pieces.",
      name: "Michael Chen",
      title: "CEO, Artisan Furniture Co.",
      avatar: "/confident-businessman.png",
    },
    {
      quote:
        "The onboarding process was incredibly smooth. We were up and running in less than two days, and the team at Dollhouse handled everything.",
      name: "Emma Rodriguez",
      title: "Digital Marketing Manager, Coastal Designs",
      avatar: "/confident-leader.png",
    },
  ]

  return (
    <section className="py-24 bg-gray-50 relative" id="testimonials">
      <div className="absolute inset-0 dot-pattern z-0 opacity-30"></div>

      <div className="container-narrow relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 px-3 py-1 border-green-200 bg-green-50 text-green-800 rounded-full">
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            What Our <span className="text-gradient">Partners Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from furniture suppliers who have joined the Dollhouse platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-xl glass-card overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg className="h-10 w-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-8 flex-grow text-lg">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-green-200">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
