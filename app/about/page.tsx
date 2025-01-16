"use client";

import Head from "next/head";
import { NavBar } from '@/components/navbar';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, CheckCircle2, Users, Globe, Zap, Shield, Award } from 'lucide-react';
import Image from "next/image";
import { AnimatedGradient } from '@/components/animated-gradient';
import EnhancedContactForm from '@/components/EnhancedContactForm';
import { Footer } from '@/components/footer';
import Link from "next/link";

export default function AboutPage() {
  const values = [
    { title: "Innovation", description: "Pushing the boundaries of what's possible in technology", icon: Zap },
    { title: "Integrity", description: "Maintaining the highest ethical standards in all we do", icon: Shield },
    { title: "Collaboration", description: "Working together to achieve extraordinary results", icon: Users },
    { title: "Excellence", description: "Striving for the highest quality in every project", icon: Award },
  ];

  return (
    <>
      <main className="flex min-h-screen flex-col" suppressHydrationWarning>
        <NavBar />
        <div className="flex-grow">

        {/* Hero Section */}
        <section className="bg-gray-900 relative text-white py-24 px-5 md:px-32">
        <AnimatedGradient />
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Pioneering the Future of Technology</h1>
              <p className="text-xl mb-8">At FutureAscend, we're on a mission to transform businesses through innovative digital solutions.</p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Our Story
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-white  px-5 md:px-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2022, FutureAscend began with a vision to bridge the gap between cutting-edge technology and real-world business challenges. Our journey started with a small team of passionate technologists and has grown into a global force in digital innovation.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the couple years, we've helped many of businesses across various industries harness the power of AI, cloud computing, and digital transformation to achieve unprecedented growth and efficiency.
                </p>
                <p className="text-gray-600">
                  Today, we continue to push the boundaries of what's possible, always staying ahead of the curve to deliver solutions that not only meet but exceed our clients' expectations.
                </p>
              </div>
              <div className="relative h-full rounded-lg overflow-hidden">
                <Image
                  src="/FutureAscend-Team.jpg"
                  alt="FutureAscend Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 bg-gray-50  px-5 md:px-32">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-12 w-12 text-[#60A5FA] mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* Global Presence */}
        <section className="relative py-24 bg-gray-900 text-white px-5 md:px-32">
          <AnimatedGradient />
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  z-20">
              <div className=" z-10">
                <h2 className="text-3xl font-bold mb-6">Success Story: HVAC Selling Platform </h2>
                <p className="mb-6">Discover how we helped a German Brand to earn more than €25K in profits.</p>
                <ul className="space-y-2 mb-8">
  <li className="flex items-center">
    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
    99% Uptime: Ensured uninterrupted access to critical information.
  </li>
  <li className="flex items-center">
    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
    70% Faster Load Times: Improved website performance and user retention.
  </li>
  <li className="flex items-center">
    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
    SEO-Friendly Design: Boosted organic search visibility, driving increased traffic.
  </li>
  <li className="flex items-center">
    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
    Enhanced User Engagement: Streamlined navigation and interactive features improved user satisfaction.
  </li>
</ul>
    <Link href="/case-studies/klimanrw-futureascend">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white z-100">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/case-studies/klimanrw-futureascend.png"
                  alt="case-studies-klimanrw-futureascend.png"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        </div>

              <EnhancedContactForm />
              <Footer />
            </main>
          </>
        );
      }
