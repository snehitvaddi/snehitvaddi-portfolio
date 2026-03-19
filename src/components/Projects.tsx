'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Star, Rocket } from 'lucide-react'
import Image from 'next/image'
import { projects, categoryConfig, type Project } from '@/data/projects'

// ============================================
// Featured products (top 4 shipped products)
// ============================================
const featuredProductIds = ['autoapply', 'finetune-resume', 'resume2portfolio', 'reachpilot']
const featuredProducts = projects.filter(p => featuredProductIds.includes(p.id))

// Featured product metadata (stats, accent colors)
const featuredMeta: Record<string, { stat: string; accent: string; border: string; bg: string; glow: string }> = {
  'autoapply': {
    stat: '8+ ATS platforms',
    accent: 'text-violet-600 dark:text-violet-400',
    border: 'border-l-violet-500',
    bg: 'from-violet-500/10 via-purple-500/5 to-fuchsia-500/10 dark:from-violet-500/20 dark:via-purple-500/10 dark:to-fuchsia-500/20',
    glow: 'group-hover:shadow-violet-500/20',
  },
  'finetune-resume': {
    stat: 'Used by thousands',
    accent: 'text-blue-600 dark:text-blue-400',
    border: 'border-l-blue-500',
    bg: 'from-blue-500/10 via-indigo-500/5 to-cyan-500/10 dark:from-blue-500/20 dark:via-indigo-500/10 dark:to-cyan-500/20',
    glow: 'group-hover:shadow-blue-500/20',
  },
  'resume2portfolio': {
    stat: '1,200+ portfolios',
    accent: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-l-emerald-500',
    bg: 'from-emerald-500/10 via-green-500/5 to-teal-500/10 dark:from-emerald-500/20 dark:via-green-500/10 dark:to-teal-500/20',
    glow: 'group-hover:shadow-emerald-500/20',
  },
  'reachpilot': {
    stat: 'GPT-4o Vision powered',
    accent: 'text-orange-600 dark:text-orange-400',
    border: 'border-l-orange-500',
    bg: 'from-orange-500/10 via-amber-500/5 to-yellow-500/10 dark:from-orange-500/20 dark:via-amber-500/10 dark:to-yellow-500/20',
    glow: 'group-hover:shadow-orange-500/20',
  },
}

// Curated list of best projects
const curatedProjectIds = [
  // Agentic AI (Hot & New)
  'autoapply',
  'reachpilot',
  'ai-influencer-bot',
  // GenAI & LLMs
  'interview-gpt',
  'rag-anything',
  'medhalt',
  // Deep Learning (High Stars)
  'self-driving-car',
  // Computer Vision (High Stars)
  'face-mask-detection',
  'yolov3-fire-detection',
  'intruder-detection',
  'yolov3-object-tracking',
  // Medical AI
  'skin-disease-detection',
  'citrus-ecoli',
  'corona-prediction',
  // Data Engineering
  'unitrends',
  'daily-job-analysis',
  // Web & Mobile (Recent)
  'finetune-resume',
  'resume2portfolio',
  'eat-or-nahh',
  'hackswipe',
  'h1b-wage-finder',
  // Tools
  'colab-keep-alive',
  'sudoku-solver',
  'license-plate',
]

const curatedProjects = projects.filter(p => curatedProjectIds.includes(p.id))

const categories = ['recent', 'all', ...Object.keys(categoryConfig)] as const
type Category = typeof categories[number]

// Recent projects - shipped products and recent work
const recentProjectIds = [
  'autoapply', 'finetune-resume', 'resume2portfolio', 'reachpilot',
  'h1b-wage-finder', 'hackswipe', 'whatsapp-r2park',
  'ai-influencer-bot', 'medhalt', 'rag-anything',
]
const recentProjects = projects.filter(p => recentProjectIds.includes(p.id))

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Category-specific gradient backgrounds (for placeholder images)
const categoryGradients: Record<string, string> = {
  agentic: 'from-violet-100 via-purple-50 to-fuchsia-100 dark:from-violet-950 dark:via-purple-900 dark:to-fuchsia-950',
  genai: 'from-blue-100 via-indigo-50 to-cyan-100 dark:from-blue-950 dark:via-indigo-900 dark:to-cyan-950',
  deeplearning: 'from-orange-100 via-amber-50 to-red-100 dark:from-orange-950 dark:via-amber-900 dark:to-red-950',
  computervision: 'from-emerald-100 via-green-50 to-teal-100 dark:from-emerald-950 dark:via-green-900 dark:to-teal-950',
  data: 'from-yellow-100 via-amber-50 to-orange-100 dark:from-yellow-950 dark:via-amber-900 dark:to-orange-950',
  web: 'from-indigo-100 via-blue-50 to-purple-100 dark:from-indigo-950 dark:via-blue-900 dark:to-purple-950',
  mobile: 'from-pink-100 via-rose-50 to-red-100 dark:from-pink-950 dark:via-rose-900 dark:to-red-950',
  research: 'from-emerald-100 via-teal-50 to-green-100 dark:from-emerald-950 dark:via-teal-900 dark:to-green-950',
  tools: 'from-slate-100 via-gray-50 to-zinc-100 dark:from-slate-900 dark:via-gray-800 dark:to-zinc-900',
}

// Category-specific badge colors
const categoryBadgeColors: Record<string, string> = {
  agentic: 'bg-violet-100 text-violet-700 border-violet-200/50 dark:bg-violet-900/50 dark:text-violet-300 dark:border-violet-700/50',
  genai: 'bg-blue-100 text-blue-700 border-blue-200/50 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700/50',
  deeplearning: 'bg-orange-100 text-orange-700 border-orange-200/50 dark:bg-orange-900/50 dark:text-orange-300 dark:border-orange-700/50',
  computervision: 'bg-emerald-100 text-emerald-700 border-emerald-200/50 dark:bg-emerald-900/50 dark:text-emerald-300 dark:border-emerald-700/50',
  data: 'bg-amber-100 text-amber-700 border-amber-200/50 dark:bg-amber-900/50 dark:text-amber-300 dark:border-amber-700/50',
  web: 'bg-indigo-100 text-indigo-700 border-indigo-200/50 dark:bg-indigo-900/50 dark:text-indigo-300 dark:border-indigo-700/50',
  mobile: 'bg-pink-100 text-pink-700 border-pink-200/50 dark:bg-pink-900/50 dark:text-pink-300 dark:border-pink-700/50',
  research: 'bg-teal-100 text-teal-700 border-teal-200/50 dark:bg-teal-900/50 dark:text-teal-300 dark:border-teal-700/50',
  tools: 'bg-slate-100 text-slate-700 border-slate-200/50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700/50',
}

// Category-specific tag colors
const categoryTagColors: Record<string, string> = {
  agentic: 'bg-violet-50 text-violet-600 border-violet-100 dark:bg-violet-900/30 dark:text-violet-400 dark:border-violet-800/50',
  genai: 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/50',
  deeplearning: 'bg-orange-50 text-orange-600 border-orange-100 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800/50',
  computervision: 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800/50',
  data: 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800/50',
  web: 'bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-800/50',
  mobile: 'bg-pink-50 text-pink-600 border-pink-100 dark:bg-pink-900/30 dark:text-pink-400 dark:border-pink-800/50',
  research: 'bg-teal-50 text-teal-600 border-teal-100 dark:bg-teal-900/30 dark:text-teal-400 dark:border-teal-800/50',
  tools: 'bg-slate-50 text-slate-600 border-slate-100 dark:bg-slate-800/50 dark:text-slate-400 dark:border-slate-700/50',
}

// Category-specific left border colors
const categoryBorderColors: Record<string, string> = {
  agentic: 'border-l-violet-500',
  genai: 'border-l-blue-500',
  deeplearning: 'border-l-orange-500',
  computervision: 'border-l-emerald-500',
  data: 'border-l-amber-500',
  web: 'border-l-indigo-500',
  mobile: 'border-l-pink-500',
  research: 'border-l-teal-500',
  tools: 'border-l-slate-500',
}

// ============================================
// Featured Product Card (large, vibrant)
// ============================================
function FeaturedProductCard({ project }: { project: Project }) {
  const meta = featuredMeta[project.id]
  const hasRealImage = project.image && !project.image.includes('placehold.co')
  const gradient = categoryGradients[project.category] || categoryGradients.tools

  if (!meta) return null

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`group relative rounded-2xl overflow-hidden border-l-4 ${meta.border} border border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-br ${meta.bg} backdrop-blur-sm shadow-lg hover:shadow-2xl ${meta.glow} transition-all duration-300`}
    >
      {/* Image area - larger */}
      <div className={`relative h-56 overflow-hidden ${!hasRealImage ? `bg-gradient-to-br ${gradient}` : 'bg-gray-100 dark:bg-gray-800'}`}>
        {hasRealImage ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <span className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center leading-tight drop-shadow-sm">
              {project.title}
            </span>
          </div>
        )}

        {/* LIVE badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-bold border border-gray-200/50 dark:border-gray-700/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-green-700 dark:text-green-400">SHIPPED</span>
          </span>
        </div>

        {/* Stars badge */}
        {project.stars > 0 && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              {project.stars}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white rounded-xl text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white rounded-xl text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content - richer */}
      <div className="p-6">
        {/* Category & Stat */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${categoryBadgeColors[project.category] || categoryBadgeColors.tools}`}>
            {categoryConfig[project.category].label}
          </span>
          <span className={`text-xs font-semibold ${meta.accent}`}>{meta.stat}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>

        {/* Description - full (3 lines) */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags - all shown */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 text-xs font-medium rounded-md border ${categoryTagColors[project.category] || categoryTagColors.tools}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ============================================
// Regular Project Card (colorful upgrade)
// ============================================
function ProjectCard({ project }: { project: Project }) {
  const config = categoryConfig[project.category]
  const gradient = categoryGradients[project.category] || categoryGradients.tools
  const hasRealImage = project.image && !project.image.includes('placehold.co')
  const borderColor = categoryBorderColors[project.category] || categoryBorderColors.tools
  const badgeColor = categoryBadgeColors[project.category] || categoryBadgeColors.tools
  const tagColor = categoryTagColors[project.category] || categoryTagColors.tools

  return (
    <motion.div
      variants={cardVariants}
      layout
      whileHover={{ y: -5 }}
      className={`group relative backdrop-blur-sm bg-white/80 dark:bg-gray-800/50 rounded-2xl overflow-hidden border-l-4 ${borderColor} border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300`}
    >
      {/* Image area */}
      <div className={`relative h-44 overflow-hidden ${!hasRealImage ? `bg-gradient-to-br ${gradient}` : 'bg-gray-100 dark:bg-gray-800'}`}>
        {hasRealImage ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100 text-center leading-tight drop-shadow-sm">
              {project.title}
            </span>
          </div>
        )}

        {/* Stars badge */}
        {project.stars > 0 && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              {project.stars}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white rounded-xl text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white rounded-xl text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category & Date */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${badgeColor}`}>
            {config.label}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{project.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags - colored */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 text-xs font-medium rounded-md border ${tagColor}`}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium text-gray-400 dark:text-gray-500">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ============================================
// Main Projects Section
// ============================================
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('recent')

  const filteredProjects =
    activeCategory === 'recent'
      ? recentProjects
      : activeCategory === 'all'
      ? curatedProjects
      : curatedProjects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/10 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Stuff I&apos;ve Built
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From autonomous agents to SaaS products used by thousands.
            <br />
            <span className="text-gray-500">Here&apos;s what I&apos;ve been shipping.</span>
          </p>
        </motion.div>

        {/* ============================================ */}
        {/* Featured Products - Large 2x2 Grid */}
        {/* ============================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-5 h-5 text-violet-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Shipped Products</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-200 to-transparent dark:from-violet-800" />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {featuredProducts.map((project) => (
              <FeaturedProductCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>

        {/* ============================================ */}
        {/* All Projects - Filterable Grid */}
        {/* ============================================ */}

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category
            const label =
              category === 'recent'
                ? '🔥 Recent'
                : category === 'all'
                ? 'All Projects'
                : categoryConfig[category as keyof typeof categoryConfig].label

            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'backdrop-blur-sm bg-white/80 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50'
                }`}
              >
                {label}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/snehitvaddi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 backdrop-blur-sm bg-white/80 dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            See all 50+ projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
