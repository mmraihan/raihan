'use client'

import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaMedium, FaDiscord } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations'
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
          
          // If EmailJS fails, try the API route as fallback
          console.log('EmailJS failed, falling back to API route...')
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })

          if (!response.ok) {
            throw new Error('Both EmailJS and API route failed')
          }
          
          console.log('API route succeeded as fallback')
        }
      } else {
        // Fallback to API route
        console.log('EmailJS not configured, using API route...')
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (!response.ok) {
          throw new Error('Failed to send message via API')
        }
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

  return (
    <div className="container max-w-7xl mx-auto py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center"
        {...fadeInUp}
      >
        Contact Me
      </motion.h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Contact Information */}
        <motion.div 
          className="space-y-6 sm:space-y-8"
          {...slideInLeft}
        >
          <motion.div {...fadeInUp}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Get in Touch</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-3 sm:space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              variants={fadeInUp}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base">Email</h3>
                <a href="mailto:mub.raihan7@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm sm:text-base break-all">
                  mub.raihan7@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              variants={fadeInUp}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaDiscord className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base">Discord</h3>
                <a 
                  href="https://discord.com/users/mmraihan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm sm:text-base break-all"
                >
                  mmraihan
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              variants={fadeInUp}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMedium className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base">Medium</h3>
                <a 
                  href="https://medium.com/@mub.raihan7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm sm:text-base break-all"
                >
                  @mub.raihan7
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              variants={fadeInUp}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base">Location</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Chittagong, Bangladesh</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-4 sm:p-6 rounded-lg shadow-md"
          {...slideInRight}
        >
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-4 sm:space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base resize-none"
              />
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={formState.status === 'loading'}
              className="w-full btn btn-primary py-3 sm:py-4 text-sm sm:text-base font-medium touch-target"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {formState.status === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            {formState.status === 'success' && (
              <motion.p 
                className="text-green-500 text-center text-sm sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {formState.message || 'Message sent successfully!'}
              </motion.p>
            )}
            
            {formState.status === 'error' && (
              <motion.p 
                className="text-red-500 text-center text-sm sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {formState.message || 'Failed to send message. Please try again.'}
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
} 