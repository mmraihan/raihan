'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaTwitter, FaLinkedin, FaMedium } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800 relative z-30">
      <div className="container max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 relative z-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link href="/" className="group block mb-4 sm:mb-6">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/logo-cursive.svg" 
                  alt="Raihan Logo" 
                  width={40}
                  height={40}
                  className="h-10 w-auto sm:h-12 transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-lg"
                />
              </motion.div>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="relative z-10">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link 
                  href="/resume" 
                  className="block py-1.5 sm:py-2 px-1 text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-200 cursor-pointer rounded-md relative z-20 touch-target"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="block py-1.5 sm:py-2 px-1 text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-200 cursor-pointer rounded-md relative z-20 touch-target"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/blogs" 
                  className="block py-1.5 sm:py-2 px-1 text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-200 cursor-pointer rounded-md relative z-20 touch-target"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block py-1.5 sm:py-2 px-1 text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-200 cursor-pointer rounded-md relative z-20 touch-target"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="relative z-10">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Connect</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { icon: FaGithub, href: "https://github.com/mmraihan", title: "GitHub" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/mubasshir-raihan", title: "LinkedIn" },
                { icon: FaTwitter, href: "https://twitter.com/mubasshir_raihan", title: "Twitter" },
                { icon: FaMedium, href: "https://medium.com/@mub.raihan7", title: "Medium" }
              ].map((social, index) => (
                <motion.a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full text-lg sm:text-xl text-gray-600 dark:text-gray-300 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:text-primary dark:hover:text-emerald-400 hover:border-primary/40 dark:hover:border-emerald-400/40 hover:shadow-md transition-all duration-300 touch-target"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.title}
                  aria-label={social.title}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 sm:mt-4">
              Based in Chittagong, Bangladesh
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Md. Mubasshir Raihan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 