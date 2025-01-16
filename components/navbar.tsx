'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain } from 'lucide-react'
import Image from 'next/image';


export function NavBar() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrollY > 0 ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-gray-900"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
    <Image
      src="/FutureAscend-logo.svg"
      alt="Logo"
      width={250} // Default width for larger screens
      height={40} // Default height for larger screens
      className="w-48 h-auto md:w-64" // For small screens (w-32), medium screens and above (w-64)
    />
  </Link>


        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0">
          {['About', 'Services', 'Solutions', 'Case Studies'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}

        <div className="hidden md:block">
          <Link href="/contact">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white shadow-md">
            Get in Touch
          </Button>
          </Link>
        </div>
        </nav>

        {/* Desktop CTA */}

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {['Services', 'Solutions', 'Case Studies', 'About'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {item}
              </Link>
            ))}
            <Link href="/contact">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white w-100"
              onClick={() => setIsMobileMenuOpen(false)} // Optional: Close menu on button click
            >
              Get in Touch
            </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
