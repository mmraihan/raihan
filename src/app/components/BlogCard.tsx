'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa'
import type { Blog } from '@/types'

interface BlogCardProps {
  blog: Blog
  index: number
  headingLevel?: 'h2' | 'h3'
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
})

export default function BlogCard({ blog, index, headingLevel = 'h2' }: BlogCardProps) {
  const Heading = headingLevel
  const href = blog.externalLink ?? `/blogs/${blog.slug}`
  const isExternal = Boolean(blog.externalLink)

  const title = (
    <>
      {blog.title}
      {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
      {/* Stretched link: the whole card is clickable */}
      <span className="absolute inset-0 rounded-[20px]" aria-hidden="true" />
    </>
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="feature-card group relative flex h-full flex-col has-[a:focus-visible]:border-primary has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-primary/40"
    >
      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-subtle">
        <span className="inline-flex items-center gap-1.5">
          <FaCalendarAlt className="h-3 w-3" aria-hidden="true" />
          <time dateTime={blog.date}>{dateFormatter.format(new Date(blog.date))}</time>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FaClock className="h-3 w-3" aria-hidden="true" />
          {blog.readTime}
        </span>
      </div>

      <Heading className="text-lg font-bold leading-snug sm:text-xl">
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 group-hover:text-primary focus-visible:outline-none"
          >
            {title}
          </a>
        ) : (
          <Link href={href} className="transition-colors duration-200 group-hover:text-primary focus-visible:outline-none">
            {title}
          </Link>
        )}
      </Heading>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">{blog.excerpt}</p>

      <span aria-hidden="true" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        Read article
        <FaArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </motion.article>
  )
}
