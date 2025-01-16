import type { Metadata } from 'next'
import './globals.css'
import Discount from "@/components/discount"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <meta name="viewport" content="width=device-width, initial-scale=1" />

      <body>
    {/*  <Discount /> */}
      {children}</body>
    </html>
  )
}
