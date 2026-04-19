import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume | Snehit Vaddi',
  description: 'Resume of Snehit Vaddi — GenAI Engineer. 4+ years building AI, LLMs, and Computer Vision products.',
  openGraph: {
    title: 'Snehit Vaddi — Resume',
    description: 'GenAI Engineer. 4+ years building AI products.',
    type: 'website',
  },
  robots: 'index, follow',
}

const RESUME_PATH = '/Snehit-Vaddi-Resume.pdf'

export default function ResumePage() {
  return (
    <main className="h-screen flex flex-col bg-gray-100 dark:bg-gray-950">
      {/* Top bar */}
      <div className="shrink-0 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            View full portfolio
          </Link>
        </div>
      </div>

      {/* Full-height PDF viewer */}
      <div className="flex-1 w-full">
        <object
          data={`${RESUME_PATH}#view=FitH&toolbar=1&navpanes=0`}
          type="application/pdf"
          className="w-full h-full"
          aria-label="Snehit Vaddi Resume"
        >
          <div className="p-10 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your browser can&apos;t display the PDF inline.
            </p>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg"
            >
              Open Resume
            </a>
          </div>
        </object>
      </div>
    </main>
  )
}
