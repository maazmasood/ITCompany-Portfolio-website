import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Comprehensive Solutions for Business Transformation',
  description: 'Explore FutureAscend’s diverse services in AI, machine learning, web development, cybersecurity, product design, IoT, and blockchain. Our customized solutions empower businesses to innovate and grow.',
  openGraph: {
    title: 'Services - Comprehensive Solutions for Business Transformation',
    description: 'Unlock your business potential with FutureAscend’s comprehensive services in AI, web development, cybersecurity, product design, and more. Tailored solutions to drive innovation and success.',
    url: '/services',
  },
  alternates: {
    canonical: '/services',
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
