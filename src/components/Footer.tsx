'use client'

import { motion } from 'framer-motion'
import { Heart, Code2 } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <motion.span
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold gradient-text"
            >
              SV
            </motion.span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              © {currentYear} Snehit Vaddi
            </span>
          </div>

          {/* Built with */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
          >
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and</span>
            <Code2 className="w-4 h-4 text-blue-500" />
            <span>by an AI agent (meta, right?)</span>
          </motion.div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#about"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1wpk_nt_bdIQnPol8ZaCdRIwL4EbyDD7W/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
