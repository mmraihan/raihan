'use client'

import { blogs } from '@/contents/blogs'
import Link from 'next/link'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

export default function Blogs() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.div
        className="text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold">
          Blog Posts
        </h1>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {blogs.map((blog, index) => (
          <motion.article
            key={index}
            className="bg-white dark:bg-dark/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className="p-8">
              <motion.h2 
                className="text-xl font-semibold mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {blog.externalLink ? (
                  <a 
                    href={blog.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {blog.title}
                  </a>
                ) : (
                  <Link href={`/blogs/${blog.slug}`} className="hover:text-primary transition-colors">
                    {blog.title}
                  </Link>
                )}
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {blog.excerpt}
              </motion.p>
              
              <motion.div 
                className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaClock className="h-4 w-4" />
                  <span>{blog.readTime}</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  )
} 