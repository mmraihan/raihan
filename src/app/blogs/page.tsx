'use client'

import { blogs } from '@/contents/blogs'
import { motion } from 'framer-motion'
import BlogCard from '../components/BlogCard'

export default function Blogs() {
  return (
    <div className="container py-16 sm:py-20">
      <motion.header
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="badge-primary font-mono text-xs uppercase tracking-[0.12em]">Writing</span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Blog Posts
        </h1>
      </motion.header>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.slug} blog={blog} index={index} headingLevel="h2" />
        ))}
      </div>
    </div>
  )
}
