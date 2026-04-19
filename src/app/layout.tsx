import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const SITE_URL = 'https://snehitvaddi.com'
const SITE_NAME = 'Snehit Vaddi'
const TITLE = 'Snehit Vaddi | Building Agentic AI for Healthcare'
const DESCRIPTION =
  'GenAI Engineer building production AI and LLM systems for healthcare. Shipped clinical AI products serving 15,000+ providers — agentic AI, RAG pipelines, and HealthTech SaaS. 600+ GitHub stars, multiple AI/ML publications.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Snehit Vaddi — Agentic AI for Healthcare',
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Snehit Vaddi',
    'GenAI Engineer',
    'Healthcare AI Engineer',
    'Healthcare AI',
    'Clinical AI',
    'LLM Engineer',
    'LLM Engineer Healthcare',
    'Agentic AI',
    'Agentic AI Healthcare',
    'Production AI Healthcare',
    'HealthTech SaaS',
    'AI SaaS',
    'Medical AI',
    'Clinical LLM',
    'RAG Engineer',
    'Generative AI Healthcare',
    'AI Product Engineer',
    'ModMed AI Engineer',
    'Ambient AI Scribe',
    'AI Engineer Healthcare SaaS',
    'AI Engineer USA',
    'Machine Learning Engineer',
    'Deep Learning Engineer',
    'Computer Vision Engineer',
    'AI Influencer Healthcare',
  ],
  authors: [{ name: 'Snehit Vaddi', url: SITE_URL }],
  creator: 'Snehit Vaddi',
  publisher: 'Snehit Vaddi',
  category: 'Technology',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    firstName: 'Snehit',
    lastName: 'Vaddi',
    username: 'snehitvaddi',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Snehit Vaddi — GenAI Engineer in Healthcare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@snehitvaddi',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these once you claim them in Google/Bing webmaster tools
    // google: 'your-verification-code',
    // other: { 'msvalidate.01': 'your-bing-code' },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

// JSON-LD structured data — the heavy lifting for Google Knowledge Panel & rich results
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Snehit Vaddi',
  alternateName: ['Snehit', 'Vaddi Snehit'],
  url: SITE_URL,
  image: `${SITE_URL}/profile.png`,
  jobTitle: 'GenAI Engineer',
  description: DESCRIPTION,
  worksFor: {
    '@type': 'Organization',
    name: 'ModMed',
    url: 'https://www.modmed.com',
    industry: 'Healthcare Technology',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of Florida',
      url: 'https://www.ufl.edu',
    },
  ],
  knowsAbout: [
    'Generative AI',
    'Large Language Models',
    'Healthcare AI',
    'Clinical AI',
    'Agentic AI',
    'Retrieval Augmented Generation',
    'LLM Fine-tuning',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Natural Language Processing',
    'AI Product Engineering',
    'HealthTech SaaS',
    'Medical AI',
    'Vision Language Models',
    'Prompt Engineering',
    'Vector Databases',
    'LangChain',
    'LangGraph',
    'Python',
    'TypeScript',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'GenAI Engineer',
    occupationLocation: {
      '@type': 'Country',
      name: 'United States',
    },
    skills: 'Generative AI, LLMs, Healthcare AI, Agentic AI, RAG, Python, Clinical AI',
  },
  sameAs: [
    'https://github.com/snehitvaddi',
    'https://linkedin.com/in/snehitvaddi',
    'https://scholar.google.com/citations?user=2qTPJ8UAAAAJ&hl=en',
  ],
  subjectOf: [
    {
      '@type': 'ScholarlyArticle',
      name: 'Can Small Models Reason About Legal Documents? A Comparative Study',
      datePublished: '2026',
      sameAs: 'https://arxiv.org/abs/2603.25944',
    },
    {
      '@type': 'ScholarlyArticle',
      name: 'Do Hallucination Neurons Generalize? Evidence from Cross-Domain Transfer in LLMs',
      datePublished: '2026',
    },
    {
      '@type': 'ScholarlyArticle',
      name: 'Detecting Escherichia coli Contamination on Plant Leaf Surfaces Using UV-C Fluorescence Imaging and Deep Learning',
      datePublished: '2025',
      isPartOf: 'Plants',
      author: { '@type': 'Person', name: 'Snehit Vaddi' },
    },
    {
      '@type': 'ScholarlyArticle',
      name: 'An Effective Model for Smartphone-Based Pothole Classification and Admin Alerting System',
      datePublished: '2023',
      isPartOf: 'IEEE ICCMST',
    },
    {
      '@type': 'ScholarlyArticle',
      name: 'ECG-Based Early Heart Attack Prediction Using Neural Networks',
      datePublished: '2022',
      isPartOf: 'IEEE',
    },
  ],
  email: 'mailto:vaddisnehit@gmail.com',
  nationality: { '@type': 'Country', name: 'India' },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: DESCRIPTION,
  inLanguage: 'en-US',
  publisher: { '@id': `${SITE_URL}/#person` },
}

const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: TITLE,
  description: DESCRIPTION,
  mainEntity: { '@id': `${SITE_URL}/#person` },
  about: { '@id': `${SITE_URL}/#person` },
  isPartOf: { '@id': `${SITE_URL}/#website` },
  dateModified: new Date().toISOString(),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="noise min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
