import Link from 'next/link';
import { countries } from '@/app/data/countries';
import { Metadata } from 'next';
import { AnimatedGradient } from '@/components/animated-gradient';
import { ArrowRight, Globe, BrainCircuit, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { NavBar } from '@/components/navbar';
import { Footer } from '@/components/footer';
export const metadata: Metadata = {
  title: 'AI Software Development by Country | Future Ascend',
  description: 'Explore AI software development opportunities across different countries and regions.',
};

export default function CountriesPage() {
  return (  
    <div className="flex min-h-screen flex-col">
        <NavBar />
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 overflow-hidden px-5 md:px-32">
        <AnimatedGradient />
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              AI Software Development Around the World
            </h1>
            <p className="text-lg leading-8 text-gray-300 mb-8">
              Discover how Future Ascend delivers cutting-edge AI solutions tailored to regional needs, regulations, and business environments across the globe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Get Started
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Stats */}
      <section className="bg-white py-16 px-5 md:px-32">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { metric: "20+", label: "Countries Served" },
              { metric: "75+", label: "International Projects" },
              { metric: "12", label: "Languages Supported" },
              { metric: "24/7", label: "Global Support" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">{item.metric}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Grid Section */}
      <section className="py-16 px-5 md:px-32 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global AI Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore how we're building AI solutions tailored to the unique needs and regulatory environments of different countries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(countries).map(([key, country]) => (
              <Link 
                href={`/${country.slug}`}
                key={key}
                className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="border-b-2 border-blue-500 h-2 w-0 group-hover:w-full transition-all duration-300"></div>
                <div className="p-8">
                  <div className="flex items-start mb-4">
                    <Globe className="h-8 w-8 text-blue-500 mr-3 group-hover:scale-110 transition-transform" />
                    <h2 className="text-2xl font-semibold">{country.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{country.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">{country.marketSize} Market</span>
                    <div className="flex items-center text-blue-500 font-medium group-hover:translate-x-1 transition-transform">
                      Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global AI Development Section */}
      <section className="bg-gray-900 py-20 px-5 md:px-32 relative overflow-hidden">
        <AnimatedGradient />
        <div className="container relative">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose a Region-Specific AI Approach?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 bg-blue-500 rounded-full p-1.5 mr-4">
                  <BrainCircuit className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Regulatory Compliance</h3>
                  <p className="text-gray-300">AI regulations vary significantly by region. Our country-specific approach ensures your solutions comply with local laws.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-blue-500 rounded-full p-1.5 mr-4">
                  <BrainCircuit className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cultural Context</h3>
                  <p className="text-gray-300">We build AI that understands local cultural nuances, languages, and user expectations for each target market.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-blue-500 rounded-full p-1.5 mr-4">
                  <BrainCircuit className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Market Optimization</h3>
                  <p className="text-gray-300">Our solutions leverage region-specific data and insights to maximize your AI investment in each market.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/contact">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Let's Discuss Your Global AI Strategy
                  <ArrowRight className="ml-2 h-4 w-4" />
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