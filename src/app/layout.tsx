import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Snehit Vaddi | GenAI Engineer & Data Wizard',
  description: 'Hey! I build AI stuff that actually works. GenAI, LLMs, Computer Vision, Data Engineering - basically if it involves data and models, I\'m your guy. 600+ GitHub stars and counting.',
  keywords: ['Snehit Vaddi', 'GenAI', 'Machine Learning', 'LLM', 'Data Engineer', 'AI Engineer', 'Deep Learning', 'Computer Vision'],
  authors: [{ name: 'Snehit Vaddi' }],
  openGraph: {
    title: 'Snehit Vaddi | GenAI Engineer & Data Wizard',
    description: 'Building AI that doesn\'t just look cool in demos. Real solutions, real impact.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snehit Vaddi | GenAI Engineer',
    description: 'Building AI that doesn\'t just look cool in demos.',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="noise min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
