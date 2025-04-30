"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface AnimateOnScrollProps {
  children: ReactNode
  animation: string
  delay?: string
  threshold?: number
  className?: string
}

export default function AnimateOnScroll({
  children,
  animation,
  delay = "0",
  threshold = 0.1,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animation)
            entry.target.classList.remove("opacity-0")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [animation, threshold])

  return (
    <div ref={ref} className={`opacity-0 ${delay ? `animate-delay-${delay}` : ""} ${className}`}>
      {children}
    </div>
  )
}
