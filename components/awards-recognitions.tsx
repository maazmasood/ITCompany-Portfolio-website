import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AwardsRecognitions() {
  const awards = [
    {
      title: "Best AI Solution Provider 2023",
      organization: "Tech Innovators Awards",
      image: "/placeholder.svg"
    },
    {
      title: "Top Cloud Consulting Firm",
      organization: "CloudExcellence Rankings",
      image: "/placeholder.svg"
    },
    {
      title: "Cybersecurity Leader of the Year",
      organization: "Global Security Alliance",
      image: "/placeholder.svg"
    },
    {
      title: "Innovation in Blockchain Award",
      organization: "Distributed Ledger Summit",
      image: "/placeholder.svg"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognitions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence and innovation has been recognized by leading industry organizations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600 text-sm">{award.organization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

