'use client'

import { projects } from '@/contents/projects'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className="container py-16 sm:py-20">
      <motion.header
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="badge-primary font-mono text-xs uppercase tracking-[0.12em]">Portfolio</span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Projects
        </h1>
      </motion.header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} headingLevel="h2" />
        ))}
      </div>
    </div>
  )
}
