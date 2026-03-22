'use client'
import { useState } from 'react'

interface ArticleImageProps {
  src: string
  alt: string
  className?: string
  fallbackClassName?: string
}

export default function ArticleImage({ src, alt, className, fallbackClassName }: ArticleImageProps) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className={fallbackClassName ?? 'h-full w-full bg-gradient-to-br from-gray-700 to-gray-800'} />
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
}
