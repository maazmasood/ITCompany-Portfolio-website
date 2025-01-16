"use client";

import { NavBar } from '@/components/navbar'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react'

import { AnimatedGradient } from '@/components/animated-gradient'
import { Footer } from '@/components/footer'
import EnhancedContactForm from '@/components/EnhancedContactForm'


export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-grow">
    

        {/* Contact Form and Info */}
        <EnhancedContactForm />

      <Footer />
      </main>
    </div>
  )
}
