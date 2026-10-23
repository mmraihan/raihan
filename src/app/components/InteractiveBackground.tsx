'use client'

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const InteractiveParticle = ({ 
  x, 
  y, 
  size, 
  color, 
  delay = 0 
}: { 
  x: number; 
  y: number; 
  size: number; 
  color: string; 
  delay?: number;
}) => {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: color,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0],
        y: [0, -50, -100],
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
    />
  );
};

const InteractiveLine = ({ 
  startX, 
  startY, 
  endX, 
  endY, 
  color, 
  delay = 0 
}: { 
  startX: number; 
  startY: number; 
  endX: number; 
  endY: number; 
  color: string; 
  delay?: number;
}) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        width: `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}%`,
        height: '2px',
        background: color,
        transformOrigin: '0 50%',
        transform: `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`,
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{
        scaleX: [0, 1, 0],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    delay: number;
  }>>([]);

  // Throttle mousemove handler to ~60ms to reduce layout work
  useEffect(() => {
    let last = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - last < 60) return;
      last = now;
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Respect prefers-reduced-motion by generating fewer/no particles
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReduced = media.matches;
    const isSmall = window.innerWidth < 640;
    const baseCount = isReduced ? 0 : 15;
    const scaledCount = isSmall ? Math.floor(baseCount * 0.4) : baseCount;
    const newParticles = Array.from({ length: scaledCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: `rgba(0, 212, 255, ${(Math.random() * 0.4 + 0.3).toFixed(2)})`,
      delay: Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Interactive glow that follows mouse */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{
          background: 'rgba(0, 212, 255, 0.3)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
        }}
        animate={
          typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? { opacity: 0.15 }
            : { scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <InteractiveParticle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          size={particle.size}
          color={particle.color}
          delay={particle.delay}
        />
      ))}

      {/* Interactive lines */}
      <InteractiveLine
        startX={20}
        startY={30}
        endX={80}
        endY={70}
        color="rgba(0, 212, 255, 0.3)"
        delay={1}
      />
      <InteractiveLine
        startX={70}
        startY={20}
        endX={30}
        endY={80}
        color="rgba(0, 212, 255, 0.2)"
        delay={2}
      />

      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary/20 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-primary/20 rounded-full"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating code symbols */}
      <motion.div
        className="absolute top-1/3 right-1/3 text-primary/30 text-2xl font-mono"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {'</>'}
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3 text-primary/30 text-xl font-mono"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        {'{}'}
      </motion.div>
    </div>
  );
}
