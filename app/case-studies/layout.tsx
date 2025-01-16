import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies - Client Success Stories',
  description: 'Explore how FutureAscend has helped businesses transform and grow through innovative digital solutions. Read our detailed case studies and success stories.',
  openGraph: {
    title: 'Case Studies - Client Success Stories',
    description: 'Discover real-world examples of digital transformation and success stories from FutureAscend\'s clients.',
    url: '/case-studies',
  },
  alternates: {
    canonical: '/case-studies',
  }
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
