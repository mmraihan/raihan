'use client'

import { blogs } from '@/contents/blogs'
import Link from 'next/link'
import { motion } from 'framer-motion'
import BlogCard from './BlogCard'

export default function Blogs() {
  return (
    <section className="section" aria-labelledby="latest-posts-heading">
      <div className="container">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-primary font-mono text-xs uppercase tracking-[0.12em]">Writing</span>
          <h2 id="latest-posts-heading" className="section-title mt-4">
            Latest Blog Posts
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.slug} blog={blog} index={index} headingLevel="h3" />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blogs" className="btn-secondary">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
