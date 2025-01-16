import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({ label, className, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-200">{label}</label>
      <Input className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400" {...props} />
    </div>
  )
}

export default AnimatedInput
