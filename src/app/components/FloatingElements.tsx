'use client'

import { motion } from 'framer-motion';
import { useTheme } from '@/app/context/ThemeContext';

const DynamicProfessionalElement = ({ 
  className, 
  children,
  animationType = "dynamic",
  delay = 0
}: { 
  className: string; 
  children: React.ReactNode;
  animationType?: "dynamic" | "orbit" | "pulse" | "wave" | "hover" | "blueSpiral" | "deepFloat" | "blueWave" | "advancedGlow" | "particle" | "ultraGlow" | "deepSpace" | "nebula" | "hyperMotion" | "galaxyDrift" | "cosmicWave" | "quantumPulse";
  delay?: number;
}) => {
  const getAnimation = () => {
    switch (animationType) {
      case "orbit":
        return {
          y: [0, -20, 0, 20, 0],
          x: [0, 15, 20, 5, 0],
          rotate: [0, 90, 180, 270, 360],
          transition: {
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      case "pulse":
        return {
          scale: [1, 1.15, 0.9, 1],
          rotate: [0, 2, -1, 0],
          opacity: [0.2, 0.35, 0.15, 0.2],
          transition: {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      case "wave":
        return {
          y: [0, -12, -5, 8, 3, 0],
          x: [0, 6, -8, 10, -4, 0],
          rotate: [0, 1, -0.5, 1.5, -0.8, 0],
          skewX: [0, 1, -0.5, 0.8, -0.3, 0],
          transition: {
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      case "hover":
        return {
          y: [0, -8, 5, 0],
          x: [0, 4, -3, 0],
          rotate: [0, 1, -0.5, 0],
          scale: [1, 1.02, 0.98, 1],
          transition: {
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      case "blueSpiral":
        return {
          y: [0, -25, -10, 15, 20, 0],
          x: [0, 20, 35, 25, -5, 0],
          rotate: [0, 72, 144, 216, 288, 360],
          scale: [1, 1.1, 0.95, 1.08, 0.92, 1],
          transition: {
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      case "deepFloat":
        return {
          y: [0, -20, -5, 18, 0],
          x: [0, 15, -12, 22, 0],
          rotateZ: [0, 5, -3, 7, 0],
          rotateY: [0, 10, -5, 15, 0],
          filter: ["hue-rotate(0deg) brightness(1)", "hue-rotate(90deg) brightness(1.2)", "hue-rotate(180deg) brightness(0.9)", "hue-rotate(270deg) brightness(1.1)", "hue-rotate(360deg) brightness(1)"],
          transition: {
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      case "blueWave":
        return {
          y: [0, -15, -8, 12, 5, -10, 0],
          x: [0, 8, -12, 18, -6, 10, 0],
          rotate: [0, 2, -1, 3, -0.8, 1.5, 0],
          skewX: [0, 1, -0.5, 1.5, -0.3, 0.8, 0],
          skewY: [0, 0.5, -0.3, 0.8, -0.2, 0.4, 0],
          transition: {
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      case "advancedGlow":
        return {
          opacity: [0.12, 0.25, 0.35, 0.2, 0.12],
          scale: [1, 1.05, 1.1, 1.03, 1],
          filter: [
            "blur(3px) brightness(1) saturate(1.2) hue-rotate(0deg)",
            "blur(5px) brightness(1.4) saturate(1.5) hue-rotate(30deg)",
            "blur(7px) brightness(1.6) saturate(1.8) hue-rotate(60deg)",
            "blur(4px) brightness(1.2) saturate(1.3) hue-rotate(90deg)",
            "blur(3px) brightness(1) saturate(1.2) hue-rotate(0deg)"
          ],
          transition: {
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      case "particle":
        return {
          y: [0, -100, -200],
          x: [0, 50, 100],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 0.8],
          opacity: [0, 0.6, 0],
          transition: {
            duration: 12,
            repeat: Infinity,
            ease: "easeOut",
            delay: delay,
          }
        };
      case "ultraGlow":
        return {
          opacity: [0.05, 0.15, 0.08, 0.12, 0.05],
          scale: [1, 1.1, 0.9, 1.05, 1],
          filter: [
            "blur(8px) brightness(0.8) saturate(2) hue-rotate(0deg)",
            "blur(12px) brightness(1.2) saturate(2.5) hue-rotate(60deg)",
            "blur(15px) brightness(0.6) saturate(3) hue-rotate(120deg)",
            "blur(10px) brightness(1) saturate(2.2) hue-rotate(180deg)",
            "blur(8px) brightness(0.8) saturate(2) hue-rotate(0deg)"
          ],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      case "deepSpace":
        return {
          y: [0, -40, -20, 25, 10, 0],
          x: [0, 30, -25, 40, -15, 0],
          rotateX: [0, 10, -5, 15, -8, 0],
          rotateY: [0, 15, -10, 20, -12, 0],
          rotateZ: [0, 45, 90, 180, 270, 360],
          filter: [
            "brightness(0.8) contrast(1.2)",
            "brightness(1.1) contrast(1.5)",
            "brightness(0.9) contrast(1.8)",
            "brightness(1.3) contrast(1.3)",
            "brightness(0.7) contrast(1.6)",
            "brightness(0.8) contrast(1.2)"
          ],
          transition: {
            duration: 36,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      case "nebula":
        return {
          opacity: [0.06, 0.12, 0.08, 0.1, 0.06],
          filter: [
            "hue-rotate(0deg) saturate(1.5) brightness(0.8)",
            "hue-rotate(90deg) saturate(2) brightness(1.1)",
            "hue-rotate(180deg) saturate(2.5) brightness(0.9)",
            "hue-rotate(270deg) saturate(1.8) brightness(1.2)",
            "hue-rotate(360deg) saturate(1.5) brightness(0.8)"
          ],
          backgroundPosition: ["0% 50%", "25% 75%", "50% 25%", "75% 100%", "100% 50%"],
          transition: {
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      case "hyperMotion":
        return {
          y: [0, -40, 70, -20, 90, 0],
          x: [0, 80, -60, 100, -40, 0],
          rotateX: [0, 45, -30, 60, -45, 0],
          rotateY: [0, 90, 180, 270, 360, 0],
          scale: [1, 1.5, 0.8, 1.3, 0.9, 1],
          opacity: [0.2, 0.7, 0.4, 0.8, 0.3, 0.2],
          filter: [
            "hue-rotate(0deg) saturate(100%) contrast(1) brightness(1)",
            "hue-rotate(72deg) saturate(150%) contrast(1.2) brightness(1.3)",
            "hue-rotate(144deg) saturate(80%) contrast(0.8) brightness(0.9)",
            "hue-rotate(216deg) saturate(200%) contrast(1.5) brightness(1.4)",
            "hue-rotate(288deg) saturate(120%) contrast(0.9) brightness(1.1)",
            "hue-rotate(360deg) saturate(100%) contrast(1) brightness(1)"
          ],
          transition: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      case "galaxyDrift":
        return {
          rotateX: [0, 120, 240, 360],
          rotateY: [0, 120, 240, 360],
          rotateZ: [0, 120, 240, 360],
          scale: [1, 1.4, 0.7, 1],
          opacity: [0.15, 0.6, 0.3, 0.15],
          filter: [
            "hue-rotate(0deg) brightness(0.9) blur(0px) saturate(100%)",
            "hue-rotate(120deg) brightness(1.3) blur(4px) saturate(180%)",
            "hue-rotate(240deg) brightness(0.7) blur(2px) saturate(60%)",
            "hue-rotate(360deg) brightness(0.9) blur(0px) saturate(100%)"
          ],
          transition: {
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      case "cosmicWave":
        return {
          x: [0, 120, -90, 200, 0],
          y: [0, -80, 150, -50, 0],
          scale: [1, 1.8, 0.6, 1.4, 1],
          skewX: [0, 15, -20, 30, 0],
          skewY: [0, -10, 25, -15, 0],
          opacity: [0.3, 0.9, 0.5, 0.8, 0.3],
          filter: [
            "hue-rotate(0deg) contrast(1) blur(0px)",
            "hue-rotate(90deg) contrast(1.6) blur(5px)",
            "hue-rotate(180deg) contrast(0.8) blur(2px)",
            "hue-rotate(270deg) contrast(1.3) blur(7px)",
            "hue-rotate(360deg) contrast(1) blur(0px)"
          ],
          transition: {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      case "quantumPulse":
        return {
          scale: [1, 2.5, 0.8, 3.2, 1.2, 1],
          rotate: [0, 72, 144, 216, 288, 360],
          opacity: [0.25, 0.8, 0.4, 0.9, 0.6, 0.25],
          filter: [
            "hue-rotate(0deg) brightness(1)",
            "hue-rotate(72deg) brightness(1.5)",
            "hue-rotate(144deg) brightness(0.8)",
            "hue-rotate(216deg) brightness(1.8)",
            "hue-rotate(288deg) brightness(1.2)",
            "hue-rotate(360deg) brightness(1)"
          ],
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(147, 51, 234, 0.2)",
            "0 0 60px rgba(59, 130, 246, 0.8), 0 0 120px rgba(147, 51, 234, 0.6)",
            "0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(147, 51, 234, 0.3)",
            "0 0 100px rgba(59, 130, 246, 1), 0 0 200px rgba(147, 51, 234, 0.8)",
            "0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(147, 51, 234, 0.4)",
            "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(147, 51, 234, 0.2)"
          ],
          transition: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
      default: // dynamic
        return {
          y: [0, -15, -8, 10, 0],
          x: [0, 8, -5, 12, 0],
          rotate: [0, 2, -1, 3, 0],
          scale: [1, 1.05, 0.98, 1.03, 1],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }
        };
    }
  };

  return (
    <motion.div 
      className={`${className} dynamic-professional-element`}
      animate={getAnimation()}
      whileHover={{
        scale: 1.1,
        opacity: 0.8,
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
};

export default function FloatingElements() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 640;
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Skip on small screens or when user prefers reduced motion */}
      {(isSmallScreen || prefersReduced) ? null : (
        <>
      {/* Light Mode Subtle Animations */}
      {!isDark && (
        <>
          <DynamicProfessionalElement className="absolute top-[20%] left-[10%]" animationType="pulse" delay={0}>
            <div className="w-16 h-16 relative opacity-60 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 to-teal-600/30 rounded-full border-4 border-green-400/50 shadow-2xl shadow-green-500/30 group-hover:shadow-green-500/50 transition-all duration-300"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-green-400/30 to-teal-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-green-300/25 to-teal-400/15 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </DynamicProfessionalElement>

          <DynamicProfessionalElement className="absolute top-[30%] right-[15%]" animationType="wave" delay={2}>
            <div className="w-12 h-12 relative opacity-50 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-green-600/25 transform rotate-45 rounded-lg border-3 border-teal-400/40 shadow-xl shadow-teal-500/25 group-hover:shadow-teal-500/40 transition-all duration-300"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-teal-400/20 to-green-500/15 transform rotate-45 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-teal-300/15 to-green-400/10 transform rotate-45 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </DynamicProfessionalElement>

          <DynamicProfessionalElement className="absolute bottom-[25%] left-[20%]" animationType="hover" delay={4}>
            <div className="w-14 h-14 relative opacity-45 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/25 to-teal-500/20 rounded-full border-3 border-green-300/40 shadow-xl shadow-green-400/25 group-hover:shadow-green-400/35 transition-all duration-300"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-green-300/20 to-teal-400/15 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-green-200/15 to-teal-300/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </DynamicProfessionalElement>

          <DynamicProfessionalElement className="absolute bottom-[30%] right-[12%]" animationType="orbit" delay={1}>
            <div className="w-10 h-10 relative opacity-40 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/18 transform rotate-12 rounded-md border-3 border-emerald-400/35 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/30 transition-all duration-300"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-emerald-400/15 to-green-400/12 transform rotate-12 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-emerald-300/10 to-green-300/8 transform rotate-12 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </DynamicProfessionalElement>

          {/* Light Mode Background Gradients - Much More Visible */}
          <motion.div 
            className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-green-300/25 via-teal-200/20 to-transparent rounded-full blur-2xl opacity-30"
            animate={{
              scale: [1, 1.2, 0.9, 1],
              opacity: [0.30, 0.50, 0.20, 0.30],
              x: [0, 20, -15, 0],
              y: [0, 15, -12, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gradient-radial from-teal-300/20 via-green-200/15 to-transparent rounded-full blur-2xl opacity-25"
            animate={{
              scale: [1.1, 0.9, 1.3, 1.1],
              opacity: [0.25, 0.40, 0.15, 0.25],
              x: [0, -25, 15, 0],
              y: [0, -20, 25, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8
            }}
          />

          {/* Additional Light Mode Floating Elements - Enhanced */}
          <motion.div 
            className="absolute top-1/2 left-1/4 w-[250px] h-[250px] bg-gradient-radial from-emerald-300/18 via-green-200/12 to-transparent rounded-full blur-xl opacity-20"
            animate={{
              scale: [1, 1.4, 0.8, 1],
              opacity: [0.20, 0.35, 0.12, 0.20],
              x: [0, 30, -20, 0],
              y: [0, -25, 30, 0]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />

          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-[220px] h-[220px] bg-gradient-radial from-green-400/15 via-teal-300/10 to-transparent rounded-full blur-xl opacity-18"
            animate={{
              scale: [1.3, 0.8, 1.5, 1.3],
              opacity: [0.18, 0.30, 0.10, 0.18],
              x: [0, -35, 25, 0],
              y: [0, 35, -30, 0]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 12
            }}
          />

          {/* Extra Visible Floating Elements */}
          <motion.div 
            className="absolute top-1/4 right-1/3 w-[180px] h-[180px] bg-gradient-radial from-teal-400/12 via-green-300/8 to-transparent rounded-full blur-lg opacity-15"
            animate={{
              scale: [1, 1.6, 0.7, 1],
              opacity: [0.15, 0.28, 0.08, 0.15],
              x: [0, 40, -25, 0],
              y: [0, -30, 35, 0]
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 18
            }}
          />

          <motion.div 
            className="absolute bottom-1/2 left-1/6 w-[160px] h-[160px] bg-gradient-radial from-green-500/10 via-emerald-400/6 to-transparent rounded-full blur-lg opacity-12"
            animate={{
              scale: [1.4, 0.9, 1.7, 1.4],
              opacity: [0.12, 0.25, 0.06, 0.12],
              x: [0, -40, 30, 0],
              y: [0, 40, -35, 0]
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 25
            }}
          />
        </>
      )}

      {/* Dark Mode Full Animations */}
      {isDark && (
        <>
          <DynamicProfessionalElement className="absolute top-[15%] left-[8%]" animationType="blueSpiral" delay={0}>
            <div className="w-16 h-16 relative opacity-30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/6 to-indigo-700/4 transform rotate-45 rounded-lg backdrop-blur-sm border border-blue-400/12 shadow-xl shadow-blue-500/15"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-500/4 to-indigo-600/3 transform rotate-45 rounded-md"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-300/6 to-indigo-200/3 transform rotate-45 rounded-sm"></div>
            </div>
          </DynamicProfessionalElement>

          <DynamicProfessionalElement className="absolute top-[25%] right-[12%]" animationType="deepFloat" delay={3}>
            <div className="w-12 h-12 relative opacity-28">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/7 to-blue-700/5 rounded-full backdrop-blur-sm border border-indigo-400/14 shadow-xl shadow-indigo-500/18"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-indigo-500/5 to-blue-600/4 rounded-full"></div>
          <div className="absolute inset-2 bg-gradient-to-br from-indigo-300/7 to-blue-200/4 rounded-full"></div>
        </div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute bottom-[30%] left-[15%]" animationType="advancedGlow" delay={7}>
        <div className="w-20 h-20 relative opacity-26">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/7 to-indigo-800/5 transform rotate-12 rounded-xl backdrop-blur-sm border border-blue-400/12 shadow-2xl shadow-blue-500/20"></div>
          <div className="absolute inset-3 bg-gradient-to-br from-blue-600/5 to-indigo-700/4 transform rotate-12 rounded-lg"></div>
          <div className="absolute inset-5 bg-gradient-to-br from-blue-300/8 to-indigo-200/4 transform rotate-12 rounded-md"></div>
        </div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute bottom-[20%] right-[10%]" animationType="blueWave" delay={2}>
        <div className="w-14 h-14 relative opacity-29">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/8 to-blue-800/6 transform -rotate-45 rounded-lg backdrop-blur-sm border border-indigo-400/15 shadow-xl shadow-indigo-500/18"></div>
          <div className="absolute inset-2 bg-gradient-to-br from-indigo-600/6 to-blue-700/4 transform -rotate-45 rounded-md"></div>
          <div className="absolute inset-3 bg-gradient-to-br from-indigo-300/8 to-blue-200/5 transform -rotate-45 rounded-sm"></div>
        </div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute top-[50%] left-[5%]" animationType="blueSpiral" delay={5}>
        <div className="w-10 h-10 relative opacity-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/9 to-indigo-900/7 rounded-full backdrop-blur-sm border border-blue-400/16 shadow-xl shadow-blue-500/22"></div>
          <div className="absolute inset-1 bg-gradient-to-br from-blue-700/7 to-indigo-800/5 rounded-full"></div>
          <div className="absolute inset-1.5 bg-gradient-to-br from-blue-300/10 to-indigo-200/6 rounded-full"></div>
        </div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute top-[60%] right-[8%]" animationType="deepFloat" delay={4}>
        <div className="w-18 h-18 relative opacity-27">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/8 to-blue-900/6 transform rotate-30 rounded-2xl backdrop-blur-sm border border-indigo-400/14 shadow-2xl shadow-indigo-500/20"></div>
          <div className="absolute inset-2 bg-gradient-to-br from-indigo-700/6 to-blue-800/4 transform rotate-30 rounded-xl"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-indigo-300/9 to-blue-200/5 transform rotate-30 rounded-lg"></div>
        </div>
      </DynamicProfessionalElement>

      {/* Dynamic Professional Accents */}
      <DynamicProfessionalElement className="absolute top-[35%] left-[25%]" animationType="pulse" delay={8}>
        <div className="w-6 h-6 bg-gradient-to-br from-blue-400/4 to-cyan-500/3 rounded-full backdrop-blur-sm border border-blue-400/6 opacity-18 shadow-md shadow-blue-400/8"></div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute bottom-[45%] right-[30%]" animationType="orbit" delay={6}>
        <div className="w-8 h-8 bg-gradient-to-br from-purple-400/3.5 to-pink-500/2.5 transform rotate-45 rounded-lg backdrop-blur-sm border border-purple-400/5 opacity-19 shadow-md shadow-purple-400/7"></div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute top-[70%] right-[25%]" animationType="wave" delay={9}>
        <div className="w-5 h-5 bg-gradient-to-br from-emerald-400/4.5 to-cyan-500/3.5 rounded-full backdrop-blur-sm border border-emerald-400/6 opacity-20 shadow-lg shadow-emerald-400/9"></div>
      </DynamicProfessionalElement>

      {/* Additional Dynamic Elements */}
      <DynamicProfessionalElement className="absolute top-[40%] right-[5%]" animationType="hover" delay={1}>
        <div className="w-7 h-7 bg-gradient-to-br from-indigo-400/4 to-violet-500/3 transform rotate-12 rounded-lg backdrop-blur-sm border border-indigo-400/6 opacity-17 shadow-md shadow-indigo-400/8"></div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute bottom-[55%] left-[3%]" animationType="dynamic" delay={11}>
        <div className="w-9 h-9 bg-gradient-to-br from-rose-400/3.5 to-orange-500/2.5 rounded-full backdrop-blur-sm border border-rose-400/5 opacity-16 shadow-lg shadow-rose-400/7"></div>
      </DynamicProfessionalElement>

      {/* Deep Blue Ambient Zones */}
      <motion.div 
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-blue-800/8 via-blue-900/4 to-transparent rounded-full blur-3xl opacity-12"
        animate={{
          scale: [1, 1.05, 0.98, 1.02, 1],
          opacity: [0.12, 0.18, 0.08, 0.15, 0.12],
          x: [0, 10, -8, 12, 0],
          y: [0, 8, -6, 10, 0],
          filter: [
            "hue-rotate(0deg) brightness(0.9)",
            "hue-rotate(20deg) brightness(1.1)",
            "hue-rotate(40deg) brightness(0.8)",
            "hue-rotate(60deg) brightness(1.0)",
            "hue-rotate(80deg) brightness(0.9)"
          ]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gradient-radial from-indigo-800/6 via-blue-950/3 to-transparent rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1.02, 0.95, 1.08, 0.98, 1.02],
          opacity: [0.10, 0.16, 0.06, 0.13, 0.10],
          x: [0, -12, 8, -10, 0],
          y: [0, -10, 12, -14, 0],
          filter: [
            "hue-rotate(0deg) brightness(1.0)",
            "hue-rotate(30deg) brightness(1.2)",
            "hue-rotate(60deg) brightness(0.8)",
            "hue-rotate(90deg) brightness(1.1)",
            "hue-rotate(120deg) brightness(0.9)"
          ]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
      />

      <motion.div 
        className="absolute top-1/2 left-1/3 w-[360px] h-[360px] bg-gradient-radial from-blue-800/3 via-indigo-900/1.5 to-transparent rounded-full blur-3xl opacity-14"
        animate={{
          scale: [1, 1.25, 0.8, 1.12, 1],
          opacity: [0.14, 0.22, 0.08, 0.18, 0.14],
          x: [0, -18, 25, -12, 0],
          y: [0, 30, -20, 28, 0],
          rotate: [0, 180, 360],
          filter: ["saturate(1)", "saturate(1.5)", "saturate(0.8)", "saturate(1.2)", "saturate(1)"]
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 12
        }}
      />

      <motion.div 
        className="absolute top-1/4 right-1/4 w-[340px] h-[340px] bg-gradient-radial from-indigo-800/3.5 via-blue-900/1.8 to-transparent rounded-full blur-3xl opacity-15"
        animate={{
          scale: [1.05, 1.22, 0.88, 1.1, 1.05],
          opacity: [0.15, 0.25, 0.09, 0.19, 0.15],
          x: [0, 22, -18, 28, 0],
          y: [0, -25, 15, -30, 0],
          rotate: [0, 240, 480, 720],
          filter: ["blur(3px)", "blur(5px)", "blur(2px)", "blur(4px)", "blur(3px)"]
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Additional Dynamic Blue Ambient Elements */}
      <motion.div 
        className="absolute bottom-1/4 left-1/6 w-[240px] h-[240px] bg-gradient-radial from-blue-800/2.5 via-indigo-900/1.2 to-transparent rounded-full blur-2xl opacity-13"
        animate={{
          scale: [1, 1.3, 0.75, 1.2, 1],
          opacity: [0.13, 0.20, 0.07, 0.17, 0.13],
          x: [0, 30, -22, 35, 0],
          y: [0, -18, 25, -28, 0],
          rotate: [0, 180, 360],
          filter: ["hue-rotate(0deg) brightness(1)", "hue-rotate(45deg) brightness(1.2)", "hue-rotate(90deg) brightness(0.9)", "hue-rotate(135deg) brightness(1.1)", "hue-rotate(180deg) brightness(1)"]
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 9
        }}
      />

      <motion.div 
        className="absolute top-3/4 right-1/6 w-[220px] h-[220px] bg-gradient-radial from-indigo-700/2.8 via-blue-800/1.4 to-transparent rounded-full blur-2xl opacity-14"
        animate={{
          scale: [1.15, 0.8, 1.35, 0.9, 1.15],
          opacity: [0.14, 0.22, 0.08, 0.18, 0.14],
          x: [0, -35, 15, -30, 0],
          y: [0, 22, -30, 25, 0],
          rotate: [0, -150, -300, -450, -600],
          filter: ["saturate(1) brightness(1)", "saturate(1.4) brightness(1.3)", "saturate(0.7) brightness(0.8)", "saturate(1.2) brightness(1.1)", "saturate(1) brightness(1)"]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 15
        }}
      />

      {/* Deep Blue Corner Accents */}
      <motion.div 
        className="absolute top-[10%] right-[5%] w-[160px] h-[160px] bg-gradient-radial from-blue-900/2 via-indigo-950/1 to-transparent rounded-full blur-xl opacity-11"
        animate={{
          scale: [1, 1.4, 0.7, 1.25, 1],
          opacity: [0.11, 0.18, 0.06, 0.15, 0.11],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 20
        }}
      />

      <motion.div 
        className="absolute bottom-[8%] left-[7%] w-[140px] h-[140px] bg-gradient-radial from-indigo-800/2.2 via-blue-900/1.1 to-transparent rounded-full blur-xl opacity-12"
        animate={{
          scale: [1.2, 0.75, 1.45, 0.85, 1.2],
          opacity: [0.12, 0.19, 0.07, 0.16, 0.12],
          rotate: [0, -120, -240, -360]
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 25
        }}
      />

      {/* Deep Blue Grid Pattern */}
      <div className="absolute inset-0 opacity-16">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.10) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.10) 1px, transparent 1px),
              linear-gradient(rgba(37, 99, 235, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 60px 60px, 120px 120px, 120px 120px',
            animation: 'gridShimmer 120s linear infinite'
          }}
        />
      </div>

      {/* Gentle Professional Grid Lines */}
      <motion.div 
        className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/3 to-transparent opacity-6"
        animate={{
          opacity: [0.06, 0.1, 0.06],
          scaleX: [0.98, 1.02, 0.98]
        }}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/2.5 to-transparent opacity-5"
        animate={{
          opacity: [0.05, 0.09, 0.05],
          scaleX: [1.01, 0.99, 1.01]
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 35
        }}
      />

      <motion.div 
        className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-blue-400/3.5 to-transparent opacity-7"
        animate={{
          opacity: [0.07, 0.11, 0.07],
          scaleY: [0.99, 1.01, 0.99]
        }}
        transition={{
          duration: 58,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 22
        }}
      />

      <motion.div 
        className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-emerald-400/2.8 to-transparent opacity-6"
        animate={{
          opacity: [0.06, 0.1, 0.06],
          scaleY: [1.01, 0.98, 1.01]
        }}
        transition={{
          duration: 62,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 40
        }}
      />

      {/* Visible Floating Elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <DynamicProfessionalElement 
          key={`grid-particle-${i}`}
          className={`absolute`} 
          animationType="blueSpiral" 
          delay={i * 3}
        >
          <div className="w-2 h-2 bg-gradient-to-br from-blue-500/25 to-purple-600/20 rounded-sm opacity-18 shadow-md shadow-blue-500/12 border border-blue-400/8"></div>
        </DynamicProfessionalElement>
      ))}

      {/* Visible Grid Nodes */}
      <DynamicProfessionalElement className="absolute top-[25%] left-[20%]" animationType="pulse" delay={0}>
        <div className="w-4 h-4 bg-gradient-to-br from-blue-600/20 to-slate-700/15 rounded-sm opacity-15 shadow-lg shadow-blue-600/10 border border-blue-500/12"></div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute bottom-[30%] right-[25%]" animationType="pulse" delay={3}>
        <div className="w-3 h-3 bg-gradient-to-br from-purple-600/22 to-slate-700/17 rounded-sm opacity-16 shadow-md shadow-purple-600/11 border border-purple-500/13"></div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute top-[55%] left-[15%]" animationType="pulse" delay={6}>
        <div className="w-3.5 h-3.5 bg-gradient-to-br from-indigo-600/21 to-slate-700/16 rounded-sm opacity-14 shadow-lg shadow-indigo-600/9 border border-indigo-500/11"></div>
      </DynamicProfessionalElement>

      {/* Ultra-Deep Nebula Zones */}
      <motion.div 
        className="absolute top-[30%] right-[15%] w-[120px] h-[120px] bg-gradient-radial from-slate-900/1 via-gray-950/0.5 to-transparent rounded-full blur-2xl opacity-4"
        animate={{
          scale: [1, 1.8, 0.6, 1.5, 1],
          opacity: [0.04, 0.08, 0.02, 0.06, 0.04],
          rotate: [0, 180, 360],
          filter: [
            "hue-rotate(0deg) saturate(2) brightness(0.4)",
            "hue-rotate(120deg) saturate(2.8) brightness(0.6)",
            "hue-rotate(240deg) saturate(2.2) brightness(0.3)",
            "hue-rotate(360deg) saturate(2.5) brightness(0.5)"
          ]
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 15
        }}
      />

      <motion.div 
        className="absolute bottom-[40%] left-[25%] w-[100px] h-[100px] bg-gradient-radial from-blue-950/0.8 via-slate-950/0.4 to-transparent rounded-full blur-xl opacity-3"
        animate={{
          scale: [1.2, 0.7, 1.6, 0.9, 1.2],
          opacity: [0.03, 0.07, 0.01, 0.05, 0.03],
          rotate: [0, -90, -180, -270, -360],
          filter: [
            "brightness(0.3) contrast(2) saturate(3)",
            "brightness(0.6) contrast(2.5) saturate(2.5)",
            "brightness(0.2) contrast(1.8) saturate(3.2)",
            "brightness(0.4) contrast(2.2) saturate(2.8)"
          ]
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 25
        }}
      />

      {/* Deep Blue High-Energy Animated Elements */}
      <DynamicProfessionalElement className="absolute top-[10%] left-[30%]" animationType="hyperMotion" delay={0}>
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400/45 to-blue-700/35 rounded-lg opacity-55 shadow-2xl shadow-blue-400/40 border border-blue-300/30"></div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute top-[40%] right-[20%]" animationType="galaxyDrift" delay={2}>
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-400/50 to-blue-800/40 rounded-full opacity-60 shadow-2xl shadow-indigo-400/45 border border-indigo-300/35"></div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute bottom-[20%] left-[40%]" animationType="cosmicWave" delay={4}>
        <div className="w-6 h-6 bg-gradient-to-br from-cyan-400/55 to-blue-600/45 rounded-sm opacity-65 shadow-2xl shadow-cyan-400/50 border border-cyan-300/40 transform rotate-45"></div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute top-[60%] left-[70%]" animationType="quantumPulse" delay={1}>
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500/60 to-indigo-700/50 rounded-full opacity-70 shadow-2xl shadow-blue-500/55 border border-blue-400/45"></div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute bottom-[50%] right-[10%]" animationType="hyperMotion" delay={6}>
        <div className="w-14 h-14 bg-gradient-to-br from-sky-400/50 to-blue-600/40 rounded-lg opacity-58 shadow-2xl shadow-sky-400/45 border border-sky-300/35 transform rotate-12"></div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute top-[30%] left-[60%]" animationType="galaxyDrift" delay={8}>
        <div className="w-7 h-7 bg-gradient-to-br from-blue-300/65 to-blue-800/55 rounded-md opacity-68 shadow-2xl shadow-blue-300/50 border border-blue-200/40"></div>
      </DynamicProfessionalElement>

      {/* Additional Deep Blue Cosmic Elements */}
      <DynamicProfessionalElement className="absolute bottom-[70%] left-[20%]" animationType="cosmicWave" delay={3}>
        <div className="w-16 h-4 bg-gradient-to-r from-blue-400/40 to-blue-600/30 rounded-full opacity-52 shadow-xl shadow-blue-400/35 border border-blue-300/25"></div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute top-[80%] right-[30%]" animationType="quantumPulse" delay={5}>
        <div className="w-5 h-12 bg-gradient-to-b from-blue-400/70 to-indigo-700/60 rounded-lg opacity-75 shadow-2xl shadow-blue-400/60 border border-blue-300/50"></div>
      </DynamicProfessionalElement>

      <DynamicProfessionalElement className="absolute bottom-[15%] right-[60%]" animationType="hyperMotion" delay={7}>
        <div className="w-9 h-9 bg-gradient-to-br from-cyan-400/55 to-blue-700/45 rounded-full opacity-62 shadow-2xl shadow-cyan-400/48 border border-cyan-300/38 transform -rotate-45"></div>
      </DynamicProfessionalElement>
        </>
      )}
        </>
      )}
    </div>
  );
}