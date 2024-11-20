// lib/fonts.js
import { Russo_One } from 'next/font/google'

export const pressStart2P = Russo_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap', // Improves loading performance
})