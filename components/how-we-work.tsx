import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Code, Rocket, Repeat } from 'lucide-react'

export function HowWeWork() {
  const steps = [
    {
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals and challenges, then craft a tailored strategy.",
      icon: Lightbulb,
    },
    {
      title: "Design & Development",
      description: "Our expert team designs and develops cutting-edge solutions using the latest technologies.",
      icon: Code,
    },
    {
      title: "Implementation & Launch",
      description: "We ensure smooth deployment and integration of your new solutions into your existing systems.",
      icon: Rocket,
    },
    {
      title: "Continuous Improvement",
      description: "We provide ongoing support and optimization to keep your solutions at peak performance.",
      icon: Repeat,
    },
  ]

  return (
    <section className="py-20 px-5 md:px-32  bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our proven process ensures we deliver high-quality solutions that meet your unique business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#60A5FA] rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
