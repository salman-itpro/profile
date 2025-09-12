import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download, Sun, Moon } from 'lucide-react'
import { useDarkMode } from '../contexts/DarkModeContext'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    // Instant scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl shadow-2xl border-b border-white/20 dark:border-gray-700/30 nav-blur-enhanced' 
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 cursor-pointer focus:outline-none rounded-lg p-1 transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Go to top of page"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Salman Ahmed" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-xl gradient-text">Salman Ahmed</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black dark:text-white hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button and Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden ${
            scrolled 
              ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-b-2xl shadow-2xl border-b border-white/20 dark:border-gray-700/30 nav-blur-enhanced' 
              : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-b-2xl shadow-lg'
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-black dark:text-white hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="block mx-4 mt-4 p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out text-center flex items-center justify-center space-x-2"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-4 bg-primary-600 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-700 transition-colors duration-200 text-center flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
