'use client'

import { blogs } from '@/contents/blogs';
import Link from 'next/link';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations';

export default function Blogs() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center"
          {...fadeInUp}
        >
          Latest Blog Posts
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.slug}
              className="bg-white dark:bg-dark/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-8 border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              {blog.externalLink ? (
                <a 
                  href={blog.externalLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.h3 
                    className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 hover:text-primary transition-colors leading-tight"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {blog.title}
                  </motion.h3>
                </a>
              ) : (
                <Link href={`/blogs/${blog.slug}`}>
                  <motion.h3 
                    className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 hover:text-primary transition-colors leading-tight"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {blog.title}
                  </motion.h3>
                </Link>
              )}
              <motion.p 
                className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {blog.excerpt}
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 space-y-1 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.span 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCalendarAlt className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  {new Date(blog.date).toLocaleDateString()}
                </motion.span>
                <motion.span 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaClock className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  {blog.readTime}
                </motion.span>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/blogs"
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 text-sm sm:text-base font-semibold touch-target shadow-md hover:shadow-lg"
            >
              View All Posts
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 