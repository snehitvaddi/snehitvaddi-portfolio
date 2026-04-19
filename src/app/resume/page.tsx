import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

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
      {/* Top bar with branded logo */}
      <div className="shrink-0 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="px-4 sm:px-6 py-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full pr-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Back to Snehit Vaddi's portfolio"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700 group-hover:ring-gray-900 dark:group-hover:ring-white transition-all">
              <Image
                src="/profile.png"
                alt="Snehit Vaddi"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Snehit Vaddi
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                ← View full portfolio
              </span>
            </div>
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
