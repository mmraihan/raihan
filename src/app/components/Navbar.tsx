'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact' },
]

function ThemeIcon() {
  // Icons are toggled with CSS so server and client markup always match
  return (
    <>
      <SunIcon className="hidden h-5 w-5 dark:block" aria-hidden="true" />
      <MoonIcon className="h-5 w-5 dark:hidden" aria-hidden="true" />
    </>
  )
}

export default function Navbar() {
  const { toggleTheme } = useTheme()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const normalized = pathname?.replace(/\/$/, '') || '/'
  const isActive = (href: string) => (href === '/' ? normalized === '/' : normalized.startsWith(href))

  // Close the mobile menu on navigation and on Escape
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMobileMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMobileMenuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-[var(--nav-bg)] backdrop-blur-[20px]">
      <nav className="container" aria-label="Main">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center rounded-lg" aria-label="Mubasshir Raihan - Home">
            <Logo className="h-9 transition-opacity duration-200 hover:opacity-80" />
          </Link>

          {/* Desktop / tablet menu */}
          <div className="hidden items-center gap-1 md:flex">
            {menuItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 lg:px-4 ${
                    active ? 'bg-glass text-primary' : 'text-muted hover:text-fg'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                </Link>
              )
            })}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-glass text-muted transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              <ThemeIcon />
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-glass text-muted transition-colors hover:text-primary"
            >
              <ThemeIcon />
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-glass text-fg transition-colors hover:text-primary"
            >
              {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-border md:hidden"
            >
              <ul className="space-y-1 py-3">
                {menuItems.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex min-h-11 items-center rounded-xl px-4 text-base font-medium transition-colors ${
                          active ? 'bg-glass text-primary' : 'text-muted hover:bg-glass hover:text-fg'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
