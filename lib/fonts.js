// lib/fonts.js
import { Russo_One, Share_Tech_Mono } from 'next/font/google'

export const pressStart2P = Russo_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap', // Improves loading performance
})

export const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});