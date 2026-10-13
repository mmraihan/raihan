'use client'

import React, { useState } from 'react'
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
  { icon: <FaCode className="h-12 w-12" />, name: 'C#' },
  { icon: <FaJsSquare className="h-12 w-12" />, name: 'JavaScript' },
  { icon: <SiTypescript className="h-12 w-12" />, name: 'TypeScript' },
  { icon: <FaJava className="h-12 w-12" />, name: 'Java' },
  { icon: <FaPython className="h-12 w-12" />, name: 'Python' },
  { icon: <SiDotnet className="h-12 w-12" />, name: 'ASP.NET' },
  { icon: <FaAngular className="h-12 w-12" />, name: 'Angular' },
  { icon: <FaServer className="h-12 w-12" />, name: 'SQL Server' },
  { icon: <SiPostgresql className="h-12 w-12" />, name: 'PostgreSQL' },
  { icon: <FaDatabase className="h-12 w-12" />, name: 'Entity Framework' },
  { icon: <SiFastapi className="h-12 w-12" />, name: 'FastAPI' },
  { icon: <FaGitAlt className="h-12 w-12" />, name: 'Git' },
  { icon: <FaDocker className="h-12 w-12" />, name: 'Docker' },
  { icon: <FaMicrosoft className="h-12 w-12" />, name: 'Azure' },
  { icon: <FaBrain className="h-12 w-12" />, name: 'AI Tools' },
]

export default function InteractiveResume() {
  const [activeTab, setActiveTab] = useState<TabType>('experience')

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Hero About Section */}
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 dark:from-white/10 dark:via-white/5 dark:to-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 rounded-2xl p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 dark:from-emerald-500/5 dark:via-transparent dark:to-teal-500/5"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 dark:from-emerald-400/10 dark:to-teal-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400/10 to-teal-400/10 dark:from-emerald-400/10 dark:to-teal-400/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 p-1">
                        <div className="w-full h-full rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                          <Image 
                            src={assetPath("/profile-6.png")} 
                            alt="MD. Mubasshir Raihan" 
                            width={128}
                            height={128}
                            className="w-full h-full rounded-xl object-cover"
                          />
                          <div className="hidden w-full h-full rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-400/20 dark:from-emerald-400/20 dark:to-teal-400/20 flex items-center justify-center">
                            <FaUser className="h-16 w-16 text-emerald-400" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Md. Mubasshir Raihan</h2>
                      <p className="text-emerald-600 dark:text-emerald-400 text-lg font-medium mb-4">Senior Software Engineer</p>
                    </div>

                    <div className="space-y-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        Born in Chittagong, Bangladesh, I graduated from East Delta University with a Bachelor&apos;s degree in Computer Science and Engineering. I am skilled in utilizing modern frameworks to optimize the development process, with a strong foundation in coding principles. I am proficient in maintaining software architecture and applying design patterns with industry best practices.
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        I am passionate about continuous learning, as it enables me to explore new ideas and grow both professionally and personally.
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white/50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
                        <div className="text-2xl font-bold text-primary dark:text-emerald-400 mb-1">4+</div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">Years Experience</div>
                      </div>
                      <div className="text-center p-4 bg-white/50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
                        <div className="text-2xl font-bold text-primary dark:text-emerald-400 mb-1">15+</div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">Technologies</div>
                      </div>
                      <div className="text-center p-4 bg-white/50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
                        <div className="text-2xl font-bold text-primary dark:text-emerald-400 mb-1">&infin;</div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">Learning Mindset</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        )

      case 'skills':
        return (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Animated Skills Icons */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies & Tools</h4>
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex space-x-4"
                  animate={{
                    x: [0, -100 * skillIcons.length]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ width: 'max-content' }}
                >
                  {/* First set of icons */}
                  {skillIcons.map((skill, index) => (
                    <motion.div
                      key={`first-${skill.name}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-4 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-300 group min-w-[100px] flex-shrink-0"
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="text-primary group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300 mb-2 flex justify-center">
                        {skill.icon}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-xs font-medium">{skill.name}</p>
                    </motion.div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {skillIcons.map((skill) => (
                    <motion.div
                      key={`second-${skill.name}`}
                      className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-4 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-300 group min-w-[100px] flex-shrink-0"
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="text-primary group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300 mb-2 flex justify-center">
                        {skill.icon}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-xs font-medium">{skill.name}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Detailed Skills Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
              {[
                { title: 'Programming Languages', icon: <FaCode />, items: ['C#', 'JavaScript', 'TypeScript', 'Java', 'C', 'Python'] },
                { title: 'Backend Development', icon: <FaLaptopCode />, items: ['ASP.NET Core', 'Web API', 'MVC', 'Razor Pages', 'Entity Framework Core', 'FastAPI'] },
                { title: 'Frontend Development', icon: <FaCode />, items: ['Angular', 'Angular Material', 'Kendo UI', 'Bootstrap', 'Next.js'] },
                { title: 'Databases', icon: <FaDatabase />, items: ['Microsoft SQL Server', 'PostgreSQL', 'Vector Database'] },
                { title: 'AI & Productivity Tools', icon: <FaBrain />, items: ['Claude', 'Cursor', 'GitHub Copilot'] },
                { title: 'Others', icon: <FaGitAlt />, items: ['Clean Architecture', 'N-Layer Architecture', 'Microservice Architecture', 'Repository Pattern', 'Git with GitHub', 'Azure DevOps', 'Windows Server 2022', 'Generative AI'] },
              ].map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 border-l-4 border-l-primary/60 dark:border-l-emerald-400/60 p-5 sm:p-6 rounded-lg hover:border-primary/40 hover:shadow-md transition-all duration-300"
                >
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-md bg-primary/10 dark:bg-emerald-400/10 text-primary dark:text-emerald-400 flex items-center justify-center text-sm flex-shrink-0">
                      {category.icon}
                    </span>
                    {category.title}
                    <span className="ml-auto text-xs font-normal text-gray-400 dark:text-gray-500">
                      {category.items.length} skills
                    </span>
                  </h4>
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    {category.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.08 + itemIndex * 0.03 }}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-white dark:bg-white/5 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-white/10 px-3 py-2 rounded-md text-sm font-medium text-center leading-snug hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-emerald-400/5 hover:text-gray-900 dark:hover:text-white hover:shadow-sm transition-colors duration-200 cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case 'experience':
        return (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Current Role */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 border-l-4 border-l-primary dark:border-l-emerald-400 p-6 rounded-xl hover:shadow-md hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Senior Software Engineer (Backend)</h3>
                  <p className="text-primary dark:text-emerald-400 font-medium">ESAP Riyadh, Saudi Arabia (Remote)</p>
                </div>
                <span className="text-gray-700 dark:text-gray-200 text-xs sm:text-sm font-semibold whitespace-nowrap bg-primary/10 dark:bg-emerald-400/10 border border-primary/30 dark:border-emerald-400/30 px-3 py-1 rounded-full flex-shrink-0 self-start">
                  Sep 2024 – Present
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary dark:bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Developing the HR, Fintech Module with RESTful APIs in .NET 8 using microservice architecture & gateway.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary dark:bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Developing backend APIs with Python (FastAPI) for AI projects, including a Knowledge Base System.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary dark:bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Conducting Software Requirements Analysis, creating ER diagrams, and defining project architecture.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary dark:bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Ensuring adherence to SOLID principles and clean code practices.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary dark:bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Maintaining & supervising junior software engineers.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary dark:bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Collaborating with cross-functional teams to ensure seamless integration across ERP modules.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary dark:bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Deploying the project on Windows Server environment.</p>
                </div>
              </div>
            </motion.div>

            {/* Previous Role */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 border-l-4 border-l-gray-300 dark:border-l-gray-600 p-6 rounded-xl hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Software Developer</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Asian & DAF Group, Chittagong, Bangladesh</p>
                </div>
                <span className="text-gray-700 dark:text-gray-200 text-xs sm:text-sm font-semibold whitespace-nowrap bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 px-3 py-1 rounded-full flex-shrink-0 self-start">
                  Mar 2023 – Aug 2024
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Core member of .NET Team, completed three (Merchandising, Sample and RFID) module.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Developing API using Asp .Net Core Web API v7.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Developing and Consuming API with Angular 16 and Material.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Designing database with MS SQL Server and EF Core.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Maintaining clean code with SOLID principles & N-Layer Architecture.</p>
                </div>
              </div>
            </motion.div>

            {/* Contract Role */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 border-l-4 border-l-gray-300 dark:border-l-gray-600 p-6 rounded-xl hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Jr. Software Engineer</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">InnoQB Sdn Bhd, Malaysia (Remote, Contract)</p>
                </div>
                <span className="text-gray-700 dark:text-gray-200 text-xs sm:text-sm font-semibold whitespace-nowrap bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 px-3 py-1 rounded-full flex-shrink-0 self-start">
                  May 2022 – Nov 2022
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Contributed to the development of an ERP System using .NET Core and Angular.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Designing and developing user interfaces with Kendo UI for a modern & intuitive experience.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Existing code optimization to improve software performance.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Version control using Git, TortoiseGit for effective collaboration.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Collaborate with the team for the development software design.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )

      case 'education':
        return (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Academic Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 border-l-4 border-l-primary dark:border-l-emerald-400 p-6 rounded-xl hover:shadow-md hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 dark:bg-emerald-400/10 rounded-lg flex items-center justify-center mr-3">
                  <FaGraduationCap className="h-5 w-5 text-primary dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Academic Education</h3>
              </div>

              <div className="bg-white dark:bg-white/5 p-4 rounded-lg border border-gray-200 dark:border-white/10">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Bachelor of Science</h4>
                <p className="text-primary dark:text-emerald-400 font-medium mb-1">Computer Science and Engineering</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">East Delta University, Chittagong</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Graduated with a strong foundation in computer science principles,
                  software engineering, and modern development practices.
                </p>
              </div>
            </motion.div>

            {/* Professional Training */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 border-l-4 border-l-gray-300 dark:border-l-gray-600 p-6 rounded-xl hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 dark:bg-emerald-400/10 rounded-lg flex items-center justify-center mr-3">
                  <FaLaptopCode className="h-5 w-5 text-primary dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Professional Training & Certifications</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white dark:bg-white/5 p-4 rounded-lg border border-gray-200 dark:border-white/10 hover:border-primary/40 dark:hover:border-emerald-400/40 transition-all duration-300">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">ASP.NET Core MVC With Angular and EF Core</h4>
                  <p className="text-primary dark:text-emerald-400 font-medium text-xs">PencilBox Training Institute</p>
                </div>

                <div className="bg-white dark:bg-white/5 p-4 rounded-lg border border-gray-200 dark:border-white/10 hover:border-primary/40 dark:hover:border-emerald-400/40 transition-all duration-300">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Professional Programming with C#</h4>
                  <p className="text-primary dark:text-emerald-400 font-medium text-xs">Dev Skill</p>
                </div>

                <div className="bg-white dark:bg-white/5 p-4 rounded-lg border border-gray-200 dark:border-white/10 hover:border-primary/40 dark:hover:border-emerald-400/40 transition-all duration-300">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Database Design and Development (MS SQL SERVER)</h4>
                  <p className="text-primary dark:text-emerald-400 font-medium text-xs">Meek Technologies Limited</p>
                </div>

                <div className="bg-white dark:bg-white/5 p-4 rounded-lg border border-gray-200 dark:border-white/10 hover:border-primary/40 dark:hover:border-emerald-400/40 transition-all duration-300">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Angular - The Complete Guide (2024 Edition)</h4>
                  <p className="text-primary dark:text-emerald-400 font-medium text-xs">Udemy</p>
                </div>

                <div className="bg-white dark:bg-white/5 p-4 rounded-lg border border-gray-200 dark:border-white/10 hover:border-primary/40 dark:hover:border-emerald-400/40 transition-all duration-300">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">SOLID Principles for C# Developers</h4>
                  <p className="text-primary dark:text-emerald-400 font-medium text-xs">Pluralsight</p>
                </div>

                <div className="bg-white dark:bg-white/5 p-4 rounded-lg border border-gray-200 dark:border-white/10 hover:border-primary/40 dark:hover:border-emerald-400/40 transition-all duration-300">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Generative AI Architectures with LLM, Prompt, RAG, Vector DB</h4>
                  <p className="text-primary dark:text-emerald-400 font-medium text-xs">Udemy</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Resume
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Experience, skills, and education at a glance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-lg p-4 sm:p-6 lg:sticky lg:top-20">
              <div className="mb-4 px-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  Browse Sections
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Click any section to explore
                </p>
              </div>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ x: activeTab === tab.id ? 0 : 4 }}
                    whileTap={{ scale: 0.97 }}
                    aria-current={activeTab === tab.id}
                    className={`group w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all duration-300 text-sm sm:text-base cursor-pointer ${
                      activeTab === tab.id
                        ? 'text-white shadow-lg border-transparent'
                        : 'text-gray-700 dark:text-gray-300 bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-emerald-400/60 hover:text-gray-900 dark:hover:text-white hover:shadow-md'
                    }`}
                    style={{
                      background: activeTab === tab.id ? 'linear-gradient(135deg, #10B981, #0D9488)' : undefined,
                      color: activeTab === tab.id ? 'white' : undefined
                    }}
                  >
                    <span className="text-base sm:text-lg">{tab.icon}</span>
                    <span className="font-medium flex-1 text-left">{tab.label}</span>
                    <FaChevronRight
                      className={`text-xs transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-1 group-hover:opacity-100'
                      }`}
                    />
                  </motion.button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-lg p-4 sm:p-6 lg:p-8 min-h-[500px] sm:min-h-[600px]">
              <AnimatePresence mode="wait">
                {renderContent()}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}