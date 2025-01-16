"use client";

import { NavBar } from '@/components/navbar'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight,ArrowDown, CheckCircle2, BarChart, Clock, Users, DollarSign } from 'lucide-react'
import Image from "next/image"
import EnhancedContactForm from '@/components/EnhancedContactForm'
import { Footer } from '@/components/footer'
import Link from "next/link"

import { AnimatedGradient } from '@/components/animated-gradient'
import caseStudies from '@/constants/casestudy.json';

 function getCaseStudy(slug: string) {
  return caseStudies[slug] || null
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudy(params.slug)

  if (!caseStudy) {
    return (
      <div className="flex min-h-screen flex-col">
        <NavBar />
        <main className="flex-grow">
          <section className="bg-gray-900 text-white py-24 relative">
            <AnimatedGradient />
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">Case Study Not Found</h1>
                <p className="text-xl mb-8">We could not find the requested case study. Please check the URL or contact support.</p>
              </div>
            </div>
          </section>
        </main>

       {/* Contact Section */}
       <EnhancedContactForm />

      <Footer />



      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-24 relative">
            <AnimatedGradient />
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">{caseStudy.title}</h1>
              <p className="text-xl mb-8">Discover how we revolutionized delivery for {caseStudy.client}</p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                View Full Case Study
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="pt-24 bg-white  px-5 md:px-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <dl className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <dt className="font-semibold text-gray-600">Client</dt>
                    <dd>{caseStudy.client}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-600">Industry</dt>
                    <dd>{caseStudy.industry}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-600">Duration</dt>
                    <dd>{caseStudy.duration}</dd>
                  </div>
                </dl>
                <h3 className="text-xl font-bold mb-2">The Challenge</h3>
                <p className="mb-4 text-gray-600">{caseStudy.challenge}</p>
                <h3 className="text-xl font-bold mb-2">Our Solution</h3>
                <p className="mb-4 text-gray-600">{caseStudy.solution}</p>

                {
      caseStudy.website ? (
        <Link target="_blank" href={caseStudy.website} passHref>
          <p className="text-grey-900 text-lg font-semibold py-2 rounded">
            Link: {caseStudy.website}
          </p>
        </Link>
      ) : (
        <p className="text-grey-900 text-lg font-semibold py-2 rounded">
          Link: Website not available, client may have taken it down
        </p>
      )
    }


              </div>

              <div className="relative h-96 rounded-lg overflow-hidden">
  <Image
    src={caseStudy.image}
    alt={caseStudy.title}
    layout="fill"
    className="object-cover"
  />

</div>

            </div>
          </div>
        </section>


        {/* Results */}
        <section className="py-24 bg-white  px-5 md:px-32">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Impressive Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {caseStudy.results.map((result, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-500 mb-2">{result.metric}</div>
                    <p className="text-gray-600">{result.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="pb-10 bg-gray-50  px-5 md:px-32">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.techStack.map((tech, index) => (
                <div key={index} className="bg-white rounded-full px-4 py-2 text-blue-500 font-semibold shadow-md">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 bg-gray-900 text-white relative">
          <AnimatedGradient />
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Client Testimonial</h2>
              <blockquote className="text-2xl italic mb-6">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="text-left">
                  <p className="font-bold">{caseStudy.testimonial.author}</p>
                  <p className="text-gray-400">{caseStudy.testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>



      </main>

        {/* Contact Section */}
       <EnhancedContactForm />

      <Footer />

    </div>
  )
}
