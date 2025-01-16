import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions - FutureAscend',
  description: 'Read the Terms and Conditions governing the use of FutureAscend’s services and website. Understand your rights, responsibilities, and legal agreements.',
  openGraph: {
    title: 'Terms and Conditions - FutureAscend',
    description: 'Review FutureAscend’s Terms and Conditions to understand the legal terms governing our services and website usage. Stay informed about your rights and obligations.',
    url: '/terms-and-conditions',
  },
  alternates: {
    canonical: '/terms-and-conditions',
  }
}

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
