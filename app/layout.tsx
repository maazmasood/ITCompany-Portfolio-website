// app/layout.tsx
import './globals.css'
import { Metadata } from 'next'
import Discount from "@/components/discount"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.futureascend.com'),
  title: {
    template: '%s | FutureAscend',
    default: 'FutureAscend - Driving Business Growth with Scalable Digital Solutions'
  },
  description: 'Transform your business with FutureAscend\'s enterprise-grade digital solutions. From AI and Machine Learning to Web Development, Cybersecurity, and more, we offer innovative services tailored to your needs.',
  keywords: ['FutureAscend', 'AI solutions', 'digital marketing', 'web development', 'scalable solutions', 'enterprise-grade', 'business growth', 'cybersecurity', 'product designing', 'IoT', 'blockchain development'],
  authors: [{ name: 'FutureAscend Team' }],
  openGraph: {
    type: 'website',
    siteName: 'FutureAscend',
    title: 'FutureAscend | Empower Your Business Growth',
    description: 'Accelerate your business success with FutureAscend\'s all-in-one digital solutions for website development, branding, and marketing.',
    images: [{
      url: '/og/preview.png',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FutureAscend | Empower Your Business Growth',
    description: 'Achieve your business goals with FutureAscend\'s expert solutions for website development, branding, SEO, and marketing.',
    images: ['/og/preview.png'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {/*<Discount /> Uncomment this if you need to display the Discount component */}
        {children}
      </body>
    </html>
  )
}
