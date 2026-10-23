'use client'

import { projects } from '@/contents/projects'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section className="section" aria-labelledby="projects-heading">
      <div className="container">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-primary font-mono text-xs uppercase tracking-[0.12em]">Portfolio</span>
          <h2 id="projects-heading" className="section-title mt-4">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} headingLevel="h3" />
          ))}
        </div>
      </div>
    </section>
  )
}
