"use client";

import { NavBar } from '@/components/navbar'

import { AnimatedGradient } from '@/components/animated-gradient'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {  ShoppingCart, Briefcase, Activity, Building, Truck,RefreshCcw, Brain,BrainCircuit ,Microchip , Cloud, Shield, Globe, Database, ArrowDown,ArrowRight, CheckCircle2, PenTool, Megaphone  } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import EnhancedContactForm from '@/components/EnhancedContactForm'
import { Footer } from '@/components/footer'

export default function SolutionsPage() {
  const solutions = [
    {
      category: "Automation & Efficiency",
      problem: "Repetitive tasks and inefficiency in business processes.",
      solution: "AI for automation – streamline operations, improve efficiency, and reduce manual workload through intelligent systems.",
      icon: BrainCircuit,
    },
    {
      category: "Blockchain & Transparency",
      problem: "Lack of transparency and security in transactions.",
      solution: "Blockchain for decentralization – enhance security, transparency, and trust with distributed ledger technology.",
      icon: Database,
    },
    {
      category: "Cybersecurity",
      problem: "Rising cybersecurity threats and vulnerabilities in digital systems.",
      solution: "Cybersecurity for safe and secure operations – protect sensitive data and systems with advanced threat detection and prevention.",
      icon: Shield,
    },
    {
      category: "Product Innovation",
      problem: "New startups struggling to develop impactful and innovative products.",
      solution: "Product designing for new startups – create user-centric, functional, and aesthetic products tailored to market needs.",
      icon: PenTool,
    },
    {
      category: "Digital Transformation",
      problem: "Traditional businesses unable to adapt to the digital era.",
      solution: "Website development for shifting businesses online – build a strong digital presence with responsive and high-performing websites.",
      icon: Globe,
    },
    {
      category: "Marketing & Growth",
      problem: "Difficulty in reaching target audiences and building a strong brand image.",
      solution: "Digital marketing to make brand image and grow – leverage SEO, social media, and paid ads to enhance visibility and grow your business.",
      icon: Megaphone,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-24 px-5 md:px-32 relative">
          <AnimatedGradient />
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Tailored Solutions for Every Industry</h1>
              <p className="text-xl mb-8">Discover how our innovative solutions can transform your business and drive sustainable growth.</p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Explore Our Solutions
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-24 bg-gray-50 px-5 md:px-32">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <solution.icon className="h-12 w-12 text-blue-500 mb-4" />
                    <CardTitle className="text-xl mb-2">{solution.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-md font-semibold mb-2">{solution.problem}</h3>
                    <p className="text-gray-600">{solution.solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>




        {/* Case Study Highlight */}
        <section className="relative py-24 bg-gray-900 text-white px-5 md:px-32">
          <AnimatedGradient />
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  z-20">
              <div className=" z-10">
                <h2 className="text-3xl font-bold mb-6">Success Story: Photovoltaik Industry Website</h2>
                <p className="mb-6">We developed a sleek, performance-driven landing page tailored for the renewable energy audience..</p>
                <ul className="space-y-2 mb-8">
    <li className="flex items-center">
      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
      Analyzed target audience behavior to craft a user-centric design.
    </li>
    <li className="flex items-center">
      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
      Designed and implemented an intuitive, responsive landing page.
    </li>
    <li className="flex items-center">
      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
      Provided high-quality, custom graphics to enhance visual appeal.
    </li>
    <li className="flex items-center">
      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
      Optimized the landing page with SEO best practices for greater visibility.
    </li>
    <li className="flex items-center">
      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
      Integrated analytics tools to track performance and refine the approach.
    </li>
  </ul>


    <Link href="/case-studies/pvnrw-futureascend">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white z-100">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/case-studies/pvnrw-futureascend.png"
                  alt="case-studies-pvnrw-futureascend.png"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <EnhancedContactForm />

      <Footer />
      </main>
    </div>
  )
}
