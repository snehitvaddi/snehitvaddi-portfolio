'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
import Image from 'next/image'
import { projects, categoryConfig, type Project } from '@/data/projects'

// Curated list of best projects
const curatedProjectIds = [
  // Agentic AI (Hot & New)
  'ai-influencer-bot',
  'claude-code-agent',
  'mcp-research-agent',
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
  // Shipped products
  'finetune-resume',
  'resume2portfolio',
  'h1b-wage-finder',
  'hackswipe',
  'whatsapp-r2park',
  // Agentic AI
  'ai-influencer-bot',
  'claude-code-agent',
  'mcp-research-agent',
  // Recent GenAI
  'medhalt',
  'rag-anything',
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

// Category-specific gradient backgrounds
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

function ProjectCard({ project }: { project: Project }) {
  const config = categoryConfig[project.category]
  const gradient = categoryGradients[project.category] || categoryGradients.tools
  const hasRealImage = project.image && !project.image.includes('placehold.co')

  return (
    <motion.div
      variants={cardVariants}
      layout
      whileHover={{ y: -5 }}
      className="group relative backdrop-blur-sm bg-white/80 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image area */}
      <div className={`relative h-44 overflow-hidden ${!hasRealImage ? `bg-gradient-to-br ${gradient}` : 'bg-gray-100 dark:bg-gray-800'}`}>
        {hasRealImage ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
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
          <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50">
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

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 rounded-md border border-gray-100 dark:border-gray-600/50"
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
            Stuff I've Built
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From self-driving cars to medical AI and agentic applications.
            <br />
            <span className="text-gray-500">Here's what I've been building.</span>
          </p>
        </motion.div>

        {/* Filter Tabs - Glass style */}
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
