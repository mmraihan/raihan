'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { assetPath } from '@/utils/assetPath'
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasAutoOpened, setHasAutoOpened] = useState(false)
  const [isManualOpen, setIsManualOpen] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isAudioPrimedRef = useRef(false)
  const pendingPlayRef = useRef(false)
  
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `${getGreeting()}! I'm here to tell you about Mubasshir Raihan. What would you like to know about him?`,
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Prepare local audio asset for open notification
  useEffect(() => {
    // Try WAV first (locally generated), then MP3 fallback if present
    const candidates = [
      { src: assetPath('/sounds/assistant-open.wav'), type: 'audio/wav' },
      { src: assetPath('/sounds/assistant-open.mp3'), type: 'audio/mpeg' }
    ] as const

    const audio = new Audio()
    audio.preload = 'auto'
    audio.volume = 0.35

    let idx = 0
    const tryNext = () => {
      if (idx >= candidates.length) return
      const candidate = candidates[idx]
      idx += 1
      const support = audio.canPlayType(candidate.type)
      if (!support) {
        tryNext()
        return
      }
      audio.src = candidate.src
      // If the file 404s, move to next candidate
      const onError = () => {
        audio.removeEventListener('error', onError)
        tryNext()
      }
      audio.addEventListener('error', onError)
      // Kick off loading
      void audio.load()
    }

    tryNext()
    audioRef.current = audio

    // Aggressive audio priming on page load
    const primeAudio = async () => {
      if (!audioRef.current || isAudioPrimedRef.current) return
      try {
        // Try multiple methods to unlock audio
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
        if (AudioContextClass) {
          const audioContext = new AudioContextClass()
          if (audioContext.state === 'suspended') {
            await audioContext.resume()
          }
          // Create a silent sound to unlock
          const oscillator = audioContext.createOscillator()
          const gainNode = audioContext.createGain()
          oscillator.connect(gainNode)
          gainNode.connect(audioContext.destination)
          oscillator.frequency.setValueAtTime(440, audioContext.currentTime)
          gainNode.gain.setValueAtTime(0, audioContext.currentTime)
          oscillator.start(audioContext.currentTime)
          oscillator.stop(audioContext.currentTime + 0.01)
        }
        
        // Try to prime the main audio
        audioRef.current.muted = true
        await audioRef.current.play()
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        audioRef.current.muted = false
        isAudioPrimedRef.current = true
      } catch {
        // Will try again on user interaction
      }
    }

    // Try to prime immediately on page load
    setTimeout(primeAudio, 100)
    
    // Create a hidden button to unlock audio
    const createHiddenButton = () => {
      const button = document.createElement('button')
      button.style.position = 'fixed'
      button.style.top = '-1000px'
      button.style.left = '-1000px'
      button.style.width = '1px'
      button.style.height = '1px'
      button.style.opacity = '0'
      button.style.pointerEvents = 'none'
      button.style.border = 'none'
      button.style.background = 'transparent'
      
      button.addEventListener('click', () => {
        primeAudio()
      })
      
      document.body.appendChild(button)
      
      // Try to click it automatically
      setTimeout(() => {
        try {
          button.click()
        } catch {}
      }, 300)
      
      setTimeout(() => {
        try {
          button.click()
        } catch {}
      }, 800)
      
      setTimeout(() => {
        try {
          button.click()
        } catch {}
      }, 1500)
      
      // Clean up after 5 seconds
      setTimeout(() => {
        if (button.parentNode) {
          button.parentNode.removeChild(button)
        }
      }, 5000)
    }
    
    // Create hidden button after a short delay
    setTimeout(createHiddenButton, 100)

    // Also prime on any user interaction
    const primeOnInteraction = () => {
      if (!isAudioPrimedRef.current) {
        primeAudio()
      }
    }
    
    // Listen to multiple interaction types for better mobile support
    window.addEventListener('pointerdown', primeOnInteraction, { passive: true })
    window.addEventListener('keydown', primeOnInteraction, { passive: true })
    window.addEventListener('touchstart', primeOnInteraction, { passive: true })
    window.addEventListener('click', primeOnInteraction, { passive: true })
    window.addEventListener('scroll', primeOnInteraction, { passive: true })
    window.addEventListener('mousemove', primeOnInteraction, { passive: true })

    return () => {
      window.removeEventListener('pointerdown', primeOnInteraction)
      window.removeEventListener('keydown', primeOnInteraction)
      window.removeEventListener('touchstart', primeOnInteraction)
      window.removeEventListener('click', primeOnInteraction)
      window.removeEventListener('scroll', primeOnInteraction)
      window.removeEventListener('mousemove', primeOnInteraction)
    }
  }, [])


  const playOpenSound = useCallback((allowDeferred: boolean = true) => {
    const audio = audioRef.current
    if (!audio) return
    
    // Reset audio to beginning and play immediately
    audio.currentTime = 0
    
    // Only play if audio is primed (unlocked)
    if (isAudioPrimedRef.current) {
      try {
        const playPromise = audio.play()
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise.catch(() => {
            // Autoplay blocked - don't defer, just fail silently
          })
        }
      } catch {
        // Fail silently
      }
    } else if (allowDeferred) {
      // Only defer if audio is not primed and deferring is allowed
      pendingPlayRef.current = true
    }
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])


  // Auto-open after 3 seconds with sound (every page load) — desktop only;
  // on phones the window covers most of the screen, so wait for a tap
  useEffect(() => {
    if (!window.matchMedia('(min-width: 768px)').matches) return
    if (!hasAutoOpened && !isManualOpen) {
      const timer = setTimeout(() => {
        // Always play sound when assistant auto-opens
        
        // Force audio unlock and play sound immediately
        const unlockAndPlay = async () => {
          try {
            // Method 1: Create multiple audio contexts to force unlock
            const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
            if (AudioContextClass) {
              // Create multiple contexts to increase success rate
              const contexts = []
              for (let i = 0; i < 3; i++) {
                try {
                  const audioContext = new AudioContextClass()
                  if (audioContext.state === 'suspended') {
                    await audioContext.resume()
                  }
                  contexts.push(audioContext)
                } catch {}
              }
              
              // Use the first successful context
              if (contexts.length > 0) {
                const audioContext = contexts[0]
                const oscillator = audioContext.createOscillator()
                const gainNode = audioContext.createGain()
                
                oscillator.connect(gainNode)
                gainNode.connect(audioContext.destination)
                
                oscillator.frequency.setValueAtTime(440, audioContext.currentTime)
                gainNode.gain.setValueAtTime(0, audioContext.currentTime)
                
                oscillator.start(audioContext.currentTime)
                oscillator.stop(audioContext.currentTime + 0.01)
                
                // Try to play immediately and with delays
                playOpenSound(false)
                setTimeout(() => playOpenSound(false), 10)
                setTimeout(() => playOpenSound(false), 50)
              } else {
                playOpenSound(false)
              }
            } else {
              // Method 2: Direct audio play attempt
              playOpenSound(false)
            }
          } catch {
            // Method 3: Fallback - try direct play
            playOpenSound(false)
          }
        }
        
        // Execute unlock and play immediately
        unlockAndPlay()
        
        // Open assistant immediately after sound starts
        setIsOpen(true)
        setHasAutoOpened(true)
        
      }, 3000) // 3 seconds delay

      return () => clearTimeout(timer)
    }
  }, [hasAutoOpened, isManualOpen, playOpenSound])

  const personalInfo = {
    name: "Md. Mubasshir Raihan",
    title: "Senior Software Engineer & Full Stack Developer",
    location: "Chittagong, Bangladesh",
    experience: "4+ years",
    skills: [
      "ASP.NET Core Web API (C#)",
      "Entity Framework Core",
      "MS SQL Server",
      "FastAPI (Python)",
      "Angular",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "PostgreSQL",
      "Architecture & System Design",
      "RESTful APIs",
      "ORMs & Data Modeling",
      "Claude (Anthropic)"
    ],
    education: "Computer Science & Engineering",
    interests: ["Web Development", "Machine Learning", "Open Source", "Tech Blogging"],
    projects: "Multiple full-stack applications including e-commerce, task management, and social platforms",
    availability: "Open to new opportunities and collaborations"
  }

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    // Handle inappropriate or off-topic questions
    if (message.includes('gay') || message.includes('sexual orientation') || message.includes('sexuality')) {
      return `Let's keep things professional and respectful. Please avoid offensive language. I’m happy to help with questions about Mubasshir Raihan’s work, skills, experience, or projects.`
    }

    // Handle inappropriate or off-topic questions
    if (message.includes('girlfriend') || message.includes('gf') || message.includes('wife') || message.includes('marriage') || 
        message.includes('relationship') || message.includes('dating') || message.includes('personal life') ||
        message.includes('private') || message.includes('family') || message.includes('age') ||
        message.includes('salary') || message.includes('income') || message.includes('money') ||
        message.includes('phone') || message.includes('address') || message.includes('home') ||
        message.includes('social media') || message.includes('instagram') || message.includes('facebook') ||
        message.includes('whatsapp') || message.includes('snapchat') || message.includes('tiktok') ||
        message.includes('bf') || message.includes('boyfriend') || message.includes('partner') ||
        message.includes('spouse') || message.includes('husband') || message.includes('single') ||
        message.includes('married') || message.includes('divorced') || message.includes('kids') ||
        message.includes('children') || message.includes('baby') || message.includes('child')) {
      return `Please note: I can only discuss Mubasshir Raihan’s work, skills, experience, projects, and education.`
    }
    
    if (message.includes('name') || message.includes('who are you')) {
      return `Hi there! I'm here to tell you about ${personalInfo.name}. He's a ${personalInfo.title} based in ${personalInfo.location} with ${personalInfo.experience} of experience in software development. What would you like to know about him?`
    }
    
    // General "about him" inquiries
    if (
      message.includes('tell me about him') ||
      message.includes('about him') ||
      message.includes('more about him') ||
      message.includes('about him more') ||
      message.includes('about mubasshir') ||
      message.includes('about raihan') ||
      message.includes('who is he')
    ) {
      return `He's from Chittagong, Bangladesh, graduated from East Delta University. He loves coding and exploring new things. Would you like to hear about his skills, experience, or projects?`
    }

    if (
      message.includes('skill') ||
      message.includes('skills') ||
      message.includes('skils') ||
      message.includes('kills') ||
      message.includes('technology') ||
      message.includes('tech') ||
      message.includes('stack') ||
      message.includes('tech stack') ||
      message.includes('tools')
    ) {
      return `He’s especially strong on the backend—ASP.NET Core Web API (C#) with EF Core and MS SQL Server, plus FastAPI in Python. On the frontend, he works with Angular, React, and Next.js. He focuses on clean architecture, system design, RESTful APIs, and solid data modeling.`
    }
    
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return `Mubasshir Raihan has ${personalInfo.experience} of professional experience in full-stack development. He's worked on various projects including ${personalInfo.projects}. He's passionate about creating efficient and user-friendly applications.`
    }
    
    if (message.includes('education') || message.includes('degree') || message.includes('study')) {
      return `Mubasshir Raihan has a degree in ${personalInfo.education}. He's passionate about continuous learning and staying updated with the latest technologies. He believes in lifelong learning and always strives to improve his skills.`
    }
    
    if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
      return `Mubasshir Raihan has built several impressive projects including e-commerce websites, task management apps, and social platforms. You can check out his projects in the Projects section of this website! Each project showcases his skills and creativity.`
    }

    // Resume / CV
    if (message.includes('resume') || message.includes('cv') || message.includes('curriculum vitae')) {
      return `You can view his resume on the Resume page and download it from there. For opportunities or questions, please use the Contact page.`
    }

    // Social / Profiles without exposing direct links
    if (message.includes('github') || message.includes('linkedin') || message.includes('twitter') || message.includes('social')) {
      return `For profiles and links, please check the Contact page or the site footer.`
    }

    // Scheduling / Interview
    if (message.includes('interview') || message.includes('schedule') || message.includes('meeting') || message.includes('call')) {
      return `To schedule an interview or meeting, please reach out via the Contact page.`
    }
    
    if (message.includes('contact') || message.includes('hire') || message.includes('available')) {
      return `Great news! Mubasshir Raihan is ${personalInfo.availability.toLowerCase()}. You can reach out to him through the Contact page on this website, or connect with him on LinkedIn, GitHub, or Twitter. He's always excited to discuss new opportunities!`
    }
    
    if (message.includes('location') || message.includes('where') || message.includes('based')) {
      return `Mubasshir Raihan is based in ${personalInfo.location}. He's open to remote work opportunities and collaborations worldwide. He loves working with international teams and is comfortable with different time zones.`
    }
    
    if (message.includes('interest') || message.includes('hobby') || message.includes('passion')) {
      return `Mubasshir Raihan is passionate about ${personalInfo.interests.join(', ')}. He loves exploring new technologies and sharing knowledge through blogging. He's always curious about the latest trends in web development and enjoys helping others learn.`
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return `Hello! Nice to meet you! I'm here to tell you about Mubasshir Raihan. What would you like to know about him?`
    }
    
    if (message.includes('help') || message.includes('what can you do')) {
      return `I can tell you about Mubasshir Raihan's skills, experience, projects, education, location, and interests. Just ask me anything about him! I'm here to help you get to know him better.`
    }
    
    // Handle unclear or inappropriate questions
    if (message.includes('fuck') || message.includes('shit') || message.includes('damn') || 
        message.includes('hate') || message.includes('stupid') || message.includes('idiot') ||
        message.includes('bitch') || message.includes('ass') || message.includes('hell')) {
      return `Let's keep things professional and respectful. Please avoid offensive language. I’m happy to help with questions about Mubasshir Raihan’s work, skills, experience, or projects.`
    }
    
    // Default response for irrelevant/uncategorized queries
    return `Please note: I can only discuss Mubasshir Raihan’s work, skills, experience, projects, and education.`
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputText)
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const closeChat = () => {
    setIsOpen(false)
    // Ensure no sound plays on close
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeChat()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        type="button"
        onClick={() => {
          const willOpen = !isOpen
          setIsOpen(willOpen)
          if (!isOpen && !isManualOpen) {
            setIsManualOpen(true)
          }
          // Play sound when manually opening
          if (willOpen) {
            playOpenSound(false)
          }
        }}
        aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'}
        aria-expanded={isOpen}
        aria-controls="chatbot-window"
        className="glow-primary fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-on-primary shadow-lg transition-[background-color,box-shadow] duration-300 hover:bg-primary-hover hover:shadow-[var(--shadow-btn-hover)] sm:bottom-6 sm:right-6"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" aria-hidden="true" /> : <ChatBubbleLeftRightIcon className="h-6 w-6" aria-hidden="true" />}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chatbot-window"
            role="dialog"
            aria-label="AI Assistant"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-22 right-4 z-40 flex h-[min(28rem,calc(100dvh-9rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-[20px] border border-border bg-surface/95 shadow-2xl backdrop-blur-[20px] sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                  <span className="text-sm font-bold text-on-primary">MR</span>
                </div>
                <div>
                  <h2 className="text-base font-bold leading-tight">AI Assistant</h2>
                  <p className="flex items-center gap-1.5 text-xs font-medium text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                    Online
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeChat}
                aria-label="Close AI assistant"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors hover:bg-glass hover:text-fg"
              >
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                      message.isUser
                        ? 'rounded-br-md bg-primary text-on-primary'
                        : 'rounded-bl-md border border-border bg-glass text-fg'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="mt-1 font-mono text-[10px] opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="rounded-2xl rounded-bl-md border border-border bg-glass px-4 py-3" aria-label="Assistant is typing">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-primary/70"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-primary/70" style={{ animationDelay: '0.1s' }}></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-primary/70" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-3">
              <div className="flex items-center gap-2">
                <label htmlFor="chatbot-input" className="sr-only">
                  Ask about Raihan
                </label>
                <input
                  id="chatbot-input"
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about Raihan..."
                  className="input min-w-0 flex-1 !rounded-xl !py-2.5"
                />
                <button
                  type="button"
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  aria-label="Send message"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <PaperAirplaneIcon className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
