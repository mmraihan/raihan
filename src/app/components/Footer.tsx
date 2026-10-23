import Link from 'next/link'
import Logo from './Logo'
import { FaGithub, FaTwitter, FaLinkedin, FaMedium } from 'react-icons/fa'

const quickLinks = [
  { href: '/resume', label: 'Resume' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact' },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/mmraihan', title: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/mubasshir-raihan', title: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/mubasshir_raihan', title: 'Twitter' },
  { icon: FaMedium, href: 'https://medium.com/@mub.raihan7', title: 'Medium' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-bg-alt/60 backdrop-blur-[20px]">
      <div className="container py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-flex rounded-lg" aria-label="Mubasshir Raihan - Home">
              <Logo className="h-11" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Senior Software Engineer building reliable .NET, microservice, and AI-powered backend systems.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer">
            <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.15em] text-subtle">
              Quick Links
            </h2>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-10 items-center text-sm text-muted transition-colors duration-200 hover:text-primary sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.15em] text-subtle">
              Connect
            </h2>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  title={social.title}
                  aria-label={social.title}
                >
                  <social.icon aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">Based in Chittagong, Bangladesh</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-subtle sm:text-sm">
            © {new Date().getFullYear()} Md. Mubasshir Raihan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
