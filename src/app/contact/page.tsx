'use client'

import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaMedium, FaDiscord } from 'react-icons/fa'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormState {
  status: FormStatus;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [formState, setFormState] = useState<FormState>({ status: 'idle' })

  // Initialize EmailJS
  React.useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
      console.log('EmailJS initialized with public key:', publicKey.substring(0, 5) + '...')
    }
  }, [])

  const openMailClient = () => {
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`)
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} <${formData.email}>`)
    window.location.href = `mailto:mub.raihan7@gmail.com?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ status: 'loading' })

    try {
      // Try EmailJS first
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (serviceId && templateId && publicKey) {
        // Use EmailJS if configured
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'mub.raihan7@gmail.com',
        }

        console.log('Sending email via EmailJS with config:', { 
          serviceId, 
          templateId, 
          publicKey: publicKey.substring(0, 5) + '...',
          templateParams 
        })
        
        try {
          // Since we already initialized EmailJS, we don't need to pass the public key again
          const result = await emailjs.send(serviceId, templateId, templateParams)
          console.log('EmailJS result:', result)
        } catch (emailjsError) {
          console.error('EmailJS specific error:', emailjsError)
          console.error('Error details:', JSON.stringify(emailjsError, null, 2))

          // Static hosting (GitHub Pages) has no API route, so fall back to the mail client
          openMailClient()
        }
      } else {
        // EmailJS not configured: fall back to the visitor's mail client
        console.log('EmailJS not configured, opening mail client...')
        openMailClient()
      }
      
      setFormState({ status: 'success', message: 'Message sent successfully!' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Failed to send email:', error)
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      setFormState({ status: 'error', message: errorMessage })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactItems = [
    { icon: FaEnvelope, title: 'Email', label: 'mub.raihan7@gmail.com', href: 'mailto:mub.raihan7@gmail.com', external: false },
    { icon: FaDiscord, title: 'Discord', label: 'mmraihan', href: 'https://discord.com/users/mmraihan', external: true },
    { icon: FaMedium, title: 'Medium', label: '@mub.raihan7', href: 'https://medium.com/@mub.raihan7', external: true },
    { icon: FaMapMarkerAlt, title: 'Location', label: 'Chittagong, Bangladesh', href: undefined, external: false },
  ]

  return (
    <div className="container py-16 sm:py-20">
      <motion.header
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="badge-primary font-mono text-xs uppercase tracking-[0.12em]">Say hello</span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Contact Me
        </h1>
      </motion.header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="mt-3 max-w-prose leading-relaxed text-muted">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>

          <ul className="mt-8 space-y-3">
            {contactItems.map((item) => {
              const content = (
                <>
                  <span className="icon-chip h-11 w-11" aria-hidden="true">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-fg">{item.title}</span>
                    <span className="block break-all text-sm text-muted transition-colors duration-200 group-hover:text-primary sm:text-base">
                      {item.label}
                    </span>
                  </span>
                </>
              )
              return (
                <li key={item.title}>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="glass-card glass-card-hover group flex items-center gap-4 !rounded-2xl p-4 hover:-translate-y-0.5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="glass-card group flex items-center gap-4 !rounded-2xl p-4">{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="glass-card p-6 sm:p-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-fg">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-fg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-fg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="input resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={formState.status === 'loading'}
              className="btn-primary w-full"
            >
              {formState.status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            <div aria-live="polite" className="min-h-6 text-center text-sm sm:text-base">
              {formState.status === 'success' && (
                <motion.p className="font-medium text-success" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                  {formState.message || 'Message sent successfully!'}
                </motion.p>
              )}
              {formState.status === 'error' && (
                <motion.p className="font-medium text-error" role="alert" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                  {formState.message || 'Failed to send message. Please try again.'}
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
