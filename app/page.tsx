"use client";

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
import { NavBar } from '@/components/navbar'

import { KeyFeatures } from '@/components/key-features'
import { StatsSection } from "@/components/stats-section";
import { HowWeWork } from '@/components/how-we-work'
import { TeamHighlights } from '@/components/team-highlights'
import { BlogPreview } from '@/components/blog-preview'
import { AwardsRecognitions } from '@/components/awards-recognitions'
import EnhancedContactForm from '@/components/EnhancedContactForm'
import SuccessStories from '@/components/SuccessStories'
import { Footer } from '@/components/footer'
import { ArrowRight, Brain,BrainCircuit ,Microchip , Code, Globe, Search, Users2, MessageSquare, RefreshCcw, TrendingUp, Users, Target, Database, Cloud, Smartphone, Play, Shield, CheckCircle2, ArrowUpRight, PenTool } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"



export default function Page() {
  return (
      <div className="flex min-h-screen flex-col">
        <NavBar />

        {/* Hero Section */}
        <section className="relative bg-gray-900 py-32 md:py-12 overflow-hidden px-5 md:px-32">
      <AnimatedGradient />
      <div className="container relative flex flex-col md:flex-row items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Driving Business Growth with Scalable Digital Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            AI is at the core of everything we do. Transform your business with our enterprise-grade solutions.
          </p>
          <div className="mt-10 flex items-center gap-x-6">

            <Link href="/services">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Let's Work Together
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="/case-studies">
              <Button variant="ghost" className="text-gray-300 hover:text-[#2563EB]">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
        {/* Image section for md and larger */}
        <div className="pt-5 max-w-2xl hidden lg:flex md:mt-0 ml-auto justify-center items-center">
          <img
            src="/hero-img.png" // Replace with the actual image path
            alt="hero-image-FutureAscend"
            className="w-full md:w-auto h-auto"
          />
        </div>
      </div>
    </section>


        {/* Featured Clients Ticker */}
        <div className="bg-gray-900 border-y border-gray-800 overflow-hidden hidden md:block">
    <div className="relative flex py-2 items-center justify-between md:px-32">
      {[...Array(5)].map((_, i) => (
        <Image
          key={i}
          src={`/logo${i+1}.png`}
          alt={`Client logo ${i + 1}`}
          width={120}
          height={40}
          className={`image-item`}
        />
      ))}
    </div>
  </div>


        {/* Services Overview */}
        <section className="py-20 px-5 md:px-32 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our range of cutting-edge services designed to propel your business into the future.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI & Machine Learning",
                  description: "Harness the power of artificial intelligence to gain insights, automate processes, and drive innovation.",
                  icon: BrainCircuit ,
                },
                {
                  title: "Cybersecurity",
                  description: "Protect your digital assets with our advanced threat detection and prevention systems.",
                  icon: Shield,
                },
                {
                  title: "Web Development",
                  description: "Revolutionize your business processes and customer experiences with end-to-end digital solutions.",
                  icon: Globe,
                },
                {
                  title: "Product Designing",
                  description: "Create user-centric designs that blend innovation, functionality, and aesthetic appeal to deliver exceptional product experiences.",
                  icon: PenTool,
                },


                {
                  title: "IoT & Edge Computing",
                  description: "Connect and optimize your devices with our innovative Internet of Things and edge computing solutions.",
                  icon: Microchip ,
                },
                {
                  title: "Blockchain Development",
                  description: "Leverage the power of distributed ledger technology for enhanced security and transparency.",
                  icon: Database,
                },
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <service.icon className="h-8 w-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                    <Link href="/services">
                    <Button variant="ghost" className="w-full mt-4 group">
                      Learn More
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section
        <KeyFeatures />*/}



        <StatsSection/>


        {/* How We Work Process */}
        <HowWeWork />

        {/* Technology Stack Section */}
        <section className="py-20 px-5 md:px-32bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Arsenal</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We leverage cutting-edge technologies to build scalable, secure, and efficient solutions tailored to your business needs.
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
                Driving Measurable Success
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our solutions have consistently delivered outstanding results for our clients across various industries.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { metric: "15+", label: "Successful Projects" },
                { metric: "$50k+", label: "Client Revenue Generated" },
                { metric: "99.9%", label: "System Uptime" },
                { metric: "70%", label: "Average Cost Reduction" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{item.metric}</div>
                  <div className="text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Showcase */}
    <SuccessStories />




        {/* Team Highlights Section
        <TeamHighlights /> */}

        {/* Testimonials Section
        <section className="py-24 bg-gray-900">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Client Testimonials</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what industry leaders have to say about working with us.
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </section>*/}

        {/* Blog/Insights Preview Section
        <BlogPreview />*/}

        {/* Awards and Recognitions Section
        <AwardsRecognitions />*/}

        {/* Contact Section */}
          <EnhancedContactForm />

        <Footer />

      </div>


  )
}
