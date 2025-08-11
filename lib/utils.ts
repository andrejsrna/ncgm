import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function resolveStrapiImageUrl(file?: { url?: string; formats?: Record<string, { url?: string }> }): string {
  if (!file) return ''
  const order = ['large', 'medium', 'small', 'thumbnail']
  for (const key of order) {
    const candidate = file.formats?.[key]?.url
    if (candidate) return prefix(candidate)
  }
  if (file.url) return prefix(file.url)
  return ''

  function prefix(u: string): string {
    if (u.startsWith('http')) return u
    const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || ''
    return `${base}${u}`
  }
}
