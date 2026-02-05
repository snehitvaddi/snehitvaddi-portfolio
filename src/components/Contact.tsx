'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, ArrowUpRight, Coffee, Zap } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/snehitvaddi',
    icon: Github,
    color: 'hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900',
    followers: '600+ stars',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/snehitvaddi',
    icon: Linkedin,
    color: 'hover:bg-blue-600 hover:text-white',
    followers: 'Connect',
  },
  {
    name: 'Email',
    url: 'mailto:vaddisnehit@gmail.com',
    icon: Mail,
    color: 'hover:bg-red-500 hover:text-white',
    followers: 'Say Hi!',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-white dark:from-gray-950 dark:via-amber-950/10 dark:to-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Fun heading */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium mb-6"
          >
            <Coffee className="w-4 h-4" />
            Let's grab a virtual coffee
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Got an interesting project?
            <br />
            <span className="gradient-text">Let's talk!</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            I'm always excited to discuss AI, data engineering, or just tech in general.
            Whether you have a project idea, job opportunity, or just want to say hi -
            my inbox is open!
          </p>

          {/* Big CTA Button */}
          <motion.a
            href="mailto:vaddisnehit@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg shadow-gray-900/20 mb-12"
          >
            <Zap className="w-5 h-5" />
            Drop me an email
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 transition-all ${link.color}`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{link.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {link.followers}
                  </span>
                </motion.a>
              )
            })}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
