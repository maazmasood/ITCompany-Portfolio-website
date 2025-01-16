'use client'
import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Code, Database, Cloud, Shield, Smartphone,
         Cpu, Server, Globe, Terminal, Box, Layout } from 'lucide-react'

export function TechStack() {
  const technologies = {
    'AI & ML': {
      icon: Brain,
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
      items: [
        { name: 'Node.js', desc: 'JavaScript runtime', icon: Server },
        { name: 'Python', desc: 'General-purpose language', icon: Code },
        { name: 'Java', desc: 'Enterprise applications', icon: Database },
        { name: 'Go', desc: 'High-performance systems', icon: Terminal },
        { name: 'GraphQL', desc: 'API query language', icon: Globe },
        { name: 'REST APIs', desc: 'HTTP-based services', icon: Server }
      ]
    }
  }

  return (
    <Tabs defaultValue="AI & ML" className="w-full max-w-6xl mx-auto py-6 px-4 md:px-8">
      <TabsList className="flex justify-evenly mb-8 bg-background border rounded-lg p-1">
        {Object.entries(technologies).map(([category, { icon: Icon }]) => (
          <TabsTrigger
            key={category}
            value={category}
            className="flex items-center gap-2 md:px-4 py-2 text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md transition-all duration-300"
          >
            <Icon className="w-4 h-4" />
            {category}
          </TabsTrigger>
        ))}
      </TabsList>


      {Object.entries(technologies).map(([category, { items }]) => (
        <TabsContent key={category} value={category}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(({ name, desc, icon: Icon }) => (
              <Card
                key={name}
                className="group hover:shadow-xl hover:scale-105 transition-all duration-300 bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#60A5FA]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
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
  )
}

export default TechStack;
