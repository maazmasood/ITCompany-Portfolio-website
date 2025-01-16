// app/about/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Transforming Businesses with Digital Innovation',
  description: 'Learn about FutureAscend\'s journey from a small team of technologists to a global leader in digital innovation. Explore our values, success stories, and dedication to excellence.',
  openGraph: {
    title: 'About Us - Transforming Businesses with Digital Innovation',
    description: 'Discover how FutureAscend bridges cutting-edge technology with real-world business challenges. Learn about our story, values, and impactful success stories.',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
