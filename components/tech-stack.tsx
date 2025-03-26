'use client'
import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Code, Database, Cloud, Shield, Smartphone,
         Cpu, Server, Globe, Terminal, Box, Layout, Layers, BarChart2, Hash, Lock, Network, Wallet } from 'lucide-react'

export function TechStack() {
  const technologies = {
    'AI & ML': {
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and machine learning technologies to power intelligent applications.',
      items: [
        { name: 'TensorFlow', desc: 'Open-source ML framework', icon: Cpu },
        { name: 'PyTorch', desc: 'Deep learning platform', icon: Brain },
        { name: 'OpenAI', desc: 'AI research & deployment', icon: Globe },
        { name: 'Computer Vision', desc: 'Image & video analysis', icon: Terminal },
        { name: 'NLP', desc: 'Natural language processing', icon: Box },
        { name: 'Deep Learning', desc: 'Neural network architectures', icon: Layout }
      ]
    },
    'Frontend': {
      icon: Layout,
      description: 'Modern frontend technologies to create responsive, interactive, and visually stunning user interfaces.',
      items: [
        { name: 'React', desc: 'UI component library', icon: Code },
        { name: 'Next.js', desc: 'React framework', icon: Layout },
        { name: 'Vue', desc: 'Progressive framework', icon: Globe },
        { name: 'Angular', desc: 'Web application platform', icon: Shield },
        { name: 'TypeScript', desc: 'Typed JavaScript', icon: Code },
        { name: 'Tailwind CSS', desc: 'Utility-first CSS', icon: Layout }
      ]
    },
    'Backend': {
      icon: Server,
      description: 'Robust backend technologies for scalable, secure, and high-performance server-side applications.',
      items: [
        { name: 'Node.js', desc: 'JavaScript runtime', icon: Server },
        { name: 'Python', desc: 'General-purpose language', icon: Code },
        { name: 'Java', desc: 'Enterprise applications', icon: Database },
        { name: 'Go', desc: 'High-performance systems', icon: Terminal },
        { name: 'GraphQL', desc: 'API query language', icon: Globe },
        { name: 'REST APIs', desc: 'HTTP-based services', icon: Server }
      ]
    },
    'Blockchain': {
      icon: Layers,
      description: 'Innovative blockchain technologies for decentralized applications with security, transparency, and trust.',
      items: [
        { name: 'Ethereum', desc: 'Smart contract platform', icon: Wallet },
        { name: 'Solidity', desc: 'Contract-oriented language', icon: Code },
        { name: 'Web3.js', desc: 'Ethereum JavaScript API', icon: Globe },
        { name: 'Smart Contracts', desc: 'Self-executing contracts', icon: Lock },
        { name: 'IPFS', desc: 'Distributed file system', icon: Network },
        { name: 'Chainlink', desc: 'Decentralized oracles', icon: Hash }
      ]
    }
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-blue-500 mr-4"></div>
              <span className="text-blue-400 uppercase tracking-wider font-medium text-sm">
                Technology Arsenal
              </span>
              <div className="h-px w-12 bg-blue-500 ml-4"></div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Cutting-Edge <span className="text-blue-400">Technologies</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We leverage the latest technologies to build scalable, secure, and efficient solutions tailored to your specific needs.
          </p>
        </div>

        <Tabs defaultValue="AI & ML" className="w-full mx-auto">
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-30 rounded-xl"></div>
            <TabsList className="relative flex justify-evenly mb-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-1.5 overflow-x-auto">
              {Object.entries(technologies).map(([category, { icon: Icon }]) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(technologies).map(([category, { description, items }]) => (
            <TabsContent key={category} value={category} className="transition-all duration-500">
              <div className="mb-8">
                <p className="text-gray-300 text-center max-w-3xl mx-auto">
                  {description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(({ name, desc, icon: Icon }) => (
                  <Card
                    key={name}
                    className="group border-gray-700 hover:border-blue-500/50 bg-gray-800/50 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 border border-blue-500/30 transition-colors">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-white group-hover:text-blue-300 transition-colors">
                            {name}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">
                            {desc}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default TechStack;
