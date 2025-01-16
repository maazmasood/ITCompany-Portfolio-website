import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with FutureAscend',
  description: 'Reach out to FutureAscend to discuss how our innovative solutions can transform your business. Contact us for inquiries, consultations, or support.',
  openGraph: {
    title: 'Contact Us - Get in Touch with FutureAscend',
    description: 'Contact FutureAscend for consultations, project inquiries, or support. Our team is here to help you accelerate your digital transformation journey.',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
