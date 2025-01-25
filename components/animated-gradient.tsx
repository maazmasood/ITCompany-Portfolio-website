'use client'
import { motion } from "framer-motion"

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -inset-[10px] opacity-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl" />
      </div>
    </div>
  )
}
