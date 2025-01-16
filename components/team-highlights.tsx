import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function TeamHighlights() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      bio: "With over 15 years of experience in AI and machine learning, Dr. Chen leads our AI initiatives.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Cloud Solutions",
      bio: "Michael brings 20+ years of experience in cloud architecture and digital transformation.",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Tanaka",
      role: "Director of Cybersecurity",
      bio: "Emily is a renowned expert in cybersecurity, ensuring our clients' data remains protected.",
      image: "/placeholder.svg"
    },
    {
      name: "David Okonkwo",
      role: "Lead Blockchain Developer",
      bio: "David is at the forefront of blockchain technology, driving innovation in decentralized solutions.",
      image: "/placeholder.svg"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse team of industry leaders brings a wealth of experience and innovation to every project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

