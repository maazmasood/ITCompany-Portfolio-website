import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Rocket, BarChart, Globe, Clock } from 'lucide-react'

export function KeyFeatures() {
  const features = [
    {
      title: "Lightning-Fast Performance",
      description: "Our solutions are optimized for speed, ensuring your applications run smoothly and efficiently.",
      icon: Zap,
    },
    {
      title: "Bank-Grade Security",
      description: "We implement the highest level of security measures to protect your data and systems.",
      icon: Shield,
    },
    {
      title: "Scalable Solutions",
      description: "Our architectures are designed to grow with your business, handling increased loads effortlessly.",
      icon: Rocket,
    },
    {
      title: "Advanced Analytics",
      description: "Gain deep insights into your operations with our powerful analytics and reporting tools.",
      icon: BarChart,
    },
    {
      title: "Global Reach",
      description: "Deploy your solutions worldwide with our distributed infrastructure and localization support.",
      icon: Globe,
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is always available to ensure your systems run smoothly around the clock.",
      icon: Clock,
    },
  ]

  return (
    <section className="py-20 px-5 md:px-32  bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features of Our Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features that set our solutions apart and drive tangible results for your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-blue-500 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

