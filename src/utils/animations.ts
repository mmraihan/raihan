export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const cardHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 }
}

export const cardHoverSmall = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300 }
}

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
}

export const slideInLeft = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 }
}

export const slideInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 }
}

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
}

export const typewriter = {
  initial: { width: 0 },
  animate: { width: "auto" },
  transition: { duration: 2, ease: "easeInOut" }
}

export const glowPulse = {
  animate: {
    textShadow: [
      "0 0 10px rgba(0, 212, 255, 0.5)",
      "0 0 20px rgba(0, 212, 255, 0.8)",
      "0 0 10px rgba(0, 212, 255, 0.5)"
    ]
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

export const bounceIn = {
  initial: { scale: 0, rotate: -180 },
  animate: { scale: 1, rotate: 0 },
  transition: { 
    type: "spring", 
    stiffness: 260, 
    damping: 20,
    duration: 1
  }
} 