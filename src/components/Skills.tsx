'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/data/skills'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

// Category-specific gradient backgrounds
const categoryColors: Record<string, { bg: string; border: string; skillBg: string }> = {
  'AI & Machine Learning': {
    bg: 'from-violet-50/80 to-purple-50/80 dark:from-violet-950/30 dark:to-purple-950/30',
    border: 'border-violet-200/50 dark:border-violet-800/50',
    skillBg: 'bg-violet-100/80 dark:bg-violet-900/30 hover:bg-violet-200 dark:hover:bg-violet-800/50 border-violet-200/50 dark:border-violet-700/50',
  },
  'Languages & Frameworks': {
    bg: 'from-blue-50/80 to-cyan-50/80 dark:from-blue-950/30 dark:to-cyan-950/30',
    border: 'border-blue-200/50 dark:border-blue-800/50',
    skillBg: 'bg-blue-100/80 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/50 border-blue-200/50 dark:border-blue-700/50',
  },
  'Data & Cloud': {
    bg: 'from-emerald-50/80 to-teal-50/80 dark:from-emerald-950/30 dark:to-teal-950/30',
    border: 'border-emerald-200/50 dark:border-emerald-800/50',
    skillBg: 'bg-emerald-100/80 dark:bg-emerald-900/30 hover:bg-emerald-200 dark:hover:bg-emerald-800/50 border-emerald-200/50 dark:border-emerald-700/50',
  },
  'Tools & DevOps': {
    bg: 'from-amber-50/80 to-orange-50/80 dark:from-amber-950/30 dark:to-orange-950/30',
    border: 'border-amber-200/50 dark:border-amber-800/50',
    skillBg: 'bg-amber-100/80 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-800/50 border-amber-200/50 dark:border-amber-700/50',
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-gray-950 dark:via-purple-950/10 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Toolkit
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The technologies I use to turn caffeine into code
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {skillCategories.map((category, categoryIndex) => {
            const colors = categoryColors[category.name] || categoryColors['Tools & DevOps']

            return (
              <motion.div
                key={category.name}
                variants={categoryVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`backdrop-blur-sm bg-gradient-to-br ${colors.bg} rounded-2xl p-6 md:p-8 border ${colors.border} shadow-sm hover:shadow-md transition-shadow`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.span
                    className="text-3xl"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    {category.emoji}
                  </motion.span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Skills */}
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      transition={{
                        delay: categoryIndex * 0.05 + skillIndex * 0.02,
                        type: 'spring',
                        stiffness: 400,
                      }}
                      className={`px-4 py-2 rounded-xl backdrop-blur-sm ${colors.skillBg} border transition-all cursor-default shadow-sm`}
                    >
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
