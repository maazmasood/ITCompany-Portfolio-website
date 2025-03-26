'use client'
import { useState, useRef } from 'react'
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
  type CarouselApi
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Award, ArrowRight, TrendingUp, Clock, Check, Star } from 'lucide-react'
import React from 'react'

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
  const [api, setApi] = useState<CarouselApi>()

  // Update the activeIndex when the carousel slides change
  React.useEffect(() => {
    if (!api) return
    
    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap())
    }
    
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

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
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-blue-500 mr-4"></div>
              <span className="text-blue-400 uppercase tracking-wider font-medium text-sm">
                Client Success
              </span>
              <div className="h-px w-12 bg-blue-500 ml-4"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Transforming Visions <span className="text-blue-400">Into Reality</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore how we've helped enterprises across industries achieve digital transformation 
            goals and drive unprecedented growth.
          </p>
        </div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true
          }}
          setApi={setApi}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {cases.map((study, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <Link href={study.link} className="block h-full">
                  <Card className="group h-full cursor-pointer bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500 overflow-hidden">
                    <CardContent className="p-0 h-full">
                      <div className="flex flex-col h-full">
                        <div className="relative h-64 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent z-10" />
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                          <div className="absolute top-4 right-4 z-20">
                            <div className="flex items-center gap-2 bg-blue-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                              <Award className="h-4 w-4 text-white" />
                              <span className="text-xs font-medium text-white">
                                {study.achievement}
                              </span>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 z-20">
                            <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                              {study.title}
                            </h3>
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag, i) => (
                                <Badge key={i} variant="secondary" className="bg-blue-900/30 text-blue-200 border border-blue-700/50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                            <p className="text-gray-300 text-base mb-6">
                          {study.description}
                        </p>
                      </div>

                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                        {study.metrics.map((metric, i) => (
                                <div key={i} className="flex items-center gap-2 group/metric">
                                  {i === 0 ? (
                                    <div className="p-1.5 rounded-md bg-blue-500/20 text-blue-300">
                                      <Check className="w-4 h-4" />
                                    </div>
                                  ) : i === 1 ? (
                                    <div className="p-1.5 rounded-md bg-green-500/20 text-green-300">
                                      <TrendingUp className="w-4 h-4" />
                                    </div>
                                  ) : i === 2 ? (
                                    <div className="p-1.5 rounded-md bg-purple-500/20 text-purple-300">
                                      <Clock className="w-4 h-4" />
                                    </div>
                                  ) : (
                                    <div className="p-1.5 rounded-md bg-orange-500/20 text-orange-300">
                                      <Star className="w-4 h-4" />
                            </div>
                                  )}
                                  <span className="text-sm text-gray-300 group-hover/metric:text-white transition-colors">
                              {metric}
                            </span>
                          </div>
                        ))}
                      </div>

                            <div className="pt-4 border-t border-gray-700/50">
                              <div className="flex items-center text-blue-400 font-medium transition-all">
                                View Case Study
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </CardContent>
                </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex items-center justify-center gap-4">
            <CarouselPrevious className="relative bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/30 text-white" />
            <div className="flex gap-1">
              {cases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {}}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-8 bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="relative bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/30 text-white" />
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/case-studies" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default SuccessStories;
