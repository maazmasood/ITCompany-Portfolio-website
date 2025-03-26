import { getCountryBySlug, getAllCountrySlugs } from '@/app/data/countries';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { AnimatedGradient } from '@/components/animated-gradient';
import { NavBar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ArrowRight, Globe, BrainCircuit, Check, Shield, ChevronRight, Landmark, BarChart3, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface CountryPageProps {
  params: {
    country: string;
  };
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const country = getCountryBySlug(params.country);
  if (!country) return { title: 'Country Not Found' };
  
  return {
    title: `AI Software Development in ${country.name} | Future Ascend`,
    description: country.description,
  };
}

export default function CountryPage({ params }: CountryPageProps) {
  const country = getCountryBySlug(params.country);
  
  if (!country) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 overflow-hidden px-5 md:px-32">
        <AnimatedGradient />
        <div className="container relative flex flex-col md:flex-row items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              AI Software Development in {country.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {country.description}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/contact">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" className="text-gray-300 hover:text-[#2563EB]">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="pt-5 max-w-2xl hidden lg:flex md:mt-0 ml-auto justify-center items-center">
            <div className="w-80 h-80 rounded-full bg-blue-500/10 flex items-center justify-center backdrop-blur-md border border-blue-500/20">
              <Globe className="h-32 w-32 text-blue-400" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Market Stats Section */}
      <section className="py-16 px-5 md:px-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <BarChart3 className="h-6 w-6 text-blue-500" />
                </div>
                <h2 className="text-2xl font-semibold">Market Overview</h2>
              </div>
              <p className="text-4xl font-bold text-blue-500 mb-2">{country.marketSize}</p>
              <p className="text-gray-600">Estimated AI Market Size</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Landmark className="h-6 w-6 text-blue-500" />
                </div>
                <h2 className="text-2xl font-semibold">Regulatory Environment</h2>
              </div>
              <p className="text-gray-600 mb-4">Key regulations that impact AI development in {country.name}</p>
              <div className="h-1 w-full bg-gray-200 mb-2"></div>
              <p className="text-sm text-gray-500">Updated quarterly</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-blue-500" />
                </div>
                <h2 className="text-2xl font-semibold">Strategic Benefits</h2>
              </div>
              <p className="text-gray-600 mb-4">Leveraging {country.name}'s unique AI ecosystem for your business</p>
              <div className="h-1 w-full bg-gray-200 mb-2"></div>
              <p className="text-sm text-gray-500">Competitive advantages</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-16 px-5 md:px-32 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits of AI Development in {country.name}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leverage these unique advantages to maximize your AI investment in {country.name}.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {country.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="bg-blue-500 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit}</h3>
                  <p className="text-gray-600">Our team helps you fully leverage this advantage through tailored AI solutions.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Compliance & Regulations Section */}
      <section className="py-16 px-5 md:px-32 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Navigating {country.name}'s AI Regulations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expertise ensures your AI solutions remain compliant with all local regulations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Shield className="h-5 w-5 text-blue-500 mr-2" />
                Compliance Framework
              </h3>
              
              <div className="space-y-4">
                {country.regulations.map((regulation, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-colors">
                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">{regulation}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Our team ensures full compliance with all aspects of this regulation.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-blue-700"></div>
              </div>
              
              <div className="relative">
                <h3 className="text-xl font-semibold mb-6">Our Compliance Advantage</h3>
                <p className="mb-6">
                  Future Ascend maintains dedicated legal experts specializing in {country.name}'s regulatory landscape, 
                  ensuring your AI solutions are built with compliance in mind from day one.
                </p>
                
                <div className="space-y-3">
                  {['Regulatory monitoring', 'Compliance audits', 'Documentation support', 'Legal guidance'].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-blue-400 mr-3"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Market Opportunities Section */}
      <section className="py-16 px-5 md:px-32 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Opportunities in {country.name}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-growth sectors where AI is driving innovation and transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {country.opportunities.map((opportunity, index) => (
              <div key={index} className="bg-white rounded-lg group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="border-t-4 border-blue-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{opportunity}</h3>
                  <p className="text-gray-600 mb-6">
                    Our specialized AI solutions are transforming this sector, creating new opportunities for growth and innovation.
                  </p> <Link href="/contact" >
                  <div className="flex items-center text-blue-500 font-medium group-hover:translate-x-1 transition-transform">
                 
                    Let's build Yours <ArrowRight className="ml-2 h-4 w-4 " />
                   
                  </div> </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-900 py-20 px-5 md:px-32 relative overflow-hidden">
        <AnimatedGradient />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build AI Solutions in {country.name}?</h2>
            <p className="text-gray-300 mb-8">
              Partner with Future Ascend to navigate the complexities of {country.name}'s AI landscape and build solutions that drive meaningful business results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" className="text-grey-900 border-white hover:bg-white/10">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({
    country: slug,
  }));
} 