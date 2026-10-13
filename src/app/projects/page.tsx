'use client'

import { projects } from '@/contents/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

export default function Projects() {
  return (
    <div className="container max-w-7xl mx-auto py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <motion.div
        className="text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Projects
        </h1>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <motion.div 
                className="aspect-video bg-gray-200 dark:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  width={500}
                  height={500}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
              
              <div className="p-4 sm:p-6">
                <motion.h3 
                  className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed"
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
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-2 sm:gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-emerald-400 transition-colors text-sm sm:text-base touch-target"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Source Code</span>
                  </motion.a>
                  {project.demoLink && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-emerald-400 transition-colors text-sm sm:text-base touch-target"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
        ))}
      </motion.div>
    </div>
  )
} 