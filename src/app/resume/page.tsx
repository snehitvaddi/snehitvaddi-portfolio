import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Download, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume | Snehit Vaddi',
  description: 'Resume of Snehit Vaddi — GenAI Engineer & Data Wizard. 4+ years building AI, LLMs, and Computer Vision products.',
  openGraph: {
    title: 'Snehit Vaddi — Resume',
    description: 'GenAI Engineer & Data Wizard. 4+ years building AI products.',
    type: 'website',
  },
  robots: 'index, follow',
}

const RESUME_PATH = '/Snehit-Vaddi-Resume.pdf'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Top bar */}
      <div className="sticky top-0 z-10 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Open in new tab</span>
            </a>
            <a
              href={RESUME_PATH}
              download="Snehit-Vaddi-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Snehit Vaddi
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          GenAI Engineer & Data Wizard · Resume
        </p>
      </div>

      {/* PDF viewer */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 bg-white">
          <object
            data={`${RESUME_PATH}#view=FitH`}
            type="application/pdf"
            className="w-full h-[85vh] min-h-[600px]"
            aria-label="Snehit Vaddi Resume"
          >
            <div className="p-10 text-center">
              <p className="text-gray-700 mb-4">
                Your browser can&apos;t display the PDF inline.
              </p>
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </object>
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Prefer plain text?{' '}
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700 dark:hover:text-gray-200"
          >
            Open the PDF directly
          </a>
          .
        </p>
      </div>
    </main>
  )
}
