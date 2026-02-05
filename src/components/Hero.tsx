'use client'

import { motion, type Variants } from 'framer-motion'
import { Mail, ArrowDown, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Shipped products
const shippedProducts = [
  { name: 'FineTune Resume', url: 'https://finetuneresume.app/' },
  { name: 'Resume2Portfolio', url: 'https://www.resume2portfolio.com/' },
  { name: 'H1B Wage Compass', url: 'https://h1b-wage-compass.streamlit.app/' },
  { name: 'HackSwipe', url: 'https://hackswipe.vercel.app/' },
  { name: 'WhatsApp R2Park', url: 'https://github.com/snehitvaddi/whatsapp-r2park' },
]

// Floating tech logos configuration - spread across entire section
const floatingLogos = [
  // Left side
  { name: 'Python', x: '5%', y: '15%', delay: 0, size: 45, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png' },
  { name: 'AWS', x: '8%', y: '55%', delay: 1, size: 50, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/330px-Amazon_Web_Services_Logo.svg.png' },
  { name: 'Snowflake', x: '4%', y: '85%', delay: 2, size: 42, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Snowflake_Logo.svg/2560px-Snowflake_Logo.svg.png' },
  // Left-center
  { name: 'Databricks', x: '18%', y: '35%', delay: 0.5, size: 44, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Databricks-logo.svg/3840px-Databricks-logo.svg.png' },
  { name: 'PyTorch', x: '22%', y: '75%', delay: 1.5, size: 40, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/992px-PyTorch_logo_icon.svg.png' },
  // Center-right
  { name: 'Docker', x: '72%', y: '20%', delay: 2.5, size: 44, logo: 'https://www.svgrepo.com/show/331370/docker.svg' },
  { name: 'OpenCV', x: '78%', y: '65%', delay: 3, size: 38, logo: 'https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black-2.png' },
  // Right side
  { name: 'TensorFlow', x: '88%', y: '12%', delay: 0.8, size: 42, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/TensorFlow_logo.svg/1280px-TensorFlow_logo.svg.png' },
  { name: 'LangChain', x: '92%', y: '45%', delay: 1.8, size: 42, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/LangChain_Logo.svg/1280px-LangChain_Logo.svg.png' },
  { name: 'Vercel', x: '90%', y: '78%', delay: 3.5, size: 40, logo: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
]

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-12"
    >
      {/* Clean white background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      {/* Floating Tech Logos */}
      {floatingLogos.map((logo, index) => (
        <motion.div
          key={logo.name}
          className="absolute pointer-events-none hidden lg:block"
          style={{ left: logo.x, top: logo.y }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.22,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { delay: logo.delay, duration: 1 },
            y: {
              delay: logo.delay,
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.logo}
            alt={logo.name}
            className="grayscale opacity-60 dark:invert dark:opacity-40"
            style={{ width: logo.size, height: 'auto' }}
          />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
        >
          {/* Left Side - Main Headline */}
          <motion.div variants={itemVariants} className="lg:col-span-1 order-2 lg:order-1">
            {/* Availability Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Open for opportunities
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              AI Engineer who ships products people actually use
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              3.5+ years building AI for production
            </p>
          </motion.div>

          {/* Center - Large Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl scale-110" />

              {/* Profile Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <Image
                  src="/profile.png"
                  alt="Snehit Vaddi"
                  fill
                  className="object-cover object-top rounded-full"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Description & CTA */}
          <motion.div variants={itemVariants} className="lg:col-span-1 order-3">
            <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg mb-8 leading-relaxed">
              I build and ship AI products, from LLM apps to computer vision models.
              My tools help thousands land jobs and discover hackathon projects.
              Currently building AI agents for healthcare and productivity.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="mailto:vaddisnehit@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowDown className="w-4 h-4" />
                View Work
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Shipped Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 lg:mt-24"
        >
          <p className="text-center text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-8">
            Products I've shipped, used by thousands
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {shippedProducts.map((product, index) => (
              <motion.a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group flex items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                <span className="text-base md:text-lg font-medium">{product.name}</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
