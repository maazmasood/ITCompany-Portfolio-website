'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardContent
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Award, ArrowRight } from 'lucide-react'

type CaseStudy = {
  title: string
  description: string
  metrics: string[]
  image: string
  tags: string[]
  achievement: string
  link: string
}

export function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const cases: CaseStudy[] = [
    {
      title: "HVAC Selling Platform",
      description: "How we helped a German Brand to earn more than €25K in profits.",
      metrics: ["Germany", "500% ROI", "40+ sales/month", "300%+ New users"],
      image: "/case-studies/klimanrw-futureascend.png",
      link: "/case-studies/klimanrw-futureascend",
      tags: ["HVAC", "Web Application", "Digital Marketing"],
      achievement: "Excellence in HVAC 2024",
    },
    {
      title: "Revenue Cycle Management Website",
      description: "How we helped a US medical billing provider with user interactive website",
      metrics: ["United States", "99% uptime", "70% faster", "SEO Friendly"],
      image: "/case-studies/medirises-futureascend.png",
      link: "/case-studies/medirises-futureascend",
      tags: ["Healthcare", "Medical Billing", "Software Solution"],
      achievement: "Best User Experience 2024",
    },
    {
      title: "Photovoltaik Industry Landing Page",
      description: "How we helped a 10-year-old company in the renewable energy industry (Photovoltaiky)",
      metrics: ["Germany", "60% Cost Reduction", "Monthly payments", "Free Graphics and SEO"],
      image: "/case-studies/pvnrw-futureascend.png",
      link: "/case-studies/pvnrw-futureascend",
      tags: ["Renewable Energy", "Web Design", "SEO"],
      achievement: "Renewable Excellence Award 2024",
    },
    {
      title: "Leading Healthcare Doctor's Portfolio",
      description: "We help professionals showcase their skills and work on digital platforms",
      metrics: ["United States", "WordPress based", "Small Scale Website", "99% Satisfaction"],
      image: "/case-studies/cchsllc-futureascend.png",
      link: "/case-studies/cchsllc-futureascend",
      tags: ["Healthcare", "Web Design", "WordPress"],
      achievement: "Best Portfolio Design 2024",
    },
    {
      title: "Crypto Startup Project",
      description: "We are into Web3 too, helped an Indian company with their interactive website and blockchain integration",
      metrics: ["India", "100% secure", "Profit Calculator", "100% uptime"],
      image: "/case-studies/bnbfarm-futureascend.png",
      link: "/case-studies/bnbfarm-futureascend",
      tags: ["Blockchain", "Web3", "Crypto"],
      achievement: "Blockchain Excellence Award 2024",
    },
    {
      title: "Real Estate Platform",
      description: "Scaling an online real estate marketplace to handle thousands of daily deals",
      metrics: ["Pakistan", "350% deals Increase", "50% more users", "70% Automation"],
      image: "/case-studies/ssfmarketing-futureascend.png",
      link: "/case-studies/ssfmarketing-futureascend",
      tags: ["Real Estate", "Web Design", "Marketplace"],
      achievement: "Real Estate Growth 2024",
    },
    {
      title: "E-Commerce Shop in Sweden",
      description: "Revolutionizing logistics with real-time tracking and predictive maintenance",
      metrics: ["Sweden", "User Engagement", "Following Trends", "Full Admin Support"],
      image: "/case-studies/akosCreative-futureascend.png",
      link: "/case-studies/akosCreative-futureascend",
      tags: ["E-commerce", "Logistics", "Fashion"],
      achievement: "E-Commerce Innovation 2024",
    },
    {
      title: "Collecting Influencers on One Platform",
      description: "We helped them create a platform to hire all influencers in one place",
      metrics: ["United Kingdom", "Unique Idea", "WordPress", "Fully dynamic"],
      image: "/case-studies/influencerCollective-futureascend.png",
      link: "/case-studies/influencerCollective-futureascend",
      tags: ["Influencers", "Web Design", "Platform Development"],
      achievement: "Influencer Platform of the Year 2024",
    }
  ]

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore how we've helped enterprises achieve their digital transformation goals
            and drive unprecedented growth.
          </p>
        </div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true
          }}
          onSelect={(index) => setActiveIndex(index)}
        >
          <CarouselContent className="ml-0">
            {cases.map((study, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-72 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                        {study.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-white/90 text-gray-900">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-8 space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-gray-600 text-lg">
                          {study.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {study.metrics.map((metric, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <ChevronRight className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">
                              {metric}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center text-primary font-medium group/link">
                        <Link href={study.link}>
                          Read Case Study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 items-center justify-end gap-2 hidden md:flex">
            <CarouselPrevious className="position-static" />
            <CarouselNext className="position-static" />
          </div>
        </Carousel>

        <div className="mt-4 flex justify-center gap-2 hidden">
          {cases.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-primary w-6' : 'bg-gray-300'}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <p className="text-gray-600 text-sm md:hidden text-center mt-4">
          Swipe to explore more success stories...
        </p>
      </div>
    </section>
  )
}

export default SuccessStories;
