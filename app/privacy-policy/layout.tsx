import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - FutureAscend',
  description: 'Learn about how FutureAscend collects, uses, and protects your personal data. Our Privacy Policy outlines our commitment to safeguarding your information.',
  openGraph: {
    title: 'Privacy Policy - FutureAscend',
    description: 'Read FutureAscend’s Privacy Policy to understand how we collect, use, and protect your personal information. Learn about your rights and data protection measures.',
    url: '/privacy-policy',
  },
  alternates: {
    canonical: '/privacy-policy',
  }
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
