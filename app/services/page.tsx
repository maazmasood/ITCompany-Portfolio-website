"use client";

import { NavBar } from '@/components/navbar'

import { AnimatedGradient } from '@/components/animated-gradient'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCcw, Brain,BrainCircuit ,Microchip , Cloud, Shield, Globe, Database, ArrowDown,ArrowRight, CheckCircle2, PenTool } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import EnhancedContactForm from '@/components/EnhancedContactForm'
import { Footer } from '@/components/footer'

export default function ServicesPage() {
  const services = [
  {
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to gain insights, automate processes, and drive innovation.",
    icon: BrainCircuit,
    benefits: [
      "Predictive Analytics",
      "Process Automation",
      "Natural Language Processing",
      "Computer Vision",
    ],
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our advanced threat detection and prevention systems.",
    icon: Shield,
    benefits: [
      "Threat Detection and Response",
      "Data Encryption",
      "Network Security",
      "Compliance Management",
    ],
  },
  {
    title: "Web Development",
    description: "Revolutionize your business processes and customer experiences with end-to-end digital solutions.",
    icon: Globe,
    benefits: [
      "Responsive Design",
      "Custom Web Applications",
      "SEO Optimization",
      "E-commerce Solutions",
    ],
  },
  {
    title: "Product Designing",
    description: "Create user-centric designs that blend innovation, functionality, and aesthetic appeal to deliver exceptional product experiences.",
    icon: PenTool,
    benefits: [
      "Innovative and Aesthetic Product Solutions",
      "User-Centric Approach to Design",
      "Prototyping and Iterative Refinement",
      "Enhanced Usability and Accessibility",
    ],
  },
  {
    title: "IoT & Edge Computing",
    description: "Connect and optimize your devices with our innovative Internet of Things and edge computing solutions.",
    icon: Microchip,
    benefits: [
      "Real-time Analytics",
      "Predictive Maintenance",
      "Smart Automation",
      "Energy Efficiency",
    ],
  },
  {
    title: "Blockchain Development",
    description: "Leverage the power of distributed ledger technology for enhanced security and transparency.",
    icon: Database,
    benefits: [
      "Decentralized Applications",
      "Smart Contract Development",
      "Secure Transactions",
      "Immutable Data Storage",
    ],
  },
];

  return (
    <div className="flex min-h-screen flex-col ">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 relative text-white py-24 px-5 md:px-32">
        <AnimatedGradient />
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Innovative Services for the Digital Age</h1>
              <p className="text-xl mb-8">Empower your business with our cutting-edge technology solutions designed to drive growth and innovation.</p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Explore Our Services
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 bg-gray-50  px-5 md:px-32">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-blue-500 mb-4" />
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white  px-5 md:px-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose FutureAscend?</h2>
              <p className="text-gray-600">Our commitment to excellence and innovation sets us apart in the industry.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Expertise", description: "Our team of experts brings years of industry experience to every project." },
                { title: "Innovation", description: "We stay at the forefront of technology to deliver cutting-edge solutions." },
                { title: "Customization", description: "Our services are tailored to meet your unique business needs." },
                { title: "Scalability", description: "Our solutions grow with your business, ensuring long-term success." },
                { title: "Support", description: "We provide ongoing support and maintenance for all our services." },
                { title: "Results-Driven", description: "We focus on delivering measurable results that impact your bottom line." },
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mb-1 py-24 bg-gray-900 text-white px-5 md:px-32">
          <AnimatedGradient />
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  z-20">
              <div className=" z-10">
                <h2 className="text-3xl font-bold mb-6">Success Story: Revenue Cycle Management Website </h2>
                <p className="mb-6">We crafted a highly interactive, SEO-friendly platform that delivered exceptional performance.</p>
                <ul className="space-y-2 mb-8">
  <li className="flex items-center">
    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
    Collaborated with the client to identify target audience needs.
  </li>
  <li className="flex items-center">
    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
    Designed an intuitive user interface tailored to healthcare providers and patients.
  </li>
  <li className="flex items-center">
    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
    Optimized the platform for search engines and mobile responsiveness.
  </li>
  <li className="flex items-center">
    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
    Integrated analytics tools to track engagement and enhance functionality.
  </li>
</ul>

    <Link href="/case-studies/medirises-futureascend">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white z-100">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/case-studies/medirises-futureascend.png"
                  alt="case-studies-medirises-futureascend.png"
                  fill
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
