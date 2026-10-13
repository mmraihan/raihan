'use client'

import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/utils/assetPath'
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, bounceIn } from '@/utils/animations';
// Background is already provided globally in layout via FloatingElements

const socials = [
  { icon: FaGithub, href: 'https://github.com/mmraihan', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/mubasshir-raihan', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/mubasshir_raihan', label: 'Twitter' },
  { icon: FaMedium, href: 'https://medium.com/@mub.raihan7', label: 'Medium' },
];

export default function Hero() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden">
      {/* Background handled in layout */}

      <div className="container max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className='flex justify-center items-center mb-6 sm:mb-8'
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src={assetPath("/profile-6.png")}
              alt="Md. Mubasshir Raihan Profile"
              width={256}
              height={256}
              priority
              sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
              className="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover ring-2 ring-primary/60 dark:ring-emerald-400/60 shadow-lg dark:shadow-emerald-500/20"
            />
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              className="inline-block font-extrabold"
              style={{
                background: 'linear-gradient(135deg, #34D399, #10B981, #0D9488)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                // Fallback for browsers that don't support text gradients
                color: '#10B981'
              }}
              {...bounceIn}
              transition={{ delay: 0.5 }}
            >
              <span className="block sm:inline">Mubasshir</span>
              <span className="block sm:inline sm:ml-3">Raihan</span>
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 px-4"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Senior Software Engineer | Tech Enthusiast
          </motion.p>
          <motion.div
            className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 px-4"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="p-3 sm:p-3.5 rounded-full text-xl sm:text-2xl text-gray-600 dark:text-gray-300 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:text-primary dark:hover:text-emerald-400 hover:border-primary/40 dark:hover:border-emerald-400/40 hover:shadow-md transition-all duration-300 touch-target"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5 + index * 0.08,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.92 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="#resume"
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-md hover:shadow-lg inline-block w-full text-center touch-target font-semibold"
              >
                View My Resume
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="inline-block w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/15 text-gray-800 dark:text-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:border-primary/50 dark:hover:border-emerald-400/50 hover:text-primary dark:hover:text-emerald-400 transition-all duration-300 shadow-sm hover:shadow-md text-center touch-target font-semibold"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
