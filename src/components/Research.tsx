'use client'

import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Award, FileText } from 'lucide-react'
import { publications, SCHOLAR_URL, type Publication } from '@/data/research'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function PublicationCard({ pub }: { pub: Publication }) {
  const isUnderReview = pub.status === 'under-review'

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -4 }}
      className="group relative backdrop-blur-sm bg-white/80 dark:bg-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 transition-all hover:shadow-lg hover:border-emerald-300/60 dark:hover:border-emerald-700/60"
    >
      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
          <BookOpen className="w-3 h-3" />
          {pub.venue}
        </span>
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {pub.year}
        </span>
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
            isUnderReview
              ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'
              : 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300'
          }`}
        >
          {isUnderReview ? 'Under Review' : 'Published'}
        </span>
        {pub.firstAuthor && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
            <Award className="w-3 h-3" />
            First Author
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug mb-4">
        {pub.title}
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {pub.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer actions */}
      <div className="flex items-center gap-4 pt-3 border-t border-gray-100 dark:border-gray-700/60">
        {pub.link && (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-200 transition-colors"
          >
            <FileText className="w-4 h-4" />
            View paper
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
        {pub.relatedCount && pub.relatedCount > 0 && (
          <a
            href={SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            + {pub.relatedCount} related variants
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Research() {
  return (
    <section
      id="research"
      className="py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white dark:from-gray-950 dark:via-emerald-950/10 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Research & Publications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Published and under-review work across LLM reasoning, interpretability,
            and applied computer vision.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {publications.map((pub) => (
            <PublicationCard key={pub.id} pub={pub} />
          ))}
        </motion.div>

        {/* Scholar CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 backdrop-blur-sm bg-white/80 dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            View full publication history on Google Scholar
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
