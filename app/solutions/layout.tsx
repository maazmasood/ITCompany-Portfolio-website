import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions - Innovative Approaches to Business Challenges',
  description: 'Discover FutureAscend’s innovative solutions designed to tackle business challenges in automation, blockchain, cybersecurity, product innovation, and digital transformation.',
  openGraph: {
    title: 'Solutions - Innovative Approaches to Business Challenges',
    description: 'Explore how FutureAscend’s solutions in automation, blockchain, cybersecurity, product innovation, and marketing can drive your business forward. Tailored strategies for growth and success.',
    url: '/solutions',
  },
  alternates: {
    canonical: '/solutions',
  }
}

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
