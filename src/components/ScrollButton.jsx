import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show button when scrolled down a bit
      setIsVisible(scrollY > 100)
      
      // Check if at top
      setIsAtTop(scrollY < 50)
      
      // Check if at bottom (with some tolerance)
      setIsAtBottom(scrollY + windowHeight >= documentHeight - 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      left: 0,
      behavior: 'smooth'
    })
  }

  const handleClick = () => {
    if (isAtTop) {
      scrollToBottom()
    } else {
      scrollToTop()
    }
  }

  const getIcon = () => {
    if (isAtTop) return ChevronDown
    return ChevronUp
  }

  const getTooltip = () => {
    if (isAtTop) return 'Scroll to bottom'
    return 'Scroll to top'
  }

  const Icon = getIcon()

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group"
          style={{
            background: 'linear-gradient(135deg, #1E90FF 0%, #0066CC 100%)',
            boxShadow: '0 8px 32px rgba(30, 144, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          }}
          title={getTooltip()}
          aria-label={getTooltip()}
        >
          {/* Glow effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle, rgba(30, 144, 255, 0.4) 0%, transparent 70%)',
              filter: 'blur(8px)',
              transform: 'scale(1.5)'
            }}
          />
          
          {/* Icon */}
          <motion.div
            animate={{ 
              y: isAtTop ? [0, 2, 0] : [0, -2, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10"
          >
            <Icon className="w-6 h-6" />
          </motion.div>
          
          {/* Ripple effect on click */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white/20"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ 
              scale: 1.5, 
              opacity: [0, 0.3, 0] 
            }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollButton
