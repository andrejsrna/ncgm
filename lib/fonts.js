// lib/fonts.js
import { Inter, Russo_One, Share_Tech_Mono } from 'next/font/google'

export const pressStart2P = Russo_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap', // Improves loading performance
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
