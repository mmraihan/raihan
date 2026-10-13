'use client'

import { projects } from '@/contents/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'

export default function Projects() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center"
          {...fadeInUp}
        >
          Projects
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md hover:shadow-xl p-4 sm:p-6 h-full flex flex-col transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-white/10 hover:border-primary/30 dark:hover:border-emerald-400/30"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative aspect-video mb-3 sm:mb-4 rounded-lg overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <motion.h3 
                className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 flex-grow leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm hover:bg-primary/20 hover:text-primary transition-all duration-200 cursor-pointer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div 
                className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-primary dark:text-emerald-400 font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-primary/40 dark:border-emerald-400/40 hover:bg-primary/5 dark:hover:bg-emerald-400/10 hover:border-primary dark:hover:border-emerald-400 transition-all duration-300 text-sm sm:text-base touch-target"
                  whileHover={{ x: 5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaGithub className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Source Code</span>
                  <span className="sm:hidden">Code</span>
                </motion.a>
                {project.demoLink && (
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-primary dark:text-emerald-400 font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-primary/40 dark:border-emerald-400/40 hover:bg-primary/5 dark:hover:bg-emerald-400/10 hover:border-primary dark:hover:border-emerald-400 transition-all duration-300 text-sm sm:text-base touch-target"
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaExternalLinkAlt className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Live Demo</span>
                    <span className="sm:hidden">Demo</span>
                  </motion.a>
                )}
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 