'use client'

import React, { useId, useRef, useState } from 'react'
import Image from 'next/image'
import { assetPath } from '@/utils/assetPath'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaUser,
  FaGitAlt,
  FaJsSquare,
  FaPython,
  FaJava,
  FaAngular,
  FaDatabase,
  FaDocker,
  FaBrain,
  FaMicrosoft,
  FaServer,
  FaChevronRight
} from 'react-icons/fa'
import {
  SiTypescript,
  SiDotnet,
  SiPostgresql,
  SiFastapi
} from 'react-icons/si'

type TabType = 'experience' | 'education' | 'skills' | 'about'

interface TabData {
  id: TabType
  label: string
  icon: React.ReactNode
}

const tabs: TabData[] = [
  { id: 'experience', label: 'Experience', icon: <FaCode /> },
  { id: 'skills', label: 'Skills', icon: <FaLaptopCode /> },
  { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
  { id: 'about', label: 'About me', icon: <FaUser /> },
]

const skillIcons = [
  { icon: <FaCode className="h-8 w-8" />, name: 'C#' },
  { icon: <FaJsSquare className="h-8 w-8" />, name: 'JavaScript' },
  { icon: <SiTypescript className="h-8 w-8" />, name: 'TypeScript' },
  { icon: <FaJava className="h-8 w-8" />, name: 'Java' },
  { icon: <FaPython className="h-8 w-8" />, name: 'Python' },
  { icon: <SiDotnet className="h-8 w-8" />, name: 'ASP.NET' },
  { icon: <FaAngular className="h-8 w-8" />, name: 'Angular' },
  { icon: <FaServer className="h-8 w-8" />, name: 'SQL Server' },
  { icon: <SiPostgresql className="h-8 w-8" />, name: 'PostgreSQL' },
  { icon: <FaDatabase className="h-8 w-8" />, name: 'Entity Framework' },
  { icon: <SiFastapi className="h-8 w-8" />, name: 'FastAPI' },
  { icon: <FaGitAlt className="h-8 w-8" />, name: 'Git' },
  { icon: <FaDocker className="h-8 w-8" />, name: 'Docker' },
  { icon: <FaMicrosoft className="h-8 w-8" />, name: 'Azure' },
  { icon: <FaBrain className="h-8 w-8" />, name: 'AI Tools' },
]

const skillCategories = [
  { title: 'Programming Languages', icon: <FaCode />, items: ['C#', 'JavaScript', 'TypeScript', 'Java', 'C', 'Python'] },
  { title: 'Backend Development', icon: <FaLaptopCode />, items: ['ASP.NET Core', 'Web API', 'MVC', 'Razor Pages', 'Entity Framework Core', 'FastAPI'] },
  { title: 'Frontend Development', icon: <FaCode />, items: ['Angular', 'Angular Material', 'Kendo UI', 'Bootstrap', 'Next.js'] },
  { title: 'Databases', icon: <FaDatabase />, items: ['Microsoft SQL Server', 'PostgreSQL', 'Vector Database'] },
  { title: 'AI & Productivity Tools', icon: <FaBrain />, items: ['Claude', 'Cursor', 'GitHub Copilot'] },
  { title: 'Others', icon: <FaGitAlt />, items: ['Clean Architecture', 'N-Layer Architecture', 'Microservice Architecture', 'Repository Pattern', 'Git with GitHub', 'Azure DevOps', 'Windows Server 2022', 'Generative AI'] },
]

const experiences = [
  {
    role: 'Senior Software Engineer (Backend)',
    company: 'ESAP Riyadh, Saudi Arabia (Remote)',
    period: 'Sep 2024 – Present',
    current: true,
    points: [
      'Developing the HR, Fintech Module with RESTful APIs in .NET 8 using microservice architecture & gateway.',
      'Developing backend APIs with Python (FastAPI) for AI projects, including a Knowledge Base System.',
      'Conducting Software Requirements Analysis, creating ER diagrams, and defining project architecture.',
      'Ensuring adherence to SOLID principles and clean code practices.',
      'Maintaining & supervising junior software engineers.',
      'Collaborating with cross-functional teams to ensure seamless integration across ERP modules.',
      'Deploying the project on Windows Server environment.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Asian & DAF Group, Chittagong, Bangladesh',
    period: 'Mar 2023 – Aug 2024',
    current: false,
    points: [
      'Core member of .NET Team, completed three (Merchandising, Sample and RFID) modules.',
      'Developing API using Asp .Net Core Web API v7.',
      'Developing and Consuming API with Angular 16 and Material.',
      'Designing database with MS SQL Server and EF Core.',
      'Maintaining clean code with SOLID principles & N-Layer Architecture.',
    ],
  },
  {
    role: 'Jr. Software Engineer',
    company: 'InnoQB Sdn Bhd, Malaysia (Remote, Contract)',
    period: 'May 2022 – Nov 2022',
    current: false,
    points: [
      'Contributed to the development of an ERP System using .NET Core and Angular.',
      'Designing and developing user interfaces with Kendo UI for a modern & intuitive experience.',
      'Existing code optimization to improve software performance.',
      'Version control using Git, TortoiseGit for effective collaboration.',
      'Collaborate with the team for the development software design.',
    ],
  },
]

const certifications = [
  { title: 'ASP.NET Core MVC With Angular and EF Core', issuer: 'PencilBox Training Institute' },
  { title: 'Professional Programming with C#', issuer: 'Dev Skill' },
  { title: 'Database Design and Development (MS SQL SERVER)', issuer: 'Meek Technologies Limited' },
  { title: 'Angular - The Complete Guide (2024 Edition)', issuer: 'Udemy' },
  { title: 'SOLID Principles for C# Developers', issuer: 'Pluralsight' },
  { title: 'Generative AI Architectures with LLM, Prompt, RAG, Vector DB', issuer: 'Udemy' },
]

const highlights = [
  { value: '4+', label: 'Years Experience' },
  { value: '15+', label: 'Technologies' },
  { value: '∞', label: 'Learning Mindset' },
]

const panelMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25 },
}

interface InteractiveResumeProps {
  /** Use 'h2' when embedded in a page that already has an h1 */
  headingLevel?: 'h1' | 'h2'
}

export default function InteractiveResume({ headingLevel = 'h1' }: InteractiveResumeProps) {
  const [activeTab, setActiveTab] = useState<TabType>('experience')
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const baseId = useId()

  const Title = headingLevel
  const H = headingLevel === 'h1' ? 'h2' : 'h3'
  const Sub = headingLevel === 'h1' ? 'h3' : 'h4'

  const tabId = (id: TabType) => `${baseId}-tab-${id}`
  const panelId = `${baseId}-panel`

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern)
  const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    const keys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End']
    if (!keys.includes(e.key)) return
    e.preventDefault()
    let next = index
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (index + 1) % tabs.length
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = tabs.length - 1
    setActiveTab(tabs[next].id)
    tabRefs.current[next]?.focus()
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <motion.div key="about" {...panelMotion}>
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center">
              {/* Profile Image */}
              <div className="relative shrink-0">
                <div className="glow-primary rounded-[22px] bg-primary p-[3px]">
                  <Image
                    src={assetPath('/profile-6.png')}
                    alt="Md. Mubasshir Raihan"
                    width={128}
                    height={128}
                    className="h-32 w-32 rounded-[19px] bg-bg-alt object-cover"
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 -right-1.5 h-5 w-5 rounded-full border-4 border-bg bg-success"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <H className="text-2xl font-bold sm:text-3xl">Md. Mubasshir Raihan</H>
                <p className="mt-1 text-lg font-medium text-primary">Senior Software Engineer</p>

                <div className="mt-5 max-w-[68ch] space-y-4 leading-relaxed text-muted">
                  <p className="text-base sm:text-lg">
                    Born in Chittagong, Bangladesh, I graduated from East Delta University with a Bachelor&apos;s degree in Computer Science and Engineering. I am skilled in utilizing modern frameworks to optimize the development process, with a strong foundation in coding principles. I am proficient in maintaining software architecture and applying design patterns with industry best practices.
                  </p>
                  <p>
                    I am passionate about continuous learning, as it enables me to explore new ideas and grow both professionally and personally.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="glass-card flex flex-col-reverse px-4 py-5 text-center">
                  <dt className="mt-1 text-sm text-muted">{item.label}</dt>
                  <dd className="text-3xl font-bold text-primary">{item.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        )

      case 'skills':
        return (
          <motion.div key="skills" {...panelMotion} className="space-y-8">
            {/* Technologies marquee (pauses on hover; static wrap with reduced motion) */}
            <div>
              <H className="mb-4 text-lg font-bold">Technologies &amp; Tools</H>
              <div className="marquee-pause relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)] motion-reduce:[mask-image:none]">
                <ul className="animate-marquee flex w-max gap-3 motion-reduce:w-auto motion-reduce:flex-wrap">
                  {[...skillIcons, ...skillIcons].map((skill, index) => {
                    const isClone = index >= skillIcons.length
                    return (
                      <li
                        key={`${skill.name}-${index}`}
                        aria-hidden={isClone ? true : undefined}
                        className={`glass-card flex w-[104px] shrink-0 flex-col items-center gap-2 !rounded-2xl px-3 py-4 text-center hover:border-primary ${
                          isClone ? 'motion-reduce:hidden' : ''
                        }`}
                      >
                        <span className="text-primary" aria-hidden="true">{skill.icon}</span>
                        <span className="text-xs font-medium text-muted">{skill.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            {/* Detailed Skills Categories */}
            <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-2">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: categoryIndex * 0.06 }}
                  className="glass-card glass-card-hover p-5 sm:p-6"
                >
                  <Sub className="mb-4 flex items-center gap-3 text-base font-bold">
                    <span className="icon-chip h-9 w-9 text-sm" aria-hidden="true">
                      {category.icon}
                    </span>
                    <span className="flex-1">{category.title}</span>
                    <span className="font-mono text-xs font-normal text-subtle">
                      {category.items.length} skills
                    </span>
                  </Sub>
                  <ul className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-glass px-3 py-1.5 text-sm font-medium text-fg transition-colors duration-200 hover:border-primary hover:text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case 'experience':
        return (
          <motion.ol key="experience" {...panelMotion} className="relative ml-1.5 space-y-6 border-l border-border pl-6 sm:pl-8">
            {experiences.map((job, index) => (
              <motion.li
                key={job.role}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 + index * 0.08 }}
                className="relative"
              >
                {/* Timeline node */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[31px] top-7 h-3.5 w-3.5 rounded-full border-2 border-bg sm:-left-[39px] ${
                    job.current ? 'glow-primary bg-primary' : 'bg-border-strong'
                  }`}
                />
                <article className={`glass-card glass-card-hover p-5 sm:p-7 ${job.current ? '!border-primary/40' : ''}`}>
                  <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <H className="text-lg font-bold sm:text-xl">{job.role}</H>
                      <p className={`mt-1 font-medium ${job.current ? 'text-primary' : 'text-muted'}`}>{job.company}</p>
                    </div>
                    <span className={`${job.current ? 'badge-primary' : 'badge'} shrink-0 self-start whitespace-nowrap font-mono !text-xs`}>
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                        <span
                          aria-hidden="true"
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${job.current ? 'bg-primary' : 'bg-subtle'}`}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.li>
            ))}
          </motion.ol>
        )

      case 'education':
        return (
          <motion.div key="education" {...panelMotion} className="space-y-6">
            {/* Academic Education */}
            <div className="glass-card glass-card-hover p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="icon-chip h-10 w-10" aria-hidden="true">
                  <FaGraduationCap className="h-5 w-5" />
                </span>
                <H className="text-lg font-bold sm:text-xl">Academic Education</H>
              </div>

              <div className="rounded-2xl border border-border bg-glass p-5">
                <Sub className="text-lg font-bold">Bachelor of Science</Sub>
                <p className="mt-1 font-medium text-primary">Computer Science and Engineering</p>
                <p className="mt-1 text-sm text-subtle">East Delta University, Chittagong</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Graduated with a strong foundation in computer science principles,
                  software engineering, and modern development practices.
                </p>
              </div>
            </div>

            {/* Professional Training */}
            <div className="glass-card glass-card-hover p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="icon-chip h-10 w-10" aria-hidden="true">
                  <FaLaptopCode className="h-5 w-5" />
                </span>
                <H className="text-lg font-bold sm:text-xl">Professional Training &amp; Certifications</H>
              </div>

              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <li
                    key={cert.title}
                    className="rounded-2xl border border-border bg-glass p-4 transition-colors duration-200 hover:border-primary"
                  >
                    <Sub className="text-sm font-semibold leading-snug">{cert.title}</Sub>
                    <p className="mt-1.5 font-mono text-xs font-medium text-primary">{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="container py-16 sm:py-20">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <span className="badge-primary font-mono !text-xs uppercase tracking-[0.12em]">Career</span>
        <Title className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Resume
        </Title>
        <p className="section-subtitle">Experience, skills, and education at a glance</p>
      </motion.header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1">
          <div className="glass-card p-3 sm:p-4 lg:sticky lg:top-24">
            <div className="mb-3 hidden px-2 pt-1 lg:block">
              <p className="font-bold">Browse Sections</p>
              <p className="mt-0.5 text-xs text-subtle">Click any section to explore</p>
            </div>
            <div
              role="tablist"
              aria-label="Resume sections"
              className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1"
            >
              {tabs.map((tab, index) => {
                const selected = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[index] = el
                    }}
                    id={tabId(tab.id)}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={panelId}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveTab(tab.id)}
                    onKeyDown={(e) => onTabKeyDown(e, index)}
                    className={`group flex min-h-11 w-full items-center gap-2.5 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-all duration-200 sm:px-4 lg:text-base ${
                      selected
                        ? 'border-transparent bg-primary text-on-primary shadow-[var(--shadow-btn-hover)]'
                        : 'border-border bg-glass text-muted hover:border-primary hover:text-fg'
                    }`}
                  >
                    <span className="text-base" aria-hidden="true">{tab.icon}</span>
                    <span className="flex-1 text-left">{tab.label}</span>
                    <FaChevronRight
                      aria-hidden="true"
                      className={`hidden text-xs transition-all duration-200 lg:block ${
                        selected ? 'opacity-100' : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                      }`}
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-w-0 lg:col-span-3">
          <div
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId(activeTab)}
            tabIndex={0}
            className="glass-card min-h-[420px] p-4 sm:p-6 lg:p-8"
          >
            <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
