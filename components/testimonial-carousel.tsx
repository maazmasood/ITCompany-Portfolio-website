'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from 'lucide-react'

export function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "FutureAscend transformed our business with their AI solutions. The results exceeded our expectations.",
      author: "Sarah Chen",
      position: "CTO, TechCorp Global",
      company: "TechCorp Global"
    },
    {
      quote: "Their expertise in cloud solutions helped us scale efficiently. Highly recommended for enterprise solutions.",
      author: "Michael Rodriguez",
      position: "VP Engineering",
      company: "CloudScale Inc"
    },
    {
      quote: "Outstanding service and technical expertise. They're not just vendors, they're strategic partners.",
      author: "Emily Watson",
      position: "Director of Innovation",
      company: "InnovateNow"
    }
  ]

  return (
    <Carousel className="w-full max-w-5xl mx-auto px-5">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <Card className="bg-gray-900 border-gray-800 ">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-blue-400 mb-4" />
                <blockquote className="text-xl text-gray-300 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-gray-400">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div>{testimonial.position}</div>
                  <div>{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden md:flex text-grey'/>
            <CarouselNext className='hidden md:flex'/>
            <p className='text-gray-600 text-sm md:hidden text-center py-2'>Swipe to see more...</p>
    </Carousel>
  )
}

