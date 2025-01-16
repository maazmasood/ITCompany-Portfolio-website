import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"

export function BlogPreview() {
  const blogPosts = [
    {
      title: "The Future of AI in Enterprise Solutions",
      excerpt: "Explore how artificial intelligence is reshaping the business landscape and driving innovation.",
      date: "May 15, 2023",
      author: "Dr. Sarah Chen",
      link: "#"
    },
    {
      title: "Securing the Cloud: Best Practices for Enterprises",
      excerpt: "Learn about the latest strategies to ensure your cloud infrastructure remains secure and compliant.",
      date: "June 2, 2023",
      author: "Emily Tanaka",
      link: "#"
    },
    {
      title: "Blockchain Beyond Cryptocurrency: Enterprise Applications",
      excerpt: "Discover how blockchain technology is being applied across various industries to solve complex problems.",
      date: "June 20, 2023",
      author: "David Okonkwo",
      link: "#"
    }
  ]

  return (
    <section className="py-20 px-5 md:px-32 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay up-to-date with the latest trends and insights in technology and digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-500 mb-4">
                  {post.date} | By {post.author}
                </div>
                <Link href={post.link}>
                  <Button variant="ghost" className="group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}

