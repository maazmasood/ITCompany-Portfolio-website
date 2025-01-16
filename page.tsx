'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AnimatedGradient } from '@/components/animated-gradient'
import { TechStack } from '@/components/tech-stack'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { ArrowRight, Brain, Code, Globe, Search, Users2, MessageSquare, RefreshCcw, TrendingUp, Users, Target, Database, Cloud, Smartphone, Play, Shield, CheckCircle2, ArrowUpRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar - Dark Theme */}
      <header className={`sticky top-0 z-50 w-full transition-all ${
        scrollY > 0 ? "bg-gray-900/95 backdrop-blur-md" : "bg-gray-900"
      }`}>
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold text-white">FutureAscend</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              {['Services', 'Solutions', 'Case Studies', 'About'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Get in Touch
          </Button>
        </div>
      </header>

      {/* Hero Section - Dark Theme with Wave Pattern */}
      <section className="relative bg-gray-900 py-20 sm:py-32 overflow-hidden">
        <AnimatedGradient />
        <div className="container relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Driving Business Growth with Scalable Digital Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              AI is at the core of everything we do. Transform your business with our enterprise-grade solutions.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Let's Work Together
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clients Ticker */}
      <div className="bg-gray-900 border-y border-gray-800">
        <div className="container py-6">
          <div className="flex items-center gap-8 animate-[scroll_20s_linear_infinite]">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src="/placeholder.svg"
                alt="Client logo"
                width={120}
                height={40}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>

      {/* What would you like to get done? - Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What would you like to get done?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of enterprise solutions designed to accelerate your digital transformation journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Application Modernization",
                description: "Transform legacy systems into modern, cloud-native applications.",
                icon: RefreshCcw,
                benefits: ["Improved Performance", "Cost Efficiency", "Better Scalability"]
              },
              {
                title: "AI & Machine Learning",
                description: "Leverage AI to gain insights and automate processes.",
                icon: Brain,
                benefits: ["Predictive Analytics", "Process Automation", "Smart Decisions"]
              },
              {
                title: "Cloud Solutions",
                description: "Scale your infrastructure with secure cloud computing.",
                icon: Cloud,
                benefits: ["Global Scale", "High Availability", "Cost Optimization"]
              },
              {
                title: "Cyber Security",
                description: "Protect your assets with enterprise-grade security.",
                icon: Shield,
                benefits: ["Threat Detection", "Data Protection", "Compliance"]
              },
              {
                title: "Digital Transformation",
                description: "Navigate your complete digital transformation journey.",
                icon: Globe,
                benefits: ["Strategic Planning", "Implementation", "Training"]
              },
              {
                title: "Mobile Development",
                description: "Create engaging mobile experiences for your users.",
                icon: Smartphone,
                benefits: ["Cross-Platform", "Native Apps", "Progressive Web Apps"]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full mt-4 group">
                    Learn More
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use cutting-edge technologies to build scalable, secure, and efficient solutions for our clients.
            </p>
          </div>
          <TechStack />
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        <AnimatedGradient />
        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Leading your Digital Journey to Success
            </h2>
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Let's Work Together
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "15+", label: "Years of driving growth" },
              { metric: "1000+", label: "Forward thinking experts" },
              { metric: "500+", label: "Digital Projects Delivered" },
              { metric: "25+", label: "Industries we've served" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
                <div className="text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block bg-gray-800 rounded-full px-4 py-2">
              <span className="text-white font-semibold">94%</span>
              <span className="text-gray-400 ml-2">Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say about working with us.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore how we've helped enterprises achieve their digital transformation goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Healthcare Platform",
                description: "How we helped a healthcare provider serve 1M+ patients with AI",
                metrics: ["500% ROI", "1M+ Users", "99.9% Uptime"],
                image: "/placeholder.svg"
              },
              {
                title: "Cloud Migration Success",
                description: "Modernizing legacy systems for a Fortune 500 company",
                metrics: ["40% Cost Reduction", "Zero Downtime", "3x Performance"],
                image: "/placeholder.svg"
              },
              {
                title: "Digital Banking Transform",
                description: "Building next-gen banking solutions for the digital age",
                metrics: ["10M+ Transactions", "5x Growth", "99% Satisfaction"],
                image: "/placeholder.svg"
              }
            ].map((study, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all">
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
                    <div className="flex flex-wrap gap-2">
                      {study.metrics.map((metric, i) => (
                        <span key={i} className="text-sm bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-600">
                Let's discuss how our enterprise solutions can accelerate your digital transformation journey.
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-1 block">
                      Full Name
                    </label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-1 block">
                      Email
                    </label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-1 block">
                      Company
                    </label>
                    <Input placeholder="Company Name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-1 block">
                      Phone
                    </label>
                    <Input type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-gray-900 mb-1 block">
                      Message
                    </label>
                    <Textarea placeholder="Tell us about your project" className="h-32" />
                  </div>
                  <div className="md:col-span-2">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Advisory</h3>
              <ul className="space-y-2">
                {['Discovery Workshop', 'Market Research', 'Technical Feasibility'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Engineering</h3>
              <ul className="space-y-2">
                {['Application Development', 'Cloud Engineering', 'DevOps'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">AI & Innovation</h3>
              <ul className="space-y-2">
                {['Machine Learning', 'NLP/NLU', 'Computer Vision'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {['Case Studies', 'Blog', 'Whitepapers'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Subscribe</h3>
              <p className="mb-4">Get exclusive insights, curated tech news & updates.</p>
              <form className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm">
                © 2024 FutureAscend. All rights reserved.
              </div>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

