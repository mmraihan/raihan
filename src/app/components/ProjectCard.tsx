'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
  headingLevel?: 'h2' | 'h3'
}

export default function ProjectCard({ project, index, headingLevel = 'h2' }: ProjectCardProps) {
  const Heading = headingLevel

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="glass-card glass-card-hover group flex h-full flex-col overflow-hidden hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden border-b border-border bg-bg-alt">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <Heading className="text-lg font-bold leading-snug sm:text-xl">{project.title}</Heading>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-glass px-2.5 py-1 font-mono text-[11px] font-medium text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary btn-sm flex-1 sm:flex-none"
            aria-label={`Source code for ${project.title} on GitHub (opens in a new tab)`}
          >
            <FaGithub className="h-4 w-4" aria-hidden="true" />
            Source Code
          </a>
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-sm flex-1 sm:flex-none"
              aria-label={`Live demo of ${project.title} (opens in a new tab)`}
            >
              <FaExternalLinkAlt className="h-3.5 w-3.5" aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
