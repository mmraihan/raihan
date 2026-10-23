'use client'

import Link from 'next/link'
import Image from 'next/image'
import { assetPath } from '@/utils/assetPath'
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa'
import { motion } from 'framer-motion'

const socials = [
  { icon: FaGithub, href: 'https://github.com/mmraihan', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/mubasshir-raihan', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/mubasshir_raihan', label: 'Twitter' },
  { icon: FaMedium, href: 'https://medium.com/@mub.raihan7', label: 'Medium' },
]

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24 md:pb-28">
      <div className="container relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div {...reveal(0.05)} className="relative mb-8">
            <div className="glow-primary rounded-full bg-primary p-[3px]">
              <Image
                src={assetPath('/profile-6.png')}
                alt="Md. Mubasshir Raihan"
                width={256}
                height={256}
                priority
                sizes="(max-width: 640px) 112px, 136px"
                className="h-28 w-28 rounded-full border-4 border-bg object-cover sm:h-[136px] sm:w-[136px]"
              />
            </div>
          </motion.div>

          <motion.h1
            {...reveal(0.12)}
            className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em]"
          >
            Mubasshir Raihan
          </motion.h1>

          <motion.p
            {...reveal(0.2)}
            className="mt-5 max-w-xl text-lg text-muted sm:text-xl"
          >
            Senior Software Engineer | Tech Enthusiast
          </motion.p>

          <motion.div
            {...reveal(0.28)}
            className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <Link href="#resume" className="btn-primary">
              View My Resume
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </motion.div>

          <motion.ul {...reveal(0.36)} className="mt-10 flex flex-wrap justify-center gap-3" aria-label="Social profiles">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="icon-btn"
                >
                  <social.icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
