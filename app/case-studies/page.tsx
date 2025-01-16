"use client";

import { NavBar } from '@/components/navbar'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"


import { AnimatedGradient } from '@/components/animated-gradient'
import EnhancedContactForm from '@/components/EnhancedContactForm'
import { Footer } from '@/components/footer'
import {ArrowDown, Database, ShoppingCart, Briefcase, Activity, Building, Truck, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "HVAC Selling Platform",
      description: "How we helped a German Brand to earn more than €25K in profits.",
      metrics: [ "Germany","500% ROI", "40+ sales/month", "300%+ New users"],
      image: "/case-studies/klimanrw-futureascend.png",
      link: "/case-studies/klimanrw-futureascend"
    },
    {
      title: "Revenue Cycle Management Website",
      description: "How we helped a US medical billing provider with user interactive website ",
      metrics: ["United States","99% uptime", "70% faster", "SEO Friendly"],
      image: "/case-studies/medirises-futureascend.png",
      link: "/case-studies/medirises-futureascend"
    },
    {
      title: "Photovoltaik Industry Landing Page",
      description: "How we helped 10 years of old company in the renewable energy industry (Photovoltaiky)",
      metrics: [ "Germany","60% Cost Reduction", "Monthly payments", "Free Graphics ans SEO"],
      image: "/case-studies/pvnrw-futureascend.png",
      link: "/case-studies/pvnrw-futureascend"
    },
    {
      title: "Leading Healthcare Doctor's Portfolio",
      description: "We help professionals show case their skills and work on digital platforms" ,
      metrics: ["United States","Wordpress based", "Small Scale Website", "99% Satisfaction"],
      image: "/case-studies/cchsllc-futureascend.png",
      link: "/case-studies/cchsllc-futureascend"
    },
    {
      title: "Crypto Startup Project",
      description: "We are into Web3 too, helped Indian Company in thier interactive webiste and blockchain",
      metrics: ["India","100% secure", "Profit Calculator", "100% uptime"],
    image: "/case-studies/bnbfarm-futureascend.png",
      link: "/case-studies/bnbfarm-futureascend"
    },
    {
      title: "Real E-state Platform",
      description: "Scaling an online realEstate marketplace to handle thousand of daily deals",
      metrics: ["Pakistan","350% deals Increase", "50% more users", "70% Automation"],
    image: "/case-studies/ssfmarketing-futureascend.png",
      link: "/case-studies/ssfmarketing-futureascend"
    },
    {
      title: "E-Commerce Shop in Sweden",
      description: "Revolutionizing logistics with real-time tracking and predictive maintenance",
      metrics: ["Sweden","User Engagung", "Following Trends", "Full Admin Support"],
      image: "/case-studies/akosCreative-futureascend.png",
      link: "/case-studies/akosCreative-futureascend"
    },
    {
      title: "Collecting influencer at one platform",
      description: "We helped them to make a platforms to hire all influencers on single platform",
      metrics: ["United Kingdom","Unique Idea", "Wordpress", "Fully dynamic"],
      image: "/case-studies/influencerCollective-futureascend.png",
      link: "/case-studies/influencerCollective-futureascend"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-grow">

      <section className="bg-gray-900 text-white py-24 px-5 md:px-32 relative">
  <AnimatedGradient />
  <div className="container">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Industry-Specific Solutions</h1>
      <p className="text-xl mb-8">Explore how our custom solutions are shaping the future of businesses across various industries, helping them achieve lasting success and growth.</p>
      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
        We deliver the Best
        <ArrowDown className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </div>
</section>


        <section className="py-24 bg-gray-50 px-5 md:px-32">
          <div className="container">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all">
                  <Link href={study.link}>
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{study.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.metrics.map((metric, i) => (
                            <span key={i} className="text-sm bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                              {metric}
                            </span>
                          ))}
                        </div>
                        <Button variant="outline" className="w-full">
                          Read Case Study
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <EnhancedContactForm />

      <Footer />
      </main>
    </div>
  )
}
